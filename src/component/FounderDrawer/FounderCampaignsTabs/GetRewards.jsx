import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import "../../../css/FounderDrawer/Dashboard/GetRewards.css";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import RewardValSchema from "../../../Validations/RewardValSchema";
import CompanyServices from "../../../service/Company";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GetRewards = ({ tabChangeFn }) => {
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.loginData);
  const [rewardData, setRewardData] = useState([]);
  const [isRewardAdded, setIsRewardAdded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [isEditLoading, setEditIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editDiscount, setEditDiscount] = useState("");
  const [addMoreRewards, setAddmoreRewards] = useState(false);

  const [count, setCount] = useState(0);

  const EditBankFields = (id, index) => {
    const newList = rewardData.filter((i) => i.id === id);
    console.log("newList", newList);
    setIsEdit(id);
    setEditProductName(newList[0].product_name);
    setEditAmount(newList[0].amount);
    setEditDiscount(newList[0].discounted_price);
  };

  const handleSubmit = (id) => {
    setEditIsLoading(true);
    setIsEdit(null);

    const val = {
      reward_id: id,
      product_name: editProductName,
      discounted_price: editDiscount,
      campaign_id: rewardData[0].campaign_id,
    };
    CompanyServices.updateReward(val).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        // CompanyServices.getCampaignsFaqs(
        //   sessionStorage.getItem("campaign_id")
        // ).then((res) => {
        //   console.log(res);
        //   if (res.status === 200 || res.status === 201) {
        //     const newList = res.data.filter((i) => i.id === id);
        //     setNewData(newList);
        //   }
        // });
        CompanyServices.getRewardByCampaingID(
          sessionStorage.getItem("campaign_id")
        ).then((res) => {
          console.log(res);
          if (res.status === 200 || res.status === 201) {
            setRewardData(res.data);
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
      product_name: "",
      amount: "",
      discounted_price: "",
    },

    validationSchema: RewardValSchema,

    onSubmit: (values) => {
      setIsLoading(true);
      console.log(values);
      CompanyServices.createReward(values).then((res) => {
        console.log(res);
        if (res.status === 200 || res.status === 201) {
          setIsLoading(false);

          toast.success("Reward added successfully!", {
            position: "top-right",
            style: {
              borderRadius: "3px",
              background: "green",
              color: "#fff",
            },
          });
          sessionStorage.setItem("is_reward_added", true);
          setCount((pre) => pre + 1);
          formik.handleReset();
          setTimeout(() => {
            if (isSaveClicked) {
              navigate("/dashboard-founder/e-signin");
            } else {
              tabChangeFn(0, 6);
            }
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
      });
    },
  });
  console.log("rewardData", rewardData);
  useEffect(() => {
    CompanyServices.getRewardByCampaingID(
      sessionStorage.getItem("campaign_id")
    ).then((res) => {
      console.log(res);
      if (res.status === 200 || res.status === 201) {
        setRewardData(res.data);
        setIsRewardAdded(rewardData.id ? true : false);
      }
    });
  }, [count]);

  return (
    <Box
      sx={{ marginTop: 4, paddingRight: "10%", marginRight: "30px" }}
      className="promotions-parent"
    >
      <h3 >Promotion</h3>

      <Typography
        style={{ paddingTop: 10 }}
        className="raise-with-mint-desc highlight-desc"
      >
        Mention the benefits or discounts an investor can get once he enrolls to
        your campaign
      </Typography>

      {rewardData?.length === 0 || addMoreRewards ? (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              name="product_name"
              value={formik.values.product_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Product Name"
              type="text"
              className="get-reward-inputs"
            />
            {formik.touched.product_name && (
              <div className="raise-err-text">{formik.errors.product_name}</div>
            )}

            <input
              name="amount"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Original Price"
              type="text"
              className="get-reward-inputs"
            />
            {formik.touched.amount && (
              <div className="raise-err-text">{formik.errors.amount}</div>
            )}

            <input
              name="discounted_price"
              value={formik.values.discounted_price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Discounted Price"
              type="text"
              className="get-reward-inputs"
            />
            {formik.touched.discounted_price && (
              <div className="raise-err-text">
                {formik.errors.discounted_price}
              </div>
            )}
          </div>
          {/* 
                <div className='getRewards-btn-parent'>
                    <Button
                        type="submit"
                        style={{ margin: '20px' }}
                        variant='contained' className="hightlight-submit-button">
                        {
                            isRewardAdded
                                ? "Update"
                                : "Save"
                        }
                    </Button>
                </div> */}

          <div className="faqs-button-parent">
            <Button
              onClick={() => setSavedClicked(true)}
              disabled={isLoading === true ? true : false}
              type="submit"
              style={{ margin: "20px", color: "black" }}
              variant="contained"
              className="comp-prof-button1"
            >
              {isLoading && isSaveClicked ? (
                <CircularProgress
                  style={{
                    color: "white",
                    fontSize: 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ) : (
                "Save"
              )}
            </Button>
            <Button
              onClick={() => setNextClicked(true)}
              disabled={isLoading === true ? true : false}
              type="submit"
              style={{ margin: "20px", marginRight: 0 }}
              variant="contained"
              className="comp-prof-button2"
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
                "Next"
              )}
            </Button>
          </div>
        </form>
      ) : null}
      {rewardData?.length > 0 ? (
        <div
          style={{ margin: "25px 0px 0px 0px" }}
          className="promotions-parent"
        >
          {rewardData?.length > 0 && (
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                justifyContent: "space-between",
                // width: "76%",
              }}
            >
              <h3  style={{}}>
                Rewards Added
              </h3>
              {addMoreRewards ? null : (
                <button
                  disabled={isLoading === true ? true : false}
                  onClick={() => setAddmoreRewards(true)}
                  type="submit"
                  className="addMore"
                >
                  Add More Highlights
                </button>
              )}
            </div>
          )}
          <div style={{ marginTop: 20 }}>
            {rewardData?.map((item, index) => (
              <div key={index}>
                <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
                  <div
                    style={{
                      textAlign: "left",
                      fontFamily: "poppins",
                      fontSize: "16px",
                    }}
                  >
                    Reward {index + 1}
                  </div>
                  {isEdit === item.id ? (
                    <button
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
                        "Edit"
                      )}
                    </button>
                  )}
                </div>
                {isEdit === item.id ? (
                  <input
                    value={editProductName}
                    onChange={(e) => setEditProductName(e.target.value)}
                    type="text"
                    className="get-reward-inputs"
                  />
                ) : (
                  <input
                    disabled
                    value={item.product_name}
                    type="text"
                    className="get-reward-inputs"
                  />
                )}

                {isEdit === item.id ? (
                  <input
                    value={editAmount}
                    onChange={(e) => setEditAmount(e.target.value)}
                    type="text"
                    className="get-reward-inputs"
                  />
                ) : (
                  <input
                    disabled
                    value={item.amount}
                    type="text"
                    className="get-reward-inputs"
                  />
                )}
                {isEdit === item.id ? (
                  <input
                    value={editDiscount}
                    onChange={(e) => setEditDiscount(e.target.value)}
                    type="text"
                    className="get-reward-inputs"
                  />
                ) : (
                  <input
                    disabled
                    value={item.discounted_price}
                    type="text"
                    className="get-reward-inputs"
                  />
                )}

                {/* <hr /> */}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </Box>
  );
};

export default GetRewards;
