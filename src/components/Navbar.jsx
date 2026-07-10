import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '1rem 0',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                    <img
                        src="/doveleaf-logo.svg"
                        alt="Doveleaf Drycleaners — Outstanding Quality & Timely Services"
                        style={{ height: '70px' }}
                    />
                </Link>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <li><Link to="/" style={{ hover: { color: 'var(--secondary)' } }}>HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>

                {/* Mobile Toggle */}
                <div style={{ display: 'none' }} className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; cursor: pointer; }
        }
        .desktop-menu a:hover { color: var(--secondary); transition: var(--transition); }
      `}</style>
        </nav>
    );
};

export default Navbar;
