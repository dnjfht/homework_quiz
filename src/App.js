import "./App.css";
import Start from "./Start";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

function App() {
  return (
    <Wrap>
      <Start />
    </Wrap>
  );
}

export default App;
