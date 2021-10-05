import React, { useState } from "react";
import "./nongStore.css";
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

export default function NongStore(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [amounts, setAmounts] = useState({
    listOne: 0,
    listTwo: 0,
    listThree: 0,
    listFour: 0,
    listFive: 0,
    listSix: 0,
    listSeven: 0,
    listEight: 0,
    listNine: 0,
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
    <div className="containerNong">
      <h2>รายการอาหารร้านน้อง</h2>

      <div className="containerCardNong">
        <div className="cardNong">
          <img src="./images/nong-kapaomou.jpg" />
          <h3>ข้าวกระเพราหมู</h3>
          <div className="cardButton">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listOne > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราหมู",
                      price: 40,
                      quantity: amounts.listOne,
                    },
                  ]);
                  setAmounts({ ...amounts, listOne: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listOne: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listOne}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-kapao-seafood.jpg" />
          <h3>ข้าวกระเพราทะเล</h3>
          <div className="cardButton">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listTwo > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวกระเพราทะเล",
                      price: 50,
                      quantity: amounts.listTwo,
                    },
                  ]);
                  setAmounts({ ...amounts, listTwo: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listTwo: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listTwo}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-fried-rice-pock.jpg" />
          <h3>ข้าวผัดหมู</h3>
          <div className="cardButton">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listThree > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวผัดหมู",
                      price: 40,
                      quantity: amounts.listThree,
                    },
                  ]);
                  setAmounts({ ...amounts, listThree: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listThree: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listThree}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-fried-rice-seafood.jpg" />
          <h3>ข้าวผัดทะเล</h3>
          <div className="cardButton">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listFour > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวผัดทะเล",
                      price: 50,
                      quantity: amounts.listFour,
                    },
                  ]);
                  setAmounts({ ...amounts, listFour: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listFour: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listFour}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-fried-pork-with-garlic.jpg" />
          <h3>ข้าวหมูทอดกระเทียม</h3>
          <div className="cardButton">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listFive > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวหมูทอดกระเทียม",
                      price: 40,
                      quantity: amounts.listFive,
                    },
                  ]);
                  setAmounts({ ...amounts, listFive: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listFive: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listFive}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-fried-rice-shrimp.jpg" />
          <h3>ข้าวผัดกุ้ง</h3>
          <div className="cardButton">
            <h3>45 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listSix > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ข้าวผัดกุ้ง",
                      price: 45,
                      quantity: amounts.listSix,
                    },
                  ]);
                  setAmounts({ ...amounts, listSix: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listSix: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listSix}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-radna-seafood.jpg" />
          <h3>ราดหน้าทะเล</h3>
          <div className="cardButton">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listSeven > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "ราดหน้าทะเล",
                      price: 50,
                      quantity: amounts.listSeven,
                    },
                  ]);
                  setAmounts({ ...amounts, listSeven: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listSeven: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listSeven}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-dry-suki.jpg" />
          <h3>สุกี้แห้ง</h3>
          <div className="cardButton">
            <h3>40 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listEight > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "สุกี้แห้ง",
                      price: 40,
                      quantity: amounts.listEight,
                    },
                  ]);
                  setAmounts({ ...amounts, listEight: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listEight: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listEight}
              />
              <button style={{ marginRight: 15, height: 30 }} type="submit">
                ตกลง
              </button>
            </form>
          </div>
        </div>

        <div className="cardNong">
          <img src="./images/nong-suki-seafood.jpg" />
          <h3>สุกี้ทะเล</h3>
          <div className="cardButton">
            <h3>50 บาท</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (amounts.listNine > 0) {
                  setTotal([
                    ...total,
                    {
                      name: "สุกี้ทะเล",
                      price: 50,
                      quantity: amounts.listNine,
                    },
                  ]);
                  setAmounts({ ...amounts, listNine: 0 });
                }
              }}
            >
              <input
                placeholder="จำนวน"
                style={{ width: 100, height: 30, marginRight: 15 }}
                onChange={(e) =>
                  setAmounts({ ...amounts, listNine: e.target.value })
                }
                type="number"
                min={0}
                value={amounts.listNine}
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
      <div className="nongConfirm">
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
                  restaurant: "ร้านน้อง",
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
