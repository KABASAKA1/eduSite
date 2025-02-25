import React from 'react'
import './About.css'
import about_img from '../assets/about.png'
import play_icon from '../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} onClick={() => { setPlayState(true); }} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNİVERSITY</h3>
                <h2>Bugün Yarının Liderlerinin Günü</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem temporibus doloremque voluptates explicabo, asperiores illum, pariatur quae repellendus adipisci corrupti molestiae aut ullam modi alias veritatis voluptate officiis deserunt numquam!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius similique id incidunt odio eaque consequuntur!</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum adipisci non distinctio corporis omnis impedit laudantium ad veniam itaque. Veritatis ipsum doloremque quia accusantium consectetur!</p>

            </div>


        </div>
    )
}

export default About