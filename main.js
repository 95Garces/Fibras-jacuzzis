// ================= DATOS DE PRODUCTOS =================
const productsData = [
    {
        id: 1,
        name: "Tina Basic",
        category: "jacuzzis",
        price: 1850000,
        image: "image/tina1.jpg",
        description: "Tina funcional y de diseño sencillo, ideal para uso residencial. Incluye estructura de la tina; el rebosadero se ofrece como complemento adicional.",
        specs: {
            medidas: "1.80m x 1.10m x 0.6m",
            capacidad: "900 litros",
            color: "Blanco o personalizado"
        }
    },
    {
        id: 2,
        name: "Jacuzzi Élite Plus",
        category: "jacuzzis",
        price: 7000000,
        image: "image/jacuzzi0.jpg",
        description: "Modelo premium con diseño exclusivo. Incluye 6 hidromasajes, 6 válvulas de burbujas, 1 luz LED y 2 cabezales incluidos.",
        specs: {
            medidas: "1.80m x 1.30m x 0.6m",
            capacidad: "1200 litros",
            color: "Blanco o personalizado"
        }
    },
    {
        id: 3,
        name: "Piscina en Geomebrana",
        category: "pools",
        price: 15000000,
        image: "image/piscina1.jpg",
        description: "Piscina en geomembrana familiar , perfecta para jardines de tamaño medio.",
        specs: {
            medidas: "4.0 x 3.0m",
            capacidad: "15000 litros",
            color: "Azul turquesa"
        }
    },
    {
        id: 4,
        name: "Lavadero Industrial",
        category: "sinks",
        price: 1400000,
        image: "image/lavadero0.jpg",
        description: "Lavadero blanco resistente para uso intensivo, ideal para tu hogar.",
        specs: {
            medidas: "0.70m x 0.60m x 1m",
            capacidad: "400 litros",
            color: "Blanco o Personalizado"
        }
    },
    {
        id: 5,
        name: "Tobogán acuático",
        category: "slides",
        price: 4500000,
        image: "image/tobogan.png",
        description: "Tobogán acuático o campestre Rodadero ergonómico con protección UV. Calidad garantizada para la diversión de toda la familia.",
        specs: {
            medidas: "A medidas",
            color: "Colores vivos"
        }
    },
    {
        id: 6,
        name: "Jacuzzi Confort 4",
        category: "jacuzzis",
        price: 10500000,
        image: "image/jacuzzix4.jpg",
        description: "Jacuzzi cómodo y elegante para uso familiar. Incluye 6 hidromasajes, 6 válvulas de burbujas y 1 toma de luz LED. Cabezales opcionales.",
        specs: {
            medidas: "2m x 1.50m x 70cm",
            capacidad: "3000 litros",
            color: "Blanco o personalizado"
        }
    },
    {
        id: 7,
        name: "Piscina Oval Serenity",
        category: "pools",
        price: 28500000,
        image: "image/piscina2.jpg",
        description: "Piscina ovalada elegante, perfecta para eventos familiares y recreación.",
        specs: {
            medidas: "6m x 3m x 1.4m",
            capacidad: "25000 litros",
            color: "Azul marino,"
        }
    },
    {
        id: 8,
        name: "Piscina Aqua 4×3",
        category: "pools",
        price: 28500000,
        image: "image/piscina4x3.jpg",
        description: "Piscina en fibra de vidrio compacta y funcional, ideal para espacios reducidos. Diseño elegante que ofrece confort y frescura para uso familiar.",
        specs: {
            medidas: "4m x 3m x 1.4m",
            capacidad: "25000 litros",
            color: "Azul marino,"
        }
    },
    {
        id: 9,
        name: "Piscina Harmony 6×3",
        category: "pools",
        price: 32500000,
        image: "image/piscina6x3.jpg",
        description: "Piscina familiar de tamaño ideal para compartir. Diseño equilibrado que brinda comodidad, frescura y elegancia.",
        specs: {
            medidas: "6m x 3m x 1.4m",
            capacidad: "30000 litros",
            color: "Azul marino,"
        }
    },
    {
        id: 10,
        name: "Piscina Signature",
        category: "pools",
        price: "Consultar",
        image: "image/pislegante.jpg",
        description: "Piscina exclusiva creada a medida, pensada para quienes buscan un diseño único y diferenciado.",
        specs: {
            medidas: "A medida",
            capacidad: "Personalizada",
            color: "Blanco, Azul marino"
        }
    },
    {
        id: 11,
        name: "Piscina Infinity 8×4",
        category: "pools",
        price: 38500000,
        image: "image/piscina11.jpg",
        description: "Piscina de gran formato ideal para espacios amplios. Diseño elegante que realza cualquier entorno residencial o recreativo.",
        specs: {
            medidas: "8m x 4m x 1.4m",
            capacidad: "30000 litros",
            color: "Azul marino,"
        }
    },
    {
        id: 12,
        name: "Lavamanos",
        category: "sinks",
        price: 390000,
        image: "image/lavamanos0.jpg",
        description: "Lavamanos de diseño compacto y funcional. La solución ideal para optimizar espacios con elegancia",
        specs: {
            medidas: "0.5m x 0.5m",
            capacidad: "N/A",
            color: "Blanco o Personalizado"
        }
    },
    {
        id: 13,
        name: "Rodadero",
        category: "slides",
        price: 1800000,
        image: "image/rodadero1.png",
        description: "Tobogán recto clásico, seguro y divertido para todas las edades.",
        specs: {
            medidas: "3.0 metros",
            color: "Colores vivos"
        }
    },
    {
        id: 14,
        name: "Jacuzzi Majestic 10",
        category: "jacuzzis",
        price: 17800000,
        image: "image/jacude6.jpg",
        description: "Jacuzzi de gran capacidad ideal para espacios amplios. Incluye 6 hidromasajes, 6 válvulas de burbujas y 1 toma de luz LED. Cabezales opcionales.",
        specs: {
            medidas: "3m x 1.50m x 0.5m",
            capacidad: "48000 litros",
            color: "Azul turquesa o personalizado"
        }
    },
    {
        id: 15,
        name: "Jacuzzi Basic Spa",
        category: "jacuzzis",
        price: 4700000,
        image: "image/jacuzzibasic.jpg",
        description: "Jacuzzi práctico y accesible para relajación básica. Incluye 6 hidromasajes. Cabezales e iluminación LED disponibles como opcionales.",
        specs: {
            medidas: "2.2m x 1.8m x 0.8m",
            capacidad: "1800 litros",
            color: "Gris moderno"
        }
    },
    {
        id: 16,
        name: "Mesón Aqua One",
        category: "sinks",
        price: 770000,
        image: "image/meson1.png",
        description: "Mesón con lavamanos integrado de diseño moderno y funcional. Ideal para baños y áreas de servicio, combina estilo, resistencia y fácil mantenimiento.",
        specs: {
            medidas: "1.8m x 0.9m x 0.4m",
            capacidad: "500 litros",
            color: "Blanco industrial"
        }
    },
    {
        id: 17,
        name: "Rodadero Espiral",
        category: "slides",
        price: 3000000,
        image: "image/rodadero0.png",
        description: "Rodadero acuático con diseño en espiral para mayor diversión.",
        specs: {
            medidas: "4.5m x 1.2m x 3m",
            color: "Colores vibrantes"
        }
    }
];

