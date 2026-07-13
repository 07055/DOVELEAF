import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://doveleaf.co.ke';
const SITE_NAME = 'Doveleaf Drycleaners & Laundry Hub';

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'DryCleaningOrLaundry',
    name: SITE_NAME,
    description:
        'Professional dry cleaning, laundry, carpet cleaning, curtain cleaning, upholstery cleaning, and commercial laundry services in Lang\'ata, Nairobi. Free pickup and delivery available.',
    url: SITE_URL,
    telephone: '+254713322228',
    email: 'info.contact@doveleaf.co.ke',
    logo: `${SITE_URL}/doveleaf-logo.svg`,
    image: `${SITE_URL}/images/hero section.jpg`,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Uhuru Gardens Phase 2, Lang\'ata',
        addressLocality: 'Nairobi',
        addressCountry: 'KE',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -1.2921,
        longitude: 36.7891,
    },
    areaServed: [
        'Lang\'ata',
        'Karen',
        'Lavington',
        'Westlands',
        'Kilimani',
        'South B',
        'South C',
        'CBD',
        'Nairobi',
    ],
    serviceType: [
        'Dry Cleaning',
        'Laundry',
        'Carpet Cleaning',
        'Curtain Cleaning',
        'Upholstery Cleaning',
        'Wedding Gown Cleaning',
        'Leather and Suede Care',
        'Commercial Laundry',
        'Express Laundry Service',
        'Pressing and Steaming',
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '08:00',
            closes: '19:00',
        },
    ],
    priceRange: '$$',
    sameAs: [
        'https://www.facebook.com/share/1LLzo9ovjn/',
        'https://www.instagram.com/doveleafdrycleanerkenya/',
        'https://www.youtube.com/@doveleafdrycleaners',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Professional Garment Care Services',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dry Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laundry' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carpet Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Curtain Cleaning' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Laundry' } },
        ],
    },
};

const GlobalSEO = ({
    title,
    description,
    path = '',
    schemaType = 'LocalBusiness',
    image,
    type = 'website',
}) => {
    const pageUrl = `${SITE_URL}${path}`;
    const ogImage = image
        ? image.startsWith('http')
            ? image
            : `${SITE_URL}${image}`
        : `${SITE_URL}/images/hero section.jpg`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={pageUrl} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="en_KE" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* JSON-LD Structured Data */}
            {schemaType === 'LocalBusiness' && (
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default GlobalSEO;
