"use client";

import { MouseEventHandler, useEffect } from "react";

// Tailwind does not support dynamic class names
// refer to https://tailwindcss.com/docs/content-configuration#dynamic-class-names
// so we add these theme color manually, they are only for the theme buttons
// as the color of theme button should not be affected by the theme
// for any other component, we could just use primary color
const styles = {
  category: {
    solid: {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:border-primary-700",
      light:
        "bg-slate-600 text-white hover:bg-slate-700 focus:border-slate-700",
      dark: "bg-slate-400 text-white hover:bg-slate-300 focus:border-slate-300",
      rose: "bg-rose-600 text-white hover:bg-rose-700 focus:border-rose-700",
      sky: "bg-sky-600 text-white hover:bg-sky-700 focus:border-sky-700",
      teal: "bg-teal-600 text-white hover:bg-teal-700 focus:border-teal-700",
    },
    outline: {
      primary:
        "bg-transparent text-primary-600 border-2 border-primary-600 hover:border-primary-700 hover:bg-primary-200 hover:bg-opacity-10 focus:border-primary-700",
      light:
        "bg-transparent text-slate-400 border-2 border-slate-400 hover:border-slate-300 hover:bg-slate-600 hover:bg-opacity-10 focus:border-slate-300",
      dark: "bg-transparent text-slate-600 border-2 border-slate-600 hover:border-slate-700 hover:bg-slate-600 hover:bg-opacity-10 focus:border-slate-700",
      rose: "bg-transparent text-rose-600 border-2 border-rose-600 hover:border-rose-700 hover:bg-rose-200 hover:bg-opacity-10 focus:border-rose-700",
      sky: "bg-transparent text-sky-600 border-2 border-sky-600 hover:border-sky-700 hover:bg-sky-200 hover:bg-opacity-10 focus:border-sky-700",
      teal: "bg-transparent text-teal-600 border-2 border-teal-600 hover:border-teal-700 hover:bg-teal-200 hover:bg-opacity-10 focus:border-teal-700",
    },
  },
  alignment: {
    floating: "rounded",
    left: "rounded-l-md",
    middle: "",
    right: "rounded-r-md",
  },
};

const Button = ({
  name,
  category,
  alignment,
  theme = "primary",
  custom = "",
  onClick,
}: {
  name: string;
  category: "solid" | "outline";
  alignment: "floating" | "left" | "middle" | "right";
  theme?: "primary" | "light" | "dark" | "rose" | "sky" | "teal";
  custom?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
      className={`inline-block px-6 py-2 text-xs font-bold transition duration-150 ease-in-out ${styles.category[category][theme]} ${styles.alignment[alignment]} ${custom}`}
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
