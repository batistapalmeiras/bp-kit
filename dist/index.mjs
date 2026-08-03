// src/components/BottomSheet/index.tsx
import { createPortal } from "react-dom";

// src/components/BottomSheet/styles/BottomSheet.ts
import styled from "styled-components";

// src/styles/animations.ts
import { keyframes } from "styled-components";
var fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
var fadeUp = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;
var fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;
var slideUp = keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
`;

// src/components/BottomSheet/styles/BottomSheet.ts
var Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;
var Sheet = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border-radius: 20px 20px 0 0;
  padding-bottom: env(safe-area-inset-bottom);
  animation: ${slideUp} 0.28s cubic-bezier(0.32, 0.72, 0, 1);
`;
var Handle = styled.div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme: theme2 }) => theme2.colors.hairline};
  margin: 12px auto 0;
`;
var Content = styled.div`
  padding: 20px ${({ theme: theme2 }) => theme2.spacing.base} ${({ theme: theme2 }) => theme2.spacing.lg};
`;

// src/components/BottomSheet/index.tsx
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
function BottomSheet({ children, onClose }) {
  return createPortal(
    /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Overlay, { onClick: onClose }),
      /* @__PURE__ */ jsxs(Sheet, { children: [
        /* @__PURE__ */ jsx(Handle, {}),
        /* @__PURE__ */ jsx(Content, { children })
      ] })
    ] }),
    document.body
  );
}

// src/components/Brand/styles/Brand.ts
import { Link } from "react-router-dom";
import styled2, { css } from "styled-components";
var brandLayout = css`
  display: flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  flex-shrink: 0;
`;
var BrandLink = styled2(Link)`
  ${brandLayout}
  text-decoration: none;
`;
var BrandWrapper = styled2.div`
  ${brandLayout}
`;
var BrandLogo = styled2.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
var BrandName = styled2.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.titleMd.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.titleMd.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.primary};

  @media (max-width: 480px) {
    display: none;
  }
`;

// src/components/Brand/index.tsx
import { Fragment as Fragment2, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Brand({ icon, alt, name, to }) {
  const content = /* @__PURE__ */ jsxs2(Fragment2, { children: [
    /* @__PURE__ */ jsx2(BrandLogo, { src: icon, alt }),
    /* @__PURE__ */ jsx2(BrandName, { children: name })
  ] });
  if (to) {
    return /* @__PURE__ */ jsx2(BrandLink, { to, children: content });
  }
  return /* @__PURE__ */ jsx2(BrandWrapper, { children: content });
}

// src/components/Card/styles/Card.ts
import styled3 from "styled-components";
var Card = styled3.div`
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  padding: ${({ theme: theme2 }) => theme2.spacing.base};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.sm};
  transition: ${({ $hoverable }) => $hoverable ? "box-shadow 0.2s, border-color 0.2s" : "none"};

  ${({ $hoverable, theme: theme2 }) => $hoverable && `
    &:hover {
      box-shadow: ${theme2.shadows.lg};
      border-color: transparent;
    }
  `}
`;

// src/components/Button/index.tsx
import { forwardRef } from "react";

// src/components/Button/styles/Button.ts
import styled4 from "styled-components";

// src/components/_shared/buttonBase.ts
import { css as css2 } from "styled-components";
var sizeStyles = {
  xs: css2`
    height: 32px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.sm};
    font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
    font-weight: 600;
  `,
  sm: css2`
    height: 36px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.md};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonSm.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonSm.fontWeight};
  `,
  md: css2`
    height: 44px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.lg};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontWeight};
  `,
  lg: css2`
    height: 52px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.xl};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontWeight};
  `
};
var variantStyles = {
  primary: css2`
    background: ${({ theme: theme2 }) => theme2.colors.primary};
    color: ${({ theme: theme2 }) => theme2.colors.onPrimary};
    border: none;

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.primaryActive}; }
    &:disabled { background: ${({ theme: theme2 }) => theme2.colors.primaryDisabled}; cursor: not-allowed; }
  `,
  secondary: css2`
    background: ${({ theme: theme2 }) => theme2.colors.canvas};
    color: ${({ theme: theme2 }) => theme2.colors.ink};
    border: 1px solid ${({ theme: theme2 }) => theme2.colors.borderStrong};

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft}; }
    &:disabled { color: ${({ theme: theme2 }) => theme2.colors.mutedSoft}; border-color: ${({ theme: theme2 }) => theme2.colors.hairline}; cursor: not-allowed; }
  `,
  danger: css2`
    background: ${({ theme: theme2 }) => theme2.colors.canvas};
    color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
    border: 1px solid ${({ theme: theme2 }) => theme2.colors.primaryErrorText};

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.primaryErrorText}; color: ${({ theme: theme2 }) => theme2.colors.onPrimary}; }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  `
};
var buttonBaseCss = css2`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  line-height: 1;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s;
  white-space: nowrap;
  outline: none;
  width: ${({ $fullWidth }) => $fullWidth ? "100%" : "auto"};

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme: theme2 }) => theme2.colors.canvas}, 0 0 0 4px ${({ theme: theme2 }) => theme2.colors.ink};
  }
`;

// src/components/Button/styles/Button.ts
var StyledButton = styled4.button`
  ${buttonBaseCss}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;

// src/components/Button/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Button = forwardRef(function Button2({ variant = "primary", size = "md", fullWidth = false, type = "button", children, ...rest }, ref) {
  return /* @__PURE__ */ jsx3(StyledButton, { ref, type, $variant: variant, $size: size, $fullWidth: fullWidth, ...rest, children });
});

// src/components/Chip/styles/Chip.ts
import styled5 from "styled-components";
var ChipBar = styled5.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  padding: ${({ theme: theme2 }) => theme2.spacing.sm} 0;
`;
var Chip = styled5.button`
  display: inline-flex;
  align-items: center;
  height: 28px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.sm};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  border: 1px solid ${({ theme: theme2, $active }) => $active ? theme2.colors.primary : theme2.colors.hairline};
  background: ${({ theme: theme2, $active }) => $active ? theme2.colors.primary : "transparent"};
  color: ${({ theme: theme2, $active }) => $active ? theme2.colors.onPrimary : theme2.colors.muted};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
    color: ${({ theme: theme2, $active }) => $active ? theme2.colors.onPrimary : theme2.colors.primary};
  }
`;

// src/components/Typography/styles/Typography.ts
import styled6, { css as css3 } from "styled-components";
var styleMap = {
  h1: css3`font-size: ${({ theme: theme2 }) => theme2.typography.displayXl.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displayXl.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displayXl.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h2: css3`font-size: ${({ theme: theme2 }) => theme2.typography.displayMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displayMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displayMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h3: css3`font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displaySm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displaySm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h4: css3`font-size: ${({ theme: theme2 }) => theme2.typography.titleMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.titleMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.titleMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h5: css3`font-size: ${({ theme: theme2 }) => theme2.typography.titleSm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.titleSm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.titleSm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h6: css3`font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize}; font-weight: 600; line-height: ${({ theme: theme2 }) => theme2.typography.bodySm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  p: css3`font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.body};`,
  span: css3`font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.body};`,
  label: css3`font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted}; text-transform: uppercase; letter-spacing: 0.5px;`,
  caption: css3`font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.captionSm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.captionSm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted};`,
  error: css3`font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodySm.fontWeight}; color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};`,
  micro: css3`font-size: ${({ theme: theme2 }) => theme2.typography.microLabel.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.microLabel.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.microLabel.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted}; text-transform: uppercase; letter-spacing: 0.5px;`
};
var defaultTagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  span: "span",
  label: "p",
  caption: "p",
  error: "p",
  micro: "p"
};
var StyledText = styled6.p`
  ${({ $type }) => styleMap[$type]}
`;

// src/components/Typography/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Typography({ type, as, children, ...rest }) {
  const tag = as != null ? as : defaultTagMap[type];
  return /* @__PURE__ */ jsx4(StyledText, { as: tag, $type: type, ...rest, children });
}

// src/components/Empty/styles/Empty.ts
import styled7 from "styled-components";
var Wrapper = styled7.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  text-align: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;

// src/components/Empty/index.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function Empty({ title, description }) {
  return /* @__PURE__ */ jsxs3(Wrapper, { children: [
    /* @__PURE__ */ jsx5(Typography, { type: "h3", children: title }),
    /* @__PURE__ */ jsx5(Typography, { type: "p", children: description })
  ] });
}

