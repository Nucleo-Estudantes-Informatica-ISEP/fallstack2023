import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { storage } from "@/lib/firebaseAdmin";
import config from "@/config";

const schema = z.object({
  contentType: z.enum(["image/png", "image/jpeg", "application/pdf"]),
  target: z.enum(["profile", "cv"]),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { contentType, target } = parsed.data;
  const targetCfg = config.uploads[target];

  // check if the file type is allowed for the target
  if (!targetCfg.types.includes(contentType))
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });

  // generate a unique filename
  const id = uuidv4();
  const filename = `uploaded/${target}/${id}`;

  // uploaded files go to the uploaded folder
  // this folder should have a lifecycle rule to delete files older than 1 day

  const maxSize = targetCfg.maxSize;

  // https://cloud.google.com/storage/docs/json_api/v1/parameters#xgoogcontentlengthrange
  // the client will need to send this headers
  const headers = {
    "X-Goog-Content-Length-Range": `1,${maxSize}`, // sign url with file size limit
  };

  const expires = Date.now() + 5 * 60 * 1000; // 5 minutes

  // generate a signed url so that the client can upload the file directly to the bucket
  // https://cloud.google.com/storage/docs/samples/storage-generate-upload-signed-url-v4
  const [url] = await storage.bucket().file(filename).getSignedUrl({
    action: "write",
    version: "v4",
    expires,
    contentType, // restrict file type
    extensionHeaders: headers,
  });

  return NextResponse.json({
    id,
    contentType,
    target,
    maxSize,
    expires: new Date(expires),
    url,
    headers,
  });
}
