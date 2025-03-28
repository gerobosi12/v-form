function enableContinue() {
  document.getElementById("continueBtn").disabled = false;
}

function goToStep2() {
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
}

function enableSubmit() {
  document.getElementById("submitBtn").disabled =
    !document.getElementById("accept").checked;
}

function submitForm() {
  let selectedDate = document.getElementById("startDate").value;
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let output = `Start Date: ${selectedDate}<br>
                  Name: ${name}<br>
                  Surname: ${surname}<br>
                  Email: ${email}<br>
                  Phone: ${phone}`;

  document.getElementById("output").innerHTML = output;
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
}
