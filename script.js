const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Page reload hone se rokega

    alert("✅ Message sent successfully!");

    form.reset(); // Form ko clear karega
});
const counters = document.querySelectorAll(".impact-card h2");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      counters.forEach(counter => {
        const target = parseInt(counter.innerText.replace(/\D/g, ""));
        let count = 0;
        const speed = target / 100;

        const updateCounter = () => {
          if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count) + "+";
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target.toLocaleString() + "+";
          }
        };

        updateCounter();
      });

      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector(".impact-container"));