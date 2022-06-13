import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';
import {data} from "./Data/data"

class App extends React.Component{
  constructor(){
  super()
  this.state = {
    data:data,
    winner:0
  }
}
handlerVote(index){
const newData = [...this.state.data]
newData[index].votes += 1
let maxVotes=0
let maxVotesIndex=0
for(let [index, value] of newData.entries()){
  if(value.votes > maxVotes){
    maxVotes = value.votes
    maxVotesIndex = index
  }
}
  
this.setState({data:newData, winner:maxVotesIndex})
}  
render(){
  return(
    <>
    <div className="container">
      <div></div>
      <div className="container-data">
      
    {this.state.data.map((el, index)=>{
      return(
        <div className="container-description">
          <img src={el.img} alt={el.name} className="img"/>
          <h2>{el.name}</h2>
          <button onClick={()=>this.handlerVote(index)}>Vote</button>
          <h3>Vote Count: {el.votes} </h3>
        </div>
      )
    })
    }
    
    </div>
    <div></div>
    <h2 className="winner">Winner {this.state.data[this.state.winner].name}</h2>
    </div>
    </>
  )
}
}

export default App;
