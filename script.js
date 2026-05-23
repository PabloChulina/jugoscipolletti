const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("[data-nav-links]");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
  const emailServiceId = "service_g7ujvye";
  const emailTemplateId = "template_t476rfj";
  const emailPublicKey = "QmqungAYuiHziLYfH";

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    });
  });
}

if (contactForm && formStatus) {
  if (window.emailjs) {
    emailjs.init({
      // Reemplazar por la Public Key real de EmailJS. No usar claves privadas en el front.
      publicKey: emailPublicKey,
    });
  }

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector("button[type='submit']");

    if (!submitButton) return;

    if (window.location.protocol === "file:") {
      console.error("El formulario no debe probarse con file://. Abrí la web desde Live Server, por ejemplo http://127.0.0.1:5500.");
      formStatus.textContent = "Abrí la web desde un servidor local para enviar el mensaje.";
      return;
    }

    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }

    if (!window.emailjs) {
      formStatus.textContent = "No se pudo enviar el mensaje. Intentá nuevamente.";
      return;
    }

    const emailjsName = contactForm.querySelector("#emailjs-name");
    const emailjsUserName = contactForm.querySelector("#emailjs-user-name");
    const emailjsUserEmail = contactForm.querySelector("#emailjs-user-email");
    const emailjsMessage = contactForm.querySelector("#emailjs-message");
    const emailjsTime = contactForm.querySelector("#emailjs-time");
    const nameField = contactForm.querySelector("[name='nombre']");
    const emailField = contactForm.querySelector("[name='email']");
    const messageField = contactForm.querySelector("[name='mensaje']");

    if (emailjsName && nameField) {
      emailjsName.value = nameField.value;
    }

    if (emailjsUserName && nameField) {
      emailjsUserName.value = nameField.value;
    }

    if (emailjsUserEmail && emailField) {
      emailjsUserEmail.value = emailField.value;
    }

    if (emailjsMessage && messageField) {
      emailjsMessage.value = messageField.value;
    }

    if (emailjsTime) {
      emailjsTime.value = new Date().toLocaleString("es-AR");
    }

    if (
      emailServiceId === "SERVICE_ID_A_REEMPLAZAR" ||
      emailTemplateId === "TEMPLATE_ID_A_REEMPLAZAR" ||
      emailPublicKey === "PUBLIC_KEY_A_REEMPLAZAR"
    ) {
      console.error("Falta configurar EmailJS: reemplazá Service ID, Template ID y Public Key en script.js.");
      formStatus.textContent = "No se pudo enviar el mensaje. Intentá nuevamente.";
      return;
    }

    formStatus.textContent = "Enviando mensaje...";
    submitButton.disabled = true;

    try {
      await emailjs.sendForm(
        emailServiceId,
        emailTemplateId,
        contactForm
      );

      formStatus.textContent = "Mensaje enviado correctamente.";
      contactForm.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      console.error("Detalle de EmailJS:", {
        status: error.status,
        text: error.text,
      });
      formStatus.textContent = "No se pudo enviar el mensaje. Intentá nuevamente.";
    } finally {
      submitButton.disabled = false;
    }
  });
}

// En EmailJS hay que autorizar los origenes de prueba y produccion:
// http://localhost:5500, http://127.0.0.1:5500,
// http://www.jugoscipolletti.com.ar.s3-website.us-east-2.amazonaws.com,
// http://www.jugoscipolletti.com.ar y https://www.jugoscipolletti.com.ar.
