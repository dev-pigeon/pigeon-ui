import styled from "styled-components";

const Card = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const Container = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const TabContainer = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const StatusContainer = styled.div<{
  $styleSuccess: string;
  $styleError: string;
  $status: "success" | "error";
}>`
  ${(props) => props.$status === "success" && props.$styleSuccess}
  ${(props) => props.$status === "error" && props.$styleError}
`;

export interface StatusContainerIcon {
  successColor: string;
  errorColor: string;
}

export { TabContainer, Card, Container, StatusContainer };