// src/components/IconButton/index.tsx
import { forwardRef as forwardRef2 } from "react";

// src/components/IconButton/styles/IconButton.ts
import styled8, { css as css4 } from "styled-components";
var iconBoxSize = { xs: 14, sm: 16, md: 18, lg: 20 };
var IconWrap = styled8.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => iconBoxSize[$size]}px;
  height: ${({ $size }) => iconBoxSize[$size]}px;
  flex-shrink: 0;
  margin-top: 2px;

  svg { display: block; width: 100%; height: 100%; }
`;
var StyledButton2 = styled8.button`
  ${buttonBaseCss}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $iconOnly }) => $iconOnly && css4`padding: 0; aspect-ratio: 1 / 1;`}
`;

// src/components/IconButton/index.tsx
import { Fragment as Fragment3, jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var IconButton = forwardRef2(function IconButton2({ icon, iconPosition = "left", variant = "primary", size = "md", fullWidth = false, type = "button", children, ...rest }, ref) {
  const iconEl = /* @__PURE__ */ jsx6(IconWrap, { $size: size, children: icon });
  const iconOnly = iconPosition === "center";
  return /* @__PURE__ */ jsx6(StyledButton2, { ref, type, $variant: variant, $size: size, $fullWidth: fullWidth, $iconOnly: iconOnly, ...rest, children: iconOnly ? iconEl : /* @__PURE__ */ jsxs4(Fragment3, { children: [
    iconPosition === "left" && iconEl,
    children,
    iconPosition === "right" && iconEl
  ] }) });
});

// src/components/InfoBox/index.tsx
import { AlertTriangle, Info } from "lucide-react";

// src/components/InfoBox/styles/InfoBox.ts
import styled9 from "styled-components";
var Box = styled9.div`
  display: flex;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.md};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  background: ${({ theme: theme2, $variant }) => $variant === "warning" ? theme2.colors.warningSurface : theme2.colors.infoSurface};
  border: 1px solid ${({ theme: theme2, $variant }) => $variant === "warning" ? theme2.colors.warningBorder : theme2.colors.infoBorder};

  svg {
    flex-shrink: 0;
    margin-top: 1px;
    color: ${({ theme: theme2, $variant }) => $variant === "warning" ? theme2.colors.warning : theme2.colors.info};
  }
`;

// src/components/InfoBox/index.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
function InfoBox({ variant = "info", children, style }) {
  return /* @__PURE__ */ jsxs5(Box, { $variant: variant, style, children: [
    variant === "warning" ? /* @__PURE__ */ jsx7(AlertTriangle, { size: 16 }) : /* @__PURE__ */ jsx7(Info, { size: 16 }),
    /* @__PURE__ */ jsx7("div", { children })
  ] });
}

// src/components/Inputs/BaseInput/index.tsx
import { Controller } from "react-hook-form";

// src/components/Inputs/BaseInput/styles/BaseInput.ts
import styled10 from "styled-components";
var Wrapper2 = styled10.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label = styled10.label`
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight};
  line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var ErrorText = styled10.span`
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
`;
var InputField = styled10.input`
  height: 56px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.md};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
  width: 100%;

  &::placeholder {
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ theme: theme2 }) => theme2.colors.borderStrong};
  }

  &:focus {
    border-color: ${({ theme: theme2 }) => theme2.colors.ink};
    border-width: 2px;
    padding: 0 calc(${({ theme: theme2 }) => theme2.spacing.md} - 1px);
  }

  &:disabled {
    background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft};
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
    cursor: not-allowed;
  }
`;

// src/components/Inputs/BaseInput/index.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
function BaseInput({ label, wrapperStyle, error, children }) {
  return /* @__PURE__ */ jsxs6(Wrapper2, { style: wrapperStyle, children: [
    /* @__PURE__ */ jsx8(Label, { children: label }),
    children,
    error && /* @__PURE__ */ jsx8(ErrorText, { children: error })
  ] });
}
function ControlledBase({
  label,
  control,
  name,
  wrapperStyle,
  children
}) {
  return /* @__PURE__ */ jsx8(
    Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => {
        var _a, _b;
        return /* @__PURE__ */ jsx8(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: children(field, (_b = fieldState.error) == null ? void 0 : _b.message) });
      }
    }
  );
}

// src/components/Inputs/Checkbox/index.tsx
import { forwardRef as forwardRef3 } from "react";
import { Check } from "lucide-react";

