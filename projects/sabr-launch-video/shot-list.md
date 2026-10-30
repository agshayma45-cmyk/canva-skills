# سَبْر — قائمة اللقطات (Shot List)

طريقة العمل لكل لقطة:

1. نولّد **الإطار الأول** و**الإطار الأخير** كصور (2 رصيد للصورة)، ونعيدها لين تطلع ممتازة.
2. نحوّل الإطارين لفيديو بنموذج يدعم إطار البداية والنهاية، فتصير الانتقالات محسوبة ومو عشوائية.
3. النصوص العربية والشعار تنضاف في After Effects بسكربت `sabr-build.jsx`، وما تنولّد بالذكاء الاصطناعي.

هوية سَبْر (مأخوذة من تصاميم سَبْر على Canva: بطاقة العمل، وقوالب البوستات، وصفحة «تواصل معنا»):

| العنصر | القيمة |
|---|---|
| كحلي عميق | `#0A2540` |
| عاجي (ورق) | `#FAF4E7` / `#F6F1E8` |
| ذهبي معتّق | `#C49F58` |
| أزرق مائي فاتح | `#CCDFEB` |

القيم مأخوذة من صور مصغّرة للتصاميم، فهي تقريبية. لو عندك القيم الرسمية من دليل الهوية، استبدلها.

العناصر البصرية المتكررة في الهوية، ونستخدمها في اللقطات: ورق عاجي مصنوع يدويًا بملمس واضح، لطخة ألوان مائية زرقاء فاتحة تذوب في طرف الورق، ريشة كحلية مائية بحافة ذهبية رفيعة، خطوط ذهبية رفيعة مع معيّن صغير في المنتصف، نجوم ذهبية رباعية صغيرة، أوراق نباتية مائية، وكتاب مفتوح.
ممنوع في كل اللقطات: أشخاص، نصوص أو حروف، شعارات، مؤثرات سحرية، جزيئات متوهجة.

أسماء الملفات تحت هي اللي يتوقعها سكربت After Effects داخل مجلد `~/Sabr/clips/`.

---

## اللقطة 1 — ما وراء الورق (8 ثوانٍ) → `s1.mp4`

التعليق: «من إيمانٍ بأن وراء كل كلمة…»

**الإطار الأول `s1-start.png`**
```
Extreme macro cinematic photograph of several ultra-thin translucent warm ivory handmade paper sheets with soft deckled edges, a pale blue watercolor wash gently bleeding into the paper fibers along one edge, warm golden backlight glowing through the fibers, soft atmospheric haze, shallow depth of field, a narrow dark gap between two sheets in the center of the frame, airy and delicate, palette of warm ivory, pale watercolor blue, deep navy shadows and antique gold highlights, shot on ARRI Alexa with a 50mm macro lens, photorealistic, no text, no letters, no people, no logos
```

**الإطار الأخير `s1-end.png`**
```
Cinematic wide shot from inside a vast quiet world made of paper: towering layered cliffs of stacked ivory handmade pages receding into deep navy distance, soft drifts of deep navy and pale blue watercolor pigment diffusing through the air between the layers like mist, warm antique-gold light rays falling between the pages, a few tiny gold glints, immense depth and scale, a feeling of discovery, realistic materials and lighting, photorealistic, shot on ARRI Alexa with an anamorphic lens, no text, no letters, no people, no creatures, no glowing magic particles
```

**حركة الفيديو** (إطار أول ← إطار أخير)
```
The paper edges flutter gently in a soft breeze, then the camera slowly pushes forward and slips through the narrow gap between the two sheets, the light flares softly as it passes, revealing the vast layered paper world beyond. One continuous smooth camera move, realistic physics, no cuts.
```

---

## اللقطة 2 — معرفةٌ تستحق أن تُكتشف (5 ثوانٍ) → `s2.mp4`

خلفية للنص فقط. عبارة «معرفةً تستحق أن تُكتشف» تنكتب فوقها في After Effects من اليمين لليسار، وبعدين العدسة تدخل في كلمة «تُكتشف» وننتقل للمشهد الثالث.

**الإطار الأول `s2-start.png`**
```
Cinematic close-up of a large sheet of warm ivory handmade paper with visible fibers, a soft pale blue watercolor wash fading in from the left edge, a single thin antique-gold line crossing near the bottom, gentle golden light raking across the surface, deep navy vignette around the edges, generous empty space in the center for typography, calm and elegant, photorealistic, no text, no letters, no people
```

**حركة الفيديو** (من صورة واحدة)
```
Very slow push-in while a soft band of golden light sweeps across the paper surface, faint dust drifting in the light, calm and elegant. One continuous shot, no cuts.
```

---

## اللقطة 3 — الشارقة، نصب «اللفافة» (8 ثوانٍ) → `s3.mp4`

