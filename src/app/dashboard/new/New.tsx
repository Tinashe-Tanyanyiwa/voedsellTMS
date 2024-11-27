"use client";
import Image from "next/image";
import "../../page.module.css";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../globals.css";
import Loginbackground from "../../../../public/Images/Loginbackground.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../../../public/Images/Logo.png";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import { motion } from "framer-motion";
import Navigation from "../../Navigation";
import StatusComponents from "../../components/StatusComponents";
import Footer from "@/app/Footer";
import MenuItem from "@mui/material/MenuItem";
import QRCode from "qrcode";
import Stack from "@mui/material/Stack";

const grade = [
  {
    value: "InHouse Grade",
    label: "InHouse Grade",
  },
  {
    value: "TTB Grade",
    label: "TTB Grade",
  },
];
const status = [
  {
    value: "Transit",
    label: "In Transit",
  },
  {
    value: "WareHouse",
    label: "WareHouse",
  },
  {
    value: "Sold",
    label: "Sold",
  },
];

function Scan() {
  const [text, setText] = useState("");
  const [imageUrl, setImageurl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageurl(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navigation></Navigation>
      <Box sx={{ paddingTop: "0px" }}>
        <Container maxWidth="xl" sx={{ padding: "0px !important" }}>
          <Grid
            className="row"
            container
            rowSpacing={1}
            spacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              padding: "0px 20px",
              display: "flex",
              justifyContent: "left",
              marginTop: "0px !important",
              marginBottom: "52px",
            }}
          >
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "32px",
                marginBottom: "26px",
              }}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link
                  underline="hover"
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "400",
                  }}
                  color="inherit"
                  href="/dashboard"
                >
                  Homepage
                </Link>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "12px",
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                  color="text.primary"
                >
                  Add New
                </Typography>
              </Breadcrumbs>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "0px",
                marginBottom: "26px",
                // justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#262324",
                }}
              >
                Add New Bales
              </Typography>
            </Grid>{" "}
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "0px !important",
                paddingTop: "0px !important",
                width: "100%",
                marginTop: "0px",
                marginBottom: "12px",
                justifyContent: "left",
              }}
            >
              {imageUrl ? (
                <a href={imageUrl} download>
                  <Image
                    src={imageUrl}
                    width={90}
                    height={90}
                    style={{ height: "90px", width: "auto" }}
                    alt="QR Code"
                    className="logoTwo"
                  />
                </a>
              ) : null}
            </Grid>
            <Grid
              item
              xs={12}
              className="column"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pl: "0px !important",
                pt: "0px !important",
                mt: "0px",
                mb: "26px",
              }}
            >
              <Box
                component="form"
                sx={{ width: "100%" }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  id="id"
                  // type="number"
                  onChange={(e) => setText(e.target.value)}
                  label="ID"
                  variant="standard"
                  sx={{
                    margin: "0px !important",
                    marginBottom: "36px !important",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#f7ae1a",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  id="seedvariant"
                  label="Seed Variant"
                  variant="standard"
                  sx={{
                    margin: "0px !important",
                    marginBottom: "36px !important",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#f7ae1a",
                    },
                  }}
                />

                <TextField
                  fullWidth
                  id="netweight"
                  label="Net Weight"
                  variant="standard"
                  sx={{
                    margin: "0px !important",
                    marginBottom: "36px !important",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#f7ae1a",
                    },
                  }}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ justifyContent: "space-between" }}
                >
                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select the grade"
                    variant="standard"
                    sx={{
                      margin: "0px !important",
                      marginBottom: "36px !important",
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#f7ae1a",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#f7ae1a",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#f7ae1a",
                      },
                    }}
                  >
                    {grade.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    defaultValue="EUR"
                    helperText="Please select the Bale Status"
                    variant="standard"
                    sx={{
                      margin: "0px !important",
                      marginBottom: "36px !important",
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#f7ae1a",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#f7ae1a",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#f7ae1a",
                      },
                    }}
                  >
                    {status.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Stack>
                <TextField
                  fullWidth
                  type="date"
                  id="netweight"
                  //   label="Date"
                  variant="standard"
                  sx={{
                    margin: "0px !important",
                    marginBottom: "36px !important",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#f7ae1a",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#f7ae1a",
                    },
                  }}
                />
                <Button
                  onClick={() => generateQrCode()}
                  sx={{
                    marginRight: "10px",
                    width: "180px",
                    borderRadius: "400px",
                    backgroundColor: "#f7ae1a",
                    "&:hover": {
                      backgroundColor: "#e09e16",
                    },
                  }}
                  variant="contained"
                  color="success"
                >
                  Add
                </Button>
              </Box>
            </Grid>
            {/* <Button onClick={() => generateQrCode()}>Click Me</Button> */}
          </Grid>
          <Footer></Footer>
        </Container>
      </Box>
    </div>
  );
}

export default Scan;
