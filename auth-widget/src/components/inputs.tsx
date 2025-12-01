import styled from "styled-components";

const InputContainer = styled.div`
  width: 81.5%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IconWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const Input = styled.input<{ $styleString: string }>`
  ${(props) => props.$styleString}

  &::placeholder {
    color: #64748b;
    opacity: 1;
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 0;
    border-color: #3b82f6;
  }
`;

const InputWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

export { InputContainer, Input, InputWrapper, IconWrapper };
