import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface Slide {
  id: number;
  title: string;
  content: string[];
  icon: string;
  color: string;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Технология фрезерования набором фрез",
      content: [
        "Высокопроизводительный метод механической обработки",
        "Одновременная обработка нескольких поверхностей",
        "Применение в серийном и массовом производстве",
        "Повышение точности и качества обработки"
      ],
      icon: "Settings",
      color: "primary"
    },
    {
      id: 2,
      title: "Принцип работы",
      content: [
        "Набор фрез устанавливается на одной оправке",
        "Синхронная обработка нескольких участков детали",
        "Фрезы подбираются под конкретную геометрию",
        "Жесткое крепление обеспечивает точность размеров"
      ],
      icon: "Cog",
      color: "secondary"
    },
    {
      id: 3,
      title: "Виды наборов фрез",
      content: [
        "Цилиндрические фрезы — для обработки плоскостей",
        "Торцевые фрезы — для уступов и торцов",
        "Концевые фрезы — для пазов и контуров",
        "Фасонные фрезы — для сложных профилей"
      ],
      icon: "Layers",
      color: "accent"
    },
    {
      id: 4,
      title: "Преимущества технологии",
      content: [
        "Сокращение времени обработки в 3-5 раз",
        "Высокая точность геометрических размеров",
        "Снижение себестоимости производства",
        "Возможность автоматизации процесса"
      ],
      icon: "TrendingUp",
      color: "primary"
    },
    {
      id: 5,
      title: "Области применения",
      content: [
        "Автомобилестроение — корпусные детали",
        "Авиационная промышленность — высокоточные детали",
        "Станкостроение — базовые элементы",
        "Приборостроение — мелкосерийное производство"
      ],
      icon: "Factory",
      color: "secondary"
    },
    {
      id: 6,
      title: "Режимы резания",
      content: [
        "Скорость резания: 80-400 м/мин (зависит от материала)",
        "Подача на зуб: 0.05-0.2 мм/зуб",
        "Глубина резания: до 10 мм за проход",
        "Использование СОЖ обязательно для охлаждения"
      ],
      icon: "Gauge",
      color: "accent"
    },
    {
      id: 7,
      title: "Технологические особенности",
      content: [
        "Установка фрез с компенсацией биения",
        "Правильный подбор расстояний между фрезами",
        "Контроль износа режущих кромок",
        "Регулярная переточка и замена инструмента"
      ],
      icon: "AlertCircle",
      color: "primary"
    },
    {
      id: 8,
      title: "Современные тенденции",
      content: [
        "ЧПУ станки с автоматической сменой инструмента",
        "Твердосплавные и керамические покрытия фрез",
        "CAM системы для оптимизации траекторий",
        "Интеллектуальный мониторинг процесса обработки"
      ],
      icon: "Cpu",
      color: "secondary"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute top-0 left-0 right-0 z-20">
        <Progress value={progress} className="h-1 rounded-none" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-6 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
              <Icon name="Presentation" size={24} className="text-primary" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="backdrop-blur-sm"
            >
              <Icon name="ChevronLeft" size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="backdrop-blur-sm"
            >
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <Card className="max-w-5xl w-full backdrop-blur-sm bg-card/50 border-border/50 shadow-2xl animate-scale-in">
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className={`p-4 bg-${slide.color}/10 rounded-2xl border border-${slide.color}/20 animate-glow`}>
                  <Icon name={slide.icon as any} size={48} className={`text-${slide.color}`} />
                </div>
                <div className="flex-1">
                  <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {slide.title}
                  </h1>
                  <div className="h-1 w-32 bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>

              <div className="grid gap-4 mt-8">
                {slide.content.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:translate-x-2 border border-border/50 hover:border-primary/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mt-1 p-1.5 bg-primary/10 rounded-lg">
                      <Icon name="CheckCircle2" size={20} className="text-primary" />
                    </div>
                    <p className="text-lg text-foreground leading-relaxed flex-1">{item}</p>
                  </div>
                ))}
              </div>

              {currentSlide === 0 && (
                <div className="mt-12 grid grid-cols-3 gap-4">
                  <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2">3-5x</div>
                    <div className="text-sm text-muted-foreground">Ускорение обработки</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-secondary/5 border border-secondary/10">
                    <div className="text-4xl font-bold text-secondary mb-2">±0.01</div>
                    <div className="text-sm text-muted-foreground">Точность, мм</div>
                  </div>
                  <div className="text-center p-6 rounded-xl bg-accent/5 border border-accent/10">
                    <div className="text-4xl font-bold text-accent mb-2">40%</div>
                    <div className="text-sm text-muted-foreground">Экономия затрат</div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </main>

        <footer className="p-6 flex items-center justify-between backdrop-blur-sm">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Wrench" size={16} className="text-primary" />
            <span>Технология фрезерования</span>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-8 right-8 z-30 flex gap-2">
        <Button
          size="lg"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-card/50 backdrop-blur-sm hover:bg-card shadow-xl"
          variant="outline"
        >
          <Icon name="ArrowLeft" className="mr-2" size={20} />
          Назад
        </Button>
        <Button
          size="lg"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl hover:shadow-primary/50"
        >
          Далее
          <Icon name="ArrowRight" className="ml-2" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Index;
