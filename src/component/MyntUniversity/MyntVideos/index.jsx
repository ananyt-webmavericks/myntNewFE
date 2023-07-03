import React, { useState, useEffect } from "react";
import "../../../css/MyntUniversity/myntFaq.css";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Card } from "@mui/material";
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

const data = [
  {
    id: 1,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/O5KCB2p6SB8",
    heading:
      '"6 Essential Steps for Student Startup Success: From Coding to Launching a Winning Product!"',
    episode: "Clip 01",
    subHeading:
      'From Code to Launch: The Ultimate Guide to Becoming a Successful Startup Founder" - Learn the essential skills, tips, and tricks for building a successful startup from scratch. Discover how to design, code, launch, and market your product effectively.',
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 2,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/Lb4IcGF5iTQ",
    heading:
      '"Inside the Mind of Mark Zuckerberg: The Art of Building the Future with Facebook"',
    episode: "Clip 02",
    subHeading:
      'Building the Future: Insights from Mark Zuckerberg on Starting Facebook and Making Big Bets" - Hear from the tech titan himself on the hardest part of building a successful company, how to decide on what to bet, and how to scale to unprecedented heights in the world of tech entrepreneurship',
    buttonUrl: "",
    image: ImageBlog2,
  },
  {
    id: 3,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/Th8JoIan4dg",
    heading:
      '"From Idea to Investment: A Step-by-Step Guide to Evaluating Your Startup"',
    episode: "Clip 03",
    subHeading:
      "Learn the most common mistakes to avoid and questions to ask when evaluating your startup idea. Discover how to generate promising startup ideas and turn them into successful investments",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 4,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/ZtfTOuSHGg8",
    heading: '"The X-Factor: What Sets the Top 10% of Founders Apart?"',
    episode: "Clip 04",
    subHeading:
      "Explore the traits that make some founders stand out from the rest, including their exceptional execution skills, formidability, clear communication, internal motivation, and unique ideas on their list. ",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 5,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/QRZ_l7cVzzU",
    heading: '"From Idea to Launch: Building a Minimum Viable Product"',
    episode: "Clip 05",
    subHeading:
      "Learn how to successfully launch a minimum viable product (MVP) by setting clear goals and implementing pre-launch strategies. Overcome common fears of founders and turn your MVP into a successful business ",

    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 6,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/zBUhQPPS9AY",
    heading: '"Demystifying Startup Fundraising: A Step-by-Step Guide"',
    episode: "Clip 06",
    subHeading:
      "Learn the ins and outs of startup fundraising, from seed funding to series A, B, and beyond. Discover how to create a successful fundraising strategy and navigate the complex world of venture capital.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 7,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/oWZbWzAyHAE",
    heading:
      '"Pricing for Profit: How to Build a Sustainable Startup Business Model"',
    episode: "Clip 07",
    subHeading:
      "Discover the best strategies for pricing your startup's products or services to maximize profitability and create a sustainable business model. Learn from experts in the field and avoid common pricing pitfalls.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 8,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/u36A-YTxiOw",
    heading: '"Launching Your Startup: Strategies for Success"',
    episode: "Clip 08",
    subHeading:
      'Learn the best time to launch your startup, how to create a one-sentence pitch, and the different types of launches to choose from. Discover the "X for Y" construction and other effective strategies for a successful launch.',
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 9,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/tJLafC6zhbk",
    heading:
      '"From Investment to Innovation: An Interview with Accel Partners"',
    episode: "Clip 09",
    subHeading:
      "Discover how Accel Partners sees itself as more than just an investor, but a co-creator of the companies they work with. Learn about their approach to innovation and what sets them apart in the world of venture capital.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 10,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/xv2XJ98MHMU",
    heading:
      '"The Power of Accessibility for Startups: Why Being Available Matters"',
    episode: "Clip 10",
    subHeading:
      "Accessibility is a significant advantage for startups seeking to grow and succeed. This video explores why being available to your customers and clients can help build trust, foster loyalty, and create a competitive edge. Discover how accessibility can benefit your startup and strategies for making yourself more available to your audience.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 11,
    youtubeUrl:
      "https://www.youtube-nocookie.com/embed/Dgmmje5WHWA?feature=share",
    heading:
      '"Startup Killers: Avoiding Critical Mistakes for Long-Term Success"',
    episode: "Clip 11",
    subHeading:
      "Startups face many challenges on the road to success, but some mistakes can be fatal. This video highlights the common mistakes that can kill a startup, including fake product marketing, co-founder conflicts, ordinary vs. extraordinary ideas, and slow product development. Gain insights on how to avoid these mistakes and set your startup up for long-term success.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 12,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/LBC16jhiwak",
    heading:
      '"Managing Startup Finances: Avoiding Mistakes and Maximizing Resources"',
    episode: "Clip 12",
    subHeading:
      "Managing finances is a critical aspect of startup success, but it can be daunting for many entrepreneurs. This guide offers insights on avoiding common mistakes, such as not understanding your numbers or undervaluing expenses, and outsourcing responsibilities to maximize resources. Learn practical tips for managing startup finances effectively and setting your business up for long-term growth.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 13,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/DOtCl5PU8F0",
    heading:
      '"Evaluating Startups: A Comprehensive Guide to Hypothesis-Driven Assessment"',
    episode: "Clip 13",
    subHeading:
      "Evaluating a startup requires a thorough understanding of their hypothesis, problem, solution, insights, and product 10x. This guide provides a comprehensive framework for hypothesis-driven assessment, with tips and best practices for each stage of the evaluation process. Learn how to evaluate startups with confidence and make informed investment decisions.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 14,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/T9ikpoF2GH0",
    heading:
      '"Startup Growth Strategies: How to Get Users and Boost Retention"',
    episode: "Clip 14",
    subHeading:
      "Growth is critical for startup success, but achieving it can be challenging. This guide explores effective growth strategies, from acquiring users through marketing and sales tactics to retaining them through engagement and customer service. Learn how to scale your startup and drive sustainable growth for long-term success.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 15,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/ZoKLofsp8u0",
    heading: '"Insights from Working with 600+ Y Combinator Startups"',
    episode: "Clip 15",
    subHeading:
      "Y Combinator is one of the world's most prestigious startup accelerators, having supported the growth of successful startups like Airbnb, Dropbox, and Stripe. In this video, learn the lessons and insights gained from working with over 600 YC startups, including their common characteristics, challenges, and keys to success ",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 16,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/hQC5O3WTmuo",
    heading:
      '"The Real Potential of Generative AI: Breakthroughs and Future Opportunities"',
    episode: "Clip 16",
    subHeading:
      "Generative AI has the potential to revolutionize industries, from art and music to medicine and finance. This video explores the breakthroughs in generative AI and its real-world applications, including the development of OpenAI's Language Model (LLM). Discover the future of generative AI and how it is creating new opportunities for developers and industries alike.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 17,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/EiRnSjcVIqk",
    heading:
      '"Inside Silicon Valley: Exploring the Most Powerful Startup Community in the World"',
    episode: "Clip 17",
    subHeading:
      "Silicon Valley has become synonymous with startup success. This video takes viewers on a journey through the epicenter of the global startup ecosystem, exploring the culture, innovation, and entrepreneurship that have made Silicon Valley the most powerful startup community in the world.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 18,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/GoJ_8jMy8PM",
    heading: '"5 Proven Strategies to Grow Your Brand"',
    episode: "Clip 18",
    subHeading:
      "Building a strong brand is crucial for business success. In this video, we share five proven strategies to grow your brand, including leveraging social media, building a brand community, creating valuable content, developing strategic partnerships, and investing in brand storytelling. These strategies can help businesses of all sizes and industries to increase their brand awareness and drive growth.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 19,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/mhTjRQh5UaM",
    heading:
      '"The Entrepreneurial Mindset: Key Traits for Running a Successful Business"',
    episode: "Clip 19",
    subHeading:
      "Building a successful business requires more than just a great idea. It takes an entrepreneurial mindset that encompasses traits such as creativity, perseverance, adaptability, and risk-taking. This guide explores the key characteristics of an entrepreneurial mindset and how entrepreneurs can develop these traits to succeed in business.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 20,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/BXUIaOMVIqc",
    heading: '"Valuing Your Startup: Strategies and Approaches"',
    episode: "Clip 20",
    subHeading:
      "Valuing a startup can be challenging as it is a complex process that involves analyzing various factors. This guide offers insights into different valuation methods, such as the cost approach, market approach, and income approach, and tips for entrepreneurs on how to determine their startup's worth.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 21,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/JmqrfgEQEmU",
    heading:
      '"Convertible vs. Non-Convertible Debentures: What\'s the Difference?"',
    episode: "Clip 21",
    subHeading:
      "Debentures are a popular financing option for companies. Convertible debentures can be converted into equity shares, while non-convertible debentures cannot. This guide explores the differences between these two types of debentures, their advantages, and how companies can choose the right one for their financing needs.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 22,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/7Dk6iGjUygQ",
    heading:
      '"Stock Appreciation Rights (SARs): A Powerful Incentive for Employees"',
    episode: "Clip 22",
    subHeading:
      "Stock Appreciation Rights (SARs) are a form of equity compensation that grants employees the right to receive a payout based on the appreciation of the company's stock value. This guide explores how SARs work, their benefits, and how companies can use them to incentivize and retain top talent.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 23,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/3EwyQ7YhlIg",
    heading: '"SARS and Phantom Stocks: A Guide for Business Owners"',
    episode: "Clip 23",
    subHeading:
      "Stock Appreciation Rights (SARs) and Phantom Stocks are alternative compensation options that offer employees a stake in the company's growth without actual ownership. This video explains how these programs work, their benefits, and how business owners can use them to attract and retain top talent.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 24,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/URYh1ivkKL8",
    heading:
      '"Understanding Investor Preference for Convertible Preferred Stock (CCPS)"',
    episode: "Clip 24",
    subHeading:
      "Convertible preferred stock (CCPS) is a popular investment vehicle that combines the benefits of debt and equity. This short video explores why investors prefer CCPS over other types of securities, its advantages, and how it can benefit startups seeking funding.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 25,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/AoUPDU4b0_4",
    heading:
      '"Convertible Notes: A Popular Funding Option for Early-Stage Startups"',
    episode: "Clip 25",
    subHeading:
      "Convertible notes are a flexible and popular way for early-stage startups to raise capital. This short video explains how convertible notes work, their benefits and drawbacks, and why they are a popular funding option for startups seeking to grow their business.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 26,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/Kwiu95BHZkA",
    heading: '"Retail Investors Unite: How to Invest in Startups',
    episode: "Clip 26",
    subHeading:
      "Investing in startups was once reserved for wealthy investors. Now, retail investors can participate through crowdfunding platforms, angel investing groups, and equity crowdfunding. This guide explores the options and risks associated with investing in startups as a retail investor.",

    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 27,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/vtybtcAJtSw",
    heading: '"CSOP Community Stock Options: Empowering Employees with Equity"',
    episode: "Clip 27",
    subHeading:
      "CSOP Community Stock Options is a program that enables companies to offer equity to all employees, regardless of rank or position. This initiative promotes employee ownership and aligns incentives between employees and the company, fostering a culture of innovation and long-term growth.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 28,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/93LLYkn8wls",
    heading: '"Mastering Fundraising for Startups: Strategies and Tips"',
    episode: "Clip 28",
    subHeading:
      "Fundraising is a critical aspect of startup success. Entrepreneurs must navigate various funding options, pitch to investors effectively, and build relationships to secure funding. This guide offers insights and tips to help startups master the art of fundraising and secure the resources they need to thrive.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 29,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/CIA9ikESXYI",
    heading: '"Small Business vs Startups: What\'s the Difference?"',
    episode: "Clip 29",
    subHeading:
      "Small businesses and startups may seem similar, but they have distinct differences in their goals, funding, growth potential, and risk tolerance. Small businesses aim for steady growth and profitability, while startups focus on rapid growth and disruptive innovation. Understanding these differences can help entrepreneurs choose the right path for their business.",
    buttonUrl: "",
    image: ImageBlog1,
  },
  {
    id: 30,
    youtubeUrl: "https://www.youtube-nocookie.com/embed/IdwYMfM2QMs",
    heading:
      '"Unlocking Insider Tips: Secrets Your Service Provider Doesn\'t Want You to Know"',
    episode: "Clip 30",
    subHeading:
      "Discover the hidden secrets your service provider won't reveal! Our experts spill the beans on everything from saving money on your bills to getting better service. With these insider tips, you'll have the upper hand and be able to make the most out of your service experience. Don't miss out on this exclusive knowledge – watch now!",
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
  const [embedVideo, setEmbedVideo] = React.useState(null);

  const handleClickOpen = (url, id) => {
    setEmbedVideo(url);
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
        <span className="get-started-heading startup">
          Explore video clips below to uncover the world of startups
        </span>
      </div>
      <div className="blogs-container-mynt">
        <Grid className="video-grid-wrapper" container spacing={gridxsMainFirst}>
          {data.map((item, index) => {
            return (
              <Card item xs={gridxsMainSecond} key={index}>
                <div className="video-des-image-container">
                  <div
                    style={{
                      width: "inherit",
                      height: "160px",
                      position: "absolute",
                      top: "0px",
                      background: "rgba(0,0,0,0.001);",
                    }}
                    onClick={() => handleClickOpen(item.youtubeUrl)}
                  ></div>
                  <iframe
                    width="100%"
                    height="160px"
                    id={`embed-youtube`}
                    src={`${item.youtubeUrl}?controls=0&modestbranding=1&autohide=1&playsinline=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div
                    style={{
                      padding: "1em",
                      display: "flex",
                      flexDirection:'column',
                      justifyContent: "space-between",
                      height: 360
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "gray",
                          marginBottom: "10px",
                        }}
                      >
                        {item.episode}
                      </span> <br/>
                      <span style={{ fontSize: "15px", marginBottom: "10px" }}>
                        {item.heading}
                      </span> <br/>
                      <span style={{ display:'block',marginTop: 10, fontSize: "12px", marginBottom: "10px" }}>
                        {item.subHeading}
                      </span>
                    </div>
                    <Button
                      onClick={() => handleClickOpen(item.youtubeUrl)}
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
              </Card>
            );
          })}
        </Grid>
      </div>
      <Dialog
        open={open && embedVideo}
        TransitionComponent={Transition}
        onClose={handleClose}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogContent> */}
        <iframe
          width="inherit"
          height="360px"
          src={`${embedVideo}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* <YoutubeEmbed
            width={"100%"}
            height={"357px"}
            embedId={"https://www.youtube-nocookie.com/embed/2Pid2s4m1MM"}
          /> */}
        {/* </DialogContent> */}
      </Dialog>
    </div>
  );
}
