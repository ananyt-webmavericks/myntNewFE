import React, { useState, useEffect } from "react";
import "../../../css/MyntUniversity/myntFaq.css";
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Player from "../../../images/assets/Player.png";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import ImageBlog1 from "../../../images/myntblogs/detailblog1.png";
import ImageBlog2 from "../../../images/myntblogs/detailblog2.png";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import YoutubeEmbed from "../../LiveDealsDetails/YouTubeEmbed";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const urlYoutube = [
  { id: 1, youtubeUrl: "https://www.youtube-nocookie.com/embed/zsRQkHuf6v8" },
  { id: 2, youtubeUrl: "https://www.youtube-nocookie.com/embed/UcfLQL-fzLs" },
  { id: 3, youtubeUrl: "https://www.youtube-nocookie.com/embed/2Pid2s4m1MM" },
  { id: 4, youtubeUrl: "https://www.youtube-nocookie.com/embed/Kwiu95BHZkA" },
  { id: 5, youtubeUrl: "https://www.youtube-nocookie.com/embed/677ZtSMr4-4" },
  { id: 6, youtubeUrl: "https://www.youtube-nocookie.com/embed/y0F-SjRWCQ8" },
  { id: 7, youtubeUrl: "https://www.youtube-nocookie.com/embed/F4O6S2yGijU" },
  { id: 8, youtubeUrl: "https://www.youtube-nocookie.com/embed/tt6-aDFrr5Q" },
  { id: 9, youtubeUrl: "https://www.youtube-nocookie.com/embed/JBdSE_dxPWU" },
  { id: 10, youtubeUrl: "https://www.youtube-nocookie.com/embed/o_i7cmMgyiQ" },
  { id: 11, youtubeUrl: "https://www.youtube-nocookie.com/embed/PlFpib3otdM" },
  { id: 12, youtubeUrl: "https://www.youtube-nocookie.com/embed/bp7HOLWPnmo" },
  { id: 13, youtubeUrl: "https://www.youtube-nocookie.com/embed/qScd5pAhGFQ" },
  { id: 14, youtubeUrl: "https://www.youtube-nocookie.com/embed/5ANcRlniybE" },
  { id: 15, youtubeUrl: "https://www.youtube-nocookie.com/embed/jqo7ffEOZjQ" },
  { id: 16, youtubeUrl: "https://www.youtube-nocookie.com/embed/qsfODz8TfsA" },
  { id: 17, youtubeUrl: "https://www.youtube-nocookie.com/embed/A1PwW9CnFBg" },
  { id: 18, youtubeUrl: "https://www.youtube-nocookie.com/embed/-6WBAaHqT8g" },
  { id: 19, youtubeUrl: "https://www.youtube-nocookie.com/embed/aq4GxezOZqc" },
  { id: 20, youtubeUrl: "https://www.youtube-nocookie.com/embed/wvGRmc1UOT4" },
  { id: 21, youtubeUrl: "https://www.youtube-nocookie.com/embed/JALiXJFisBI" },
  { id: 22, youtubeUrl: "https://www.youtube-nocookie.com/embed/SBiJoHcpXMo" },
  { id: 23, youtubeUrl: "https://www.youtube-nocookie.com/embed/0LJV0eDJkdo" },
  { id: 24, youtubeUrl: "https://www.youtube-nocookie.com/embed/pwE7ir90wJs" },
  { id: 25, youtubeUrl: "https://www.youtube-nocookie.com/embed/AoUPDU4b0_4" },
  { id: 26, youtubeUrl: "https://www.youtube-nocookie.com/embed/N2zLcIQkfpo" },
  { id: 27, youtubeUrl: "https://www.youtube-nocookie.com/embed/mFkhNVMF1p8" },
  { id: 28, youtubeUrl: "https://www.youtube-nocookie.com/embed/w9Cyof1Ghyk" },
  { id: 29, youtubeUrl: "https://www.youtube-nocookie.com/embed/gILP48uzb-E" },
  { id: 30, youtubeUrl: "https://www.youtube-nocookie.com/embed/8fhjvWaoRQ4" },
  { id: 31, youtubeUrl: "https://www.youtube-nocookie.com/embed/wQshP97ctcI" },
  { id: 32, youtubeUrl: "https://www.youtube-nocookie.com/embed/RbtTtofbFDM" },
  { id: 33, youtubeUrl: "https://www.youtube-nocookie.com/embed/ayH0XoH9_ww" },
  { id: 34, youtubeUrl: "https://www.youtube-nocookie.com/embed/0yz8Q1-w-Dg" },
];

