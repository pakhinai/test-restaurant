import React from "react";
import "./summary.css";

import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Summary(props) {
  function createData(name, details, time) {
    return {
      name,
      details,
      time,
    };
  }

  const rows = props.summary.map((item) =>
    createData(item.restaurant, item.details, item.time)
  );

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    function subtotal(items) {
      return items.details
        .map(({ price, quantity }) => price * quantity)
        .reduce((sum, i) => sum + i, 0);
    }

    const invoiceSubtotal = subtotal(row);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" >
            {row.name}
          </TableCell>
          <TableCell component="th" scope="row" align="right">
            {row.time}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>รายการ</TableCell>
                      <TableCell>ราคา</TableCell>
                      <TableCell>จำนวน</TableCell>
                      <TableCell>รวม</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.details.map((item) => (
                      <TableRow key={item.name}>
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell>{ccyFormat(item.price)}</TableCell>
                        <TableCell>{item.quantity}</TableCell>
                        <TableCell>
                          {ccyFormat(item.price * item.quantity)}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell colSpan={2}>รวมทั้งหมด</TableCell>
                      <TableCell>{ccyFormat(invoiceSubtotal)}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div className="containerSummary">
      <h2>ประวัติการสั่งซื้อ</h2>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
