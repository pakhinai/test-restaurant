import React, { useState } from "react";
import "./covid.css";
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

export default function CovidStore(props) {
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
    <div className="containerCovid">
      <h2>รายการอาหารร้านCovid</h2>

      <div className="containerCardCovid">
        <div className="cardCovid">
          <img src="./images/covid-kaopow-muo.jpg" />
          <h3>ข้าวกระเพราหมู</h3>
          <div className="cardButtonCovid">
            <h3>35 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราหมู",
                      price: 35,
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

        <div className="cardCovid">
          <img src="./images/covid-kaopow-beef.jpg" />
          <h3>ข้าวกระเพราเนื้อ</h3>
          <div className="cardButtonCovid">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listTwo > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราเนื้อ",
                      price: 40,
                      quantity: amount.listTwo,
                    },
                  ]);
                  setAmount({ ...amount, listTwo: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listTwo: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listTwo}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardCovid">
          <img src="./images/covid-kaopow-chicken.jpg" />
          <h3>ข้าวกระเพราไก่</h3>
          <div className="cardButtonCovid">
            <h3>35 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listThree > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราไก่",
                      price: 35,
                      quantity: amount.listThree,
                    },
                  ]);
                  setAmount({ ...amount, listThree: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listThree: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listThree}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardCovid">
          <img src="./images/covid-kaopow-crispy-pork.jpg" />
          <h3>ข้าวกระเพราหมูกรอบ</h3>
          <div className="cardButtonCovid">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listFour > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราหมูกรอบ",
                      price: 40,
                      quantity: amount.listFour,
                    },
                  ]);
                  setAmount({ ...amount, listFour: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listFour: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listFour}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardCovid">
          <img src="./images/covid-kaopow-seafood.jpg" />
          <h3>ข้าวกระเพราทะเล</h3>
          <div className="cardButtonCovid">
            <h3>45 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listFive > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราทะเล",
                      price: 45,
                      quantity: amount.listFive,
                    },
                  ]);
                  setAmount({ ...amount, listFive: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listFive: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listFive}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardCovid">
          <img src="./images/covid-kaopow-shrimp.jpg" />
          <h3>กระเพรากุ้ง</h3>
          <div className="cardButtonCovid">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amount.listSix > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "กระเพรากุ้ง",
                      price: 40,
                      quantity: amount.listSix,
                    },
                  ]);
                  setAmount({ ...amount, listSix: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmount({ ...amount, listSix: e.target.value })
                }
                type="number"
                min={0}
                value={amount.listSix}
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

      <div className="covidConfirm">
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
                  restaurant: "ร้านCovid",
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
