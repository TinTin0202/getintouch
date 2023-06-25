// we add event listener for click on send button
document.querySelector('button').addEventListener('click', (e) => {
  // stop the page from the reloading
  e.preventDefault();
  // selecting the form
  const contactForm = document.querySelector('#form');
  // the gold part 🔥
  let data = new FormData(contactForm);  
  fetch("url", { method: "POST", body: data });
  // inform the user that the form was submitted
  alert('Thank you, your form was submitted.');
  // clear the inputs
  contactForm.reset()
  // or if you want the redirect the user to another page (for free)
  // window.open('./thanks.html');
})
