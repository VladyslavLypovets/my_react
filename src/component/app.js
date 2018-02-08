import React, {Component} from 'react';
import Button from './Button';
import Span from './Span';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  state = {
    counter : 0
  }
  onClick(){
    this.setState({
      counter : ++this.state.counter
    });
    console.log(this.state.counter);
  }
  render() {
    return (
      <div>
        <Button onClick={this.onClick}/>
        <Span counter={this.state.counter}/>
      </div>
    );
  }
}
