import React, { Component } from "react";
import './Widget.css';
import Meteo from './Meteo.js';
import Suggestion from './Suggestion.js';

class Widget extends Component {
    constructor(props){
      super(props);
      this.state = {
        title: this.props.type,
      }
    }

    selectType(){
      switch (this.state.title){
        case "Météo":
          return (
            <Meteo/>
          );

          case "Suggestion":
            return(
              <Suggestion/>
            );
        
          default:
            return(
              <p>Undefined widget</p>
            )
      }
    }

    render() {
        return (
        <div class="widget">
            <div class="widget-header">
              <h4 class="widget-title">{this.state.title}</h4>
            </div>
              
            <div class="widget-body">
              {this.selectType()}
            </div>
        </div>
        );
    }
}

export default Widget;