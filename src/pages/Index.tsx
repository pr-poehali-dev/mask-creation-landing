import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const maskTypes = [
    { title: "Киношные маски", description: "Реалистичные персонажи для кино и сериалов", icon: "Film" },
    { title: "Квест-маски", description: "Атмосферные образы для иммерсивных квестов", icon: "Sparkles" },
    { title: "Театральные", description: "Выразительные маски для сценических постановок", icon: "Drama" },
    { title: "Коллекционные", description: "Уникальные авторские работы для коллекций", icon: "Crown" },
  ];

  const creationSteps = [
    { step: "01", title: "Концепция", description: "Обсуждаем идею, характер персонажа и художественное видение" },
    { step: "02", title: "Эскиз", description: "Создаём детальные зарисовки и утверждаем форму" },
    { step: "03", title: "Скульптура", description: "Лепим основу из профессиональной глины" },
    { step: "04", title: "Отливка", description: "Делаем форму и отливаем в латексе или силиконе" },
    { step: "05", title: "Покраска", description: "Многослойная проработка текстур и оттенков" },
    { step: "06", title: "Финиш", description: "Добавляем волосы, детали и финальную обработку" },
  ];

  const gallery = [
    { id: 1, height: "h-80" },
    { id: 2, height: "h-96" },
    { id: 3, height: "h-72" },
    { id: 4, height: "h-88" },
    { id: 5, height: "h-80" },
    { id: 6, height: "h-96" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-charcoal to-dark text-light">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-warm/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-serif text-warm">ATELIER</div>
          <div className="hidden md:flex gap-8">
            <a href="#gallery" className="story-link text-light/80 hover:text-warm transition">Галерея</a>
            <a href="#about" className="story-link text-light/80 hover:text-warm transition">О нас</a>
            <a href="#process" className="story-link text-light/80 hover:text-warm transition">Процесс</a>
            <a href="#contact" className="story-link text-light/80 hover:text-warm transition">Контакты</a>
          </div>
          <Button variant="outline" className="border-warm text-warm hover:bg-warm hover:text-dark">
            Заказать маску
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-charcoal to-graphite opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-warm/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 animate-fade-in text-light">
            Маски<br />ручной работы
          </h1>
          <p className="text-xl md:text-2xl text-light/70 mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Создаём уникальные образы для кино, театра и квестов.<br />Каждая маска — произведение искусства.
          </p>
          <Button size="lg" className="bg-warm text-dark hover:bg-warm-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Смотреть портфолио
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>

        {/* Decorative light effect */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-warm/10 blur-[120px] rounded-full"></div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 text-light">Галерея работ</h2>
          <p className="text-light/60 text-lg">Портфолио реализованных проектов</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item) => (
            <Card key={item.id} className={`${item.height} bg-graphite border-warm/20 hover-scale overflow-hidden group cursor-pointer break-inside-avoid`}>
              <div className="w-full h-full bg-gradient-to-br from-charcoal to-graphite flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Icon name="Eye" size={48} className="text-warm/20 group-hover:text-warm/60 transition-colors" />
                <div className="absolute bottom-4 left-4 right-4 text-light opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-serif text-lg">Маска #{item.id}</p>
                  <p className="text-sm text-light/60">Ручная работа</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About / Philosophy */}
      <section id="about" className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-6 text-light">История<br />и философия</h2>
              <p className="text-light/70 text-lg mb-6 leading-relaxed">
                Более 10 лет мы создаём маски, которые оживают на экране и в реальности. 
                Каждая работа начинается с глубокого погружения в характер персонажа.
              </p>
              <p className="text-light/70 text-lg mb-6 leading-relaxed">
                Мы верим, что настоящее мастерство — в деталях: текстуре кожи, 
                игре света на поверхности, реалистичности каждой морщинки.
              </p>
              <p className="text-warm text-lg font-semibold">
                Наша цель — не просто маска, а живой образ.
              </p>
            </div>
            <Card className="h-[500px] bg-graphite border-warm/20 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-charcoal via-graphite to-dark flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Palette" size={80} className="text-warm/30 mx-auto mb-4" />
                  <p className="text-light/40 text-lg font-serif">Студийное фото</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mask Types */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 text-light">Типы масок</h2>
          <p className="text-light/60 text-lg">Варианты работы под ваши задачи</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maskTypes.map((type, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all hover-scale"
            >
              <Icon name={type.icon} size={48} className="text-warm mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-3 text-light">{type.title}</h3>
              <p className="text-light/60">{type.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Creation Process */}
      <section id="process" className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4 text-light">Этапы создания</h2>
            <p className="text-light/60 text-lg">От эскиза до финального образа</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creationSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-4 top-0 text-8xl font-bold text-warm/10 font-serif group-hover:text-warm/20 transition-colors">
                  {step.step}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-light">{step.title}</h3>
                  <p className="text-light/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold mb-4 text-light">Заказать маску</h2>
            <p className="text-light/60 text-lg">Расскажите о своём проекте, и мы свяжемся с вами</p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-charcoal to-graphite border-warm/20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-light/80 mb-2 font-semibold">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="bg-dark border-warm/20 text-light" />
                </div>
                <div>
                  <label className="block text-light/80 mb-2 font-semibold">Email</label>
                  <Input type="email" placeholder="ivan@example.com" className="bg-dark border-warm/20 text-light" />
                </div>
              </div>

              <div>
                <label className="block text-light/80 mb-2 font-semibold">Тип проекта</label>
                <Input placeholder="Кино / Квест / Театр / Коллекция" className="bg-dark border-warm/20 text-light" />
              </div>

              <div>
                <label className="block text-light/80 mb-2 font-semibold">Описание проекта</label>
                <Textarea 
                  placeholder="Расскажите о персонаже, стиле, сроках и бюджете"
                  rows={6}
                  className="bg-dark border-warm/20 text-light"
                />
              </div>

              <Button size="lg" className="w-full bg-warm text-dark hover:bg-warm-light">
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="p-6 bg-charcoal border-warm/20 text-center">
              <Icon name="Mail" size={32} className="text-warm mx-auto mb-3" />
              <p className="text-light/60 text-sm mb-1">Email</p>
              <p className="text-light">studio@masks.ru</p>
            </Card>
            <Card className="p-6 bg-charcoal border-warm/20 text-center">
              <Icon name="Phone" size={32} className="text-warm mx-auto mb-3" />
              <p className="text-light/60 text-sm mb-1">Телефон</p>
              <p className="text-light">+7 (999) 123-45-67</p>
            </Card>
            <Card className="p-6 bg-charcoal border-warm/20 text-center">
              <Icon name="MapPin" size={32} className="text-warm mx-auto mb-3" />
              <p className="text-light/60 text-sm mb-1">Студия</p>
              <p className="text-light">Москва, ул. Примерная 1</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-dark border-t border-warm/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-bold font-serif text-warm mb-4">ATELIER</div>
          <p className="text-light/60 mb-6">Маски ручной работы для кино, театра и квестов</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-light/60 hover:text-warm transition">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-light/60 hover:text-warm transition">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-light/60 hover:text-warm transition">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-light/40 text-sm mt-8">© 2024 Atelier Masks. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
