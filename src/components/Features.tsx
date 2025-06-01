import { Layers, Sparkles, Settings, Factory } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "أزياء تنكرية وملابس مميزة",
      description: "نوفر تشكيلة واسعة من ملابس الهالوين، الزينتاي، والأزياء الخاصة التي تناسب جميع الأعمار والمناسبات."
    },
    {
      icon: Layers,
      title: "خدمة تخصيص احترافية",
      description: "نساعدك في تنفيذ فكرتك إلى منتج نهائي – سواء كنت علامة تجارية أو تاجر جملة."
    },
    {
      icon: Settings,
      title: "دعم التصدير والدروبشيبينغ",
      description: "نلبي طلبات الأسواق العالمية مع خيارات شحن مرنة وخدمة دروبشيبينغ فعّالة."
    },
    {
      icon: Factory,
      title: "مصنع موثوق بخبرة 4 سنوات",
      description: "نعمل في بيئة إنتاج احترافية تضمن لك جودة المنتجات وسرعة التسليم."
    }
  ];

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
            لماذا تختارنا؟
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
            نُصمم أزياء خاصة وعالمية بجودة تصدير عالية، ونلبي احتياجات التجار والمتاجر في الخليج والأسواق العالمية.
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
