import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";
import ParagraphComponent from "./ParagraphComponent";

class App extends Component {
  render() {
    return (
      <div>
        <NewComponent exampleProp='hello'/>
        <NewComponent exampleProp='world'/>
        <ParagraphComponent paraProp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer id erat quis dolor pulvinar cursus. Pellentesque tempor cursus tellus ac pharetra. 
        Fusce porttitor sit amet felis nec venenatis. Nulla viverra dolor vitae sapien dictum tristique. 
        Duis sed ornare dolor. Curabitur sit amet diam ut risus porta aliquet et in nisi. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer sed felis diam. 
        Integer porttitor placerat metus sed suscipit. Phasellus gravida augue eu lacus vehicula faucibus. Etiam pretium nisl ac nulla aliquam dignissim."/>

      </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>

      //   </header>

      // </div>
      

    );
  }
}

export default App;
