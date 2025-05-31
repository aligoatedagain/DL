
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import product1 from '../assests/product1.png'
import product2 from '../assests/product2.png'
import product3 from '../assests/product3.png';
import product4 from '../assests/product4.png';
import product5 from '../assests/product5.png';
import productlast from '../assests/productlast.png';

const Products = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const { t } = useLanguage();

  const allProducts = [
    {
   
  titleKey: "فستان سهرة بليسيه بتصميم فاخر وتدرجات لونية",
  descriptionKey: "تصميم عالي الجودة بطباعة رقمية وتدرج ألوان أنيق",
  fullDescriptionKey: "فستان بليسيه بستايل مياكي، مثالي للسهرات والمناسبات الخاصة. خامة فاخرة ومقاس واحد مريح.",
  image: product1,
  price: "30 - 499 قطعة: $32 | 500 قطعة وأكثر: $30",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"

    },
   {
  titleKey: "فستان ماكسي مطبوع بزهور وأكمام طويلة من مياكي",
  descriptionKey: "فستان كاجوال مطبوع بجودة عالية وألوان زاهية",
  fullDescriptionKey: "تصميم بليسيه أنيق بطابع عرقي وأزهار ملونة، مثالي للمناسبات اليومية.",
  image: product2,
  price: "30 - 499 قطعة: $24 | 500 قطعة وأكثر: $22",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"
}

,
 {
  titleKey: "فستان ماكسي مطبوع بزهور وأكمام طويلة من مياكي",
  descriptionKey: "فستان كاجوال مطبوع بجودة عالية وألوان زاهية",
  fullDescriptionKey: "تصميم بليسيه أنيق بطابع عرقي وأزهار ملونة، مثالي للمناسبات اليومية.",
  image: product3,
  price: "30 - 499 قطعة: $23 | 500 قطعة وأكثر: $21",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"
}


,
   {
  titleKey: "فستان مياكي واسع بطبعة حديثة وأكمام خفاش، مقاس كبير",
  descriptionKey: "فستان كاجوال واسع بنمط قلم رصاص وطباعة أنيقة",
  fullDescriptionKey: "تصميم مريح بكم واسع يناسب المقاسات الكبيرة، مثالي للإطلالات اليومية.",
  image: product4,
  price: "30 - 499 قطعة: $25 | 500 - 1999 قطعة: $22 | 2000 قطعة وأكثر: $20",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"
},
   {
  titleKey: "فستان مياكي عالي الجودة بطبعة 2023 وقَصّة واسعة، ستايل ريترو",
  descriptionKey: "فستان بليسيه بطبعة جديدة، ستايل قديم ومقاس واسع بأكمام خفاش",
  fullDescriptionKey: "خامة ممتازة بتصميم مريح وأنيق، مناسب للمقاسات الكبيرة ولمظهر عصري بلمسة كلاسيكية.",
  image: product5,
  price: "30 - 499 قطعة: $28 | 500 - 999 قطعة: $27 | 1000 قطعة وأكثر: $26",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"
}
,
   {
  titleKey: "عبايات عالية الجودة دبي والشرق الأوسط - بدلة كفتان إسلامية للنساء",
  descriptionKey: "عباية كارما ماكسي توغا بتصميم إسلامي أنيق ومريح",
  fullDescriptionKey: "عباية فاخرة تجمع بين الأصالة والراحة، مثالية للمناسبات الإسلامية واليومية.",
  image: productlast,
  price: "30 - 499 قطعة: $25 | 500 - 1999 قطعة: $22 | 2000 قطعة وأكثر: $19",
  minOrderKey: "30 قطعة",
  badgeKey: "الأكثر مبيعًا"
}

  ];

  const displayedProducts = showAllProducts ? allProducts : allProducts.slice(0, 3);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
            {t('products.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={product.image}
                  alt={t(product.titleKey)}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-white shadow-sm">
                  {t(product.badgeKey)}
                </Badge>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-primary mb-2 font-arabic">
                  {t(product.titleKey)}
                </h3>
                <h4 className="text-sm font-medium text-accent mb-3 font-arabic">
                  {t(product.descriptionKey)}
                </h4>
                <p className="text-gray-600 mb-4 font-arabic leading-relaxed text-sm">
                  {t(product.fullDescriptionKey)}
                </p>
                <div className="mb-4">
                  <div className="text-lg font-bold text-primary mb-1 font-arabic">
                    {product.price}
                  </div>
                  <div className="text-sm text-accent font-arabic">
                    {t(product.minOrderKey)}
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-arabic shadow-sm">
                  {t('products.getQuote')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-arabic shadow-sm"
            onClick={() => setShowAllProducts(!showAllProducts)}
          >
            {showAllProducts ? t('products.showLess') : t('products.showAll')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
