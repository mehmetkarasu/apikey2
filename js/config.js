// zafiyetli.js
const apiKey = "sk_test_51H8kLsAYa1L9Q9vU2Q3ExAmnK3pN4g7";

// Bu API anahtarı bir frontend JS dosyasına gömülmüş, bu ciddi bir güvenlik açığıdır!
fetch("https://api.stripe.com/v1/charges", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${apiKey}`,
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "amount=2000&currency=usd&source=tok_amex"
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
