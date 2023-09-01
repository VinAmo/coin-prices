"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Theme } from "@/types";

const DynamicButton = dynamic(() => import("@/components/button"), {
  ssr: false,
});

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // make sure only render UI that uses the current theme when the page is mounted on the client
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-10">
      {(Object.keys(Theme) as Array<keyof typeof Theme>).map((theme) => (
        <DynamicButton
          key={theme}
          name={theme}
          category="outline"
          alignment="floating"
          onClick={() => setTheme(Theme[theme])}
          theme={Theme[theme]}
          custom="mx-2 sm:mx-4 md:mx-6 lg:mx-8"
        />
      ))}
    </div>
  );
};

export default ThemeSwitch;
