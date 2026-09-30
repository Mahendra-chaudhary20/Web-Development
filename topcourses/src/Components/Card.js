import "./Card.css";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Card({course,likedCourses,setLikedCourses}) {
    

  

    function clickHandler(){
        // to handle the click on heart button
        if(likedCourses.includes(course.id))
        {
            // means already liked hua hai
            // now remove from the likedCourses
            setLikedCourses((prev)=> prev.filter((cid)=> cid!== course.id)); 
            toast.warning("Likes removed");
        }
        else{
            // not already liked
            // insert in the likedCourses
            if(likedCourses.length ==0)
            {
                setLikedCourses([course.id]);
                
            }
            else{
                 
            setLikedCourses(prev => [...prev,course.id]);   
            
            }
            toast.success('Liked successfully');
        }
    }
  return (
    <div className="card">

      <div className="image-container">
        <img
          src={course.image.url}
          alt={course.title}
          className="course-image"
        />

        <button className="like-btn" onClick={clickHandler}>
          
          {/* depend upon whether it is clicked or not */
             
             likedCourses.includes(course.id) ? (<FcLike/>):(<FcLikePlaceholder/>)
          }
        </button>
      </div>

      <div className="card-content">
        <p className="card-title">{course.title}</p>
        <p className="card-description">
             {course.description.length > 100
            ? course.description.substring(0, 100) + "..."
            : course.description}
        </p>
      </div>

    </div>
  );
}

export default Card;