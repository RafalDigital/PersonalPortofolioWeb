// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Smooth scroll untuk hero section
document.querySelector(".hero").addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  }
});

// Slider functionality
let projectIndex = 0;
let testimonialIndex = 0;

function initSlider(type) {
  const slides = document.querySelectorAll(`.${type}-slide`);
  const dotsContainer = document.getElementById(`${type}-dots`);

  // Create dots
  slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.className = "dot";
    if (index === 0) dot.classList.add("active");
    dot.onclick = () => goToSlide(type, index);
    dotsContainer.appendChild(dot);
  });
}

function showSlide(type, index) {
  const slides = document.querySelectorAll(`.${type}-slide`);
  const dots = document.querySelectorAll(`#${type}-dots .dot`);

  // Loop around
  if (index >= slides.length) {
    if (type === "project") projectIndex = 0;
    else testimonialIndex = 0;
  }
  if (index < 0) {
    if (type === "project") projectIndex = slides.length - 1;
    else testimonialIndex = slides.length - 1;
  }

  const currentIndex = type === "project" ? projectIndex : testimonialIndex;

  // Hide all slides
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show current slide
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

function changeSlide(type, direction) {
  if (type === "project") {
    projectIndex += direction;
    showSlide("project", projectIndex);
  } else {
    testimonialIndex += direction;
    showSlide("testimonial", testimonialIndex);
  }
}

function goToSlide(type, index) {
  if (type === "project") {
    projectIndex = index;
    showSlide("project", projectIndex);
  } else {
    testimonialIndex = index;
    showSlide("testimonial", testimonialIndex);
  }
}

// Auto slide for testimonials
setInterval(() => {
  testimonialIndex++;
  showSlide("testimonial", testimonialIndex);
}, 5000);

// Form submit handler
function handleSubmit(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Simulate form submission
  // alert(
  //   "Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda."
  // );

  // Reset form
  e.target.reset();
}

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector("nav");

// OPSIONAL - JIKA DI SCROLL NAV ILANG
// window.addEventListener('scroll', () => {
//     const currentScroll = window.pageYOffset;

//     if (currentScroll <= 0) {
//         nav.style.top = '20px';
//     } else if (currentScroll > lastScroll && currentScroll > 100) {
//         // Scroll down - hide nav
//         nav.style.top = '-100px';
//     } else {
//         // Scroll up - show nav
//         nav.style.top = '20px';
//     }

//     lastScroll = currentScroll;
// });
///////////////////////////////////////////////////////////////////////////////////

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Initialize sliders
initSlider("project");
initSlider("testimonial");

// Project details data
const projectsData = {
  RafalFinance: {
    title: "Finance Tracker [DEMO]",
    subtitle: "Pelacak keuangan pribadi yang simpel dan efisien",
    description:
      "website sederhana untuk memantau dan mengelola keuangan pribadi, memungkinkan pengguna mencatat pemasukan dan pengeluaran, mengkategorikannya, serta melihat ringkasan keuangan dengan cepat. Website ini mengutamakan desain minimalis dan antarmuka mudah digunakan, serta siap dikembangkan lebih lanjut dengan fitur seperti grafik, filter lanjutan, dan integrasi backend di masa depan.",
    created: "1 Oktober 2025",
    published: "28 Oktober 2025",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "AOS Animation",
      "Remix Icon",
    ],
    liveLink: "https://rafaldigital.github.io/RafalFinanceTracker/",
    repoLink: "https://github.com/RafalDigital/RafalFinanceTracker/tree/main",
  },
  ecommerce: {
    title: "E-Commerce Landing Page",
    subtitle: "High Conversion Landing Page Design",
    description:
      "Landing page e-commerce yang dioptimalkan untuk meningkatkan conversion rate. Menampilkan produk dengan tampilan yang menarik, call-to-action yang jelas, dan user flow yang intuitif. Dilengkapi dengan animasi micro-interaction untuk meningkatkan engagement pengunjung dan mempermudah proses browsing produk.",
    created: "September 2024",
    published: "November 2024",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Swiper.js"],
    liveLink: "https://ecommerce-demo.rafifadhil.com",
    repoLink: "https://github.com/RafalDigital/ecommerce-landing",
  },
  dashboard: {
    title: "Dashboard UI",
    subtitle: "Interactive Data Visualization Dashboard",
    description:
      "Dashboard interface yang menampilkan data secara visual dan interaktif. Dirancang untuk memberikan overview yang jelas tentang metrics penting dengan chart dan grafik yang mudah dipahami. Interface yang clean dan intuitif memudahkan user untuk mengakses informasi yang mereka butuhkan dengan cepat dan efisien.",
    created: "Agustus 2024",
    published: "Oktober 2024",
    technologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "Grid Layout"],
    liveLink: "https://dashboard-demo.rafifadhil.com",
    repoLink: "https://github.com/RafalDigital/dashboard-ui",
  },
};

