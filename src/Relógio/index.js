import React, {Component} from 'react'

class Relogio extends Component{
  constructor(props){
    super(props)
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      mile: 0,
      stop: false,
      nameStop: "Stop"
    }
  }

  increment(){
    this.setState(
      (state) => {
        if(this.state.stop === false){
          if(state.mile >= 999){
            this.zerarms()
            return ({second: state.second + 1})
          }
  
          if(state.second >= 60){
            this.zerarms()
            this.zerarss()
            return({minute: state.minute + 1})
          }

          if(state.minute >= 60){
            this.zerarms()
            this.zerarss()
            this.zerarmin()
            return({minute: state.minute + 1})
          }
          return ({mile: state.mile + 1})
        }
      }
    )
  }

  zerarms(){
    this.setState({mile:0})
  }

  zerarss(){
    this.setState({second:0})
  }

  zerarmin(){
    this.setState({minute:0})
  }

  zerarChronometer(){
    this.setState({
      mile: 0,
      second: 0,
      minute: 0
    })
  }

  startChronometer(){
    this.setState({
      stop: !this.state.stop
    })

    if(this.state.stop){
      this.state.nameStop = "Stop"
    }else 
      this.state.nameStop = "Play"
  }

  componentDidMount(){
    this.timerID = setInterval( () => this.increment(),0.0001)
  }

  render(){
    return(
      <div className="main">
        <h1 className="chone">Chronometer</h1>
        <button className="zero" onClick = {() => {this.zerarChronometer()}}>Zerar</button>
    <button className="start" onClick = {() => {this.startChronometer()}}>{this.state.nameStop}</button>
         <h1 className="rel">{this.state.hour}:{this.state.minute}:{this.state.second}:{this.state.mile}</h1>
      </div>
    )
  }
}

export default Relogio