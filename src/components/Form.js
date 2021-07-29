
import React from 'react'

function Form() {
    return (
        <div>
            <div id='form'>
                    <form>
                        <label className='color'>Bill</label>
                        <input type="text" /><br />
                        <label htmlFor="" className='color'>Select the Tips %</label><br />
                        <div id='btns'>
                            <input type="button" value="5%" className='btn color' />
                            <input type="button" value="10%" className='btn color' />
                            <input type="button" value="15%"  className='btn color'/>
                            <input type="button" value="25%" className='btn color' />
                            <input type="button" value="50%" className='btn color' />
                            <input type="button" value="custom" id='btn color'/> <br />
                        </div>
                        <label htmlFor="" className='color'>Number of People: </label><br />
                        <input type="text" value="5" id='nPeople' />
                    </form>
                </div>
        </div>
    )
}

export default Form;