// Open project modal
function openProjectModal(projectId) {
  const project = projectsData[projectId];
  if (!project) return;

  // Set modal content
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSubtitle").textContent = project.subtitle;
  document.getElementById("modalDescription").textContent = project.description;
  document.getElementById("modalCreated").textContent = project.created;
  document.getElementById("modalPublished").textContent = project.published;
  document.getElementById("modalLiveLink").href = project.liveLink;
  document.getElementById("modalRepoLink").href = project.repoLink;

  // Set technologies
  const techStackContainer = document.getElementById("modalTechStack");
  techStackContainer.innerHTML = "";
  project.technologies.forEach((tech) => {
    const tag = document.createElement("span");
    tag.className = "tech-tag";
    tag.textContent = tech;
    techStackContainer.appendChild(tag);
  });

  // Show modal
  const modal = document.getElementById("projectModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close project modal
function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeProjectModal();
  }
});

// Close modal with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// Mobile Menu Toggle
const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const body = document.body;

// Open/Close Mobile Menu
function toggleMobileMenu() {
  hamburgerBtn.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  mobileMenuOverlay.classList.toggle("active");
  body.classList.toggle("menu-open");
}

// Event Listeners
hamburgerBtn.addEventListener("click", toggleMobileMenu);
mobileMenuOverlay.addEventListener("click", toggleMobileMenu);

// Close menu when clicking menu links
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Get target section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    // Close menu first
    toggleMobileMenu();

    // Scroll to section after small delay
    setTimeout(() => {
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  });
});

// Close menu on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
    toggleMobileMenu();
  }
});

// Prevent menu close when clicking inside mobile menu
mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Dark Mode Toggle (Desktop)
document.getElementById("DarkModeNav").addEventListener("click", () => {
  const body = document.body;
  const DarkBTN = document.querySelector(".darkBTN");
  const LightBTN = document.querySelector(".lightBTN");
  const toggleSwitch = document.querySelector(".toggle-switch");

  // Toggle light mode class
  body.classList.toggle("light-mode");

  // Update button states
  if (body.classList.contains("light-mode")) {
    DarkBTN.classList.remove("active");
    LightBTN.classList.add("active");
    if (toggleSwitch) toggleSwitch.classList.remove("active");
    // Save preference
    localStorage.setItem("theme", "light");
  } else {
    LightBTN.classList.remove("active");
    DarkBTN.classList.add("active");
    if (toggleSwitch) toggleSwitch.classList.add("active");
    // Save preference
    localStorage.setItem("theme", "dark");
  }
});

// Mobile Dark Mode Toggle
document
  .getElementById("mobileDarkModeToggle")
  .addEventListener("click", () => {
    const body = document.body;
    const toggleSwitch = document.querySelector(".toggle-switch");
    const DarkBTN = document.querySelector(".darkBTN");
    const LightBTN = document.querySelector(".lightBTN");

    // Toggle light mode class
    body.classList.toggle("light-mode");

    // Update toggle switch
    toggleSwitch.classList.toggle("active");

    // Update desktop buttons
    if (body.classList.contains("light-mode")) {
      DarkBTN.classList.remove("active");
      LightBTN.classList.add("active");
      localStorage.setItem("theme", "light");
    } else {
      LightBTN.classList.remove("active");
      DarkBTN.classList.add("active");
      localStorage.setItem("theme", "dark");
    }
  });

// Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const DarkBTN = document.querySelector(".darkBTN");
  const LightBTN = document.querySelector(".lightBTN");
  const toggleSwitch = document.querySelector(".toggle-switch");

  if (savedTheme === "light") {
    body.classList.add("light-mode");
    DarkBTN.classList.remove("active");
    LightBTN.classList.add("active");
    if (toggleSwitch) toggleSwitch.classList.remove("active");
  } else {
    // Default dark mode
    body.classList.remove("light-mode");
    LightBTN.classList.remove("active");
    DarkBTN.classList.add("active");
    if (toggleSwitch) toggleSwitch.classList.add("active");
  }

  // Load saved language
  loadSavedLanguage();
});

// ===== B. LANGUAGE TOGGLE - GANTI FUNCTION YANG LAMA =====

// Language content object
const languageContent = {
  id: {
    // Navbar
    about: "About",
    project: "Project",
    experience: "Experience",
    contact: "Contact",

    // Hero
    heroTitle: "Rafif Fadhil Dharmawan",
    heroSubtitle: "Frontend Developer | Web Enthusiast",
    heroBtn: "Jelajahi Karya Saya",

    // About
    aboutTitle: "Tentang Saya",
    aboutText1:
      "Halo! Saya <span class='highlight'>Rafif Fadhil Dharmawan</span>, seorang pelajar SMA yang memiliki passion mendalam dalam dunia teknologi, khususnya web development.",
    aboutText2:
      "Saya memiliki kemampuan dalam membangun website menggunakan <span class='highlight'>HTML, CSS, JavaScript</span>, dan memanfaatkan AI untuk meningkatkan produktivitas dan kualitas pekerjaan saya.",
    aboutText3:
      "Saat ini fokus saya adalah mengembangkan portofolio frontend yang solid sambil terus belajar dan berkembang. Saya percaya bahwa <span class='highlight'>konsistensi dalam belajar dan praktik</span> adalah kunci untuk mencapai level yang lebih tinggi.",
    aboutText4:
      "Visi saya ke depan adalah menjadi <span class='highlight'>fullstack web developer</span> yang mampu memanfaatkan teknologi AI secara efektif untuk menciptakan solusi digital yang inovatif.",

    // Skills
    skillsTitle: "Keahlian & Tech Stack",

    // Projects
    projectsTitle: "Proyek Saya",
    projectBtn: "Lihat Detail",
    project1Title: "Portfolio Website",
    project1Desc:
      "Website portfolio modern dengan desain minimalist dan animasi yang smooth menggunakan HTML, CSS, dan JavaScript.",
    project2Title: "E-Commerce Landing Page",
    project2Desc:
      "Landing page untuk e-commerce dengan desain yang menarik dan user-friendly untuk meningkatkan conversion rate.",
    project3Title: "Dashboard UI",
    project3Desc:
      "Dashboard interface dengan visualisasi data yang interaktif dan responsive di berbagai perangkat.",

    // Experience
    experienceTitle: "Pengalaman & Pencapaian",
    experienceEmpty: "Belum Ada",

    // Testimonials
    testimonialsTitle: "Testimoni",
    testimonialsEmpty: "Belum Ada",

    // Contact
    contactTitle: "Hubungi Saya",
    contactEmail: "Email",
    contactEmailPlaceholder: "email@anda.com",
    contactSubject: "Subjek",
    contactSubjectPlaceholder: "Diskusi Proyek",
    contactMessage: "Pesan",
    contactMessagePlaceholder: "Ceritakan tentang proyek Anda...",
    contactBtn: "Kirim Pesan",

    // Footer
    footerBrand: "RafalDigital",
    footerMade: "Made with",
    footerBy: "by Rafif F.D.",

    // Mobile Settings
    darkModeText: "Mode Gelap",
    languageText: "Bahasa Indonesia",
  },
  en: {
    // Navbar
    about: "About",
    project: "Project",
    experience: "Experience",
    contact: "Contact",

    // Hero
    heroTitle: "Rafif Fadhil Dharmawan",
    heroSubtitle: "Frontend Developer | Web Enthusiast",
    heroBtn: "Explore My Work",

    // About
    aboutTitle: "About Me",
    aboutText1:
      "Hello! I'm <span class='highlight'>Rafif Fadhil Dharmawan</span>, a high school student with a deep passion for technology, especially web development.",
    aboutText2:
      "I have skills in building websites using <span class='highlight'>HTML, CSS, JavaScript</span>, and leveraging AI to enhance productivity and work quality.",
    aboutText3:
      "Currently, my focus is on developing a solid frontend portfolio while continuously learning and growing. I believe that <span class='highlight'>consistency in learning and practice</span> is the key to reaching higher levels.",
    aboutText4:
      "My future vision is to become a <span class='highlight'>fullstack web developer</span> who can effectively utilize AI technology to create innovative digital solutions.",

    // Skills
    skillsTitle: "Skills & Tech Stack",

    // Projects
    projectsTitle: "My Projects",
    projectBtn: "View Details",
    project1Title: "Portfolio Website",
    project1Desc:
      "Modern portfolio website with minimalist design and smooth animations using HTML, CSS, and JavaScript.",
    project2Title: "E-Commerce Landing Page",
    project2Desc:
      "Landing page for e-commerce with attractive design and user-friendly interface to increase conversion rate.",
    project3Title: "Dashboard UI",
    project3Desc:
      "Dashboard interface with interactive data visualization and responsive across various devices.",

    // Experience
    experienceTitle: "Experience & Achievements",
    experienceEmpty: "Coming Soon",

    // Testimonials
    testimonialsTitle: "Testimonials",
    testimonialsEmpty: "Coming Soon",

    // Contact
    contactTitle: "Get In Touch",
    contactEmail: "Email",
    contactEmailPlaceholder: "your@email.com",
    contactSubject: "Subject",
    contactSubjectPlaceholder: "Project Discussion",
    contactMessage: "Message",
    contactMessagePlaceholder: "Tell me about your project...",
    contactBtn: "Send Message",

    // Footer
    footerBrand: "RafalDigital",
    footerMade: "Made with",
    footerBy: "by Rafif F.D.",

    // Mobile Settings
    darkModeText: "Dark Mode",
    languageText: "English",
  },
};

