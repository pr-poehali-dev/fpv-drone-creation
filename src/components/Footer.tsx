import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Флайтех</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Передовые технологии для беспилотных систем
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>FPV дроны</li>
              <li>Перехватчики</li>
              <li>Системы РЭБ</li>
              <li>Наземные станции</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>О нас</li>
              <li>Партнерам</li>
              <li>Вакансии</li>
              <li>Документы</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Info@флайтех.рф</li>
              <li>@FlyTech59</li>
              <li>Пермь, Маршала Рыбалко, 74</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2022-{currentYear} ООО "НПЦ "ФТ". Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
              <Icon name="Mail" size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
              <Icon name="Phone" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;