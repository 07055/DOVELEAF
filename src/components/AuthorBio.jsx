import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const AuthorBio = ({ author }) => {
    const isJoeMweri = author && (
        author.toLowerCase().includes('joe mweri') ||
        author.toLowerCase().includes('laundry guru') ||
        author.toLowerCase().includes('consultant') ||
        author.toLowerCase().includes('advisory')
    );

    return (
        <div className="author-bio-box">
            <div className="author-bio-avatar" style={{ border: '2px solid var(--secondary)', overflow: 'hidden', padding: 0 }}>
                <img
                    src="/images/advisory/joe-mweri-landscape-cover.jpeg"
                    alt="Joe Mweri — Lead Consultant, THE LAUNDRY GURU"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
            </div>
            <div className="author-bio-content">
                <p className="author-bio-label">Written by Lead Consultant & Advisory Team</p>
                <h3 className="author-bio-name">THE LAUNDRY GURU</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.45rem' }}>
                    Commercial Laundry Business Consulting Firm • Under the Leadership of Joe Mweri, Lead Consultant
                </p>
                <p className="author-bio-description">
                    <strong>THE LAUNDRY GURU</strong> is East Africa's premier commercial laundry and dry-cleaning advisory firm. Under the executive leadership of Joe Mweri and his team of technical specialists, the firm advises institutional investors, healthcare facilities, hotels, and entrepreneurs across Kenya on feasibility analysis, plant layout engineering, pricing architecture, quality SOPs, and operational turnarounds.
                </p>
                <div style={{ marginTop: '0.9rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.88rem' }}>
                    <a
                        href="https://wa.me/254713325431?text=Hello%20The%20Laundry%20Guru%2C%20I%20would%20like%20to%20inquire%20about%20your%20consulting%20services"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#16a34a', fontWeight: 700 }}
                    >
                        <MessageCircle size={16} /> WhatsApp: 0713325431
                    </a>
                    <a
                        href="tel:+254713325431"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600 }}
                    >
                        <Phone size={15} /> +254 713 325 431
                    </a>
                    <a
                        href="mailto:businessdevelopment@doveleaf.co.ke"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', fontWeight: 600 }}
                    >
                        <Mail size={15} /> businessdevelopment@doveleaf.co.ke
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
