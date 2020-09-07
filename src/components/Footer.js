import React from "react"

function Footer() {

    return <div className="bg-dark text-center text-white-50">
        <p className="p-2">Copyright © I <span role="img">😎</span> {new Date().getFullYear()}</p>
    </div>
}


export default Footer;