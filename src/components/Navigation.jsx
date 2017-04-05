import React from 'react';
import CSSModules from 'react-css-modules';
import { SocialIcon } from 'react-social-icons';
import styles from './_Navigation.scss';

const socialUrls = [
    'https://twitter.com/danandches',
    'https://www.instagram.com/danandchestravel',
];

const Navigation = () => (
    <nav styleName="nav">
        <h1 styleName="title">Dan & Ches Travel</h1>
        <div styleName="social-bar">
            {socialUrls.map(url =>
                <SocialIcon key={url} url={url} style={{ width: 37, height: 37 }} />,
            )}
        </div>
    </nav>
);

export default CSSModules(Navigation, styles);
