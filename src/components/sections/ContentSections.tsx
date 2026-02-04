import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ContentSections = () => {
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
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/225b7e77-55b5-42d4-8f82-226242f279c5.jpg",
      title: "Скульптурная уникальность", 
      description: "Лепим вручную. Каждая пора и морщина проработана стеком, а не «сглажена» компьютером." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/86a142e3-7f08-44a0-a9fb-80ed2d77cdac.jpg",
      title: "Инженерный комфорт", 
      description: "Продуманная вентиляция и мягкие подкладки. Можно носить часами, не задыхаясь." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/acaa3798-ce9c-4fcb-b413-cb738a9d1033.jpg",
      title: "Материалы на века", 
      description: "Плотный полуэластичный пластик. Не колется при падении, слегка гнется, но держит форму." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/b2505555-19e5-4441-a35e-15c766d232b7.jpg",
      title: "Живая покраска", 
      description: "Многослойный арт-покрас аэрографом. Имитация кожи, ржавого металла, кости." 
    },
  ];

  const process = [
    { 
      step: "01", 
      title: "Лепка (скульпт)", 
      description: "Из профессионального пластилина создаем характер и эмоцию. Прорабатываем каждую морщину.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/225b7e77-55b5-42d4-8f82-226242f279c5.jpg" 
    },
    { 
      step: "02", 
      title: "Формовка силиконом", 
      description: "Снимаем детальный слепок профессиональным силиконом. Сохраняем каждую деталь скульптуры.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/525ee534-fc16-409e-a505-0c249662eb8b.jpg" 
    },
    { 
      step: "03", 
      title: "Литье пластика", 
      description: "Отливаем прочный корпус из качественного двухкомпонентного пластика методом ротоформовки.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/7b6ae64c-9935-4979-843f-add04d0de45e.jpg" 
    },
    { 
      step: "04", 
      title: "Обработка", 
      description: "Шлифовка, резка отверстий, грунтовка. Подготовка «холста» к росписи.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/046f2f11-ef5d-46fe-851e-9c652fd341b4.jpg" 
    },
    { 
      step: "05", 
      title: "Арт-покрас", 
      description: "Многослойная живопись аэрографом и кистями. Тени, грязь, кровь, текстура кожи.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/b2505555-19e5-4441-a35e-15c766d232b7.jpg" 
    },
    { 
      step: "06", 
      title: "Сборка", 
      description: "Монтаж креплений, мягких подкладок, волос и электроники.", 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/4e93f03f-696d-44c0-8737-5d045e1c7e29.jpg" 
    },
  ];

  const customizations = [
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/9f7b0d68-48a0-429c-9bd5-aea972d094b1.jpg",
      title: "LED-подсветка", 
      description: "Неоновые глаза или светящиеся элементы (+блок питания)." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/bee67f8a-688d-436f-aa71-dae7924c0fe2.jpg",
      title: "Реалистичные зубы", 
      description: "Объемные клыки (скульптурная лепка, не рисунок)." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/5915f957-6622-4850-9c84-49aa12194ce1.jpg",
      title: "Имплантация волос", 
      description: "Натуральные волосы, дреды, шерсть." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/29652c4c-18e7-4b50-9c3f-2030ace16194.jpg",
      title: "Пирсинг и металл", 
      description: "Кольца, шипы, цепи. Настоящая фурнитура." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/6a546be0-f14c-4945-b474-0741cac41748.jpg",
      title: "Текстурирование", 
      description: "Эффекты шрамов, ожогов, чешуи или гнилой плоти." 
    },
  ];

  const pricing = [
    { 
      title: "Полумаска", 
      price: "от 4 500 ₽", 
      description: "Нижняя часть лица, лоб или глаза.", 
      details: "Идеально для вечеринок и дополнения образа. Легкость и стиль.", 
      badge: null,
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/9156b67b-be59-4e81-94b2-1c4738f24965.jpg"
    },
    { 
      title: "Полнолицевая маска", 
      price: "от 7 000 ₽", 
      description: "Полное закрытие лица.", 
      details: "Самый частый выбор для квестов и косплея. Базовая, но эффектная детализация.", 
      badge: "Хит продаж",
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/6d40c370-e643-4388-b3a2-b5c44230b2e6.jpg"
    },
    { 
      title: "Полноголовый шлем", 
      price: "от 9 900 ₽", 
      description: "Полное погружение.", 
      details: "Маска закрывает всю голову. Максимальный реализм, сложная конструкция.", 
      badge: null,
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/cafb4d75-dcad-4f0f-8bc7-37ff174b1072.jpg"
    },
  ];

  const accessories = [
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/d410eaa6-ac0b-49d2-8900-0eab38a1de71.jpg",
      title: "Подставка под маску", 
      description: "Дерево или металл. Чтобы маска была арт-объектом на полке." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/7fe31227-b168-42a0-bcfa-d96d5d53cce4.jpg",
      title: "Балаклава", 
      description: "Тонкий подшлемник для гигиены и черного фона глазниц." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/038e2051-3670-49ef-be25-e5c6eaed18c5.jpg",
      title: "Набор по уходу", 
      description: "Специальный спрей-очиститель и микрофибра." 
    },
    { 
      img: "https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/ed28fa39-d326-4cfc-9481-14fee9d58391.jpg",
      title: "Настенное крепление", 
      description: "Превратите маску в декор интерьера." 
    },
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
    <>
      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Наши работы</h2>
          <p className="text-white/90 text-lg md:text-xl">Мы понимаем специфику именно вашей задачи</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <Card key={idx} className="group relative h-[300px] md:h-[400px] border-warm/30 overflow-hidden cursor-pointer hover-scale bg-[#0a0a0a]">
              <div className="absolute inset-0">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-white/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity">{cat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f] relative">
        <div className="absolute inset-0 noise-texture opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">История происхождения</h2>
              <h3 className="text-2xl md:text-3xl font-serif mb-6 text-warm">Рожденные в суровых условиях квестов</h3>
              
              <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
                <p>Obrazwill начался не с бизнес-плана. Мы создавали хоррор-квесты и устали от масс-маркета. Дешевые маски ломались, давили актерам на лицо и выглядели как пластиковые игрушки.</p>
                
                <blockquote className="border-l-4 border-warm pl-4 py-4 my-6 text-lg italic text-white">
                  "Мы начали делать сами. Наши маски прошли проверку потом, адреналином и сотнями часов жестких игровых сессий."
                </blockquote>
                
                <p>Если они выдержали это — они выдержат всё. Теперь мы переносим этот опыт (эргономику и неубиваемость) в каждый заказ.</p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/d8e72321-0264-4efa-8848-7723d94ec574.jpg" alt="Мастерская" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-10 md:mb-14 text-center text-white">Почему выбирают нас</h2>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 mb-10">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="group relative overflow-hidden bg-[#111111] border-warm/30 hover:border-warm/60 transition-all">
              <div className="relative h-[250px] md:h-[300px] overflow-hidden">
                <img src={benefit.img} alt={benefit.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm md:text-base">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-4 md:p-6 bg-[#111111] border-warm/30 text-center">
              <div className="text-2xl md:text-4xl font-bold text-warm mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/90">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Процесс создания</h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">От идеи к осязаемому воплощению. Мы не печатаем на 3D-принтерах — мы создаем руками.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative group">
                <Card className="overflow-hidden bg-[#111111] border-warm/20 hover:border-warm/50 transition-all h-full">
                  <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 text-5xl md:text-6xl font-bold text-warm/90 font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{step.step}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-serif font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Добавьте индивидуальности</h2>
          <p className="text-white/90 text-lg md:text-xl">Персонализация без границ. Конструктор вашего кошмара.</p>
        </div>

        <div className="mb-10 md:mb-14 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden bg-[#111111] border-warm/40">
            <div className="relative h-[400px] md:h-[500px]">
              <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/12401377-9427-4d29-98e7-8fe046ed47a1.jpg" alt="Маска со всеми модами" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center">
                <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3">Все модификации в одной маске</h3>
                <p className="text-white/90 text-base md:text-lg">LED-глаза • Реалистичные зубы • Волосы • Металл • Текстуры</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {customizations.map((custom, idx) => (
            <Card key={idx} className="group overflow-hidden bg-[#111111] border-warm/20 hover:border-warm/40 transition-all cursor-pointer hover-scale">
              <div className="relative h-[180px] md:h-[220px] overflow-hidden">
                <img src={custom.img} alt={custom.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-serif font-bold mb-2 text-white">{custom.title}</h3>
                <p className="text-white/80 text-xs md:text-sm">{custom.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-r from-warm/10 to-warm-light/10 border-warm/30 text-center">
          <p className="text-lg md:text-xl text-white">Есть безумная идея? Мы реализуем и её. Опишите задачу, и мы придумаем, как это сделать технически.</p>
        </Card>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Прозрачные цены</h2>
            <p className="text-white/90 text-lg md:text-xl">Стоимость зависит от сложности, но мы всегда честны с вами.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-6">
            {pricing.map((plan, idx) => (
              <Card key={idx} className={`overflow-hidden bg-[#111111] border-warm/20 hover:border-warm/50 transition-all relative ${plan.badge ? 'ring-2 ring-warm/50' : ''}`}>
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-warm text-dark px-3 py-1 rounded-full text-xs md:text-sm font-semibold z-10">{plan.badge}</div>
                )}
                <div className="relative h-[200px] md:h-[250px] overflow-hidden">
                  <img src={plan.img} alt={plan.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-center mb-4">
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 text-white">{plan.title}</h3>
                    <div className="text-3xl md:text-4xl font-bold text-warm mb-3">{plan.price}</div>
                    <p className="text-white/70 text-xs md:text-sm mb-2">Для кого</p>
                    <p className="text-white/90 text-sm md:text-base">{plan.description}</p>
                  </div>
                  <div className="border-t border-warm/10 pt-4 mb-6">
                    <p className="text-white/70 text-xs md:text-sm mb-2">Описание</p>
                    <p className="text-white/90 text-sm md:text-base">{plan.details}</p>
                  </div>
                  <Button className="w-full bg-warm text-dark hover:bg-warm-light">Заказать</Button>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-center text-white/60 text-xs md:text-sm max-w-3xl mx-auto px-4">* Цена указана «ОТ». Точная стоимость зависит от сложности покраса, детализации и дополнительных опций.</p>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto overflow-hidden bg-[#111111] border-warm/30">
          <div className="relative h-[300px] md:h-[400px]">
            <img src="https://cdn.poehali.dev/projects/f8def378-8058-4886-b565-bccedcf2e505/files/df91be9f-cdd4-45e9-9e66-f537e37584ff.jpg" alt="Сертификат" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Подарите возможность стать кем угодно</h2>
                <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl mx-auto">Сертификат на изготовление маски в Obrazwill — идеальный подарок для косплеера, фаната хорроров или коллекционера.</p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">5 000 ₽</Button>
                  <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">10 000 ₽</Button>
                  <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark text-sm md:text-base">Полный безлимит</Button>
                </div>

                <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
                  Купить сертификат
                  <Icon name="Gift" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Завершите образ</h2>
            <p className="text-white/90 text-lg md:text-xl">Полезные дополнения, которые сохранят артефакт.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {accessories.map((acc, idx) => (
              <Card key={idx} className="group overflow-hidden bg-[#111111] border-warm/20 hover:border-warm/40 transition-all hover-scale">
                <div className="relative h-[180px] md:h-[200px] overflow-hidden">
                  <img src={acc.img} alt={acc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent"></div>
                </div>
                <div className="p-4 md:p-5 text-center">
                  <h3 className="text-base md:text-lg font-serif font-bold mb-2 text-white">{acc.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm">{acc.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Частые вопросы</h2>
            <p className="text-white/90 text-lg md:text-xl">Честные ответы на самые популярные сомнения наших клиентов</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="p-5 md:p-6 bg-[#111111] border-warm/20">
                <h3 className="font-semibold text-base md:text-lg mb-2 text-warm">{faq.q}</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 text-white">Как заказать?</h2>
            <p className="text-white/90 text-lg md:text-xl">Вам не нужен чертеж. Достаточно идеи на салфетке.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {orderSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-warm text-dark font-bold text-xl md:text-2xl mb-3 md:mb-4">{step.num}</div>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 md:mb-3 text-white">{step.title}</h3>
                <p className="text-white/80 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 md:mb-6 text-white">Готовы воплотить свою<br />мечту в реальность?</h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 md:mb-12">Не ограничивайте свою фантазию. Расскажите нам о своей идее прямо сейчас, и мы превратим её в вечный артефакт.</p>

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
    </>
  );
};

export default ContentSections;
