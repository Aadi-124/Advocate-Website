

import './Design.css';
import './Responsive.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
export default function About(){
    return(
        <>  
            <div className='about'>
            <div className='about_main_container'>

                    <div className='about_container about_heading_container' data-aos="fade-left">
                        ABOUT ME
                    </div>

                    <div className='about_container about_description_container' data-aos="fade-right">
My passion lies in advocating for others, and my journey has led me to develop a unique skillset. Combining my legal background (L.L.B) with in-depth knowledge of human behavior (M.A, Coun. & Psy), I strive to be a well-rounded advocate. This allows me to not only represent clients effectively in legal matters but also provide them with insightful support and a deep understanding of their circumstances. My approach prioritizes clear communication, strategic negotiation, and unwavering empathy, ensuring clients feel empowered and supported throughout the legal process.<br /><br /><br />
                    <button class="button-28" role="button"  data-aos="fade-up" >Read More</button>
                    </div>
            </div>
                </div>       
        </>
    );
}