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
  const { campaignDetail } = useSelector(state => state.campaignDetail)
  const [pressData, setPressData] = useState([]);
  const [isPressAdded, setIsPressAdded] = useState(false);
  const [toggle, settoggle] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploadingEdit, setIsUploadingEdit] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [isEditLoading, setEditIsLoading] = useState(false);
  const [editDesc, setEditDesc] = useState(null);
  const [editTitle, setEditTitle] = useState(null);
  const [editLink, setEditLink] = useState(null)
  const [editImage1, setEditImage1] = useState('');
  const [editImage2, setEditImage2] = useState('');
  const [editImage3, setEditImage3] = useState('');
  const [addMorePress, setAddMorePress] = useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    validationSchema: PressValSchema,
    initialValues: {
      company_id: +localStorage.getItem("company_id"),
      title: pressData?.title ? pressData?.title : "",
      link: pressData?.link ? pressData?.link : "",
      description: pressData?.description ? pressData?.description : "",
      banner:
        image1 || image2 || image3
          ? [`${image1}`, `${image2}`, `${image3}`]
          : [],
      // "https://c8.alamy.com/comp/R77EPB/blue-business-logo-template-for-cassette-demo-record-tape-record-facebook-timeline-banner-design-vector-web-banner-background-illustration-R77EPB.jpg",
    },



    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values);
      CompanyServices.addPress(values).then((res) => {
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

    },
  });

  const handleSubmitFields = (id, index) => {
    setEditIsLoading(true);
    setIsEdit(null);

    const val = {
      company_id: +localStorage.getItem("company_id"),
      title: editTitle ? editTitle : "",
      link: editLink ? editLink : '',
      description: editDesc ? editDesc : "",
      banner: [`${editImage1 || pressData[index].banner_images[0]}`, `${editImage2 || pressData[index].banner_images[1]}`, `${editImage3 || pressData[index].banner_images[2]}`],
    };

    console.log(val)
    CompanyServices.updatePress({
      press_id: id,
      ...val,
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
  };

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

  const handleFileSelectEdit = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      setIsUploadingEdit(true);
      const { data } = await authAxios.post(
        `${Base_Url}/api/users/upload-files`,
        formData
      );
      if (!editImage1) {
        setEditImage1(data.message);
      } else if (!editImage2) {
        setEditImage2(data.message);
      } else if (!editImage3) {
        setEditImage3(data.message);
      }
      setIsUploadingEdit(false);
      return data;
    } catch (error) {
      console.log("Data not found !!");
      setIsUploadingEdit(false);
    }
  };

  const EditBankFields = (id, index) => {
    const newList = pressData.filter((i) => i.id === id);
    setIsEdit(id);
    setEditTitle(newList[0].title);
    setEditLink(newList[0].link)
    setEditDesc(newList[0].description);
  };

  useEffect(() => {
    CompanyServices.getPressByCompanyID(
      localStorage.getItem("company_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setPressData(res.data);
        console.log(res?.data)
      }
    });
  }, [toggle]);

  return (
    <Container
      className="upload-docs-container"
      // style={{ padding: "0px 10% 0px 16px ", paddingRight: "10%" }}
      maxWidth="lg"
    >
      {pressData?.length === 0 || addMorePress ? < form className="press-form" style={{}} onSubmit={formik.handleSubmit}>
        <h3>Press</h3>

        <Typography style={{ paddingTop: 10 }} className="press-title-desc">
          Show your reach! Investors are always more inclined towards startups
          that have been covered by the media and are gaining traction.{" "}
        </Typography>
        <div style={{ height: "80px" }}>
          <input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            disabled={campaignDetail?.status !== 'CREATED'}
            className="press-input"
            placeholder="Enter your header/title here"
          />
          {formik.touched.title && (
            <div className="raise-err-text">{formik.errors.title}</div>
          )}
        </div>
        <div style={{ height: "80px" }}>
          <input
            name="link"
            value={formik.values.link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            disabled={campaignDetail?.status !== 'CREATED'}
            className="press-input"
            placeholder="https://"
          />
          {formik.touched.link && (
            <div className="raise-err-text">{formik.errors.link}</div>
          )}
        </div>
        <div style={{ height: "178px" }}>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="press-textarea"
            id="press-textarea"
            cols="30"
            rows="7"
            disabled={campaignDetail?.status !== 'CREATED'}
            placeholder="Type something here…"
          ></textarea>
          {/* <div className="press-textarea-count">0/300</div> */}
          {formik.touched.description && (
            <div style={{ marginTop: "0px" }} className="raise-err-text">
              {formik.errors.description}
            </div>
          )}
        </div>
        <div className="press-photos-parent">
          <Typography className="press-banner-photo-title">
            Banner Photo*
          </Typography>

          <div className="banner-box-container">
            <div style={{ position: "relative" }} className="Banner-Box">
              {image1 ? (
                <img
                  src={image1}
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
              {image2 ? (
                <img
                  src={image2}
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
              {image3 ? (
                <img
                  src={image3}
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
            disabled={campaignDetail?.status !== 'CREATED'}
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
            onClick={formik.handleSubmit}
          >
            {isLoading === true ? (
              <CircularProgress
                style={{ color: "white", fontSize: 10, width: 20, height: 20 }}
              />
            ) : 'Submit'}
          </Button>
        </div>
      </form>
        :
        null
      }


      {
        pressData.length ? (
          <Box sx={{ marginTop: "25px", marginLeft: 2 }}>
            {pressData.length > 0 && (
              <div
                className="faq-text-wrapper"
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginRight: 30,
                  // paddingRight: '10%'
                }}
              >
                <h3 className="faqs-title">Added Press</h3>
                {pressData.length > 0 ? (
                  <button
                    disabled={campaignDetail?.status !== 'CREATED'}
                    onClick={() => setAddMorePress(true)}
                    type="submit"
                    className="addMore"
                  >
                    Add More Press
                  </button>
                )
                  : null}
              </div>
            )}
            {pressData?.map((item, index) => (
              <div className="existing-faq" key={index}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Typography
                    style={{
                      // marginTop: "1.4rem",
                      marginBottom: "-0.3rem",
                    }}
                    className="upload-ur-pitch"
                  >
                    Press {index + 1}
                  </Typography>
                  {isEdit === item.id ? (
                    <button
                      disabled={isEditLoading ? true : false}
                      onClick={() => {
                        handleSubmitFields(item.id, index);
                      }}
                      style={{
                        cursor: "pointer",
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

                {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}

                {isEdit === item.id ? (
                  <input
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Type your question here…"
                    type="text"
                    className="inp-enter-name"
                  />
                ) : (
                  <input
                    disabled
                    value={
                      item.title
                      // newData[0].id===item.id  ? newData[0].question : item.question
                    }
                    placeholder="Enter your header/title here"
                    type="text"
                    className="inp-enter-name"
                  />
                )}
                {isEdit === item.id ? (
                  <input
                    value={editLink}
                    onChange={(e) => setEditLink(e.target.value)}
                    placeholder="https:// "
                    type="text"
                    className="inp-enter-name"
                  />
                ) : (
                  <input
                    disabled
                    value={
                      item.link
                      // newData[0].id===item.id  ? newData[0].question : item.question
                    }
                    placeholder="https://"
                    type="text"
                    className="inp-enter-name"
                  />
                )}
                {isEdit === item.id ? (
                  <textarea
                    name="description"
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="press-textarea"
                    id="press-textarea"
                    cols="30"
                    rows="7"
                    placeholder="Type something here…"
                  ></textarea>

                ) : (
                  <textarea
                    name="description"
                    disabled
                    value={
                      item.description
                      // newData[0].id===item.id  ? newData[0].question : item.question
                    }
                    onChange={(e) => setEditDesc(e.target.value)}
                    className="press-textarea"
                    id="press-textarea"
                    cols="30"
                    rows="7"
                    placeholder="Type something here…"
                  ></textarea>
                )}
                {isEdit === item.id ? (
                  <div className="press-photos-parent">
                    <Typography className="press-banner-photo-title">
                      Banner Photo*
                    </Typography>

                    <div className="banner-box-container">
                      <div style={{ position: "relative" }} className="Banner-Box">
                        {editImage1 ? (
                          <img
                            src={editImage1}
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
                        {editImage2 ? (
                          <img
                            src={editImage2}
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
                        {editImage3 ? (
                          <img
                            src={editImage3}
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
                      id="pressUploadBannerEdit"
                      hidden
                      onChange={handleFileSelectEdit}
                      type="file"
                      accept="image/*,.png"
                    />

                    <Button
                      disabled={isUploadingEdit ? true : false}
                      onClick={() => document.getElementById("pressUploadBannerEdit").click()}
                      className="press-upload-pic-btn"
                    >
                      {isUploadingEdit ? (
                        <CircularProgress
                          style={{
                            color: "black",
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        />
                      ) : (
                        "UPLOAD A PICTURE"
                      )}
                    </Button>
                  </div>
                ) : (

                  <div className="press-photos-parent">
                    <Typography className="press-banner-photo-title">
                      Banner Photo*
                    </Typography>

                    <div className="banner-box-container">
                      <div style={{ position: "relative" }} className="Banner-Box">
                        {item?.banner_images?.length ? (
                          <img
                            src={item?.banner_images[0]}
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
                        {item?.banner_images?.length ? (
                          <img
                            src={item?.banner_images[1]}
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
                        {item?.banner_images?.length ? (
                          <img
                            src={item?.banner_images[2]}
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
                  </div>
                )}

                {/* </CustomWidthTooltip> */}

                {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
                {/* {isEdit === item.id ? (
                <textarea
                  value={editAnswer}
                  onChange={(e) => setEditAnswer(e.target.value)}
                  style={{ marginBottom: 0 }}
                  placeholder="Describe your previous fundraising rounds*"
                  className="inp-textarea-desc"
                  name="descibe"
                  id="describe"
                  rows="7"
                ></textarea>
              ) : (
                <textarea
                  disabled
                  value={
                    item.answer
                    // isEdit===item.id ? newData[0].answer : item.answer
                  }
                  style={{ marginBottom: 0 }}
                  placeholder="Describe your previous fundraising rounds*"
                  className="inp-textarea-desc"
                  name="descibe"
                  id="describe"
                  rows="7"
                ></textarea>
              )} */}
                {/* </CustomWidthTooltip> */}
                {/* <div className="zero-of-threehundred">{q2Count}/300</div>

            <hr
              style={{
                color: "#F4F4F4",
                // maxWidth: "800px",
                width: "100%",
                marginTop: "2rem",
              }}
            /> */}
              </div>
            ))}
          </Box>
        ) : null
      }
    </Container >
  );
};

export default Press;
