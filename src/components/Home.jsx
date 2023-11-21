import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";


const Home = () => {
  return (
    <>
       <div className='home'>
       <main>
            <h1>InnovateTechSolutions.</h1>
            <p>Solution to all your problems</p>
      </main>
   </div>


   <div className="home2">
   <img src={vg} alt="graphics" />
     <div>
          <p> We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>



     </div>
   </div>
    
    <div className="home3" id='about'>
  <div>
       <h1>Who we are?</h1>
         <p>Embracing cutting-edge technologies,
       we strive to revolutionize solutions for modern challenges. 
       Our relentless pursuit of innovation enables us to craft intuitive and efficient tech-driven experiences.
       Leveraging advanced methodologies, we optimize user interactions while ensuring seamless functionality across diverse platforms. 
       With a commitment to excellence, we transcend limitations, delivering transformative solutions that redefine industry standards.
       Our dedication to pushing boundaries underscores our mission to empower users with seamless, adaptive, 
       and secure technological advancements</p>
  </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s",
          }}>
             <AiFillAmazonCircle />
             <p>Amazon</p>
          </div>
          <div style={{
            animationDelay:"0.5s",
          }}>
             <AiFillGoogleCircle />
             <p>Google</p>
          </div>
          <div style={{
            animationDelay:"0.7s",
          }}>
             <AiFillInstagram />
             <p>Instagram</p>
          </div>
          <div style={{
            animationDelay:"1s",
          }}>
             <AiFillYoutube />
             <p>Youtube</p>
          </div>

        </article>
      </div>
      

     
    </div>
    
    
    
    </>
  )
}

export default Home