
// export default About;
import { Button } from '@/components/ui/button';
import DesignManuscript from '../assests/DesignManuscript.png';
import ABOUT2 from '../assests/ABOUT2.jpg';
import ABOUT3 from '../assests/ABOUT3.jpg';
import ABOUT4 from '../assests/ABOUT4.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-arabic">
              مصنع Zhuoyang: الأناقة المطوية بخبرة صينية
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-arabic leading-relaxed">
              في قلب مدينة دونغقوان، وعلى مساحة 6000 متر مربع، يضم مصنع Zhuoyang أكثر من 100 موظف 
              محترف يعملون بشغف لإبداع أزياء نسائية مطوية عالية الجودة، تمزج بين التصميم العصري والحرفية الرفيعة.
            </p>
            <p className="text-lg text-gray-700 mb-8 font-arabic leading-relaxed">
              نُتقن فن الطيات ونتحكم بدقة في كل مرحلة من مراحل الإنتاج، من التصميم ثلاثي الأبعاد إلى الفحص النهائي.
              نقدم لك تجربة موثوقة من خلال خدمات تصميم، إنتاج، تفصيل، وتوصيل في مكان واحد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-arabic">
                تعرف على خدماتنا
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-arabic">
                شاهد عملية التصنيع
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src={DesignManuscript}
                  alt="تصميم الأزياء"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={ABOUT2}
                  alt="تقنية الطيات"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src={ABOUT3}
                  alt="فحص الأقمشة"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img 
                  src={ABOUT4}
                  alt="المنتج النهائي"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm text-center font-arabic leading-tight">
                أكثر من<br />100 موظف
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
