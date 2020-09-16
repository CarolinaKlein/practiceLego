import React from 'react';
import './Footer.scss';

function Footer() {

    return (
        <div className="Legal">
            <div className="terms-container">
                <a
                    className="term privacy"
                    href="https://www.nick.com/legal/83acmp/privacy-policy"
                    target="_BLANK"
                    rel="noopener noreferrer"
                >
                    PRIVACY POLICY
                </a>
                <a
                    className="term terms"
                    href="https://www.nick.com/legal/ussoge/terms-of-use"
                    target="_BLANK"
                    rel="noopener noreferrer"
                >
                    TERMS OF USE
                </a>
            </div>
            <div className="copyright">©2020 Viacom International Inc.</div>
        </div>
    );
}
export default Footer;