import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const files = [
  {
    name: 'Презентация компании',
    description: 'Общая информация о НПЦ Флайтех',
    icon: 'FileText',
    size: '2.5 MB',
    type: 'PDF',
    url: '#'
  },
  {
    name: 'Технические характеристики',
    description: 'Спецификации продукции',
    icon: 'FileSpreadsheet',
    size: '1.8 MB',
    type: 'PDF',
    url: '#'
  },
  {
    name: 'Сертификаты',
    description: 'Документы сертификации',
    icon: 'Award',
    size: '3.2 MB',
    type: 'PDF',
    url: '#'
  },
  {
    name: 'Прайс-лист',
    description: 'Актуальные цены на продукцию',
    icon: 'FileBarChart',
    size: '0.9 MB',
    type: 'XLSX',
    url: '#'
  }
];

const FileStorage = () => {
  return (
    <section id="files" className="py-24 bg-gradient-to-b from-slate-900 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-medium">Документы</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Файловое <span className="text-primary">хранилище</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Загрузите необходимые документы, презентации и технические материалы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {files.map((file, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Icon name={file.icon as any} size={28} className="text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-1">{file.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{file.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="px-2 py-1 bg-primary/10 rounded">{file.type}</span>
                      <span>{file.size}</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 border-primary/30 hover:bg-primary/10"
                      onClick={() => window.open(file.url, '_blank')}
                    >
                      <Icon name="Download" size={16} />
                      Скачать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Info" size={24} className="text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Нужен дополнительный документ?</p>
                  <p className="text-xs text-muted-foreground">Свяжитесь с нами через форму обратной связи</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FileStorage;
