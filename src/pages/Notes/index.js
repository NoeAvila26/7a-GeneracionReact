import React, { Component } from 'react';

import "./Notes.css";


export default class Notes extends Component {


 render() {
  return (
    <div className="Container">
      <div>
        <Header
        title={'Blog de notas'}
        description={'aqui aprenderemos a manejar el estado'}
        />
      </div>
    </div>
  )
 }
}