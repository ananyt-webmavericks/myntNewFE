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
        name: "- Dhumil Javeri, Founder at Klassroom",
        position: 'VP at Goldman Sachs',
        head: 'Transparency & Seamless Process',
        description: JSON.stringify("‘Our experience with the Mynt platform was nothing short of amazing. The platform's transparency and seamless process made it easy for us to focus on our business while they handled the fundraising part.We were able to raise capital in a matter of weeks and couldn't be happier with the results.")
    },
    {
        id: 2,
        avatar: Avatar,
        name: '- Mayank, Founder of Ezyschooling ',
        position: 'Director at Magnetic Fields',
        head: 'Gain New Customers',
        description: JSON.stringify("For any business that is looking to gain new customers and raise funds simultaneously. I highly recommend the Mynt platform.")
    },
    {
        id: 3,
        avatar: Avatar,
        name: '- SAN NETWORK FOUNDER',
        position: 'Executive Director at Princeton University ',
        head: 'Powerful Community',
        description: JSON.stringify("We raised funds through SAN in the past and were glad to see them along with Meter launch Mynt. The community that these networks bring are of great value add to any entrepreneur looking to raise capital and grow their reach.")
    },
]

export default function FounderAboutTeamCarousal() {
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