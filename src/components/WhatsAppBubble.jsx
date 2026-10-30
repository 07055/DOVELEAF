import React from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const WhatsAppBubble = () => {
    const location = useLocation();
    const isBlog = location.pathname.startsWith('/blog');

    // On the blog, direct visitors to THE LAUNDRY GURU consulting WhatsApp: 0713326439
    // On core retail pages, direct visitors to Doveleaf Drycleaners customer care: 0713322228
    const phoneNumber = isBlog ? '254713326439' : '254713322228';
    const defaultText = isBlog
        ? 'Hello The Laundry Guru, I would like to inquire about your commercial laundry business consulting services.'
        : 'Hello Doveleaf Drycleaners, I would like to book a laundry pickup or inquire about your services.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isBlog ? 'Chat with The Laundry Guru on WhatsApp' : 'Chat with Doveleaf Drycleaners on WhatsApp'}
            title={isBlog ? 'Chat with The Laundry Guru (0713326439)' : 'Chat with Doveleaf Drycleaners (0713322228)'}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                zIndex: 1001,
                transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <MessageCircle size={32} fill="white" />
        </a>
    );
};

export default WhatsAppBubble;
