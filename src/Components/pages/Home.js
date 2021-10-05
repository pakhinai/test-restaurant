import React from "react";
import "./home.css";
import {useHistory } from "react-router-dom";

export default function Index() {
  const history = useHistory()
  return (
    <div className="container">
      <div className="card">
        <img src="./images/nong.jpg" alt="ร้านน้อง" />
        <h3>ร้านอาหารตามสั่งน้อง</h3>
        <button onClick={() => history.push("/nong")}>
          เลือกซื้ออาหาร
        </button>
      </div>

      <div className="card">
        <img src="./images/covid.jpg" alt="ร้านCovid" />
        <h3>ร้านอาหารตามสั่งCovid</h3>
        <button onClick={() => history.push("/covid")}>
          เลือกซื้ออาหาร
        </button>
      </div>

      <div className="card">
        <img src="./images/khun.jpg" alt="ร้านคุณ" />
        <h3>ร้านอาหารตามสั่งคุณ</h3>
        <button onClick={() => history.push("/khun")}>
          เลือกซื้ออาหาร
        </button>
      </div>

      <div className="card">
        <img src="./images/tae.jpg" alt="ร้านแต" />
        <h3>ร้านอาหารตามสั่งแต</h3>
        <button onClick={() => history.push("/tae")}>
          เลือกซื้ออาหาร
        </button>
      </div>

      <div className="card">
        <img src="./images/hor.jpg" alt="ร้านฮ้อ" />
        <h3>ร้านอาหารตามสั่งฮ้อ</h3>
        <button onClick={() => history.push("/hor")}>
          เลือกซื้ออาหาร
        </button>
      </div>

      <div className="card">
        <img src="./images/aoi.jpg" alt="ร้านอ้อย" />
        <h3>ร้านอาหารตามสั่งอ้อย</h3>
        <button onClick={() => history.push("/aoi")}>
          เลือกซื้ออาหาร
        </button>
      </div>
    </div>
  );
}
