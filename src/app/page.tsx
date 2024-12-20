import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/theme.switch";

export default function Home() {
  return (
    <div className="flex flex-row gap-3 justify-center items-center h-screen ">
      <h1>Januar Maksum</h1>
      <Button>My Resume</Button>
      <ThemeSwitch />
    </div>
  );
}