// src/components/Inputs/Checkbox/styles/Checkbox.ts
import styled11 from "styled-components";
var HiddenInput = styled11.input`
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 0;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
var Box2 = styled11.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.xs};
  border: 1.5px solid ${({ theme: theme2 }) => theme2.colors.borderStrong};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

  svg {
    width: 13px;
    height: 13px;
    color: ${({ theme: theme2 }) => theme2.colors.onPrimary};
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.1s ease, transform 0.1s ease;
  }

  ${HiddenInput}:checked + & {
    background: ${({ theme: theme2 }) => theme2.colors.primary};
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
  }

  ${HiddenInput}:checked + & svg {
    opacity: 1;
    transform: scale(1);
  }

  ${HiddenInput}:hover:not(:disabled) + & {
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
  }

  ${HiddenInput}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme: theme2 }) => theme2.colors.primaryDisabled};
  }

  ${HiddenInput}:disabled + & {
    opacity: 0.5;
  }
`;
var Wrapper3 = styled11.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  cursor: pointer;
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};

  &:has(${HiddenInput}:disabled) {
    cursor: not-allowed;
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
  }
`;

// src/components/Inputs/Checkbox/index.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var Checkbox = forwardRef3(function Checkbox2({ label, ...rest }, ref) {
  return /* @__PURE__ */ jsxs7(Wrapper3, { children: [
    /* @__PURE__ */ jsx9(HiddenInput, { ref, type: "checkbox", ...rest }),
    /* @__PURE__ */ jsx9(Box2, { children: /* @__PURE__ */ jsx9(Check, {}) }),
    label
  ] });
});

// src/components/Inputs/Select/index.tsx
import { useController } from "react-hook-form";

// src/components/Inputs/Select/styles/Select.ts
import styled12 from "styled-components";
var SelectField = styled12.select`
  height: 56px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.md};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  outline: none;
  width: 100%;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23222222' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${({ theme: theme2 }) => theme2.spacing.md} center;
  padding-right: ${({ theme: theme2 }) => theme2.spacing.xl};

  &:focus {
    border-width: 2px;
    border-color: ${({ theme: theme2 }) => theme2.colors.ink};
  }
`;

// src/components/Inputs/Select/index.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function RawSelect({ label, wrapperStyle, error, children, ...rest }) {
  return /* @__PURE__ */ jsx10(BaseInput, { label, wrapperStyle, error, children: /* @__PURE__ */ jsx10(SelectField, { ...rest, children }) });
}
function Select({
  label,
  control,
  name,
  wrapperStyle,
  children
}) {
  var _a, _b;
  const { field, fieldState } = useController({ control, name });
  return /* @__PURE__ */ jsx10(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ jsx10(SelectField, { value: (_b = field.value) != null ? _b : "", onChange: (e) => field.onChange(e.target.value), onBlur: field.onBlur, ref: field.ref, children }) });
}

// src/components/Inputs/TextInput/index.tsx
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// src/utils/mask.ts
function formatCurrency(value) {
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0,00";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(num);
}
function parseCurrency(value) {
  const onlyNumbers = value.replace(/\D/g, "");
  if (!onlyNumbers) return 0;
  return parseInt(onlyNumbers, 10) / 100;
}
function maskCurrencyInput(value) {
  const onlyNumbers = value.replace(/\D/g, "");
  if (!onlyNumbers) return "";
  const num = parseInt(onlyNumbers, 10) / 100;
  return formatCurrency(num).replace("R$ ", "");
}
function maskPhone(value) {
  const onlyNumbers = value.replace(/\D/g, "");
  if (onlyNumbers.length === 0) return "";
  if (onlyNumbers.length <= 2) return `(${onlyNumbers}`;
  if (onlyNumbers.length <= 7) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
  if (onlyNumbers.length <= 10) return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7)}`;
  return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
}
function parsePhone(value) {
  return value.replace(/\D/g, "");
}
function formatCPF(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  return digits.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}
function formatCNPJ(value) {
  const digits = value.replace(/\D/g, "").slice(0, 14);
  return digits.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}
function formatCpfCnpj(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length > 11 ? formatCNPJ(value) : formatCPF(value);
}

// src/components/Inputs/TextInput/styles/TextInput.ts
import styled13 from "styled-components";
var InputWrapper = styled13.div`
  position: relative;
  display: flex;
  align-items: center;
`;
var EyeButton = styled13.button`
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  color: ${({ theme: theme2 }) => theme2.colors.muted};

  &:hover {
    color: ${({ theme: theme2 }) => theme2.colors.ink};
  }
`;

// src/components/Inputs/TextInput/index.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
function TextInput(props) {
  const { label, control, name, wrapperStyle, placeholder, currency, mask, ...rest } = props;
  const isPassword = rest.type === "password";
  const [showPassword, setShowPassword] = useState(false);
  return /* @__PURE__ */ jsx11(ControlledBase, { label, control, name, wrapperStyle, children: (field) => {
    var _a;
    return /* @__PURE__ */ jsxs8(InputWrapper, { children: [
      /* @__PURE__ */ jsx11(
        InputField,
        {
          ...rest,
          type: isPassword ? showPassword ? "text" : "password" : rest.type,
          placeholder,
          style: isPassword ? { paddingRight: 44 } : void 0,
          value: currency ? maskCurrencyInput(field.value != null && field.value !== "" ? Number(field.value).toFixed(2) : "") : (_a = field.value) != null ? _a : "",
          onChange: (e) => {
            if (currency) {
              field.onChange(parseCurrency(e.target.value));
            } else if (mask === "phone") {
              field.onChange(maskPhone(e.target.value));
            } else if (rest.type === "number") {
              field.onChange(e.target.valueAsNumber);
            } else {
              field.onChange(e.target.value);
            }
          },
          onBlur: field.onBlur,
          ref: field.ref
        }
      ),
      isPassword && /* @__PURE__ */ jsx11(EyeButton, { type: "button", tabIndex: -1, onClick: () => setShowPassword((v) => !v), children: showPassword ? /* @__PURE__ */ jsx11(EyeOff, { size: 20 }) : /* @__PURE__ */ jsx11(Eye, { size: 20 }) })
    ] });
  } });
}

// src/components/Modal/index.tsx
import { useEffect, useRef } from "react";

