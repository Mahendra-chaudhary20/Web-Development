import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [formvalue, setformValue] = useState({firstName:"", lastName:"", email:"",comment:"", isvisible:true, mode:'',favCar:''});

  //  console.log(formvalue);
  function changeHandler(e)
  {   

     // destructuring
     const {name,value,type,checked}= e.target;
       setformValue((prev)=> 
      {
        return{
          ...prev,
          // [e.target.name] : e.target.value   //  e.target.name = e.target.value 
                                             // will not work 

               [name] : type==='checkbox' ? checked : value                              
        }
      });
  }

  function submitHandler(e) {
    e.preventDefault();
    
    console.log("submit kar rha hu mai yaro");
    console.log(formvalue);
  }
  return (
    <div className="App">
      
      <form onSubmit={submitHandler}>

         <input
      type="text"
      placeholder='first value'
      onChange={changeHandler}
      name='firstName'
      value={formvalue.firstName}/>
   <br/>
   <br></br>
      <input
      type="text"
      placeholder='second value'
      onChange={changeHandler}
      name='lastName'
      value={formvalue.lastName}/>
      <br/>
      <br/>
      <input 
      type='email'
      placeholder='enter the email'
      onChange={changeHandler}
      name='email'
      value={formvalue.email}/>
  
     <br/>
     <br/>
     <textarea
     placeholder='write the text'
      onChange={changeHandler}
      name='comment'
      value={formvalue.comment}/>
      <br/>
      <br/>

      {/* checkbox */}
      <input 
      type='checkbox'
      name='isvisible'
      onChange={changeHandler}
      id='mahendra'
      checked={formvalue.isvisible}/>
     
      <label htmlFor='mahendra'>mera naam check hai</label>

      <br />
      <br />

      <fieldset>
        <legend>radio area</legend>
        
        <input type="radio" 
      onChange={changeHandler}
      name='mode'
      value="online"
       checked={formvalue.mode== 'online'}     // important hai radio ke liye
      id='modewala'/>
      <label htmlFor="modewala">radio typr hai mera</label>


  {/* if more than 1 radio is made then if there name is same then only at once only one radio can be clicked */}
      <br />
      <br />
      <input type="radio" 
      onChange={changeHandler}
      name='mode'
       value="offline"
       checked={formvalue.mode== 'offline'}    // important hai radio ke liye

      id='modewala2'/>
      <label htmlFor="modewala2">radio typr2 hai mera</label>
      </fieldset>

      <select name="favCar" id="carWala" value={formvalue.favCar} onChange={changeHandler}>

        <option value="omni">omni</option>
        <option value="wagonR">wagonR</option>
        <option value="Audi">Audi</option>
        <option value="Naino">Naino</option>
      </select>
      
    <br />
    <br />
     <button >submit</button>
      </form>
      
    
    </div>
  );
}

export default App;
