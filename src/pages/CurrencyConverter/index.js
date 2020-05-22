import React, { Component } from "react";

//Components
import Header from "../../components/Header";

//Css
import "./CurrencyConverter.css";

export default class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyMXN: 0,
      currencyUSD: 0,
      currencyEUR: 0,
    };
    this.handlerInput = this.handlerInput.bind(this)
  }

  handlerInput({ target: {name, value}}) {
    console.log(name, value);
    let currencyMXN = 0;
    let currencyUSD = 0;
    let currencyEUR = 0;
    if (name === "currencyMXN") {
      currencyMXN = value
      currencyUSD = value / 23
      currencyEUR = value / 25
    }else if (name === "currencyUSD") {
      currencyMXN = value * 23
      currencyUSD = value  
      currencyEUR = value * 0.91
    }else {
      currencyMXN = value * 25
      currencyUSD = value / 1.10
      currencyEUR = value 

    }
    this.setState({
      currencyMXN: currencyMXN,
      currencyUSD: currencyUSD,
      currencyEUR: currencyEUR
    })  
  }

  render() {
    const { currencyMXN, currencyUSD, currencyEUR } = this.state;
    return (
      <div className="Container">
        <div>
          <Header
            title={"Currency Converter"}
            description={"Conversor de divisas MXN-USD-EUR "}
          />
          <div className="Input">
            <form className="Input">
              <input className="Input1"
                placeholder={"MXN"}
                value={currencyMXN}
                onChange={this.handlerInput}
                name={"currencyMXN"}
              />
              <input className="Input2"
                placeholder={"USD"}
                value={currencyUSD}
                onChange={this.handlerInput}
                name={"currencyUSD"}
              />
              <input className="Input3"
                placeholder={"EUR"}
                value={currencyEUR}
                onChange={this.handlerInput}
                name={"currencyMEUR"}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
