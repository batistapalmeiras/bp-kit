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
var slideInRight = keyframes`
  from { transform: translateX(100%); }
  to   { transform: translateX(0); }
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

// src/components/Form/index.ts
import styled8 from "styled-components";
var Form = styled8.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;

// src/components/IconButton/index.tsx
import { forwardRef as forwardRef2 } from "react";

// src/components/IconButton/styles/IconButton.ts
import styled9, { css as css4 } from "styled-components";
var iconBoxSize = { xs: 14, sm: 16, md: 18, lg: 20 };
var IconWrap = styled9.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => iconBoxSize[$size]}px;
  height: ${({ $size }) => iconBoxSize[$size]}px;
  flex-shrink: 0;
  margin-top: 2px;

  svg { display: block; width: 100%; height: 100%; }
`;
var StyledButton2 = styled9.button`
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
import styled10 from "styled-components";
var Box = styled10.div`
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
import styled11 from "styled-components";
var Wrapper2 = styled11.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label = styled11.label`
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight};
  line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var ErrorText = styled11.span`
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
`;
var InputField = styled11.input`
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
import styled12 from "styled-components";
var HiddenInput = styled12.input`
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
var Box2 = styled12.span`
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
var Wrapper3 = styled12.label`
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

// src/components/Inputs/DatePicker/index.tsx
import { useEffect, useRef, useState } from "react";
import { useController } from "react-hook-form";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";

// src/components/Inputs/_shared/PickerElements.ts
import styled13 from "styled-components";
var Wrapper4 = styled13.div`
  position: relative;
`;
var Trigger = styled13.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  width: 100%;
  height: 56px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.md};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  text-align: left;
  cursor: pointer;
  transition: border-color 0.15s;

  &:hover {
    border-color: ${({ theme: theme2 }) => theme2.colors.borderStrong};
  }

  ${({ $open, theme: theme2 }) => $open && `
    border-color: ${theme2.colors.ink};
    border-width: 2px;
    padding: 0 calc(${theme2.spacing.md} - 1px);
  `}
`;
var Placeholder = styled13.span`
  color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
`;
var Panel = styled13.div`
  position: absolute;
  top: calc(100% + ${({ theme: theme2 }) => theme2.spacing.xs});
  left: 0;
  right: 0;
  z-index: 20;
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.md};
  padding: ${({ theme: theme2 }) => theme2.spacing.base};
  animation: ${fadeDown} 0.15s ease-out;
`;
var PanelHeader = styled13.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.base};
`;
var HeaderLabel = styled13.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.titleSm.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.titleSm.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
`;
var NavButton = styled13.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  cursor: pointer;

  &:hover {
    background: ${({ theme: theme2 }) => theme2.colors.surfaceStrong};
  }
`;

// src/components/Inputs/DatePicker/styles/DatePicker.ts
import styled14 from "styled-components";
var WeekdayRow = styled14.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var WeekdayLabel = styled14.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
`;
var DayGrid = styled14.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
`;
var DayCell = styled14.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  background: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.primary : "transparent"};
  color: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.onPrimary : theme2.colors.ink};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  font-weight: ${({ $selected, $today }) => $selected || $today ? 600 : 400};
  box-shadow: ${({ theme: theme2, $today, $selected }) => $today && !$selected ? `inset 0 0 0 1px ${theme2.colors.ink}` : "none"};
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.primaryActive : theme2.colors.surfaceStrong};
  }

  &:disabled {
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
    cursor: not-allowed;
  }
`;

// src/components/Inputs/DatePicker/index.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var WEEKDAY_LABELS = ["dom", "seg", "ter", "qua", "qui", "sex", "s\xE1b"];
var FULL_MONTH_LABELS = [
  "janeiro",
  "fevereiro",
  "mar\xE7o",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro"
];
function parseDateValue(value) {
  if (!value) return null;
  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}
