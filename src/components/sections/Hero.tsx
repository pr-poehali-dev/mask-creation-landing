import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      <div className="absolute inset-0">
        <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/1397b87a-df2b-49cb-82bb-247926328521.jpg" alt="Mask" className="w-full h-full object-cover opacity-30" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
      <div className="absolute inset-0 noise-texture"></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 animate-fade-in leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
          Стань кем угодно.<br />Маски ручной работы,<br />меняющие реальность
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 max-w-4xl mx-auto animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
          Для кино, хоррор-квестов и коллекций.<br />От эскиза до неубиваемого артефакта за 7 дней.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 animate-fade-in text-sm md:text-base" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2 text-white/80">
            <Icon name="Clock" size={18} />
            <span>Срок 7–30 дней</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Icon name="Truck" size={18} />
            <span>Доставка по РФ</span>
          </div>
          <div className="flex items-center gap-2 text-warm font-semibold">
            <Icon name="Tag" size={18} />
            <span>От 4 500 ₽</span>
          </div>
        </div>

        <Button size="lg" className="bg-warm text-dark hover:bg-warm-light mb-8 animate-fade-in text-base md:text-lg px-8" style={{ animationDelay: '0.6s' }}>
          Обсудить идею
          <Icon name="MessageCircle" className="ml-2" size={20} />
        </Button>

        <div className="flex flex-col items-center gap-2 text-white/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Icon name="ChevronDown" size={24} className="animate-bounce" />
          <span className="text-sm">Листайте вниз</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] bg-warm/5 blur-[150px] rounded-full"></div>
    </section>
  );
};

export default Hero;
