"use client";
import React from "react";
import { useEffect } from "react";
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
import { useParams } from "next/navigation";

async function getBales() {
  try {
    const response = await directus.request(
      readItems("bales", {
        fields: ["*"],
        sort: ["-date_created"],
      })
    );

    // Log the response to the console
    console.log("Bales response:", response);

    return response;
  } catch (error) {
    console.error("Error fetching bales:", error);
    throw error; // Re-throw the error if you want to handle it further up
  }
}

function page() {
  useEffect(() => {
    const fetchBales = async () => {
      try {
        const bales = await getBales();
        // Process bales data as needed
      } catch (error) {
        console.error("Failed to fetch bales:", error);
      }
    };

    fetchBales();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default page;
