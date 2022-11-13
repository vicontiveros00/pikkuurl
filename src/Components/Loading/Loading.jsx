import React, { useEffect, useState } from 'react';
import './Loading.css';
import { TailSpin } from 'react-loader-spinner';

const api = "https://api.urlo.in/api/short-url";

function Loading(props) {
    const [shortURL, setShortURL] = useState('');
    const originalURL = props.originalURL;

    useEffect(() => {
        console.log(`Fetching shortened link for ${originalURL}`);
        (async () => {
        const shortener = await fetch(api, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({originalUrl: originalURL})
        });
        const content = await shortener.json();
        setShortURL(content.data.shortUrl);
      })();
    }, [])

    useEffect(() => {
        props.onChange(shortURL);
    }, [shortURL])

    return (
        <>
            <div className="center">
                <h1>This should only take a sec...</h1>
                <input type="text" id="locked" name="link" value={originalURL} disabled />
                <div className='spinner'>
                    <TailSpin 
                        padding='200'
                        height='80'
                        width='80'
                        color='#7532a8'
                    />
                    {/*this tailspin thing is pretty cool :D*/}
                </div>
            </div>
        </>
    )
}

export default Loading;