function formatDateValue(value) {
  const date = parseDateValue(value);
  if (!date) return null;
  return `${date.getDate()} de ${FULL_MONTH_LABELS[date.getMonth()]} de ${date.getFullYear()}`;
}
function toDateKey(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
function buildMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
function DatePicker({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = "Selecione a data",
  isDateDisabled
}) {
  var _a, _b;
  const { field, fieldState } = useController({ control, name });
  const [open, setOpen] = useState(false);
  const selectedDate = parseDateValue(field.value);
  const [viewDate, setViewDate] = useState(() => selectedDate != null ? selectedDate : /* @__PURE__ */ new Date());
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const today = /* @__PURE__ */ new Date();
  const todayKey = toDateKey(today);
  const selectedKey = selectedDate ? toDateKey(selectedDate) : null;
  const cells = buildMonthGrid(viewDate.getFullYear(), viewDate.getMonth());
  const changeMonth = (delta) => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + delta, 1));
  const selectDay = (date) => {
    field.onChange(toDateKey(date));
    setOpen(false);
  };
  return /* @__PURE__ */ jsx10(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ jsxs8(Wrapper4, { ref, children: [
    /* @__PURE__ */ jsxs8(Trigger, { type: "button", $open: open, onClick: () => setOpen((v) => !v), children: [
      (_b = formatDateValue(field.value)) != null ? _b : /* @__PURE__ */ jsx10(Placeholder, { children: placeholder }),
      /* @__PURE__ */ jsx10(Calendar, { size: 18 })
    ] }),
    open && /* @__PURE__ */ jsxs8(Panel, { children: [
      /* @__PURE__ */ jsxs8(PanelHeader, { children: [
        /* @__PURE__ */ jsx10(NavButton, { type: "button", onClick: () => changeMonth(-1), "aria-label": "M\xEAs anterior", children: /* @__PURE__ */ jsx10(ChevronLeft, { size: 18 }) }),
        /* @__PURE__ */ jsxs8(HeaderLabel, { children: [
          FULL_MONTH_LABELS[viewDate.getMonth()],
          " de ",
          viewDate.getFullYear()
        ] }),
        /* @__PURE__ */ jsx10(NavButton, { type: "button", onClick: () => changeMonth(1), "aria-label": "Pr\xF3ximo m\xEAs", children: /* @__PURE__ */ jsx10(ChevronRight, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsx10(WeekdayRow, { children: WEEKDAY_LABELS.map((w) => /* @__PURE__ */ jsx10(WeekdayLabel, { children: w }, w)) }),
      /* @__PURE__ */ jsx10(DayGrid, { children: cells.map(
        (date, i) => date ? /* @__PURE__ */ jsx10(
          DayCell,
          {
            type: "button",
            disabled: isDateDisabled ? isDateDisabled(date) : false,
            $selected: toDateKey(date) === selectedKey,
            $today: toDateKey(date) === todayKey,
            onClick: () => selectDay(date),
            children: date.getDate()
          },
          toDateKey(date)
        ) : /* @__PURE__ */ jsx10("span", {}, `empty-${i}`)
      ) })
    ] })
  ] }) });
}

// src/components/Inputs/MonthPicker/index.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { useController as useController2 } from "react-hook-form";
import { Calendar as Calendar2, ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight2 } from "lucide-react";

// src/components/Inputs/MonthPicker/styles/MonthPicker.ts
import styled15 from "styled-components";
var MonthGrid = styled15.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var MonthCell = styled15.button`
  padding: ${({ theme: theme2 }) => theme2.spacing.sm} 0;
  border: none;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  background: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.primary : "transparent"};
  color: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.onPrimary : theme2.colors.ink};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  font-weight: ${({ $selected }) => $selected ? 600 : 400};
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${({ theme: theme2, $selected }) => $selected ? theme2.colors.primaryActive : theme2.colors.surfaceStrong};
  }
`;

// src/components/Inputs/MonthPicker/index.tsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var MONTH_LABELS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
var FULL_MONTH_LABELS2 = [
  "Janeiro",
  "Fevereiro",
  "Mar\xE7o",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];
function formatMonthValue(value) {
  if (!value) return null;
  const [year, month] = value.split("-").map(Number);
  if (!year || !month) return null;
  return `${FULL_MONTH_LABELS2[month - 1]} de ${year}`;
}
function MonthPicker({
  label,
  control,
  name,
  wrapperStyle,
  placeholder = "Selecione o m\xEAs"
}) {
  var _a, _b;
  const { field, fieldState } = useController2({ control, name });
  const [open, setOpen] = useState2(false);
  const [viewYear, setViewYear] = useState2(
    () => field.value ? Number(String(field.value).split("-")[0]) : (/* @__PURE__ */ new Date()).getFullYear()
  );
  const ref = useRef2(null);
  useEffect2(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const [selectedYear, selectedMonth] = field.value ? String(field.value).split("-").map(Number) : [null, null];
  const selectMonth = (monthIndex) => {
    field.onChange(`${viewYear}-${String(monthIndex + 1).padStart(2, "0")}`);
    setOpen(false);
  };
  return /* @__PURE__ */ jsx11(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ jsxs9(Wrapper4, { ref, children: [
    /* @__PURE__ */ jsxs9(Trigger, { type: "button", $open: open, onClick: () => setOpen((v) => !v), children: [
      (_b = formatMonthValue(field.value)) != null ? _b : /* @__PURE__ */ jsx11(Placeholder, { children: placeholder }),
      /* @__PURE__ */ jsx11(Calendar2, { size: 18 })
    ] }),
    open && /* @__PURE__ */ jsxs9(Panel, { children: [
      /* @__PURE__ */ jsxs9(PanelHeader, { children: [
        /* @__PURE__ */ jsx11(NavButton, { type: "button", onClick: () => setViewYear((y) => y - 1), "aria-label": "Ano anterior", children: /* @__PURE__ */ jsx11(ChevronLeft2, { size: 18 }) }),
        /* @__PURE__ */ jsx11(HeaderLabel, { children: viewYear }),
        /* @__PURE__ */ jsx11(NavButton, { type: "button", onClick: () => setViewYear((y) => y + 1), "aria-label": "Pr\xF3ximo ano", children: /* @__PURE__ */ jsx11(ChevronRight2, { size: 18 }) })
      ] }),
      /* @__PURE__ */ jsx11(MonthGrid, { children: MONTH_LABELS.map((monthLabel, i) => /* @__PURE__ */ jsx11(
        MonthCell,
        {
          type: "button",
          $selected: selectedYear === viewYear && selectedMonth === i + 1,
          onClick: () => selectMonth(i),
          children: monthLabel
        },
        monthLabel
      )) })
    ] })
  ] }) });
}

// src/components/Inputs/MultiSelect/index.tsx
import { useEffect as useEffect3, useRef as useRef3, useState as useState3 } from "react";

// src/components/Inputs/MultiSelect/styles/MultiSelect.ts
import styled16 from "styled-components";
var Wrap = styled16.div`
  position: relative;
`;
var ChipRow = styled16.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Chip2 = styled16.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  height: 32px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.xs} 0 ${({ theme: theme2 }) => theme2.spacing.sm};
  background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
`;
var RemoveChip = styled16.button`
  display: grid;
  place-items: center;
  width: 20px;
  height: 20px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  background: none;
  border: none;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    background: ${({ theme: theme2 }) => theme2.colors.hairline};
    color: ${({ theme: theme2 }) => theme2.colors.ink};
  }
`;
var SearchInput = styled16(InputField)``;
var Dropdown = styled16.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 240px;
  overflow-y: auto;
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.md};
  z-index: 20;
  padding: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var DropdownOption = styled16.button`
  display: flex;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  cursor: pointer;

  &:hover {
    background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft};
  }
`;
var EmptyOption = styled16.div`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  padding: ${({ theme: theme2 }) => theme2.spacing.sm};
`;
var LimitHint = styled16.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  margin: ${({ theme: theme2 }) => theme2.spacing.xs} 0 0;
`;

// src/components/Inputs/MultiSelect/index.tsx
import { Fragment as Fragment4, jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function MultiSelect({ label, options, value, onChange, placeholder = "Buscar\u2026", disabled, max, error }) {
  const [query, setQuery] = useState3("");
  const [open, setOpen] = useState3(false);
  const wrapRef = useRef3(null);
  useEffect3(() => {
    if (!open) return;
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);
  const atLimit = !!max && value.length >= max;
  const labelFor = (v) => {
    var _a, _b;
    return (_b = (_a = options.find((o) => o.value === v)) == null ? void 0 : _a.label) != null ? _b : v;
  };
  const q = query.trim().toLowerCase();
  const available = options.filter((o) => !value.includes(o.value) && (!q || o.label.toLowerCase().includes(q)));
  const add = (v) => {
    if (atLimit) return;
    onChange([...value, v]);
    setQuery("");
  };
  const remove = (v) => onChange(value.filter((x) => x !== v));
  return /* @__PURE__ */ jsx12(BaseInput, { label, error, children: /* @__PURE__ */ jsxs10(Wrap, { ref: wrapRef, children: [
    value.length > 0 && /* @__PURE__ */ jsx12(ChipRow, { children: value.map((v) => /* @__PURE__ */ jsxs10(Chip2, { children: [
      labelFor(v),
      !disabled && /* @__PURE__ */ jsx12(RemoveChip, { type: "button", onClick: () => remove(v), "aria-label": `Remover ${labelFor(v)}`, children: "\xD7" })
    ] }, v)) }),
    !disabled && !atLimit && /* @__PURE__ */ jsxs10(Fragment4, { children: [
      /* @__PURE__ */ jsx12(
        SearchInput,
        {
          type: "text",
          placeholder,
          value: query,
          onFocus: () => setOpen(true),
          onChange: (e) => {
            setQuery(e.target.value);
            setOpen(true);
          }
        }
      ),
      open && /* @__PURE__ */ jsxs10(Dropdown, { role: "listbox", children: [
        available.length === 0 && /* @__PURE__ */ jsx12(EmptyOption, { children: "Nenhuma op\xE7\xE3o encontrada." }),
        available.map((o) => /* @__PURE__ */ jsx12(DropdownOption, { type: "button", role: "option", onClick: () => add(o.value), children: o.label }, o.value))
      ] })
    ] }),
    atLimit && /* @__PURE__ */ jsxs10(LimitHint, { children: [
      "Limite de ",
      max,
      " selecionados atingido."
    ] })
  ] }) });
}

// src/components/Inputs/RadioGroup/styles/RadioGroup.ts
import styled17 from "styled-components";
var HiddenInput2 = styled17.input`
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
var Dot = styled17.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  border: 1.5px solid ${({ theme: theme2 }) => theme2.colors.borderStrong};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
    background: ${({ theme: theme2 }) => theme2.colors.onPrimary};
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 0.1s ease, transform 0.1s ease;
  }

  ${HiddenInput2}:checked + & {
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
  }

  ${HiddenInput2}:checked + &::after {
    background: ${({ theme: theme2 }) => theme2.colors.primary};
    opacity: 1;
    transform: scale(1);
  }

  ${HiddenInput2}:hover:not(:disabled) + & {
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
  }

  ${HiddenInput2}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme: theme2 }) => theme2.colors.primaryDisabled};
  }

  ${HiddenInput2}:disabled + & {
    opacity: 0.5;
  }
`;
var OptionWrapper = styled17.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  cursor: pointer;
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};

  &:has(${HiddenInput2}:disabled) {
    cursor: not-allowed;
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
  }
`;
var Group = styled17.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
`;
var GroupLabel = styled17.span`
  display: block;
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight};
  line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xs};
`;

// src/components/Inputs/RadioGroup/index.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
function RadioGroup({ name, options, value, onChange, label, disabled }) {
  return /* @__PURE__ */ jsxs11("div", { children: [
    label && /* @__PURE__ */ jsx13(GroupLabel, { children: label }),
    /* @__PURE__ */ jsx13(Group, { role: "radiogroup", "aria-label": label, children: options.map((option) => /* @__PURE__ */ jsxs11(OptionWrapper, { children: [
      /* @__PURE__ */ jsx13(
        HiddenInput2,
        {
          type: "radio",
          name,
          value: option.value,
          checked: value === option.value,
          disabled,
          onChange: () => onChange == null ? void 0 : onChange(option.value)
        }
      ),
      /* @__PURE__ */ jsx13(Dot, {}),
      option.label
    ] }, option.value)) })
  ] });
}

// src/components/Inputs/Select/index.tsx
import { useController as useController3 } from "react-hook-form";

// src/components/Inputs/Select/styles/Select.ts
import styled18 from "styled-components";
var SelectField = styled18.select`
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
import { jsx as jsx14 } from "react/jsx-runtime";
function RawSelect({ label, wrapperStyle, error, children, ...rest }) {
  return /* @__PURE__ */ jsx14(BaseInput, { label, wrapperStyle, error, children: /* @__PURE__ */ jsx14(SelectField, { ...rest, children }) });
}
function Select({
  label,
  control,
  name,
  wrapperStyle,
  children
}) {
  var _a, _b;
  const { field, fieldState } = useController3({ control, name });
  return /* @__PURE__ */ jsx14(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ jsx14(SelectField, { value: (_b = field.value) != null ? _b : "", onChange: (e) => field.onChange(e.target.value), onBlur: field.onBlur, ref: field.ref, children }) });
}

// src/components/Inputs/Switch/index.tsx
import { forwardRef as forwardRef4 } from "react";

// src/components/Inputs/Switch/styles/Switch.ts
import styled19 from "styled-components";
var HiddenInput3 = styled19.input`
  position: absolute;
  width: 40px;
  height: 22px;
  margin: 0;
  opacity: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;
var Track = styled19.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 22px;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  background: ${({ theme: theme2 }) => theme2.colors.borderStrong};
  transition: background 0.15s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
    background: ${({ theme: theme2 }) => theme2.colors.canvas};
    box-shadow: ${({ theme: theme2 }) => theme2.shadows.sm};
    transition: transform 0.15s ease;
  }

  ${HiddenInput3}:checked + & {
    background: ${({ theme: theme2 }) => theme2.colors.primary};
  }

  ${HiddenInput3}:checked + &::after {
    transform: translateX(18px);
  }

  ${HiddenInput3}:focus-visible + & {
    box-shadow: 0 0 0 3px ${({ theme: theme2 }) => theme2.colors.primaryDisabled};
  }

  ${HiddenInput3}:disabled + & {
    opacity: 0.5;
  }
`;
var Wrapper5 = styled19.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  cursor: pointer;
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};

  &:has(${HiddenInput3}:disabled) {
    cursor: not-allowed;
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
  }
`;

// src/components/Inputs/Switch/index.tsx
import { jsx as jsx15, jsxs as jsxs12 } from "react/jsx-runtime";
var Switch = forwardRef4(function Switch2({ label, ...rest }, ref) {
  return /* @__PURE__ */ jsxs12(Wrapper5, { children: [
    /* @__PURE__ */ jsx15(HiddenInput3, { ref, type: "checkbox", ...rest }),
    /* @__PURE__ */ jsx15(Track, {}),
    label
  ] });
});

// src/components/Inputs/Textarea/index.tsx
import { useController as useController4 } from "react-hook-form";

// src/components/Inputs/Textarea/styles/Textarea.ts
import styled20 from "styled-components";
var TextareaField = styled20.textarea`
  width: 100%;
  min-height: 140px;
  padding: ${({ theme: theme2 }) => theme2.spacing.sm} ${({ theme: theme2 }) => theme2.spacing.md};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  outline: none;
  resize: vertical;
  box-sizing: border-box;
  transition: border-color 0.15s, box-shadow 0.15s;

  &::placeholder {
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${({ theme: theme2 }) => theme2.colors.borderStrong};
  }

  &:focus {
    border-color: ${({ theme: theme2 }) => theme2.colors.ink};
    border-width: 2px;
    padding: calc(${({ theme: theme2 }) => theme2.spacing.sm} - 1px) calc(${({ theme: theme2 }) => theme2.spacing.md} - 1px);
  }

  &:disabled {
    background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft};
    color: ${({ theme: theme2 }) => theme2.colors.mutedSoft};
    cursor: not-allowed;
  }
`;

// src/components/Inputs/Textarea/index.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function RawTextarea({ label, wrapperStyle, error, ...rest }) {
  return /* @__PURE__ */ jsx16(BaseInput, { label, wrapperStyle, error, children: /* @__PURE__ */ jsx16(TextareaField, { ...rest }) });
}
function Textarea({
  label,
  control,
  name,
  wrapperStyle,
  placeholder,
  rows
}) {
  var _a, _b;
  const { field, fieldState } = useController4({ control, name });
  return /* @__PURE__ */ jsx16(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ jsx16(
    TextareaField,
    {
      placeholder,
      rows,
      value: (_b = field.value) != null ? _b : "",
      onChange: (e) => field.onChange(e.target.value),
      onBlur: field.onBlur,
      ref: field.ref
    }
  ) });
}

