import Hero from "./Hero";
import Programs from './Programs';
import Trainers from './Trainers';
import Testimonials from './Testimonials';
import Sidebar from './Sidebar';

import styles from "./MainSections.module.css";

function MainSection(){
    return(
        <main>
        {/* Hero */} 
        <Hero/>


        {/* Programs */}
        <Programs/>


        {/* Trainers */}
        <Trainers/>


        {/* Testimonials */}
        <Testimonials/>


        {/* Sidebar/About */}
        <Sidebar/>
      </main>
    );
}

export default MainSection;