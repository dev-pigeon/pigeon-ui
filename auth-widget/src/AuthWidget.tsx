import React, { useState } from "react";
import { themes } from "./themes/themes";
import { Mail, Contact, Eye, EyeOff } from "lucide-react";
import {
  Card,
  Container,
  TabContainer,
  Title,
  SubTitle,
  TabButton,
  SubmitButton,
  InputContainer,
  InputWrapper,
  IconWrapper,
  Input,
} from "./components";

interface AuthWidgetBehaviors {
  handleUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AuthWidgetState {
  username: string;
  email: string;
  password: string;
}

type AuthWidgetProps = {
  behavior: AuthWidgetBehaviors;
  state: AuthWidgetState;
  theme?: "modern" | "light" | "dark";
  title?: string;
  subtitle?: string;
};

const cssPropertiesToString = (
  styles: React.CSSProperties | string
): string => {
  return Object.entries(styles)
    .map(([key, value]) => {
      const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabKey}: ${value};`;
    })
    .join("\n  ");
};

const AuthWidget = ({
  theme = "modern",
  title,
  subtitle,
  state,
  behavior,
}: AuthWidgetProps) => {
  const themeObject = themes[theme];
  const [activeMode, setActiveMode] = useState<"login" | "signup" | "none">(
    "login"
  );
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Card $styleString={cssPropertiesToString(themeObject["card"])}>
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
          <SubTitle
            $styleString={cssPropertiesToString(themeObject["subtitle"])}
          >
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

        <InputContainer>
          <InputWrapper
            $styleString={cssPropertiesToString(themeObject["inputWrapper"])}
          >
            <IconWrapper
              $styleString={cssPropertiesToString(themeObject["inputIcon"])}
            >
              <Mail size={20} />
            </IconWrapper>
            <Input
              $styleString={cssPropertiesToString(themeObject["inputWithIcon"])}
              type="text"
              value={state.email}
              placeholder="Enter your email"
              onChange={behavior.handleEmail}
            />
          </InputWrapper>
          <InputWrapper
            $styleString={cssPropertiesToString(themeObject["inputWrapper"])}
          >
            <IconWrapper
              $styleString={cssPropertiesToString(themeObject["inputIcon"])}
            >
              <Contact size={20} />
            </IconWrapper>
            <Input
              $styleString={cssPropertiesToString(themeObject["inputWithIcon"])}
              type="text"
              placeholder={
                activeMode == "login"
                  ? "Enter your username"
                  : "Choose your username"
              }
              value={state.username}
              onChange={behavior.handleUsername}
            />
          </InputWrapper>

          <InputWrapper
            $styleString={cssPropertiesToString(themeObject["inputWrapper"])}
          >
            <IconWrapper
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              $styleString={cssPropertiesToString(themeObject["passwordIcon"])}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </IconWrapper>
            <Input
              $styleString={cssPropertiesToString(themeObject["inputWithIcon"])}
              type={showPassword ? "text" : "password"}
              value={state.password}
              placeholder={
                activeMode == "login"
                  ? "Enter your password"
                  : "Choose your password"
              }
              onChange={behavior.handlePassword}
            />
          </InputWrapper>
        </InputContainer>

        <SubmitButton
          $styleString={cssPropertiesToString(themeObject["submitButton"])}
        >
          {activeMode == "login" ? "Log In" : "Sign Up"}
        </SubmitButton>
      </Container>
    </Card>
  );
};

export default AuthWidget;
