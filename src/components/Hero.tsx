import { Button } from '@/components/ui/button';
import { ArrowLeft, Star } from 'lucide-react';
import main from '../assests/mainone.avif';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 via-white to-secondary/20 py-20" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in text-right">
            <div className="flex items-center gap-2 mb-6 justify-end">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-arabic">شركة تصنيع أزياء مميزة ومعتمدة</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-arabic leading-tight">
              أزياء تنكرية وملابس ثقافية عالية الجودة
              <br />
              <span className="text-accent">من الهالوين إلى الملابس الإسلامية والإفريقية</span>
            </h2>

            <p className="text-lg text-gray-600 mb-4 font-arabic leading-relaxed">
              نحن Hongbo Mingchuang – شركة متخصصة في تصنيع ملابس الهالوين، الزينتاي، الأزياء الإسلامية، والملابس الثقافية بأسلوب احترافي وابتكاري.
            </p>

            <p className="text-lg text-gray-600 mb-8 font-arabic leading-relaxed">
              نوفر خدمة التصميم المخصص، إنتاج ضخم، ودعم الشحن العالمي لجميع الأسواق. منتجاتنا تحظى بثقة عملائنا في أكثر من 50 دولة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-arabic text-lg px-8 shadow-lg flex-row-reverse">
                استعرض المنتجات
                <ArrowLeft className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-arabic text-lg shadow-sm">
                اطلب الكتالوج
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+ سنوات</div>
                <div className="text-sm text-gray-500 font-arabic">من الخبرة في الأزياء الخاصة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+ دولة</div>
                <div className="text-sm text-gray-500 font-arabic">نغطي الأسواق العالمية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">دروبشيبينغ</div>
                <div className="text-sm text-gray-500 font-arabic">متوفر وخدمة تخصيص</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/5 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {main && <img src={main} alt="أزياء تنكرية وعالمية" />}
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-xl shadow-lg">
                <div className="text-sm font-arabic font-medium">متخصصون في الهالوين والتخصيص</div>
                <div className="text-xs opacity-90">جاهزون لتصدير عالمي</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
