import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Advisors from "./PeopleTabs/Advisors";
import Investors from "./PeopleTabs/Investors";
import TeamMembers from "./PeopleTabs/TeamMembers";
import CompanyServices from "../../../service/Company";
import { useDispatch, useSelector } from "react-redux";
import { peopleDataStoreAction } from "../../../Redux/actions/company";
import Modal from "@mui/material/Modal";
import Linkdin from "../../../images/highlights/linkdin.png";
import { useFormik } from "formik";
import PeopleTabValSchema from "../../../Validations/PeopleTabValSchema";
import { toast } from "react-hot-toast";
import { authAxios } from "../../../service/Auth-header";
import { Base_Url } from "../../../Utils/Configurable";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  peoplegroupbtn: {
    gap: "2rem",
    display: "flex",
    marginTop: "2rem",
  },
  Teambtn: {
    color: "white",
    borderRadius: "20px",
    background: "#F4F4F4",
    textTransform: "capitalize",
  },
  investorbtn: {
    borderRadius: "20px",
    background: "#F4F4F4",
    textTransform: "capitalize",
  },
  advisorsbtn: {
    borderRadius: "20px",
    background: "#F4F4F4",
    textTransform: "capitalize",
  },
});

const People = ({ tabChangeFn }) => {
  const [open, setOpen] = React.useState(null);
  const handleOpen = (id) => {
    const newTeam = peopleData.filter((i) => i.id === id);
    setOpen(id);
    setTeamName(newTeam[0].name);
    setTeamPosition(newTeam[0].position);
  };
  const handleClose = () => setOpen(null);
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  const [preview, setPreview] = useState(null);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);

  const [subTabNo, setSubTabNo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamPosition, setTeamPosition] = useState("");

  const handleClick = (tabNo) => {
    setSubTabNo(tabNo);
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const { peopleData } = useSelector((state) => state.companyData);
  console.log(peopleData);
  const getPeopleData = () => {
    CompanyServices.getPeopleByCompanyId(
      localStorage.getItem("company_id")
    ).then((res) => {
      if (res.status === 200 || res.status === 201) {
        dispatch(peopleDataStoreAction(res.data));
      }
    });
  };

  useEffect(() => {
    peopleData.length === 0 && getPeopleData();
  }, []);
  console.log("peopleData", peopleData);
  return (
    <Box sx={{ marginTop: 4, marginLeft: 2, marginBottom: "3rem" }}>
      <h3>People</h3>
      <Typography>
        Add your founding team members, lead investors and advisors here. As we
        all know ‘Team work makes the dream work’. Investors are always keen to
        know the people that run the show behind the scenes.
      </Typography>
      <Box className={classes.peoplegroupbtn}>
        <Button
          style={{
            transition: "0.5s",
            backgroundColor: subTabNo === 0 ? "#000000" : "#F4F4F4",
            color: subTabNo === 0 ? "white" : "#000000",
          }}
          onClick={(e) => handleClick(0)}
          variant="contained"
          className={classes.Teambtn}
        >
          Team Member
        </Button>
        <Button
          style={{
            transition: "0.5s",
            backgroundColor: subTabNo === 1 ? "#000000" : "#F4F4F4",
            color: subTabNo === 1 ? "white" : "#000000",
          }}
          onClick={(e) => handleClick(1)}
          variant="contained"
          className={classes.investorbtn}
        >
          Investors
        </Button>
        <Button
          style={{
            transition: "0.5s",
            backgroundColor: subTabNo === 2 ? "#000000" : "#F4F4F4",
            color: subTabNo === 2 ? "white" : "#000000",
          }}
          onClick={(e) => handleClick(2)}
          variant="contained"
          className={classes.advisorsbtn}
        >
          Advisors
        </Button>
      </Box>

      {subTabNo === 0 && (
        <TeamMembers getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />
      )}
      {subTabNo === 1 && (
        <Investors getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />
      )}
      {subTabNo === 2 && (
        <Advisors getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />
      )}

      {subTabNo === 0 &&
        peopleData?.filter((item) => item.type === "TEAM").length > 0 && (
          <div
            className="investor-home-heading"
            style={{ fontSize: "18px", marginTop: 150 }}
          >
            Added Team Members
          </div>
        )}
      {subTabNo === 1 &&
        peopleData?.filter((item) => item.type === "INVESTOR").length > 0 && (
          <div className="investor-home-heading" style={{ fontSize: "18px" }}>
            Added Investors
          </div>
        )}
      {subTabNo === 2 &&
        peopleData?.filter((item) => item.type === "ADVISOR").length > 0 && (
          <div className="investor-home-heading" style={{ fontSize: "18px" }}>
            Added Advisors
          </div>
        )}

      <div className="gridParent">
        <Grid item xs={6} md={3}>
          <Box
            sx={{
              p: 2,
              paddingTop: 4.2,
              bgcolor: "background.default",
              display: "grid",
              gridTemplateColumns: { md: "1fr 1fr 1fr", sm: "1fr 1fr" },
              gap: 2.5,
              width: "492",
              textAlign: "left",
              fontFamily: "poppins",
            }}
          >
            {subTabNo === 0 && (
              <>
                {peopleData
                  ?.filter((item) => item.type === "TEAM")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Card
                      key={index}
                      onClick={() => handleOpen(item.id)}
                      style={{
                        minWidth: "280px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        boxShadow: "0px 0px 12px #0000001F",
                        borderRadius: "7px",
                        marginRight: "50px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      {console.log("team item", item)}

                      <CardContent>
                        <div
                          style={{
                            display: "grid",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <img
                            style={{ margin: "auto" }}
                            src={item.profile_image}
                            width={183}
                            height={183}
                          ></img>
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              marginTop: "10px",
                            }}
                          >
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {item.position}
                          </span>
                          <img
                            onclick={() =>
                              window.open(item.linked_in_link, "_blank")
                            }
                            src={Linkdin}
                            width={25}
                            height={25}
                            style={{ margin: "auto" }}
                          ></img>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                {peopleData
                  ?.filter((item) => item.type === "TEAM")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Modal
                      open={open === item.id ? true : false}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div style={{ fontSize: "20px", fontWeight: 900 }}>
                          Edit Team Member
                        </div>
                        <TeamMembers
                          open={open}
                          handleClose={handleClose}
                          isTeamEdit={true}
                          teamData={item}
                          getPeopleData={getPeopleData}
                          tabChangeFn={tabChangeFn}
                        />
                      </Box>
                    </Modal>
                  ))}
              </>
            )}

            {subTabNo === 1 && (
              <>
                {peopleData
                  ?.filter((item) => item.type === "INVESTOR")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Card
                      key={index}
                      onClick={() => handleOpen(item.id)}
                      style={{
                        minWidth: "280px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        boxShadow: "0px 0px 12px #0000001F",
                        borderRadius: "7px",
                        marginRight: "50px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      <CardContent>
                        <div
                          style={{
                            display: "grid",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={item.profile_image}
                            width={183}
                            height={183}
                          ></img>
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              marginTop: "10px",
                            }}
                          >
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {item.position}
                          </span>
                          <img
                            src={Linkdin}
                            width={25}
                            height={25}
                            style={{ margin: "auto" }}
                          ></img>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                {peopleData
                  ?.filter((item) => item.type === "INVESTOR")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Modal
                      open={open === item.id ? true : false}
                      onClose={handleClose}
                      style={{overflow:'scroll'}}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div style={{ fontSize: "20px", fontWeight: 900 }}>
                          Edit Investors
                        </div>

                        <Investors
                          open={open}
                          handleClose={handleClose}
                          isInvestorEdit={true}
                          investorData={item}
                          getPeopleData={getPeopleData}
                          tabChangeFn={tabChangeFn}
                        />
                      </Box>
                    </Modal>
                  ))}
              </>
            )}

            {subTabNo === 2 && (
              <>
                {peopleData
                  ?.filter((item) => item.type === "ADVISOR")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Card
                      key={index}
                      onClick={() => handleOpen(item.id)}
                      style={{
                        minWidth: "280px",
                        background: "#FFFFFF 0% 0% no-repeat padding-box",
                        boxShadow: "0px 0px 12px #0000001F",
                        borderRadius: "7px",
                        marginRight: "50px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      <CardContent>
                        <div
                          style={{
                            display: "grid",
                            justifyContent: "center",
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={item.profile_image}
                            width={183}
                            height={183}
                          ></img>
                          <span
                            style={{
                              fontSize: "16px",
                              fontWeight: "600",
                              marginTop: "10px",
                            }}
                          >
                            {item.name}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "600",
                              marginTop: "10px",
                              marginBottom: "10px",
                            }}
                          >
                            {item.position}
                          </span>
                          <img
                            src={Linkdin}
                            width={25}
                            height={25}
                            style={{ margin: "auto" }}
                          ></img>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                {peopleData
                  ?.filter((item) => item.type === "ADVISOR")
                  .slice(0)
                  .reverse()
                  .map((item, index) => (
                    <Modal
                      open={open === item.id ? true : false}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                      <div style={{ fontSize: "20px", fontWeight: 900 }}>
                          Edit Advisors
                        </div>
                        <Advisors
                          handleClose={handleClose}
                          open={open}
                          isAdvisorEdit={true}
                          advisorData={item}
                          getPeopleData={getPeopleData}
                          tabChangeFn={tabChangeFn}
                        />
                      </Box>
                    </Modal>
                  ))}
              </>
            )}
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default People;
