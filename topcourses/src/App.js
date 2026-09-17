
import './App.css';
import {useEffect, useState} from 'react';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import Spinner from './Components/Spinner';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { apiUrl,filterData } from './data.js';


function App() {


  const [courses,setCourses] = useState([]);
   const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);  // by default show the ALL data
  // fetching the data from the apiUrl
  useEffect(()=>
  {
    const dataFetch= async()=>{
      setLoading(true);
      try{
          const response=await fetch(apiUrl);
      const output=await response.json();

      setCourses(output.data);

      console.log(output);
      }
     catch(error)
     {
      toast.error("fetching not happened")
     }
     setLoading(false);
    }

    dataFetch();
  },[])

  return (
    <div className="app">
      <div>
        <Navbar />
      </div>

     <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
      </div>

      <div >
        {loading ? (
          <Spinner /> ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>
    </div>
  );
}

export default App;
