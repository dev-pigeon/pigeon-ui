import styled from "styled-components";

const SubmitButton = styled.button<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const TabButton = styled.button<{
  $styleString: string;
  $active: boolean;
}>`
  ${(props) => props.$styleString}

  &:hover {
    background-color: ${(props) => (props.$active ? "" : "#1e293b")};
    border: 0.5px solid #c4cfe7ff;
  }

  transition: all 0.5s ease-in-out;

  &:focus {
    outline: 2px solid "#c4cfe7ff";
  }
`;

export { TabButton, SubmitButton };
