import Card from './Card.js';
import './Tours.css';
function Tours({Tour,removeTour}){
    // abhi tour bas aayega ki {tour} wo check karna hai
    return(
       
       <div className='container'>
            <div>
                <h1 className='title'>Plan with Mahendra</h1>
            </div>
            <div className='cards'>
                {
                   Tour.map((data) =>{
                     return <Card key={data.id} {...data} removeTour={removeTour}></Card>;
                   })
                }
            </div>
       </div>
    );
}

export default Tours;