import React from 'react';

function Home() {
    return (
        <div className='home'>
            <h1>Calculate the Tips!!!</h1>
            <form>
                <label>Bill</label>
                <input type="text" />

                <input type="button" value="" className='btn' />
                <input type="button" value="" className='btn' />
                <input type="button" value=""  className='btn'/>
                <input type="button" value="" className='btn' />
                <input type="button" value="" className='btn' />
                <input type="button" value="custom" />
            </form>
        </div>
    )
}

export default Home
