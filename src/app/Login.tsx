"use client";
import Image from "next/image";
import "./page.module.css";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./globals.css";
import Loginbackground from "../../public/Images/Loginbackground.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../../public/Images/Logo.png";
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

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [username, setUsername] = React.useState("")
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      {" "}
      <Grid
        className="row"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          paddingLeft: "0px !important",
          alignItems: "center",
          paddingTop: "0px !important",
          width: "100%",
          height: "400px",
          marginTop: "0px !important",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          src={Loginbackground}
          alt={"Background Image"}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <Grid
          item
          xs={12}
          className="column"
          sx={{
            position: "relative",
            top: "-335px",
            display: "flex",
            justifyContent: "center",
            padding: "0px !important",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "400px",
              height: "120px",
              width: "120px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <motion.div
              animate={{
                rotateY: ["-360deg", "0deg"],
              }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <Image
                src={Logo}
                alt={"Voedsel Logo"}
                style={{ width: "auto", height: "90px", objectFit: "cover" }}
              />
            </motion.div>
          </Box>
        </Grid>
      </Grid>
      <Grid
        className="row"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          padding: "0px 40px",
          display: "flex",
          justifyContent: "center",
          marginTop: "0px !important",
        }}
      >
        <Grid
          item
          xs={12}
          className="column"
          sx={{
            display: "flex",
            paddingLeft: "0px !important",
            alignItems: "center",
            paddingTop: "0px !important",
            width: "100%",
            marginTop: "0 px !important",
            justifyContent: "center",
          }}
        >
          {" "}
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "bolder",
              textAlign: "center",
              fontStyle: "italic",
              color: "#262324",
            }}
            color="text.primary"
          >
            Login
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          className="column"
          sx={{
            display: "flex",
            paddingLeft: "0px !important",
            alignItems: "center",
            paddingTop: "0px !important",
            width: "100%",
            marginTop: "0 px !important",
            justifyContent: "left",
            padding: "0px 16px",
          }}
        >
          <Box
            component="form"
            sx={{ width: "100%" }}
            noValidate
            autoComplete="off"
          >
            {" "}
            <TextField
              fullWidth
              id="standard-basic"
              label="Username"
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
            <FormControl
              fullWidth
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
              variant="standard"
            >
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          className="column"
          sx={{
            display: "flex",
            paddingLeft: "0px !important",
            alignItems: "center",
            paddingTop: "0px !important",
            width: "auto !importan",
            marginTop: "0px !important",
            justifyContent: "start",
            marginBottom: "76px",
          }}
        >
          <Link href="/dashboard">
            <Button
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
              Login
            </Button>
          </Link>
          <Button
            sx={{
              width: "180px",
              borderRadius: "400px",
              backgroundColor: "#262324",
              "&:hover": {
                backgroundColor: "#262324",
              },
            }}
            variant="contained"
            color="success"
          >
            Clear
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login;