// src/components/Inputs/TextInput/index.tsx
import { useState as useState4 } from "react";
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
import styled21 from "styled-components";
var InputWrapper = styled21.div`
  position: relative;
  display: flex;
  align-items: center;
`;
var EyeButton = styled21.button`
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
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
function TextInput(props) {
  const { label, control, name, wrapperStyle, placeholder, currency, mask, ...rest } = props;
  const isPassword = rest.type === "password";
  const [showPassword, setShowPassword] = useState4(false);
  return /* @__PURE__ */ jsx17(ControlledBase, { label, control, name, wrapperStyle, children: (field) => {
    var _a;
    return /* @__PURE__ */ jsxs13(InputWrapper, { children: [
      /* @__PURE__ */ jsx17(
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
      isPassword && /* @__PURE__ */ jsx17(EyeButton, { type: "button", tabIndex: -1, onClick: () => setShowPassword((v) => !v), children: showPassword ? /* @__PURE__ */ jsx17(EyeOff, { size: 20 }) : /* @__PURE__ */ jsx17(Eye, { size: 20 }) })
    ] });
  } });
}

// src/components/Modal/index.tsx
import { useEffect as useEffect4, useRef as useRef4 } from "react";

// src/components/Modal/styles/Modal.ts
import styled22, { css as css5 } from "styled-components";
var Overlay2 = styled22.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;

  @media (min-width: 745px) {
    justify-content: ${({ $variant }) => $variant === "drawer" ? "flex-end" : "center"};
  }
`;
var Box3 = styled22.div`
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

  /* Opt-in via variant="drawer" (see useModal) — on desktop/tablet, opens
     as a right-side drawer instead of a centered dialog. Apps that don't
     pass it keep the centered dialog unchanged at every breakpoint. */
  ${({ $variant }) => $variant === "drawer" && css5`
      @media (min-width: 745px) {
        max-width: min(90vw, 440px);
        height: 100%;
        border-radius: 0;
        padding: 32px;
        overflow-y: auto;
        animation: ${slideInRight} 0.25s cubic-bezier(0.32, 0.72, 0, 1);
      }
    `}
`;
var ModalTitle = styled22.h3`
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.displaySm.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  margin-bottom: 24px;
`;
var ModalActions = styled22.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 28px;
`;

// src/components/Modal/index.tsx
import { jsx as jsx18 } from "react/jsx-runtime";
function Modal({ children, close, variant = "dialog" }) {
  const boxRef = useRef4(null);
  useEffect4(() => {
    var _a;
    (_a = boxRef.current) == null ? void 0 : _a.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);
  return /* @__PURE__ */ jsx18(Overlay2, { $variant: variant, onClick: close, children: /* @__PURE__ */ jsx18(
    Box3,
    {
      ref: boxRef,
      $variant: variant,
      role: "dialog",
      "aria-modal": "true",
      tabIndex: -1,
      onClick: (e) => e.stopPropagation(),
      children
    }
  ) });
}

// src/components/Pagination/styles/Pagination.ts
import styled23 from "styled-components";
var Wrapper6 = styled23.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  margin-top: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var PageButton = styled23.button`
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
import { jsx as jsx19, jsxs as jsxs14 } from "react/jsx-runtime";
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsxs14(Wrapper6, { role: "navigation", "aria-label": "Pagina\xE7\xE3o", children: [
    /* @__PURE__ */ jsx19(PageButton, { type: "button", "aria-label": "P\xE1gina anterior", onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: /* @__PURE__ */ jsx19("span", { "aria-hidden": "true", children: "\u2039" }) }),
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ jsx19(
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
    /* @__PURE__ */ jsx19(PageButton, { type: "button", "aria-label": "Pr\xF3xima p\xE1gina", onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: /* @__PURE__ */ jsx19("span", { "aria-hidden": "true", children: "\u203A" }) })
  ] });
}

