export async function validateForm() {
    $(document).ready(function() {
        //===маска===
let phone = $('input[name="tel"]');

let im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);

//===валидация формы===
let count = 1;
const validator = [];
$('form').each(function () {
  $(this).attr('id', `form_${count}`);
  let id = $(this).attr('id');
  validator.push(new JustValidate(`#${id}`))
  count++;
});
validator.forEach(el => {
  el
    .addField('#basic_name', [

      {
        rule: 'required',
        errorMessage: 'Поле не должно быть пустым',
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Должно быть не менее 2 букв',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Должно быть не более 15 букв',
      },

    ])
    .addField('#basic_email', [
      {
        rule: 'required',
        errorMessage: 'Поле не должно быть пустым',
      },
      {
        rule: 'required',
        errorMessage: 'Не верный формат',
      },
      {
        rule: 'email',
        errorMessage: 'Не верный формат',
      },
    ]);
  el.onSuccess((event) => {
    event.preventDefault()
    formSend(el.form);
  });


})

//====отправка формы====
async function formSend(el) {
  let formData = new FormData(el);
  let response = await fetch('send_mail.php', {
    method: "POST",
    body: formData
  });


  //если форма успешно отправлена
  let messageBox = $('.form-message');
  let result = await response.json();


  if (response.ok) {

    messageBox.innerHTML = '';
    messageBox.addClass("active_green").append(`<p>${result.message}</p>`);
    let closeMessage = setTimeout(() => {
      messageBox.removeClass("active_green").html();
    }, 5000
    )
    el.reset();
    //если произошла ошибка отпраки
  } else {

    messageBox.innerHTML = '';
    messageBox.addClass("active_red").append(`<p>${result.message}</p>`);
    let closeMessage = setTimeout(() => {
      messageBox.removeClass("active_green")
    }, 5000
    )
  }
}
    })
};
validateForm();