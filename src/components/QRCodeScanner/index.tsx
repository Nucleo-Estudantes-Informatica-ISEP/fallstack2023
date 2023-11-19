"user client";

import React from "react";
import { useZxing } from "react-zxing";

interface QRCodeScannerProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

const QRCodeScanner: React.FC<QRCodeScannerProps> = ({ close }) => {
  const { ref } = useZxing({
    onDecodeResult(result) {
      const decodedText = result.getText();
      // check if its content is a url for our website
      if (decodedText.includes(window.location.origin)) {
        // Check if it's a valid URL
        try {
          new URL(decodedText);
          // close the modal
          close(true);

          // Open the link in a new tab
          window.open(decodedText, "_blank");
        } catch (error) {}
      }
    },
  });

  return <video ref={ref} className="rounded-lg" />;
};

export default QRCodeScanner;
