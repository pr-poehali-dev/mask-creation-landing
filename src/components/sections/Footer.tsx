import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <>
      <footer className="py-8 md:py-12 bg-[#0a0a0a] border-t border-warm/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="text-xl md:text-2xl font-bold text-warm">OW</div>
                <div className="text-lg md:text-xl font-serif text-white">OBRAZWILL</div>
              </div>
              <p className="text-white/70 text-xs md:text-sm">Мастерская уникальных масок и бутафории</p>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-white/60 hover:text-warm transition"><Icon name="Send" size={24} /></a>
              <a href="#" className="text-white/60 hover:text-warm transition"><Icon name="MessageCircle" size={24} /></a>
            </div>
          </div>
          <div className="text-center text-white/50 text-xs md:text-sm mt-6 md:mt-8">© 2026 Obrazwill. Все права защищены.</div>
        </div>
      </footer>

      <a href="#" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-warm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <Icon name="MessageCircle" size={24} className="text-dark" />
      </a>
    </>
  );
};

export default Footer;
