import React from 'react';
import { User, Mail, Phone } from 'lucide-react';

const AuthorBio = ({ author }) => {
    const isJoeMweri = author && author.toLowerCase().includes('joe mweri');
    const isAdvisoryTeam = author && (
        author.toLowerCase().includes('business support') ||
        author.toLowerCase().includes('advisory') ||
        author.toLowerCase().includes('systems') ||
        author.toLowerCase().includes('consultant')
    );

    if (isJoeMweri) {
        return (
            <div className="author-bio-box">
                <div className="author-bio-avatar" style={{ border: '2px solid var(--secondary)', overflow: 'hidden', padding: 0 }}>
                    <img
                        src="/images/advisory/joe-mweri-founder-ceo-doveleaf.jpeg"
                        alt="Joe Mweri — The Laundry Guru"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="author-bio-content">
                    <p className="author-bio-label">Written by Author & Lead Consultant</p>
                    <h3 className="author-bio-name">Joe Mweri — The Laundry Guru</h3>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                        Commercial Laundry Strategist • Industry Expert • Executive Advisor • Founder & CEO, Doveleaf Drycleaners
                    </p>
                    <p className="author-bio-description">
                        With over 15 years of hands-on technical and commercial experience transforming commercial laundry and dry-cleaning enterprises across Kenya and East Africa, Joe Mweri bridges the gap between capital investment and operational execution. He advises institutional investors, hotels, healthcare facilities, and laundromats on plant engineering, pricing models, operations, and sustainable scaling.
                    </p>
                    <div style={{ marginTop: '0.85rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                        <a href="mailto:joe@doveleaf.co.ke" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600 }}>
                            <Mail size={15} /> joe@doveleaf.co.ke
                        </a>
                        <a href="tel:+254713325431" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600 }}>
                            <Phone size={15} /> +254 713 325 431
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    if (isAdvisoryTeam) {
        return (
            <div className="author-bio-box">
                <div className="author-bio-avatar" style={{ border: '2px solid var(--primary)', overflow: 'hidden', padding: '6px' }}>
                    <img
                        src="/doveleaf-logo.svg"
                        alt="Doveleaf Laundry Consultants"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                </div>
                <div className="author-bio-content">
                    <p className="author-bio-label">Written by</p>
                    <h3 className="author-bio-name">Doveleaf Laundry Consultants</h3>
                    <p style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                        East Africa's Premier Commercial Laundry & Drycleaning Advisory Firm
                    </p>
                    <p className="author-bio-description">
                        Operating in synergy with Doveleaf Drycleaners, Doveleaf Laundry Consultants empowers institutional investors, healthcare facilities, hospitality brands, and entrepreneurs to establish highly profitable, efficient, and sustainable laundry enterprises through data-driven plant design and operational mastery.
                    </p>
                    <div style={{ marginTop: '0.85rem', display: 'flex', gap: '1.25rem', flexWrap: 'wrap', fontSize: '0.85rem' }}>
                        <a href="mailto:businessdevelopment@doveleaf.co.ke" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600 }}>
                            <Mail size={15} /> businessdevelopment@doveleaf.co.ke
                        </a>
                        <a href="tel:+254713325431" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: 'var(--primary)', fontWeight: 600 }}>
                            <Phone size={15} /> +254 713 325 431
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="author-bio-box">
            <div className="author-bio-avatar">
                <User size={40} color="var(--primary)" />
            </div>
            <div className="author-bio-content">
                <p className="author-bio-label">Written by</p>
                <h3 className="author-bio-name">The Garment Care Team at Doveleaf Drycleaners</h3>
                <p className="author-bio-description">
                    Professional Fabric Experts in Nairobi. With years of hands-on experience in
                    garment care, fabric treatment, and stain removal, our team shares trusted
                    advice to help you keep your wardrobe looking its absolute best.
                </p>
            </div>
        </div>
    );
};

export default AuthorBio;
