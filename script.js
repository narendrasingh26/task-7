const form = document.querySelector('form');
const bookingDetails = document.querySelector('#booking-details');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault(); // prevent form from submitting normally

  // get form values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const date = document.querySelector('#date').value;

  // validate form values
  if (name === '') {
    alert('Please enter your name.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!isValidPhone(phone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (date === '') {
    alert('Please enter a booking date.');
    return;
  }

  // save booking details to local storage
  const booking = {
    name,
    email,
    phone,
    date
  };
  axios.post("https://crudcrud.com/api/4beff45a506148d09e8b3d876d2b07d6/BigCrudData",booking)
  .then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
  saveBooking(booking);

  // display booking details on web page
//   bookingDetails.innerHTML = `
//     <p>Name: ${name}</p>
//     <p>Email: ${email}</p>
//     <p>Phone: ${phone}</p>
//     <p>Date of Booking: ${date}</p>
//   `;

  // clear form fields
  form.reset();
}

function isValidEmail(email) {
  // email validation code her
  return true;
}

function isValidPhone(phone) {
  // phone validation code here
  return true;
}

function saveBooking(booking) {
    axios.get("https://crudcrud.com/api/4beff45a506148d09e8b3d876d2b07d6/BigCrudData,booking")
    .then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
  let bookings = [];
  if (localStorage.getItem('bookings')) {
    bookings = JSON.parse(localStorage.getItem('bookings'));
  }
  bookings.push(booking);
  localStorage.setItem('bookings', JSON.stringify(bookings));
}
