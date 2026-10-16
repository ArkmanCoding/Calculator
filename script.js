// console.log('hello world');

// States :
let currentinput = '';
let previnput = null;
let operator = null;

let expression = '';
let justEvaluated = false;

// Screen Show : 
const screen = document.getElementById('display');

// Keypad :
const box = document.querySelector('.calc-grid');

//            < باید نام ورودی را بنویسیم  >
//                               ⬇⬇
box.addEventListener('click', (event) => {
    // Data Actions :
    const action = event.target.dataset.action;
    // Data Values :
    const value = event.target.dataset.value;

    if (action === "number") {

        currentinput = currentinput + value;

        expression = expression + value;

        if (justEvaluated == true) {
            currentinput = value;
            expression = value;


            justEvaluated = false;
        }

        screen.textContent = expression;

        console.log(currentinput);

    } else if (action === "operator") {

        previnput = Number(currentinput); // Number() => string to number
        operator = value;

        currentinput = previnput + operator;
        expression = currentinput;

        screen.textContent = expression;

        justEvaluated = false;

        currentinput = '';


    } else if (action === "clear") {

        screen.textContent = "0";

        currentinput = '';
        expression = '';
        previnput = null;
        operator = null;
        justEvaluated = false;

    } else if (action === "equals") {
        // برای محکم کاری مقدار ورودی را به حروف تبدیل میکنیم
        expression = String(expression);

        if (expression == ''){
            screen.textContent = "مقداری وارد نشده است";
            showAlert("error", "مقداری وارد نشده است");
        }

        if (expression == '.'){
            showAlert("error", "علامت < . > به تنهایی مجاز نیست.  لطفا اول عبارتی را وارد کنید ");
        }

        if (operator === "+") {
            currentinput = previnput + Number(currentinput);
            expression = currentinput;

            screen.textContent = expression;

        }else if (operator === "-") {
            currentinput = previnput - Number(currentinput);
            expression = currentinput;

            screen.textContent = expression;

        }else if (operator === "*") {
            currentinput = previnput * Number(currentinput);
            expression = currentinput;

            screen.textContent = expression;

        }else {
            currentinput = previnput / Number(currentinput);
            expression = currentinput;

            screen.textContent = expression;
        }


        expression = String(expression);
        currentinput = String(currentinput);

        previnput = null;
        operator = null;

        justEvaluated = true;

    } else if (action === "negate") {

        if (currentinput.startsWith('-')){
            currentinput = currentinput.slice(1);
            expression = String(currentinput);
            screen.textContent = expression;
        }else{
            currentinput = '-' + currentinput;
            expression = String(currentinput);
            screen.textContent = expression;
        }

        console.log('تغییر علامت');
        justEvaluated = false;

    } else if (action === "decimal") {


        if(currentinput.includes('.')){
            showAlert('warning', 'اعشار قابل ثبت نیست.');
        }else{
            currentinput = currentinput + '.';
            expression = currentinput;
            screen.textContent = expression;
        }

        console.log('دکمه اعشاری (.)');
        justEvaluated = false;

    } else if (action === "percent") {

        currentinput = Number(currentinput) / 100;
        expression = String(currentinput);
        screen.textContent = expression;

        console.log('دکمه درصد');
        justEvaluated = false;

    }
    else {
        console.log('دکمه نامعتر');
    }
})


/* ═══════════════════════════════════════════════════════════
   ALERT MODAL
   ═══════════════════════════════════════════════════════════ */
const alertModal    = document.getElementById("alertModal");
const alertIcon     = document.getElementById("alertIcon");
const alertTitle    = document.getElementById("alertTitle");
const alertMessage  = document.getElementById("alertMessage");
const alertClose    = document.getElementById("alertClose");
const alertTimerBar = document.getElementById("alertTimerBar");

const ALERT_DURATION = 2500; // 1 و نیم ثانیه
let alertTimer = null;

const ALERT_TYPES = {
  error:   { icon: "!", title: "خطا"  },
  warning: { icon: "⚠", title: "هشدار" },
  success: { icon: "✓", title: "موفق"  },
  info:    { icon: "i", title: "اطلاع" },
};

function showAlert(type, message, duration) {
  const preset = ALERT_TYPES[type] || ALERT_TYPES.info;
  const dur = duration || ALERT_DURATION;

  alertModal.setAttribute("data-type", type);
  alertIcon.textContent    = preset.icon;
  alertTitle.textContent   = preset.title;
  alertMessage.textContent = message || "";
  alertTimerBar.style.setProperty("--duration", (dur / 1000) + "s");

  // ریست انیمیشن
  alertModal.classList.remove("is-open");
  void alertModal.offsetWidth;
  alertModal.classList.add("is-open");

  clearTimeout(alertTimer);
  alertTimer = setTimeout(closeAlert, dur);
}

function closeAlert() {
  alertModal.classList.remove("is-open");
  clearTimeout(alertTimer);
}

alertClose.addEventListener("click", closeAlert);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeAlert();
});