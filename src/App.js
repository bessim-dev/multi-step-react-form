import React, { Component } from 'react';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import Confirm from './Confirm'


export class App extends Component {
  state = {
    step:1,
    firstName :  '',
    lastName :  '',
    email :  '',
    ocuppation: '',
    city:'',
    bio: '',
  }
  hundleChange = input => e => {
    this.setState({
      [input] : e.target.value
    })
  }
  nextStep = () => {
    const {step} = this.state
    this.setState({
      step : step + 1
    })
  }
  prevStep = () => {
    const {step} = this.state
    this.setState({
      step : step - 1
    })
  }
   render() {
     const {firstName,lastName,email,ocuppation,city,bio} = this.state
     const values = {firstName,lastName,email,ocuppation,city,bio}
     const {step} = this.state;
        switch (step) {
          case 1:
           return (
             <FirstForm
             hundleChange={this.hundleChange}
             nextStep={this.nextStep}
             values={values}
             />
           )
          case 2:
            return (
              <SecondForm
              hundleChange={this.hundleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              />
            )
          case 3:
            return (
              <Confirm
              hundleChange={this.hundleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
              />
            )
          default:
            break;
  }
}
}

export default App
