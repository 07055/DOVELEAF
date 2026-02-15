import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {

    return (
        <div className="contact-page">
            <section style={{ backgroundColor: 'var(--primary)', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact Us</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: '0.8' }}>We're here to help. Reach out for any inquiries or to schedule a pickup.</p>
                </div>
            </section>

            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
                        {/* Contact Information */}
                        <div>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>Get in Touch</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ backgroundColor: 'var(--accent)', padding: '1rem', borderRadius: '10px', color: 'var(--primary)' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.3rem' }}>Our Location</h4>
                                        <p style={{ color: '#666' }}>Uhuru Gardens Phase 2, Lang'ata, Nairobi</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ backgroundColor: 'var(--accent)', padding: '1rem', borderRadius: '10px', color: 'var(--primary)' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.3rem' }}>Phone Number</h4>
                                        <p style={{ color: '#666' }}>+254 713 322 228</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ backgroundColor: 'var(--accent)', padding: '1rem', borderRadius: '10px', color: 'var(--primary)' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.3rem' }}>Email Address</h4>
                                        <p style={{ color: '#666' }}>
                                            <a href="mailto:info@doveleafdrycleaners.co.ke" style={{ color: 'inherit', textDecoration: 'none' }}>info@doveleafdrycleaners.co.ke</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ backgroundColor: 'var(--accent)', padding: '1rem', borderRadius: '10px', color: 'var(--primary)' }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ marginBottom: '0.3rem' }}>Working Hours</h4>
                                        <p style={{ color: '#666' }}>Mon - Sat: 8:00 AM - 7:00 PM</p>
                                        <p style={{ color: '#666' }}>Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Email Addresses Section */}
                        <div style={{ backgroundColor: 'white', padding: '3rem', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                            <h3 style={{ marginBottom: '2rem', color: 'var(--primary)' }}>Contact Emails</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>General Inquiries</h4>
                                    <a href="mailto:info@doveleafdrycleaners.co.ke" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>info@doveleafdrycleaners.co.ke</a>
                                </div>
                                <div style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Human Resources</h4>
                                    <a href="mailto:hr@doveleafdrycleaners.co.ke" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>hr@doveleafdrycleaners.co.ke</a>
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>Management</h4>
                                    <a href="mailto:joe@doveleaf.co.ke" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>joe@doveleaf.co.ke</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
