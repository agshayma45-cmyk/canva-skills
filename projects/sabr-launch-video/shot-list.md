# سَبْر — قائمة اللقطات (Shot List)

طريقة العمل لكل لقطة:

1. نولّد **الإطار الأول** و**الإطار الأخير** كصور (2 رصيد للصورة)، ونعيدها لين تطلع ممتازة.
2. نحوّل الإطارين لفيديو بنموذج يدعم إطار البداية والنهاية، فتصير الانتقالات محسوبة ومو عشوائية.
3. النصوص العربية والشعار تنضاف في After Effects بسكربت `sabr-build.jsx`، وما تنولّد بالذكاء الاصطناعي.

ألوان سَبْر في كل الأوصاف: عاجي دافئ، كحلي عميق، ذهبي معتّق.
ممنوع في كل اللقطات: أشخاص، نصوص أو حروف، شعارات، مؤثرات سحرية، جزيئات متوهجة.

أسماء الملفات تحت هي اللي يتوقعها سكربت After Effects داخل مجلد `~/Sabr/clips/`.

---

## اللقطة 1 — ما وراء الورق (8 ثوانٍ) → `s1.mp4`

التعليق: «من إيمانٍ بأن وراء كل كلمة…»

**الإطار الأول `s1-start.png`**
```
Extreme macro cinematic photograph of several ultra-thin translucent ivory paper sheets stacked loosely, edges gently curling, warm golden backlight glowing through the paper fibers, visible fine paper texture, soft atmospheric haze, shallow depth of field, a narrow dark gap between two sheets in the center of the frame, airy and delicate, palette of warm ivory, deep navy shadows and antique gold highlights, shot on ARRI Alexa with a 50mm macro lens, photorealistic, no text, no letters, no people, no logos
```

**الإطار الأخير `s1-end.png`**
```
Cinematic wide shot from inside a vast quiet world made of paper: towering layered cliffs of stacked ivory pages receding into deep navy distance, warm antique-gold light rays falling between the layers, fine paper fibers floating like dust in the light, immense depth and scale, a feeling of discovery, realistic materials and lighting, photorealistic, shot on ARRI Alexa with an anamorphic lens, no text, no letters, no people, no creatures, no glowing magic particles
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
Cinematic close-up of a large sheet of warm ivory handmade paper resting in soft darkness, gentle antique-gold light raking across its surface revealing fine fibers, deep navy vignette around the edges, generous empty space in the center for typography, calm and elegant, photorealistic, no text, no letters, no people
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
Macro cinematic shot of antique-gold ink flowing slowly across warm ivory paper and forming elegant abstract calligraphic strokes, with subtle realistic details of a fountain pen nib, folded manuscript pages and an edited proof sheet with fine margin marks, deep navy background, shallow depth of field, photorealistic, abstract strokes only, no readable text, no letters, no people
```

**الإطار الأخير `s4-end.png`**
```
Calm deep navy background with a soft warm antique-gold glow in the center, a few elegant gold ink strokes and the edge of an ivory paper sheet framing the edges of the frame, wide clean empty space in the center for a logo, minimal and premium, photorealistic, no text, no letters, no logos, no people
```

**حركة الفيديو** (إطار أول ← إطار أخير)
```
The gold ink strokes and paper elements slowly converge and settle toward the edges of the frame while the camera gently pulls back, leaving the center clear in calm deep navy space. One continuous move, no cuts.
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
