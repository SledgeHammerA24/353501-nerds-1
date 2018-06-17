
// переменные. показ попапа
var button_writeus = document.querySelector(".contacts_btn");
var popup = document.querySelector(".modal_content");
var popup_overlay = document.querySelector(".modal_overlay");
var cross_close = document.querySelector(".modal_content_close");

// переменные попапа. фокус на поле ввода и для проверки ввода данных в поля
var popup_form_username = popup.querySelector("[name=username]");
var popup_form_email = popup.querySelector("[name=usermail]");
var popup_form_comment = popup.querySelector("[name=usercomment]");

var popup_username_storage = localStorage.getItem("name");
var popup_usermail_storage = localStorage.getItem("mail");
var popup_usercomment_storage = localStorage.getItem("comment");

// переменные попапа. проверка полей формы при отправке
 var popup_form_required = popup.querySelector("form");

// показ модального окошка при нажатии на Корзину
button_writeus.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("открытие окошка");
  popup.classList.add("modal_content_show");
  popup_overlay.classList.add("modal_overlay_show");
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
cross_close.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("закрытие окошка");
  popup.classList.remove("modal_content_show");
  popup_overlay.classList.remove("modal_overlay_show");
  popup.classList.remove("modal_error");
});

// закрытие модального окошка при нажатии на кнопку Esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode===27) {
    if (popup.classList.contains("modal_content_show")) {
      popup.classList.remove("modal_content_show");
      popup_overlay.classList.remove("modal_overlay_show");
      popup.classList.remove("modal_error");
    }
  }
});

// проверка полей формы при отправке
popup_form_required.addEventListener("submit", function(event) {
  if (!popup_form_username.value || !popup_form_email.value || !popup_form_comment.value) {
    event.preventDefault();
    popup.classList.add("modal_error");
    popup_form_username.classList.add("input_error");
  } else {
    localStorage.setItem("name", popup_form_username.value);
    localStorage.setItem("mail", popup_form_email.value);
    localStorage.setItem("comment", popup_form_comment.value);
    popup.classList.remove("modal_error");
    }
});
