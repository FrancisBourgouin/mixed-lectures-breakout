import { Component } from "react";

export default class Spy extends Component{
  constructor(props){
    super(props)
  }
  report = event => console.log("User clicked at position", event.clientX, event.clientY)

  componentDidMount(){
    document.addEventListener("click", this.report)
  }

  componentWillUnmount(){
    console.log("Our spy is now sleeping with 🐟🐠🐟")
    document.removeEventListener("click", this.report)
  }

  componentDidUpdate(prevState, prevProps){
    // ...
  }

  render(){
    

    return(
      <p>🕵️</p>
    )
  }
}