import React from 'react';
import './Footer.css';

function Footer(props) {
    const state = props.status;
    const successfulFooter = (
        <p>Powered by <a href="https://urlo.in/docs/" target="_blank">URLO</a> and <a href="https://goqr.me/api/" target="_blank">goqr.me</a></p>
    )
    const staticFooter = (
        <p><a href="https://github.com/vicontiveros00">github/vicontiveros00</a></p>
    )

    return (
        <footer className={state}>
            {state === 'success' ? successfulFooter : staticFooter}
        </footer>
    )
}

export default Footer;