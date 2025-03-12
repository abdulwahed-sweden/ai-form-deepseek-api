بالطبع! إليك الكود الكامل لملف `README.md` في كود واحد يمكنك نسخه ولصقه مباشرة:

```markdown
# AI Form DeepSeek API

هذا المشروع عبارة عن نموذج ويب يتصل بـ **DeepSeek API** لجلب الردود المولدة بواسطة الذكاء الاصطناعي. تم بناء المشروع باستخدام **HTML**، **CSS**، **Bootstrap**، و **JavaScript**. يسمح النموذج للمستخدمين بإدخال استعلاماتهم، وإرسال البيانات إلى DeepSeek API، وعرض النتيجة مع نسب الثقة من مصادر بيانات مختلفة.

---

## الميزات

- **نموذج سهل الاستخدام**: نموذج متجاوب مبني باستخدام Bootstrap لجمع مدخلات المستخدم.
- **التكامل مع DeepSeek API**: إرسال استعلامات المستخدم إلى DeepSeek API وجلب الردود.
- **نسب الثقة**: عرض نسب الثقة للنتائج من:
  - البيانات الداخلية للشركة.
  - أسئلة المستخدمين المخزنة في قاعدة بيانات Redis.
  - الردود المولدة بواسطة الذكاء الاصطناعي.
- **مؤشر التحميل**: عرض مؤشر تحميل أثناء انتظار الرد من API.
- **دعم اللغة العربية**: يدعم النص العربي بالكامل باستخدام خط **Noto Naskh Arabic**.
- **تصميم متجاوب**: يعمل بشكل سلس على أجهزة الكمبيوتر والهواتف المحمولة.

---

## لقطات الشاشة

![لقطة النموذج](screenshots/form.png)  
*النموذج مع مدخلات المستخدم.*

![لقطة النتيجة](screenshots/result.png)  
*قسم النتيجة مع نسب الثقة.*

---

## تعليمات الإعداد

### المتطلبات الأساسية

1. **Node.js**: تأكد من تثبيت Node.js على جهازك.
2. **مفتاح DeepSeek API**: احصل على مفتاح API من [DeepSeek](https://deepseek.com).

### التثبيت

1. استنسخ المستودع:
   ```bash
   git clone https://github.com/your-username/ai-form-deepseek-api.git
   cd ai-form-deepseek-api
   ```

2. قم بتثبيت التبعيات (إذا كانت موجودة):
   ```bash
   npm install
   ```

3. أضف مفتاح DeepSeek API:
   - افتح ملف `script.js`.
   - استبدل `YOUR_DEEPSEEK_API_KEY` بمفتاح API الفعلي الخاص بك.

4. قم بتشغيل المشروع:
   - افتح ملف `index.html` في متصفحك.

---

## طريقة الاستخدام

1. افتح النموذج في متصفحك.
2. املأ الحقول المطلوبة:
   - الاسم الأول
   - الاسم الأخير
   - البريد الإلكتروني
   - الاستعلام
3. اختر الخيارات الإضافية (مثل البلد، اللغة).
4. انقر على **إرسال الاستعلام**.
5. انتظر حتى يتم جلب الرد من API.
6. اعرض النتيجة مع نسب الثقة.

---

## هيكل الكود

```
ai-form-deepseek-api/
├── index.html            # الملف الرئيسي للنموذج
├── style.css             # ملف CSS للتخصيص
├── script.js             # ملف JavaScript للتعامل مع النموذج واستدعاء API
├── README.md             # وثائق المشروع
└── screenshots/          # مجلد لقطات الشاشة
```

---

## تكامل API

للتكامل مع DeepSeek API، استبدل الدالة `simulateDeepSeekAPI` في `script.js` بالكود التالي:

```javascript
async function callDeepSeekAPI(query) {
    const apiKey = 'YOUR_DEEPSEEK_API_KEY';
    const url = 'https://api.deepseek.com/v1/query';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ query })
    });

    const data = await response.json();
    return data.response;
}
```

---

## التخصيص

- **الخط**: قم بتغيير الخط عن طريق تحديث `font-family` في `style.css`.
- **نسب الثقة**: قم بتعديل نسب الثقة والتاغات في `index.html`.
- **نقطة نهاية API**: قم بتحديث نقطة نهاية API في `script.js` إذا لزم الأمر.

---

## الرخصة

هذا المشروع مرخص تحت **رخصة MIT**. راجع ملف [LICENSE](LICENSE) لمزيد من التفاصيل.

---

## المساهمة

المساهمات مرحب بها! يرجى اتباع الخطوات التالية:

1. انسخ المستودع.
2. قم بإنشاء فرع جديد (`git checkout -b feature/YourFeature`).
3. قم بإجراء التغييرات (`git commit -m 'Add some feature'`).
4. ادفع الفرع (`git push origin feature/YourFeature`).
5. افتح طلب سحب.

---

## التواصل

للاستفسارات أو الملاحظات، يرجى التواصل مع:  
**اسمك**  
البريد الإلكتروني: your.email@example.com  
GitHub: [your-username](https://github.com/your-username)
```

---

### كيفية الاستخدام:
1. انسخ الكود أعلاه.
2. الصقه في ملف جديد باسم `README.md`.
3. احفظ الملف في مجلد المشروع الخاص بك.

هذا الكود جاهز للاستخدام ويحتوي على كل التفاصيل اللازمة لفهم المشروع وتشغيله.