التعليق: «وفي مدينةٍ اختارت أن تجعل من الثقافة مشروعًا للمستقبل…»

مهم: النماذج ما تعرف شكل النصب بدقة، وممكن تخترع معلمًا غير موجود. لازم صورة حقيقية لنصب «اللفافة» أمام بيت الحكمة، تكون مرخّصة أو من تصويركم، ونمررها مرجعًا بـ `--image-references`. وبعد التوليد نقارن النتيجة بالنصب الحقيقي.

**الإطار الأول `s3-start.png`** (مع الصورة المرجعية)
```
Elegant fine-line architectural drawing of the monument in the reference photo, thin antique-gold ink lines on warm ivory paper, precise minimal strokes, refined technical sketch style, same framing and perspective as the reference photo, no text, no letters, no people
```

**الإطار الأخير `s3-end.png`** (مع الصورة المرجعية)
```
Photorealistic cinematic photograph of the monument in the reference photo in front of the House of Wisdom in Sharjah, golden hour, warm low sun, long soft shadows, sky fading to deep navy blue at the top, clean empty plaza, same framing and perspective as the reference photo, faithful to the real architecture, no people, no text
```

**حركة الفيديو** (إطار أول ← إطار أخير)
```
Fine gold ink lines draw themselves in, then the drawing gradually transforms into the real monument as materials, light and shadows fill in, while the camera slowly arcs to the right. One continuous shot, no cuts.
```

---

## اللقطة 4 — ولادة سَبْر (6 ثوانٍ) → `s4.mp4`

الشعار الأصلي وعبارة «ما وراء الكلمة | Beyond the Word» ينضافون في After Effects بدون أي تعديل على الشعار.

**الإطار الأول `s4-start.png`**
```
Macro cinematic shot of a real quill feather dyed deep navy blue with a fine gold edge resting on warm ivory handmade paper, its tip leaving slow flowing antique-gold ink strokes that form elegant abstract calligraphic curves, the soft edge of an open book and a few pale blue watercolor leaves in the background, shallow depth of field, photorealistic, abstract strokes only, no readable text, no letters, no people
```

**الإطار الأخير `s4-end.png`**
```
Calm deep navy background with soft deep blue watercolor texture, a warm antique-gold glow in the center, thin antique-gold lines with a small diamond ornament at the far edges of the frame, a navy feather with a gold edge and the corner of an ivory paper sheet just entering the frame edges, wide clean empty space in the center for a logo, minimal and premium, photorealistic, no text, no letters, no logos, no people
```

**حركة الفيديو** (إطار أول ← إطار أخير)
```
The quill lifts gently as the gold ink strokes settle, then the feather, paper and ink drift toward the edges of the frame while the camera slowly pulls back and the light shifts into calm deep navy, leaving the center clear. One continuous move, no cuts.
```

---

## النسخة التشويقية (5–7 ثوانٍ)

نفس مقطع اللقطة 1 (أول 5 ثوانٍ)، وبعده خاتمة فيها الشعار والعبارة لمدة ثانيتين. السكربت يبنيها تلقائيًا كتكوين ثاني.

---

## النماذج المقترحة

| الاستخدام | النموذج | ملاحظة |
|---|---|---|
| الصور (الإطارات) | `nano_banana_2` | 2 رصيد للصورة. للصور النهائية نجرب كمان `seedream_v5_pro` ونقارن (التكلفة بـ `generate cost`) |
| فيديو من إطار أول وأخير | `kling_o3_flf` (Kling 3.0 Omni Frames) | مخصص للانتقال بين إطارين |
| فيديو من صورة واحدة | `seedance_2_5` أو `kling4_0` | للقطة 2 |
| تجربة رخيصة قبل النسخة النهائية | `seedance_2_0_mini` | 5 رصيد لكل 5 ثوانٍ |

أوامر التكلفة (مجانية):
```bash
higgsfield generate cost kling_o3_flf --prompt "test" --duration 5
higgsfield generate cost seedance_2_5 --prompt "test" --duration 5
higgsfield generate cost kling4_0 --prompt "test" --duration 5
higgsfield generate cost seedream_v5_pro --prompt "test"
```
إذا رفض النموذج المدة، جرّب القيمة اللي يقترحها الخطأ، أو شغّل `higgsfield model get <النموذج>`.

## تقدير الرصيد

- الإطارات: 7 صور × 2 رصيد × تقريبًا 3 محاولات ≈ 40 رصيد
- الفيديو: 4 مقاطع، ومع إعادة واحدة لكل مقطع ≈ 8 توليدات. التكلفة الفعلية تعتمد على أسعار النماذج أعلاه.
- لا يُشغَّل أي توليد قبل فحص تكلفته والموافقة عليه.
