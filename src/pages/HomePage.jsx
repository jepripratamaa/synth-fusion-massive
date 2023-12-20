import React from "react"

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import avatar3 from '../assets/avatar3.png'
import avatar4 from '../assets/avatar4.png'
import avatar5 from '../assets/avatar5.png'

import subsimg from '../assets/subsimg.png'

import { community } from "../data"
import CourseComponent from "../components/CourseComponent"

const HomePage = () => {
    return (
        // Hero
        <div className="homestyle">
            <div id="hero">
                <div className="container h-100">
                <div className="row h-100">
                    <div className="col-md-6 hero-tagline" >
                        <h3 data-aos="fade-down" data-aos-duration='1000' >IMPROVE YOUR MUSIC CAREER</h3>
                        <h1 data-aos="fade-left" data-aos-duration='1000' >SYNTH FUSION ACADEMY</h1>
                        <p data-aos="fade-right" data-aos-duration='1000' >Website that provides music learning materials. Starting from mixing and mastering, Soundbanks, Presets and Samples, and much more.</p>
                        <button data-aos="fade-up" data-aos-duration='1000'  className="button-lg-primary">Find Out More</button>
                    </div>
                </div>
                </div>
            </div>

            {/* Courses */}
            <div  className="p-course overflow-hidden">
                <div className="container py-5">
                    <div className="container text-left">
                        <div className="row">
                            <div data-aos="fade-up" className="col">
                                <h1 className="pc">Popular Courses</h1>
                                <h3 className="pc2 py-3">FIND ALL POPULAR COURSES AND TUTORIALS</h3>
                            </div>
                            <div data-aos="fade-up" className="col-2 my-4">
                                <a href="/course" className="text-white">More Courses</a>
                            </div>
                        </div>
                    </div>
                    <CourseComponent/>
                </div>
            </div>

            {/* avatarlogo */}
            <div className="d-flex justify-content-around align-items-center bar">
                    <img src={avatar1} alt=""/>
                    <img src={avatar2} alt=""/>
                    <img src={avatar3} alt=""/>
                    <img src={avatar4} alt=""/>
                    <img src={avatar5} alt=""/>
            </div>

            {/* community & event */}
            <div className="community-home">
                <div className="container py-5">
                    <h1 data-aos="fade-down" className="text-left pc">Community & events</h1>
                        <h3 data-aos="fade-down" className="text-left pc2 py-3">FIND YOUR NEW CONNECTION WITH OTHER PRODUCERS AND MUSICIAN</h3>
                    <div className="row row-cols-1 row-cols-md-3 g-5 py-5">  
                        {community.map((community) => {
                            return(
                                
                                <div className="col" key={community.id} >
                                    <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100" className="card border-0">
                                        <img src={community.image} className="img-card" alt="..."/>
                                        <div className="card-body">
                                            <h5 style={{color: "#BDBDBD"}} className="card-title">{community.date}</h5>
                                            <h5 className="card-title">{community.title}</h5>
                                            <p className="card-text">{community.desc}</p>
                                            <div className="card-text ">
                                                <a href="/communityPage">Read More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>  
                </div>
            </div>
            
            {/* about */}
            <div id="about">
                <div className="container h-100">
                    <div className="row h-100 d-flex justify-content-around">
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="col-md-6 about-tagline my-auto" >
                        <h1>About Us</h1>
                        <p>Synth Fusion academy is a website that provides an interactive learning platform such as video tutorials, articles and webinars on aspects of music production ranging from recording techniques, audio editing to song publishing. We also provide a learning community where users can interact with each other, such as sharing music projects, providing feedback to each other online via discord and websites as well as providing an audiovisual library containing various resources, such as music samples, recordings, and ready-to-use music production projects</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="400" className="col-md-6 about-element my-auto">
                            <p>Easy To Learn</p>
                            <p>Find New Friends</p>
                            <p>Cool Events</p> 
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* newsletter */}
            <div className="subs-home">
                <div className="subs container py-5 text-center">
                        <div className="subs">
                            <img src={subsimg} className="img-fluid" alt="" />
                            <div className="subs-inputan">
                                <h3>Subscribe to Newsletter</h3>
                                <input className="input-subs" type="text" placeholder="Your email"/>
                                <button className="button-subs">Subscribe</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        
    )
}

export default HomePage