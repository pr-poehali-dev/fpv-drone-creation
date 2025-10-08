import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-medium">НПЦ Флайтех</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Беспилотные системы
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                на собственных технологиях
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Полный цикл разработки и производства БПЛА различного типа на полностью российских технологиях — от электроники до программного обеспечения
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-lg">
                <Icon name="Rocket" size={20} />
                Наша продукция
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg border-primary/30">
                <Icon name="Users" size={20} />
                Стать партнером
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/20">
              <div>
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Продуктов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Качество</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse-glow"></div>
            <img 
              src="https://cdn.poehali.dev/projects/31c9e6b1-b1f4-476f-99eb-a92d43090641/files/9b653db5-a232-43c1-9c7a-5987cae38369.jpg"
              alt="FPV дроны Флайтех"
              className="relative rounded-2xl shadow-2xl border border-primary/20"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm p-6 rounded-xl border border-primary/30 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Icon name="Cpu" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Мощность</div>
                  <div className="text-lg font-bold">Высокие технологии</div>
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