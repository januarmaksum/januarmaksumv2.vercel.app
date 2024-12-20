"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "@/components/icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const onToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={onToggleTheme}>
      {theme === "light" ? <Sun /> : <Moon />}
    </Button>
  );
}
