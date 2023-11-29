import React, { useState } from "react";
import { toast } from "react-toastify";
import { useZxing } from "react-zxing";

interface QRCodeScannerProps {
  handleScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ handleScan }) => {
  const [loading, setLoading] = useState(true);

  const { ref } = useZxing({
    onDecodeResult(result) {
      const decodedText = result.getText();

      if (!decodedText) {
        toast.error(
          "Ocorreu um erro a obter o perfil do estudante a partir do QR Code..."
        );
        return;
      }

      // callback
      handleScan(decodedText);
    },
  });

  React.useEffect(() => {
    let stream: MediaStream;
    const checkCameraPermission = async () => {
      try {
        // Request camera access
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { exact: "environment" } },
        });

        // Access granted, set the video stream as the source for the video element
        if (ref.current) {
          ref.current.srcObject = stream;
        }
      } catch (error) {
        // didn't place anything here because, on mobile, if the user already gave permissions in the past,
        // it will still throw an error, even tho the camera opens and works as exepected
      }
      setLoading(false);
    };

    checkCameraPermission();
    return () => {
      if (stream)
        stream.getTracks().forEach(function (track) {
          track.stop();
        });
    };
  }, [ref]);

  return (
    <div className="flex items-center">
      {loading && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 animate-spin rounded-full border-y-2 border-r-2 border-blue-500"></div>
            <p className="mt-2 text-white">A ligar a sua câmera...</p>
          </div>
        </div>
      )}
      <video
        ref={ref}
        className="rounded-lg"
        style={{ visibility: loading ? "hidden" : "visible" }}
      />
    </div>
  );
};

export default QRCodeScanner;