// src/components/Modal/styles/Modal.ts
import styled14 from "styled-components";
var Overlay2 = styled14.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;
var Box3 = styled14.div`
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.lg};
  padding: 28px 32px;
  width: 100%;
  max-width: 60%;
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.md};
  animation: ${fadeUp} 0.25s ease;

  @media (max-width: 480px) {
    max-width: 100%;
    margin-top: 35%;
    width: 100%;
    height: 100%;
    padding: 24px 20px;
    overflow-y: auto;
  }
`;
var ModalTitle = styled14.h3`
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.displaySm.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  margin-bottom: 24px;
`;
var ModalActions = styled14.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 28px;
`;

// src/components/Modal/index.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function Modal({ children, close }) {
  const boxRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = boxRef.current) == null ? void 0 : _a.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);
  return /* @__PURE__ */ jsx12(Overlay2, { onClick: close, children: /* @__PURE__ */ jsx12(Box3, { ref: boxRef, role: "dialog", "aria-modal": "true", tabIndex: -1, onClick: (e) => e.stopPropagation(), children }) });
}

// src/components/Pagination/styles/Pagination.ts
import styled15 from "styled-components";
var Wrapper4 = styled15.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  margin-top: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var PageButton = styled15.button`
  width: 36px;
  height: 36px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  border: 1px solid ${({ theme: theme2, $active }) => $active ? theme2.colors.ink : theme2.colors.hairline};
  background: ${({ theme: theme2, $active }) => $active ? theme2.colors.ink : theme2.colors.canvas};
  color: ${({ theme: theme2, $active }) => $active ? theme2.colors.onDark : theme2.colors.ink};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  font-weight: ${({ $active }) => $active ? 600 : 400};
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;

  &:hover:not(:disabled) {
    background: ${({ theme: theme2, $active }) => $active ? theme2.colors.ink : theme2.colors.surfaceSoft};
  }

  &:disabled { opacity: 0.35; cursor: not-allowed; }
`;

// src/components/Pagination/index.tsx
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsxs9(Wrapper4, { role: "navigation", "aria-label": "Pagina\xE7\xE3o", children: [
    /* @__PURE__ */ jsx13(PageButton, { type: "button", "aria-label": "P\xE1gina anterior", onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: /* @__PURE__ */ jsx13("span", { "aria-hidden": "true", children: "\u2039" }) }),
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ jsx13(
      PageButton,
      {
        type: "button",
        $active: page === currentPage,
        "aria-current": page === currentPage ? "page" : void 0,
        "aria-label": `P\xE1gina ${page}`,
        onClick: () => onPageChange(page),
        children: page
      },
      page
    )),
    /* @__PURE__ */ jsx13(PageButton, { type: "button", "aria-label": "Pr\xF3xima p\xE1gina", onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: /* @__PURE__ */ jsx13("span", { "aria-hidden": "true", children: "\u203A" }) })
  ] });
}

// src/components/PageHeader/index.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// src/components/PageHeader/styles/PageHeader.ts
import styled16 from "styled-components";
var Wrapper5 = styled16.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var Back = styled16.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  border: none;
  background: none;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  cursor: pointer;
  padding: 0;
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.sm};

  &:hover { color: ${({ theme: theme2 }) => theme2.colors.ink}; }
`;
var Row = styled16.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.base};
`;
var Titles = styled16.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var Title = styled16.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.2;
`;
var Subtitle = styled16.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;

// src/components/PageHeader/index.tsx
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function PageHeader({ title, subtitle, back, action }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs10(Wrapper5, { children: [
    back && /* @__PURE__ */ jsxs10(Back, { onClick: () => navigate(-1), children: [
      /* @__PURE__ */ jsx14(ArrowLeft, { size: 15 }),
      "Voltar"
    ] }),
    /* @__PURE__ */ jsxs10(Row, { children: [
      /* @__PURE__ */ jsxs10(Titles, { children: [
        /* @__PURE__ */ jsx14(Title, { children: title }),
        subtitle && /* @__PURE__ */ jsx14(Subtitle, { children: subtitle })
      ] }),
      action && /* @__PURE__ */ jsx14("div", { children: action })
    ] })
  ] });
}

// src/components/Inputs/SegmentedControl/styles/SegmentedControl.ts
import styled17 from "styled-components";
var Wrap = styled17.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label2 = styled17.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Toggle = styled17.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  overflow: hidden;
`;
var Btn = styled17.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.buttonSm.fontSize};
  font-weight: 500;
  cursor: pointer;
  border: none;
  transition: background 0.15s, color 0.15s;
  background: ${({ theme: theme2, $selected, $tone }) => $selected ? theme2.colors[$tone] : theme2.colors.canvas};
  color: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.onDark : theme2.colors.muted};

  & + & { border-left: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline}; }
  &:hover {
    background: ${({ theme: theme2, $selected, $tone }) => $selected ? $tone === "primary" ? theme2.colors.primaryActive : theme2.colors.ink : theme2.colors.surfaceSoft};
  }
`;

// src/components/Inputs/SegmentedControl/index.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function SegmentedControl({
  value,
  onChange,
  options,
  label,
  tone = "ink"
}) {
  return /* @__PURE__ */ jsxs11(Wrap, { children: [
    label && /* @__PURE__ */ jsx15(Label2, { children: label }),
    /* @__PURE__ */ jsx15(Toggle, { role: "radiogroup", "aria-label": label, children: options.map((option) => /* @__PURE__ */ jsx15(
      Btn,
      {
        type: "button",
        role: "radio",
        "aria-checked": option.value === value,
        $selected: option.value === value,
        $tone: tone,
        onClick: () => onChange(option.value),
        children: option.label
      },
      String(option.value)
    )) })
  ] });
}

// src/components/Skeleton/styles/Skeleton.ts
import styled18, { keyframes as keyframes2 } from "styled-components";
var pulse = keyframes2`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;
var Skeleton = styled18.div`
  height: ${({ $h }) => $h != null ? $h : "16px"};
  width: ${({ $w }) => $w != null ? $w : "100%"};
  border-radius: 6px;
  background: ${({ theme: theme2 }) => theme2.colors.surfaceStrong};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

// src/components/StatusBadge/index.tsx
import styled19 from "styled-components";
import { jsx as jsx16 } from "react/jsx-runtime";
var StyledBadge = styled19.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.badge.fontSize};
  font-weight: 600;

  ${({ $tone, theme: theme2 }) => $tone === "success" ? `background: ${theme2.colors.successSurface}; color: ${theme2.colors.success}; border: 1px solid ${theme2.colors.successBorder};` : `background: ${theme2.colors.warningSurface}; color: ${theme2.colors.warning}; border: 1px solid ${theme2.colors.warningBorder};`}
