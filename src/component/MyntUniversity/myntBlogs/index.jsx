import React , {useState , useEffect} from "react";
import '../../../css/MyntUniversity/myntFaq.css'
import SearchIcon from '../../../images/assets/search.svg'
import LeftArrow from '../../../images/assets/leftArrow.svg'
import { useNavigate } from "react-router-dom";
import { Grid,Card } from "@mui/material";
import Image1 from '../../../images/myntblogs/image1.png';
import Image2 from '../../../images/myntblogs/image2.png';
import Image3 from '../../../images/myntblogs/image3.png';
import blogs from "./blogs.json";
// const data = [
//     {id:1 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'8th jan 2023' , image:Image1},
//     {id:2 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'15th jan 2023' , image:Image2},
//     {id:3 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'20th jan 2023' , image:Image3},
//     {id:4 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'5th jan 2023' , image:Image1},
//     {id:5 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'16th feb 2023' , image:Image2},
//     {id:6 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'25th feb 2023' , image:Image3},
//     {id:7 , heading:'The Impact of the 2023 Budget on the Indian Startup Ecosystem' , date:'3th mar 2023' , image:Image1},
//     {id:8 , heading:'Fixed Income Instruments: Help You Reach Your Financial Goals' , date:'16th feb 2023' , image:Image2},
//     {id:9 , heading:'Exploring Non-convertible Debentures (NCD Subscription): What You Need to know' , date:'23th mar 2023' , image:Image3},
// ]
export default function MyntBlogsMain() {
    const navigate = useNavigate()
    const [activeBtn, setActiveBtn] = useState(1)
    const [gridxsMainFirst, setGridxsMainFirst] = useState(3)
    const [gridxsMainSecond, setGridxsMainSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 1350) {
            setGridxsMainFirst(2)
            setGridxsMainSecond(6)
        }
        if (ratio < 670) {
            setGridxsMainFirst(1)
            setGridxsMainSecond(12)
        }
       

    }, [])
    return (
        <div className="faq-university-container">
            <div style={{ display: 'grid' }}>
                <span className="get-started-heading startup">Browse by Topic</span>
            </div>
                <div className="button-container-liveDeals blogs" style={{justifyContent:'flex-start',display:'flex'}}>
                        <div className="active-btn-container blogs" style={activeBtn === 1 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(1)}>
                            All
                        </div>
                        <div className="active-btn-container blogs" style={activeBtn === 2 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(2)}>
                            Invest
                        </div>
                        <div className="active-btn-container blogs" style={activeBtn === 3 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(3)}>
                            Product
                        </div>
                        <div className="active-btn-container blogs" style={activeBtn === 4 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(4)}>
                            Startup
                        </div>
                        <div className="active-btn-container blogs" style={activeBtn === 5 ? { background: 'black', color: 'white' } : { background: '#F4F4F4', color: 'black' }} onClick={() => setActiveBtn(5)}>
                            Finance
                        </div>
                    </div>
                    <div className="blogs-container-mynt">
                <Grid className="video-grid-wrapper" container spacing={gridxsMainFirst}>
                {blogs.map((item , index)=>{
                    return(
                        <Card item xs={gridxsMainSecond} key={index}>
                            <div onClick={()=>navigate(`/myntUniversity/blogs/detail/${item.id}`)} className="blogs-des-image-container">
                                <div className="mynt-text-image-blogs" >Mynt</div>
                                <img src={item?.image ? item?.image : Image1} style={{width:'inherit' , height:'192px'}}></img>
                                <div style={{padding:'1em'  }}>
                                <span style={{fontSize:'15px'}}>{item?.title ?? ""}</span>
                                <span style={{fontSize:'12px' , position:'absolute' , bottom:'1em' , left:'1em'}} >{item?.date ?? ""}</span>
                                </div>
                            </div>
                        </Card>
                    )
                })}
                </Grid>
                    </div>
          
            
        </div>
    )
}
