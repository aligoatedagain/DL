
import { Layers, Sparkles, Settings, Factory } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "تصاميم مخصصة وعصرية",
      description: "فريق تصميم محترف يتابع صيحات الموضة العالمية ويقدّم أكثر من 200 موديل جديد يوميًا."
    },
    {
      icon: Layers,
      title: "تقنية كسرات متقدمة",
      description: "متخصصون في فن الكسرات الراقية، ننتج ملابس نسائية أنيقة بدقة وجودة استثنائية."
    },
    {
      icon: Settings,
      title: "خدمة متكاملة",
      description: "من التصميم إلى الإنتاج والتوصيل، نقدم لك تجربة شراء سهلة باحترافية عالية."
    },
    {
      icon: Factory,
      title: "مصنع حديث بمعدات متطورة",
      description: "نعمل بمصنع بمساحة ٦٠٠٠ م² في الصين ويضم أكثر من ١٠٠ موظف وخط إنتاج متكامل."
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
            مميزاتنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
            ندمج بين الحرفية الصينية والذوق العربي لنقدم ملابس نسائية فاخرة تلائم أسواق الخليج.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                <feature.icon className="w-8 h-8 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 font-arabic">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-arabic leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
