import React from "react";
import '../../css/Dashboard/drawer.css';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import { useNavigate } from "react-router-dom";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import Blogs from '../../images/assets/Blogs.png';
import blogYellow from '../../images/assets/blog-yellow.png';
import Videos from '../../images/assets/Videos.png'

export default function DrawerMynt({ height, display }) {
    const navigate = useNavigate()
    const location = window.location.pathname;

    return (
        <>
            {display !== 'none' && <div className="dashboard-drawer-section" style={{ height: height }}>
                <div className="dashboard-fields-container">
                    <div className="dashboard-single-links" onClick={() => navigate('/myntUniversity/faqs')}>
                        <QuizOutlinedIcon style={location === '/myntUniversity/faqs' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/myntUniversity/faqs' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">FAQ's</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/myntUniversity/blogs')}>
                        <img
                            src={location === '/myntUniversity/blogs'
                                ? blogYellow
                                : Blogs}
                            alt='blog-logo'
                            // style={location === '/myntUniversity/blogs' ? { color: '#ECB92B' } : { color: 'gray' }}
                            style={{ paddingLeft: '3px' }}
                            width={23} height={20} />
                        <span style={location === '/myntUniversity/blogs' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Blogs</span>
                    </div>
                    <div className="dashboard-single-links" onClick={() => navigate('/myntUniversity/videoClips')}>
                        <VideoLibraryOutlinedIcon style={location === '/myntUniversity/videoClips' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        <span style={location === '/myntUniversity/videoClips' ? { color: 'black' } : { color: 'gray' }} className="link-dashboard">Video Clips</span>
                    </div>

                </div>

            </div>}
            <div className="bottom-fixed-navbar-container">
                <div className="bottom-navbar-section">
                    <div className="main-navbar-section" onClick={() => navigate('/myntUniversity/faqs')}>
                        <div style={{ margin: 'auto' }}>
                            <QuizOutlinedIcon style={location === '/myntUniversity/faqs' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>FAQ's</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/myntUniversity/blogs')}>
                        <div style={{ margin: 'auto' }}>
                            <BookOutlinedIcon style={location === '/myntUniversity/blogs' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Blogs</span>
                    </div>
                    <div className="main-navbar-section" onClick={() => navigate('/myntUniversity/videoClips')}>
                        <div style={{ margin: 'auto' }}>
                            <VideoLibraryOutlinedIcon style={location === '/myntUniversity/videoClips' ? { color: '#ECB92B' } : { color: 'gray' }} width={20} height={20} />
                        </div>
                        <span style={{ fontSize: '10px', color: '#777777' }}>Video Clips</span>
                    </div>

                </div>
            </div>
        </>
    )
}