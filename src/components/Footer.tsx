import Icon from '@/components/ui/icon';
import Logo from '@/components/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-primary/20 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">
              Передовые технологии для беспилотных систем
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Продукция</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>FPV дроны</li>
              <li>Перехватчики</li>
              <li>Системы РЭБ</li>
              <li>Наземные станции</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Компания</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>О нас</li>
              <li>Партнерам</li>
              <li>Вакансии</li>
              <li>Документы</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Контакты</h4>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Info@флайтех.рф</li>
              <li>@FlyTech59</li>
              <li className="hidden md:block">Пермь, Маршала Рыбалко, 74</li>
              <li className="md:hidden">Пермь, М. Рыбалко, 74</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs md:text-sm text-muted-foreground text-center md:text-left">
            © 2022-{currentYear} ООО "НПЦ "ФТ". Все права защищены.
          </p>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
              <Icon name="Mail" size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
            <a href="#" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
              <Icon name="Phone" size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;