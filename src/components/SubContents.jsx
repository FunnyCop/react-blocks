import React, { Component } from "react"

const subContentsStyle = {
    width: "30%",
    height: "calc(80% - 10px)",
    backgroundColor: "#ffd966"
}

class SubContents extends Component {
    render() {
        return (
            <div style={ subContentsStyle }></div>
        )
    }
}

export default SubContents