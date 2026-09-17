import "./Cards.css";
import Card from "./Card";
import {useState} from 'react';

function Cards({courses,category}) {


    const [likedCourses, setLikedCourses] = useState([]);
  let allCourses=[];

  const getCourses=()=>{
    if(category=='All')
    {
        Object.values(courses).forEach((type)=>{
      type.forEach((course)=>{
        allCourses.push(course);
      });
    });
    return allCourses;

    }
    else{
        // return only the choosen category part
        return courses[category];
    }
    
  };

  return (
    <div className="cards-container">
      {getCourses().map((course)=>(
        <Card key={course.id} 
        course={course} 
        likedCourses={likedCourses}
        setLikedCourses={setLikedCourses} />
      ))}
    </div>
  );
}

export default Cards;