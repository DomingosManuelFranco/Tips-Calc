
import React from 'react';
import '../components/Style.css';
import Form from './Form';
import ShowTips from './ShowTips';

function Home() {
    return (
        <div className='home'>
            
            <div id='container'>
                <Form />
                <ShowTips />
            </div>

        </div>
    )
}

export default Home
