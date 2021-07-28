import React from 'react';
import '../components/Style.css';

function Home() {
    return (
        <div className='home'>
            <h1>Calculate the Tips!!!</h1>
            <div id='container'>
                <div id='form'>
                    <form>
                        <label>Bill</label>
                        <input type="text" /><br />
                        <label htmlFor="">Select the Tips %</label><br />
                        <div id='btns'>
                            <input type="button" value="5%" className='btn' />
                            <input type="button" value="10%" className='btn' />
                            <input type="button" value="15%"  className='btn'/>
                            <input type="button" value="25%" className='btn' />
                            <input type="button" value="50%" className='btn' />
                            <input type="button" value="custom" id='btn'/> <br />
                        </div>
                        <label htmlFor="">Number of People: </label><br />
                        <input type="button" value="5" id='nPeople' />
                    </form>
                </div>

                <div id='result'>
                    <p>Tip amount <br /><span>/ person</span></p>
                    <h1>$4.27</h1>

                    <p>Total <br /><span>/ person</span></p>
                    <h1>$32.79</h1>
                </div>
            </div>

        </div>
    )
}

export default Home
