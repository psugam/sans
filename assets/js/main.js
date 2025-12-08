console.log(
  "This Hugo theme was created by psugam. Vist: github.com/psugam/sans for more"
);

// SINGLE DOMContentLoaded EVENT LISTENER
document.addEventListener("DOMContentLoaded", function () {
  // FOOTNOTE TEXT
  const footnoteDiv = document.querySelector(".footnotes");
  if (footnoteDiv) {
    const hr = footnoteDiv.querySelector("hr");
    const ol = footnoteDiv.querySelector("ol");

    // Create the new div element
    const footnoteText = document.createElement("div");
    footnoteText.id = "myfootnoteText";
    footnoteText.textContent = "Footnotes";

    // Insert before the <ol>, or after the <hr> if no <ol>
    if (ol) {
      footnoteDiv.insertBefore(footnoteText, ol);
    } else if (hr) {
      footnoteDiv.insertBefore(footnoteText, hr.nextSibling);
    } else {
      footnoteDiv.appendChild(footnoteText);
    }
  }

  // AUTO-INITIALIZE ALL ACCORDION GROUPS
  document
    .querySelectorAll("[data-accordion-group]")
    .forEach(function (accordion) {
      const groupId = accordion.getAttribute("data-accordion-group");
      window.initAccordionGroup(groupId);
    });

  // DARK MODE TOGGLE
  const toggleButton = document.getElementById("dark-mode-toggle");
  const body = document.body;
  const darkCircle = document.getElementById("dark-circle");
  const lightCircle = document.getElementById("light-circle");

  // Default: light theme
  let theme = localStorage.getItem("theme") || "light";
  if (toggleButton) {
    // Apply theme
    if (theme === "dark") {
      body.classList.add("dark-mode");
      darkCircle.style.display = "inline";
      lightCircle.style.display = "none";
    } else {
      body.classList.remove("dark-mode");
      darkCircle.style.display = "none";
      lightCircle.style.display = "inline";
    }

    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Save preference to local storage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        lightCircle.style.setProperty("display", "none");
        darkCircle.style.setProperty("display", "inline");
      } else {
        localStorage.setItem("theme", "light");
        darkCircle.style.setProperty("display", "none");
        lightCircle.style.setProperty("display", "inline");
      }
    });
  }

  // TAXONOMY CLOUD
  try {
    const cloud = document.querySelector(
      '.taxo-cloud[data-taxonomy="{{ $taxonomy }}"]'
    );
    if (cloud) {
      const terms = Array.from(cloud.children);
      // Shuffle for visual variety
      terms.sort(() => Math.random() - 0.5);
      cloud.innerHTML = "";
      terms.forEach((t) => cloud.appendChild(t));
    }
  } catch (err) {
    console.error("Taxonomy cloud error:", err);
  }

  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  function initMobileNestedMenus() {
    if (window.innerWidth > 768) return;

    const menuItems = document.querySelectorAll(".header-nav li");

    menuItems.forEach((item) => {
      const submenu = item.querySelector(":scope > ul");

      if (submenu) {
        item.classList.add("has-children");

        const link = item.querySelector(":scope > a");

        if (link && !link.dataset.mobileHandler) {
          link.dataset.mobileHandler = "true";

          link.addEventListener("click", function (e) {
            if (window.innerWidth <= 768) {
              const clickX = e.clientX;
              const linkRect = link.getBoundingClientRect();
              const clickedArrowArea = clickX > linkRect.right - 50;

              if (clickedArrowArea) {
                e.preventDefault();
                e.stopPropagation();

                const wasExpanded = item.classList.contains("expanded");

                const parent = item.parentElement;
                const siblings = parent.querySelectorAll(
                  ":scope > li.has-children"
                );
                siblings.forEach((sibling) => {
                  if (sibling !== item) {
                    sibling.classList.remove("expanded");
                  }
                });

                if (wasExpanded) {
                  item.classList.remove("expanded");
                } else {
                  item.classList.add("expanded");
                }
              }
            }
          });
        }
      }
    });
  }

  initMobileNestedMenus();

  let resizeTimeout;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      if (window.innerWidth <= 768) {
        initMobileNestedMenus();
      } else {
        document.querySelectorAll(".header-nav li.expanded").forEach((item) => {
          item.classList.remove("expanded");
        });
      }
    }, 250);
  });

  document.addEventListener("click", function (e) {
    if (window.innerWidth <= 768 && navMenu && hamburger) {
      const clickedInsideMenu = navMenu.contains(e.target);
      const clickedHamburger = hamburger.contains(e.target);

      if (
        !clickedInsideMenu &&
        !clickedHamburger &&
        navMenu.classList.contains("active")
      ) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.querySelectorAll(".header-nav li.expanded").forEach((item) => {
          item.classList.remove("expanded");
        });
      }
    }
  });

  //FONT COLOR SHORTODE
  function updateColors() {
    const isDark = document.body.classList.contains("dark-mode");
    document.querySelectorAll(".color-text").forEach(function (el) {
      if (isDark && el.dataset.dark) {
        el.style.color = el.dataset.dark;
      } else if (el.dataset.light) {
        el.style.color = el.dataset.light;
      }
    });
  }

  updateColors();

  // Watch for theme changes
  const observer = new MutationObserver(updateColors);
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });
});

