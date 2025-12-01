import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding-bottom: 12px;
`;

const IconWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}

  &:hover {
    color: #cbd5e1;
  }
`;

const Input = styled.input<{
  $styleString: string;
  $focusColor?: string;
  $placeholderColor?: string;
  $shadowColor?: string;
}>`
  ${(props) => props.$styleString}

  position: relative;
  background-image: linear-gradient(
    to right,
    ${(props) => props.$focusColor || "#055ff1ff"}
  );
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: 0% 100%;
  box-sizing: border-box;
  transition: all 0.65s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: ${(props) => props.$placeholderColor || "#64748b"};
    opacity: 1;
  }

  &:focus {
    outline: none;
    background-size: 100% 2px;
    box-shadow: 0 4px 8px
      ${(props) => props.$shadowColor || "rgba(59, 131, 246, 0.7)"};
  }
`;

const InputWrapper = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

export { InputContainer, Input, InputWrapper, IconWrapper };
