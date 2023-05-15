import { Card, CardContent, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../../css/MyProfile/myProfile.css";
import KycProfile from "../../images/assets/KycProfile.png";

export default function BankDetailsAfterKyc({ data }) {
  const _ = require("lodash");
  const [isEdit, setIsEdit] = useState(false);
  const [bankName, setBankName] = useState(
    _.isEmpty(data) ? "" : data?.bank_name
  );
  const [ifscCode, setIfscCode] = useState(
    _.isEmpty(data) ? "" : data.ifsc_code
  );
  const [bankAccount, setBankAccount] = useState(
    _.isEmpty(data) ? "" : data?.bank_account
  );

  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <span className="heading-personal-details">KYC Details</span>
        <Card className="card-complete-kyc-notice brief">
          <CardContent>
            <button
              onClick={() => setIsEdit(!isEdit)}
              style={{
                position: "absolute",
                right: 100,
                position: "absolute",
                padding: "5px 10px",
                borderRadius: "5px",
                border: "1px solid",
              }}
            >
              {isEdit === true ? "Save" : "Edit"}
            </button>
            <Grid style={{ paddingTop: "20px" }} container spacing={8}>
              <Grid item xs={3}>
                <span className="txt-bank-details">Bank Name</span>
              </Grid>
              <Grid item xs={1}>
                <span className="txt-bank-details">:</span>
              </Grid>
              <Grid item xs={2}>
                {isEdit === true ? (
                  <input
                    value={bankAccount}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                ) : (
                  <span className="txt-bank-details">
                    {_.isEmpty(data) ? "" : data?.bank_name}
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid style={{ paddingTop: "20px" }} container spacing={8}>
              <Grid item xs={3}>
                <span className="txt-bank-details">Bank Account no.</span>
              </Grid>
              <Grid item xs={1}>
                <span className="txt-bank-details">:</span>
              </Grid>
              <Grid item xs={2}>
                {isEdit === true ? (
                  <input
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                ) : (
                  <span className="txt-bank-details">
                    {_.isEmpty(data) ? "" : data?.bank_account}
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid style={{ paddingTop: "20px" }} container spacing={8}>
              <Grid item xs={3}>
                <span className="txt-bank-details">IFSC Code</span>
              </Grid>
              <Grid item xs={1}>
                <span className="txt-bank-details">:</span>
              </Grid>
              <Grid item xs={2}>
              {isEdit === true ? (
                  <input
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                  />
                ) : 
                (<span className="txt-bank-details">
                  {_.isEmpty(data) ? "" : data.ifsc_code}
                </span>)}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
