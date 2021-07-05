import React, { Component } from "react"

const mainStyle = {
    width: "calc(80% - 10px)",
    height: "calc(80% - 10px)",
    padding: "10px",
    backgroundColor: "#e06666",
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px"
}

class Main extends Component {
    render() {
        return (
            <div style={ mainStyle }>
                { this.props.children }
            </div>
        )
    }
}

export default Main