import { Box } from "@mui/material";
import React from "react";
import Map from '../../images/assets/map.png';
import Avatar from '../../images/assets/avatar.png';
import Item from "../Item";
import Avatar2 from '../../images/assets/avatar2.png';
import { useRef } from "react";
import Carousel from 'react-elastic-carousel'
import styles from '../../css/Home/aboutTeamCarousel.css'

const data = [
    { id: 1, avatar: Avatar, name: 'Priyanshi Pandey', position: 'VP at Goldman Sachs', head: 'Game-Changing Startups Now Accessible', description: '“Mynt is making investing in highly vetted and game-changing startups not only accessible but easy as well.' },
    { id: 2, avatar: Avatar, name: 'Vicky', position: 'Director at Magnetic Fields', head: 'Diversified Subscription Portfolio', description: "The platform provided me with a diversified Subscription portfolio, giving me access to a range of Subscription opportunities I wouldn't have otherwise found." },
    { id: 3, avatar: Avatar, name: 'Tithi Chattopadhyay,', position: 'Executive Director at Princeton University ', head: 'Due Diligence Measures', description: "The due diligence process and investor protection measures in place gave me peace of mind and confidence in my Subscriptions." },
    { id: 4, avatar: Avatar, name: 'Kavikrut', position: ' CGO at OYO', head: 'Subscription Tracking Made Autonomous ', description: 'The user-friendly interface and straightforward Subscription process made it easy for me to invest and track my Subscriptions.' },
    {id:5 , avatar:Avatar , name:"Harshit Vyas" , position:"CBO Pepper Content" , head:"Transparency And Communication " , description:"I was impressed by the level of transparency and communication from the platform and the startups I invested in."},
]

export default function AboutTeamCarousel() {
    const carouselRef = useRef(null);
    let resetTimeout;

    return (
        <Box sx={{ minHeight: 'fit-content', marginTop: '90px', marginBottom: '10px' }}>
            <div className="team-container">
                <img className="team-bg-img" src={Map} alt="Map" />
                <div style={{ position: 'absolute', top: '15%', width: '100%' }}>
                    <Carousel
                        enableAutoPlay={true}
                        showArrows={true}
                        enableMouseSwipe={true}
                        pagination={true}
                        itemsToShow={1}
                        ref={carouselRef}
                        onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout)
                            if (index + 1 === data.length) {
                                if (carouselRef?.current?.goTo) {
                                    resetTimeout = setTimeout(() => {
                                        if (carouselRef?.current?.goTo) {
                                            carouselRef.current.goTo(0)
                                        }
                                    }, 3000)
                                }
                            }
                        }}
                    >
                        {data.map((item, index) => {
                            return (
                                <Item key={index} className='company-image'>
                                    <div className="about-container">
                                        <span className="section-head-about">{item.head}</span>
                                        <span className="section-description-about">{item.description}</span>
                                        <div className="section-profile-about">
                                            <img className="section-image-about" src={item.avatar} ></img>
                                            <div className="section-profile-info-about">
                                                <span className="profile-name-about">{item.name}</span>
                                                <span className="profile-position-about">{item.position}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Item>
                            )
                        })}


                    </Carousel>
                    <img className="new-avatar-static" src={Avatar2} witdth={100} height={100} alt="avatar"></img>
                </div>
            </div>
        </Box>
    )
}