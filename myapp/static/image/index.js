document.querySelector(".proceed-btn").addEventListener("click", function () {

  const network = document.getElementById("ntw").value;

  const customerName =
    document.getElementById("name").value.trim();

  const senderPhone =
    document.getElementById("phone").value.trim();

  const amountSent =
    document.getElementById("amount").value.trim();

  const accountDetails =
    document.getElementById("account").value.trim();


  // CHECK REQUIRED FIELDS

  if (
    network === "" ||
    !customerName ||
    !senderPhone ||
    !amountSent ||
    !accountDetails
  ) {

    alert("Please fill all fields and select a network");

    return;
  }


  // DISPLAY INFORMATION ON RECEIPT

  document.getElementById("rNetwork").textContent = network;

  document.getElementById("rName").textContent =
    customerName;

  document.getElementById("rPhone").textContent =
    senderPhone;

  document.getElementById("rAmount").textContent =
    amountSent;

  document.getElementById("rAccount").textContent =
    accountDetails;

  document.getElementById("rDate").textContent =
    new Date().toLocaleString();


  // SHOW RECEIPT

  document.getElementById("receiptBox").style.display =
    "block";

});


// ======================================
// WHATSAPP / FACEBOOK CONTACT
// ======================================

const contactSelect =
  document.getElementById("contact-select");


if (contactSelect) {

  contactSelect.addEventListener("change", function () {

    if (this.value === "whatsapp") {

      window.location.href =
        "https://wa.me/2349029192282?text=Hello%20MOBILETOPIT%2C%20I%20would%20like%20to%20make%20an%20enquiry.";

    }

    else if (this.value === "facebook") {

      window.location.href =
        "https://www.facebook.com/Mobiletopit";

    }

  });

}