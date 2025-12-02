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
  $status: "success" | "error";
}>`
  ${(props) => props.$status === "success" && props.$styleSuccess}
`;

export { TabContainer, Card, Container, StatusContainer };
