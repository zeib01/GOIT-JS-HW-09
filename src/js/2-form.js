import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const form = document.querySelector(".feedback-form");
const texareaMessage = form.elements.message;
const userEmail = form.elements.email;
const localStorageKey = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

// При завантаженні сторінки перевіряємо наявність даних у локальному сховищі
const savedData = JSON.parse(localStorage.getItem(localStorageKey));
if (savedData) {
    formData = savedData;
    userEmail.value = formData.email || "";
    texareaMessage.value = formData.message || "";
}

// Використовуємо делегування для відстеження змін
form.addEventListener("input", (e) => {
    if (e.target.name === "email") {
        formData.email = e.target.value;
    } else if (e.target.name === "message") {
        formData.message = e.target.value;
    }
    // Зберігаємо об'єкт formData в локальному сховищі
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

// Відправка форми
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    // Перевірка, чи заповнені всі поля
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
    
    // Виведення об'єкта formData в консоль
    console.log("Form Data:", formData);
    
    // Очищення форми, локального сховища та об'єкта formData
    form.reset();
    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
});
