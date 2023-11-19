"user client";

import React from "react";
import { useZxing } from "react-zxing";
import { toast } from "react-toastify";

interface QRCodeScannerProps {
  handleScan: (data: string) => void;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ handleScan }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      const decodedText = result.getText();

      if (!decodedText) {
      toast.error("Ocorreu um erro a obter o perfil do estudante apartir do QR Code...");
        return;
      }

      // callback
      handleScan(decodedText);
 
    },
  });

  return <video ref={ref} className="rounded-lg" />;
};

export default QRCodeScanner;
