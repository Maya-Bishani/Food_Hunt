import './Hero.css'
import { useState } from 'react'
 function Hero (){
    
    const [isToggled , Setistoggled]= useState(false);

    
    const [opacity, setOpacity] = useState(0); 
    const [opacity2, setOpacity2] = useState(1);
    const [textcolor , setTextColor]=useState('#fea14');
    const [buttonColor, setButtonColor] = useState('#fea14');
    const buttonImages=['/Images/navicon.png' ,'/Images/navicon2.png'];
    const arrowImages =['/Images/arrow1.png' , '/Images/arrow2.png'];
    const [isGreen, setIsGreen] = useState(false);
    
         
        const handleButtonClick = () => {
           // setOpacity(1);
            Setistoggled(prev => !prev);
            
            setButtonColor('#5cac0e')
            setTextColor('#5cac0e');
            setIsGreen(false);
            if (textcolor === '#5cac0e'){
                setTextColor('#fea150')
            }
            else {
                setTextColor('#5cac0e')
            }
            if (opacity === 0) {
                setOpacity(1);
                setButtonColor('#5cac0e'); 
                setTextColor('#5cac0e');
                
            } else {
            
                setOpacity(0);
                setButtonColor('#fea150'); 
                setTextColor('#fea150'); 
                
                
            }
          
        } 
      
    return<>
    <div className="MB-Container-hero">
    
        <div className="MB-Container-hero-child1">
           <h1 className='MB-Headinghero' style={{color:textcolor}}> Delicious</h1>
          <h1 className='MB-Headingparagraph'>Quench the Hunger</h1>
          <p className='MB-paraghraphhero'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ipsum, auctor quis sagittis felis risus, 
        a odio. Amet ante nulla sem mauris. Sollicitudin ultrices enim quam.</p>
          <a href='#' target='-blank'><button   className='MB-Buttoun-Hero' style={{ backgroundColor :buttonColor }}> Quench Now</button></a>
      </div>
      <div className="MB-Container-hero-child2">
      <img className='MB-background1 '  src='./Images/background.png' alt='photo'/>
    <img className='MB-background2 '  style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/background2.png' alt='photo'/>
      <img className='MB-img1 img-fluid'  src='./Images/image2.png' alt='photo'/>
      <img className='MB-img11  img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }}  src='./Images/image11.png' alt='photo'/>
      <img className='MB-img2 img-fluid' style={{ opacity: opacity2, transition: 'opacity 0.5s ease-in-out' }}  src={arrowImages[isToggled ? 1 : 0]} alt='photo'/>
      <img className='MB-img22 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }}  src={arrowImages[isToggled ? 1 : 0]} alt='photo'/>
      <img className='MB-img9' src='./Images/image9.png' alt='photo'/>
    
      <img className='MB-img99 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/image6.png' alt='photo'/>
      <img className='MB-img6 img-fluid' src='./Images/image6.png' alt='photo'/>
      <img className='MB-img66 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/basic.png' alt='photo'/>
      <img className='MB-img5 img-fluid' src='./Images/basic.png' alt='photo'/>
      <img className='MB-img55 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/image4.png' alt='photo'/>
      <img className='MB-img4 img-fluid' src='./Images/image4.png' alt='photo'/>
      <img className='MB-img44 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/image3.png' alt='photo'/>

      <img className='MB-img3 img-fluid' src='./Images/image3.png' alt='photo'/>
      <img className='MB-img33 img-fluid' style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }} src='./Images/image332.png' alt='photo'/>

     <button onClick={handleButtonClick} className='MB-Buttoun1'> <img className='MB-img-arrow img-fluid' src={buttonImages[isToggled ? 1 : 0]} alt='photo'/></button>
     <button onClick={handleButtonClick} className='MB-Buttoun2'> <img className='MB-img-arrow img-fluid' src={buttonImages[isToggled ? 1 : 0]} alt='photo'/></button>
      </div>
    </div>
   
    </>
    
}
export default Hero;