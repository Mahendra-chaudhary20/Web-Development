import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  // const [text, setText] =useState('');
  // const [count, setcount]= useState(0);

  //variation 1
  // useEffect(()=>{
  //   console.log("app is already rendeered");
  // })

  //variation 2
  // useEffect(()=>{
  //   console.log("UI render succesfully");
  // },[text])

  //varition 3
  //  useEffect(()=>{
  //   console.log("UI render succesfully");
  // },[text])

  // varition 4 == to handle unmounting of a component
  //  useEffect(()=>{
  //   console.log("add listener");

  //   return (() =>{
  //     console.log("remove listener " );
  //     console.log(`${count}`)
      
  //   })
  // },[text])

  // function textHandler(e)
  // {
    
  //   setText(e.target.value);
  //   console.log(e.target.value);
  //  setcount(count+1);
  // }
  // return (
  //   <div className="App">
  //     <label>writehere</label>
  //         <input type="text" value={text} onChange={textHandler}></input>
  //   </div>
  // );
}

export default App;
