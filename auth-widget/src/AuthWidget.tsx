import React from "react";
import styled from "styled-components";
import { themes } from "./themes";

type AuthWidgetProps = {
  theme?: "modern" | "light" | "dark";
  title?: "string";
  subtitle?: "string";
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

const SubTitle = styled.p<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const AuthWidget = ({ theme = "modern", title, subtitle }: AuthWidgetProps) => {
  const themeObject = themes[theme];

  return (
    <Container $styleString={cssPropertiesToString(themeObject["container"])}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Title $styleString={cssPropertiesToString(themeObject["title"])}>
          {title || "Account Access"}
        </Title>
        <SubTitle $styleString={cssPropertiesToString(themeObject["subtitle"])}>
          {subtitle || "Select an option to continue."}
        </SubTitle>
      </div>
    </Container>
  );
};

export default AuthWidget;
