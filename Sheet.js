const scriptURL = 'https://script.google.com/macros/s/AKfycbwWUGdq5wvsqJpfjBQqdk59MfEAXZxr6wYwf3Lr8A4bbj8oydsOCSk4eGS82qA2hlxu1Q/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
