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
        avatar: 'https://rb.gy/g7xzt',
        name: "Shishir Pratap Singh, Professor at Rutgers University",
        position: 'Professor at Rutgers University',
        head: 'Game-Changing Startups Now Accessible',
        description: JSON.stringify("Mynt has simplified the process of investing in promising startups that have undergone rigorous vetting and have the potential to revolutionize their industries. It's now both accessible and effortless.")
    },
    {
        id: 2,
        avatar: 'https://media.licdn.com/dms/image/C4D03AQGfL3tdWCveJw/profile-displayphoto-shrink_800_800/0/1645490059111?e=2147483647&v=beta&t=ShgQUmldlj-lVEZ3cvzBJcg-p7rYgnTzFtOXouvBOEE',
        name: 'Mr. Simon Murthaty , CEO at Ocean Blue Boating Pvt. Ltd.',
        position: 'CEO at Ocean Blue Boating Pvt. Ltd.',
        head: 'Diversified Startup Portfolio',
        description: JSON.stringify("The platform provided me with a diversified portfolio, giving me access to a range of startup opportunities I wouldn't have otherwise found."
)
    },
    {
        id: 3,
        avatar: 'https://rb.gy/1vr4f',
        name: 'Tithi Chattopadhyay, Executive Director at Princeton University  ',
        position: 'Executive Director at Princeton University ',
        head: 'Impeccable Due Diligence Measures',
        description: JSON.stringify("After examining the portfolio companies of the networks that have supported Mynt, I am confident that the startups they will bring in will be of unparalleled quality."
        )
    },
    {
        id: 4,
        avatar: 'https://rb.gy/if7kl',
        name: ' Harshit Vyas, CBO Pepper Content',
        position: 'CBO Pepper Content',
        head: 'Transparency And Communication',
        description: JSON.stringify("Mynt provides us with a platform that meets our investment needs by offering high levels of transparency and by carefully selecting and onboarding only verified startups")
    },
    {
        id: 5,
        avatar: Avatar,
        name: 'Shishir Pratap Singh, Professor at Rutgers University',
        position: 'Professor at Rutgers University',
        head: 'Game-Changing Startups Now Accessible',
        description: JSON.stringify("Mynt has simplified the process of investing in promising startups that have undergone rigorous vetting and have the potential to revolutionize their industries. It's now both accessible and effortles")
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