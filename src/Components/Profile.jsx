
import './Design.css';
import './Responsive.css';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import bgimg from '../assets/profile_background.avif';
import img1 from '../assets/img2.jpg';
export default function Profile(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return(
        <>
            <div className="profile_main_container">
                    <div className='profile_info_container' data-aos="fade-right">
                        <div className='profile_info_subcontainer profile_heading'>Adv. Samidha Nage
                            <p className='profile_subheading'>L.L.B, M.A, Coun. & Psy</p>
                        </div>
                        <div className='profile_description profile_info_subcontainer'>
                        As a dedicated advocate with a multifaceted background in law (L.L.B) and psychology (M.A, Coun. & Psy), I leverage my legal expertise to build strong cases and advocate zealously for clients, while also drawing on my understanding of human behavior to provide empathetic support, navigate their needs and concerns, and craft effective communication strategies. This unique combination allows me to not only fight for clients' rights but also guide them through legal challenges with compassion and understanding.
                        </div>
                            <div className='profile_button profile_info_subcontainer'>
                                <button class="button-71" role="button">Show Certification</button>
                            </div>     
                    </div>

                    <div className='profile_image_container' data-aos="fade-left">
                        <img className='profile_image' src={img1} alt="" />
                    </div>
            </div>        
        </>
    );
}