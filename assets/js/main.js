
//  اعظم نافبار يعم

/*        SHOW MENU       */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*          MENU SHOW        */
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*           MENU HIDDEN        */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*              REMOVE MENU MOBILE           */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // عندما نضغط على أي عنصر من عناصر القائمة، نقوم بإزالة الكلاس 'show-menu'
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = ()=>{
    const header = document.getElementById('header')
    this.scrollY >= 10 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}

window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
        } else {
        sectionsClass.classList.remove('active-link');
        }
    });
    }

window.addEventListener('scroll', scrollActive);


/*                   SHOW SCROLL UP                    */
const scrollUp = () => {
        const scrollUp = document.getElementById('scroll-up');
        this.scrollY >= 350
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
    };

    window.addEventListener('scroll', scrollUp);



/*              SCROLL REVEAL ANIMATION            */

const sr =ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home__data , .footer__container , .footer__group`)
sr.reveal(`.home__img`,{delay:700, origin:'bottom'})
sr.reveal(`.logos__img , .program__card , .pricing__card`,{interval:100})
sr.reveal(`.choose__img , .calculate__content `,{origin:'left'})
sr.reveal(`.choose__content, .calculate__img `,{origin:'right'})
sr.reveal(`.yahia`,{origin:'bottom'})




/*                CALCULATE JS                 */


const calculateForm = document.getElementById('calculate-form'),
    calculateCm = document.getElementById('calculate-cm'),
    calculateKg = document.getElementById('calculate-kg'),
    calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
    e.preventDefault();

    // التأكد من أن المستخدم أدخل القيم المطلوبة
    if (calculateCm.value === '' || calculateKg.value === '') {
        // تغيير اللون إلى الأحمر
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');
        calculateMessage.textContent = '🤯  يعني انت مكتبتش طول ولا وزن هحسب انا اي   بقي';

        // إخفاء الرسالة بعد 5 ثوانٍ
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 5000);
    } else {
        // تحويل الطول من سم إلى متر
        const cm = calculateCm.value / 100;
        const kg = calculateKg.value;

        // حساب مؤشر كتلة الجسم (BMI)
        const bmi = (kg / (cm * cm)).toFixed(1); // تقريب إلى رقم عشري واحد

        // تحديد فئة الوزن
        let message = '';
        if (bmi < 18.5) {
            message = ` 😢مؤشر كتلة جسمك هو ${bmi} وأنت تعاني من النحافة `;
        } else if (bmi >= 18.5 && bmi < 24) {
            message = ` 🥳 مؤشر كتلة جسمك هو ${bmi} ووزنك مثالي `;
        } else if (bmi >= 25 && bmi < 30) {
            message = ` 😕مؤشر كتلة جسمك هو ${bmi} "انت تعاني من السمنه "درجه اولي`;
        } else {
            message = ` (ياتخييين) 😬مؤشر كتلة جسمك هو ${bmi}   أنت تعاني من السمنة المفرطه`;
        }


        // عرض الرسالة وتغيير اللون إلى الأخضر
        calculateMessage.classList.remove('color-red');
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent = message;

        calculateCm.value = '';
        calculateKg.value = '';

    }
    setTimeout(()=>{
        calculateMessage.textContent=""
    },50000)

};

// إضافة الحدث إلى الفورم
calculateForm.addEventListener('submit', calculateBmi);






/*=============== EMAIL JS ===============*/


const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message'),
    contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    // تنظيف الرسالة السابقة
    contactMessage.textContent = '';
    contactMessage.classList.remove('color-green', 'color-red');

    // تحقق من الحقل
    if (contactUser.value === '') {
        contactMessage.classList.add('color-red');
        contactMessage.textContent = '🤷‍♂️ ماتكتب الايميل يخويا عشان اعرف انت مين';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
    } else {
        // حفظ قيمة الإيميل عشان نستخدمها لاحقاً قبل ما يتم reset
        const userEmail = contactUser.value;
        
        // إرسال الرسالة
        emailjs.sendForm('service_wenyv66', 'template_2s3ohfj', '#contact-form', 's-2vW8di9wtu_jXxS')
            .then(() => {
                contactMessage.classList.add('color-green');
                // ظهور اسم الإيميل في رسالة النجاح
                contactMessage.textContent = `Your  message sent  Thanks   ${userEmail}😘`;
    
                // إعادة تعيين النموذج بعد الإرسال
                contactForm.reset();
    
                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            })
            .catch((error) => {
                contactMessage.classList.add('color-red');
                contactMessage.textContent = 'فيه خطأ صار 😢، جرب مرة ثانية';
                console.error('EmailJS Error:', error);
            });
    }
}

contactForm.addEventListener('submit', sendEmail);
ر










