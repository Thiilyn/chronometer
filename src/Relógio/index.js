import React, {Component} from 'react'

class Relogio extends Component{
  constructor(props){
    super(props)
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      mile: 0
    }
  }

  increment(){
    this.setState(
      (state) => {
        if(state.mile >= 999){
          this.zerarms();
          this.incrementarS();
        }

        if(state.mile == 999){
          this.zerarms();
          this.setState({segundo: this.state.second +1})
        }
        return({mile: state.mile + 1})
      }
    )
  }

  zerarms(){
    this.setState({mile:0})
  }

  zerarss(){
    this.setState({second:0})
  }

  incrementarS(){
    this.setState({segundo: this.state.second +1})
  }

  incrementarM(){
    this.setState({minuto: this.state.minute +1})
  }

  componentDidMount(){
    this.timer = setInterval( () => this.increment(),1)
  }

  render(){
    return(
      <div className="main">
        <h1 className="chone">Chronometer</h1>
        <button className="zero">Zerar</button>
         <button className="start">Start</button>
         <button className="stop">Stop</button>
         <h1 className="rel">{this.state.minute}:{this.state.second}:{this.state.mile}</h1>
      </div>
    )
  }
}

export default Relogio