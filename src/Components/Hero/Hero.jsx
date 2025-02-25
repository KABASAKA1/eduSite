import React from 'react'
import './Hero.css'
import dark_arrow from '../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="text">
                <h1>Biz sizin için en iyisini hazırladık</h1>
                <p>Her öğrenci bizim için bir kar tanesidir . O kar tanelerinin bilime , deneye , fene , mühendisliğe , atomlara ve yıldızlara değmesi dileğiyle ...</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
            </div>


        </div>
    )
}

export default Hero