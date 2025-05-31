

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-arabic">
            تواصل معنا
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-arabic">
            نحن هنا لخدمتك! تواصل معنا اليوم لمناقشة احتياجاتك أو طلب عينات مجانية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 font-arabic">
              معلومات التواصل
            </h3>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-arabic">هاتف</h4>
                    <p className="text-gray-600" dir="ltr">+86 137 2847 5958</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-arabic">بريد إلكتروني</h4>
                    <p className="text-gray-600" dir="ltr">zhuoyangcompany@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-arabic">العنوان</h4>
                    <p className="text-gray-600 font-arabic">
                      غرفة 401، رقم 30، طريق تشينشينغ، مدينة هو من، دونغقوان، قوانغدونغ، الصين
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary font-arabic">ساعات العمل</h4>
                    <p className="text-gray-600 font-arabic">الإثنين - الجمعة: 8:30 - 17:30</p>
                    <p className="text-gray-600 font-arabic">السبت: 9:00 - 12:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 font-arabic">
                  احصل على عرض سعر
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                      الاسم الكامل
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                      البريد الإلكتروني
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                      رقم الهاتف
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="+966 xxx xxx xxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                      المنتجات المطلوبة
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent">
                      <option>اختر المنتج</option>
                      <option>فساتين مطوية</option>
                      <option>بدلات نسائية</option>
                      <option>قمصان مطوية</option>
                      <option>جميع المنتجات</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                      رسالتك
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      placeholder="أخبرنا عن احتياجاتك..."
                    ></textarea>
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-arabic">
                    إرسال الطلب
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
