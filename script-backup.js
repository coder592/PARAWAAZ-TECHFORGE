/* ==========================================
   𝚸𝚲𝚪𝐖𝚲𝚲𝐙 𝚻𝚵𝐂𝚮𝐅𝚯𝚪𝐆𝚵
   WEBSITE INTERACTIONS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       MOBILE NAVBAR
    ========================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            function () {

                navLinks.classList.toggle("active");

                const isOpen =
                    navLinks.classList.contains("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        /* Close menu after clicking a link */

        navLinks
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navLinks.classList.remove(
                            "active"
                        );

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            });

    }


    /* ==========================================
       NAVBAR SCROLL EFFECT
    ========================================== */

    const navbar =
        document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 30) {

                    navbar.classList.add(
                        "scrolled"
                    );

                } else {

                    navbar.classList.remove(
                        "scrolled"
                    );

                }

            }
        );

    }


    /* ==========================================
       CURRENT YEAR
    ========================================== */

    const yearElement =
        document.querySelector("#currentYear");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});
/* ==========================================
   JS PART 2
   SCROLL REVEAL + WHATSAPP CONTACT
========================================== */


/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements =
        document.querySelectorAll(
            ".service-card, " +
            ".why-card, " +
            ".process-step, " +
            ".project-card, " +
            ".about-content, " +
            ".about-highlight, " +
            ".cta, " +
            ".contact-form"
        );

    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });

});

/* ==========================================
   JS PART 3
   CTA + WHATSAPP + FORM VALIDATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       WHATSAPP CONFIG
    ========================================== */

    const whatsappNumber = "919424708856";


    function openWhatsApp(message) {

        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(url, "_blank");

    }


    /* ==========================================
       GENERAL WHATSAPP BUTTONS
    ========================================== */

    const whatsappButtons =
        document.querySelectorAll(
            "[data-whatsapp]"
        );


    whatsappButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const message =
                    button.dataset.whatsapp ||
                    "Hello 𝚸𝚲𝚪𝐖𝚲𝚲𝐙 𝚻𝚵𝐂𝚮𝐅𝚯𝚪𝐆𝚵, I would like to know more about your services.";

                openWhatsApp(message);

            }
        );

    });


    /* ==========================================
       CTA BUTTON
    ========================================== */

    const ctaButton =
        document.querySelector(
            ".cta .btn-primary"
        );


    if (ctaButton) {

        ctaButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                openWhatsApp(
                    "Hello 𝚸𝚲𝚪𝐖𝚲𝚲𝐙 𝚻𝚵𝐂𝚮𝐅𝚯𝚪𝐆𝚵, I want to discuss a website/business project."
                );

            }
        );

    }

});
/* ==========================================
   JS PART 4
   MOBILE UX + NAVBAR + SCROLL TO TOP
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       ACTIVE NAVBAR LINK
    ========================================== */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navLinks = document.querySelectorAll(
        ".nav-links a"
    );

    if (sections.length && navLinks.length) {

        const sectionObserver =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            const currentId =
                                entry.target.getAttribute("id");

                            navLinks.forEach(function (link) {

                                link.classList.remove(
                                    "active"
                                );

                                if (
                                    link.getAttribute("href") ===
                                    "#" + currentId
                                ) {
                                    link.classList.add(
                                        "active"
                                    );
                                }

                            });

                        }

                    });

                },
                {
                    rootMargin:
                        "-35% 0px -55% 0px"
                }
            );

        sections.forEach(function (section) {
            sectionObserver.observe(section);
        });

    }


    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    });


    /* ==========================================
       SCROLL TO TOP BUTTON
    ========================================== */

    const scrollTopButton =
        document.querySelector(
            "#scrollTop"
        );

    if (scrollTopButton) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    scrollTopButton.classList.add(
                        "show"
                    );

                } else {

                    scrollTopButton.classList.remove(
                        "show"
                    );

                }

            }
        );


        scrollTopButton.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* ==========================================
       ESCAPE KEY — CLOSE MOBILE MENU
    ========================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            const navLinks =
                document.querySelector(".nav-links");

            const menuToggle =
                document.querySelector(".menu-toggle");

            if (navLinks) {

                navLinks.classList.remove(
                    "active"
                );

            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});
