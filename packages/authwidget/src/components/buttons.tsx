import styled from "styled-components";

export interface ButtonStyles {
  hoverBgColor?: string;
  hoverBoxShadow?: string;
}

const SubmitButton = styled.button<{
  $styleString: string;
  $hoverBgColor?: string;
  $hoverBoxShadow?: string;
}>`
  ${(props) => props.$styleString}
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.97);
  }

  &:hover {
    background-color:${(props) => props.$hoverBgColor || "#2563eb"}
    transform: translateY(-1px);
    box-shadow: ${(props) =>
      props.$hoverBoxShadow || "0 4px 12px rgba(59, 130, 246, 0.4)"};
  }
`;

const TabButton = styled.button<{
  $styleString: string;
  $active: boolean;
}>`
  ${(props) => props.$styleString}

  &:hover {
    border: 0.5px solid #c4cfe7ff;
  }

  transition: all 0.5s ease-in-out;

  &:focus {
    outline: 2px solid "#c4cfe7ff";
  }
`;

export { TabButton, SubmitButton };
