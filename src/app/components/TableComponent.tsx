'use client';
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import directus from "@/app/lib/directus";
import { readItems } from "@directus/sdk";

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

export default async function BasicTable() {
  const bales = await getBales();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background:"#000"}}>
          <TableRow>
          <TableCell sx={{color:"white",textAlign:"center"}}>ID</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Seed Variant</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Net Weight</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Time</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Grade</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Bale Status</TableCell>
            <TableCell sx={{color:"white",textAlign:"center"}}>Date Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bales.map((bale) => (
            <TableRow
              key={bale.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {bale.id}
              </TableCell>
              <TableCell align="center">{bale.seedvariant}</TableCell>
              <TableCell align="center">{bale.netweight}</TableCell>
              <TableCell align="center">{bale.time}</TableCell>
              <TableCell align="center">{bale.grade}</TableCell>
              <TableCell align="center">{bale.balestatus}</TableCell>
              <TableCell align="center">{bale.date_created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
