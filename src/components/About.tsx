import { Button } from '@/components/ui/button';
import ABOUT1 from '../assests/ABOUT1.jpg';
import ABOUT2 from '../assests/ABOUT2.jpg';
import ABOUT3 from '../assests/ABOUT3.jpg';
import ABOUT4 from '../assests/ABOUT4.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-arabic">
              هونغبو مينغ تشوانغ: خبراء الملابس التنكرية والتخصيص
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-arabic leading-relaxed">
              منذ أكثر من 10 سنوات، تعمل شركة Hongbo Mingchuang في تصنيع وتصدير الأزياء التنكرية 
              وملابس الزينتاي والملابس الإسلامية والأفريقية، بتركيز خاص على التخصيص حسب الطلب.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-arabic leading-relaxed">
              في مصنعنا الحديث بمدينة ووهان، نقوم بتصميم وإنتاج ملابس مميزة تناسب احتياجات 
              الأسواق العالمية، بما في ذلك المتاجر الإلكترونية والموردين في الخليج. نضمن لك جودة 
              عالية وتسليم سريع وخدمة مرنة حسب الكمية.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-arabic">
                تعرف على خدماتنا
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-arabic">
                تصفح أنواع المنتجات
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={ABOUT1}
                  alt="تصميم الأزياء"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={ABOUT2}
                  alt="قسم الإنتاج"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src={ABOUT3}
                  alt="فحص الجودة"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={ABOUT4}
                  alt="المنتجات النهائية"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm text-center font-arabic leading-tight">
                أكثر من<br />4 سنوات خبرة
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
