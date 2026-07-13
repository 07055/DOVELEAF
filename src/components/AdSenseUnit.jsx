import { useEffect, useRef, useCallback } from 'react';

const AdSenseUnit = ({ adClient, adSlot, format = 'auto', style }) => {
    const insRef = useRef(null);
    const retryTimer = useRef(null);

    const pushAd = useCallback(() => {
        if (!insRef.current) return;
        if (insRef.current.getAttribute('data-adsbygoogle-status')) return;

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error('AdSense push failed:', err);
        }
    }, []);

    useEffect(() => {
        if (!adClient || !adSlot) return;

        const ADSBYGOOGLE_SCRIPT_SRC = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

        const scriptExists = document.querySelector(
            `script[src="${ADSBYGOOGLE_SCRIPT_SRC}"]`
        );

        if (scriptExists) {
            retryTimer.current = setTimeout(pushAd, 200);
        } else {
            let attempts = 0;
            const maxAttempts = 10;
            const interval = setInterval(() => {
                attempts += 1;
                if (window.adsbygoogle || attempts >= maxAttempts) {
                    clearInterval(interval);
                    retryTimer.current = setTimeout(pushAd, 300);
                }
            }, 500);
            retryTimer.current = interval;
        }

        return () => {
            if (retryTimer.current) {
                clearTimeout(retryTimer.current);
                clearInterval(retryTimer.current);
                retryTimer.current = null;
            }
            if (insRef.current) {
                insRef.current.removeAttribute('data-adsbygoogle-status');
                insRef.current.innerHTML = '';
            }
        };
    }, [adClient, adSlot, pushAd]);

    const mergedStyle = {
        display: 'block',
        width: '100%',
        minHeight: '100px',
        ...style,
    };

    return (
        <div className="adsense-wrapper">
            <ins
                ref={insRef}
                className="adsbygoogle"
                style={mergedStyle}
                data-ad-client={adClient}
                data-ad-slot={adSlot}
                data-ad-format={format}
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdSenseUnit;
