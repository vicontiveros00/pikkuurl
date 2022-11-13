import React, { useState } from 'react';
import './Result.css';
import { Toaster } from 'react-hot-toast';
import { copiedToClipboard } from '../util/validator.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon } from '@iconify/react';

function Result(props) {
    const originalURL = props.originalURL;
    const shortURL = props.shortURL;
    const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${shortURL}`;
    const [res, setRes] = useState('150');

    return ( //sorry for spaghetti code
        <div className="center">
            <h1>Here's your link</h1>
            <div className="result">
                <div className="left">
                    <p>Original link:</p>
                    <input type="text" className="link-result" name="link" value={originalURL} disabled />
                    <p>Shortened link:</p>
                    <div className="copy">
                    <input type="text" className="link-result" name="link" value={shortURL} disabled />
                    </div>
                    <CopyToClipboard text={shortURL} >
                        <Icon icon="akar-icons:copy" className="copy-icon" onClick={copiedToClipboard}/>
                    </CopyToClipboard><br />
                    <input type="submit" id="g-button" name="reset" value="Another link?" onClick={props.onClick} />
                </div>
                <div className="right">
                    <div className='qr'>
                        <p>QR Code:</p>
                        <img src={qrAPI} alt={originalURL} />
                    </div>
                    <div className='download'>
                        <p>Select size (px):</p>
                        <input type="number" min="50" className="size" placeholder="Default 150px" onChange={(e) => {
                            setRes(e.target.value);
                        }} />
                        <a href={`https://api.qrserver.com/v1/create-qr-code/?size=${res}x${res}&data=${originalURL}`} target="_blank" download={`pikku-url-${res}px.png`}>
                            <button className="download-button">
                            <Icon icon="bxs:cloud-download" className="download-icon" />
                                Download
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Toaster position='bottom-center' />
        </div>
    )
}

export default Result;