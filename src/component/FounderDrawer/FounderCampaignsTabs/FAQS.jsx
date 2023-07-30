import React, { useEffect } from "react";
import { styled } from "@material-ui/styles";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Tooltip,
  tooltipClasses,
  Typography,
} from "@mui/material";
import "../../../css/FounderDrawer/Dashboard/FAQs.css";
import { useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import FAQsValSchema from "../../../Validations/FAQsValSchema";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const FAQS = ({ tabChangeFn }) => {
  const navigate = useNavigate();
  const { campaignDetail } = useSelector(state => state.campaignDetail)
  const [q1Count, setQ1Count] = useState(0);
  const [q2Count, setQ2Count] = useState(0);
  const [addedFaqs, setAddedFaqs] = useState([]);
  const [count, setcount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isEditLoading, setEditIsLoading] = useState(false);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [editQuestion, setEditQuestion] = useState("");
  const [editAnswer, setEditAnswer] = useState("");
  const [newData, setNewData] = useState("");
  const [addMoreFaqs, setAddMoreFaqs] = useState();

  const { userData } = useSelector((state) => state.loginData);
  const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 250,
      backgroundColor: "white",
      color: "black",
      fontFamily: "poppins",
      border: "1px solid gray",
      boxShadow: "0px 0px 20px #00000017",
      padding: "10px 20px",
    },
  });

  const EditBankFields = (id, index) => {
    const newList = addedFaqs.filter((i) => i.id === id);
    setIsEdit(id);
    setEditAnswer(newList[0].answer);
    setEditQuestion(newList[0].question);
  };

  const handleCount = (string) => {
    const count = string.length;
    console.log(count);
    setQ1Count(string.target.value);
  };

  const handleSubmit = (id) => {
    setEditIsLoading(true);
    setIsEdit(null);

    const val = {
      faqs_id: id,
      question: editQuestion,
      answer: editAnswer,
      campaign_id: addedFaqs[0].campaign_id,
    };
    CompanyServices.updateFAQ(val).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        CompanyServices.getCampaignsFaqs(
          sessionStorage.getItem("campaign_id")
        ).then((res) => {
          console.log(res);
          if (res.status === 200 || res.status === 201) {
            // const newList = res.data.filter((i) => i.id === id);
            // setNewData(newList);
            setAddedFaqs(res.data);
          }
        });
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
      campaign_id: sessionStorage.getItem("campaign_id"),
      question: "",
      answer: "",
    },

    validationSchema: FAQsValSchema,

    onSubmit: (values) => {
      if (isNextClicked) {
        setIsLoading(true);
      }
      if (isSaveClicked) {
        setIsSaveLoading(true);
      }

      console.log(values);
      let obj = {
        campaign_id: values.campaign_id,
        faqs: [
          {
            question: values.question,
            answer: values.answer,
          },
        ],
      };
      CompanyServices.addFAQ(obj).then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setIsLoading(false);
          setIsSaveLoading(false);
          toast.success("FAQ added successfully!", {
            position: "top-right",
            style: {
              borderRadius: "3px",
              background: "green",
              color: "#fff",
            },
          });
          setcount((pre) => pre + 1);
          formik.handleReset();
          setTimeout(() => {
            if (isNextClicked) {
              tabChangeFn(0, 4);
            }
          }, 1000);
          // setTimeout(() => {
          //   if (isSaveClicked) {
          //     navigate("/dashboard-founder/e-signin");
          //   } else {
          //     tabChangeFn(0, 4);
          //   }
          // }, 1000);
        } else {
          setIsLoading(false);
          setIsSaveLoading(false);

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

  useEffect(() => {
    window.scrollTo(0, 0);
    CompanyServices.getCampaignsFaqs(
      sessionStorage.getItem("campaign_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setAddedFaqs(res.data);
      }
    });
  }, [count]);

  return (
    <Container className="faq-container-mb" style={{ padding: "0px", paddingRight: "10%" }} maxWidth="lg">
      <Box className="faq-text-wrapper" sx={{ marginTop: 4, marginLeft: 2, marginRight: "30px" }}>
        <h3>FAQs</h3>

        <Typography style={{ paddingTop: "10px" }}>
          Investors are curious. Answer the basics about your startup here.{" "}
        </Typography>

        {/* <Typography
          className="upload-ur-pitch"
          style={{ marginTop: "1.4rem", marginBottom: "-0.3rem" }}
        >
          Add FAQ
        </Typography> */}
      </Box>
      {!addedFaqs.length || addMoreFaqs ? (
        <form className="faq-form" style={{ marginRight: "30px" }} onSubmit={formik.handleSubmit}>
          <Box sx={{ marginTop: 4, marginLeft: 2 }}>
            {/* <h3 className="faqs-title">FAQs</h3>

            <Typography>
              Investors are curious. Answer the basics about your startup here.{" "}
            </Typography>

            // <Typography
            //   className="upload-ur-pitch"
            //   style={{ marginTop: "1.4rem", marginBottom: "-0.3rem" }}
            // >
            //   Add FAQ
            // </Typography> */}

            {/* <CustomWidthTooltip title="Type your question here…" arrow placement='right'> */}
            <div style={{ height: "90px" }}>
              <input
                name="question"
                value={formik.values.question}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Type your question here…"
                type="text"
                disabled={campaignDetail?.status !== 'CREATED'}
                className="inp-enter-name"
              />
              {formik.touched.question && (
                <div className="raise-err-text">{formik.errors.question}</div>
              )}
            </div>
            {/* </CustomWidthTooltip> */}

            {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
            <div style={{ height: "190px" }}>
              <textarea
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ marginBottom: 0 }}
                placeholder="Describe your previous fundraising rounds*"
                className="inp-textarea-desc"
                id="describe"
                disabled={campaignDetail?.status !== 'CREATED'}
                rows="7"
              ></textarea>

              {/* <div className="zero-of-threehundred">{q1Count?.length}/300</div> */}
              {formik.touched.answer && (
                <div className="raise-err-text">{formik.errors.answer}</div>
              )}
            </div>
            {/* </CustomWidthTooltip> */}

            <hr
              style={{
                color: "#F4F4F4",
                // maxWidth: "800px",
                width: "100%",
                marginTop: "2rem",
              }}
            />

            <div className="faqs-button-parent">
              <Button
                onClick={() => { formik.submitForm(); setSavedClicked(true) }}
                disabled={campaignDetail?.status !== 'CREATED'}
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
                onClick={() => { formik.submitForm(); setNextClicked(true) }}
                disabled={campaignDetail?.status !== 'CREATED'}
                // type="submit"
                style={{ margin: "20px", marginRight: "0px" }}
                variant="contained"
                className="comp-prof-button2 faq-next-btn"
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
          </Box>
        </form>
      ) : null}

      {addedFaqs.length ? (
        <Box sx={{ marginTop: "25px", marginLeft: 2 }}>
          {addedFaqs.length > 0 && (
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
              <h3 className="faqs-title">Added FAQs</h3>
              {campaignDetail?.status === "CREATED" &&
                <>
                  {addMoreFaqs ? null : (
                    <button
                      disabled={isLoading === true ? true : false}
                      onClick={() => setAddMoreFaqs(true)}
                      type="submit"
                      className="addMore"
                    >
                      Add More FAQs
                    </button>
                  )}
                </>
              }

            </div>
          )}
          {addedFaqs?.map((item, index) => (
            <div className="existing-faq" key={index}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Typography
                  style={{
                    // marginTop: "1.4rem",
                    marginBottom: "-0.3rem",
                  }}
                  className="upload-ur-pitch"
                >
                  Question {index + 1}
                </Typography>
                {isEdit === item.id ? (
                  <button
                    disabled={campaignDetail?.status !== 'CREATED'}
                    onClick={() => {
                      handleSubmit(item.id);
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
                      <span style={{ color: 'white' }}>Save</span>
                    )}
                  </button>
                ) : (
                  <>
                    {campaignDetail?.status === "CREATED" &&
                      <button
                        onClick={() => {
                          EditBankFields(item.id, index);
                        }}
                        disabled={campaignDetail?.status !== 'CREATED'}
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
                  value={editQuestion}
                  disabled={campaignDetail?.status !== 'CREATED'}
                  onChange={(e) => setEditQuestion(e.target.value)}
                  placeholder="Type your question here…"
                  type="text"
                  className="inp-enter-name"
                />
              ) : (
                <input
                  disabled={campaignDetail?.status !== 'CREATED'}
                  value={
                    item.question
                    // newData[0].id===item.id  ? newData[0].question : item.question
                  }
                  placeholder="Type your question here…"
                  type="text"
                  className="inp-enter-name"
                />
              )}
              {/* </CustomWidthTooltip> */}

              {/* <CustomWidthTooltip title="Describe your previous fundraising rounds*" arrow placement='right'> */}
              {isEdit === item.id ? (
                <textarea
                  value={editAnswer}
                  disabled={campaignDetail?.status !== 'CREATED'}
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
              )}
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
      ) : null}
    </Container>
  );
};

export default FAQS;
