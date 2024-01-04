import React from 'react'

function TransactionList(){
    return(
        <>
            <h3>History</h3>
            <ul id="list">
                <li className='minus'>
                    Cash
                    <span>
                        -$400
                    </span>
                    <button className='delete-btn'>
                        delete
                    </button>
                </li>
                <li className='plus'>
                    Salary
                    <span>
                        +$1000
                    </span>
                    <button className='delete-btn'>
                        delete
                    </button>
                </li>
            </ul>
        </>
    )
}

export default TransactionList