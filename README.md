<!-- ═══════════════════════════════════════════════════════════ -->
<!--                         COVER                              -->
<!-- ═══════════════════════════════════════════════════════════ -->

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0e,50:262631,100:0a0a0e&height=220&section=header&text=JavaScript%20Mini%20Project&fontSize=58&fontColor=ff9f0a&fontAlignY=38&desc=Project%20%2302%20%E2%80%94%20Engineering%20Calculator&descAlignY=60&descSize=20&animation=twinkling" width="100%" />

<br />

<img src="https://readme-typing-svg.demolab.com?font=Vazirmatn&weight=900&size=32&duration=3000&pause=800&color=ff9f0a&center=true&vCenter=true&width=700&lines=%D9%85%DB%8C%D9%86%DB%8C+%D9%BE%D8%B1%D9%88%DA%98%D9%87+%D8%AC%D8%A7%D9%88%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA;JavaScript+Mini+Project;%D9%85%D8%A7%D8%B4%DB%8C%D9%86+%D8%AD%D8%B3%D8%A7%D8%A8+%D9%85%D9%87%D9%86%D8%AF%D8%B3%DB%8C" alt="Animated Title" />

<br /><br />

<a href="#-فارسی">
  <img src="https://img.shields.io/badge/🇮🇷_فارسی-ff9f0a?style=for-the-badge&labelColor=1a1a20&logoColor=white" alt="فارسی" height="50" />
</a>
&nbsp;&nbsp;
<a href="#-english">
  <img src="https://img.shields.io/badge/🇬🇧_English-ff9f0a?style=for-the-badge&labelColor=1a1a20&logoColor=white" alt="English" height="50" />
</a>

</div>

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0e,50:262631,100:0a0a0e&height=80&section=header&text=%20&animation=twinkling" width="100%" />


<!-- ═══════════════════════════════════════════════════════════ -->
<!--                     🇮🇷 فارسی                              -->
<!-- ═══════════════════════════════════════════════════════════ -->

<a id="-فارسی"></a>

<div align="center" dir="rtl">

<img src="https://readme-typing-svg.demolab.com?font=Vazirmatn&weight=900&size=40&duration=2500&pause=600&color=ff9f0a&center=true&vCenter=true&width=500&lines=%F0%9F%87%AE%F0%9F%87%B7+%D9%81%D8%A7%D8%B1%D8%B3%DB%8C" alt="فارسی" />

</div>

<br />

## 🎯 معرفی

**ماشین حساب مهندسی** — یه ماشین حساب مدرن با ظاهری سه‌بعدی، انیمیشن‌های نرم، و پشتیبانی از عملیات پایه‌ی ریاضی.

این پروژه دومین قدم من توی مسیر یادگیری **جاوااسکریپت** هست. توش با مفاهیم مهمی مثل **مدیریت state، event delegation، و طراحی رابط کاربری حرفه‌ای** کار کردم.

<br />



## ✨ ویژگی‌ها

- 🎨 **طراحی سه‌بعدی مدرن** — دکمه‌هایی با عمق واقعی و حس فیزیکی
- ⌨️ **پشتیبانی از کیبورد** — همه‌ی کلیدهای عددی و عملیاتی
- 🌗 **حالت تیره حرفه‌ای** — با کنتراست بالا و رنگ‌های چشم‌نواز
- 📱 **کاملاً ریسپانسیو** — روی موبایل، تبلت، و دسکتاپ
- 🎬 **مودال هشدار انیمیشنی** — با نوار تایمر و اسلاید از بالا
- 🧮 **عملیات پایه** — جمع، تفریق، ضرب، تقسیم
- 🔢 **پشتیبانی از اعشار، درصد، و تغییر علامت**
- 💧 **واترمارک تعاملی** — با اطلاعات سازنده
<br />
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0e,50:262631,100:0a0a0e&height=80&section=header&text=%20&animation=twinkling" width="100%" />


## 🧠 چیزهایی که یاد گرفتم

توی این پروژه فقط کد نزدم، بلکه با چالش‌های واقعی مهندسی نرم‌افزار روبرو شدم. اینا مهم‌ترین درس‌هایی هستن که گرفتم:

<table>
<tr>
<td width="50%" valign="top">

**مدیریت وضعیت (State Management)**
- ✅ **State های اصلی:** درک این موضوع که `currentinput` برای محاسبه است، ولی `expression` برای نمایش به کاربر.
- ✅ **پرچم‌ها (Flags):** استفاده از `justEvaluated` برای تشخیص اینکه آیا کاربر تازه مساوی زده است یا نه (تا در صورت نیاز، ورودی جدید جایگزین نتیجه قبلی شود).
- ✅ **ریست کردن:** چرا بعد از محاسبه، `prevInput` و `operator` باید `null` شوند تا از تداخل جلوگیری شود.

</td>
<td width="50%" valign="top">

**منطق و اعتبارسنجی**
- ✅ **تبدیل نوع (Type Casting):** استفاده از `Number()` برای جلوگیری از الحاق رشته‌ها در عملیات ریاضی (چرا `"5" + "3"` میشود `"53"` ولی `5 + 3` میشود `8`).
- ✅ **مدیریت خطا:** جلوگیری از باگ‌های رایج مثل زدن دو نقطه اعشار (`includes('.')`) یا وارد کردن عدد بعد از نتیجه.
- ✅ **کار با رشته‌ها:** استفاده از `startsWith` و `slice` برای تغییر علامت (+/-).

</td>
</tr>
</table>

<br />

> 💡 **مهم‌ترین درس:** یک ماشین حساب ساده، در واقع پیچیده‌ترین چالش مدیریت state در ابعاد کوچک است. اگه بتونی رفتار دکمه‌ها رو در تمام سناریوها (حتی حالت‌های خرابکارانه مثل `5 + +`) درست مدیریت کنی، منطق برنامه‌نویسی رو فهمیدی.

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0e,50:262631,100:0a0a0e&height=80&section=header&text=%20&animation=twinkling" width="100%" />

## 📸 پیش‌نمایش

<div align="center">

**🖼️ تصویر پروژه**

<img src="./assets/preview.png" alt="Calculator Preview" width="80%" style="border-radius: 16px; box-shadow: 0 20px 50px rgba(255, 159, 10, 0.25);" />

<br /><br />

**🎬 گیف دمو**

<img src="./assets/demo.gif" alt="Calculator Demo" width="80%" style="border-radius: 16px; box-shadow: 0 20px 50px rgba(255, 159, 10, 0.25);" />

</div>

<br />

---

## 😂 استراحت برنامه‌نویس

<div align="center">

<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat Programming" width="320" style="border-radius: 12px;" />

<br />

<sub>وقتی باگ رو پیدا می‌کنی و می‌فهمی خودت نوشتیش 😹</sub>

</div>

<br />
