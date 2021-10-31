import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Read from './Read';
// import Test from './Test';
import Choice from './Choice';

class App extends React.Component{
  constructor(props){
    super(props);
    }
  
    render(){
    return(
     <div>
       <Choice />
       {/* <h1>Header</h1>
       <h2>Content</h2>
       <p>This is React practice</p> */}
     </div>
    )
  }
}
export default App;