// Current language state
let currentLang = "id";

// Language Toggle (Desktop)
document.getElementById("LanguageNav").addEventListener("click", () => {
  const IDBTN = document.querySelector(".idBTN");
  const ENBTN = document.querySelector(".enBTN");

  // Toggle language
  currentLang = currentLang === "id" ? "en" : "id";

  // Update button states
  if (currentLang === "en") {
    IDBTN.classList.remove("active");
    ENBTN.classList.add("active");
  } else {
    ENBTN.classList.remove("active");
    IDBTN.classList.add("active");
  }

  // Update content
  updateLanguageContent(currentLang);

  // Update mobile indicator
  updateMobileLanguageIndicator(currentLang);

  // Save preference
  localStorage.setItem("language", currentLang);
});

// Mobile Language Toggle
document
  .getElementById("mobileLanguageToggle")
  .addEventListener("click", () => {
    const IDBTN = document.querySelector(".idBTN");
    const ENBTN = document.querySelector(".enBTN");

    // Toggle language
    currentLang = currentLang === "id" ? "en" : "id";

    // Update desktop buttons
    if (currentLang === "en") {
      IDBTN.classList.remove("active");
      ENBTN.classList.add("active");
    } else {
      ENBTN.classList.remove("active");
      IDBTN.classList.add("active");
    }

    // Update content
    updateLanguageContent(currentLang);

    // Update mobile indicator
    updateMobileLanguageIndicator(currentLang);

    // Save preference
    localStorage.setItem("language", currentLang);
  });