// GO TO TOP
const goToTopButton = document.getElementById("goToTopButton");
if (goToTopButton) {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      goToTopButton.style.display = "block";
    } else {
      goToTopButton.style.display = "none";
    }
  }

  // Smooth scroll to top
  window.goToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}

// For ACCORDIAN WORKING
// Initialize accordion management (only once)
if (!window.accordionInitialized) {
  window.accordionInitialized = {};

  window.initAccordionGroup = function (groupId) {
    const container = document.querySelector(
      '[data-accordion-group="' + groupId + '"]'
    );
    if (!container || window.accordionInitialized[groupId]) return;

    window.accordionInitialized[groupId] = true;

    const buttons = container.querySelectorAll(".accordion-btn");
    const contents = container.querySelectorAll(".accordion-content");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-accordion-target");
        const content = document.getElementById(targetId);
        const icon = btn.querySelector(".accordion-icon");
        const isHidden = content.classList.contains("hidden");

        // Close all accordions in THIS group only
        contents.forEach((c) => c.classList.add("hidden"));
        buttons.forEach((b) => {
          b.classList.remove("active");
          b.querySelector(".accordion-icon").style.transform = "rotate(0deg)";
        });

        // Open clicked accordion if it was closed
        if (isHidden) {
          content.classList.remove("hidden");
          btn.classList.add("active");
          icon.style.transform = "rotate(90deg)";
        }
      });
    });
  };
}

// TABS
if (!window.tabGroupInitialized) {
  window.tabGroupInitialized = {};

  window.initTabGroup = function (groupId) {
    const container = document.querySelector(
      '[data-tab-group="' + groupId + '"]'
    );
    if (!container || window.tabGroupInitialized[groupId]) return;

    window.tabGroupInitialized[groupId] = true;

    const buttons = container.querySelectorAll(".tab-btn");
    const contents = container.querySelectorAll(".tab-content");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-tab-target");

        // Hide all contents in THIS group only
        contents.forEach((c) => c.classList.add("hidden"));

        // Remove active from all buttons in THIS group only
        buttons.forEach((b) => b.classList.remove("active"));

        // Show selected tab and activate button
        document.getElementById(targetId).classList.remove("hidden");
        btn.classList.add("active");
      });
    });

    // Activate first tab by default
    if (buttons.length > 0) {
      buttons[0].click();
    }
  };
}

// Initialize this specific tab group
const groupId = "{{ $tabGroupId }}";

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function () {
    window.initTabGroup(groupId);
  });
} else {
  window.initTabGroup(groupId);
}

// GITHUB COMMENTS
function updateGiscusTheme() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  const theme = isDarkMode ? "transparent_dark" : "light";

  const iframe = document.querySelector("iframe.giscus-frame");
  if (!iframe) return; // not loaded yet

  iframe.contentWindow.postMessage(
    { giscus: { setConfig: { theme: theme } } },
    "https://giscus.app"
  );
}
