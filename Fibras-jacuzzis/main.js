// ================= DATOS DE PRODUCTOS =================
const productsData = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
        name: "Rodadero o toboganes",
        category: "slides",
        price: 4500000,
        image: "image/rodadero.jpg",
        description: "Tobogán acuático o campestre Rodadero ergonómico con protección UV. Calidad garantizada para la diversión de toda la familia.",
        specs: {
            medidas: "A medidas",
            color: "Colores vivos"
        }
    },
    {
        id: 5,
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
        id: 6,
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
        id: 12,
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
        id: 13,
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
        id: 14,
        name: "Piscina Signature",
        category: "pools",
        price: "N/A",
        image: "image/pislegante.jpg",
        description: "Piscina exclusiva creada a medida, pensada para quienes buscan un diseño único y diferenciado.",
        specs: {
            medidas: "N/a",
            capacidad: "N/A",
            color: "Blanco,Azul marino,"
        }
    },
    {
        id: 15,
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
        id: 7,
        name: "Lavamanos",
        category: "sinks",
        price: 390000,
        image: "image/lavamanos0.jpg",
        description: "Lavamanos de diseño compacto y funcional. La solución ideal para optimizar espacios con elegancia",
        specs: {
            medidas: "0.5m x 0.5m",
            capacidad: "N/a",
            color: "blanco o Personalizado"
        }
    },
    {
        id: 8,
        name: "Rodadero",
        category: "slides",
        price: 1800000,
        image: "image/rodadero0.png",
        description: "Tobogán recto clásico, seguro y divertido para todas las edades.",
        specs: {
            medidas: "3.0metros",
            color: "colores vivos"
        }
        
    },
    {
        id: 9,
        name: "Jacuzzi Majestic 10",
        category: "jacuzzis",
        price: 17800000,
        image: "image/jacude6.jpg",  // Asegúrate de tener esta imagen
        description: "Jacuzzi de gran capacidad ideal para espacios amplios. Incluye 6 hidromasajes, 6 válvulas de burbujas y 1 toma de luz LED. Cabezales opcionales.",
        specs: {
            medidas: "3m x 1.50m x 0.5m",
            capacidad: "48000 litros",
            color: "Azul turquesa o personalizado"
        }
    },
    {
        id: 10,
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
        id: 11,
        name: "Lavadero Doble Industrial",
        category: "sinks",
        price: 2200000,
        image: "image/lavadero3.jpg",
        description: "Lavadero industrial doble compartimiento para alto rendimiento.",
        specs: {
            medidas: "1.8m x 0.9m x 0.4m",
            capacidad: "500 litros",
            color: "Blanco industrial"
        }
    },
    {
        id: 12,
        name: "Rodadero Espiral",
        category: "slides",
        price: 5500000,
        image: "image/rodadero3.jpg",
        description: "Tobogán acuático con diseño en espiral para mayor diversión.",
        specs: {
            medidas: "4.5m x 1.2m x 3m",
            color: "Colores vibrantes"
        }
    },
    {
        id: 13,
        name: "Piscina Infantil",
        category: "pools",
        price: 3500000,
        image: "image/piscina-infantil.jpg",
        description: "Piscina pequeña segura para niños, con bordes redondeados.",
        specs: {
            medidas: "2m x 2m x 0.5m",
            capacidad: "2000 litros",
            color: "Azul claro con decoraciones"
        }
    },
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
    
    // Agregar WhatsApp flotante al DOM
    addWhatsAppFloat();
});

// ================= VISOR DE IMÁGENES =================
function initImageViewer() {
    const mainImage = document.getElementById('mainImage');
    const thumbs = document.querySelectorAll('.thumb');
    
    if (!mainImage || thumbs.length === 0) return;
    
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remover clase active de todas las miniaturas
            thumbs.forEach(t => t.classList.remove('active'));
            
            // Agregar clase active a la miniatura clickeada
            this.classList.add('active');
            
            // Cambiar imagen principal
            const fullImage = this.getAttribute('data-full');
            mainImage.src = fullImage;
            mainImage.alt = this.alt || 'Producto Fibras & Jacuzzis';
        });
    });
}

// ================= NAVEGACIÓN MÓVIL =================
function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
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
                <i class="fas fa-box-open" style="font-size: 3rem; color: var(--gray-color); margin-bottom: 20px;"></i>
                <h3 style="color: var(--gray-color);">Próximamente más productos</h3>
                <p style="color: var(--gray-color);">Estamos ampliando nuestro catálogo en esta categoría.</p>
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
    
    // Formatear precio
    const formattedPrice = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(product.price);
    
    // Mensaje para WhatsApp
    const whatsappMessage = `Hola Fibras & Jacuzzis, me interesa cotizar el producto: ${product.name}.`;
    const whatsappUrl = `https://wa.me/573236713326?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Contenido HTML
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.src='image/default-product.jpg'">
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            
            <div class="product-specs">
                ${product.specs.medidas ? `
                <div class="spec-item">
                    <i class="fas fa-ruler-combined"></i>
                    <span>${product.specs.medidas}</span>
                </div>` : ''}
                
                ${product.specs.capacidad ? `
                <div class="spec-item">
                    <i class="fas fa-tint"></i>
                    <span>${product.specs.capacidad}</span>
                </div>` : ''}
                
                ${product.specs.color ? `
                <div class="spec-item">
                    <i class="fas fa-palette"></i>
                    <span>${product.specs.color}</span>
                </div>` : ''}
                
                ${product.specs.peso ? `
                <div class="spec-item">
                    <i class="fas fa-weight-hanging"></i>
                    <span>${product.specs.peso}</span>
                </div>` : ''}
            </div>
            
            <div class="product-price">${formattedPrice}</div>
            
            <div class="product-action">
                <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Cotizar por WhatsApp
                </a>
            </div>
        </div>
    `;
    
    // Evento click en toda la tarjeta
    card.addEventListener('click', function(e) {
        // Solo redirigir si no se hizo click en el botón de WhatsApp
        if (!e.target.closest('.btn-whatsapp')) {
            window.open(whatsappUrl, '_blank');
        }
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
            document.getElementById('products').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// ================= WHATSAPP FLOTANTE =================
function addWhatsAppFloat() {
    // Crear elemento si no existe
    if (!document.querySelector('.whatsapp-float')) {
        const whatsappFloat = document.createElement('a');
        whatsappFloat.href = 'https://wa.me/573236713326?text=Hola%20Fibras%20%26%20Jacuzzis,%20quiero%20más%20información';
        whatsappFloat.target = '_blank';
        whatsappFloat.className = 'whatsapp-float';
        whatsappFloat.innerHTML = `
            <i class="fab fa-whatsapp"></i>
            <span class="float-text">¡Cotiza ahora!</span>
        `;
        
        document.body.appendChild(whatsappFloat);
    }
}

// ================= MANEJO DE ERRORES DE IMÁGENES =================
document.addEventListener('DOMContentLoaded', function() {
    // Configurar imágenes por defecto para errores
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            if (this.src.includes('jacuzzi')) {
                this.src = 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else if (this.src.includes('piscina')) {
                this.src = 'https://images.unsplash.com/photo-1575428652377-a2d80e227043?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else if (this.src.includes('lavadero')) {
                this.src = 'https://images.unsplash.com/photo-1598940603846-a1edd0ef5274?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80';
            } else if (this.src.includes('rodadero')) {
                this.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            } else {
                this.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
            }
        });
    });
});