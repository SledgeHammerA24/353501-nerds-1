
// переменные. показ попапа
var busket = document.querySelector(".map"); // переменной busket присваиваем первый элемент с классом
var popup = document.querySelector(".modal_content"); // переменной popup присваиваем первый элемент с классом .modal_content - то бишь это окошко попапа, которое будем открывать
var popup_overlay = document.querySelector(".modal_overlay"); // переменной popup присваиваем первый элемент с классом .modal_content - то бишь это окошко попапа, которое будем открывать
var cross_close = document.querySelector(".modal_content_close"); // переменной popup присваиваем первый элемент с классом .modal_content - то бишь это крестик, закрывающий окошко попапа

// переменные. попапа. фокус на поле ввода и для проверки ввода данных в поля
var popup_form_username = popup.querySelector("[name=username]"); // переменной popup_form_username присваиваем элемент в popup(то бишь в div'е с классом .modal_content) с атрибутом name=username - то бишь это поле ввода input с атрибутом name=username
var popup_form_email = popup.querySelector("[name=usermail]"); // переменной popup_form_email присваиваем элемент в popup(то бишь в div'е с классом .modal_content) - с атрибутом name=username - то бишь это поле ввода input с атрибутом name=usermail
var popup_username_storage = localStorage.getItem("name"); // вытаскиваем информацию из локалстораджа в переменную popup_username_storage - было ли запомнено последний введённый успешно логин(имя)
var popup_usermail_storage = localStorage.getItem("mail"); // вытаскиваем информацию из локалстораджа в переменную popup_usermail_storage - было ли запомнено последний введённый успешно e-mail

// переменные. попапа. фокус на поле ввода
 var popup_form_required = popup.querySelector("form"); // переменной popupform_required присваиваем первый элемент в popup(то бишь в div'е с классом .modal_content) - то бишь это форма ввода целиком

//иные переменные
var total=17;
var surename = "Thomas Jefferson";
var sure = popup.querySelector(".input_form_name");

// показ модального окошка при нажатии на Корзину
busket.addEventListener("click", function(event) { // busket - ЭЛЕМЕНТ, у которого будем ловить событие, "click" - само событие,
 event.preventDefault(); // отменяем действие по умолчанию - переход по ссылке у ссылки на другую страницу
 console.log("показ окошка"); // вывод в консоль сообщения при событии "click"
 popup.classList.add("modal_content_show"); // добавляем второй класс (modal_content_show) к popup - то бишь показываем скрытое окошко
 popup_overlay.classList.add("modal_overlay_show"); // добавляем второй класс (modal_overlay_show) к overlay - то бишь показываем overlay
   if (popup_username_storage) {
   popup_form_username.value=popup_username_storage;
   popup_form_email.focus();
 } else {
   popup_form_username.focus();
 }
 if (popup_usermail_storage) {
 popup_form_email.value=popup_usermail_storage;
 }
});

// закрытие модального окошка при нажатии на закрывающий крестик - переменная cross_close

cross_close.addEventListener("click", function(event) { // cross_close - ЭЛЕМЕНТ, у которого будем ловить событие, "click" - само событие,
event.preventDefault(); // отменяем действие по умолчанию - в будущем код html могут переписать, и на всякий случай отменяем всё по умолчанию
console.log("нажатие крестика"); // вывод в консоль сообщения при событии "click"
popup.classList.remove("modal_content_show"); // убираем второй класс (modal_content_show) у popup(если он есть) - то бишь скрываем окошко попаапа
popup_overlay.classList.remove("modal_overlay_show"); // убираем второй класс (modal_overlay_show) у overlay (если он есть) - то бишь скрываем окошко overlay
popup.classList.remove("modal_error"); // убираем второй класс (modal_error) к popup - тряску окошком при неправильном вводе
});

// закрытие модального окошка при нажатии на кнопку Esc

window.addEventListener("keydown", function(event) { // window - ЭЛЕМЕНТ, у которого будем ловить событие, "keydown" - само событие,
if (event.keyCode===27) {
 if (popup.classList.contains("modal_content_show")) {
   popup.classList.remove("modal_content_show"); // убираем второй класс (modal_content_show) у popup(если он есть) - то бишь скрываем окошко попаапа
   popup_overlay.classList.remove("modal_overlay_show"); // убираем второй класс (modal_overlay_show) у overlay (если он есть) - то бишь скрываем окошко overlay
   popup.classList.remove("modal_error"); // убираем второй класс (modal_error) к popup - тряску окошком при неправильном вводе
 }
}

});


// проверка полей формы при отправке
popup_form_required.addEventListener("submit", function(event) { // popup_form_required - ЭЛЕМЕНТ, у которого будем ловить событие, "submit" - само событие,
 if (!popup_form_username.value || !popup_form_email.value) {
   event.preventDefault();
   popup.classList.add("modal_error"); // добавляем второй класс (modal_error) к popup - то бишь трясём окошком при неправильном вводе

 } else {
   localStorage.setItem("name", popup_form_username.value); // при успешной отправке формы запоминаем введённый логин (сохраняем в localStorage) в переменную name
   localStorage.setItem("mail", popup_form_email.value); // при успешной отправке формы запоминаем введённый e-mail (сохраняем в localStorage) в переменную mail
   popup.classList.remove("modal_error"); // убираем второй класс (modal_error) к popup - тряску окошком при неправильном вводе
 }
});
