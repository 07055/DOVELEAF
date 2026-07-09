import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Shirt, Waves, Weight, Layers, Scroll,
    Armchair, Home as HomeIcon, Scissors,
    Sprout, Diamond, Building, Zap,
    ChevronLeft, ChevronRight
} from 'lucide-react';

const ImageSlider = ({ images }) => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent(prev => (prev + 1) % images.length);
    }, [images.length]);

    const prev = useCallback(() => {
        setCurrent(prev => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, images.length]);

    if (images.length <= 1) {
        return (
            <img
                src={images[0]}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        );
    }

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {images.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt=""
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: i === current ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out'
                    }}
                />
            ))}
            <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '6px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    zIndex: 2
                }}
            >
                <ChevronLeft size={16} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '6px',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.4)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    zIndex: 2
                }}
            >
                <ChevronRight size={16} />
            </button>
            <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                zIndex: 2
            }}>
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                        style={{
                            width: i === current ? '16px' : '6px',
                            height: '6px',
                            borderRadius: '3px',
                            background: i === current ? 'white' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const serviceList = [
    { id: 1, name: 'DRYCLEANING', icon: Shirt, images: ['/images/WhatsApp Image 2026-02-14 at 13.09.11 (1).jpeg', '/images/commercial corporate..jpeg', '/images/WhatsApp Image 2026-02-14 at 13.09.12.jpeg', '/images/WhatsApp Image 2026-07-09 at 16.12.14.jpeg'], desc: 'Professional Dry Cleaning for your finest Garments.\n\nKeep your delicate fabrics looking their best with our expert dry cleaning services. We use high-quality dry cleaning solvents and modern techniques to safely remove stains, odors, and dirt while protecting the fabric\'s color, texture and shape of your garments.\n\nWhy Choose our Dry Cleaning service?\n- Gentle care for delicate fabrics and designer wear.\n- Professional stain removal and fabric protection.\n- Fresh, neatly pressed garments ready to wear.' },
    { id: 2, name: 'LAUNDRY', icon: Waves, images: ['/images/WhatsApp Image 2026-07-09 at 15.57.42.jpeg', '/images/WhatsApp Image 2026-02-14 at 13.09.11.jpeg', '/images/laundry treatment services.jpeg', '/images/WhatsApp Image 2026-07-09 at 16.09.44.jpeg'], desc: 'Reliable Laundry Services For Everyday Convenience.\n\nSave time and enjoy perfectly cleaned clothes with our Professional Laundry Service. We handle every item with care to give you fresh, clean, and comfortable clothing every time.\n\nWhy choose our laundry service?\n- Hygienic Cleaning using quality detergents.\n- Soft fresh-smelling clothes after every wash.\n- Affordable pricing with consistent quality.' },
    { id: 3, name: 'ASSORTED LAUNDRY PER KILO', icon: Weight, images: ['/images/assorted laundry per kg.jpeg'], desc: 'Cost-effective washing for bulk items by weight.' },
    { id: 4, name: 'CURTAINS CLEANING', icon: Layers, images: ['/images/curtains cleaning.jpeg', '/images/WhatsApp Image 2026-07-09 at 15.55.18.jpeg'], desc: 'Refresh Your Curtains and Improve Indoor Air Quality.\n\nCurtains collect dust, allergens, and odors over time. Our specialized curtain cleaning service removes deep-seated dirt while preserving the fabric, color, and texture, leaving your home or office looking brighter and feeling fresher.\n\nWhy Choose our Curtain Cleaning Service?\n- Removes dust, allergens and unpleasant odors.\n- Restores freshness without damaging the fabric.\n- Ideal for homes, offices, hotels and other institutions.' },
    { id: 5, name: 'CARPET CLEANING', icon: Scroll, images: ['/images/carpet cleaning.jpg'], desc: 'Deep-Clean Your Carpet For A Healthier Space.\n\nOur professional Carpet Cleaning Service removes stubborn stains, dirt, debris, bacteria and allergens deep within carpet fibers. We restore the appearance of your carpet while creating a cleaner and healthier environment for your family, employees or customers.\n\nWhy Choose our Carpet Cleaning Service?\n- Deep Cleaning that extends your carpet\'s life.\n- Effective stain & odor removal.\n- Safe cleaning products for homes and businesses.\n- Suitable for residential and commercial properties.' },
    { id: 6, name: 'SEAT CLEANING', icon: Armchair, images: ['/images/seats cleaning.jpg'], desc: 'Upholstery cleaning for sofas and dining chairs.' },
    { id: 7, name: 'HOME CLEANING', icon: HomeIcon, images: ['/images/home cleaning.jpg'], desc: 'Comprehensive residential cleaning services.' },
    { id: 8, name: 'PRESSING/STEAMING/IRONING', icon: Scissors, images: ['/images/WhatsApp Image 2026-07-09 at 15.57.42 (3).jpeg', '/images/WhatsApp Image 2026-07-09 at 15.57.43 (1).jpeg', '/images/WhatsApp Image 2026-07-09 at 15.57.43 (2).jpeg', '/images/WhatsApp Image 2026-07-09 at 15.57.43.jpeg'], desc: 'Professional finishing to keep you looking sharp.' },
    { id: 9, name: 'LAUNDRY TREATMENT SERVICES', icon: Sprout, images: ['/images/laundry treatment services.jpeg'], desc: 'Disinfection, stain removal, brightening, and starching.' },
    { id: 10, name: 'SPECIAL FABRICS CARE', icon: Diamond, images: ['/images/special fabric.jpg', '/images/WhatsApp Image 2026-07-09 at 16.04.39 (1).jpeg'], desc: 'Leather, suede, canvas, wedding gowns, and African attires.' },
    { id: 11, name: 'COMMERCIAL/CORPORATE LAUNDRY', icon: Building, images: ['/images/WhatsApp Image 2026-02-14 at 13.09.10.jpeg', '/images/WhatsApp Image 2026-07-09 at 15.59.12.jpeg', '/images/WhatsApp Image 2026-07-09 at 15.59.12 (1).jpeg', '/images/WhatsApp Image 2026-07-09 at 15.57.42 (1).jpeg', '/images/WhatsApp Image 2026-07-09 at 16.04.39 (2).jpeg', '/images/WhatsApp Image 2026-07-09 at 16.10.56.jpeg'], desc: 'Professional Laundry Solutions For Businesses & Institutions.\n\nWe provide dependable laundry services tailored to organizations that require consistent quality, hygiene, and timely delivery. Whether you run a hotel, hospital, fitness centre, Airbnb, or beauty spa, we help you maintain the highest standards of cleanliness and professionalism.\n\nIndustries We Serve\n- Accommodation: Hotels, Guest houses, Airbnb, Lodges.\n- Healthcare: Hospitals, Clinics, Medical Centres.\n- Beauty & Fitness: Salons, Spas & Gyms.\n- Learning Institutions: Schools, Colleges & Universities.\n\nWhy Partner with Doveleaf Drycleaners?\n- Reliable pickups and delivery schedules.\n- Strict hygiene and quality control standards.\n- Capacity to handle large volumes.\n- Competitive pricing with flexible monthly payment plans.\n- Professional service you can depend on.' },
    { id: 12, name: 'EXPRESS SERVICE', icon: Zap, images: ['/images/free delivery.jpg', '/images/WhatsApp Image 2026-07-09 at 16.04.39.jpeg'], desc: 'Rapid turnaround at no extra cost.' }
];

const ServiceCard = ({ service }) => {
    const [expanded, setExpanded] = useState(false);
    const short = service.desc.split('\n')[0];

    return (
        <div style={{
            padding: '2.5rem 2rem',
            border: '1px solid #eee',
            borderRadius: '12px',
            transition: 'var(--transition)',
            cursor: 'default',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.borderColor = 'var(--secondary)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eee';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
            }}>
            <div style={{
                width: '100%',
                height: '180px',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1.5rem',
                backgroundColor: '#f0f0f0'
            }}>
                <ImageSlider images={service.images} />
            </div>
            <div style={{
                backgroundColor: 'var(--accent)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                color: 'var(--primary)',
                marginTop: '-40px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
                position: 'relative',
                border: '2px solid white'
            }}>
                <service.icon size={24} />
            </div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>{service.name}</h3>
            <div style={{ width: '100%' }}>
                <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', whiteSpace: 'pre-line', textAlign: 'left', margin: 0 }}>
                    {expanded ? service.desc : short}
                </p>
                {!expanded && service.desc.length > short.length && (
                    <button
                        onClick={() => setExpanded(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--secondary)',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '0.85rem',
                            padding: '0.25rem 0',
                            marginTop: '0.25rem'
                        }}
                    >
                        ...more
                    </button>
                )}
                {expanded && (
                    <button
                        onClick={() => setExpanded(false)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--secondary)',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '0.85rem',
                            padding: '0.25rem 0',
                            marginTop: '0.25rem'
                        }}
                    >
                        show less
                    </button>
                )}
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div className="services-page">
            <Helmet>
                <title>Our Services | Doveleaf Drycleaners & Laundry Hub — Lang'ata, Nairobi</title>
                <meta name="description" content="Explore our full range of professional dry cleaning, laundry, carpet cleaning, curtain cleaning, upholstery cleaning, and commercial laundry services in Lang'ata, Nairobi. Free pickup & delivery available." />
                <link rel="canonical" href="https://doveleaf.co.ke/services" />
            </Helmet>
            <section style={{ backgroundColor: 'var(--primary)', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Services</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: '0.8' }}>We offer a wide range of professional cleaning services tailored to meet your specific needs.</p>
                </div>
            </section>

            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}>
                        {serviceList.map(service => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ backgroundColor: 'var(--primary)', padding: '4rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--secondary)' }}>Experience the Doveleaf Difference</h2>
                    <p style={{ maxWidth: '750px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem', opacity: '0.9' }}>
                        Whether you need expert care for your everyday laundry or reliable laundry solutions for your business, Doveleaf Drycleaners is committed to delivering exceptional quality, convenience, and customer satisfaction. Contact us today to schedule a pickup or request a customized quote — we'll take care of the cleaning so you can focus on what matters most.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Services;
