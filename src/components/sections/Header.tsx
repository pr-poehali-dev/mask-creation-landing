import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-warm/10">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-xl md:text-2xl font-bold text-warm">OW</div>
          <div className="text-lg md:text-xl font-serif text-white">OBRAZWILL</div>
        </div>
        <Button className="bg-warm text-dark hover:bg-warm-light text-sm md:text-base">Связаться</Button>
      </nav>
    </header>
  );
};

export default Header;
