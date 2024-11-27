"use client";
import Image from "next/image";
import "../../page.module.css";
import React, { useState, useRef } from "react";
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
// import QrReader from "react-qr-reader";
import QrReader from "react-qr-reader";

function Scan() {
  const [scanResultFile, setScanResultFile] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const qrRef = useRef(null);

  const handleErrorWebCam = (error: Error): void => {
    console.log(error);
  };
  const handleScanWebCam = (result: string | null): void => {
    if (result) {
      setScanResultWebCam(result);
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
                  Scanner
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
                Scan Bales
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
                marginBottom: "26px",
              }}
            >
              {scanResultWebCam && (
                <Typography
                  sx={{
                    color: "#000",
                    textAlign: "justify",
                    fontVariantNumeric: "lining-nums proportional-nums",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "normal",
                    marginTop: "0px",
                  }}
                >
                  Showing Information for Bale: {scanResultWebCam}
                </Typography>
              )}
            </Grid>
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
              }}
            >
              <QrReader
                delay={300}
                style={{ width: "100%" }}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
              />
            </Grid>{" "}
          </Grid>
          <Footer></Footer>
        </Container>
      </Box>
    </div>
  );
}

export default Scan;
