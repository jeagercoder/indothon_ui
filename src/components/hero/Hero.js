

import './Hero.css'

const Hero = () => {
    return(
        <>
       
        <div className="box">
            <div className="box__content">
                <div className="hero__text">
                    <h1>INDONESIAN INFOSEC WRITEUP PLATFOM</h1>
                    <p>A collection of awesome write-ups from the best hackers in the indonesia from topics ranging from bug bounties, CTFs, Hack the box walkthroughs, hardware challenges, real-life encounters and everything which can help other enthusiasts learn.</p>
                </div>
                <img src="images/cyber_attack_bro.png" className="hero__img" alt='hero'/>
            </div>
        </div>
      
        </>
    )
}

export default Hero;