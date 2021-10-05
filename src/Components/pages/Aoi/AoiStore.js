import React, { useState } from "react";
import "./aoi.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useHistory } from "react-router";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

export default function AoiStore(props) {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [amount, setAmount] = useState({
    listOne: 0,
    listTwo: 0,
    listThree: 0,
    listFour: 0,
    listFive: 0,
    listSix: 0,
  });

  const [total, setTotal] = useState([
    {
      name: "",
      price: 0,
      quantity: 0,
    },
  ]);

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = total.map((item) =>
    createRow(item.name, item.price, item.quantity)
  );

  const invoiceSubtotal = subtotal(rows);

  const clearOrder = () => {
    setTotal([
      {
        name: "",
        price: 0,
        quantity: 0,
      },
    ]);
  };

  return (
    <div className="containerAoi">
      <h2>รายการอาหารร้านอ้อย</h2>

      <div className="containerCardAoi">
        <div className="cardAoi">
          <img src="./images/aoi-fried-rice-seafood-tomyum.jpg" />
          <h3>ข้าวผัดต้มยำ</h3>
          <div className="cardButtonAoi">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวผัดต้มยำ",
                      price: 50,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardAoi">
          <img src="./images/aoi-khao-kluk-kapi.jpg" />
          <h3>ข้าวคลุกกะปิ</h3>
          <div className="cardButtonAoi">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวคลุกกะปิ",
                      price: 50,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardAoi">
          <img src="./images/aoi-pad-thai-with-fresh-shrimp.jpg" />
          <h3>ผัดไทยกุ้งสด</h3>
          <div className="cardButtonAoi">
            <h3>55 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ผัดไทยกุ้งสด",
                      price: 55,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardAoi">
          <img src="./images/aoi-suki-rolls.jpg" />
          <h3>สุกี้โรล</h3>
          <div className="cardButtonAoi">
            <h3>45 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "สุกี้โรล",
                      price: 45,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardAoi">
          <img src="./images/aoi-fried-clams.jpg" />
          <h3>หอยทอด</h3>
          <div className="cardButtonAoi">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "หอยทอด",
                      price: 40,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardAoi">
          <img src="./images/aoi-kapow-seafood.jpg" />
          <h3>ข้าวกระเพราทะเล</h3>
          <div className="cardButtonAoi">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราทะเล",
                      price: 50,
                      quantity: amount.listOne,
                    },
                  ]);
                  setAmount({ ...amount, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  รายระเอียด
                </TableCell>
                <TableCell align="right">จำนวนเงิน</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>รายการ</TableCell>
                <TableCell align="right">ราคา</TableCell>
                <TableCell align="right">จำนวน</TableCell>
                <TableCell align="right">รวม</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>รวมทั้งหมด</TableCell>
                <TableCell align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div className="aoiConfirm">
        <button
          style={{ marginRight: 15, backgroundColor: "red" }}
          onClick={() => {
            clearOrder();
          }}
        >
          เคลียร์ออเดอร์
        </button>
        <button onClick={handleClickOpen}>ยืนยันคำสั่งซื้อ</button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"ยืนยันคำสั่งซื้อ"}</DialogTitle>

        <DialogActions>
          <Button
            onClick={() => {
              clearOrder();
              handleClose();
            }}
          >
            ยกเลิก
          </Button>
          <Button
            onClick={() => {
              let date = new Date(Date.now());
              let hours = date.getHours();
              hours = hours > 9 ? hours : "0" + hours;
              let minutes = date.getMinutes();
              minutes = minutes > 9 ? minutes : "0" + minutes;
              date = `${date.getFullYear()}/${
                date.getMonth() + 1
              }/${date.getDate()} ${hours}.${minutes}`;

              props.setSummary([
                ...props.summary,
                {
                  restaurant: "ร้านอ้อย",
                  details: total,
                  time: date,
                },
              ]);
              handleClose();
              setTimeout(() => {
                history.push("/");
              }, 1000);
            }}
            autoFocus
          >
            ยืนยัน
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