// ================= INICIALIZACIÓN =================
document.addEventListener('DOMContentLoaded', function() {
    // Cargar productos
    loadProducts();
    
    // Inicializar navegación móvil
    initMobileNav();
    
    // Inicializar visor de imágenes
    initImageViewer();
    
    // Inicializar filtros de categoría
    initCategoryFilters();
    
    // Inicializar números de teléfono
    initPhoneNumbers();
    
    // Inicializar scroll y efectos
    initScrollEffects();
    
    // Inicializar modo oscuro automático
    initDarkMode();
});

// ================= VISOR DE IMÁGENES =================
function initImageViewer() {
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb');
    
    if (!mainImage || thumbs.length === 0) return;
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const wrapper = this.closest('.thumb-wrapper');
            
            // Remover clase active de todas las miniaturas
            document.querySelectorAll('.thumb-wrapper').forEach(w => {
                w.classList.remove('active');
                w.querySelector('.thumb').classList.remove('active');
            });
            
            // Agregar clase active al wrapper y thumb clickeado
            wrapper.classList.add('active');
            this.classList.add('active');
            
            // Cambiar imagen principal
            const fullImage = this.getAttribute('data-full');
            mainImage.src = fullImage;
            mainImage.alt = this.alt || 'Producto Fibras & Jacuzzis';
            
            // Efecto de transición
            mainImage.style.opacity = '0.7';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 150);
        });
    });
}

// ================= NAVEGACIÓN MÓVIL =================
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevenir scroll del body cuando el menú está abierto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Cerrar menú al hacer clic en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Cerrar menú con tecla ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// ================= CARGAR PRODUCTOS =================
function loadProducts(category = 'all') {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;
    
    // Filtrar productos
    let filteredProducts = productsData;
    if (category !== 'all') {
        filteredProducts = productsData.filter(product => product.category === category);
    }
    
    // Limpiar contenedor
    productsContainer.innerHTML = '';
    
    // Mensaje si no hay productos
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-box-open" style="font-size: 3rem; color: var(--gray); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark-gray);">Próximamente más productos</h3>
                <p style="color: var(--gray);">Estamos ampliando nuestro catálogo en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar tarjetas
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