/* ==========================================
   JS PART 5
   FINAL CONTACT FORM FLOW
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const contactForm =
        document.querySelector(".contact-form");

    if (!contactForm) {
        return;
    }


    const nameField =
        contactForm.querySelector(
            'input[name="name"]'
        );

    const phoneField =
        contactForm.querySelector(
            'input[name="phone"]'
        );

    const messageField =
        contactForm.querySelector(
            'textarea[name="message"]'
        );


    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                nameField
                    ? nameField.value.trim()
                    : "";

            const phone =
                phoneField
                    ? phoneField.value.trim()
                    : "";

            const message =
                messageField
                    ? messageField.value.trim()
                    : "";


            /* ==============================
               NAME VALIDATION
            ============================== */

            if (name.length < 2) {

                alert(
                    "Please enter your name."
                );

                nameField.focus();

                return;
            }


            /* ==============================
               PHONE VALIDATION
            ============================== */

            if (phone.length > 0) {

                const phonePattern =
                    /^[0-9+\-\s()]{7,15}$/;

                if (!phonePattern.test(phone)) {

                    alert(
                        "Please enter a valid phone number."
                    );

                    phoneField.focus();

                    return;
                }

            }


            /* ==============================
               MESSAGE VALIDATION
            ============================== */

            if (message.length < 10) {

                alert(
                    "Please tell us a little more about your requirement."
                );

                messageField.focus();

                return;
            }


            /* ==============================
               WHATSAPP MESSAGE
            ============================== */

            const whatsappNumber =
                "919424708856";


            const whatsappMessage =
                "Hello 𝚸𝚲𝚪𝐖𝚲𝚲𝐙 𝚻𝚵𝐂𝚮𝐅𝚯𝚪𝐆𝚵,%0A%0A" +

                "Name: " +
                encodeURIComponent(name) +

                "%0A" +

                "Phone: " +
                encodeURIComponent(
                    phone || "Not provided"
                ) +

                "%0A%0A" +

                "Requirement:%0A" +
                encodeURIComponent(message);


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;


            /* ==============================
               OPEN WHATSAPP
            ============================== */

            window.open(
                whatsappURL,
                "_blank"
            );


            /* ==============================
               RESET FORM
            ============================== */

            contactForm.reset();

        }
    );

});
/* ==========================================
   JS PART 6
   PAGE LOADER
========================================== */

window.addEventListener(
    "load",
    function () {

        const loader =
            document.querySelector(
                "#pageLoader"
            );

        if (!loader) {
            return;
        }

        setTimeout(function () {

            loader.classList.add(
                "loader-hidden"
            );

        }, 500);

    }
);
/* ==========================================
   JS PART 7
   PROJECT + SERVICE UX
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       PROJECT CARD INTERACTION
    ========================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(function (card) {

        /* Keyboard accessibility */

        card.setAttribute(
            "tabindex",
            "0"
        );


        card.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    card.classList.toggle(
                        "project-active"
                    );

                }

            }
        );


        /* Mobile tap interaction */

        card.addEventListener(
            "click",
            function (event) {

                /*
                 * Don't interfere with links/buttons
                 */

                if (
                    event.target.closest("a") ||
                    event.target.closest("button")
                ) {
                    return;
                }


                /*
                 * Only activate this behavior
                 * on smaller screens.
                 */

                if (window.innerWidth <= 768) {

                    card.classList.toggle(
                        "project-active"
                    );

                }

            }
        );

    });


    /* ==========================================
       SERVICE BUTTON POLISH
    ========================================== */

    const serviceLinks =
        document.querySelectorAll(
            ".service-card a"
        );


    serviceLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                /*
                 * Small visual feedback
                 */

                link.classList.add(
                    "clicked"
                );


                setTimeout(function () {

                    link.classList.remove(
                        "clicked"
                    );

                }, 300);

            }
        );

    });


    /* ==========================================
       SERVICE CARD STAGGER
    ========================================== */

    const serviceCards =
        document.querySelectorAll(
            ".service-card"
        );


    serviceCards.forEach(
        function (card, index) {

            card.style.setProperty(
                "--card-delay",
                (index * 80) + "ms"
            );

        }
    );


    /* ==========================================
       PROJECT CARD STAGGER
    ========================================== */

    projectCards.forEach(
        function (card, index) {

            card.style.setProperty(
                "--project-delay",
                (index * 100) + "ms"
            );

        }
    );

});
/* ==========================================
   JS PART 8
   FINAL PERFORMANCE + ERROR PROTECTION
   MOBILE / DESKTOP COMPATIBILITY
========================================== */


