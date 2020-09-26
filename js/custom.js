// newsletter dropdown popover
$(function () {
  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return $('#popover_content_wrapper').html();
    }
  });
});

//Submit form to google sheets
const scriptURLC = 'https://script.google.com/macros/s/AKfycbx4Iah6S9Pk8nJ4AOF8jViPU_v8RqdRY_4E-n_ELCw_9wTomHM/exec'
// const scriptURLC = 'https://script.google.com/macros/s/AKfycbx7b9gilvqfRDsR6Hhw09o2eWEUXZNHcOczdSCmdv7dC3GHOHNe/exec'
const formc = document.forms['Form/newsletter-subcribers'];
const alert_subc = document.getElementById('alert_submission');

formc.addEventListener('submit', e => {
	// todo disable submit button
	e.preventDefault();
	document.getElementById('but').classList.add('loading');
	fetch(scriptURLC, {
			method: 'POST',
			body: new FormData(formc)
		})
		.then(res => {
			console.log(res);
			// todo enable submit button

			if (res['status'] == 200) {
				alert_subc.classList.remove('alert-danger');
				alert_subc.classList.add('alert-msg');
				alert_subc.innerHTML = 'Message Recieved!!. We will contact you soon';
				formc.reset();

			} else {
				alert_subc.classList.remove('alert-msg');
				alert_subc.classList.add('alert-danger');
				alert_subc.innerHTML = 'Error occured.';

			}
			document.getElementById('but').classList.remove('loading');
		})
		.catch(error => {
			console.error('Error!', error.message);
			alert_subc.classList.remove('alert-msg');
			alert_subc.classList.add('alert-danger');
			alert_subc.innerHTML = 'Error occured.';
			// todo enable submit button

		})
});
//end submit form to google sheets

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
