import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    // your code will be here
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    }

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  // your code will be heres
  setNum1(e){
    const num1 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num1: num1});
  }

  setNum2(e){
    const num2 = e.target.value ? parseInt(e.target.value) : "";
    this.setState({num2: num2});
  }

  add(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({result: result});
  };

  subtract(e) {
      e.preventDefault();
      const result = this.state.num1 = this.state.num2;
      this.setState({result: result});
    };

  multiply(e) {
      e.preventDefault();
      const result = this.state.num1 * this.state.num2;
      this.setState({result: result});
    };

  divide(e) {
      e.preventDefault();
      const result = Math.floor(this.state.num1 / this.state.num2);
      this.setState({result: result});
    };

  clear(e) {
      e.preventDefault();
      this.setState({result: 0});
      this.setState({num1: ""});
      this.setState({num2: ""});
    };

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input onChange={this.setNum1} value={this.state.num1}/>
        <input onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>/</button>
        <button onClick={this.clear}>clear</button>

      </div>
    );
  }
}

export default Calculator;
