import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import nongData from "../../Data/Nong";
import covidData from "../../Data/Covid";
import khunData from "../../Data/Khun";
import taeData from "../../Data/Tae";
import horData from "../../Data/Hor";
import aoiData from "../../Data/Aoi"

export default function Header(props) {
  const { nongProduct } = nongData;
  const { covidProduct } = covidData;
  const { khunProduct } = khunData;
  const { taeProduct } = taeData;
  const { horProduct } = horData;
  const {aoiProduct} = aoiData
  const history = useHistory();

  const [text, setText] = useState("");
  let temp = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== "") {
      let newNong = nongProduct.filter((item) => item.name.includes(text));
      let newCovid = covidProduct.filter((item) => item.name.includes(text));
      let newKhun = khunProduct.filter((item) => item.name.includes(text));
      let newTae = taeProduct.filter((item) => item.name.includes(text));
      let newHor = horProduct.filter(item => item.name.includes(text))
      let newAoi = aoiProduct.filter(item=> item.name.includes(text))

      newNong = newNong.map((item) => item.name);
      newCovid = newCovid.map((item) => item.name);
      newKhun = newKhun.map((item) => item.name);
      newTae = newTae.map((item) => item.name);
      newHor = newHor.map(item => item.name)
      newAoi = newAoi.map(item => item.name)

      if (newNong.length > 0) {
        temp.push({ restaurant: "ร้านน้อง", name: newNong });
      }
      if (newCovid.length > 0) {
        temp.push({ restaurant: "ร้านCovid", name: newCovid });
      }
      if (newKhun.length > 0) {
        temp.push({ restaurant: "ร้านคุณ", name: newKhun });
      }
      if (newTae.length > 0) {
        temp.push({ restaurant: "ร้านแต", name: newTae });
      }
      if(newHor.length > 0) {
        temp.push({restaurant: "ร้านฮ้อ", name: newHor})
      }
      if(newAoi.length > 0) {
        temp.push({restaurant: "ร้านอ้อย", name: newAoi})
      }

      props.setSearch(temp);
      setText("");
      history.push("/search");
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>Restaurant</h1>
      </div>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <input onChange={(e) => setText(e.target.value)} value={text} />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>

      <div className="link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/summary">
              <i class="far fa-file-alt"></i>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
