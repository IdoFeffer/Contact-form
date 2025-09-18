'use strict';

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();               // אל תשלח אם יש שגיאות
    form.classList.add('was-validated'); // מפעיל את חוקי ה-CSS
  } else {
    // אופציונלי: להסיר אם אתה לא רוצה להשאיר את מצב הוולידציה אחרי שליחה מוצלחת
    form.classList.remove('was-validated');
  }
});

// אופציונלי: אם משתמש מתחיל לתקן אחרי שכבר הופיעו שגיאות,
// הדפדפן מעדכן :invalid בזמן אמת, אז אין חובה לקוד נוסף.
// אם תרצה בכל זאת "לגעת":
form.addEventListener('input', (ev) => {
  if (form.classList.contains('was-validated')) {
    ev.target.checkValidity(); // לא חובה, אבל בסדר
  }
});