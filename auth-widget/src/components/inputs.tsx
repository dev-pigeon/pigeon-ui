import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-x: hidden;
  padding-bottom: 4px;
`;

const IconWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const Input = styled.input<{ $styleString: string }>`
  ${(props) => props.$styleString}

  position: relative;
  background-image: linear-gradient(to right, #055ff1ff);
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  box-sizing: border-box;
  transition: all 0.65s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }

  &:focus {
    outline: none;
    background-size: 100% 2px;
    box-shadow: 0 4px 8px rgba(59, 131, 246, 0.7);
  }
`;

const InputWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

export { InputContainer, Input, InputWrapper, IconWrapper };
