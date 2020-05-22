import React, { Component } from 'react'

export default class Convert extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // count: 0,
      monedaPeso: '',
      monedaDollar: '',

    }
    this.handleInputMonedaPeso = this.handleInputMonedaPeso.bind(this)
    this. handleInputMonedaDollar = this.handleInputMonedaDollar.bind(this)
  }


  handleInputMonedaPeso(event) {
    console.log(event.target.value);
    this.setState({
      monedaPeso: event.target.value 
    })
  }

  handleInputMonedaDollar(event) {
    console.log(event.target.value);
    this.setState({
      monedaDollar: event.target.value
    })
  }

  render() {
    const { monedaPeso, monedaDollar } = this.state
    let currencyValue = monedaPeso * 24
    return(
      <div className='form-container'>
        <form>
          <input
          value={monedaPeso}
          onChange={this.handleInputMonedaPeso}
          placeholder={'moneda peso'}
          />
          <input
          value={monedaDollar}
          onChange={this. handleInputMonedaDollar}
          placeholder={`moneda dollar = ${currencyValue}`}
          />
        </form>
      </div>
    );
  }
}