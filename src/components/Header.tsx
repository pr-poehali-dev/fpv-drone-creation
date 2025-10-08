import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold">НПЦ Флайтех</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('products')} className="text-foreground/80 hover:text-primary transition-colors">
              Продукция
            </button>
            <button onClick={() => scrollToSection('partners')} className="text-foreground/80 hover:text-primary transition-colors">
              Партнерам
            </button>
            <button onClick={() => scrollToSection('files')} className="text-foreground/80 hover:text-primary transition-colors">
              Документы
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground/80 hover:text-primary transition-colors">
              Контакты
            </button>
            <Button className="gap-2">
              <Icon name="Phone" size={18} />
              Связаться
            </Button>
          </nav>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Продукция
            </button>
            <button 
              onClick={() => scrollToSection('partners')} 
              className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Партнерам
            </button>
            <button 
              onClick={() => scrollToSection('files')} 
              className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Документы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')} 
              className="text-left py-2 text-foreground/80 hover:text-primary transition-colors"
            >
              Контакты
            </button>
            <Button className="gap-2 w-full">
              <Icon name="Phone" size={18} />
              Связаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;