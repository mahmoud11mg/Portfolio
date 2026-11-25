(() => {
  "use strict";

  const storage = {
    get(key) {
      try { return window.localStorage.getItem(key); }
      catch { return null; }
    },
    set(key, value) {
      try { window.localStorage.setItem(key, value); }
      catch { /* Storage can be unavailable in private browsing. */ }
    }
  };

  const getFocusable = (container) => Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter((element) => element.getAttribute("aria-hidden") !== "true");

  document.addEventListener("DOMContentLoaded", () => {
    // Footer year.
    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Light / dark theme.
    const themeToggle = document.getElementById("chk");
    const applyTheme = (theme) => {
      const dark = theme === "dark";
      document.body.classList.toggle("dark", dark);
      document.body.classList.toggle("light", !dark);
      if (themeToggle) themeToggle.checked = dark;
    };
    applyTheme(storage.get("qservTheme") === "dark" ? "dark" : "light");
    themeToggle?.addEventListener("change", () => {
      const theme = themeToggle.checked ? "dark" : "light";
      storage.set("qservTheme", theme);
      applyTheme(theme);
    });

    // Responsive navigation.
    const navbar = document.getElementById("navbarResponsive");
    const navToggle = document.querySelector("[data-collapse-toggle]");
    const closeNavigation = () => {
      if (!navbar || !navToggle) return;
      navbar.classList.remove("show");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle?.addEventListener("click", () => {
      if (!navbar) return;
      const expanded = navbar.classList.toggle("show");
      navToggle.setAttribute("aria-expanded", String(expanded));
    });

    // Smooth in-page navigation and mobile menu dismissal.
    const navbarHeight = () => document.getElementById("mainNavbar")?.offsetHeight || 0;
    document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const selector = link.getAttribute("href");
        const target = selector && selector !== "#" ? document.querySelector(selector) : null;
        if (!target) return;
        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight() - 12;
        window.scrollTo({ top, behavior: "smooth" });
        if (window.history?.replaceState) window.history.replaceState(null, "", selector);
        closeNavigation();
      });
    });

    document.addEventListener("click", (event) => {
      if (!navbar || !navToggle || !navbar.classList.contains("show")) return;
      if (!navbar.contains(event.target) && !navToggle.contains(event.target)) closeNavigation();
    });

    // Testimonials slider.
    const slider = document.querySelector(".swiper-container");
    if (slider && window.Swiper) {
      new window.Swiper(slider, {
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: { delay: 11000, disableOnInteraction: false },
        scrollbar: { el: ".swiper-scrollbar", hide: true }
      });
    }

    // Portfolio filtering without a layout library.
    const filterButtons = document.querySelectorAll(".filters-button-group [data-filter]");
    const projectCards = document.querySelectorAll(".grid-portfolio .grid-item");
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter") || "*";
        projectCards.forEach((card) => {
          card.hidden = filter !== "*" && !card.classList.contains(filter.slice(1));
        });
        filterButtons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
      });
    });

    // Accessible modal behavior (open, close, Escape, backdrop, and focus trap).
    let activeModal = null;
    let previousFocus = null;
    let backdrop = null;
    let originalBodyPadding = "";

    const closeModal = () => {
      if (!activeModal) return;
      const modal = activeModal;
      activeModal = null;

      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.removeAttribute("aria-modal");

      window.setTimeout(() => {
        if (!modal.classList.contains("show")) modal.style.display = "none";
      }, 180);

      backdrop?.classList.remove("show");
      const oldBackdrop = backdrop;
      backdrop = null;
      window.setTimeout(() => oldBackdrop?.remove(), 180);

      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = originalBodyPadding;
      previousFocus?.focus();
      previousFocus = null;
    };

    const openModal = (modal, trigger) => {
      if (!modal) return;
      if (activeModal) closeModal();

      const focusOrigin = trigger || document.activeElement;
      previousFocus = navbar?.contains(focusOrigin) ? navToggle : focusOrigin;
      closeNavigation();
      activeModal = modal;
      modal.style.display = "block";
      modal.removeAttribute("aria-hidden");
      modal.setAttribute("aria-modal", "true");
      modal.classList.add("show");

      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      originalBodyPadding = document.body.style.paddingRight;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.classList.add("modal-open");

      backdrop = document.createElement("div");
      backdrop.className = "modal-backdrop fade";
      backdrop.addEventListener("click", closeModal);
      document.body.appendChild(backdrop);
      requestAnimationFrame(() => backdrop?.classList.add("show"));

      const focusable = getFocusable(modal);
      (focusable[0] || modal).focus();
    };

    document.addEventListener("click", (event) => {
      const openTrigger = event.target.closest("[data-modal-open]");
      if (openTrigger) {
        const selector = openTrigger.getAttribute("data-modal-target");
        const modal = selector ? document.querySelector(selector) : null;
        if (modal) {
          event.preventDefault();
          openModal(modal, openTrigger);
        }
        return;
      }

      const closeTrigger = event.target.closest("[data-modal-close]");
      if (closeTrigger && activeModal) {
        event.preventDefault();
        closeModal();
        return;
      }

      if (activeModal && event.target === activeModal) closeModal();
    });

    document.addEventListener("keydown", (event) => {
      if (!activeModal) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = getFocusable(activeModal);
      if (!focusable.length) {
        event.preventDefault();
        activeModal.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  });
})();