// src/components/PageHeader/index.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// src/components/PageHeader/styles/PageHeader.ts
import styled24 from "styled-components";
var Wrapper7 = styled24.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var Back = styled24.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  background: transparent;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  cursor: pointer;
  margin-left: -${({ theme: theme2 }) => theme2.spacing.xs};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.sm};
  transition: background 0.15s;

  &:hover { background: ${({ theme: theme2 }) => theme2.colors.surfaceStrong}; }
`;
var Row = styled24.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.base};
`;
var Titles = styled24.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var Title = styled24.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.2;
`;
var Subtitle = styled24.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;

// src/components/PageHeader/index.tsx
import { jsx as jsx20, jsxs as jsxs15 } from "react/jsx-runtime";
function PageHeader({ title, subtitle, back, action }) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxs15(Wrapper7, { children: [
    back && /* @__PURE__ */ jsx20(Back, { onClick: () => navigate(-1), "aria-label": "Voltar", children: /* @__PURE__ */ jsx20(ArrowLeft, { size: 20 }) }),
    /* @__PURE__ */ jsxs15(Row, { children: [
      /* @__PURE__ */ jsxs15(Titles, { children: [
        /* @__PURE__ */ jsx20(Title, { children: title }),
        subtitle && /* @__PURE__ */ jsx20(Subtitle, { children: subtitle })
      ] }),
      action && /* @__PURE__ */ jsx20("div", { children: action })
    ] })
  ] });
}

// src/components/SearchInput/index.tsx
import { Search } from "lucide-react";

// src/components/SearchInput/styles/SearchInput.ts
import styled25 from "styled-components";
var Wrapper8 = styled25.div`
  position: relative;
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.md};

  svg {
    position: absolute;
    left: ${({ theme: theme2 }) => theme2.spacing.sm};
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme: theme2 }) => theme2.colors.muted};
    pointer-events: none;
  }
