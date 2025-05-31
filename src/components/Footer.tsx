
// export default Footer;
import { Globe, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-arabic">زهرة الأناقة</h3>
            <p className="text-white/80 mb-4 font-arabic leading-relaxed">
              علامة تجارية صينية رائدة في مجال الأزياء النسائية المطوية، 
              نقدم لكم أرقى التصاميم بجودة عالمية وأسعار تنافسية.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-arabic">منتجاتنا</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">فساتين مطوية</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">بدلات نسائية</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">قمصان أنيقة</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">إكسسوارات</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-arabic">خدماتنا</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">تصميم حسب الطلب</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">عينات مجانية</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">شحن دولي</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">ضمان الجودة</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 font-arabic">تواصل معنا</h4>
            <div className="space-y-3 text-white/80">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4" />
              <span dir="ltr" className="font-arabic">+86 137 2847 5958</span>
            </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>zhuoyangcompany@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="font-arabic">غرفة 401، رقم 30، طريق تشن شينغ، بلدة هومين، دونغقوان، قوانغدونغ، الصين</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-arabic">
             © 2025  جميع الحقوق محفوظه
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://1688zhuoyang.en.alibaba.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-lg font-arabic text-sm transition-colors"
              >
                متجر علي بابا
              </a>
              <span className="text-white/60 text-sm">|</span>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-arabic">سياسة الخصوصية</a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm font-arabic">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
