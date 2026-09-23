// ======================================
// AIRTIME FORM
// ======================================

const receiptForm = document.getElementById("receiptForm");

if (receiptForm) {

    receiptForm.addEventListener("submit", function (event) {

        const network = document.getElementById("ntw").value.trim();
        const customerName = document.getElementById("name").value.trim();
        const senderPhone = document.getElementById("phone").value.trim();
        const amountSent = document.getElementById("amount").value.trim();
        const accountDetails = document.getElementById("account").value.trim();

        // Check all fields
        if (
            network === "" ||
            customerName === "" ||
            senderPhone === "" ||
            amountSent === "" ||
            accountDetails === ""
        ) {
            event.preventDefault();

            alert("Please fill all fields and select a network.");

            return;
        }

        // IMPORTANT:
        // Do NOT prevent the form from submitting.
        // Django will receive the POST request,
        // create the transaction,
        // and redirect to the receipt page.

    });

}


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
