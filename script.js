
// ==========================================
// NUMÉRO WHATSAPP (À REMPLACER)
// ==========================================
const WHATSAPP_NUMBER = "24177123456"; // ⬅️ CHANGEZ CE NUMÉRO !

// ==========================================
// FONCTION POUR RÉSERVER UN SERVICE
// ==========================================
function reserveService(serviceName, price, details) {
    const message = `Bonjour ! 👋\n\nJe suis intéressée par le service : *${serviceName}*\n\n📋 Détails :\n${details}\n\n💰 Prix : ${price}\n\nJe souhaite prendre rendez-vous pour cette prestation.\n\nQuelles sont vos disponibilités ? 📅\n\nMerci ! 💅✨`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// DONNÉES DES MODÈLES D'ONGLES
// ==========================================
const nailModels = [
    {
        id: 1,
        name: "French Classique",
        description: "French manucure élégante et intemporelle avec gel UV",
        price: "10 000 FCFA",
        image: "images/icons/img7.jpg",
        icon: "💅",
        details: "Pose complète french classique blanche sur base naturelle ou nude. Inclut : préparation des ongles, pose gel, french tips, finition brillante."
    },
    {
        id: 2,
        name: "Gel Rose Poudré",
        description: "Couleur nude rosée pour un look naturel et sophistiqué",
        price: "12 000 FCFA",
        image: "images/icons/img8.jpg",
        icon: "🌸",
        details: "Pose gel rose poudré élégant. Inclut : préparation, pose gel couleur, finition effet nude naturel. Parfait pour toutes occasions."
    },
    {
        id: 3,
        name: "Ongles Strass",
        description: "Décoration avec strass Swarovski pour un effet glamour",
        price: "15 000 FCFA",
        image: "images/icons/img9.jpg",
        icon: "💎",
        details: "Pose gel avec décoration strass luxe. Inclut : pose complète, application de strass premium, nail art personnalisé. Effet WOW garanti !"
    },
    {
        id: 4,
        name: "Dégradé Ombré",
        description: "Effet dégradé de couleurs tendance et moderne",
        price: "14 000 FCFA",
        image: "images/icons/img10.jpg",
        icon: "🎨",
        details: "Technique ombré avec dégradé de 2-3 couleurs au choix. Inclut : préparation, pose gel, création dégradé, finition professionnelle."
    },
    {
        id: 5,
        name: "Nail Art Floral",
        description: "Motifs floraux délicats peints à la main",
        price: "16 000 FCFA",
        image: "images/icons/img11.jpg",
        icon: "🌺",
        details: "Nail art floral unique et personnalisé. Inclut : pose gel couleur au choix, dessin floral main, détails fins, top coat brillant."
    },
    {
        id: 6,
        name: "Ongles Longs Stiletto",
        description: "Extensions longues en pointe pour un style audacieux",
        price: "18 000 FCFA",
        image: "images/icons/img12.jpg",
        icon: "💋",
        details: "Pose stiletto (forme pointue) avec capsules ou chablon. Inclut : extensions longues, mise en forme, pose gel/résine, couleur au choix."
    },
    {
        id: 7,
        name: "French Couleur",
        description: "French manucure revisitée avec des couleurs vives",
        price: "13 000 FCFA",
       image: "images/icons/img13.jpg",
        icon: "🌈",
        details: "French colorée moderne (rouge, noir, rose, etc.). Inclut : préparation, pose gel, french tips couleur, design créatif."
    },
    {
        id: 8,
        name: "Effet Marbré",
        description: "Technique marbre pour un effet luxueux",
        price: "15 000 FCFA",
        image: "images/icons/img14.jpg",
        icon: "✨",
        details: "Effet marbré élégant façon pierre naturelle. Inclut : base gel, création motif marbré, veines dorées/argentées option, finition glossy."
    },
    {
        id: 9,
        name: "Capsules Ballerine",
        description: "Forme ballerine (cercueil) tendance et élégante",
        price: "16 000 FCFA",
        image: "images/icons/img15.jpg",
        icon: "🩰",
        details: "Forme ballerine/coffin moderne. Inclut : pose capsules, limage forme spécifique, gel couleur, finition pro. Très tendance !"
    },
    {
        id: 10,
        name: "Gel Pailleté",
        description: "Gel avec paillettes pour briller en toute occasion",
        price: "13 000 FCFA",
        image: "images/icons/img16.jpg",
        icon: "✨",
        details: "Gel pailleté effet festif. Inclut : pose gel, application paillettes (fines ou grosses), finition brillante. Choix de couleurs paillettes."
    },
    {
        id: 11,
        name: "Ongles Mat",
        description: "Finition mate tendance pour un look sophistiqué",
        price: "12 000 FCFA",
        image: "images/icons/img17.jpg",
        icon: "🖤",
        details: "Effet mat velours chic. Inclut : pose gel couleur au choix, top coat mat spécial, effet velouté. Look moderne et classe."
    },
    {
        id: 12,
        name: "Nail Art Géométrique",
        description: "Motifs géométriques modernes et graphiques",
        price: "15 000 FCFA",
        image: "images/icons/img18.jpg",
        icon: "📐",
        details: "Design géométrique contemporain. Inclut : pose gel, création motifs lignes/formes, combinaison couleurs, finition impeccable."
    }
];

// ==========================================
// GÉNÉRATION DE LA GALERIE
// ==========================================
function generateGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    nailModels.forEach(model => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        
        card.innerHTML = `
            <div class="gallery-image">
                <img src="${model.image}" alt="${model.name}" onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;font-size:80px;\\'>${model.icon}</div>'">
            </div>
            <div class="gallery-info">
                <h3>${model.name}</h3>
                <p>${model.description}</p>
                <span class="price">${model.price}</span>
                <a href="#" class="btn-reserve" onclick="event.preventDefault(); openWhatsApp(${model.id})">
                    📱 Réserver sur WhatsApp
                </a>
            </div>
        `;
        
        galleryGrid.appendChild(card);
    });
}

