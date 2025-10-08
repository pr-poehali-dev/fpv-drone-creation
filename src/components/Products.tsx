import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    title: 'FPV дроны',
    description: 'Дроны 10 и 15 дюймов для различных задач',
    icon: 'Plane',
    features: ['Дальность до 50км', 'HD видео', 'Автономность 2ч'],
    gradient: 'from-primary/20 to-purple-500/20'
  },
  {
    title: 'Перехватчики',
    description: 'Системы противодействия беспилотникам',
    icon: 'Target',
    features: ['Автоматическое обнаружение', 'Радиус действия 5км', 'Точность 99%'],
    gradient: 'from-secondary/20 to-cyan-500/20'
  },
  {
    title: 'Системы РЭБ',
    description: 'Радиоэлектронная борьба нового поколения',
    icon: 'Radio',
    features: ['Многочастотный диапазон', 'Модульная система', 'Портативность'],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'Наземные станции',
    description: 'Станции управления с расширенными возможностями',
    icon: 'MonitorDot',
    features: ['Управление до 10 БПЛА', 'Защищенная связь', 'Реальное время'],
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    title: 'Самолеты',
    description: 'Беспилотные летательные аппараты самолетного типа',
    icon: 'PlaneTakeoff',
    features: ['Дальность 100км+', 'Грузоподъемность 5кг', 'VTOL возможности'],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'Электроника',
    description: 'Компоненты и модули для интеграции',
    icon: 'Cpu',
    features: ['Контроллеры полета', 'Системы навигации', 'Модули связи'],
    gradient: 'from-blue-500/20 to-indigo-500/20'
  }
];

const Products = () => {
  return (
    <section id="products" className="py-12 md:py-24 bg-gradient-to-b from-background to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-medium text-sm md:text-base">Продукция</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Наши <span className="text-primary">решения</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Полный спектр высокотехнологичного оборудования для решения задач любой сложности
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={product.icon as any} size={32} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;