import React from 'react';
import { User } from 'lucide-react';

const AuthorBio = () => {
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
