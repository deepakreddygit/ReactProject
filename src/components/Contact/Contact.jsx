import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* leftside */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We are ready to help you by providing the best services. <br/> We believe a good place to live can make your life better</span>


                    <div className="flexColStart contactModes">
                        {/* firstrow */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart details"> 
                                        <span >Call</span><span className='secondaryText'>021 123 456 </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* secondmode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart details"> 
                                        <span >Chat</span><span className='secondaryText'>021 123 456 </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>

                        {/* second row */}
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart details"> 
                                        <span >Video Call</span><span className='secondaryText'>021 123 456 </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>

                            {/* secondmode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart details"> 
                                        <span >Message</span><span className='secondaryText'>021 123 456 </span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* rightside */}
                <div className="c-right">
                    <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact