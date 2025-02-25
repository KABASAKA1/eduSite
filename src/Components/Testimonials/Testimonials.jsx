import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Maria Brandon 1</h3>
                                    <span>Ankara , TURKEY</span>
                                </div>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, maiores est qui deserunt praesentium sint, sequi totam, vel labore dignissimos voluptates aut.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Faruk Güney 2</h3>
                                    <span>İzmir , Turkey</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fuga tempore, quam quaerat eaque doloribus maxime dolorem, autem tenetur, commodi perferendis.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Alian Jahnson 3</h3>
                                    <span>California , USA</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nobis commodi? Dolore consectetur ipsum ab voluptates unde, quibusdam reiciendis quidem laborum error sapiente fuga rerum esse aliquam ullam recusandae.
                            </p>
                        </div>
                    </li><li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Ahmet Ulusoy 4</h3>
                                    <span>Londra , UK</span>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores, fugiat amet voluptate laboriosam praesentium autem deleniti corporis consectetur!
                            </p>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Testimonials