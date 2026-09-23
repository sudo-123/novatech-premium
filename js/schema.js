/* ============================================
   JSON-LD Structured Data Injection
   ============================================ */

// Inject page-specific structured data
document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    // Always inject Organization schema
    injectSchema({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NovaTech",
        "url": window.location.origin,
        "logo": window.location.origin + "/assets/images/logo.png",
        "description": "Premium tech and electronics e-commerce store offering the latest gadgets with free shipping.",
        "foundingDate": "2020",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-NOVA-TECH",
            "contactType": "customer service",
            "email": "support@luxestore.com",
            "availableLanguage": ["English"]
        },
        "sameAs": [
            "https://twitter.com/luxestore",
            "https://facebook.com/luxestore",
            "https://instagram.com/luxestore",
            "https://linkedin.com/company/luxestore"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Drive",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
        }
    });

    // WebSite schema with search action
    injectSchema({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "NovaTech",
        "url": window.location.origin,
        "potentialAction": {
            "@type": "SearchAction",
            "target": window.location.origin + "/products.html?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    });

    // BreadcrumbList for non-home pages
    if (page !== 'index.html' && page !== '') {
        const breadcrumbData = getBreadcrumbData(page);
        if (breadcrumbData) injectSchema(breadcrumbData);
    }

    // Page-specific schemas
    switch (page) {
        case 'index.html':
        case '':
            // ItemList for featured products
            if (typeof ProductData !== 'undefined') {
                injectSchema({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Featured Products",
                    "numberOfItems": 8,
                    "itemListElement": ProductData.slice(0, 8).map((p, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "item": {
                            "@type": "Product",
                            "name": p.name,
                            "url": window.location.origin + `/product-detail.html?id=${p.id}`,
                            "image": p.image,
                            "offers": {
                                "@type": "Offer",
                                "price": p.price,
                                "priceCurrency": "USD"
                            }
                        }
                    }))
                });
            }
            break;

        case 'about.html':
            injectSchema({
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "About NovaTech",
                "description": "Learn about NovaTech, our mission to deliver premium technology, and the passionate team behind the brand.",
                "url": window.location.href
            });
            break;

        case 'contact.html':
            injectSchema({
                "@context": "https://schema.org",
                "@type": "ContactPage",
                "name": "Contact NovaTech",
                "description": "Get in touch with NovaTech customer support.",
                "url": window.location.href
            });
            break;
    }
});

function injectSchema(data) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
}

function getBreadcrumbData(page) {
    const pageNames = {
        'products.html': 'Products',
        'product-detail.html': 'Product Details',
        'cart.html': 'Shopping Cart',
        'about.html': 'About Us',
        'contact.html': 'Contact',
        'seo-dashboard.html': 'SEO Dashboard'
    };

    const name = pageNames[page];
    if (!name) return null;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": window.location.origin + "/index.html"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": name,
                "item": window.location.href
            }
        ]
    };
}
