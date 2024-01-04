import React from 'react'

function AddTransaction(){
    return (
        <form id='form'>
            <div className='form-control'>
                <span className='label'>Text</span>
                <input type="text" id="text" placeholder="Enter text..."/>
            </div>
            <div className="form-control">
                <span className='amount'>Amount<br/>
                    (negative - expense, positive - income)
                </span>
                <input type='text' id='amount' placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add transaction</button>
        </form>
    )
}

export default AddTransaction