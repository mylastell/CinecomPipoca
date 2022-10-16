import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Series from "./components/Series";
import Home from "./components/Home";
import Filmes from "./components/Filmes";
import cinema from "../src/components/img/cinema.jpg";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  background-color: #7A33FF;
  padding:10px;
}

ul{
    display: inline-block;
    width: 79%;
    text-align: center;
    word-spacing: 50px;
  }
  li{
    display: inline;
    margin-left: 150px;
    margin:35%;
    color: white;
    font-weight: 600px;
    font-size: 20px;
    cursor: pointer;
    
  }
  h1{
    padding: 10px;
    color: white;
    display: flex;
    height: 60px; 

}
`;

const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bolder;
`;

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />

        <h1>🍿Cinema com Pipoca🍿</h1>
        <ul>
          <li>
            <SLink to="/series">Series</SLink>
          </li>
          <li>
            <SLink to="/filmes">Filmes</SLink>
          </li>
          <li>
            <SLink to="/">Home</SLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </Router>
    );
  }
}
