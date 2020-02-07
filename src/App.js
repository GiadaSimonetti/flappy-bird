import React from "react";
import styled from "styled-components";
// import Bird from "./Bird/Bird";
import Cloud from "./Cloud/Cloud";

const Wrapper = styled.div`
   {
    min-height: 100vh;
    text-align: center;
    // background-color: #87cefa;
    background: #c9dbe9;
    background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
    background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
    background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  }
`;

const Title = styled.h1`
   {
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

function App() {
  return (
    <Wrapper>
      <Title className="App-header">Flappy something</Title>
      {/* <Bird /> */}
      <Cloud />
    </Wrapper>
  );
}

export default App;
