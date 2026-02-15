import React from 'react';
import {
    Shirt, Waves, Weight, Layers, Scroll,
    Armchair, Home as HomeIcon, Scissors,
    Sprout, Diamond, Building, Zap
} from 'lucide-react';

const serviceList = [
    { id: 1, name: 'DRYCLEANING', icon: Shirt, image: '/images/WhatsApp Image 2026-02-14 at 13.09.11.jpeg', desc: 'Professional chemical cleaning for delicate garments.' },
    { id: 2, name: 'LAUNDRY', icon: Waves, image: '/images/WhatsApp Image 2026-02-14 at 13.09.11 (1).jpeg', desc: 'Standard washing and drying for everyday wear.' },
    { id: 3, name: 'ASSORTED LAUNDRY PER KILO', icon: Weight, image: '/images/assorted laundry per kg.jpeg', desc: 'Cost-effective washing for bulk items by weight.' },
    { id: 4, name: 'CURTAINS CLEANING', icon: Layers, image: '/images/curtains cleaning.jpeg', desc: 'Deep cleaning for all types of window treatments.' },
    { id: 5, name: 'CARPET CLEANING', icon: Scroll, image: '/images/carpet cleaning.jpg', desc: 'Stain removal and refreshing for home and office carpets.' },
    { id: 6, name: 'SEAT CLEANING', icon: Armchair, image: '/images/seats cleaning.jpg', desc: 'Upholstery cleaning for sofas and dining chairs.' },
    { id: 7, name: 'HOME CLEANING', icon: HomeIcon, image: '/images/home cleaning.jpg', desc: 'Comprehensive residential cleaning services.' },
    { id: 8, name: 'PRESSING/STEAMING/IRONING', icon: Scissors, image: '/images/WhatsApp Image 2026-02-14 at 13.09.12.jpeg', desc: 'Professional finishing to keep you looking sharp.' },
    { id: 9, name: 'LAUNDRY TREATMENT SERVICES', icon: Sprout, image: '/images/laundry treatment services.jpeg', desc: 'Disinfection, stain removal, brightening, and starching.' },
    { id: 10, name: 'SPECIAL FABRICS CARE', icon: Diamond, image: '/images/special fabric.jpg', desc: 'Leather, suede, canvas, wedding gowns, and African attires.' },
    { id: 11, name: 'COMMERCIAL/CORPORATE LAUNDRY', icon: Building, image: '/images/WhatsApp Image 2026-02-14 at 13.09.10.jpeg', desc: 'Care for healthcare, beauty spas, fitness centers, and schools.' },
    { id: 12, name: 'EXPRESS SERVICE', icon: Zap, image: '/images/free delivery.jpg', desc: 'Rapid turnaround at no extra cost.' }
];

const Services = () => {
    return (
        <div className="services-page">
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
                            <div key={service.id} style={{
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
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
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
                                <p style={{ color: '#666', fontSize: '0.95rem' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
