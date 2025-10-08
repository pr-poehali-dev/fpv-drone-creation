import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const contactInfo = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'Info@флайтех.рф',
    link: 'mailto:Info@xn--80aafoeqcb8c.xn--p1ai'
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    link: 'tel:+74951234567'
  },
  {
    icon: 'MapPin',
    title: 'Адрес',
    value: 'г. Пермь, ул. Маршала Рыбалко, д. 74',
    link: '#'
  }
];

const Contacts = () => {
  return (
    <section id="contacts" className="py-24 bg-gradient-to-b from-background to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-medium">Контакты</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Свяжитесь с <span className="text-primary">нами</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы и обсудить возможности сотрудничества
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Наши контакты</h3>
            
            {contactInfo.map((item, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <a href={item.link} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                      <div className="text-lg font-medium">{item.value}</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">ООО "НПЦ "ФТ"</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>ИНН: 5902068694</p>
                  <p>КПП: 590201001</p>
                  <p>ОГРН: 1245900015943</p>
                  <p>Р/с: 40702810210001685977</p>
                  <p>БИК: 044525974 (АО «ТБанк»)</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Ваше сообщение" 
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Icon name="Send" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;