// Update language content function
function updateLanguageContent(lang) {
  const content = languageContent[lang];

  // Update navbar
  document.querySelectorAll("nav a").forEach((link, index) => {
    const keys = ["about", "project", "experience", "contact"];
    if (keys[index]) {
      link.textContent = content[keys[index]];
    }
  });

  // Update mobile menu
  const menuTexts = document.querySelectorAll(".mobile-menu .menu-text");
  const menuKeys = ["about", "project", "experience", "contact"];
  menuTexts.forEach((text, index) => {
    text.textContent = content[menuKeys[index]];
  });

  // Update hero
  document.querySelector(".hero h1").textContent = content.heroTitle;
  document.querySelector(".hero p").textContent = content.heroSubtitle;
  const heroBtn = document.querySelector(".hero-btn");
  heroBtn.childNodes[0].textContent = content.heroBtn + " ";

  // Update about
  document.querySelector("#about .section-title").textContent =
    content.aboutTitle;
  const aboutTexts = document.querySelectorAll(".about-text p");
  aboutTexts[0].innerHTML = content.aboutText1;
  aboutTexts[1].innerHTML = content.aboutText2;
  aboutTexts[2].innerHTML = content.aboutText3;
  aboutTexts[3].innerHTML = content.aboutText4;

  // Update skills
  document.querySelector("#skills .section-title").textContent =
    content.skillsTitle;

  // Update projects
  document.querySelector("#project .section-title").textContent =
    content.projectsTitle;
  const projectSlides = document.querySelectorAll(".project-slide");
  projectSlides[0].querySelector("h3").textContent = content.project1Title;
  projectSlides[0].querySelector("p").textContent = content.project1Desc;
  projectSlides[1].querySelector("h3").textContent = content.project2Title;
  projectSlides[1].querySelector("p").textContent = content.project2Desc;
  projectSlides[2].querySelector("h3").textContent = content.project3Title;
  projectSlides[2].querySelector("p").textContent = content.project3Desc;

  // Update project buttons
  document.querySelectorAll(".project-btn").forEach((btn) => {
    btn.childNodes[0].textContent = content.projectBtn + " ";
  });

  // Update experience
  document.querySelector("#experience .section-title").textContent =
    content.experienceTitle;
  const expEmpty = document.querySelector(".blank-card h3");
  if (expEmpty) expEmpty.textContent = content.experienceEmpty;

  // Update testimonials
  document.querySelector("#testimonials .section-title").textContent =
    content.testimonialsTitle;
  const testEmpty = document.querySelector(".blank-testimonial-text");
  if (testEmpty) testEmpty.textContent = content.testimonialsEmpty;

  // Update contact
  document.querySelector("#contact .section-title").textContent =
    content.contactTitle;
  document.querySelector('label[for="email"]').textContent =
    content.contactEmail;
  document.querySelector("#email").placeholder =
    content.contactEmailPlaceholder;
  document.querySelector('label[for="subject"]').textContent =
    content.contactSubject;
  document.querySelector("#subject").placeholder =
    content.contactSubjectPlaceholder;
  document.querySelector('label[for="message"]').textContent =
    content.contactMessage;
  document.querySelector("#message").placeholder =
    content.contactMessagePlaceholder;
  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.childNodes[0].textContent = content.contactBtn + " ";

  // Update mobile settings text
  document.querySelector(".mobile-settings .setting-text").textContent =
    content.darkModeText;
  document.querySelector(".mobile-settings .lang-text").textContent =
    content.languageText;
}

// Update mobile language indicator
function updateMobileLanguageIndicator(lang) {
  const currentLangElement = document.querySelector(".current-lang");
  currentLangElement.textContent = lang.toUpperCase();
}
