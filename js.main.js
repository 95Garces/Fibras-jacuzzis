// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Swiper para el hero
    initSwiper();
    
    // Inicializar navegación móvil
    initMobileNav();
    
    // Inicializar modales
    initModals();
    
    // Inicializar formularios
    initForms();
    
    // Inicializar productos
    initProducts();
    
    // Inicializar carrito
    initCart();
    
    // Efectos de scroll
    initScrollEffects();
    
    // Actualizar contador del carrito
    updateCartCount();
});

// Swiper para imágenes del hero
function initSwiper() {
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
}

// Navegación móvil
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Gestión de modales
function initModals() {
    // Modal de autenticación
    const authModal = document.getElementById('authModal');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const closeModalBtn = document.querySelectorAll('.close-modal');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTabBtn = document.querySelector('[data-tab="login"]');
    const registerTabBtn = document.querySelector('[data-tab="register"]');
    
    // Abrir modal de login
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('login');
        });
    }
    
    // Abrir modal de registro
    if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAuthModal('register');
        });
    }
    
    // Función para abrir modal de autenticación
    function openAuthModal(tab) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        if (tab === 'login') {
            switchToLoginTab();
        } else {
            switchToRegisterTab();
        }
    }
    
    // Cambiar a pestaña de login
    function switchToLoginTab() {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
loginTabBtn.classList.add('active');
        registerTabBtn.classList.remove('active');
    }
    
    // Cambiar a pestaña de registro
    function switchToRegisterTab() {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
        loginTabBtn.classList.remove('active');
        registerTabBtn.classList.add('active');
    }
    
    // Enlaces para cambiar entre login y registro
    if (switchToRegister) {
        switchToRegister.addEventListener('click', function(e) {
            e.preventDefault();
            switchToRegisterTab();
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            switchToLoginTab();
        });
    }
    
    // Botones de pestañas
    if (loginTabBtn) {
        loginTabBtn.addEventListener('click', function() {
            switchToLoginTab();
        });
    }
    
    if (registerTabBtn) {
        registerTabBtn.addEventListener('click', function() {
            switchToRegisterTab();
        });
    }
    
    // Cerrar modales
    closeModalBtn.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Modal de producto
    const productModal = document.getElementById('productModal');
    
    // Cerrar modal con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                activeModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Gestión de formularios
function initForms() {
    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simulación de login (en producción conectar a backend)
            if (email && password) {
                alert('Inicio de sesión simulado. En producción se conectaría a un backend.');
                document.getElementById('authModal').classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Cambiar botones de usuario
                updateUserButtons(true);
            }
        });
    }
    
    // Formulario de registro
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('registerName').value;
            const email = document.getElementById('registerEmail').value;
            const phone = document.getElementById('registerPhone').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validación básica
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
if (name && email && phone && password) {
                alert('Registro simulado. En producción se conectaría a un backend.');
                document.getElementById('authModal').classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Cambiar botones de usuario
                updateUserButtons(true);
            }
        });
    }
    
    // Formulario de cotización
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('quoteName').value;
            const email = document.getElementById('quoteEmail').value;
            const phone = document.getElementById('quotePhone').value;
            const product = document.getElementById('quoteProduct').value;
            const message = document.getElementById('quoteMessage').value;
            
            if (name && email && phone && product) {
                // Simular envío
                alert('Cotización enviada correctamente. Nos pondremos en contacto contigo pronto.');
                quoteForm.reset();
                
                // En producción, aquí se enviaría a un servidor
                // fetch('/api/quote', { method: 'POST', body: ... })
            } else {
                alert('Por favor completa los campos obligatorios (*)');
            }
        });
    }
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            if (name && email && subject && message) {
                // Simular envío
                alert('Mensaje enviado correctamente. Te responderemos pronto.');
                contactForm.reset();
            } else {
                alert('Por favor completa todos los campos');
            }
        });
    }
}

// Actualizar botones de usuario después de login
function updateUserButtons(isLoggedIn) {
    const userActions = document.querySelector('.user-actions');
    if (isLoggedIn) {
        userActions.innerHTML = 
            <button id="userMenuBtn" class="btn-outline">
                <i class="fas fa-user-circle"></i> Mi Cuenta
            </button>
            <button id="logoutBtn" class="btn-primary">
                <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
            </button>
        ;
        
        // Agregar eventos a los nuevos botones
        document.getElementById('logoutBtn').addEventListener('click', function() {
            // Simular logout
            updateUserButtons(false);
        });
        
        document.getElementById('userMenuBtn').addEventListener('click', function() {
            alert('En una versión completa, esto abriría el panel de usuario');
        });
    } else {
        userActions.innerHTML = 
            <button id="loginBtn" class="btn-outline">
                <i class="fas fa-user"></i> Iniciar Sesión
            </button>
            <button id="registerBtn" class="btn-primary">
                <i class="fas fa-user-plus"></i> Registrarse
            </button>
        ;
        
        // Re-inicializar eventos de los botones
        initModals();
    }
}

// Efectos de scroll
function initScrollEffects() {
    // Animación de elementos al hacer scroll
const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .info-card, .payment-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Establecer estado inicial
    const animatedElements = document.querySelectorAll('.product-card, .info-card, .payment-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
}

// Inicializar productos
function initProducts() {
    // Este método se llama desde main.js pero la lógica está en products.js
    // Solo verificamos que exista el contenedor de productos
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;
    
    // La carga de productos se maneja en products.js
    console.log('Sistema de productos listo');
}

// Inicializar carrito
function initCart() {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('En una versión completa, esto abriría el carrito de compras');
        });
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    // Por ahora simulamos un valor
    cartCount.textContent = '0';
}
