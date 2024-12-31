"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@/components/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function CE_ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button>
        <div className="w-4 h-4"></div>
      </Button>
    );
  }

  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={onToggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
