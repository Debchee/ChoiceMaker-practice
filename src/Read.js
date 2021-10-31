import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(<App/>, document.getElementById('app'));

class Read extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Array: {this.props.propArray}</h3>
                <h3>Bool: {this.props.propBool ? "True..." :"False..."}</h3>
                <h3>Func: {this.props.propFunc(3)}</h3>
                <h3>Number:{this.props.propNumber}</h3>
                <h3>String: {this.props.propString}</h3>
                <h3>Object: {this.props.propObject.objectName1}</h3>
                <h3>Object:{this.props.propObject.objectName2}</h3>
                <h3>object:{this.props.propObject.objectName3}</h3>
            </div>
        );
    }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool:React.PropTypes.bool.isRequired,
    propFunc:React.PropTypes.func,
    propNumber:React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject:React.PropTypes.object,

}

App.defaultProps = {
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc:function(e){return e},
    propNumber: 1,
    propString: "Thank You God for ths wisdom and Understanding",
    
    propObject:{
        objectName1: "It wasn't easy at first",
        objectName2:"I wanted to giveup somany times",
        objectName3:"God came through with His faithfulness"
    }
}
export default Read;