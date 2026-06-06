  // Slider
  let current = 0;
  const total = 3;
  function updateSlider() {
    document.getElementById("sliderTrack").style.transform = "translateX(" + (current * 100) + "%)";
    document.querySelectorAll(".sdot").forEach((d,i) => d.classList.toggle("active", i === current));
  }
  function moveSlider(dir) {
    current = (current - dir + total) % total;
    updateSlider();
  }
  function goToSlide(i) { current = i; updateSlider(); }
  setInterval(() => moveSlider(1), 5000);

  // Filter functionality
  function filterItems(cat, btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".portfolio-item").forEach(item => {
      if (cat === "all" || item.dataset.cat === cat) {
        item.style.display = "block";
        item.style.animation = "fadeUp 0.4s ease both";
      } else {
        item.style.display = "none";
      }
    });
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add("visible"), i * 80);
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Smooth scroll
  document.querySelectorAll("a[href^=\"#\"]").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute("href"));
      if (t) t.scrollIntoView({ behavior: "smooth" });
    });
  });
