
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
  titleKey: "عباية عيد متلألئة مطرزة بشيفون وحبيبات لامعة",
  descriptionKey: "عباية طويلة واسعة بتطريز فاخر مناسبة لعيد الفطر أو الأضحى",
  fullDescriptionKey: "تصميم أنيق من الشيفون المزخرف بحبيبات لامعة، متوفر للتخصيص ومثالي للأعياد والمناسبات.",
  image: product1,
  price: "5 - 499 قطعة: $25.59 | 500 - 1999 قطعة: $25.39 | 2000 قطعة وأكثر: $24.19",
  minOrderKey: "5 قطع",
  badgeKey: "الأكثر مبيعًا"
}
,
  {
  titleKey: "عباية عيد متلألئة مطرزة بشيفون وحبيبات لامعة",
  descriptionKey: "عباية طويلة واسعة بتطريز فاخر مناسبة لعيد الفطر أو الأضحى",
  fullDescriptionKey: "تصميم أنيق من الشيفون المزخرف بحبيبات لامعة، متوفر للتخصيص ومثالي للأعياد والمناسبات.",
  image: product2,
  price: "5 - 499 قطعة: $25.59 | 500 - 1999 قطعة: $25.39 | 2000 قطعة وأكثر: $24.19",
  minOrderKey: "5 قطع",
  badgeKey: "الأكثر مبيعًا"
}


,
{
  titleKey: "فستان عباية مطرز بزهور ثلاثية الأبعاد للشرق الأوسط وأوروبا",
  descriptionKey: "فستان صلاة إسلامي أنيق للنساء بتطريز فاخر وواسع مريح",
  fullDescriptionKey: "تصميم أنيق بلمسة دينية مع تطريز زهور 3D، مثالي للعبادة والمناسبات.",
  image: product3,
  price: "5 - 499 قطعة: $14.39 | 500 - 1999 قطعة: $14.19 | 2000 قطعة وأكثر: $13.69",
  minOrderKey: "5 قطع",
  badgeKey: "الأكثر مبيعًا"
}


,
{
  titleKey: "أفضل عباية قطعتين للنساء المسلمات بأكمام طويلة",
  descriptionKey: "طقم مريح من توب وبنطال واسع، مثالي لرمضان والعيد",
  fullDescriptionKey: "تصميم أنيق ومحتشم من قطعتين بلمسة ماليزية، مناسب للأوقات الروحانية والمناسبات الإسلامية.",
  image:product4,
  price: "5 - 49 قطعة: $22.99 | 50 - 499 قطعة: $22.69 | 500 قطعة وأكثر: $22",
  minOrderKey: "5 قطع",
  badgeKey: "الأكثر مبيعًا"
}

,
   {
  titleKey: "أفضل عباية قطعتين للنساء المسلمات بأكمام طويلة",
  descriptionKey: "طقم مريح من توب وبنطال واسع، مثالي لرمضان والعيد",
  fullDescriptionKey: "تصميم أنيق ومحتشم من قطعتين بلمسة ماليزية، مناسب للأوقات الروحانية والمناسبات الإسلامية.",
  image: product5,
  price: "5 - 49 قطعة: $22.99 | 50 - 499 قطعة: $22.69 | 500 قطعة وأكثر: $22",
  minOrderKey: "5 قطع",
  badgeKey: "الأكثر مبيعًا"
}

,
  {
  titleKey: "فستان ساتان لامع بقَصّة باتوين عباية طويلة أنيقة للنساء",
  descriptionKey: "عباية ناعمة ولامعة بأسلوب شرقي محتشم، مثالية للمناسبات",
  fullDescriptionKey: "تصميم راقٍ من الساتان بقَصّة واسعة مريحة، يجمع بين الأناقة والحشمة بأسلوب عصري شرقي.",
  image: productlast,
  price: "10 - 499 قطعة: $12.59 (بعد الخصم: $11.33) | 500 - 1999 قطعة: $12.39 (بعد الخصم: $11.15) | 2000 قطعة وأكثر: $10.79",
  minOrderKey: "10 قطع",
  badgeKey: "خصم 10٪"
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
