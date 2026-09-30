
import './App.css';
import NewProduct from './Component/NewProduct.js';
import Products from './Component/Products.js';


function App() {
  const product=[
    {
      id: 'p1',
      title: 'nirma',
      amount: 100,
      date: new Date(2012,8,10)
    },
    {
      id: 'p2',
      title: 'tide',
      amount: 120,
      date: new Date(2015,7,15)
    },
    {
      id: 'p3',
      title: 'airel',
      amount: 150,
      date: new Date(2045,4,18)
    },
    {
      id: 'p4',
      title: 'wheels',
      amount: 1100,
      date: new Date(2020,9,10)
    }
  ]

  function printProductData(data)
  {
    console.log("i am inside the app.js");
    console.log(data);
  }
  return (
    <div>
       {/* to add the newproduct  */}
        <NewProduct  printProduct={printProductData}/>    
        <Products items={product} />
       
    </div>
   
  );
}

export default App;
