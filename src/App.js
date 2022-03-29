import React from 'react';
import Meme from './components/Meme'
import Header from './components/Header'

export default function App() {
    return (
        <div className='app'>
            <Header />
            <Meme />
        </div>
    )
}