`;
function StatusBadge({ tone, children }) {
  return /* @__PURE__ */ jsx16(StyledBadge, { $tone: tone, children });
}

// src/components/StatsGrid/styles/StatsGrid.ts
import styled20 from "styled-components";
var StatsGrid = styled20.div`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns != null ? $columns : 4}, 1fr);
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xl};

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
var StatCard = styled20.div`
  background: ${({ theme: theme2, $tone }) => $tone === "warning" ? theme2.colors.warningSurface : $tone === "danger" ? "#fff0f3" : theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2, $tone }) => $tone === "warning" ? theme2.colors.warningBorder : $tone === "danger" ? "#ffd1da" : theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  padding: ${({ theme: theme2 }) => theme2.spacing.base};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.sm};
`;
var StatLabel = styled20.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var StatValue = styled20.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme: theme2, $tone, $muted }) => $tone === "warning" ? theme2.colors.warning : $tone === "danger" ? "#c0002a" : $muted ? theme2.colors.muted : theme2.colors.ink};
`;

// src/components/SummaryCard/styles/SummaryCard.ts
import styled21 from "styled-components";
var Card2 = styled21.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.md} ${({ theme: theme2 }) => theme2.spacing.base};
  margin-top: ${({ theme: theme2 }) => theme2.spacing.base};

  @media (max-width: 744px) {
    position: fixed;
    bottom: ${({ $bottomOffset }) => $bottomOffset != null ? $bottomOffset : "80px"};
    left: 0;
    right: 0;
    z-index: 90;
    margin-top: 0;
    border: none;
    border-top: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
    border-radius: 0;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.06);
    padding-bottom: calc(${({ theme: theme2 }) => theme2.spacing.md} + env(safe-area-inset-bottom));
    animation: ${fadeUp} 0.2s ease;
  }
`;
var Label3 = styled21.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;
var Row2 = styled21.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Info2 = styled21.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Items = styled21.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  flex: 1;
`;
var EmptyMessage = styled21(Items)`
  text-align: center;
`;
var Total = styled21.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  text-align: right;
  flex-shrink: 0;
  min-width: fit-content;
  margin-left: ${({ theme: theme2 }) => theme2.spacing.sm};
`;
var ItemDetail = styled21.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ItemDetailName = styled21.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  flex: 1;
`;
var ItemDetailPrice = styled21.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`;
var Divider = styled21.hr`
  border: none;
  border-top: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ButtonRow = styled21.div`
  display: flex;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};

  button {
    flex: 1;
  }
`;

// src/components/SummaryCard/index.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
function SummaryCard({
  label = "Resumo",
  items,
  total,
  onConfirm,
  confirmText = "Confirmar",
  loading = false,
  disabled = false,
  buttons,
  emptyMessage = "Nenhum item selecionado",
  bottomOffset
}) {
  const hasSubtotals = items.some((item) => item.subtotal !== void 0);
  const itemsText = items.map((item) => `${item.qty}\xD7 ${item.name}`).join(", ");
  const isEmpty = items.length === 0;
  return /* @__PURE__ */ jsxs12(Card2, { $bottomOffset: bottomOffset, children: [
    /* @__PURE__ */ jsx17(Label3, { style: { marginBottom: 0 }, children: label }),
    isEmpty ? /* @__PURE__ */ jsx17(EmptyMessage, { children: emptyMessage }) : hasSubtotals ? /* @__PURE__ */ jsx17("div", { children: items.map((item) => /* @__PURE__ */ jsxs12(ItemDetail, { children: [
      /* @__PURE__ */ jsxs12(ItemDetailName, { children: [
        item.qty,
        "\xD7 ",
        item.name
      ] }),
      item.subtotal !== void 0 && /* @__PURE__ */ jsx17(ItemDetailPrice, { children: formatCurrency(item.subtotal) })
    ] }, item.name)) }) : /* @__PURE__ */ jsxs12(Row2, { children: [
      /* @__PURE__ */ jsx17(Items, { children: itemsText }),
      /* @__PURE__ */ jsx17(Total, { children: formatCurrency(total) })
    ] }),
    !isEmpty && hasSubtotals && /* @__PURE__ */ jsxs12(Fragment4, { children: [
      /* @__PURE__ */ jsx17(Divider, {}),
      /* @__PURE__ */ jsx17(Row2, { children: /* @__PURE__ */ jsx17(Info2, { children: /* @__PURE__ */ jsx17(Total, { children: formatCurrency(total) }) }) })
    ] }),
    buttons && buttons.length > 0 ? /* @__PURE__ */ jsx17(ButtonRow, { children: buttons.map((btn, idx) => /* @__PURE__ */ jsx17(
      Button,
      {
        variant: btn.variant || "primary",
        size: "lg",
        fullWidth: true,
        onClick: btn.onClick,
        disabled: btn.disabled || btn.loading,
        children: btn.loading ? `${btn.text}...` : btn.text
      },
      idx
    )) }) : onConfirm ? /* @__PURE__ */ jsx17(
      Button,
      {
        variant: "primary",
        size: "lg",
        fullWidth: true,
        onClick: onConfirm,
        disabled: disabled || loading || isEmpty,
        children: loading ? `${confirmText}...` : confirmText
      }
    ) : null
  ] });
}

// src/components/Tabs/styles/Tabs.ts
import styled22 from "styled-components";
var TabBar = styled22.div.attrs({ role: "tablist" })`
  display: flex;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Tab = styled22.button.attrs(({ $active }) => ({
  type: "button",
  role: "tab",
  "aria-selected": $active
}))`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  height: 44px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontSize};
  font-weight: ${({ $active }) => $active ? 600 : 400};
  color: ${({ theme: theme2, $active }) => $active ? theme2.colors.ink : theme2.colors.muted};
  background: none;
  border: none;
  border-bottom: 2px solid ${({ theme: theme2, $active }) => $active ? theme2.colors.ink : "transparent"};
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 0.15s, border-color 0.15s;

  &:hover { color: ${({ theme: theme2 }) => theme2.colors.ink}; }
`;
var TabBadge = styled22.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  background: ${({ theme: theme2 }) => theme2.colors.primary};
  color: ${({ theme: theme2 }) => theme2.colors.onPrimary};
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
`;

// src/components/Toast/index.tsx
import { createPortal as createPortal2 } from "react-dom";

// src/components/Toast/styles/Toast.ts
import styled23, { keyframes as keyframes3 } from "styled-components";
var fadeOut = keyframes3`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(8px); }
`;
var ToastEl = styled23.div`
  position: fixed;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: fit-content;
  background: ${({ theme: theme2 }) => theme2.colors.ink};
  color: ${({ theme: theme2 }) => theme2.colors.onDark};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: 14px;
  font-weight: 600;
  padding: ${({ theme: theme2 }) => `${theme2.spacing.sm} ${theme2.spacing.lg}`};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.md};
  pointer-events: none;
  z-index: 9999;
  white-space: nowrap;
  text-align: center;
  animation: ${({ $leaving }) => $leaving ? fadeOut : fadeUp} 0.25s ease forwards;
