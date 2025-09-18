const form = document.getElementById('contact-form')
const toast = document.getElementById('toast')

function showToast(ms = 3000) {
  toast.classList.add('is-visible')
  clearTimeout(showToast._t)
  showToast._t = setTimeout(() => {
    toast.classList.remove('is-visible')
  }, ms)
}

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault()
    form.classList.add('was-validated')
    return
  }

  e.preventDefault()

  form.classList.remove('was-validated')
  form.reset()
  showToast(3200)
})