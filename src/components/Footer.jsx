import React from 'react';
import { Phone, Mail, MapPin, Droplets } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f9f9f9', padding: '4rem 0 2rem', marginTop: '4rem', borderTop: '1px solid #eee' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '1rem' }}>
                            <Droplets size={24} />
                            <span>DOVELEAF DRYCLEANERS</span>
                        </div>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>
                            Outstanding quality and timely services at your convenience. Your trusted partner for professional garment care.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '1.2rem' }}>Contact Info</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <MapPin size={18} color="var(--primary)" />
                                <span>Uhuru Gardens Phase 2, Lang'ata, Nairobi</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Phone size={18} color="var(--primary)" />
                                <span>+254 713 322 228</span>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <Mail size={18} color="var(--primary)" style={{ marginTop: '2px' }} />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                    <a href="mailto:info@doveleafdrycleaners.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>info@doveleafdrycleaners.co.ke</a>
                                    <a href="mailto:hr@doveleafdrycleaners.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>hr@doveleafdrycleaners.co.ke</a>
                                    <a href="mailto:joe@doveleaf.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>joe@doveleaf.co.ke</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #eee', marginTop: '3rem', paddingTop: '2rem', textAlign: 'center', fontSize: '0.8rem', color: '#999' }}>
                    <p>&copy; {new Date().getFullYear()} Doveleaf Drycleaners & Laundry Hub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
