import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background pt-20 md:pt-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-medium">НПЦ Флайтех</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Беспилотные системы
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                на собственных технологиях
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Полный цикл разработки и производства БПЛА различного типа на полностью российских технологиях — от электроники до программного обеспечения
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <Button size="lg" className="gap-2 text-base sm:text-lg w-full sm:w-auto">
                <Icon name="Rocket" size={20} />
                Наша продукция
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base sm:text-lg border-primary/30 w-full sm:w-auto">
                <Icon name="Users" size={20} />
                Стать партнером
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 md:pt-8 border-t border-primary/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Продуктов</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-secondary">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Качество</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-glow"></div>
            <img 
              src="https://cdn.poehali.dev/projects/31c9e6b1-b1f4-476f-99eb-a92d43090641/files/c88e7641-e507-4c35-892d-b916331d1119.jpg"
              alt="Боевой FPV дрон Флайтех"
              className="relative rounded-2xl shadow-2xl border border-primary/20 w-full"
            />
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-card/90 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-primary/30 shadow-xl">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="p-2 md:p-3 bg-primary/20 rounded-lg">
                  <Icon name="Cpu" size={20} className="text-primary md:w-6 md:h-6" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-muted-foreground">Мощность</div>
                  <div className="text-sm md:text-lg font-bold">Высокие технологии</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default Hero;