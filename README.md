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
## 😂 استراحت برنامه‌نویس

<div align="center">

<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat Programming" width="320" style="border-radius: 12px;" />

<br />

<sub>وقتی باگ رو پیدا می‌کنی و می‌فهمی خودت نوشتیش 😹</sub>

</div>

<br />

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0a0e,50:262631,100:0a0a0e&height=80&section=header&text=%20&animation=twinkling" width="100%" />



## 🚀 مشاهده‌ی آنلاین

<div align="center">

<a href="https://arkmancoding.github.io/Calculator/" target="_blank">
  <img src="https://img.shields.io/badge/🌐_مشاهده_دموی_زنده-ff9f0a?style=for-the-badge&labelColor=1a1a20&logoColor=white" alt="Live Demo" height="55" />
</a>

</div>

<br />

---

## 🛠️ تکنولوژی‌ها

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,git,github,vscode&theme=dark&perline=6" alt="Tech Stack" />

</div>

| تکنولوژی | کاربرد |
|----------|---------|
| **HTML5** | ساختار و معنایی (Semantic) |
| **CSS3** | طراحی سه‌بعدی، انیمیشن، ریسپانسیو |
| **JavaScript (Vanilla)** | منطق، مدیریت state، event delegation |
| **Git & GitHub** | کنترل نسخه و میزبانی (GitHub Pages) |

<br />

---

## 📦 نصب و اجرا

**قدم ۱ — کلون کردن پروژه**

```bash
git clone https://github.com/ArkmanCoding/Calculator.git
cd Calculator

```
<br />

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                     🇬🇧 ENGLISH                            -->
<!-- ═══════════════════════════════════════════════════════════ -->

<a id="-english"></a>

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Vazirmatn&weight=900&size=40&duration=2500&pause=600&color=ff9f0a&center=true&vCenter=true&width=500&lines=%F0%9F%87%AC%F0%9F%87%A7+ENGLISH" alt="English" />

</div>

<br />

## 🎯 About

**Engineering Calculator** — A modern calculator with a 3D look, smooth animations, and support for basic math operations.

This is my second step in my **JavaScript** learning journey. I worked with important concepts like **state management, event delegation, and professional UI design**.

<br />

---

## ✨ Features

- 🎨 **Modern 3D Design** — Buttons with real depth and physical feel
- 🌗 **Professional Dark Mode** — High contrast with pleasing colors
- 📱 **Fully Responsive** — On mobile, tablet, and desktop
- 🎬 **Animated Alert Modal** — With timer bar and slide-in from top
- 🧮 **Basic Operations** — Addition, subtraction, multiplication, division
- 🔢 **Decimal, Percent, and Negate Support**
- 💧 **Interactive Watermark** — With creator info
- ⚡ **Optimized Logic** — Built with clean state management

<br />

---

## 🧠 What I Learned

I didn't just write code; I faced real software engineering challenges. Here are the most important lessons:

<table>
<tr>
<td width="50%" valign="top">

**State Management**
- ✅ **Main States:** Understanding that `currentinput` is for calculation, but `expression` is for UI display.
- ✅ **Flags:** Using `justEvaluated` to detect if the user just pressed equals (so a new input replaces the result if needed).
- ✅ **Resetting:** Why `prevInput` and `operator` must be set to `null` after calculation to prevent conflicts.

</td>
<td width="50%" valign="top">

**Logic & Validation**
- ✅ **Type Casting:** Using `Number()` to prevent string concatenation in math operations (why `"5" + "3"` is `"53"` but `5 + 3` is `8`).
- ✅ **Error Handling:** Preventing common bugs like double decimals (`includes('.')`) or typing numbers after the result.
- ✅ **String Manipulation:** Using `startsWith` and `slice` for sign change (+/-).

</td>
</tr>
</table>

<br />

> 💡 **Most Important Lesson:** A simple calculator is actually a complex state management challenge in small scale. If you can correctly manage button behavior in all scenarios (even edge cases like `5 + +`), you've understood programming logic.

<br />

---

## 📸 Preview

<div align="center">

**🖼️ Preview Image**

<img src="./assets/preview.png" alt="Calculator Preview" width="80%" style="border-radius: 16px; box-shadow: 0 20px 50px rgba(255, 159, 10, 0.25);" />

<br /><br />

**🎬 Demo GIF**

<img src="./assets/demo.gif" alt="Calculator Demo" width="80%" style="border-radius: 16px; box-shadow: 0 20px 50px rgba(255, 159, 10, 0.25);" />

</div>

<br />

---

## 😂 Developer Break

<div align="center">

<img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat Programming" width="320" style="border-radius: 12px;" />

<br />

<sub>When you find the bug and realize you wrote it 😹</sub>

</div>

<br />

---

## 🚀 Live Demo

<div align="center">

<a href="https://arkmancoding.github.io/Calculator/" target="_blank">
  <img src="https://img.shields.io/badge/🌐_View_Live_Demo-ff9f0a?style=for-the-badge&labelColor=1a1a20&logoColor=white" alt="Live Demo" height="55" />
</a>

</div>

<br />

---

## 🛠️ Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,git,github,vscode&theme=dark&perline=6" alt="Tech Stack" />

</div>

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantics |
| **CSS3** | 3D design, animation, responsive |
| **JavaScript (Vanilla)** | Logic, state management, event delegation |
| **Git & GitHub** | Version control and hosting (GitHub Pages) |

<br />

---

## 📦 Installation

**Step 1 — Clone the repository**

```bash
git clone https://github.com/ArkmanCoding/Calculator.git
cd Calculator
