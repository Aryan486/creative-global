import '../css/home.css';
import Title from "../assets/images/title.png"
import ServicesImage from "../assets/images/section1a.png"
import Work from "../assets/images/section1Work.png"
import JoinUs from "../assets/images/section1Join.png"
import ContactUs from "../assets/images/section1Contact.png"
import Cipla from "../assets/images/cipla.png"
import Decathlon from "../assets/images/decathlon.png"
import Du from "../assets/images/du.png"
import Dubai from "../assets/images/dubai.png"
import Exide from "../assets/images/exide.png"
import IndianOil from "../assets/images/indianOil.png"
import Itc from "../assets/images/itc.png"
import Jio from "../assets/images/jio.png"
import Jcb from "../assets/images/jcb.png"
import Mercedes from "../assets/images/mercedes.png"
import SwachBharat from "../assets/images/swachhbharat.png"
import Lenovo from "../assets/images/lenovo.png"
import Welspun from "../assets/images/welspun.png"
import SeedWorks from "../assets/images/seedWorks.png"
import Rectangle from "../assets/images/section4Rectangle.png"

export default function Home() {

  const arr1=[IndianOil,Itc,Jio,Jcb,Mercedes,SwachBharat,Du]
  const arr2=[Cipla,Decathlon,Exide,Welspun,SeedWorks,Dubai]

  return (
    <div id='scroll'>
      <div className='flexbox-container'>
        <div className="title" data-animate-on-scroll>
          <div style={{display:"flex",flexDirection:"row"}}>
              <h4 className="title-creati">Creatiwe</h4>
              {/*<img className="title-icon" alt="Title" style={{margin:"-2% 0 0 2%",height:"8vh",width:"11vh"}} src={Title} title='Creatiwe Global' />*/}
            </div>
            <h4 className="title-global">Global</h4>
          </div>
          <div className="section-1">
            <div className='section-1-left' data-animate-on-scroll="true">
              <img className="section-1-card" style={{cursor:"pointer"}} title="Our Services" alt="Our services" src={ServicesImage} />
              <h6 className="section-1-card-title">See our services</h6>
            </div>
            <div className='section-1-right'>
              <div style={{display:"flex",flexDirection:"row",height:"50%",width:"100%"}}>
                <div className='section-1-right-upper'>
                  <img className="service-section-right" style={{cursor:"pointer"}} title="Work with us" alt="Work with us" src={Work} />
                  <h6 className="section-1-card-title">Work</h6>
                </div>
                <div className="section-1-right-upper">
                  <img className="service-section-right" style={{cursor:"pointer"}} title="Join Us" alt="Join Us" src={JoinUs} />
                  <h6 className="section-1-card-title">Join Us</h6>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"row",height:"50%",width:"100%"}}>
                <div className="section-1-right-lower">
                  <img className="service-section-right-lower" style={{cursor:"pointer"}} title="Contact Us" alt="Contact Us" src={ContactUs} />
                  <h6 className="section-1-card-title">Contact Us</h6>
                </div>
              </div>
            </div>
          </div>
          <div className='section-2'>
            <div className='section-2-left'>
              <h1 className='section-2-left-text'>We take on the ocean's greatest challenges...</h1>
            </div>
            <div className='section-2-right'>
              <h1 className='section-2-right-text'>developing <span className='section-2-span'>creative</span> solutions and powerful partnerships to make them happen.</h1>
            </div>
          </div>
          <div className='section-3'>
            <h1 className='section-3-sub-text'>Who we've been working with</h1>
            <h1 className='section-3-text'>Awesome Partners</h1>
            <div className='section-3-list-container'>
            <marquee>
              <div className='section-3-list-1'>
              {arr1.map((ele)=>{
                const key=ele
                return(
                  <div key={key} className="section-3-card">
                      <img className='section-3-card-images' src={ele} alt="Our partner" title="Our partner" />
                  </div>
                )
              })}
              </div>
            </marquee>
            <marquee direction="right">
              <div className='section-3-list-1'>
              {arr2.map((ele)=>{
                const key=ele
                return(
                  <div key={key} className="section-3-card">
                      <img className='section-3-card-images' src={ele} alt="Our partner" title="Our partner" />
                  </div>
                )
              })}
              <div className="section-3-card-temp">
                  <img className='section-3-card-images-temp' src={Lenovo} alt="Our partner" title="Our partner" />
              </div>
              </div>
            </marquee>
            </div>
          </div>
          <div className='section-4'>
            <img src={Rectangle} alt="Rectangle" className='section-4-rectangle' />
            
          </div>
      </div>
    </div>
  );
}