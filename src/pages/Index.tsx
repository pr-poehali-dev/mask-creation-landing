import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { title: "Косплей и фестивали", description: "Точная проработка деталей для узнаваемости образа", img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/62a52654-e34b-4c33-84d6-9bbfae0a334b.jpg" },
    { title: "Хоррор-квесты", description: "Износостойкие маски для ежедневной эксплуатации", img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/bc80b5a0-fd20-4393-8ea8-fc460df2c536.jpg" },
    { title: "Театр и кино", description: "Реалистичная мимика и комфорт для долгих съемок", img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/1397b87a-df2b-49cb-82bb-247926328521.jpg" },
    { title: "Коллекции и подарки", description: "Арт-объекты с подставками для интерьера", img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/4943d297-2d9a-4d63-a402-1050e34698ef.jpg" },
  ];

  const stats = [
    { value: "30+", label: "Уникальных масок сделано" },
    { value: "7-30", label: "Дней на изготовление" },
    { value: "Полуэластичный", label: "Ударопрочный пластик" },
    { value: "Полная кастомизация", label: "Любые допы: зубы / волосы / LED" },
  ];

  const benefits = [
    { icon: "Paintbrush", title: "Скульптурная уникальность", description: "Лепим вручную. Каждая пора и морщина проработана стеком, а не «сглажена» компьютером." },
    { icon: "Wind", title: "Инженерный комфорт", description: "Продуманная вентиляция и мягкие подкладки. Можно носить часами, не задыхаясь." },
    { icon: "Shield", title: "Материалы на века", description: "Плотный полуэластичный пластик. Не колется при падении, слегка гнется, но держит форму." },
    { icon: "Droplet", title: "Живая покраска", description: "Многослойный арт-покрас аэрографом. Имитация кожи, ржавого металла, кости." },
  ];

  const process = [
    { step: "01", title: "Лепка (скульпт)", description: "Из профессионального пластилина создаем характер и эмоцию. Прорабатываем каждую морщину.", icon: "Palette" },
    { step: "02", title: "Формовка и литье", description: "Снимаем детальный слепок силиконом и отливаем прочный корпус из качественного пластика.", icon: "Layers" },
    { step: "03", title: "Обработка", description: "Шлифовка, резка отверстий, грунтовка. Подготовка «холста» к росписи.", icon: "Scissors" },
    { step: "04", title: "Арт-покрас", description: "Многослойная живопись аэрографом и кистями. Тени, грязь, кровь, текстура кожи.", icon: "Brush" },
    { step: "05", title: "Сборка", description: "Монтаж креплений, мягких подкладок, волос и электроники.", icon: "Wrench" },
  ];

  const customizations = [
    { icon: "Zap", title: "LED-подсветка", description: "Неоновые глаза или светящиеся элементы (+блок питания)." },
    { icon: "Move", title: "Подвижная челюсть", description: "Маска «говорит» вместе с вами. Полная синхронизация." },
    { icon: "Sparkles", title: "Имплантация волос", description: "Натуральные волосы, дреды, шерсть." },
    { icon: "Skull", title: "Реалистичные зубы", description: "Объемные клыки (скульптурная лепка, не рисунок)." },
    { icon: "Gem", title: "Пирсинг и металл", description: "Кольца, шипы, цепи. Настоящая фурнитура." },
    { icon: "Flame", title: "Текстурирование", description: "Эффекты шрамов, ожогов, чешуи или гнилой плоти." },
  ];

  const pricing = [
    { title: "Полумаска", price: "от 4 500 ₽", description: "Нижняя часть лица, лоб или глаза.", details: "Идеально для вечеринок и дополнения образа. Легкость и стиль.", badge: null },
    { title: "Стандарт (Full Face)", price: "от 7 000 ₽", description: "Полное закрытие лица.", details: "Самый частый выбор для квестов и косплея. Базовая, но эффектная детализация.", badge: "Хит продаж" },
    { title: "Шлем / Full Head", price: "от 9 900 ₽", description: "Полное погружение.", details: "Маска закрывает всю голову. Максимальный реализм, сложная конструкция.", badge: null },
  ];

  const accessories = [
    { icon: "Trophy", title: "Подставка под маску", description: "Дерево или металл. Чтобы маска была арт-объектом на полке." },
    { icon: "ShieldCheck", title: "Балаклава", description: "Тонкий подшлемник для гигиены и черного фона глазниц." },
    { icon: "Sparkles", title: "Набор по уходу", description: "Специальный спрей-очиститель и микрофибра." },
    { icon: "Frame", title: "Настенное крепление", description: "Превратите маску в декор интерьера." },
  ];

  const faqs = [
    { q: "А в ней вообще можно дышать и видеть?", a: "Безопасность и комфорт — наш приоритет №1. В каждой маске продумана система скрытой вентиляции и отверстий для обзора." },
    { q: "Ношу очки. Смогу ли я надеть их под маску?", a: "Если предупредите нас на этапе заказа, мы можем скорректировать форму или порекомендовать модель полумаски." },
    { q: "Боюсь неприятного химического запаха.", a: "Мы используем только профессиональные двухкомпонентные пластики и акриловые краски высокого класса. После полимеризации наши изделия абсолютно инертны." },
    { q: "Краска не облезет под дождём?", a: "Мы покрываем роспись несколькими слоями защитного лака. Дождь, пот, снег или случайные касания ей не страшны." },
  ];

  const orderSteps = [
    { num: "1", title: "Идея", description: "Пришлите фото, арт, скриншот или просто опишите идею словами." },
    { num: "2", title: "Оценка", description: "Обсуждаем детали, подбираем опции, озвучиваем точную цену и сроки." },
    { num: "3", title: "Процесс", description: "Предоплата. Работа кипит. Присылаем фотоотчеты (лепка, покрас)." },
    { num: "4", title: "Финал", description: "Фото готовой работы, тщательная упаковка и отправка." },
  ];

  return (
    <div className="min-h-screen bg-dark text-light">
      <header className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-warm/10">
        <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold text-warm">OW</div>
            <div className="text-lg md:text-xl font-serif">OBRAZWILL</div>
          </div>
          <Button className="bg-warm text-dark hover:bg-warm-light text-sm md:text-base">Связаться</Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0">
          <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/1397b87a-df2b-49cb-82bb-247926328521.jpg" alt="Mask" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
        <div className="absolute inset-0 noise-texture"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 md:mb-8 animate-fade-in leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            Стань кем угодно.<br />Маски ручной работы,<br />меняющие реальность
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 max-w-4xl mx-auto animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            Для кино, хоррор-квестов и коллекций.<br />От эскиза до неубиваемого артефакта за 7 дней.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12 animate-fade-in text-sm md:text-base" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-light/70">
              <Icon name="Clock" size={18} />
              <span>Срок 7–30 дней</span>
            </div>
            <div className="flex items-center gap-2 text-light/70">
              <Icon name="Truck" size={18} />
              <span>Доставка по РФ</span>
            </div>
            <div className="flex items-center gap-2 text-warm font-semibold">
              <Icon name="Tag" size={18} />
              <span>От 4 500 ₽</span>
            </div>
          </div>

          <Button size="lg" className="bg-warm text-dark hover:bg-warm-light mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Обсудить идею
            <Icon name="MessageCircle" className="ml-2" size={20} />
          </Button>

          <div className="flex flex-col items-center gap-2 text-light/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Icon name="ChevronDown" size={24} className="animate-bounce" />
            <span className="text-sm">Листайте вниз</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[300px] md:h-[500px] bg-warm/5 blur-[150px] rounded-full"></div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Наши работы</h2>
          <p className="text-white/80 text-xl md:text-2xl">Мы понимаем специфику именно вашей задачи</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="group relative h-[300px] md:h-[400px] border-warm/30 overflow-hidden cursor-pointer hover-scale bg-[#0a0a0a]">
              <div className="absolute inset-0">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-white/70 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">{cat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 noise-texture opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">История происхождения</h2>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-warm">Рожденные в суровых условиях квестов</h3>
              
              <div className="space-y-4 text-base md:text-lg text-white/80 leading-relaxed">
                <p>Obrazwill начался не с бизнес-плана. Мы создавали хоррор-квесты и устали от масс-маркета. Дешевые маски ломались, давили актерам на лицо и выглядели как пластиковые игрушки.</p>
                
                <blockquote className="border-l-4 border-warm pl-4 py-4 my-6 text-lg italic text-white">
                  "Мы начали делать сами. Наши маски прошли проверку потом, адреналином и сотнями часов жестких игровых сессий."
                </blockquote>
                
                <p>Если они выдержали это — они выдержат всё. Теперь мы переносим этот опыт (эргономику и неубиваемость) в каждый заказ.</p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/d8e72321-0264-4efa-8848-7723d94ec574.jpg" alt="Мастерская" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-12 md:mb-16 text-center text-white">Почему выбирают нас</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-6 md:p-8 bg-[#111111] border-warm/30 hover:border-warm/60 transition-all">
              <Icon name={benefit.icon} size={40} className="text-warm mb-4" />
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm md:text-base">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-4 md:p-6 bg-[#111111] border-warm/30 text-center">
              <div className="text-2xl md:text-4xl font-bold text-warm mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/70">{stat.label}</div>
            </Card>
          ))}
        </div>

        <p className="text-center text-light/40 text-xs md:text-sm mt-6 md:mt-8">* Данные обновляются в реальном времени по мере выполнения заказов.</p>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Процесс создания</h2>
            <p className="text-white/80 text-lg md:text-2xl">От идеи к осязаемому воплощению. Мы не печатаем на 3D-принтерах — мы создаем руками.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative group">
                <Card className="p-6 md:p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all h-full">
                  <div className="absolute -top-4 -left-4 text-5xl md:text-7xl font-bold text-warm/20 font-serif group-hover:text-warm/30 transition-colors">{step.step}</div>
                  <div className="relative z-10">
                    <Icon name={step.icon} size={36} className="text-warm mb-4" />
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">{step.title}</h3>
                    <p className="text-light/70 text-sm md:text-base">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Добавьте индивидуальности</h2>
          <p className="text-white/80 text-lg md:text-2xl">Персонализация без границ. Конструктор вашего кошмара.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {customizations.map((custom, idx) => (
            <Card key={idx} className="p-5 md:p-6 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/40 transition-all cursor-pointer hover-scale">
              <Icon name={custom.icon} size={32} className="text-warm mb-3" />
              <h3 className="text-lg md:text-xl font-serif font-bold mb-2">{custom.title}</h3>
              <p className="text-light/60 text-xs md:text-sm">{custom.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-warm/10 to-warm-light/10 border-warm/30 text-center">
          <p className="text-lg md:text-xl text-light/90">Есть безумная идея? Мы реализуем и её. Опишите задачу, и мы придумаем, как это сделать технически.</p>
        </Card>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Прозрачные цены</h2>
            <p className="text-white/80 text-lg md:text-2xl">Стоимость зависит от сложности, но мы всегда честны с вами.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6 md:mb-8">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`p-6 md:p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all relative ${plan.badge ? 'ring-2 ring-warm/50' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-warm text-dark px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold">{plan.badge}</div>
                )}
                <div className="text-center mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{plan.title}</h3>
                  <div className="text-3xl md:text-4xl font-bold text-warm mb-3 md:mb-4">{plan.price}</div>
                  <p className="text-light/60 text-xs md:text-sm mb-2">Для кого</p>
                  <p className="text-light/90 text-sm md:text-base">{plan.description}</p>
                </div>
                <div className="border-t border-warm/10 pt-4 mb-4 md:mb-6">
                  <p className="text-light/60 text-xs md:text-sm mb-2">Описание</p>
                  <p className="text-light/80 text-sm md:text-base">{plan.details}</p>
                </div>
                <Button className="w-full bg-warm text-dark hover:bg-warm-light">Заказать</Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-light/50 text-xs md:text-sm max-w-3xl mx-auto px-4">* Цена указана «ОТ». Точная стоимость зависит от сложности покраса, детализации и дополнительных опций.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-warm/20 via-charcoal to-graphite border-warm/30">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Подарите возможность стать кем угодно</h2>
            <p className="text-white/90 text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">Сертификат на изготовление маски в Obrazwill — идеальный подарок для косплеера, фаната хорроров или коллекционера.</p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">5 000 ₽</Button>
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">10 000 ₽</Button>
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">Полный безлимит</Button>
            </div>

            <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
              Купить сертификат
              <Icon name="Gift" className="ml-2" size={20} />
            </Button>
          </div>
        </Card>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Завершите образ</h2>
            <p className="text-white/80 text-lg md:text-2xl">Полезные дополнения, которые сохранят артефакт.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {accessories.map((acc, idx) => (
              <Card key={idx} className="p-5 md:p-6 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/40 transition-all text-center hover-scale">
                <Icon name={acc.icon} size={36} className="text-warm mx-auto mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-serif font-bold mb-2">{acc.title}</h3>
                <p className="text-light/60 text-xs md:text-sm">{acc.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Частые вопросы</h2>
            <p className="text-white/80 text-lg md:text-2xl">Честные ответы на самые популярные сомнения наших клиентов</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-5 md:p-6 bg-charcoal border-warm/20">
                <h3 className="font-semibold text-base md:text-lg mb-2 text-warm">{faq.q}</h3>
                <p className="text-light/80 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Как заказать?</h2>
            <p className="text-white/80 text-lg md:text-2xl">Вам не нужен чертеж. Достаточно идеи на салфетке.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {orderSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-warm text-dark font-bold text-xl md:text-2xl mb-3 md:mb-4">{step.num}</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3">{step.title}</h3>
                <p className="text-light/70 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 text-white">Готовы воплотить свою<br />мечту в реальность?</h2>
          <p className="text-white/80 text-lg md:text-2xl mb-8 md:mb-12">Не ограничивайте свою фантазию. Расскажите нам о своей идее прямо сейчас, и мы превратим её в вечный артефакт.</p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
              <Icon name="Send" className="mr-2" size={20} />
              Написать в Telegram
            </Button>
            <Button size="lg" variant="outline" className="border-warm text-warm hover:bg-warm hover:text-dark">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать ВКонтакте
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 bg-dark border-t border-warm/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                <div className="text-xl md:text-2xl font-bold text-warm">OW</div>
                <div className="text-lg md:text-xl font-serif">OBRAZWILL</div>
              </div>
              <p className="text-light/60 text-xs md:text-sm">Мастерская уникальных масок и бутафории</p>
            </div>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="text-light/60 hover:text-warm transition"><Icon name="Send" size={24} /></a>
              <a href="#" className="text-light/60 hover:text-warm transition"><Icon name="MessageCircle" size={24} /></a>
            </div>
          </div>
          <div className="text-center text-light/40 text-xs md:text-sm mt-6 md:mt-8">© 2026 Obrazwill. Все права защищены.</div>
        </div>
      </footer>

      <a href="#" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-warm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <Icon name="MessageCircle" size={24} className="text-dark" />
      </a>
    </div>
  );
};

export default Index;