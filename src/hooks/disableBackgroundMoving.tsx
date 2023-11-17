import { useEffect } from "react";

interface disableBodyScrollProps {
  modalIsHidden: boolean;
}

export const useDisableBodyScroll = ({
  modalIsHidden,
}: disableBodyScrollProps) => {
  useEffect(() => {
    if (modalIsHidden) {
      // if modal is closed || hidden, enable scrolling
      document.body.style.overflow = "unset";
      return;
    }
    document.body.style.overflow = "hidden";
  }, [modalIsHidden]);
};
