/* =========================================================
   PARWAAZ TECHFORGE
   PREMIUM AGENCY WEBSITE
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CONFIG
    ===================================================== */

    const whatsappNumber = "919424708856";

    const brandName = "PARWAAZ TECHFORGE";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");

    const pageLoader =
        document.getElementById("pageLoader");

    const scrollTopButton =
        document.getElementById("scrollTop");

    const contactForm =
        document.getElementById("contactForm");


    /* =====================================================
       WHATSAPP
    ===================================================== */

    function openWhatsApp(message) {

        if (!message) {

            message =
                `Hello ${brandName}, I would like to discuss a project.`;

        }

        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(
            url,
            "_blank",
            "noopener,noreferrer"
        );

    }


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    function closeMobileMenu() {

        if (navLinks) {

            navLinks.classList.remove("active");

        }

        if (menuToggle) {

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    if (menuToggle && navLinks) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.addEventListener(
            "click",
            (event) => {

                event.stopPropagation();

                const isOpen =
                    navLinks.classList.toggle("active");

                menuToggle.classList.toggle(
                    "active",
                    isOpen
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );

            }
        );


        navLinks
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener(
                    "click",
                    closeMobileMenu
                );

            });


        document.addEventListener(
            "click",
            (event) => {

                if (
                    !navLinks.contains(event.target) &&
                    !menuToggle.contains(event.target)
                ) {

                    closeMobileMenu();

                }

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const siteHeader =
        document.querySelector(".site-header");


    function updateNavbar() {

        if (!siteHeader) return;

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 25
        );

    }


    updateNavbar();


    window.addEventListener(
        "scroll",
        updateNavbar,
        {
            passive: true
        }
    );


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener(
                "click",
                (event) => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(targetId);


                    if (!target) {

                        return;

                    }


                    event.preventDefault();


                    const header =
                        document.querySelector(
                            ".site-header"
                        );


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect().top +
                        window.scrollY -
                        headerHeight -
                        10;


                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const navigationLinks =
        document.querySelectorAll(
            ".nav-links > li > a:not(.nav-cta)"
        );


    if (
        sections.length &&
        navigationLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            const currentId =
                                entry.target.id;


                            navigationLinks.forEach(
                                (link) => {

                                    const href =
                                        link.getAttribute(
                                            "href"
                                        );


                                    link.classList.toggle(
                                        "active",
                                        href ===
                                        "#" + currentId
                                    );

                                }
                            );

                        }
                    );

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px",

                    threshold:
                        0
                }
            );


        sections.forEach(
            (section) => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       WHATSAPP DATA BUTTONS
    ===================================================== */

    const whatsappButtons =
        document.querySelectorAll(
            "[data-whatsapp]"
        );


    whatsappButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                (event) => {

                    /*
                     * If the button points to a
                     * page section, prevent the
                     * default jump and open WhatsApp.
                     */

                    event.preventDefault();


                    const message =
                        button.dataset.whatsapp ||
                        `Hello ${brandName}, I would like to discuss a project.`;


                    openWhatsApp(message);

                }
            );

        }
    );


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const nameField =
                    document.getElementById(
                        "contactName"
                    );


                const phoneField =
                    document.getElementById(
                        "contactPhone"
                    );


                const emailField =
                    document.getElementById(
                        "contactEmail"
                    );


                const messageField =
                    document.getElementById(
                        "contactMessage"
                    );


                const name =
                    nameField
                        ? nameField.value.trim()
                        : "";


                const phone =
                    phoneField
                        ? phoneField.value.trim()
                        : "";


                const email =
                    emailField
                        ? emailField.value.trim()
                        : "";


                const message =
                    messageField
                        ? messageField.value.trim()
                        : "";


                /* -----------------------------------------
                   NAME VALIDATION
                ----------------------------------------- */

                if (name.length < 2) {

                    alert(
                        "Please enter your name."
                    );


                    if (nameField) {

                        nameField.focus();

                    }

                    return;

                }


                /* -----------------------------------------
                   PHONE VALIDATION
                ----------------------------------------- */

                if (phone.length > 0) {

                    const phonePattern =
                        /^[0-9+\-\s()]{7,15}$/;


                    if (
                        !phonePattern.test(phone)
                    ) {

                        alert(
                            "Please enter a valid phone number."
                        );


                        if (phoneField) {

                            phoneField.focus();

                        }

                        return;

                    }

                }


                /* -----------------------------------------
                   MESSAGE VALIDATION
                ----------------------------------------- */

                if (message.length < 10) {

                    alert(
                        "Please tell us a little more about your project."
                    );


                    if (messageField) {

                        messageField.focus();

                    }

                    return;

                }


                /* -----------------------------------------
                   WHATSAPP MESSAGE
                ----------------------------------------- */

                const finalMessage =
                    `Hello ${brandName},

Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email || "Not provided"}

Project Requirement:
${message}`;


                openWhatsApp(
                    finalMessage
                );


                contactForm.reset();

            }
        );

    }


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    function updateScrollTop() {

        if (!scrollTopButton) return;


        scrollTopButton.classList.toggle(
            "show",
            window.scrollY > 500
        );

    }


    updateScrollTop();


    window.addEventListener(
        "scroll",
        updateScrollTop,
        {
            passive: true
        }
    );


    if (scrollTopButton) {

        scrollTopButton.addEventListener(
            "click",
            () => {

                window.scrollTo({

                    top:
                        0,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    /* =====================================================
       PAGE LOADER
    ===================================================== */

    if (pageLoader) {

        const hideLoader =
            () => {

                setTimeout(
                    () => {

                        pageLoader.classList.add(
                            "loader-hidden"
                        );

                    },
                    350
                );

            };


        if (
            document.readyState ===
            "complete"
        ) {

            hideLoader();

        } else {

            window.addEventListener(
                "load",
                hideLoader,
                {
                    once: true
                }
            );

        }

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            [
                ".section-shell",
                ".service-card",
                ".featured-project",
                ".process-step",
                ".business-point",
                ".category-chip",
                ".contact-form"
            ].join(",")
        );


    revealElements.forEach(
        (element, index) => {

            element.classList.add(
                "reveal"
            );


            element.style.transitionDelay =
                `${Math.min(index * 45, 250)}ms`;

        }
    );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                !entry.isIntersecting
                            ) {

                                return;

                            }


                            entry.target.classList.add(
                                "reveal-active"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold:
                        0.08,

                    rootMargin:
                        "0px 0px -35px 0px"
                }
            );


        revealElements.forEach(
            (element) => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "reveal-active"
                );

            }
        );

    }


    /* =====================================================
       PROJECT CARD MICRO INTERACTION
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".featured-project"
        );


    projectCards.forEach(
        (card) => {

            card.addEventListener(
                "keydown",
                (event) => {

                    if (
                        event.key !== "Enter" &&
                        event.key !== " "
                    ) {

                        return;

                    }


                    if (
                        event.target.closest("a")
                    ) {

                        return;

                    }


                    event.preventDefault();

                    card.classList.toggle(
                        "project-active"
                    );

                }
            );

        }
    );


    /* =====================================================
       SERVICE LINK FEEDBACK
    ===================================================== */

    document
        .querySelectorAll(
            ".service-card a, .project-link"
        )
        .forEach(
            (link) => {

                link.addEventListener(
                    "click",
                    () => {

                        link.classList.add(
                            "clicked"
                        );


                        setTimeout(
                            () => {

                                link.classList.remove(
                                    "clicked"
                                );

                            },
                            300
                        );

                    }
                );

            }
        );


    /* =====================================================
       IMAGE SAFETY
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(
            (image) => {

                if (
                    !image.hasAttribute(
                        "loading"
                    )
                ) {

                    image.setAttribute(
                        "loading",
                        "lazy"
                    );

                }


                image.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "Image failed to load:",
                            image.src
                        );


                        image.classList.add(
                            "image-error"
                        );

                    }
                );

            }
        );


    /* =====================================================
       EXTERNAL LINK SAFETY
    ===================================================== */

    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(
            (link) => {

                const existingRel =
                    link.getAttribute("rel") ||
                    "";


                const values =
                    new Set(
                        existingRel
                            .split(/\s+/)
                            .filter(Boolean)
                    );


                values.add("noopener");
                values.add("noreferrer");


                link.setAttribute(
                    "rel",
                    Array.from(values).join(" ")
                );

            }
        );


    /* =====================================================
       VIEWPORT HEIGHT
    ===================================================== */

    function updateViewportHeight() {

        document.documentElement.style.setProperty(
            "--app-height",
            `${window.innerHeight}px`
        );

    }


    updateViewportHeight();


    window.addEventListener(
        "resize",
        updateViewportHeight,
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH DEVICE
    ===================================================== */

    const isTouchDevice =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;


    document.documentElement.classList.add(
        isTouchDevice
            ? "touch-device"
            : "no-touch"
    );


    /* =====================================================
       ONLINE / OFFLINE
    ===================================================== */

    function updateConnectionStatus() {

        document.documentElement.classList.toggle(
            "offline",
            !navigator.onLine
        );

    }


    updateConnectionStatus();


    window.addEventListener(
        "online",
        updateConnectionStatus
    );


    window.addEventListener(
        "offline",
        updateConnectionStatus
    );


    /* =====================================================
       PERFORMANCE SCROLL VALUE
    ===================================================== */

    let scrollTicking = false;


    window.addEventListener(
        "scroll",
        () => {

            if (scrollTicking) {

                return;

            }


            scrollTicking = true;


            window.requestAnimationFrame(
                () => {

                    document.documentElement.style.setProperty(
                        "--scroll-y",
                        `${window.scrollY}px`
                    );


                    scrollTicking = false;

                }
            );

        },
        {
            passive: true
        }
    );


    /* =====================================================
       CONSOLE
    ===================================================== */

    console.log(
        `${brandName} website initialized successfully.`
    );

});


/* =========================================================
   GLOBAL ERROR PROTECTION
========================================================= */

window.addEventListener(
    "error",
    (event) => {

        console.error(
            "Website error:",
            event.error ||
            event.message
        );

    }
);


window.addEventListener(
    "unhandledrejection",
    (event) => {

        console.error(
            "Unhandled promise rejection:",
            event.reason
        );

    }
);