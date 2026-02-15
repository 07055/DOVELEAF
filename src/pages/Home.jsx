import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Zap } from 'lucide-react';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(rgba(0,0,128,0.8), rgba(0,0,128,0.8)), url("/images/hero section.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '10rem 0',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                        Outstanding Quality & <br /><span style={{ color: 'var(--secondary)' }}>Timely Services</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 2.5rem', opacity: '0.9' }}>
                        Doveleaf Drycleaners & Laundry Hub provides professional garment care at your convenience. Express service available at no extra cost!
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/services" className="btn btn-secondary" style={{ fontSize: '1.1rem' }}>Our Services</Link>
                        <Link to="/contact" className="btn btn-primary" style={{ border: '2px solid white', fontSize: '1.1rem' }}>Book a Pickup</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '1rem' }}>Why Choose Doveleaf?</h2>
                        <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--secondary)', margin: '0 auto' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        <div style={{ padding: '2rem', borderRadius: '10px', backgroundColor: 'var(--accent)', textAlign: 'center' }}>
                            <ShieldCheck size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Premium Care</h3>
                            <p>We treat every garment with the utmost care, using specialized techniques for delicate fabrics like leather, suede, and wedding gowns.</p>
                        </div>

                        <div style={{ padding: '2rem', borderRadius: '10px', backgroundColor: 'var(--accent)', textAlign: 'center' }}>
                            <Zap size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Express Service</h3>
                            <p>Need it fast? We offer express service for those urgent needs at no extra cost, ensuring you look your best when it matters.</p>
                        </div>

                        <div style={{ padding: '2rem', borderRadius: '10px', backgroundColor: 'var(--accent)', textAlign: 'center' }}>
                            <Clock size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Timely Delivery</h3>
                            <p>We value your time. Our free pickup and delivery service in Lang'ata ensures your laundry is a hassle-free experience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
