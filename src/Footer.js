import React from "react"

function Footer() {
    const currentYear = new Date().getFullYear();
    return (<footer>
        <p>Copyright ⓒ K.Ishan {currentYear}</p>
    </footer>)
}
export default Footer