import { Menu, Phone, Mail, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Top contact bar */}
        <div className="bg-primary text-white py-2 px-4 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div 
                className="flex items-center gap-2" 
                dir="ltr" 
                style={{ unicodeBidi: 'embed' }}
              >
                <Phone className="w-4 h-4" />
                <span>+86 138 0571 8899</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>zhuoyangcompany@gmail.com</span>
              </div>
            </div>
            {/* <span className="text-xs font-arabic">{t('header.freeShipping')}</span> */}
          </div>
        </div>
        
        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="md:hidden text-primary">
              <Menu className="w-5 h-5" />
            </Button>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-primary hover:text-accent transition-colors font-medium font-arabic">{t('header.home')}</a>
              <a href="#products" className="text-primary hover:text-accent transition-colors font-medium font-arabic">{t('header.products')}</a>
              <a href="#about" className="text-primary hover:text-accent transition-colors font-medium font-arabic">{t('header.about')}</a>
              <a href="#contact" className="text-primary hover:text-accent transition-colors font-medium font-arabic">{t('header.contact')}</a>
            </nav>
          </div>
          
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary font-arabic">{t('header.title')}</h1>
            <p className="text-sm text-gray-500 font-arabic">{t('header.subtitle')}</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={toggleLanguage}
              className="border-accent text-accent hover:bg-accent hover:text-white"
            >
              <Languages className="w-4 h-4 mr-1" />
              {language === 'ar' ? '中文' : 'عربي'}
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-white font-arabic shadow-sm">
              {t('header.samples')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
