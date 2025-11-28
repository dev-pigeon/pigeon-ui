import React from "react";
import styled from "styled-components";
import { themes } from "./themes";

type AuthWidgetProps = {
  theme?: "modern" | "light" | "dark";
};

const cssPropertiesToString = (styles: React.CSSProperties): string => {
  return Object.entries(styles)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join("\n  ");
};

const Container = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const Title = styled.p<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const AuthWidget = ({ theme = "modern" }: AuthWidgetProps) => {
  const themeObject = themes[theme];

  return (
    <Container $styleString={cssPropertiesToString(themeObject["container"])}>
      <Title $styleString={cssPropertiesToString(themeObject["title"])}>
        <p>Account Access</p>
      </Title>
    </Container>
  );
};

export default AuthWidget;
