
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'zh';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Header
    'header.title': 'زهرة الأناقة',
    'header.subtitle': 'للأزياء النسائية المطوية',
    'header.home': 'الرئيسية',
    'header.products': 'المنتجات',
    'header.about': 'من نحن',
    'header.contact': 'اتصل بنا',
    'header.samples': 'طلب عينات',
    'header.freeShipping': 'شحن مجاني للطلبات أكثر من 500 ريال',
    // Products
    'products.title': 'مجموعاتنا المميزة',
    'products.subtitle': 'نقدم لك أفضل تشكيلة من الملابس النسائية المطوية بجودة عالية وتصاميم عصرية تناسب ذوقك الرفيع',
    'products.showAll': 'عرض جميع المنتجات',
    'products.showLess': 'عرض منتجات أقل',
    'products.getQuote': 'طلب عرض سعر',
    'products.minOrder': 'الحد الأدنى: قطعتين',
    'products.dress': 'فستان ميياكي المطوي عالي الجودة',
    'products.skirt': 'تنورة ميياكي المطوية المخصصة عالية الجودة',
    'products.shirt': 'قميص ميياكي المطوي المخصص عالي الجودة',
    'products.suit': 'بدلة ميياكي المطوية المخصصة عالية الجودة',
    'products.jacket': 'جاكيت ميياكي المطوي المخصص عالي الجودة',
    'products.eveningDress': 'فستان سهرة ميياكي المطوي المخصص',
    'products.description': 'بكشكشة غير منتظمة ولون موحد محافظ',
    'products.fullDescription': 'أنيق بأكمام طويلة ورقبة دائرية، مصنوع بجودة عالية من أقمشة مطوية فاخرة',
    // Badges
    'badge.bestseller': 'الأكثر مبيعاً',
    'badge.new': 'جديد',
    'badge.limited': 'محدود',
    'badge.featured': 'مميز',
    'badge.trendy': 'عصري',
    'badge.elegant': 'راقي'
  },
  zh: {
    // Header
    'header.title': '东莞卓洋服饰有限公司',
    'header.subtitle': '女装褶皱时装',
    'header.home': '首页',
    'header.products': '产品',
    'header.about': '关于我们',
    'header.contact': '联系我们',
    'header.samples': '申请样品',
    'header.freeShipping': '订单满500里亚尔免费送货',
    // Products
    'products.title': '我们的精选系列',
    'products.subtitle': '为您提供最优质的女装褶皱服饰，高品质现代设计，满足您的精致品味',
    'products.showAll': '查看所有产品',
    'products.showLess': '收起产品',
    'products.getQuote': '询价',
    'products.minOrder': '最小订单：2件',
    'products.dress': '定制高品质三宅褶皱连衣裙',
    'products.skirt': '定制高品质三宅褶皱半身裙',
    'products.shirt': '定制高品质三宅褶皱衬衫',
    'products.suit': '定制高品质三宅褶皱套装',
    'products.jacket': '定制高品质三宅褶皱外套',
    'products.eveningDress': '定制三宅褶皱晚礼服',
    'products.description': '不规则荷叶边纯色保守款',
    'products.fullDescription': '优雅长袖圆领设计，采用高品质奢华褶皱面料制作',
    // Badges
    'badge.bestseller': '热销',
    'badge.new': '新品',
    'badge.limited': '限量',
    'badge.featured': '精选',
    'badge.trendy': '时尚',
    'badge.elegant': '典雅'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'zh' : 'ar');
    // Update document direction
    document.dir = language === 'ar' ? 'ltr' : 'rtl';
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
