import React from "react";
import styled from "styled-components";
import Cloud from "./Cloud/Cloud";

const Wrapper = styled.div`
   {
    min-height: 100vh;
    text-align: center;
    background-color: #87cefa;
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
      <Cloud />
    </Wrapper>
  );
}

export default App;