// ==========================================
// FONCTION WHATSAPP POUR LES MODÈLES
// ==========================================
function openWhatsApp(modelId) {
    const model = nailModels.find(m => m.id === modelId);
    if (!model) return;
    
    const message = `Bonjour ! 👋\n\nJe suis intéressée par le modèle : *${model.name}*\n\n📋 Détails :\n${model.details}\n\n💰 Prix : ${model.price}\n\nJe souhaite prendre rendez-vous pour cette prestation.\n\nQuelles sont vos disponibilités ? 📅\n\nMerci ! 💅✨`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// ==========================================
// SCROLL FLUIDE POUR LA NAVIGATION
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// ==========================================
// BOUTON WHATSAPP FLOTTANT
// ==========================================
function createFloatingWhatsApp() {
    const floatingBtn = document.createElement('a');
    floatingBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour,%20je%20souhaite%20avoir%20plus%20d'informations%20sur%20vos%20services%20💅`;
    floatingBtn.target = '_blank';
    floatingBtn.className = 'floating-whatsapp';
    floatingBtn.innerHTML = '💬';
    floatingBtn.title = 'Contactez-nous sur WhatsApp';
    
    document.body.appendChild(floatingBtn);
}

// ==========================================
// ANIMATIONS AU SCROLL
// ==========================================
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .gallery-card, .pricing-column, .contact-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ==========================================
// GESTION DU SCROLL HEADER
// ==========================================
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll vers le bas
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ==========================================
// INITIALISATION AU CHARGEMENT
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎀 Site Ongles Parfaits Gabon chargé ! 💅');
    
    // Générer la galerie
    generateGallery();
    
    // Animations
    animateOnScroll();
    
    // Bouton WhatsApp flottant
    createFloatingWhatsApp();
    
    // Message de bienvenue dans la console
    console.log(`
    ╔════════════════════════════════════╗
    ║   💅 ONGLES PARFAITS GABON 💅    ║
    ║                                    ║
    ║   Prothésiste Ongulaire           ║
    ║   Libreville, Gabon               ║
    ║                                    ║
    ║   📱 WhatsApp: +241 77 12 34 56   ║
    ╚════════════════════════════════════╝
    `);
    
    // Animation d'entrée pour le hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease';
            hero.style.opacity = '1';
        }, 100);
    }
});

// ==========================================
// FONCTION DE CHANGEMENT DE NUMÉRO WHATSAPP
// ==========================================
function updateWhatsAppNumber(newNumber) {
    // Cette fonction permet de changer facilement le numéro WhatsApp
    // Utilisation : updateWhatsAppNumber("24177123456")
    WHATSAPP_NUMBER = newNumber;
    console.log(`✅ Numéro WhatsApp mis à jour : ${newNumber}`);
}

// ==========================================
// EXPORTS POUR UTILISATION EXTERNE
// ==========================================
window.nailSite = {
    models: nailModels,
    openWhatsApp: openWhatsApp,
    reserveService: reserveService,
    updateWhatsAppNumber: updateWhatsAppNumber
};

