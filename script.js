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

    const themeToggleBtn = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Modo Claro';
    } else {
        themeToggleBtn.textContent = 'Modo Oscuro';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) { 
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Por favor, completa todos los campos.';
                formMessage.className = 'form-message error show';
            } else {
                formMessage.textContent = '¡Mensaje enviado con éxito!';
                formMessage.className = 'form-message success show';
                contactForm.reset(); 
            }

            setTimeout(() => {
                formMessage.classList.remove('show');
            }, 3000);
        });
    }
});