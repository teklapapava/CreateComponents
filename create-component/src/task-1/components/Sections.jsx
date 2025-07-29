import HeroSection from './HeroSection'; 
import FeaturesSection from './FeaturesSection';
import BlogPosts from './BlogPosts';
import Testimonials from './Testimonials';
import Sidebar from './Sidebar';

import styles from "./Sections.module.css";


function MainContents(){
    return(
        <main>
        {/* Hero Section */}
          <HeroSection /> 


        {/* Features Section */}
            <FeaturesSection />


        {/* Blog Posts */}
            <BlogPosts />



        {/* Testimonials */}
          <Testimonials />


        {/* Sidebar/About */}
            <Sidebar/>
      </main>
    )
}

export default MainContents;