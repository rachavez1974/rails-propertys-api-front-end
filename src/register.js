

document.addEventListener('DOMContentLoaded', function() {
  const BASE_URL = "http://localhost:4000"
  let register = document.getElementById('register')
  const signupUrl = `${BASE_URL}/signup`

  register.addEventListener("click", function(event) {
    event.preventDefault()

    let userName = document.getElementById("full-name").value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let password_confirmation = document.getElementById('password-confirmation').value
    let street = document.getElementById('street').value 
    let unit = document.getElementById('unit').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let zipcode = document.getElementById('zipcode').value
    let params = {
      user_name: userName,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      address: {
        street: street,
        unit: unit,
        city: city,
        state: state,
        zipcode: zipcode
      }
    }

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(params)
    }

    fetch(signupUrl, configObj)
    .then(function(response) {
      return response.json()
    })
    .catch(function(error){
      console.dir(error)
    })
  })
})