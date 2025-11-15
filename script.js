// Función para el menú lateral (burger)
function toggleMenu() {
    const sidebar = document.querySelector('.sidebar-menu');
    sidebar.classList.toggle('open');
}

// Función para cambiar el modo claro/oscuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Cambiar el texto del botón
    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
    }
}

// Hover simple en la imagen del hero
document.addEventListener('DOMContentLoaded', () => {
    const heroImageContainer = document.querySelector('.hero-image-container');
    if (heroImageContainer) { // Asegurarse de que el elemento exista
        heroImageContainer.addEventListener('mouseover', () => {
            heroImageContainer.style.transform = 'scale(1.02)';
            heroImageContainer.style.transition = 'transform 0.3s ease-in-out';
        });

        heroImageContainer.addEventListener('mouseout', () => {
            heroImageContainer.style.transform = 'scale(1)';
        });
    }

    // Funcionalidad del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) { // Asegurarse de que el formulario exista
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe realmente

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validación
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Por favor, completa todos los campos.';
                formMessage.className = 'form-message error show';
            } else {
                formMessage.textContent = '¡Mensaje enviado con éxito!';
                formMessage.className = 'form-message success show';
                contactForm.reset(); // Limpia el formulario
            }

            // Ocultar el mensaje después de unos segundos
            setTimeout(() => {
                formMessage.classList.remove('show');
            }, 3000);
        });
    }
});