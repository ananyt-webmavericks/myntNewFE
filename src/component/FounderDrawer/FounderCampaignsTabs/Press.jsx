import { Button, Container, Typography } from "@material-ui/core";
import { Box, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import "../../../css/FounderDrawer/Dashboard/Press.css";
import CompanyServices from "../../../service/Company";
import PressValSchema from "../../../Validations/PressValSchema";
import { useNavigate } from "react-router-dom";
import { authAxios } from "../../../service/Auth-header";
import { Base_Url } from "../../../Utils/Configurable";

const Press = ({ tabChangeFn }) => {
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.loginData);
  const [pressData, setPressData] = useState([]);
  const [isPressAdded, setIsPressAdded] = useState(false);
  const [toggle, settoggle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [isUploading, setIsUploading] = useState(false);


  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      company_id: +localStorage.getItem("company_id"),
      title: pressData?.title ? pressData?.title : "",
      link: pressData?.link ? pressData?.link : "",
      description: pressData?.description ? pressData?.description : "",
      banner:
        image1 && image2 && image3
          ? [`${image1}`, `${image2}`, `${image3}`]
          : "",
      // "https://c8.alamy.com/comp/R77EPB/blue-business-logo-template-for-cassette-demo-record-tape-record-facebook-timeline-banner-design-vector-web-banner-background-illustration-R77EPB.jpg",
    },

    validationSchema: PressValSchema,

    onSubmit: (values) => {
      setIsLoading(true);
      console.log("press values", values);
      !isPressAdded
        ? CompanyServices.addPress(values).then((res) => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
              setIsLoading(false);

              toast.success("Press added successfully!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "green",
                  color: "#fff",
                },
              });
              sessionStorage.setItem("is_press_added", true);
              sessionStorage.setItem("press_data", JSON.stringify(res.data));
              settoggle((pre) => !pre);
              setTimeout(() => {
                tabChangeFn(0, 7);
              }, 1000);
            } else {
              setIsLoading(false);

              toast.error("Something went wrong, please try again later", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "red",
                  color: "#fff",
                },
              });
            }
          })
        : CompanyServices.updatePress({
            press_id: pressData?.id,
            ...values,
          }).then((res) => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
              toast.success("Press updated successfully!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "green",
                  color: "#fff",
                },
              });
              sessionStorage.setItem(
                "press_data",
                JSON.stringify(res.data.data)
              );
              settoggle((pre) => !pre);
              setTimeout(() => {
                tabChangeFn(0, 7);
              }, 1000);
            } else {
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
    },
  });

  // function handleFileSelect(event) {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //     if (!image1) {
  //       setImage1(reader.result);
  //     } else if (!image2) {
  //       setImage2(reader.result);
  //     } else if (!image3) {
  //       setImage3(reader.result);
  //     }
  //   };
  // }
  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      setIsUploading(true);
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      if (!image1) {
        setImage1(data.message);
      } else if (!image2) {
        setImage2(data.message);
      } else if (!image3) {
        setImage3(data.message);
      }
      setIsUploading(false);
      return data;
    } catch (error) {
      console.log("Data not found !!");
      setIsUploading(false);
    }
  };

  useEffect(() => {
    CompanyServices.getPressByCompanyID(
      localStorage.getItem("company_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setIsPressAdded(true);
        setPressData(res.data[0]);
      }
    });
  }, [toggle]);
  console.log("image1", image1);
  return (
    <Container
      style={{ padding: "0px 10% 0px 16px ", paddingRight: "10%" }}
      maxWidth="lg"
    >
      <form style={{ marginRight: "30px" }} onSubmit={formik.handleSubmit}>
        <h3>Press</h3>

        <Typography style={{ paddingTop: 10 }} className="press-title-desc">
          Show your reach! Investors are always more inclined towards startups
          that have been covered by the media and are gaining traction.{" "}
        </Typography>

        <input
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="press-input"
          placeholder="Enter your header/title here"
        />
        {formik.touched.title && (
          <div className="raise-err-text">{formik.errors.title}</div>
        )}

        <input
          name="link"
          value={formik.values.link}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          type="text"
          className="press-input"
          placeholder="https://"
        />
        {formik.touched.link && (
          <div className="raise-err-text">{formik.errors.link}</div>
        )}

        <textarea
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="press-textarea"
          id="press-textarea"
          cols="30"
          rows="7"
          placeholder="Type something here…"
        ></textarea>
        <div className="press-textarea-count">0/300</div>
        {formik.touched.description && (
          <div style={{ marginTop: "-38px" }} className="raise-err-text">
            {formik.errors.description}
          </div>
        )}

        <div className="press-photos-parent">
          <Typography className="press-banner-photo-title">
            Banner Photo*
          </Typography>

          <div className="banner-box-container">
            <div style={{ position: "relative" }} className="Banner-Box">
              {console.log("pressData?.banner_images?.length",pressData)}
              {image1 || pressData?.banner_images?.length ? (
                <img
                  src={image1 ? image1 : pressData?.banner_images[0]}
                  alt="Preview of first image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                "Banner 01"
              )}
            </div>
            <div style={{ position: "relative" }} className="Banner-Box">
              {image2 || pressData?.banner_images?.length ? (
                <img
                  src={image2 ? image2 : pressData?.banner_images[1]}
                  alt="Preview of second image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                "Banner 02"
              )}
            </div>
            <div style={{ position: "relative" }} className="Banner-Box">
              {console.log("image3",image3)}
              {image3 || pressData?.banner_images?.length ? (
                <img
                  src={image3 ? image3 : pressData?.banner_images[2]}
                  alt="Preview of third image"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
              ) : (
                "Banner 03"
              )}
            </div>
          </div>

          <input
            id="pressUploadBanner"
            hidden
            onChange={handleFileSelect}
            type="file"
            accept="image/*,.png"
          />

          <Button
          disabled={isUploading ?true :false}
            onClick={() => document.getElementById("pressUploadBanner").click()}
            className="press-upload-pic-btn"
          >
            {isUploading ? (
              <CircularProgress
                style={{
                  color: "black",
                  fontSize: 10,
                  width: 20,
                  height: 20,
                }}
              />
            ) : (
              "Upload a Picture"
            )}
          </Button>
        </div>

        <hr className="press-hr" />

        <div className="getRewards-btn-parent">
          <Button
            type="submit"
            style={{ color: "white" }}
            variant="contained"
            className="hightlight-submit-button"
          >
            {isLoading === true ? (
              <CircularProgress
                style={{ color: "white", fontSize: 10, width: 20, height: 20 }}
              />
            ) : isPressAdded ? (
              "Update"
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Press;
