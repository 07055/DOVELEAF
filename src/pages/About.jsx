import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="about-page">
            <section style={{ backgroundColor: 'var(--primary)', padding: '5rem 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Us</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', opacity: '0.8' }}>Professional garment care with a commitment to quality and convenience.</p>
                </div>
            </section>

            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ color: 'var(--primary)', marginBottom: '1.5rem', fontSize: '2.2rem' }}>Who Exactly Are We?</h2>
                            <p style={{ marginBottom: '1.2rem' }}>
                                We are a seasoned team of professionals with a sole intent of giving quality Laundry & Drycleaning solutions to individuals and institutions.
                            </p>
                            <p style={{ marginBottom: '1.2rem' }}>
                                We encourage institutions in different industries e.g. Hospitals, Clinics, Hotels, restaurants, schools, and garages to outsource their Laundry & Drycleaning services from us. Let us save you from machine breakdowns, poor quality laundry services, and high bills.
                            </p>
                            <p>
                                We have the capacity to offer you Quality Laundry services anchored on convenience and affordability. We can put a smile on your face.
                                <strong> #Outstanding Quality & Timely services at your convenience.</strong>
                            </p>
                        </div>
                        <div style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                            <img src="/images/WhatsApp Image 2026-02-14 at 13.09.11.jpeg" alt="Our Professional Team" style={{ width: '100%', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '5rem 0', backgroundColor: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <Target size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666' }}>Delivering Quality services to our esteemed customers anchored on convenience and affordability.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <Eye size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666' }}>To be the leading Light in the vast Laundry & Drycleaning Industry in East & Central Africa offering Outstanding Services.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <Award size={40} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Our Strengths</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666' }}>Professionalism, Excellent Customer Service, and Integrity throughout our day to day operations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
