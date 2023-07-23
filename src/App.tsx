import GlobalStyles from "./GlobalStyles";
import AdviceContainer from "./components/AdviceContainer";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <AdviceContainer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #202733;
`;
