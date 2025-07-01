import Logo from '../images/Glowynz-Logo.png';
import HomepagePicture from '../images/Tita.png';
import AboutUsPicture from '../images/glowynz-bg.jpg';
import GlutaServices from '../images/gluta-services.jpg';
import FacialServices from '../images/facial-services.jpg';
import HairRemovelServices from '../images/hair-removal-services.jpg';
import NailServices from '../images/nail-services.jpg';
import FacebookLogo from '../images/facebook-logo.png';
import InstagramLogo from '../images/instagram-logo.png'
import PhoneLogo from '../images/phone-logo.png';
import EmailLogo from '../images/email-logo.png';
import Manicure from '../images/manicure.jpg';
import NailServicesPicture from '../images/manicure-choices.jpg';
import Lovey from '../images/gwen.jpg';
import TitaBulen from '../images/tita-bulen.jpg';
import ManicureHands from '../images/tita-hands.jpeg';
import POV from '../images/POV.jpeg';
import { GoogleMap } from '@react-google-maps/api';
import '../css/Home.css';

function Home() {

    const date = new Date().getFullYear();

    return (
        <>
            <section className='home'>
                <div className='homepage-container'>
                    <div className='homepage-picture-container'>
                        <img src={HomepagePicture} alt="Homepage Picture" className='homepage-picture' />
                    </div>
                    <div className='homepage-text-button'>
                        <div className='homepage-text-container'>
                            <h1 className='homepage-text'>
                                READY FOR <br />
                                A NEW & <br />
                                BETTER <br />
                                YOU?
                            </h1>
                        </div>
                        <div className='homepage-button-container'>
                            <button className='homepage-button'>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="services-container autoShow">
                    <div className="services-h1-container">
                        <h1 className="services-text">OUR SERVICES</h1>
                    </div>
                    <div className="services-pictures-container">
                        <div className='services-picture'>
                            <img src={GlutaServices} alt="Gluta Services" className='services-img' />
                        </div>
                        <div className='services-picture'>
                            <img src={FacialServices} alt="Facial Services" className='services-img' />
                        </div>
                        <div className='services-picture'>
                            <img src={HairRemovelServices} alt="Hair Removal Services" className='services-img' />
                        </div>
                        <div className='services-picture'>
                            <img src={NailServices} alt="Nail Services" className='services-img' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='about' id="about">
                <div className='about-container'>
                    <div className='about-h1-container'>
                        <h1 className='about-text'>ABOUT US</h1>
                    </div>
                    <div className="about-body">
                        <div className='about-body-container'>
                            <div className="about-picture-container">
                                <img src={AboutUsPicture} alt="Inside Glowynz" className='about-picture' />
                            </div>

                            <div className="about-text-container">
                                <p className='about-text'>
                                    We are located in the heart of Auckland, dedicated to providing exceptional beauty and wellness services. Our team is passionate about helping you look and feel your best in a relaxing and welcoming environment.
                                </p>
                            </div>
                        </div>

                        <h1 className='h1-galleria'>Glowynz's Galleria</h1>

                        <div className="about-pictures autoShow">

                            <div className='about-manicure-div'>
                                <img src={Manicure} alt="Manicure" className='about-manicure-pic galleria' />
                                <p className="manicure">Best manicure you'll ever experience</p>
                            </div>

                            <div className="manicure-hands-div">
                                <img src={ManicureHands} alt="Manicure Hands" className='about-manicure-hands galleria'/>
                            </div>
                            <div className='about-nail-services-div'>
                                <img src={NailServicesPicture} alt="Nail Services" className='about-nail-services galleria' />
                                <p className="nails">Pick a color</p>
                            </div>

                            <div className="tita-div">
                                <img src={TitaBulen} alt="Tita Bulen" className='tita-bulen galleria' />
                                <p className="tita-text">YUN OH</p>
                            </div>

                            <div className="POV-div">
                                <img src={POV} alt="POV" className='POV-pic galleria ' />
                            </div>

                            <div className="love-div">
                                <img src={Lovey} alt="Love" className='love-img galleria' />
                                <p className="crush">Wala lang crush ko eh</p>
                            </div>
                        </div>

                        <div className="about-map">
                            <div className="about-h1">
                                <h3>
                                    Visit us
                                </h3>
                            </div>
                            <div className='map-container'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.613868840667!2d121.0976959758746!3d14.621058976573861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b838f0465d21%3A0x3b00bfc4faf30e13!2sMidtown%20Subdivision%202%2C%207%20Kurtante%2C%20Marikina%2C%201801%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1751197462884!5m2!1sen!2sph" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                            <div className="map-location">
                                <p className="map-location-text">
                                    We are located at 7 Kurtante, Marikina City, 1801 Metro Manila
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='footer'>
                <div className="footer-container">
                    <div className='footer-logo-text'>
                        <div className="footer-logo">
                            <img src={Logo} alt="Glowynz Logo" className='footer-logo-img' />
                        </div>
                        <div className="footer-text">
                            <h3 className="footer-text-h3">Glowynz</h3>
                        </div>
                    </div>
                </div>
                <div className='testing'>
                    <div className="test">
                        <div className="follow-contact-div">
                            <div className="footer-online">
                                <div className="footer-h2-logos">
                                    <h4 className='footer-h2'>Follow us on</h4>
                                </div>
                                <div className="online-icons">
                                    <div className="footer-logo">
                                        <img src={FacebookLogo} alt="Facebook Glowynz" />
                                    </div>
                                    <div className="footer-logo">
                                        <img src={InstagramLogo} alt="Instagram Glowynz" />
                                    </div>
                                </div>
                            </div>

                            <div className="footer-contact">
                                <div className='footer-h2-contact'>
                                    <h4>Contact us</h4>
                                </div>
                                <div className='footer-contact-info'>
                                    <div className='footer-number'>
                                        <img src={PhoneLogo} alt="Phone" />
                                        <p>+639-460-576214</p>
                                    </div>
                                    <div className="footer-email">
                                        <img src={EmailLogo} alt="Email" />
                                        <p>glowynz@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='test2'>
                        <div className='footer-form'>
                            <form action="">
                                <div className="footer-h2">
                                    <h4>Email us what you think</h4>
                                </div>
                                <div className="footer-form-inputs">
                                    <input type="text" name="name" placeholder='Name' />
                                    <input type="email" placeholder="Email" className="footer-input" />
                                    <input type="number" placeholder="Phone number" className="footer-input" />
                                    <input type="text" placeholder="Message" className="footer-input" />
                                </div>
                                <div className='footer-button-container'>
                                    <button type="submit" className="footer-button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>All Rights reserved &copy; {date}</p>
                </div>
            </footer>
        </>
    );
}

export default Home;