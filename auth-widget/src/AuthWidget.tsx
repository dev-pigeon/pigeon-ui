import React, { useState } from "react";
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

const TabContainer = styled.div<{ $styleString: string }>`
  ${(props) => props.$styleString}
`;

const TabButton = styled.button<{ $styleString: string; $active: boolean }>`
  ${(props) => props.$styleString}

  &:hover {
    background-color: ${(props) => (props.$active ? "#2563eb" : "#1e293b")};
  }

  transition: all 0.5s ease-in-out;

  &:focus {
    outline: 2px solid #3b82f6;
  }
`;

const AuthWidget = ({ theme = "modern", title, subtitle }: AuthWidgetProps) => {
  const themeObject = themes[theme];
  const [activeMode, setActiveMode] = useState<"login" | "signup" | "none">(
    "none"
  );

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

      <TabContainer
        $styleString={cssPropertiesToString(themeObject["tabContainer"])}
      >
        <TabButton
          $styleString={cssPropertiesToString(
            activeMode === "login"
              ? themeObject["tabButtonActive"]
              : themeObject["tabButton"]
          )}
          $active={activeMode === "login"}
          onClick={() => setActiveMode("login")}
        >
          Log In
        </TabButton>
        <TabButton
          $styleString={cssPropertiesToString(
            activeMode === "signup"
              ? themeObject["tabButtonActive"]
              : themeObject["tabButton"]
          )}
          $active={activeMode === "signup"}
          onClick={() => setActiveMode("signup")}
        >
          Sign Up
        </TabButton>
      </TabContainer>
    </Container>
  );
};

export default AuthWidget;
