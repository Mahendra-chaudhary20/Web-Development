import React,{useSate} from 'react';
import './App.css';
import Tours from './component/Tours';
import Data from './data.js';

function App() {
 
  const [tour,setTour]= React.useState(Data);

  // to remove the card when clicked on "not interested"
  function removeTour(id){
    const newTours= tour.filter(tour=> tour.id!==id);
    setTour(newTours);
  }

  // when all tour is "not interested"
  if(tour.length==0)
  {
     return (
      <div className='refresh'>
        <div>No Tour Left</div>
        <button className='btn-refresh' onClick={()=> setTour(Data)}>Refresh</button>
      </div>
     )
  }
 
  return (
    <div className='app'>
    
    <Tours Tour={tour} removeTour={removeTour}></Tours>

    </div>
    
  );
}

export default App;
