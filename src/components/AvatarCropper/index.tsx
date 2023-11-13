"use client";

import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import Cropper, { Area, Point } from "react-easy-crop";
import { MdFileUpload as UploadIcon } from "react-icons/md";

import { resizeImage } from "@/utils/canvas";
import { readFile } from "@/utils/files";

interface AvatarCropperProps {
  imageSrc: string | null;
  setImageSrc: Dispatch<SetStateAction<string | null>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
}

const AvatarCropper: FunctionComponent<AvatarCropperProps> = ({
  imageSrc,
  setImageSrc,
  setCroppedAreaPixels,
}) => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<number>(1);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [setCroppedAreaPixels]
  );

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const read = await readFile(file);

      // needs resize to avoid crop issues
      const imageDataUrl = await resizeImage(read, 325);

      setImageSrc(imageDataUrl);
    }
  };

  return imageSrc ? (
    <div className="relative h-72 md:h-80">
      <Cropper
        image={imageSrc}
        crop={crop}
        cropShape="round"
        zoom={zoom}
        aspect={1}
        showGrid={false}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        classes={{
          cropAreaClassName: "!border-primary",
          containerClassName: "rounded-lg",
        }}
        style={{
          mediaStyle: {
            width: "100%",
            objectFit: "scale-down",
          },
        }}
      />
    </div>
  ) : (
    <div className="flex w-full flex-row items-center justify-center text-slate-700">
      <input
        type="file"
        name="avatar"
        id="avatar"
        accept="image/*"
        hidden
        className={`rounded-md border border-gray-400 bg-slate-200 px-4 py-1
         text-black focus:border-primary focus:ring-0 disabled:text-gray-600`}
        onChange={onFileChange}
      />
      <label
        className={
          "flex flex-1 cursor-pointer flex-row items-center rounded-md border border-gray-400 bg-slate-200 px-4 py-1 md:text-lg"
        }
        htmlFor="avatar"
      >
        <span className="mr-2 min-w-min text-lg md:text-xl">
          <UploadIcon />
        </span>
        <span className="w-52 truncate">Insere uma imagem.</span>
      </label>
    </div>
  );
};
export default AvatarCropper;
