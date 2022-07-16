import React, { Component } from 'react';
import Come from './Come';

class App extends Component {
  state = { 
    inp1: '',
    inp2: '',
    inp3: '',
    cars:[

    ]
   }
   handleValue = (e) => {

   } 
   handleInp1 = (e) => {
     this.setState({
       inp1: e.target.value
     })
   }
   handleInp2 = (e) => {
    this.setState({
      inp2: e.target.value
    })
  }
  handleInp3 = (e) => {
    this.setState({
      inp3: e.target.value
    })
  }
  handleQosh = () => {
    let newObj = {
      name: this.state.inp1,
      year: this.state.inp2,
      color: this.state.inp3,
    }
    let newcars = [...this.state.cars, newObj]
    this.setState({
      cars: newcars
    })
  }
  render() { 
    return (
      <div className='npm'>
        <input type='' placeholder='name' onChange={this.handleInp1} /> <br/>
        <input type='' placeholder='year' onChange={this.handleInp2}/> <br/>
        <input type='' placeholder='color' onChange={this.handleInp3}/> <br/>
        <button className='kiki' onClick={this.handleQosh}>click</button>
        

        <div>
          {
            this.state.cars.map((x) => {
              return (
                <Come come={x} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;