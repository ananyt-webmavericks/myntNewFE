import { Box } from "@mui/material";
import React from "react";
import Map from '../../images/assets/map.png';
import Avatar from '../../images/assets/avatar.png';
import Item from "../Item";
import Avatar2 from '../../images/assets/avatar2.png';
import Carousel from 'react-elastic-carousel'
import styles from '../../css/Home/aboutTeamCarousel.css'
const data = [
    { id: 1, avatar: Avatar, name: 'Kareem Pelletier', position: 'Joe M, CEO at LeadSpyder', head: 'WE’RE GOOD, THANKS', description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis risus, suscipit eget leo et, convallis suscipit velit. Curabitur efficitur, neque ac porttitor consequat, massa quam sollicitudin nisl, “' },
    { id: 2, avatar: Avatar, name: 'Kareem Pelletier', position: 'Joe M, CEO at LeadSpyder', head: 'WE’RE GOOD, THANKS', description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis risus, suscipit eget leo et, convallis suscipit velit. Curabitur efficitur, neque ac porttitor consequat, massa quam sollicitudin nisl, “' },
    { id: 3, avatar: Avatar, name: 'Kareem Pelletier', position: 'Joe M, CEO at LeadSpyder', head: 'WE’RE GOOD, THANKS', description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis risus, suscipit eget leo et, convallis suscipit velit. Curabitur efficitur, neque ac porttitor consequat, massa quam sollicitudin nisl, “' },
    { id: 4, avatar: Avatar, name: 'Kareem Pelletier', position: 'Joe M, CEO at LeadSpyder', head: 'WE’RE GOOD, THANKS', description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis risus, suscipit eget leo et, convallis suscipit velit. Curabitur efficitur, neque ac porttitor consequat, massa quam sollicitudin nisl, “' },

]

export default function AboutTeamCarousel() {

    return (
        <Box sx={{ minHeight: 'fit-content', marginTop: '90px',marginBottom:'10px' }}>
            <div className="team-container">
                <img className="team-bg-img" src={Map} alt="Map"/>
                <div style={{ position: 'absolute', top: '15%', width: '100%' }}>
                    <Carousel
                        enableAutoPlay={false}
                        showArrows={true}
                        enableMouseSwipe={true}
                        pagination={true}
                        itemsToShow={1}

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