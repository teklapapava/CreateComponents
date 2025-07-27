import Hero from "./Hero";
import Courses from './Courses';
import Instructors from './Instructors';
import Reviews from './Reviews';
import About from './About';


function Main(){
    return(    
        <main>
        {/* Hero */}
        <Hero/>


        {/* Courses */}
        <Courses/>


        {/* Instructors */}
        <Instructors/>


        {/* Reviews */}
        <Reviews/>;


        {/* Sidebar/About */}
        <About/>
      </main>
    );
}

export default Main;