import React from 'react';

class Choice extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", justifyContnet:"center", alignContent:"center", alignItems:"center"}}>
                <h1 style={{color: "blue", fontSize: "20", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:"40px",alignItems:"center"}}>Easy Decision Maker</h1>
                <p style= {{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", alignItems:"center",marginBottom:"20px",marginTop:"3px"}}>When the decision is too hard or too simple, use the easy decision maker</p>
                <form style={{justifyContent:"center", alignContent:"center", display:"flex", flexDirection:"column"}}>
                    <label htmlFor="fname" style={{color:"blue", fontSize:"30px",}}>Question</label>
                    <input type="text" id="fname" name="fname" placeholder="What is your question?" style={{width: "100vh",padding: "20px 20px", margin: "8 0", border:"2px solid lightGrey", borderRadius:"8px",boxSizing: "border-box"}}></input><br></br>
                    <label htmlFor="opt" style={{color:"blue", fontSize:"30px"}}>Options</label>
                    <input type="text" id="opt" name="opt" placeholder="A:" style={{width: "100vh",padding: "20px 20px", margin: "8 0", boxSizing: "border-box",border:"2px solid lightGrey", borderRadius:"8px"}}></input><br></br>
                    <input type="text" id="opt" name="opt" placeholder="B:" style={{width: "100vh",padding: "20px 20px", margin: "8 0", boxSizing: "border-box",border:"2px solid lightGrey", borderRadius:"8px"}}></input><br></br>
                    <input type="text" id="opt" name="opt" placeholder="C:" style={{width: "100vh",padding: "20px 20px", margin: "8 0", boxSizing: "border-box",border:"2px solid lightGrey", borderRadius:"8px"}}></input><br></br>
                    <ul style={{listStyleType:"none", padding:"0px",margin:"0px"}}>
                        <li style={{display: "inline", marginRight:"400px"}}><button style={{border:"1px solid black", fontSize:"15px",padding:"10px 20px", borderRadius:"8px"}}>Option</button></li>
                         <li style={{display: "inline"}}><button style={{border:"1px solid black", padding:"15px 20px", borderRadius:"8px", backgroundColor:"green",color:"white", fontSize:"20px"}}>Answer!</button></li>
                    </ul>
                  
                    
                    </form>
            </div>
        );
    }
}


export default Choice;