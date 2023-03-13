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
    {
        id: 1,
        avatar: Avatar,
        name: " Priyanshi Pandey, VP at Goldman Sachs",
        position: 'VP at Goldman Sachs',
        head: 'Game-Changing Startups Now Accessible',
        description: JSON.stringify('Mynt is making investing in highly vetted and game-changing startups not only accessible but easy as well.')
    },
    {
        id: 2,
        avatar: Avatar,
        name: ' Vicky, Director at Magnetic Fields  ',
        position: 'Director at Magnetic Fields',
        head: 'Diversified Investment Portfolio',
        description: JSON.stringify("The platform provided me with a diversified investment portfolio, giving me access to a range of investment opportunities I wouldn't have otherwise found.")
    },
    {
        id: 3,
        avatar: Avatar,
        name: ' Tithi Chattopadhyay, Executive Director at Princeton University ',
        position: 'Executive Director at Princeton University ',
        head: 'Due Diligence Measures',
        description: JSON.stringify("The due diligence process and investor protection measures in place gave me peace of mind and confidence in my investments.")
    },
    {
        id: 4,
        avatar: Avatar,
        name: ' Kavikrut, CGO at OYO',
        position: 'Executive Director at Princeton University ',
        head: 'Investment Tracking Made Autonomous',
        description: JSON.stringify("The user-friendly interface and straightforward investment process made it easy for me to invest and track my investments.")
    },
    {
        id: 5,
        avatar: Avatar,
        name: ' Harshit Vyas, CBO Pepper Content',
        position: 'Executive Director at Princeton University ',
        head: 'Transparency And Communication ',
        description: JSON.stringify("I was impressed by the level of transparency and communication from the platform and the startups I invested in.")
    },
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
                        enableAutoPlay={false}
                        showArrows={true}
                        autoPlaySpeed={3000}
                        easing="ease"
                        transitionMs={1000}
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