
import './Design.css';
import './Responsive.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import Swal from 'sweetalert2';

export default function Footer() {

    const callPop = () =>{
        Swal.fire("My Phone No: +919403389357");
    }
    const emailPop = () =>{
        Swal.fire("My Email: samidhanage@gmail.com");
    }
    const whatsappPop = () =>{
        Swal.fire("My Whatsapp No: +919403389357");
    }


    return (
        <>
            <footer className="footer">
                <div className="footerMainDiv">
                    <div className="footerSubContainer footerListContainer">

                        <div class="footerService footerSubSubContainer">
                            <h3 className='footerServiceHeading'>Services</h3>
                                <a href="#">Web design</a>
                                <a href="#">Development</a>
                                <a href="#">Hosting</a>
                        </div>
                        <div class="footerSubSubContainer footerAction" >
                            <h3 className='footerServiceHeading'>Action</h3>
                                <a href="#">Company</a>
                                <a href="#">Team</a>
                                <a href="#">Carrer</a>
                        </div>

                    </div>


                    <div className="footerSubContainer footerInfoContainer">
                        <div className="footerHeading">SAMIDHA NAGE</div>
                        <div className="footerDescription"><center>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veniam temporibus magni architecto! Esse nisi optio harum veniam blanditiis perferendis id repudiandae.</center></div>
                    </div>


                    <div className="footerSubContainer footerIcons">
                      <a onClick={()=>{whatsappPop()}}>  <div className="footerIconw footerIconsSubContainer"><WhatsAppIcon style={{color:"green"}}/></div></a>
                      <a href="https://www.instagram.com/samidhanage?igsh=NHMyYzA3dzRlNzh4" target='_blank'> <div className="footerIconi footerIconsSubContainer"><InstagramIcon style={{color:"#e401e8"}}/></div></a>
                      <a onClick={()=>{callPop()}}> <div className="footerIconc footerIconsSubContainer"><CallIcon style={{color:"rgb(0, 170, 255)"}}/></div></a>
                      <a onClick={()=>{emailPop()}}> <div className="footerIcone footerIconsSubContainer"><EmailIcon style={{color:"red"}}/></div></a>
                    </div>

                    <div className="footerSubContainer">
                        SAMIDHA NAGE
                    </div>
                </div>
            </footer>
        </>
    );
}