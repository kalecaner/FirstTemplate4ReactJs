import React from 'react'
import Aboutt from './Aboutt'
import Contact from './Contact'
import Menusection from './Menusection'






function Content() {
    return (
        <div className="w3-content" style={{ maxWidth: 1100 }}>

            <Aboutt></Aboutt>
            <Menusection></Menusection>
            <Contact></Contact>
        </div>

    )
}

export default Content