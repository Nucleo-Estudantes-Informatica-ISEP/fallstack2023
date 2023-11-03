import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { storage } from "@/lib/firebaseAdmin";
import config from "@/config";

const schema = z.object({
  type: z.enum(["image/png", "image/jpeg", "application/pdf"]),
  target: z.enum(["profile", "cv"]),
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  const { type, target } = parsed.data;
  const targetCfg = config.uploads[target];

  // check if the file type is allowed for the target
  if (!targetCfg.types.includes(type))
    return NextResponse.json({ error: "Invalid file type" }, { status: 400 });

  // generate a unique filename
  const id = uuidv4();
  const filename = `${target}/${id}`;

  const maxSize = targetCfg.maxSize;

  // https://cloud.google.com/storage/docs/json_api/v1/parameters#xgoogcontentlengthrange
  // the client will need to send this headers
  const extensionHeaders = {
    "X-Goog-Content-Length-Range": `1,${maxSize}`, // sign url with file size limit
  };

  // generate a signed url so that the client can upload the file directly to the bucket
  // https://cloud.google.com/storage/docs/samples/storage-generate-upload-signed-url-v4
  const [url] = await storage
    .bucket()
    .file(filename)
    .getSignedUrl({
      action: "write",
      version: "v4",
      expires: Date.now() + 10 * 60 * 1000, // 10 minutes
      contentType: type, // restrict file types
      extensionHeaders,
    });

  return NextResponse.json({ id, url, extensionHeaders });
}