// ================= CREAR TARJETA DE PRODUCTO =================
function createProductCard(product) {
    // Crear elemento
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;
    card.dataset.id = product.id;
    
    // Formatear precio
    let priceDisplay = 'Consultar precio';
    let priceClass = 'product-price';
    
    if (product.price !== "Consultar" && product.price !== "N/A") {
        priceDisplay = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(product.price);
        
        // Agregar clase para precios numéricos
        priceClass += ' has-price';
    } else {
        // Agregar clase para precios de consulta
        priceClass += ' consult-price';
    }
    
    // Mensaje para WhatsApp
    const whatsappMessage = `Hola Fibras & Jacuzzis, me interesa cotizar el producto: ${product.name}.`;
    const whatsappUrl = `https://wa.me/573236713326?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Determinar ícono según categoría
    let categoryIcon = 'fas fa-box';
    switch(product.category) {
        case 'jacuzzis':
            categoryIcon = 'fas fa-hot-tub';
            break;
        case 'pools':
            categoryIcon = 'fas fa-swimming-pool';
            break;
        case 'sinks':
            categoryIcon = 'fas fa-sink';
            break;
        case 'slides':
            categoryIcon = 'fas fa-sliders-h';
            break;
    }
    
    // Contenido HTML adaptado al nuevo diseño
    card.innerHTML = `
        <div class="product-badge">
            <i class="${categoryIcon}"></i>
            <span>${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
        </div>
        
        <img src="${product.image}" alt="${product.name}" class="product-img" 
             onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; this.classList.add('image-error')">
        
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="product-specs">
                ${product.specs.medidas && product.specs.medidas !== "N/A" ? `
                <div class="spec-item">
                    <i class="fas fa-ruler-combined"></i>
                    <div>
                        <span class="spec-label">Medidas</span>
                        <span class="spec-value">${product.specs.medidas}</span>
                    </div>
                </div>` : ''}
                
                ${product.specs.capacidad && product.specs.capacidad !== "N/A" ? `
                <div class="spec-item">
                    <i class="fas fa-tint"></i>
                    <div>
                        <span class="spec-label">Capacidad</span>
                        <span class="spec-value">${product.specs.capacidad}</span>
                    </div>
                </div>` : ''}
                
                ${product.specs.color ? `
                <div class="spec-item">
                    <i class="fas fa-palette"></i>
                    <div>
                        <span class="spec-label">Color</span>
                        <span class="spec-value">${product.specs.color}</span>
                    </div>
                </div>` : ''}
            </div>
            
            <div class="${priceClass}">
                ${priceDisplay}
            </div>
            
            <div class="product-action">
                <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
                </a>
            </div>
        </div>
    `;
    
    // Evento click en toda la tarjeta
    card.addEventListener('click', function(e) {
        // Solo redirigir si no se hizo click en el botón de WhatsApp
        if (!e.target.closest('.btn-whatsapp') && !e.target.closest('.product-badge')) {
            window.open(whatsappUrl, '_blank');
        }
    });
    
    // Efecto hover en la imagen
    const productImg = card.querySelector('.product-img');
    productImg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    productImg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    return card;
}

// ================= FILTROS DE CATEGORÍA =================
function initCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase active de todos
            categoryBtns.forEach(b => b.classList.remove('active'));
            
            // Agregar clase active al clickeado
            this.classList.add('active');
            
            // Obtener categoría
            const category = this.dataset.category;
            
            // Cargar productos filtrados
            loadProducts(category);
            
            // Scroll suave a productos
            const productsSection = document.getElementById('products');
            if (productsSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const sectionTop = productsSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ================= NÚMEROS DE TELÉFONO =================
function initPhoneNumbers() {
    const numberItems = document.querySelectorAll('.number-item');
    
    numberItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Solo prevenir el comportamiento por defecto en desktop
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                e.preventDefault();
                
                // Crear tooltip para mostrar el número
                const tooltip = document.createElement('div');
                tooltip.className = 'phone-tooltip';
                tooltip.innerHTML = `
                    <div class="tooltip-content">
                        <p>Número: ${this.querySelector('span').textContent}</p>
                        <p><small>En un dispositivo móvil, se abriría el marcador automáticamente.</small></p>
                        <button class="btn btn-sm btn-call">Copiar número</button>
                    </div>
                `;
                
                document.body.appendChild(tooltip);
                
                // Posicionar tooltip
                const rect = this.getBoundingClientRect();
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
                tooltip.style.left = `${rect.left + rect.width/2 - tooltip.offsetWidth/2}px`;
                
                // Botón para copiar
                const copyBtn = tooltip.querySelector('.btn');
                copyBtn.addEventListener('click', function() {
                    const phoneNumber = item.querySelector('span').textContent.trim();
                    navigator.clipboard.writeText(phoneNumber).then(() => {
                        copyBtn.textContent = '¡Copiado!';
                        copyBtn.classList.add('btn-success');
                        setTimeout(() => {
                            document.body.removeChild(tooltip);
                        }, 1500);
                    });
                });
                
                // Cerrar tooltip al hacer click fuera
                setTimeout(() => {
                    const closeTooltip = (e) => {
                        if (!tooltip.contains(e.target) && !item.contains(e.target)) {
                            document.body.removeChild(tooltip);
                            document.removeEventListener('click', closeTooltip);
                        }
                    };
                    document.addEventListener('click', closeTooltip);
                }, 100);
            }
        });
    });
}

// ================= SCROLL Y EFECTOS =================
function initScrollEffects() {
    // Header con efecto scroll
    const header = document.querySelector('.header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Efecto de sombra al hacer scroll
        if (currentScroll > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Ocultar/mostrar header en scroll (opcional)
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scroll hacia abajo
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease';
        } else {
            // Scroll hacia arriba
            header.style.transform = 'translateY(0)';
            header.style.transition = 'transform 0.3s ease';
        }
        
        lastScroll = currentScroll;
    });
    
    // Scroll suave mejorado
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const hamburger = document.querySelector('.hamburger');
                const navMenu = document.querySelector('.nav-menu');
                if (hamburger && navMenu && hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        });
    });
    
    // Efecto de aparición para productos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar productos cuando se cargan
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    }, 100);
}

// ================= MODO OSCURO AUTOMÁTICO =================
function initDarkMode() {
    // Detectar preferencia del sistema
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Actualizar si cambia la preferencia
    const updateDarkMode = (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };
    
    // Escuchar cambios
    prefersDarkScheme.addEventListener('change', updateDarkMode);
    
    // Aplicar inicialmente
    updateDarkMode(prefersDarkScheme);
}

// ================= MANEJO DE ERRORES DE IMÁGENES =================
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Error cargando imagen: ${this.src}`);
            
            // Asignar imagen de placeholder por categoría
            const altText = this.alt.toLowerCase();
            const srcText = this.src.toLowerCase();
            
            if (altText.includes('jacuzzi') || srcText.includes('jacuzzi')) {
                this.src = 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else if (altText.includes('piscina') || srcText.includes('piscina')) {
                this.src = 'https://images.unsplash.com/photo-1575428652377-a2d80e227043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else if (altText.includes('lavadero') || altText.includes('lavamanos') || 
                       srcText.includes('lavadero') || srcText.includes('lavamanos')) {
                this.src = 'https://images.unsplash.com/photo-1598940603846-a1edd0ef5274?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else if (altText.includes('rodadero') || altText.includes('tobogán') || 
                       srcText.includes('rodadero') || srcText.includes('tobogan')) {
                this.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else {
                this.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
            
            // Añadir clase para estilos de error
            this.classList.add('image-error');
        });
    });
});

