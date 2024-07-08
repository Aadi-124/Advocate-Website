
import { useEffect } from 'react';
import './Design.css';
import './Responsive.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Sample(){

    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);

    return (
        <>
            <div className='sample_main_container'>

                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-in"></div>
                <div className='sample_container' data-aos="fade-right"></div>
                <div className='sample_container' data-aos="fade-left"></div>
                <div className='sample_container' data-aos="fade-down"></div>
                <div className='sample_container' data-aos="fade-up"></div>
                <div className='sample_container' data-aos="fade-right"></div>

            </div>        
        </>
    );
}