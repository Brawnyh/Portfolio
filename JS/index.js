document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Merci pour votre message, " + document.getElementById("name").value + " !");
      form.reset();
    });
  }
});
