import { motion } from "framer-motion"

// My Navigation Bar will only have 3 Links { About, Main, Thank you page!}



function NavBar (){

    return (
// sytle 
<nav className="nav">


        <motion.div
            initial={{ opacity: 0, x: -50}}
            animate={{ opacity: 1, x: 0}}
            exit={{ opacity: 0, x: 50}}
            transition={{ duration: 1.5}}
        >
    <div className="nav-items">
        <nav className='navbar'>
            <motion.h1 className='navbar-brand'>Expense Tracker </motion.h1>
            <motion.ul className='navbar-nav'>
                <ul className="nav-item1">
                    <motion.a href="/NavBar" className="nav-link">NavBar</motion.a>
                    </ul>
                <ul className="nav-item2">
                    <motion.a href="/Balance" className="nav-link">Balance</motion.a>
                    </ul>
                <ul className="nav-item3">
                    <motion.a href="/TransacationList" className="nav-link">TransactionList</motion.a>
                    </ul>
            </motion.ul>
        </nav>
    </div>


        

        </motion.div>

    </nav> 
    )
}

export default NavBar