const data = [
  {
    id: 1,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/zsRQkHuf6v8",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/UcfLQL-fzLs",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog2,
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/2Pid2s4m1MM",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 4,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/Kwiu95BHZkA",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 5,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/677ZtSMr4-4",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 6,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/y0F-SjRWCQ8",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 7,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/F4O6S2yGijU",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 8,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/tt6-aDFrr5Q",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 9,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/JBdSE_dxPWU",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 10,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/o_i7cmMgyiQ",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 11,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/PlFpib3otdM",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 12,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/bp7HOLWPnmo",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 13,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/qScd5pAhGFQ",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 14,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/5ANcRlniybE",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 15,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/jqo7ffEOZjQ",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 16,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/qsfODz8TfsA",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 17,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/A1PwW9CnFBg",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 18,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/-6WBAaHqT8g",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 19,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/aq4GxezOZqc",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 20,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/wvGRmc1UOT4",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 21,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/JALiXJFisBI",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 22,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/SBiJoHcpXMo",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 23,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/0LJV0eDJkdo",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 24,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/pwE7ir90wJs",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 25,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/AoUPDU4b0_4",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 26,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/N2zLcIQkfpo",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 27,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/mFkhNVMF1p8",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 28,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/w9Cyof1Ghyk",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 29,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/gILP48uzb-E",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 30,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/8fhjvWaoRQ4",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 31,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/wQshP97ctcI",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 32,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/RbtTtofbFDM",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 33,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/ayH0XoH9_ww",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 34,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/0yz8Q1-w-Dg",
    heading: "How to be a startup investor",
    episode: "Episode 01",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque",
    buttonUrl: "",
    image: ImageBlog1,
  },
];
export default function MyntVideosMain() {
  const navigate = useNavigate();
  const [gridxsMainFirst, setGridxsMainFirst] = useState(3);
  const [gridxsMainSecond, setGridxsMainSecond] = useState(4);
  const ratio = parseInt(window.innerWidth);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (ratio < 1350) {
      setGridxsMainFirst(2);
      setGridxsMainSecond(6);
    }
    if (ratio < 670) {
      setGridxsMainFirst(1);
      setGridxsMainSecond(12);
    }
  }, []);
  return (
    <div className="faq-university-container">
      <div style={{ display: "grid" }}>
        <span className="get-started-heading startup">Tutorials</span>
      </div>
      <div className="blogs-container-mynt">
        <Grid container spacing={gridxsMainFirst}>
          {data.map((item, index) => {
            return (
              <Grid item xs={gridxsMainSecond} key={index}>
                <div className="blogs-des-image-container">
                  <img
                    onClick={handleClickOpen}
                    src={Player}
                    style={{
                      boxShadow: "0px 0px 40px #0000001A",
                      position: "absolute",
                      left: "45%",
                      top: "20%",
                    }}
                    alt=""
                  />
                  {/* <img
                    src={item.image}
                    style={{ width: "inherit", height: "160px" }}
                  ></img> */}
                  <iframe
                    width="inherit"
                    height="160px"
                    src={item.youtubeUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div style={{ padding: "1em", display: "grid" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "gray",
                        marginBottom: "10px",
                      }}
                    >
                      {item.episode}
                    </span>
                    <span style={{ fontSize: "15px", marginBottom: "10px" }}>
                      {item.heading}
                    </span>
                    <span style={{ fontSize: "12px", marginBottom: "10px" }}>
                      {item.subHeading}
                    </span>
                    <Button
                      onClick={handleClickOpen}
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                        borderRadius: "27px",
                        color: "black",
                        width: "fit-content",
                        background: "#FADF35",
                        "&:hover": { background: "#FADF35" },
                      }}
                      startIcon={<PlayCircleOutlinedIcon />}
                    >
                      Watch video
                    </Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <YoutubeEmbed
            width={"100%"}
            height={"357px"}
            embedId={"https://www.youtube-nocookie.com/embed/2Pid2s4m1MM"}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
