// "use client";
import React from "react";
import "../../../globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "../../../page.module.css";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "@fontsource/open-sans";
import "@fontsource/poppins";
import { Typography } from "@mui/material";
import Navigation from "../../../Navigation";
import BackToTopButton from "../../../BackToTopButton";
import "../../../page.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "../../../globals.css";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Footer from "@/app/Footer";
import TransitComponent from "@/app/components/TableComponent";
import directus from "@/app/lib/directus";
import { readItem, readItems } from "@directus/sdk";
import { notFound } from "next/navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

async function getBaleStatus(slug: string) {
  try {
    const balestatus = await directus.request(
      readItem("balestatus", slug, {
        fields: ["*","title","breadcrumb"],
      })
    );
   
    return balestatus;
  } catch (error) {
    console.error("Error fetching bale status:", error);
    notFound();
  }
}
console.log(getBaleStatus)
async function getBales() {
  return directus.request(
    readItems("bales", {
      fields: [
        "id",
        "seedvariant",
        "netweight",
        "time",
        "grade",
        "balestatus",
        "date_created",
      ],
      sort: ["-date_created"],
    })
  );
}

interface Params {
  slug: string; // Adjust according to your actual parameter structure
}
export default async function Home({ params }: { params: Params }) {
  const bales = await getBales();
  const balestatus = await getBaleStatus(params.slug);
  const theme = createTheme({
    typography: {
      fontFamily: '"Poppins", "Open Sans", Arial, sans-serif',
    },
    components: {
      MuiGrid: {
        styleOverrides: {
          root: {
            "@media (min-width: 0px)": {
              width: "100%",
              marginLeft: "0px",
            },
          },
          item: {
            "@media (min-width: 0px)": {
              paddingLeft: "0px",
            },
            paddingTop: "0px",
            "&.css-8sa601-MuiGrid-root": {
              "@media (min-width: 0px)": {
                paddingLeft: "0px !important",
              },
            },
            "&.css-1x8z8d6-MuiGrid-root > &": {
              "@media (min-width: 0px)": {
                paddingLeft: "0px !important",
              },
            },
            ".css-aq8pb7-MuiSvgIcon-root": {
              fontSize: "16px !important",
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <div className={styles.center} style={{ width: "100%" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
                      <Link
                        underline="hover"
                        sx={{
                          fontFamily: "Open Sans",
                          fontSize: "12px",
                          fontStyle: "normal",
                          fontWeight: "400",
                        }}
                        color="inherit"
                        href="/dashboard/status"
                      >
                        Bale Status
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
                        {balestatus.breadcrumb || "No breadcrumb available"}
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
                       {balestatus.title || "No title available"}
                    </Typography>
                  </Grid>{" "}
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead sx={{ background: "#000" }}>
                        <TableRow>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            ID
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Seed Variant
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Net Weight
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Time
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Grade
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Bale Status
                          </TableCell>
                          <TableCell
                            sx={{ color: "white", textAlign: "center" }}
                          >
                            Date Created
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {bales.map((bale) => (
                          <TableRow
                            key={bale.id || 0 }
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {bale.id || "Bale ID"}
                            </TableCell>
                            <TableCell align="center">
                              {bale.seedvariant || "Seed Variant"}
                            </TableCell>
                            <TableCell align="center">
                              {bale.netweight || 80}kg
                            </TableCell>
                            <TableCell align="center">{bale.time || "Time"}</TableCell>
                            <TableCell align="center">{bale.grade || "Grade"}</TableCell>
                            <TableCell align="center">
                              {bale.balestatus || "Bale Status"}
                            </TableCell>
                            <TableCell align="center">
                              {bale.date_created || "Date Created"}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Footer></Footer>
              </Container>
            </Box>
          </div>{" "}
          <BackToTopButton></BackToTopButton>
        </ThemeProvider>
      </div>
    </div>
  );
}
