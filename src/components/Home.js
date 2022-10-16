import React from "react";
import cinema from "../components/img/cinema.jpg"
import styled from "styled-components";

const Imagem = styled.img`
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        padding: 1%; 
`;

export default class Home extends React.Component {
  render() {
    return (
     
      <div>
    <Imagem src={cinema} alt="foto de capa" />
    
    </div> 
    
            
    );
  }
}