`;

// src/components/Toast/hooks/useToast.tsx
import { useCallback, useRef as useRef2, useState as useState2 } from "react";
import { jsx as jsx18 } from "react/jsx-runtime";
function useToast(duration = 2500) {
  const [state, setState] = useState2(null);
  const timerRef = useRef2(null);
  const show = useCallback(
    (message) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      setState({ message, leaving: false });
      timerRef.current = setTimeout(() => {
        setState((s) => s ? { ...s, leaving: true } : null);
        timerRef.current = setTimeout(() => setState(null), 300);
      }, duration);
    },
    [duration]
  );
  const toast = state ? /* @__PURE__ */ jsx18(Toast, { message: state.message, leaving: state.leaving }) : null;
  return { show, toast };
}

// src/components/Toast/index.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function Toast({ message, leaving }) {
  return createPortal2(/* @__PURE__ */ jsx19(ToastEl, { $leaving: leaving, children: message }), document.body);
}

// src/pages/LoginPage/index.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// src/pages/LoginPage/hooks/useLogin.ts
import { useEffect as useEffect3, useState as useState4 } from "react";
import { useNavigate as useNavigate2 } from "react-router-dom";

// src/hooks/useAuth.ts
import { useCallback as useCallback2, useContext, useEffect as useEffect2, useMemo, useState as useState3 } from "react";

// src/contexts/AuthContext.tsx
import { createContext } from "react";
import { jsx as jsx20 } from "react/jsx-runtime";
var AuthContext = createContext(null);
function AuthProvider({ client, children }) {
  const authValue = useAuth(client);
  return /* @__PURE__ */ jsx20(AuthContext.Provider, { value: authValue, children });
}

// src/hooks/useAuth.ts
async function fetchProfile(client, userId) {
  try {
    const { data, error } = await client.from("profiles").select("id, name, role").eq("id", userId);
    if (error) {
      console.error("Erro ao buscar perfil:", error);
      return null;
    }
    if (!data || data.length === 0) return null;
    return { id: data[0].id, name: data[0].name, role: data[0].role };
  } catch (err) {
    console.error("Exce\xE7\xE3o ao buscar perfil:", err);
    return null;
  }
}
function useAuth(client) {
  const [user, setUser] = useState3(null);
  const [userEmail, setUserEmail] = useState3("");
  const [loading, setLoading] = useState3(true);
  const [error, setError] = useState3(null);
  const [sessionUser, setSessionUser] = useState3(void 0);
  useEffect2(() => {
    const { data: listener } = client.auth.onAuthStateChange((_event, session) => {
      setSessionUser((prev) => {
        var _a;
        const next = (session == null ? void 0 : session.user) ? { id: session.user.id, email: (_a = session.user.email) != null ? _a : "" } : null;
        if (prev && next && prev.id === next.id && prev.email === next.email) return prev;
        return next;
      });
    });
    const refreshInterval = setInterval(async () => {
      const { error: refreshError } = await client.auth.refreshSession();
      if (refreshError) {
        setError("Sua sess\xE3o expirou. Entre novamente.");
        setUser(null);
        setUserEmail("");
      }
    }, 15 * 60 * 1e3);
    const handleVisibilityChange = async () => {
      if (!document.hidden) {
        const { error: refreshError } = await client.auth.refreshSession();
        if (refreshError) {
          setError("Sua sess\xE3o expirou. Entre novamente.");
          setUser(null);
          setUserEmail("");
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      clearInterval(refreshInterval);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      listener == null ? void 0 : listener.subscription.unsubscribe();
    };
  }, [client]);
  useEffect2(() => {
    if (sessionUser === void 0) return;
    if (!sessionUser) {
      setUser(null);
      setUserEmail("");
      setLoading(false);
      return;
    }
    let cancelled = false;
    fetchProfile(client, sessionUser.id).then((profile) => {
      if (cancelled) return;
      if (profile) {
        setUser(profile);
        setUserEmail(sessionUser.email);
        setError(null);
      } else {
        setUser(null);
        setUserEmail("");
        setError("Perfil do usu\xE1rio n\xE3o encontrado.");
      }
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [client, sessionUser]);
  const login = useCallback2(async (email, password) => {
    setError(null);
    const { error: signInError } = await client.auth.signInWithPassword({ email, password });
    if (signInError) {
      const errorMsg = "E-mail ou senha incorretos.";
      setError(errorMsg);
      return errorMsg;
    }
    return null;
  }, [client]);
  const logout = useCallback2(async () => {
    await client.auth.signOut();
    setUser(null);
    setUserEmail("");
  }, [client]);
  const updateProfile = useCallback2(async (name, email) => {
    const { data: { user: authUser } } = await client.auth.getUser();
    if (!authUser) return "Usu\xE1rio n\xE3o autenticado.";
    const { error: profileError } = await client.from("profiles").update({ name: name.trim() }).eq("id", authUser.id);
    if (profileError) return "Erro ao atualizar nome.";
    if (email !== userEmail) {
      const { error: emailError } = await client.auth.updateUser({ email });
      if (emailError) return "Erro ao atualizar e-mail.";
    }
    setUser((u) => u ? { ...u, name: name.trim() } : u);
    return null;
  }, [client, userEmail]);
  return useMemo(
    () => ({ user, userEmail, loading, error, login, logout, updateProfile }),
    [user, userEmail, loading, error, login, logout, updateProfile]
  );
}
function useAuthCtx() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

// src/pages/LoginPage/hooks/useLogin.ts
function useLogin(resolveRoute) {
  const [error, setError] = useState4("");
  const [submitting, setSubmitting] = useState4(false);
  const { login, user } = useAuthCtx();
  const navigate = useNavigate2();
  useEffect3(() => {
    if (user) {
      navigate(resolveRoute(user.role), { replace: true });
    }
  }, [user, navigate, resolveRoute]);
  const handleLogin = async (data) => {
    setSubmitting(true);
    setError("");
    const err = await login(data.email, data.password);
    if (err) {
      setError(err);
      setSubmitting(false);
    }
  };
  return { error, submitting, handleLogin };
}

// src/pages/LoginPage/styles/Login.ts
import styled24 from "styled-components";
var Page = styled24.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Brand2 = styled24.div`
  flex: 0 0 420px;
  background: ${({ theme: theme2 }) => theme2.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.lg};
  padding: ${({ theme: theme2 }) => theme2.spacing.xxl};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.12) 0%, transparent 60%),
                radial-gradient(ellipse at 80% 80%, rgba(0,0,0,0.08) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    flex: 0 0 340px;
  }

  @media (max-width: 768px) {
    flex: none;
    padding: ${({ theme: theme2 }) => theme2.spacing.xl} ${({ theme: theme2 }) => theme2.spacing.base};
    gap: ${({ theme: theme2 }) => theme2.spacing.md};
  }