/* ==========================================
   GLOBAL ERROR PROTECTION
========================================== */

window.addEventListener(
    "error",
    function (event) {

        console.error(
            "Website error:",
            event.error || event.message
        );

    }
);


window.addEventListener(
    "unhandledrejection",
    function (event) {

        console.error(
            "Unhandled promise error:",
            event.reason
        );

    }
);


/* ==========================================
   DOM READY
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* ======================================
           SAFE IMAGE LOADING
        ====================================== */

        const images =
            document.querySelectorAll(
                "img"
            );


        images.forEach(function (image) {

            /*
             * Don't apply lazy loading to
             * images that are already marked
             * eager by HTML.
             */

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


            /*
             * Prevent broken images from
             * creating unnecessary layout issues.
             */

            image.addEventListener(
                "error",
                function () {

                    console.warn(
                        "Image failed to load:",
                        image.src
                    );

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        });


        /* ======================================
           SAFE EXTERNAL LINKS
        ====================================== */

        const externalLinks =
            document.querySelectorAll(
                'a[target="_blank"]'
            );


        externalLinks.forEach(
            function (link) {

                const currentRel =
                    link.getAttribute(
                        "rel"
                    ) || "";


                if (
                    !currentRel.includes(
                        "noopener"
                    )
                ) {

                    link.setAttribute(
                        "rel",
                        (
                            currentRel +
                            " noopener noreferrer"
                        ).trim()
                    );

                }

            }
        );


        /* ======================================
           PREVENT DOUBLE CLICK
           ON SUBMIT BUTTON
        ====================================== */

        const forms =
            document.querySelectorAll(
                "form"
            );


        forms.forEach(function (form) {

            form.addEventListener(
                "submit",
                function () {

                    const submitButton =
                        form.querySelector(
                            '[type="submit"]'
                        );


                    if (!submitButton) {
                        return;
                    }


                    /*
                     * Allow the existing submit
                     * handler to execute first.
                     */

                    setTimeout(
                        function () {

                            submitButton.disabled =
                                true;


                            setTimeout(
                                function () {

                                    submitButton.disabled =
                                        false;

                                },
                                2500
                            );

                        },
                        50
                    );

                }
            );

        });


        /* ======================================
           VIEWPORT HEIGHT FIX
           MOBILE BROWSERS
        ====================================== */

        function updateViewportHeight() {

            document.documentElement
                .style
                .setProperty(
                    "--app-height",
                    window.innerHeight +
                    "px"
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


        /* ======================================
           DEVICE / TOUCH COMPATIBILITY
        ====================================== */

        if (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0
        ) {

            document.documentElement.classList.add(
                "touch-device"
            );

        } else {

            document.documentElement.classList.add(
                "no-touch"
            );

        }


        /* ======================================
           ONLINE / OFFLINE STATUS
        ====================================== */

        function updateConnectionStatus() {

            if (navigator.onLine) {

                document.documentElement.classList.remove(
                    "offline"
                );

            } else {

                document.documentElement.classList.add(
                    "offline"
                );

                console.warn(
                    "Internet connection unavailable."
                );

            }

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


        /* ======================================
           PERFORMANCE FRIENDLY SCROLL
        ====================================== */

        let scrollTicking = false;


        window.addEventListener(
            "scroll",
            function () {

                if (scrollTicking) {
                    return;
                }


                scrollTicking = true;


                requestAnimationFrame(
                    function () {

                        document.documentElement
                            .style
                            .setProperty(
                                "--scroll-y",
                                window.scrollY +
                                "px"
                            );


                        scrollTicking = false;

                    }
                );

            },
            {
                passive: true
            }
        );


        /* ======================================
           FINAL CONSOLE MESSAGE
        ====================================== */

        console.log(
            "𝚸𝚲𝚪𝐖𝚲𝚲𝐙 𝚻𝚵𝐂𝚮𝐅𝚯𝚪𝐆𝚵 website initialized successfully."
        );

    }
);