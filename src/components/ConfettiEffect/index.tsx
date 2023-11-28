"use client";

import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

interface ConfettiEffectProps {
  visible: boolean;
}

const ConfettiEffect: FunctionComponent<ConfettiEffectProps> = ({
  visible,
}) => {
  const refAnimationInstance = useRef(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current && refAnimationInstance.current
      ? {
          ...opts,
          origin: { y: 0.7 },
          particleCount: Math.floor(200 * particleRatio),
        }
      : {};
  }, []);

  useEffect(() => {
    if (visible) {
      fire();
    }
  }, [visible]);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ConfettiEffect;