`;
var BrandMark = styled24.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.xl};
  background: ${({ theme: theme2 }) => theme2.colors.onPrimary};
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  position: relative;
  z-index: 1;

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;

    img { width: 38px; height: 38px; }
  }
`;
var BrandText = styled24.div`
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 1;
`;
var BrandName2 = styled24.h1`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: 1.625rem;
  font-weight: 700;
  letter-spacing: -0.3px;
  line-height: 1.2;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
var BrandSub = styled24.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  opacity: 0.75;
  line-height: 1.4;
`;
var BrandQuote = styled24.blockquote`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: rgba(255, 255, 255, 0.6);
  font-style: italic;
  text-align: center;
  position: relative;
  z-index: 1;
  max-width: 260px;
  line-height: 1.5;

  @media (max-width: 768px) {
    display: none;
  }
`;
var FormPanel = styled24.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: theme2 }) => theme2.spacing.xxl};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};

  @media (max-width: 768px) {
  justify-content: flex-start;
    padding: ${({ theme: theme2 }) => theme2.spacing.xl} ${({ theme: theme2 }) => theme2.spacing.base};
  }
`;
var FormBox = styled24.div`
  width: 100%;
  max-width: 400px;
  animation: ${fadeUp} 0.35s ease;
`;
var FormHeader = styled24.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var FormTitle = styled24.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  letter-spacing: -0.3px;
  margin-bottom: 6px;
`;
var FormSubtitle = styled24.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Form = styled24.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var ErrorMsg = styled24.p`
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  padding: ${({ theme: theme2 }) => `${theme2.spacing.sm} ${theme2.spacing.md}`};
  text-align: center;
`;

// src/pages/LoginPage/validators/schema.ts
import { z } from "zod";
var loginSchema = z.object({
  email: z.string().email("E-mail inv\xE1lido"),
  password: z.string().min(1, "Senha obrigat\xF3ria")
});

// src/pages/LoginPage/index.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
function LoginPage({ brand, resolveRoute }) {
  const { error, submitting, handleLogin } = useLogin(resolveRoute);
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });
  return /* @__PURE__ */ jsxs13(Page, { children: [
    /* @__PURE__ */ jsxs13(Brand2, { children: [
      /* @__PURE__ */ jsx21(BrandMark, { children: /* @__PURE__ */ jsx21("img", { src: brand.icon, alt: brand.iconAlt }) }),
      /* @__PURE__ */ jsxs13(BrandText, { children: [
        /* @__PURE__ */ jsx21(BrandName2, { children: brand.name }),
        /* @__PURE__ */ jsx21(BrandSub, { children: brand.sub })
      ] }),
      brand.quote && /* @__PURE__ */ jsx21(BrandQuote, { children: brand.quote })
    ] }),
    /* @__PURE__ */ jsx21(FormPanel, { children: /* @__PURE__ */ jsxs13(FormBox, { children: [
      /* @__PURE__ */ jsxs13(FormHeader, { children: [
        /* @__PURE__ */ jsx21(FormTitle, { children: "Bem-vindo" }),
        /* @__PURE__ */ jsx21(FormSubtitle, { children: "Entre com suas credenciais para continuar" })
      ] }),
      /* @__PURE__ */ jsxs13(Form, { onSubmit: handleSubmit(handleLogin), children: [
        /* @__PURE__ */ jsx21(
          TextInput,
          {
            label: "E-mail",
            control,
            name: "email",
            type: "email",
            autoFocus: true,
            placeholder: "seu@email.com"
          }
        ),
        /* @__PURE__ */ jsx21(
          TextInput,
          {
            label: "Senha",
            control,
            name: "password",
            type: "password",
            placeholder: "M\xEDnimo 6 caracteres"
          }
        ),
        /* @__PURE__ */ jsx21(
          Button,
          {
            variant: "primary",
            size: "lg",
            fullWidth: true,
            type: "submit",
            disabled: submitting,
            style: { marginTop: 8 },
            children: submitting ? "Entrando..." : "Entrar"
          }
        ),
        error && /* @__PURE__ */ jsx21(ErrorMsg, { children: error })
      ] })
    ] }) })
  ] });
}

// src/pages/ProfilePage/index.tsx
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { useForm as useForm2 } from "react-hook-form";
import { useNavigate as useNavigate3 } from "react-router-dom";

// src/pages/ProfilePage/styles/ProfilePage.ts
import styled25 from "styled-components";
var Wrap2 = styled25.div`
  max-width: 560px;
`;
var Identity = styled25.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairlineSoft};
`;
var Name = styled25.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.1;
  margin-bottom: 4px;
`;
var RoleLabel = styled25.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Section = styled25.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var SectionTitle = styled25.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Actions = styled25.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  padding-top: ${({ theme: theme2 }) => theme2.spacing.lg};
  border-top: 1px solid ${({ theme: theme2 }) => theme2.colors.hairlineSoft};

  @media (max-width: 480px) {
    button { flex: 1; }
  }
