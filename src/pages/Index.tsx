import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Partners from '@/components/Partners';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Partners />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
};

export default Index;