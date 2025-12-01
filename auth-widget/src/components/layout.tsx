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

export { TabContainer, Card, Container };
