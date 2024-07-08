
import './Design.css';
import './Responsive.css';
import 'aos/dist/aos.css';
import img from '../assets/img5.png';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Swal from 'sweetalert2';
export default function Contact(){


    const callPop = () =>{
        Swal.fire("My Phone No: +919403389357");
    }
    const emailPop = () =>{
        Swal.fire("My Email: samidhanage@gmail.com");
    }
    const whatsappPop = () =>{
        Swal.fire("My Whatsapp No: +919403389357");
    }

    return(
        <>  
            <div className="contact_main_container">
                <div className="contact_container contact_image_container" data-aos="fade-up">
                    <img src={img} className='contact_image' />
                    <p className='contact_description1'>repellendus. Adipisci, eligendi? Voluptatem ipsum voluptates laboriosam velit ipsam quis, minus dolor aspernatur?</p>
                </div>

                <div className="contact_container contact_icon_container">
                    <div className='contact_subcontainer contact_icons' data-aos="fade-left">
                        <div className='contact_icon' onClick={()=>{callPop()}}>
                            <CallIcon style={{color:"rgb(0, 170, 255)",fontSize:"40px"}}/>
                        </div>
                        <div className='contact_icon_description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, esse.
                        </div>
                    </div>
                    <div className='contact_subcontainer contact_icons' data-aos="fade-left">
                        <a href="https://www.instagram.com/samidhanage?igsh=NHMyYzA3dzRlNzh4" target='_blank'><div className='contact_icon' >
                            <InstagramIcon style={{color:"rgb(217, 0, 255)",fontSize:"40px"}}/>
                        </div></a>
                        <div className='contact_icon_description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, esse.
                        </div>
                    </div>
                    <div className='contact_subcontainer contact_icons' data-aos="fade-right">
                        <div className='contact_icon' onClick={()=>{whatsappPop()}}>
                            <WhatsAppIcon style={{color:"green",fontSize:"40px"}}/>
                        </div>
                        <div className='contact_icon_description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, esse.
                        </div>
                    </div>
                    <div className='contact_subcontainer contact_icons' data-aos="fade-down">
                        <div className='contact_icon'>
                            < EmailIcon style={{color:"red",fontSize:"40px"}} onClick={()=>{emailPop()}}/>
                        </div>
                        <div className='contact_icon_description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, esse.
                        </div>
                    </div>
                </div>
                <div className="contact_container contact_description2" data-aos="fade-up">
                    You can also Directly visit to my office<br />
                    Location:Ravinagar Shivaji Commercial
                </div>
            </div>

        </>
    );
}