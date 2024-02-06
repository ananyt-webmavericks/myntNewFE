import React from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import "../../../css/FounderDrawer/Dashboard/Highlights.css";
import RightArrow from "./../../../images/assets/RightArrow.png";
import { Container } from "@mui/system";
import { useState } from "react";
import { useFormik } from "formik";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import hightLightValSchema from "../../../Validations/hightLightValSchema";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Highlights = ({ tabChangeFn }) => {
  const navigate = useNavigate();
  const { campaignDetail } = useSelector(state => state.campaignDetail)
  const [pitchData, setPitchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isEditLoading, setEditIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [editHighLight, setEditHighLight] = useState("");
  const [addmoreHighlights, setAddmoreHighlights] = useState(false);

  const EditBankFields = (id, index) => {
    const newList = pitchData.filter((i) => i.id === id);
    console.log("newList", newList[0].title);
    setIsEdit(id);
    setEditHighLight(newList[0].title);
  };

  const handleSubmit = (id) => {
    setEditIsLoading(true);
    setIsEdit(null);

    const val = {
      highlight_id: id,
      title: editHighLight,
      campaign_id: pitchData[0].campaign_id,
    };
    CompanyServices.updateHighlights(val).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        getHighLights();
        setEditIsLoading(false);
        toast.success("FAQ updated successfully!", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "green",
            color: "#fff",
          },
        });
      } else {
        setEditIsLoading(false);

        toast.error("Something went wrong, please try again later", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
          },
        });
      }
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      highlight1: pitchData?.highlight1 ? pitchData?.highlight1 : "",
      highlight2: pitchData?.highlight2 ? pitchData?.highlight2 : "",
      highlight3: pitchData?.highlight3 ? pitchData?.highlight3 : "",
      highlight4: pitchData?.highlight4 ? pitchData?.highlight4 : "",
    },

    validationSchema: hightLightValSchema,

    onSubmit: (values) => {
      if (isNextClicked) {
        setIsLoading(true);
      }
      if (isSaveClicked) {
        setIsSaveLoading(true);
      }
      console.log(values);
      const formattedValues = changeFormat(values);
      CompanyServices.createHighlights(formattedValues).then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setIsLoading(false);
          setIsSaveLoading(false);

          toast.success("Highlights added successfully!", {
            position: "top-right",
            style: {
              borderRadius: "3px",
              background: "green",
              color: "#fff",
            },
          });
          getHighLights();
          formik.handleReset();
          setTimeout(() => {
            if (isNextClicked) {
              tabChangeFn(0, 5);
            }
          }, 1000);
          // setTimeout(() => {
          //   if (isSaveClicked) {
          //     navigate("/dashboard-founder/e-signin");
          //   } else {
          //     tabChangeFn(0, 5);
          //   }
          // }, 1000);
        }
      });
    },
  });

  const getHighLights = () => {
    CompanyServices.getHighlights(sessionStorage.getItem("campaign_id")).then(
      (res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          console.log(res.data);
          setPitchData(res.data);
        }
      }
    );
  };

  useEffect(() => {
    return getHighLights();
  }, []);

  const changeFormat = (obj) => {
    let DATA = {
      campaign_id: sessionStorage.getItem("campaign_id"),
      highlights: [
        {
          title: obj.highlight1,
          description: obj.highlight1,
          highlight_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4A0Nd6JZU6hNd_KzXJj--2roprNVkGaOww&usqp=CAU",
        },
        {
          title: obj.highlight2,
          description: obj.highlight2,
          highlight_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4A0Nd6JZU6hNd_KzXJj--2roprNVkGaOww&usqp=CAU",
        },
        {
          title: obj.highlight3,
          description: obj.highlight3,
          highlight_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4A0Nd6JZU6hNd_KzXJj--2roprNVkGaOww&usqp=CAU",
        },
        {
          title: obj.highlight4,
          description: obj.highlight4,
          highlight_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4A0Nd6JZU6hNd_KzXJj--2roprNVkGaOww&usqp=CAU",
        },
      ],
    };
    return DATA;
  };

  return (
    <Box
      className="highlights-wrapper"
      sx={{
        marginTop: 4,
        marginLeft: 2,
        paddingRight: "10%",
        marginRight: "30px",
      }}
    >
      <h3>Highlights</h3>

      <Typography
        style={{ paddingTop: 10, color: "#777777" }}
        className="raise-with-mint-desc highlight-desc"
      >
        Mention the top highlights about your startup that you want the
        investors to know about.
      </Typography>

      {/* 
            <div style={{ marginTop: '3rem' }} className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 2.8,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 1</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>List the top unique selling points of your startup</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 2</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Tell us a little about your company</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 3</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</Typography>
                        </Card>

                        <Card className='parent-of-card'>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h4>Highlights 4</h4>
                                <img style={{ paddingTop: '10px' }} src={RightArrow} alt="right-arrow" width={60} />
                            </div>
                            <Typography className='tell-us-litt-more'>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</Typography>
                        </Card>

                    </Box>
                </Grid>
            </div>

           */}

      {!pitchData.length || addmoreHighlights ? (
        <form onSubmit={formik.handleSubmit}>
          {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
          <div style={{ height: "80px" }}>
            <input
              name="highlight1"
              value={formik.values.highlight1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us about your Achievements and Highlights"
              type="text"
              className="inp-enter-name"
              disabled={campaignDetail?.status !== 'CREATED'}
            />
            {/* </CustomWidthTooltip> */}
            {formik.touched.highlight1 && (
              <div className="raise-err-text" style={{ marginTop: "2px" }}>
                {formik.errors.highlight1}
              </div>
            )}
          </div>
          {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
          <div style={{ height: "80px" }}>
            <input
              name="highlight2"
              value={formik.values.highlight2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us about your Sales and Revenue"
              type="text"
              className="inp-enter-name"
              disabled={campaignDetail?.status !== 'CREATED'}
            />
            {/* </CustomWidthTooltip> */}
            {formik.touched.highlight2 && (
              <div className="raise-err-text" style={{ marginTop: "2px" }}>
                {formik.errors.highlight2}
              </div>
            )}
          </div>
          {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
          <div style={{ height: "80px" }}>
            <input
              name="highlight3"
              value={formik.values.highlight3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us about your Customer Feedback"
              type="text"
              className="inp-enter-name"
              disabled={campaignDetail?.status !== 'CREATED'}
            />
            {/* </CustomWidthTooltip> */}
            {formik.touched.highlight3 && (
              <div className="raise-err-text" style={{ marginTop: "2px" }}>
                {formik.errors.highlight3}
              </div>
            )}
          </div>
          {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
          <div style={{ height: "80px" }}>
            <input
              name="highlight4"
              value={formik.values.highlight4}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us about your USP"
              type="text"
              className="inp-enter-name"
              disabled={campaignDetail?.status !== 'CREATED'}
            />
            {/* </CustomWidthTooltip> */}
            {formik.touched.highlight4 && (
              <div className="raise-err-text" style={{ marginTop: "2px" }}>
                {formik.errors.highlight4}
              </div>
            )}
          </div>
          {formik.touched.pitch && (
            <div className="raise-err-text" style={{ marginTop: "2px" }}>
              {formik.errors.pitch}
            </div>
          )}
          {/* <div className='founder-appln-submit-parent'>
                    <button type='submit' className='founder-appln-submit-button'>Save</button>
                </div> */}
          <div className="faqs-button-parent">
            <Button
              disabled={campaignDetail?.status !== 'CREATED'}
              onClick={() => {
                formik.submitForm();
                setSavedClicked(true);
              }}
              // type="submit"
              style={{ margin: "20px", color: "black" }}
              variant="contained"
              className="comp-prof-button1"
            >
              {isSaveLoading && isSaveClicked ? (
                <CircularProgress
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ) : (
                <span style={{ color: 'black' }}>Save</span>
              )}
            </Button>
            <Button
              onClick={() => {
                formik.submitForm();
                setNextClicked(true);
              }}
              disabled={campaignDetail?.status !== 'CREATED'}
              // type="submit"
              style={{ margin: "20px", marginRight: 0 }}
              variant="contained"
              className="comp-prof-button2 highlights-next-btn"
            >
              {isLoading && isNextClicked ? (
                <CircularProgress
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ) : (
                <span style={{ color: 'white' }}>Next</span>
              )}
            </Button>
          </div>
        </form>
      ) : null}

      {pitchData.length ? (
        <div className="existing-highlights" style={{ marginTop: "25px" }}>
          <div
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
              // width: '76%'
            }}
            className="existed-highlight-tabs"
          >
            <h3 className="faqs-title">Added Highlights</h3>
            {addmoreHighlights ? null : (
              <button
                disabled={campaignDetail?.status !== 'CREATED'}
                onClick={() => setAddmoreHighlights(true)}
                type="submit"
                className="addMore"
              >
                Add More Highlights
              </button>
            )}
          </div>
          <div style={{ marginTop: "20px" }}>
            {pitchData?.map((item, index) => (
              <div style={{ display: "flex", gap: 15, alignItems: "center" }}>
                {isEdit === item.id ? (
                  <input
                    value={editHighLight}
                    onChange={(e) => setEditHighLight(e.target.value)}
                    className="inp-enter-name"
                  />
                ) : (
                  <input
                    disabled
                    value={item.title}
                    className="inp-enter-name"
                  />
                )}
                {isEdit === item.id ? (
                  <button
                    disabled={isEditLoading ? true : false}
                    onClick={() => {
                      handleSubmit(item.id);
                    }}
                    style={{
                      cursor: "pointer",
                      right: 100,
                      padding: "5px 10px",
                      borderRadius: "5px",
                      border: "0px solid",
                      background: "black",
                      height: "30px",
                      color: "white",
                    }}
                  >
                    {isEditLoading ? (
                      <CircularProgress
                        style={{
                          color: "White",
                          fontSize: 10,
                          width: 20,
                          height: 20,
                        }}
                      />
                    ) : (
                      "Save"
                    )}
                  </button>
                ) : (
                  <>
                    {campaignDetail?.status === 'CREATED' &&
                      <button
                        onClick={() => {
                          EditBankFields(item.id, index);
                        }}
                        style={{
                          cursor: "pointer",
                          right: 100,
                          padding: "5px 10px",
                          borderRadius: "5px",
                          border: "0px solid",
                          background: "black",
                          height: "30px",
                          color: "white",
                        }}
                      >
                        Edit
                      </button>
                    }
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default Highlights;
