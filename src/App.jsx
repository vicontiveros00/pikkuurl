import React, { useEffect, useState } from 'react';
import './App.css'
import Nav from './Components/Nav/Nav';
import Start from './Components/Start/Start'
import Loading from './Components/Loading/Loading';
import Result from './Components/Result/Result';
import Footer from './Components/Footer/Footer';
import { notifyTimeout } from './Components/util/validator.js';

//link for testing purposes https://vicontiveros00.github.io/

function App() {
  const [state, setState] = useState('static');
  const [url, setURL] = useState('');
  const [shortURL, setShortURL] = useState('');

//handler for updating status
  const updateState = () => {
    state === 'static' ? setState('pending') : setState('static');
    setShortURL('');
  }

//updates URL, passed as prop to 'Start'
  const updateURL = (val) => {
    setURL(val);
  }

//if something goes wrong, brings up a toaster (but no toast, sad)
  useEffect(() => {
    if(state === 'pending') {
      const timeout = setTimeout(() => {
        notifyTimeout();
      }, 15000);
      return () => clearTimeout(timeout)
    }
  }, [state])

//checks shortURL updates properly
  useEffect(() => {
    if(state === 'pending') {
      const timeout = setTimeout(() => {
        setState('success')
      }, 2000);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [shortURL])

//grabs and stores short url from api
  const updateShortURL = (val) => {
    setShortURL(val);
  }

  return (
    <>
      <Nav />
      {state === 'static' && <Start onClick={updateState} onChange={updateURL} /> }
      {state === 'pending' && <Loading originalURL={url} onChange={updateShortURL}/> }
      {state === 'success' && <Result originalURL={url} shortURL={shortURL} onClick={updateState} />}
      <Footer status={state} />
    </>
  )
}



export default App;
