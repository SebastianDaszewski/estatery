import { landingLinks } from "@/features/landing/components/data";
import { Button } from "@/components";
import { XIcon } from "@/icons";

const Menu = () => {
  return (
    <div className="fixed inset-0 top-0 pt-24 space-y-8 px-5 overflow-hidden">
      <div className="absolute top-10 right-7 x-button">
        <XIcon />
      </div>
      {landingLinks.map((link) => (
        <div
          className="text-2xl leading-1.5 font-medium text-black p-4"
          key={link}
        >
          {link}
        </div>
      ))}
      <div className="flex flex-col items-center gap-4 p-4 w-full mt-auto">
        <Button className="w-full" variant="secondary">
          Login
        </Button>
        <Button className="w-full" variant="primary">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Menu;
