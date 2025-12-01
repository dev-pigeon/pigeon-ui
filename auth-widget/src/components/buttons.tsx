import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0% {
    background-color: #2563eb;
  }
  50% {
    background-color: #1d4ed8;
  }
  100% {
    background-color: #3b82f6;
  }
`;

const SubmitButton = styled.button<{ $styleString: string }>`
  ${(props) => props.$styleString}
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.97);
    animation: ${flash} 0.5s ease;
  }

  &:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  }
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
