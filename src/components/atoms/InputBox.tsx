import styled from "styled-components";
import { color } from "../../styles/palette";

// TODO: any 제거
const InputBox = (props: any) => {
  return (
    <>
      <StyledInput {...props} />
    </>
  );
};

export default InputBox;

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  background-color: ${color.gray6};
  border: 0;
  padding: 0 8px;
`;