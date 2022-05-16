import React, { Component } from 'react'

export default class New extends Component {

    constructor(){
        super()
        this.state = {
            data : 'old data'
        }
        this.changeData = this.changeData.bind(this)
    }
    changeData(){
        this.setState({
            data : 'new data'
        })
    }
  render() {
    return (
      <div>
      <button onClick={this.changeData}>Change</button>
      <h1>Change Here{this.state.data}</h1>
      </div>
    )
  }
}