`;
var Field = styled25.input`
  width: 100%;
  height: 40px;
  padding: 0 ${({ theme: theme2 }) => theme2.spacing.base} 0 36px;
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  outline: none;
  transition: border-color 0.15s;

  &::placeholder {
    color: ${({ theme: theme2 }) => theme2.colors.muted};
  }

  &:focus {
    border-color: ${({ theme: theme2 }) => theme2.colors.primary};
  }
`;

// src/components/SearchInput/index.tsx
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
function SearchInput2({ value, onChange, placeholder }) {
  return /* @__PURE__ */ jsxs16(Wrapper8, { children: [
    /* @__PURE__ */ jsx21(Search, { size: 16 }),
    /* @__PURE__ */ jsx21(Field, { placeholder, value, onChange: (e) => onChange(e.target.value) })
  ] });
}

// src/components/Inputs/SegmentedControl/styles/SegmentedControl.ts
import styled26 from "styled-components";
var Wrap2 = styled26.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label2 = styled26.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Toggle = styled26.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  overflow: hidden;
`;
var Btn = styled26.button`
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
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
function SegmentedControl({
  value,
  onChange,
  options,
  label,
  tone = "ink"
}) {
  return /* @__PURE__ */ jsxs17(Wrap2, { children: [
    label && /* @__PURE__ */ jsx22(Label2, { children: label }),
    /* @__PURE__ */ jsx22(Toggle, { role: "radiogroup", "aria-label": label, children: options.map((option) => /* @__PURE__ */ jsx22(
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
import styled27, { keyframes as keyframes2 } from "styled-components";
var pulse = keyframes2`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;
var Skeleton = styled27.div`
  height: ${({ $h }) => $h != null ? $h : "16px"};
  width: ${({ $w }) => $w != null ? $w : "100%"};
  border-radius: 6px;
  background: ${({ theme: theme2 }) => theme2.colors.surfaceStrong};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

// src/components/StatusBadge/index.tsx
import styled28 from "styled-components";
import { jsx as jsx23 } from "react/jsx-runtime";
var StyledBadge = styled28.span`
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
  return /* @__PURE__ */ jsx23(StyledBadge, { $tone: tone, children });
}

// src/components/StatsGrid/styles/StatsGrid.ts
import styled29 from "styled-components";
var StatsGrid = styled29.div`
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
var StatCard = styled29.div`
  min-width: 0;
  background: ${({ theme: theme2, $tone }) => $tone === "warning" ? theme2.colors.warningSurface : $tone === "danger" ? "#fff0f3" : theme2.colors.canvas};
  border: 1px solid ${({ theme: theme2, $tone }) => $tone === "warning" ? theme2.colors.warningBorder : $tone === "danger" ? "#ffd1da" : theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.md};
  padding: ${({ theme: theme2 }) => theme2.spacing.base};
  box-shadow: ${({ theme: theme2 }) => theme2.shadows.sm};
