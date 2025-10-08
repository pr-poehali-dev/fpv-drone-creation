import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const benefits = [
  {
    icon: 'Handshake',
    title: 'Выгодные условия',
    description: 'Индивидуальные цены и гибкие условия сотрудничества'
  },
  {
    icon: 'Headphones',
    title: 'Техподдержка 24/7',
    description: 'Круглосуточная поддержка и консультации специалистов'
  },
  {
    icon: 'TrendingUp',
    title: 'Рост вместе с нами',
    description: 'Программы развития и совместные проекты'
  },
  {
    icon: 'Shield',
    title: 'Надежность',
    description: 'Гарантия качества и своевременные поставки'
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 bg-gradient-to-b from-slate-900 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
            <span className="text-secondary font-medium">Партнерам</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Сотрудничество с <span className="text-secondary">Флайтех</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы ценим наших партнеров и предлагаем лучшие условия для долгосрочного сотрудничества
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group hover:border-secondary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit.icon as any} size={28} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/30 p-8 md:p-12 text-center animate-fade-in">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Готовы начать сотрудничество?
            </h3>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и наш менеджер свяжется с вами в течение 24 часов для обсуждения условий партнерства
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                <Icon name="Mail" size={20} />
                Отправить заявку
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-secondary/30">
                <Icon name="Phone" size={20} />
                Позвонить нам
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
