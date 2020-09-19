// newsletter dropdown popover
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return $('#popover_content_wrapper').html();    
    }
  });
});

//Form submitted message
$('#fill-form').submit(function() {
  $('#myResultDiv').text("Form submitted");
  return false;
});


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

//Disable form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//dropdown menu

//Google translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}


// go-back button
// function goBack() {
//     window.history.back();
// }
