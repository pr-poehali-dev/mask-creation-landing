import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    { title: "Косплей и фестивали", description: "Точная проработка деталей для узнаваемости образа" },
    { title: "Хоррор-квесты", description: "Износостойкие маски для ежедневной эксплуатации" },
    { title: "Театр и кино", description: "Реалистичная мимика и комфорт для долгих съемок" },
    { title: "Коллекции и подарки", description: "Арт-объекты с подставками для интерьера" },
  ];

  const stats = [
    { value: "30+", label: "Уникальных масок сделано" },
    { value: "7-30", label: "Дней на изготовление" },
    { value: "Semi-Rigid", label: "Ударопрочный пластик" },
    { value: "Full Custom", label: "Любые допы: зубы / волосы / LED" },
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
    { step: "04", title: "Арт-покрас", description: "Многослойная живопись аэрографом и кистями. Тени, грязь, кровь, текстура кожи.", icon: "Paintbrush2" },
    { step: "05", title: "Сборка", description: "Монтаж креплений, мягких подкладок, волос и электроники.", icon: "Wrench" },
  ];

  const customizations = [
    { icon: "Zap", title: "LED-подсветка", description: "Неоновые глаза или светящиеся элементы (+блок питания)." },
    { icon: "Move", title: "Подвижная челюсть", description: "Маска «говорит» вместе с вами. Полная синхронизация." },
    { icon: "Sparkles", title: "Имплантация волос", description: "Натуральные волосы, дреды, шерсть." },
    { icon: "Skull", title: "Реалистичные зубы", description: "Объемные клыки (скульптурная лепка, не рисунок)." },
    { icon: "Gem", title: "Пирсинг и металл", description: "Кольца, шипы, цепи. Настоящая фурнитура." },
    { icon: "Cigarette", title: "Текстурирование", description: "Эффекты шрамов, ожогов, чешуи или гнилой плоти." },
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
    { question: "А в ней вообще можно дышать и видеть? Не хочу задохнуться через 5 минут.", answer: "Безопасность и комфорт — наш приоритет №1. Мы не делаем глухих «мешков на голову». В каждой маске, даже самой закрытой, продумана система скрытой вентиляции и отверстий для обзора. Если дизайн предполагает отсутствие глаз (например, монстр), мы используем специальную жесткую сетку: вы всё видите, а ваши глаза скрыты. Дышать легко, стекло не запотевает." },
    { question: "Ношу очки в жизни. Смогу ли я надеть их под маску?", answer: "Это важный момент. Большинство полнолицевых масок сидят достаточно плотно, поэтому обычные очки под них могут не поместиться. Однако! Если вы предупредите нас об этом на этапе заказа, мы можем скорректировать форму (сделать внутреннее пространство глубже) или порекомендовать модель полумаски. Хотя для идеального комфорта и полного погружения мы всё же рекомендуем использовать контактные линзы на время ношения." },
    { question: "Боюсь неприятного химического запаха. У меня чувствительное обоняние.", answer: "Мы понимаем ваш страх — дешевые китайские маски часто пахнут «химическим заводом». В Obrazwill это исключено. Мы используем только профессиональные двухкомпонентные пластики и акриловые краски высокого класса. После полимеризации и высыхания наши изделия абсолютно инертны и не имеют резкого запаха. Вы чувствуете только запах новой, качественной вещи." },
    { question: "Краска не облезет, если я попаду под дождь или случайно задену стену?", answer: "Наши маски — это боевой реквизит, а не музейный экспонат под стеклом. Мы покрываем роспись несколькими слоями защитного лака (матового или глянцевого). Это создает броню для краски. Дождь, пот, снег или случайные касания ей не страшны. Конечно, тереть маску наждачкой не стоит, но обычную эксплуатацию она выдержит с честью." },
    { question: "Маска выглядит массивной (как металл/камень). Не отвалится ли шея от тяжести?", answer: "Внешность обманчива! Благодаря современным полимерам, мы создаем визуально тяжелые фактуры (ржавый металл, камень, кость), которые на деле весят совсем немного. Даже шлем, полностью закрывающий голову, ощущается комфортно и не перегружает шейные позвонки даже при длительном ношении." },
    { question: "Как ухаживать за маской после мероприятия? Её можно мыть?", answer: "Всё просто. Внутренняя часть протирается влажной спиртовой салфеткой или губкой с мыльным раствором (для гигиены). Внешнюю сторону достаточно протереть от пыли мягкой тряпочкой или влажной салфеткой без агрессивных растворителей (ацетон запрещен!). Этого достаточно, чтобы маска служила вам годами." },
  ];

  const orderSteps = [
    { num: "1", title: "Идея", description: "Пришлите фото, арт, скриншот или просто опишите идею словами." },
    { num: "2", title: "Оценка", description: "Обсуждаем детали, подбираем опции, озвучиваем точную цену и сроки." },
    { num: "3", title: "Процесс", description: "Предоплата. Работа кипит. Присылаем фотоотчеты (лепка, покрас), чтобы вы видели прогресс." },
    { num: "4", title: "Финал", description: "Фото готовой работы, тщательная упаковка и отправка." },
  ];

  return (
    <div className="min-h-screen bg-dark text-light">
      <header className="fixed top-0 w-full z-50 bg-dark/95 backdrop-blur-md border-b border-warm/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-warm">OW</div>
            <div className="text-xl font-serif">OBRAZWILL</div>
          </div>
          <Button className="bg-warm text-dark hover:bg-warm-light">Связаться</Button>
        </nav>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-charcoal to-graphite"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-warm/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 animate-fade-in leading-tight">
            Маски ручной работы<br />на заказ
          </h1>
          <p className="text-xl md:text-2xl text-light/80 mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Для квестов, кино, косплея и коллекций.<br />От эскиза до осязаемого артефакта.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2 text-light/70">
              <Icon name="Clock" size={20} />
              <span>Срок 7–30 дней</span>
            </div>
            <div className="flex items-center gap-2 text-light/70">
              <Icon name="Truck" size={20} />
              <span>Доставка по РФ</span>
            </div>
            <div className="flex items-center gap-2 text-warm font-semibold">
              <Icon name="Tag" size={20} />
              <span>От 4 500 ₽</span>
            </div>
          </div>

          <Button size="lg" className="bg-warm text-dark hover:bg-warm-light mb-8">
            Обсудить идею
            <Icon name="MessageCircle" className="ml-2" size={20} />
          </Button>

          <div className="flex flex-col items-center gap-2 text-light/50">
            <Icon name="ChevronDown" size={24} className="animate-bounce" />
            <span className="text-sm">Листайте вниз</span>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Наши работы</h2>
          <p className="text-light/70 text-xl">Мы понимаем специфику именно вашей задачи</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Card key={index} className="group relative h-[400px] bg-graphite border-warm/20 overflow-hidden cursor-pointer hover-scale">
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-charcoal to-graphite">
                <Icon name="Image" size={64} className="text-warm/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-serif font-bold mb-2">{cat.title}</h3>
                <p className="text-light/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{cat.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-serif font-bold mb-6 text-center">История происхождения</h2>
            <h3 className="text-3xl font-serif mb-8 text-center text-warm">Рожденные в суровых условиях квестов</h3>
            
            <div className="space-y-6 text-lg text-light/80 leading-relaxed">
              <p>Obrazwill начался не с бизнес-плана. Мы создавали хоррор-квесты и устали от масс-маркета. Дешевые маски ломались, давили актерам на лицо и выглядели как пластиковые игрушки.</p>
              
              <blockquote className="border-l-4 border-warm pl-6 py-4 my-8 text-xl italic text-light">
                "Мы начали делать сами. Наши маски прошли проверку потом, адреналином и сотнями часов жестких игровых сессий."
              </blockquote>
              
              <p>Если они выдержали это — они выдержат всё. Теперь мы переносим этот опыт (эргономику и неубиваемость) в каждый заказ.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold mb-16 text-center">Почему выбирают нас</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all">
              <Icon name={benefit.icon} size={48} className="text-warm mb-4" />
              <h3 className="text-2xl font-serif font-bold mb-3">{benefit.title}</h3>
              <p className="text-light/70 leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-charcoal border-warm/20 text-center">
              <div className="text-4xl font-bold text-warm mb-2">{stat.value}</div>
              <div className="text-sm text-light/60">{stat.label}</div>
            </Card>
          ))}
        </div>

        <p className="text-center text-light/40 text-sm mt-8">* Данные обновляются в реальном времени по мере выполнения заказов.</p>
      </section>

      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Процесс создания</h2>
            <p className="text-light/70 text-xl">От бесформенной идеи к осязаемому воплощению. Мы не печатаем на 3D-принтерах — мы создаем руками.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all h-full">
                  <div className="absolute -top-6 -left-6 text-7xl font-bold text-warm/20 font-serif group-hover:text-warm/30 transition-colors">{step.step}</div>
                  <div className="relative z-10">
                    <Icon name={step.icon} size={40} className="text-warm mb-4" />
                    <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                    <p className="text-light/70">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Добавьте индивидуальности</h2>
          <p className="text-light/70 text-xl">Персонализация без границ. Конструктор вашего кошмара.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {customizations.map((custom, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/40 transition-all cursor-pointer hover-scale">
              <Icon name={custom.icon} size={36} className="text-warm mb-3" />
              <h3 className="text-xl font-serif font-bold mb-2">{custom.title}</h3>
              <p className="text-light/60 text-sm">{custom.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-warm/10 to-warm-light/10 border-warm/30 text-center">
          <p className="text-xl text-light/90">Есть безумная идея? Мы реализуем и её. Опишите задачу, и мы придумаем, как это сделать технически.</p>
        </Card>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Прозрачные цены</h2>
            <p className="text-light/70 text-xl">Стоимость зависит от сложности, но мы всегда честны с вами.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`p-8 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/50 transition-all relative ${plan.badge ? 'ring-2 ring-warm/50' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-warm text-dark px-4 py-1 rounded-full text-sm font-semibold">{plan.badge}</div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{plan.title}</h3>
                  <div className="text-4xl font-bold text-warm mb-4">{plan.price}</div>
                  <p className="text-light/60 text-sm mb-2">Для кого</p>
                  <p className="text-light/90">{plan.description}</p>
                </div>
                <div className="border-t border-warm/10 pt-4 mb-6">
                  <p className="text-light/60 text-sm mb-2">Описание</p>
                  <p className="text-light/80">{plan.details}</p>
                </div>
                <Button className="w-full bg-warm text-dark hover:bg-warm-light">Заказать</Button>
              </Card>
            ))}
          </div>

          <p className="text-center text-light/50 text-sm max-w-3xl mx-auto">* Цена указана «ОТ». Точная стоимость зависит от сложности покраса, детализации и дополнительных опций. Мы всегда озвучиваем финальную цену ДО начала работы.</p>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-warm/20 via-charcoal to-graphite border-warm/30">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Подарите возможность стать кем угодно</h2>
            <p className="text-light/80 text-lg mb-8 max-w-2xl mx-auto">Выбор маски — процесс интимный. Не пытайтесь угадать — подарите выбор. Сертификат на изготовление маски в Obrazwill — идеальный подарок для косплеера, фаната хорроров или коллекционера.</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark">5 000 ₽</Button>
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark">10 000 ₽</Button>
              <Button variant="outline" size="lg" className="border-warm text-warm hover:bg-warm hover:text-dark">Полный безлимит</Button>
            </div>

            <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
              Купить сертификат
              <Icon name="Gift" className="ml-2" size={20} />
            </Button>
          </div>
        </Card>
      </section>

      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Завершите образ</h2>
            <p className="text-light/70 text-xl">Полезные дополнения, которые сохранят артефакт.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((acc, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-charcoal to-graphite border-warm/20 hover:border-warm/40 transition-all text-center hover-scale">
                <Icon name={acc.icon} size={40} className="text-warm mx-auto mb-4" />
                <h3 className="text-lg font-serif font-bold mb-2">{acc.title}</h3>
                <p className="text-light/60 text-sm">{acc.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4">Условия и Логистика</h2>
          <p className="text-light/70 text-xl">Мы ценим ваше время и спокойствие.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-8 bg-charcoal border-warm/20 text-center">
            <Icon name="Clock" size={48} className="text-warm mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Сроки магии</h3>
            <p className="text-light/70 text-sm">Изготовление занимает от 1 до 4 недель. Мы не спешим в ущерб качеству, но всегда соблюдаем дедлайн.</p>
          </Card>
          <Card className="p-8 bg-charcoal border-warm/20 text-center">
            <Icon name="Package" size={48} className="text-warm mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Бронебойная упаковка</h3>
            <p className="text-light/70 text-sm">Пакуем так, чтобы маска пережила апокалипсис. Многослойная защита. Доедет в целости — гарантируем.</p>
          </Card>
          <Card className="p-8 bg-charcoal border-warm/20 text-center">
            <Icon name="MapPin" size={48} className="text-warm mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">География доставки</h3>
            <p className="text-light/70 text-sm">Отправляем СДЭК или любой удобной ТК по всей России. Быстро и с трек-номером.</p>
          </Card>
          <Card className="p-8 bg-charcoal border-warm/20 text-center">
            <Icon name="Gift" size={48} className="text-warm mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold mb-3">Бонус от мастера</h3>
            <p className="text-light/70 text-sm">При заказе от 9 900 ₽ — доставка за наш счет! Отличный повод добавить опции.</p>
          </Card>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-charcoal to-graphite border-warm/20 text-center">
            <Icon name="Wrench" size={64} className="text-warm mx-auto mb-6" />
            <h2 className="text-4xl font-serif font-bold mb-4">Мы своих не бросаем.</h2>
            <h3 className="text-2xl font-serif mb-6 text-warm">Ремонт и реставрация.</h3>
            <p className="text-light/80 text-lg mb-8 leading-relaxed">Жизнь сурова, особенно на квестах и фестивалях. Если спустя год ваша маска пострадает в бою, треснет или потеряет зуб — не выбрасывайте её. Присылайте нам — мы починим, подкрасим и вернем её в строй за символическую плату.</p>
            <Button className="bg-warm text-dark hover:bg-warm-light">Узнать условия ремонта</Button>
          </Card>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold mb-4">B2B Партнерство</h2>
            <h3 className="text-2xl text-warm mb-6">Obrazwill для бизнеса: квесты, театры, шоу</h3>
            <p className="text-light/70 text-xl">Нужен реквизит, который не сломается через неделю? Мы знаем вашу боль. Создаем износостойкую бутафорию для профессионального использования.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 bg-charcoal border-warm/20 text-center">
              <Icon name="TrendingDown" size={48} className="text-warm mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">Опт</h3>
              <p className="text-light/70">Скидки при заказе от 3-х единиц.</p>
            </Card>
            <Card className="p-8 bg-charcoal border-warm/20 text-center">
              <Icon name="Shield" size={48} className="text-warm mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">Надежность</h3>
              <p className="text-light/70">Усиленная конструкция для ежедневной эксплуатации актерами.</p>
            </Card>
            <Card className="p-8 bg-charcoal border-warm/20 text-center">
              <Icon name="FileText" size={48} className="text-warm mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold mb-2">Документы</h3>
              <p className="text-light/70">Работаем по договору, предоставляем закрывающие документы.</p>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
              Получить коммерческое предложение
              <Icon name="Briefcase" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-charcoal to-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Как заказать?</h2>
            <p className="text-light/70 text-xl">Вам не нужен чертеж. Достаточно идеи на салфетке.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {orderSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warm text-dark font-bold text-2xl mb-4">{step.num}</div>
                  <h3 className="text-2xl font-serif font-bold mb-3">{step.title}</h3>
                  <p className="text-light/70">{step.description}</p>
                </div>
                {index < orderSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-12 text-warm/30">
                    <Icon name="ArrowRight" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4">Всё, что вы хотели знать,<br />но боялись спросить</h2>
            <p className="text-light/70 text-xl">Мы ценим прозрачность. Вот честные ответы на самые популярные сомнения наших клиентов.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-charcoal border border-warm/20 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-warm">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-light/80 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto p-12 bg-gradient-to-br from-warm/20 via-charcoal to-graphite border-warm/30 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">Не знаете, какой образ выбрать?</h2>
            <p className="text-light/80 text-lg mb-8">Ответьте на 4 вопроса и получите расчет стоимости + скидку 5%.</p>
            <Button size="lg" className="bg-warm text-dark hover:bg-warm-light">
              Пройти квиз
              <Icon name="Sparkles" className="ml-2" size={20} />
            </Button>
          </Card>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">Готовы воплотить свою<br />мечту в реальность?</h2>
          <p className="text-light/70 text-xl mb-12">Не ограничивайте свою фантазию. Расскажите нам о своей идее прямо сейчас, и мы превратим её в вечный артефакт.</p>

          <div className="flex flex-wrap justify-center gap-4">
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

      <footer className="py-12 bg-dark border-t border-warm/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl font-bold text-warm">OW</div>
                <div className="text-xl font-serif">OBRAZWILL</div>
              </div>
              <p className="text-light/60 text-sm">Мастерская уникальных масок и бутафории</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-light/60 hover:text-warm transition"><Icon name="Send" size={24} /></a>
              <a href="#" className="text-light/60 hover:text-warm transition"><Icon name="MessageCircle" size={24} /></a>
            </div>
          </div>
          <div className="text-center text-light/40 text-sm mt-8">© 2026 Obrazwill. Все права защищены.</div>
        </div>
      </footer>

      <a href="#" className="fixed bottom-8 right-8 w-16 h-16 bg-warm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50">
        <Icon name="MessageCircle" size={28} className="text-dark" />
      </a>
    </div>
  );
};

export default Index;
