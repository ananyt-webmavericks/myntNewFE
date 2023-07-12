import { Card, CardContent, CircularProgress, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../css/MyProfile/myProfile.css";
import KycProfile from "../../images/assets/KycProfile.png";
import services from "../../service/investor.kyc";
import {
  editKycDetailsAction,
  storeKycDetailsAction,
} from "../../Redux/actions/verifyKycAction";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function BankDetailsAfterKyc({ data }) {
  const _ = require("lodash");
  const [isEdit, setIsEdit] = useState(false);
  const [bankName, setBankName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newData, setNewData] = useState(null);

  const { userData } = useSelector((state) => state.loginData);
  const dispatch = useDispatch();

  const EditBankFields = () => {
    setIsEdit(true);
    setBankName(newData ? newData.bank_name : data.bank_name);
    setBankAccount(newData ? newData.bank_account : data.bank_account);
    setIfscCode(newData ? newData.ifsc_code : data.ifsc_code);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    const val = {
      user_id: data.user_id,
      bank_name: bankName,
      bank_account: bankAccount,
      ifsc_code: ifscCode,
    };
    try {
      services.EditBankDetails(val).then((response) => {
        console.log("update bank Deatails", response);

        if (response.status === 201 || response.status === 200) {
          services.getInvestorKycData(userData?.id).then((response) => {
            if (response.status === 200) {
              // dispatch(storeKycDetailsAction(response.data));
              toast.success("Bank Details updated successful!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "green",
                  color: "#fff",
                },
              });
              setNewData(val);
              setIsLoading(false);
              setIsEdit(false);
            } else {
              toast.error("Please check entered details!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "red",
                  color: "#fff",
                },
              });
              setIsLoading(false);
            }
          });
        } else {
          setIsLoading(false);
          console.log("error");
        }
      });
    } catch {
      console.log("Try after few minutes");
    }
  };

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div style={{ display: "flex", gap: 10 }}>
          <span className="heading-personal-details">KYC Details</span>
          {isEdit === true ? (
            <button
              onClick={() => {
                handleSubmit();
              }}
              style={{
                right: 100,
                padding: "5px 10px",
                borderRadius: "5px",
                border: "0px solid",
                background: "black",
                color: "white",
              }}
            >
              {isLoading ? (
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
                EditBankFields();
              }}
              style={{
                right: 100,
                padding: "5px 10px",
                borderRadius: "5px",
                border: "0px solid",
                background: "black",
                color: "white",
              }}
            >
              Edit
            </button>
          )}
        </div>
        <Card className="card-complete-kyc-notice brief">
          <CardContent>
            {/* <Grid style={{ paddingTop: "20px" }} container spacing={8}> */}
            <div style={{ display: "flex", justifyContent:"space-between", padding: "10px 0px" }}>
              <div style={{width:"45%"}}>
                <span className="txt-bank-details">Bank Name</span>
              </div>
              <div>
                <span className="txt-bank-details">:</span>
              </div>
              <div style={{width:"45%", textAlign:"end"}}>
                {isEdit === true ? (
                  <input
                    className="kyc-edit-input"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                ) : (
                  <span className="txt-bank-details">
                    {_.isEmpty(data)
                      ? ""
                      : newData
                      ? newData?.bank_name
                      : data?.bank_name}
                    {/* {bankName} */}
                  </span>
                )}
              </div>
            </div>
            {/* </Grid> */}
            {/* <Grid style={{ paddingTop: "20px" }} container spacing={8}> */}
            <div style={{ display: "flex", justifyContent:"space-between", padding: "10px 0px" }}>
              <div style={{width:"45%"}} item xs={3}>
                <span className="txt-bank-details">Bank Account no.</span>
              </div>
              <div item xs={1}>
                <span className="txt-bank-details">:</span>
              </div>
              <div style={{width:"45%",textAlign:"end"}} item xs={2}>
                {isEdit === true ? (
                  <input
                    className="kyc-edit-input"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                ) : (
                  <span className="txt-bank-details">
                    {_.isEmpty(data)
                      ? ""
                      : newData
                      ? newData.bank_account
                      : data?.bank_account}
                  </span>
                )}
              </div>
            </div>
            {/* </Grid> */}
            {/* <Grid style={{ paddingTop: "20px" }} container spacing={8}> */}
            <div style={{ display: "flex", justifyContent:"space-between", padding: "10px 0px" }}>
              <div style={{width:"45%"}} item xs={3}>
                <span className="txt-bank-details">IFSC Code</span>
              </div>
              <div item xs={1}>
                <span className="txt-bank-details">:</span>
              </div>
              <div style={{width:"45%",textAlign:"end"}} item xs={2}>
                {isEdit === true ? (
                  <input
                    className="kyc-edit-input"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                ) : (
                  <span className="txt-bank-details">
                    {_.isEmpty(data)
                      ? ""
                      : newData
                      ? newData.ifsc_code
                      : data.ifsc_code}
                  </span>
                )}
              </div>
            </div>
            {/* </Grid> */}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
