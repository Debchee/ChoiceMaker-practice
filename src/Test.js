import React from 'react';

class Test extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{backgroundColor: "red"}}>
            <h1 style={{color:"#fff"}}>{this.props.title}</h1>

            <button 
            onClick={this.props.handleChange}
            type="button">Change Text</button>
            </div>
        )
    }
}

export default Test;
