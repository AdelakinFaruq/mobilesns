
document.querySelector(".proceed-btn").addEventListener("click", function () {

  const network = document.getElementById("ntw").value;
  const inputs = document.querySelectorAll("input");

  const customerName = inputs[0].value;
  const senderPhone = inputs[1].value;
  const amountSent = inputs[2].value;
  const accountDetails = inputs[3].value;

  if (
    network === "LIST OF NETWORKS" ||
    !customerName ||
    !senderPhone ||
    !amountSent ||
    !accountDetails
  ) {
    alert("Please fill all fields and select a network");
    return;
  }

  document.getElementById("rNetwork").textContent = network;
  document.getElementById("rName").textContent = customerName;
  document.getElementById("rPhone").textContent = senderPhone;
  document.getElementById("rAmount").textContent = amountSent;
  document.getElementById("rAccount").textContent = accountDetails;
  document.getElementById("rDate").textContent = new Date().toLocaleString();

  document.getElementById("receiptBox").style.display = "block";
});

const contactSelect = document.getElementById("contact"); // match HTML id

contactSelect.addEventListener("change", () => {
  const contactSelect = document.getElementById("contact");

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
});


