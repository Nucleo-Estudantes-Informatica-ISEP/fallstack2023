"user client";

import React from "react";
import { useZxing } from "react-zxing";

interface QRCodeScannerProps {
  handleScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ handleScan }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      const decodedText = result.getText();

      if (!decodedText) {
        return;
      }

      // stop the camera
      ref.current?.pause();

      // callback
      handleScan(decodedText);
 
    },
  });

  return <video ref={ref} className="rounded-lg" />;
};

export default QRCodeScanner;