// ================= ESTILOS DINÁMICOS PARA EL TOOLTIP =================
const style = document.createElement('style');
style.textContent = `
    .phone-tooltip {
        position: fixed;
        background: var(--white);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-xl);
        padding: var(--space-md);
        z-index: 9999;
        max-width: 300px;
        animation: tooltipFadeIn 0.2s ease;
    }
    
    .tooltip-content {
        text-align: center;
    }
    
    .tooltip-content p {
        margin-bottom: var(--space-sm);
        color: var(--dark);
    }
    
    .tooltip-content small {
        color: var(--gray);
        font-size: 0.875rem;
    }
    
    .btn-sm {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
    }
    
    .btn-success {
        background: var(--success-color);
    }
    
    @keyframes tooltipFadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .product-badge {
        position: absolute;
        top: var(--space-md);
        left: var(--space-md);
        background: var(--primary-color);
        color: var(--white);
        padding: 0.25rem 0.75rem;
        border-radius: var(--radius-full);
        font-size: 0.75rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 4px;
        z-index: 2;
    }
    
    .spec-label {
        display: block;
        font-size: 0.75rem;
        color: var(--gray);
        margin-bottom: 2px;
    }
    
    .spec-value {
        display: block;
        font-size: 0.875rem;
        color: var(--dark);
        font-weight: 500;
    }
    
    .product-price.has-price {
        color: var(--primary-color);
        font-weight: 700;
    }
    
    .product-price.consult-price {
        color: var(--secondary-color);
        font-weight: 600;
    }
    
    .image-error {
        filter: grayscale(20%);
        opacity: 0.9;
    }
    
    [data-theme="dark"] .product-badge {
        background: var(--primary-light);
    }
`;
document.head.appendChild(style);

// ================= CARGAR PRODUCTOS INICIALES =================
// Esto se ejecuta automáticamente cuando el DOM está listo