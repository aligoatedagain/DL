// export default Footer;
import { Globe, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-arabic">هونغبو مينغ تشوانغ</h3>
            <p className="text-white/80 mb-4 font-arabic leading-relaxed">
              مصنع متخصص في الأزياء التنكرية وملابس الزينتاي والملابس الأفريقية والإسلامية. 
              نقدم خدمات مخصصة وتصدير عالي الجودة للأسواق العالمية.
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
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">ملابس تنكرية</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">بدلات زينتاي</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">ملابس إسلامية</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">ملابس أفريقية</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-arabic">خدماتنا</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">تخصيص المنتجات</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">طلبات بالجملة</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">تصميم حسب الطلب</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-arabic">شحن دولي سريع</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 font-arabic">تواصل معنا</h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>hongbo.factory@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="font-arabic">
                  مدينة ووهان، الصين – منطقة تطوير التكنولوجيا، شارع نانكو
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-arabic">
              © 2025 هونغبو مينغ تشوانغ – جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://hongbomingchuang.en.alibaba.com/productgrouplist-941587464/Muslim_Clothing.html?spm=a2700.shop_index.227.4.2f31491eeC1y8j" 
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
