import { useState } from "react";
import { themes } from "./themes/themes";
import { Mail, Contact, Eye, EyeOff, Ban, Check } from "lucide-react";
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
  type InputStyles,
  type ButtonStyles,
  StatusContainer,
} from "./components";
import useAuthStatus, { type authStatusReturn } from "./hooks/useAuthStatus";
import type { AuthWidgetProps } from "./interfaces";
import { cssPropertiesToString } from "./utils/cssHelpers";

const AuthWidget = ({
  theme = "modern",
  title,
  subtitle,
  state,
  behavior,
  styleOverrides,
}: AuthWidgetProps) => {
  const themeObject = themes[theme];
  const inputStyles = themeObject["inputStyles"] as InputStyles;
  const buttonStyles = themeObject["buttonStyles"] as ButtonStyles;
  const [activeMode, setActiveMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);
  const authStatusHook: authStatusReturn = useAuthStatus();

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
              $focusColor={
                styleOverrides?.input?.focusColor
                  ? styleOverrides.input.focusColor
                  : inputStyles.focusColor
              }
              $placeholderColor={
                styleOverrides?.input?.placeholderColor
                  ? styleOverrides.input.placeholderColor
                  : inputStyles.placeholderColor
              }
              $shadowColor={
                styleOverrides?.input?.shadowColor
                  ? styleOverrides.input.shadowColor
                  : inputStyles.shadowColor
              }
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
              $focusColor={
                styleOverrides?.input?.focusColor
                  ? styleOverrides.input.focusColor
                  : inputStyles.focusColor
              }
              $placeholderColor={
                styleOverrides?.input?.placeholderColor
                  ? styleOverrides.input.placeholderColor
                  : inputStyles.placeholderColor
              }
              $shadowColor={
                styleOverrides?.input?.shadowColor
                  ? styleOverrides.input.shadowColor
                  : inputStyles.shadowColor
              }
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
              $focusColor={
                styleOverrides?.input?.focusColor
                  ? styleOverrides.input.focusColor
                  : inputStyles.focusColor
              }
              $placeholderColor={
                styleOverrides?.input?.placeholderColor
                  ? styleOverrides.input.placeholderColor
                  : inputStyles.placeholderColor
              }
              $shadowColor={
                styleOverrides?.input?.shadowColor
                  ? styleOverrides.input.shadowColor
                  : inputStyles.shadowColor
              }
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

        {authStatusHook.authStatus && (
          <StatusContainer
            $status={authStatusHook.authStatus.status}
            $styleError={cssPropertiesToString(
              themeObject["statusContainerError"]
            )}
            $styleSuccess={cssPropertiesToString(
              themeObject["statusContainerSuccess"]
            )}
          >
            {authStatusHook.authStatus.status == "error" ? (
              <Ban color={themeObject.statusContainerIcon.errorColor} />
            ) : (
              <Check color={themeObject.statusContainerIcon.successColor} />
            )}
            {authStatusHook.authStatus.message}
          </StatusContainer>
        )}

        <SubmitButton
          onClick={() => {
            authStatusHook.submitCallbackWrapper(behavior.onSubmit);
          }}
          $styleString={cssPropertiesToString(themeObject["submitButton"])}
          $hoverBgColor={
            styleOverrides?.button?.hoverBgColor
              ? styleOverrides.button.hoverBgColor
              : buttonStyles.hoverBgColor
          }
          $hoverBoxShadow={
            styleOverrides?.button?.hoverBoxShadow
              ? styleOverrides.button.hoverBoxShadow
              : buttonStyles.hoverBoxShadow
          }
        >
          {activeMode == "login" ? "Log In" : "Sign Up"}
        </SubmitButton>
      </Container>
    </Card>
  );
};

export default AuthWidget;
