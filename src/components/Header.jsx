import React, { Component } from "react"

const headerStyle = {
    width: "100%",
    height: "20%",
    marginBottom: "10px",
    backgroundColor: "#6aa84f",
    display: "inline-block"
}

class Header extends Component {
    render() {
        return (
            <div style={ headerStyle }></div>
        )
    }
}

export default Header