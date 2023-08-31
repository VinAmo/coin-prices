"use client";

import { MouseEventHandler, useEffect } from "react";

const Button = ({
  name,
  position,
  onClick,
}: {
  name: string;
  position: "left" | "middle" | "right";
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  useEffect(() => {
    const init = async () => {
      const { Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple });
    };
    init();
  }, []);

  return (
    <button
      type="button"
      className={`inline-block bg-primary-600 px-6 py-2 text-xs font-bold text-white transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 ${
        position === "left" && "rounded-l-md"
      } ${position === "right" && "rounded-r-md"}`}
      data-te-ripple-init
      data-te-ripple-color="light"
      data-te-ripple-duration="1000ms"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
