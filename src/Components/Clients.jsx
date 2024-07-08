import './Design.css';
import './Responsive.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.png';
import 'aos/dist/aos.css';

export default function Clients(){
    return(
        <>
            <div className="clients_main_container">
                <div className="clients_container client_heading" data-aos="fade-left">
                    <u>My Clients</u>
                </div>

                <div className="clients_container clients_card_container">
                    <div className="client_card" data-aos="fade-left">
                        <div className="client_image">
                                <img className='client_image' src={img1} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-right">
                        <div className="client_image">
                                <img className='client_image' src={img2} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-down">
                        <div className="client_image">
                                <img className='client_image' src={img3} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-up">
                        <div className="client_image">
                                <img className='client_image' src={img5} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-left">
                        <div className="client_image">
                                <img className='client_image' src={img1} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-right">
                        <div className="client_image">
                                <img className='client_image' src={img3} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                    <div className="client_card" data-aos="fade-down">
                        <div className="client_image">
                                <img className='client_image' src={img1} alt="" />
                        </div>

                        <div className="client_description">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis excepturi totam assumenda eum consectetur tenetur voluptates corrupti dolore corporis vero.
                        </div>

                    </div>
                  
                </div>

            </div>
        </>
    );
}