`;

// src/pages/ProfilePage/validators/schema.ts
import { z as z2 } from "zod";
var profileSchema = z2.object({
  name: z2.string().min(3, "Informe pelo menos nome e sobrenome"),
  email: z2.string().email("E-mail inv\xE1lido")
});

// src/pages/ProfilePage/index.tsx
import { jsx as jsx22, jsxs as jsxs14 } from "react/jsx-runtime";
function ProfilePage({ roleLabel }) {
  var _a, _b;
  const { user, userEmail, updateProfile } = useAuthCtx();
  const navigate = useNavigate3();
  const { show: showToast, toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm2({
    resolver: zodResolver2(profileSchema),
    defaultValues: { name: (_a = user == null ? void 0 : user.name) != null ? _a : "", email: userEmail }
  });
  const onSubmit = async (data) => {
    const err = await updateProfile(data.name, data.email);
    showToast(err != null ? err : "Perfil atualizado com sucesso.");
  };
  return /* @__PURE__ */ jsxs14(Wrap2, { children: [
    /* @__PURE__ */ jsx22(PageHeader, { title: "Meu perfil", back: true }),
    /* @__PURE__ */ jsxs14(Identity, { children: [
      /* @__PURE__ */ jsx22(Name, { children: (_b = user == null ? void 0 : user.name) != null ? _b : "\u2014" }),
      roleLabel && /* @__PURE__ */ jsx22(RoleLabel, { children: roleLabel })
    ] }),
    /* @__PURE__ */ jsxs14(Section, { children: [
      /* @__PURE__ */ jsx22(SectionTitle, { children: "Informa\xE7\xF5es pessoais" }),
      /* @__PURE__ */ jsx22(TextInput, { label: "Nome completo", control, name: "name", placeholder: "Nome e sobrenome" }),
      /* @__PURE__ */ jsx22(TextInput, { label: "E-mail de acesso", control, name: "email", type: "email", placeholder: "seu@email.com" })
    ] }),
    /* @__PURE__ */ jsxs14(Actions, { children: [
      /* @__PURE__ */ jsx22(Button, { variant: "secondary", size: "md", onClick: () => navigate(-1), children: "Cancelar" }),
      /* @__PURE__ */ jsx22(Button, { variant: "primary", size: "md", onClick: handleSubmit(onSubmit), disabled: isSubmitting, children: isSubmitting ? "Salvando..." : "Salvar altera\xE7\xF5es" })
    ] }),
    toast
  ] });
}

// src/hooks/useMediaQuery.ts
import { useEffect as useEffect4, useState as useState5 } from "react";
function useMediaQuery(query) {
  const [matches, setMatches] = useState5(() => window.matchMedia(query).matches);
  useEffect4(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// src/hooks/useModal.ts
import { createElement, useState as useState6 } from "react";
import { createPortal as createPortal3 } from "react-dom";
function useModal() {
  const [content, setContent] = useState6(null);
  const open = (c) => setContent(c);
  const close = () => setContent(null);
  const modal = content !== null ? createPortal3(createElement(Modal, { close, children: content }), document.body) : null;
  return { open, close, modal };
}

// src/styles/styled.d.ts
import "styled-components";

// src/styles/GlobalStyles.ts
import { createGlobalStyle } from "styled-components";
var GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
    font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontWeight};
    line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight};
    color: ${({ theme: theme2 }) => theme2.colors.ink};
    background-color: ${({ theme: theme2 }) => theme2.colors.canvas};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input, textarea, select {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }
`;
var GlobalStyles_default = GlobalStyles;

// src/styles/theme.ts
var theme = {
  colors: {
    primary: "#78b9a4",
    primaryActive: "#5a9d88",
    primaryDisabled: "#c2dbd4",
    primaryErrorText: "#c13515",
    primaryErrorTextHover: "#b32505",
    luxe: "#2d6a58",
    plus: "#4a9e82",
    ink: "#222222",
    body: "#3f3f3f",
    muted: "#6a6a6a",
    mutedSoft: "#929292",
    hairline: "#dddddd",
    hairlineSoft: "#ebebeb",
    borderStrong: "#c1c1c1",
    canvas: "#ffffff",
    surfaceSoft: "#f7f7f7",
    surfaceCard: "#ffffff",
    surfaceStrong: "#f2f2f2",
    onPrimary: "#ffffff",
    onDark: "#ffffff",
    legalLink: "#428bff",
    starRating: "#222222",
    scrim: "#000000",
    // Semantic status / feedback (surface = background, border, and foreground/text)
    success: "#1a7a4a",
    successSurface: "#f0faf5",
    successBorder: "#b6e8cf",
    warning: "#b45309",
    warningSurface: "#fffbeb",
    warningBorder: "#fde68a",
    info: "#3b82f6",
    infoSurface: "#eff6ff",
    infoBorder: "#bfdbfe",
    danger: "#ef4444"
  },
  typography: {
    fontFamily: "'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif",
    displayXl: {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: 1.43,
      letterSpacing: "0"
    },
    displayLg: {
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: 1.18,
      letterSpacing: "-0.44px"
    },
    displayMd: {
      fontSize: "21px",
      fontWeight: 700,
      lineHeight: 1.43,
      letterSpacing: "0"
    },
    displaySm: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.18px"
    },
    titleMd: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "0"
    },
    titleSm: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: "0"
    },
    ratingDisplay: {
      fontSize: "64px",
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-1px"
    },
    bodyMd: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0"
    },
    bodySm: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0"
    },
    caption: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.29,
      letterSpacing: "0"
    },
    captionSm: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: 1.23,
      letterSpacing: "0"
    },
    badge: {
      fontSize: "11px",
      fontWeight: 600,
      lineHeight: 1.18,
      letterSpacing: "0"
    },
    microLabel: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: 1.33,
      letterSpacing: "0"
    },
    uppercaseTag: {
      fontSize: "8px",
      fontWeight: 700,
      lineHeight: 1.25,
      letterSpacing: "0.32px",
      textTransform: "uppercase"
    },
    buttonMd: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: 1.25,
      letterSpacing: "0"
    },
    buttonSm: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.29,
      letterSpacing: "0"
    },
    link: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: 1.43,
      letterSpacing: "0"
    },
    navLink: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "0"
    }
  },
  rounded: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "14px",
    lg: "20px",
    xl: "32px",
    full: "9999px"
  },
  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "12px",
    base: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    section: "64px"
  },
  shadows: {
    sm: "rgba(0, 0, 0, 0.08) 0px 1px 2px 0px",
    md: "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px",
    lg: "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0"
  },
  breakpoints: {
    mobile: "744px",
    tablet: "1128px",
    desktop: "1440px"
  }
};
export {
  AuthContext,
  AuthProvider,
  BaseInput,
  BottomSheet,
  Brand,
  Button,
  Card,
  Checkbox,
  Chip,
  ChipBar,
  ControlledBase,
  Empty,
  GlobalStyles_default as GlobalStyles,
  IconButton,
  InfoBox,
  InputField,
  LoginPage,
  Modal,
  ModalActions,
  ModalTitle,
  PageHeader,
  Pagination,
  ProfilePage,
  RawSelect,
  SegmentedControl,
  Select,
  Skeleton,
  StatCard,
  StatLabel,
  StatValue,
  StatsGrid,
  StatusBadge,
  SummaryCard,
  Tab,
  TabBadge,
  TabBar,
  TextInput,
  Toast,
  Typography,
  fadeDown,
  fadeIn,
  fadeUp,
  fetchProfile,
  formatCNPJ,
  formatCPF,
  formatCpfCnpj,
  formatCurrency,
  maskCurrencyInput,
  maskPhone,
  parseCurrency,
  parsePhone,
  slideUp,
  theme,
  useAuth,
  useAuthCtx,
  useMediaQuery,
  useModal,
  useToast
};