`;
var StatLabel = styled29.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.xs};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
var StatValue = styled29.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  line-height: 1.1;
  color: ${({ theme: theme2, $tone, $muted }) => $tone === "warning" ? theme2.colors.warning : $tone === "danger" ? "#c0002a" : $muted ? theme2.colors.muted : theme2.colors.ink};
`;

// src/components/SummaryCard/styles/SummaryCard.ts
import styled30 from "styled-components";
var Card2 = styled30.div`
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
var Label3 = styled30.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;
var Row2 = styled30.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Info2 = styled30.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Items = styled30.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  flex: 1;
`;
var EmptyMessage = styled30(Items)`
  text-align: center;
`;
var Total = styled30.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  text-align: right;
  flex-shrink: 0;
  min-width: fit-content;
  margin-left: ${({ theme: theme2 }) => theme2.spacing.sm};
`;
var ItemDetail = styled30.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ItemDetailName = styled30.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  flex: 1;
`;
var ItemDetailPrice = styled30.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`;
var Divider = styled30.hr`
  border: none;
  border-top: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ButtonRow = styled30.div`
  display: flex;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};

  button {
    flex: 1;
  }
`;

// src/components/SummaryCard/index.tsx
import { Fragment as Fragment5, jsx as jsx24, jsxs as jsxs18 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs18(Card2, { $bottomOffset: bottomOffset, children: [
    /* @__PURE__ */ jsx24(Label3, { style: { marginBottom: 0 }, children: label }),
    isEmpty ? /* @__PURE__ */ jsx24(EmptyMessage, { children: emptyMessage }) : hasSubtotals ? /* @__PURE__ */ jsx24("div", { children: items.map((item) => /* @__PURE__ */ jsxs18(ItemDetail, { children: [
      /* @__PURE__ */ jsxs18(ItemDetailName, { children: [
        item.qty,
        "\xD7 ",
        item.name
      ] }),
      item.subtotal !== void 0 && /* @__PURE__ */ jsx24(ItemDetailPrice, { children: formatCurrency(item.subtotal) })
    ] }, item.name)) }) : /* @__PURE__ */ jsxs18(Row2, { children: [
      /* @__PURE__ */ jsx24(Items, { children: itemsText }),
      /* @__PURE__ */ jsx24(Total, { children: formatCurrency(total) })
    ] }),
    !isEmpty && hasSubtotals && /* @__PURE__ */ jsxs18(Fragment5, { children: [
      /* @__PURE__ */ jsx24(Divider, {}),
      /* @__PURE__ */ jsx24(Row2, { children: /* @__PURE__ */ jsx24(Info2, { children: /* @__PURE__ */ jsx24(Total, { children: formatCurrency(total) }) }) })
    ] }),
    buttons && buttons.length > 0 ? /* @__PURE__ */ jsx24(ButtonRow, { children: buttons.map((btn, idx) => /* @__PURE__ */ jsx24(
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
    )) }) : onConfirm ? /* @__PURE__ */ jsx24(
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
import styled31 from "styled-components";
var TabBar = styled31.div.attrs({ role: "tablist" })`
  display: flex;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Tab = styled31.button.attrs(({ $active }) => ({
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
var TabBadge = styled31.span`
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
import styled32, { keyframes as keyframes3 } from "styled-components";
var fadeOut = keyframes3`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(8px); }
`;
var ToastEl = styled32.div`
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
import { useCallback, useRef as useRef5, useState as useState5 } from "react";
import { jsx as jsx25 } from "react/jsx-runtime";
function useToast(duration = 2500) {
  const [state, setState] = useState5(null);
  const timerRef = useRef5(null);
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
  const toast = state ? /* @__PURE__ */ jsx25(Toast, { message: state.message, leaving: state.leaving }) : null;
  return { show, toast };
}

// src/components/Toast/index.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function Toast({ message, leaving }) {
  return createPortal2(/* @__PURE__ */ jsx26(ToastEl, { $leaving: leaving, children: message }), document.body);
}

// src/pages/LoginPage/index.tsx
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// src/pages/LoginPage/hooks/useLogin.ts
import { useEffect as useEffect6, useState as useState7 } from "react";
import { useNavigate as useNavigate2 } from "react-router-dom";

// src/hooks/useAuth.ts
import { useCallback as useCallback2, useContext, useEffect as useEffect5, useMemo, useState as useState6 } from "react";

// src/contexts/AuthContext.tsx
import { createContext } from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var AuthContext = createContext(null);
function AuthProvider({ client, children }) {
  const authValue = useAuth(client);
  return /* @__PURE__ */ jsx27(AuthContext.Provider, { value: authValue, children });
}

// src/text/actions.ts
var actions = {
  cancel: "Cancelar",
  confirm: "Confirmar",
  remove: "Remover",
  actionsColumn: "A\xE7\xF5es"
};

// src/text/fields.ts
var fields = {
  name: "Nome",
  fullName: "Nome completo",
  email: "E-mail",
  emailPlaceholder: "seu@email.com",
  phone: "Telefone",
  status: "Status",
  password: "Senha"
};

// src/text/validation.ts
var validation = {
  required: (what) => `Informe ${what}`,
  selectRequired: (what) => `Selecione ${what}`,
  emailInvalid: "E-mail inv\xE1lido",
  passwordMin: "A senha deve ter pelo menos 6 caracteres",
  passwordMismatch: "As senhas n\xE3o coincidem",
  passwordSameAsOld: "A nova senha deve ser diferente da senha atual"
};

// src/text/feedback.ts
var feedback = {
  loadError: "Erro ao carregar"
};

// src/text/index.ts
var text = { actions, fields, validation, feedback };

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
  const [user, setUser] = useState6(null);
  const [userEmail, setUserEmail] = useState6("");
  const [loading, setLoading] = useState6(true);
  const [error, setError] = useState6(null);
  const [sessionUser, setSessionUser] = useState6(void 0);
  useEffect5(() => {
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
  useEffect5(() => {
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
  const updatePassword = useCallback2(async (newPassword) => {
    const { error: passwordError } = await client.auth.updateUser({ password: newPassword });
    if (passwordError) {
      if ("code" in passwordError && passwordError.code === "same_password") {
        return text.validation.passwordSameAsOld;
      }
      return "Erro ao atualizar senha.";
    }
    return null;
  }, [client]);
  return useMemo(
    () => ({ user, userEmail, loading, error, login, logout, updateProfile, updatePassword }),
    [user, userEmail, loading, error, login, logout, updateProfile, updatePassword]
  );
}
function useAuthCtx() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

// src/pages/LoginPage/hooks/useLogin.ts
function useLogin(resolveRoute) {
  const [error, setError] = useState7("");
  const [submitting, setSubmitting] = useState7(false);
  const { login, user } = useAuthCtx();
  const navigate = useNavigate2();
  useEffect6(() => {
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
import styled33 from "styled-components";
var Page = styled33.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Brand2 = styled33.div`
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
    flex: 1;
    padding: ${({ theme: theme2 }) => theme2.spacing.xl} ${({ theme: theme2 }) => theme2.spacing.base};
    gap: ${({ theme: theme2 }) => theme2.spacing.md};
  }
`;
var BrandMark = styled33.div`
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
var BrandText = styled33.div`
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 1;
`;
var BrandName2 = styled33.h1`
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
var BrandSub = styled33.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  opacity: 0.75;
  line-height: 1.4;
`;
var BrandQuote = styled33.blockquote`
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
var FormPanel = styled33.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: theme2 }) => theme2.spacing.xxl};
  background: ${({ theme: theme2 }) => theme2.colors.canvas};

  @media (max-width: 768px) {
    flex: none;
    justify-content: flex-start;
    padding: ${({ theme: theme2 }) => theme2.spacing.xl} ${({ theme: theme2 }) => theme2.spacing.base}
      ${({ theme: theme2 }) => theme2.spacing.xxl};
    border-radius: ${({ theme: theme2 }) => theme2.rounded.xl} ${({ theme: theme2 }) => theme2.rounded.xl} 0 0;
    margin-top: -${({ theme: theme2 }) => theme2.rounded.lg};
    position: relative;
    z-index: 1;
    box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.05);
    animation: ${slideUp} 0.35s ease;
  }
`;
var FormBox = styled33.div`
  width: 100%;
  max-width: 400px;
  animation: ${fadeUp} 0.35s ease;
`;
var FormHeader = styled33.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var FormTitle = styled33.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  letter-spacing: -0.3px;
  margin-bottom: 6px;
`;
var FormSubtitle = styled33.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Form2 = styled33.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var SubmitButton = styled33(Button)`
  @media (max-width: 768px) {
    border-radius: ${({ theme: theme2 }) => theme2.rounded.full};
  }
`;
var ErrorMsg = styled33.p`
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
import { jsx as jsx28, jsxs as jsxs19 } from "react/jsx-runtime";
function LoginPage({ brand, resolveRoute }) {
  const { error, submitting, handleLogin } = useLogin(resolveRoute);
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" }
  });
  return /* @__PURE__ */ jsxs19(Page, { children: [
    /* @__PURE__ */ jsxs19(Brand2, { children: [
      /* @__PURE__ */ jsx28(BrandMark, { children: /* @__PURE__ */ jsx28("img", { src: brand.icon, alt: brand.iconAlt }) }),
      /* @__PURE__ */ jsxs19(BrandText, { children: [
        /* @__PURE__ */ jsx28(BrandName2, { children: brand.name }),
        /* @__PURE__ */ jsx28(BrandSub, { children: brand.sub })
      ] }),
      brand.quote && /* @__PURE__ */ jsx28(BrandQuote, { children: brand.quote })
    ] }),
    /* @__PURE__ */ jsx28(FormPanel, { children: /* @__PURE__ */ jsxs19(FormBox, { children: [
      /* @__PURE__ */ jsxs19(FormHeader, { children: [
        /* @__PURE__ */ jsx28(FormTitle, { children: "Bem-vindo" }),
        /* @__PURE__ */ jsx28(FormSubtitle, { children: "Entre com suas credenciais para continuar" })
      ] }),
      /* @__PURE__ */ jsxs19(Form2, { onSubmit: handleSubmit(handleLogin), children: [
        /* @__PURE__ */ jsx28(
          TextInput,
          {
            label: text.fields.email,
            control,
            name: "email",
            type: "email",
            autoFocus: true,
            placeholder: text.fields.emailPlaceholder
          }
        ),
        /* @__PURE__ */ jsx28(
          TextInput,
          {
            label: "Senha",
            control,
            name: "password",
            type: "password",
            placeholder: "M\xEDnimo 6 caracteres"
          }
        ),
        /* @__PURE__ */ jsx28(
          SubmitButton,
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
        error && /* @__PURE__ */ jsx28(ErrorMsg, { children: error })
      ] })
    ] }) })
  ] });
}

// src/pages/ProfilePage/index.tsx
import { zodResolver as zodResolver2 } from "@hookform/resolvers/zod";
import { useForm as useForm2 } from "react-hook-form";
import { useNavigate as useNavigate3 } from "react-router-dom";

// src/pages/ProfilePage/styles/ProfilePage.ts
import styled34 from "styled-components";
var Wrap3 = styled34.div`
  max-width: 560px;
`;
var Identity = styled34.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairlineSoft};
`;
var Name = styled34.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.1;
  margin-bottom: 4px;
`;
var RoleLabel = styled34.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Section = styled34.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var SectionTitle = styled34.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Actions = styled34.div`
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
  email: z2.string().email(text.validation.emailInvalid)
});

// src/pages/ProfilePage/index.tsx
import { Fragment as Fragment6, jsx as jsx29, jsxs as jsxs20 } from "react/jsx-runtime";
function ProfilePage({ roleLabel, changePasswordPath }) {
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
  return /* @__PURE__ */ jsxs20(Wrap3, { children: [
    /* @__PURE__ */ jsx29(PageHeader, { title: "Meu perfil", back: true }),
    /* @__PURE__ */ jsxs20(Identity, { children: [
      /* @__PURE__ */ jsx29(Name, { children: (_b = user == null ? void 0 : user.name) != null ? _b : "\u2014" }),
      roleLabel && /* @__PURE__ */ jsx29(RoleLabel, { children: roleLabel })
    ] }),
    /* @__PURE__ */ jsxs20(Section, { children: [
      /* @__PURE__ */ jsx29(SectionTitle, { children: "Informa\xE7\xF5es pessoais" }),
      /* @__PURE__ */ jsx29(TextInput, { label: text.fields.fullName, control, name: "name", placeholder: "Nome e sobrenome" }),
      /* @__PURE__ */ jsx29(
        TextInput,
        {
          label: "E-mail de acesso",
          control,
          name: "email",
          type: "email",
          placeholder: text.fields.emailPlaceholder
        }
      )
    ] }),
    /* @__PURE__ */ jsxs20(Actions, { children: [
      /* @__PURE__ */ jsx29(Button, { variant: "secondary", size: "md", onClick: () => navigate(-1), children: text.actions.cancel }),
      /* @__PURE__ */ jsx29(Button, { variant: "primary", size: "md", onClick: handleSubmit(onSubmit), disabled: isSubmitting, children: isSubmitting ? "Salvando..." : "Salvar altera\xE7\xF5es" })
    ] }),
    changePasswordPath && /* @__PURE__ */ jsxs20(Fragment6, { children: [
      /* @__PURE__ */ jsx29(Section, { children: /* @__PURE__ */ jsx29(SectionTitle, { children: "Seguran\xE7a" }) }),
      /* @__PURE__ */ jsx29(Actions, { children: /* @__PURE__ */ jsx29(Button, { variant: "secondary", size: "md", onClick: () => navigate(changePasswordPath), children: "Alterar senha" }) })
    ] }),
    toast
  ] });
}

// src/pages/ChangePasswordPage/index.tsx
import { zodResolver as zodResolver3 } from "@hookform/resolvers/zod";
import { useForm as useForm3 } from "react-hook-form";
import { useNavigate as useNavigate4 } from "react-router-dom";

// src/pages/ChangePasswordPage/validators/schema.ts
import { z as z3 } from "zod";
var passwordSchema = z3.object({
  password: z3.string().min(6, text.validation.passwordMin),
  confirmPassword: z3.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: text.validation.passwordMismatch,
  path: ["confirmPassword"]
});

// src/pages/ChangePasswordPage/index.tsx
import { jsx as jsx30, jsxs as jsxs21 } from "react/jsx-runtime";
function ChangePasswordPage() {
  const { updatePassword } = useAuthCtx();
  const navigate = useNavigate4();
  const { show: showToast, toast } = useToast();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm3({
    resolver: zodResolver3(passwordSchema),
    defaultValues: { password: "", confirmPassword: "" }
  });
  const onSubmit = async (data) => {
    const err = await updatePassword(data.password);
    showToast(err != null ? err : "Senha atualizada com sucesso.");
    if (!err) reset();
  };
  return /* @__PURE__ */ jsxs21(Wrap3, { children: [
    /* @__PURE__ */ jsx30(PageHeader, { title: "Alterar senha", back: true }),
    /* @__PURE__ */ jsxs21(Section, { children: [
      /* @__PURE__ */ jsx30(TextInput, { label: "Nova senha", control, name: "password", type: "password", placeholder: "M\xEDnimo 6 caracteres" }),
      /* @__PURE__ */ jsx30(
        TextInput,
        {
          label: "Confirmar nova senha",
          control,
          name: "confirmPassword",
          type: "password",
          placeholder: "Repita a nova senha"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs21(Actions, { children: [
      /* @__PURE__ */ jsx30(Button, { variant: "secondary", size: "md", onClick: () => navigate(-1), children: text.actions.cancel }),
      /* @__PURE__ */ jsx30(Button, { variant: "primary", size: "md", onClick: handleSubmit(onSubmit), disabled: isSubmitting, children: isSubmitting ? "Salvando..." : "Salvar nova senha" })
    ] }),
    toast
  ] });
}

// src/hooks/useMediaQuery.ts
import { useEffect as useEffect7, useState as useState8 } from "react";
function useMediaQuery(query) {
  const [matches, setMatches] = useState8(() => window.matchMedia(query).matches);
  useEffect7(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// src/hooks/useModal.ts
import { createElement, useState as useState9 } from "react";
import { createPortal as createPortal3 } from "react-dom";
function useModal(variant = "dialog") {
  const [content, setContent] = useState9(null);
  const open = (c) => setContent(c);
  const close = () => setContent(null);
  const modal = content !== null ? createPortal3(createElement(Modal, { close, variant, children: content }), document.body) : null;
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
  ChangePasswordPage,
  Checkbox,
  Chip,
  ChipBar,
  ControlledBase,
  DatePicker,
  Empty,
  Form,
  GlobalStyles_default as GlobalStyles,
  IconButton,
  InfoBox,
  InputField,
  LoginPage,
  Modal,
  ModalActions,
  ModalTitle,
  MonthPicker,
  MultiSelect,
  PageHeader,
  Pagination,
  ProfilePage,
  RadioGroup,
  RawSelect,
  RawTextarea,
  SearchInput2 as SearchInput,
  SegmentedControl,
  Select,
  Skeleton,
  StatCard,
  StatLabel,
  StatValue,
  StatsGrid,
  StatusBadge,
  SummaryCard,
  Switch,
  Tab,
  TabBadge,
  TabBar,
  TextInput,
  Textarea,
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
  text,
  theme,
  useAuth,
  useAuthCtx,
  useMediaQuery,
  useModal,
  useToast
};
