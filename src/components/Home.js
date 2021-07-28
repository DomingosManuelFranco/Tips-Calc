
import React from 'react';
import '../components/Style.css';
import Form from './Form';
import ShowTips from './ShowTips';

function Home() {
    return (
        <div className='home'>
            <h1>Calculate the Tips!!!</h1>
            <div id='container'>
                <Form />
                <ShowTips />
            </div>

        </div>
    )
}

export default Home
