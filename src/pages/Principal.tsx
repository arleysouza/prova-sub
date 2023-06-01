import styled from "styled-components";

export default function Principal() {
  return (
    <WrapperSld>
      <BoxSld>
        <TitleSld>Países</TitleSld>
      </BoxSld>
      <BoxSld>
        <TitleSld>Indicadores</TitleSld>
      </BoxSld>
      <BoxSld>
        <TitleSld>Indicadores</TitleSld>
      </BoxSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 900px;
  margin-top: 20px;
  box-sizing: border-box;
`;

const BoxSld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  margin: 0px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
`;
const TitleSld = styled.h5`
  text-align: center;
  margin: 0px 0px 10px 0px;
`;
