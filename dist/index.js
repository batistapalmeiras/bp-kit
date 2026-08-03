"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AuthContext: () => AuthContext,
  AuthProvider: () => AuthProvider,
  BaseInput: () => BaseInput,
  BottomSheet: () => BottomSheet,
  Brand: () => Brand,
  Button: () => Button,
  Card: () => Card,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  ChipBar: () => ChipBar,
  ControlledBase: () => ControlledBase,
  Empty: () => Empty,
  GlobalStyles: () => GlobalStyles_default,
  IconButton: () => IconButton,
  InfoBox: () => InfoBox,
  InputField: () => InputField,
  LoginPage: () => LoginPage,
  Modal: () => Modal,
  ModalActions: () => ModalActions,
  ModalTitle: () => ModalTitle,
  PageHeader: () => PageHeader,
  Pagination: () => Pagination,
  ProfilePage: () => ProfilePage,
  RawSelect: () => RawSelect,
  SegmentedControl: () => SegmentedControl,
  Select: () => Select,
  Skeleton: () => Skeleton,
  StatusBadge: () => StatusBadge,
  SummaryCard: () => SummaryCard,
  Tab: () => Tab,
  TabBadge: () => TabBadge,
  TabBar: () => TabBar,
  TextInput: () => TextInput,
  Toast: () => Toast,
  Typography: () => Typography,
  fadeDown: () => fadeDown,
  fadeIn: () => fadeIn,
  fadeUp: () => fadeUp,
  fetchProfile: () => fetchProfile,
  formatCNPJ: () => formatCNPJ,
  formatCPF: () => formatCPF,
  formatCpfCnpj: () => formatCpfCnpj,
  formatCurrency: () => formatCurrency,
  maskCurrencyInput: () => maskCurrencyInput,
  maskPhone: () => maskPhone,
  parseCurrency: () => parseCurrency,
  parsePhone: () => parsePhone,
  slideUp: () => slideUp,
  theme: () => theme,
  useAuth: () => useAuth,
  useAuthCtx: () => useAuthCtx,
  useMediaQuery: () => useMediaQuery,
  useModal: () => useModal,
  useToast: () => useToast
});
module.exports = __toCommonJS(src_exports);

// src/components/BottomSheet/index.tsx
var import_react_dom = require("react-dom");

// src/components/BottomSheet/styles/BottomSheet.ts
var import_styled_components2 = __toESM(require("styled-components"));

// src/styles/animations.ts
var import_styled_components = require("styled-components");
var fadeIn = import_styled_components.keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
var fadeUp = import_styled_components.keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;
var fadeDown = import_styled_components.keyframes`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`;
var slideUp = import_styled_components.keyframes`
  from { transform: translateY(100%); }
  to   { transform: translateY(0); }
`;

// src/components/BottomSheet/styles/BottomSheet.ts
var Overlay = import_styled_components2.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;
var Sheet = import_styled_components2.default.div`
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
var Handle = import_styled_components2.default.div`
  width: 36px;
  height: 4px;
  border-radius: 2px;
  background: ${({ theme: theme2 }) => theme2.colors.hairline};
  margin: 12px auto 0;
`;
var Content = import_styled_components2.default.div`
  padding: 20px ${({ theme: theme2 }) => theme2.spacing.base} ${({ theme: theme2 }) => theme2.spacing.lg};
`;

// src/components/BottomSheet/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function BottomSheet({ children, onClose }) {
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay, { onClick: onClose }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, { children })
      ] })
    ] }),
    document.body
  );
}

// src/components/Brand/styles/Brand.ts
var import_react_router_dom = require("react-router-dom");
var import_styled_components3 = __toESM(require("styled-components"));
var brandLayout = import_styled_components3.css`
  display: flex;
  align-items: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  flex-shrink: 0;
`;
var BrandLink = (0, import_styled_components3.default)(import_react_router_dom.Link)`
  ${brandLayout}
  text-decoration: none;
`;
var BrandWrapper = import_styled_components3.default.div`
  ${brandLayout}
`;
var BrandLogo = import_styled_components3.default.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
var BrandName = import_styled_components3.default.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.titleMd.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.titleMd.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.primary};

  @media (max-width: 480px) {
    display: none;
  }
`;

// src/components/Brand/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Brand({ icon, alt, name, to }) {
  const content = /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BrandLogo, { src: icon, alt }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BrandName, { children: name })
  ] });
  if (to) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BrandLink, { to, children: content });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(BrandWrapper, { children: content });
}

// src/components/Card/styles/Card.ts
var import_styled_components4 = __toESM(require("styled-components"));
var Card = import_styled_components4.default.div`
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
var import_react = require("react");

// src/components/Button/styles/Button.ts
var import_styled_components6 = __toESM(require("styled-components"));

// src/components/_shared/buttonBase.ts
var import_styled_components5 = require("styled-components");
var sizeStyles = {
  xs: import_styled_components5.css`
    height: 32px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.sm};
    font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
    font-weight: 600;
  `,
  sm: import_styled_components5.css`
    height: 36px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.md};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonSm.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonSm.fontWeight};
  `,
  md: import_styled_components5.css`
    height: 44px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.lg};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontWeight};
  `,
  lg: import_styled_components5.css`
    height: 52px;
    padding: 0 ${({ theme: theme2 }) => theme2.spacing.xl};
    font-size: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontSize};
    font-weight: ${({ theme: theme2 }) => theme2.typography.buttonMd.fontWeight};
  `
};
var variantStyles = {
  primary: import_styled_components5.css`
    background: ${({ theme: theme2 }) => theme2.colors.primary};
    color: ${({ theme: theme2 }) => theme2.colors.onPrimary};
    border: none;

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.primaryActive}; }
    &:disabled { background: ${({ theme: theme2 }) => theme2.colors.primaryDisabled}; cursor: not-allowed; }
  `,
  secondary: import_styled_components5.css`
    background: ${({ theme: theme2 }) => theme2.colors.canvas};
    color: ${({ theme: theme2 }) => theme2.colors.ink};
    border: 1px solid ${({ theme: theme2 }) => theme2.colors.borderStrong};

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.surfaceSoft}; }
    &:disabled { color: ${({ theme: theme2 }) => theme2.colors.mutedSoft}; border-color: ${({ theme: theme2 }) => theme2.colors.hairline}; cursor: not-allowed; }
  `,
  danger: import_styled_components5.css`
    background: ${({ theme: theme2 }) => theme2.colors.canvas};
    color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
    border: 1px solid ${({ theme: theme2 }) => theme2.colors.primaryErrorText};

    &:hover:not(:disabled) { background: ${({ theme: theme2 }) => theme2.colors.primaryErrorText}; color: ${({ theme: theme2 }) => theme2.colors.onPrimary}; }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  `
};
var buttonBaseCss = import_styled_components5.css`
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
var StyledButton = import_styled_components6.default.button`
  ${buttonBaseCss}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
`;

// src/components/Button/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Button = (0, import_react.forwardRef)(function Button2({ variant = "primary", size = "md", fullWidth = false, type = "button", children, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StyledButton, { ref, type, $variant: variant, $size: size, $fullWidth: fullWidth, ...rest, children });
});

// src/components/Chip/styles/Chip.ts
var import_styled_components7 = __toESM(require("styled-components"));
var ChipBar = import_styled_components7.default.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  padding: ${({ theme: theme2 }) => theme2.spacing.sm} 0;
`;
var Chip = import_styled_components7.default.button`
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
var import_styled_components8 = __toESM(require("styled-components"));
var styleMap = {
  h1: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.displayXl.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displayXl.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displayXl.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h2: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.displayMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displayMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displayMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h3: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.displaySm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.displaySm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h4: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.titleMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.titleMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.titleMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h5: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.titleSm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.titleSm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.titleSm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  h6: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize}; font-weight: 600; line-height: ${({ theme: theme2 }) => theme2.typography.bodySm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.ink};`,
  p: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.body};`,
  span: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.bodyMd.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.body};`,
  label: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted}; text-transform: uppercase; letter-spacing: 0.5px;`,
  caption: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.captionSm.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.captionSm.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted};`,
  error: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.bodySm.fontWeight}; color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};`,
  micro: import_styled_components8.css`font-size: ${({ theme: theme2 }) => theme2.typography.microLabel.fontSize}; font-weight: ${({ theme: theme2 }) => theme2.typography.microLabel.fontWeight}; line-height: ${({ theme: theme2 }) => theme2.typography.microLabel.lineHeight}; color: ${({ theme: theme2 }) => theme2.colors.muted}; text-transform: uppercase; letter-spacing: 0.5px;`
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
var StyledText = import_styled_components8.default.p`
  ${({ $type }) => styleMap[$type]}
`;

// src/components/Typography/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function Typography({ type, as, children, ...rest }) {
  const tag = as != null ? as : defaultTagMap[type];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StyledText, { as: tag, $type: type, ...rest, children });
}

// src/components/Empty/styles/Empty.ts
var import_styled_components9 = __toESM(require("styled-components"));
var Wrapper = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
  text-align: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;

// src/components/Empty/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Empty({ title, description }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Wrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Typography, { type: "h3", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Typography, { type: "p", children: description })
  ] });
}

// src/components/IconButton/index.tsx
var import_react2 = require("react");

// src/components/IconButton/styles/IconButton.ts
var import_styled_components10 = __toESM(require("styled-components"));
var iconBoxSize = { xs: 14, sm: 16, md: 18, lg: 20 };
var IconWrap = import_styled_components10.default.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => iconBoxSize[$size]}px;
  height: ${({ $size }) => iconBoxSize[$size]}px;
  flex-shrink: 0;
  margin-top: 2px;

  svg { display: block; width: 100%; height: 100%; }
`;
var StyledButton2 = import_styled_components10.default.button`
  ${buttonBaseCss}
  ${({ $size }) => sizeStyles[$size]}
  ${({ $variant }) => variantStyles[$variant]}
  ${({ $iconOnly }) => $iconOnly && import_styled_components10.css`padding: 0; aspect-ratio: 1 / 1;`}
`;

// src/components/IconButton/index.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var IconButton = (0, import_react2.forwardRef)(function IconButton2({ icon, iconPosition = "left", variant = "primary", size = "md", fullWidth = false, type = "button", children, ...rest }, ref) {
  const iconEl = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconWrap, { $size: size, children: icon });
  const iconOnly = iconPosition === "center";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledButton2, { ref, type, $variant: variant, $size: size, $fullWidth: fullWidth, $iconOnly: iconOnly, ...rest, children: iconOnly ? iconEl : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    iconPosition === "left" && iconEl,
    children,
    iconPosition === "right" && iconEl
  ] }) });
});

// src/components/InfoBox/index.tsx
var import_lucide_react = require("lucide-react");

// src/components/InfoBox/styles/InfoBox.ts
var import_styled_components11 = __toESM(require("styled-components"));
var Box = import_styled_components11.default.div`
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
var import_jsx_runtime7 = require("react/jsx-runtime");
function InfoBox({ variant = "info", children, style }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Box, { $variant: variant, style, children: [
    variant === "warning" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.AlertTriangle, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.Info, { size: 16 }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children })
  ] });
}

// src/components/Inputs/BaseInput/index.tsx
var import_react_hook_form = require("react-hook-form");

// src/components/Inputs/BaseInput/styles/BaseInput.ts
var import_styled_components12 = __toESM(require("styled-components"));
var Wrapper2 = import_styled_components12.default.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label = import_styled_components12.default.label`
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.caption.fontWeight};
  line-height: ${({ theme: theme2 }) => theme2.typography.caption.lineHeight};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var ErrorText = import_styled_components12.default.span`
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
`;
var InputField = import_styled_components12.default.input`
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
var import_jsx_runtime8 = require("react/jsx-runtime");
function BaseInput({ label, wrapperStyle, error, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(Wrapper2, { style: wrapperStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Label, { children: label }),
    children,
    error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ErrorText, { children: error })
  ] });
}
function ControlledBase({
  label,
  control,
  name,
  wrapperStyle,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react_hook_form.Controller,
    {
      control,
      name,
      render: ({ field, fieldState }) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: children(field, (_b = fieldState.error) == null ? void 0 : _b.message) });
      }
    }
  );
}

// src/components/Inputs/Checkbox/index.tsx
var import_react3 = require("react");
var import_lucide_react2 = require("lucide-react");

// src/components/Inputs/Checkbox/styles/Checkbox.ts
var import_styled_components13 = __toESM(require("styled-components"));
var HiddenInput = import_styled_components13.default.input`
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
var Box2 = import_styled_components13.default.span`
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
var Wrapper3 = import_styled_components13.default.label`
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
var import_jsx_runtime9 = require("react/jsx-runtime");
var Checkbox = (0, import_react3.forwardRef)(function Checkbox2({ label, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Wrapper3, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(HiddenInput, { ref, type: "checkbox", ...rest }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Box2, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react2.Check, {}) }),
    label
  ] });
});

// src/components/Inputs/Select/index.tsx
var import_react_hook_form2 = require("react-hook-form");

// src/components/Inputs/Select/styles/Select.ts
var import_styled_components14 = __toESM(require("styled-components"));
var SelectField = import_styled_components14.default.select`
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
var import_jsx_runtime10 = require("react/jsx-runtime");
function RawSelect({ label, wrapperStyle, error, children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BaseInput, { label, wrapperStyle, error, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectField, { ...rest, children }) });
}
function Select({
  label,
  control,
  name,
  wrapperStyle,
  children
}) {
  var _a, _b;
  const { field, fieldState } = (0, import_react_hook_form2.useController)({ control, name });
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BaseInput, { label, wrapperStyle, error: (_a = fieldState.error) == null ? void 0 : _a.message, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SelectField, { value: (_b = field.value) != null ? _b : "", onChange: (e) => field.onChange(e.target.value), onBlur: field.onBlur, ref: field.ref, children }) });
}

// src/components/Inputs/TextInput/index.tsx
var import_react4 = require("react");
var import_lucide_react3 = require("lucide-react");

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
var import_styled_components15 = __toESM(require("styled-components"));
var InputWrapper = import_styled_components15.default.div`
  position: relative;
  display: flex;
  align-items: center;
`;
var EyeButton = import_styled_components15.default.button`
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function TextInput(props) {
  const { label, control, name, wrapperStyle, placeholder, currency, mask, ...rest } = props;
  const isPassword = rest.type === "password";
  const [showPassword, setShowPassword] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ControlledBase, { label, control, name, wrapperStyle, children: (field) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(InputWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
      isPassword && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(EyeButton, { type: "button", tabIndex: -1, onClick: () => setShowPassword((v) => !v), children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react3.EyeOff, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react3.Eye, { size: 20 }) })
    ] });
  } });
}

// src/components/Modal/index.tsx
var import_react5 = require("react");

// src/components/Modal/styles/Modal.ts
var import_styled_components16 = __toESM(require("styled-components"));
var Overlay2 = import_styled_components16.default.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease;
`;
var Box3 = import_styled_components16.default.div`
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
var ModalTitle = import_styled_components16.default.h3`
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: ${({ theme: theme2 }) => theme2.typography.displaySm.fontWeight};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  margin-bottom: 24px;
`;
var ModalActions = import_styled_components16.default.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 28px;
`;

// src/components/Modal/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Modal({ children, close }) {
  const boxRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    var _a;
    (_a = boxRef.current) == null ? void 0 : _a.focus();
    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Overlay2, { onClick: close, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Box3, { ref: boxRef, role: "dialog", "aria-modal": "true", tabIndex: -1, onClick: (e) => e.stopPropagation(), children }) });
}

// src/components/Pagination/styles/Pagination.ts
var import_styled_components17 = __toESM(require("styled-components"));
var Wrapper4 = import_styled_components17.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
  margin-top: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var PageButton = import_styled_components17.default.button`
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
var import_jsx_runtime13 = require("react/jsx-runtime");
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Wrapper4, { role: "navigation", "aria-label": "Pagina\xE7\xE3o", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PageButton, { type: "button", "aria-label": "P\xE1gina anterior", onClick: () => onPageChange(currentPage - 1), disabled: currentPage === 1, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": "true", children: "\u2039" }) }),
    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PageButton, { type: "button", "aria-label": "Pr\xF3xima p\xE1gina", onClick: () => onPageChange(currentPage + 1), disabled: currentPage === totalPages, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { "aria-hidden": "true", children: "\u203A" }) })
  ] });
}

// src/components/PageHeader/index.tsx
var import_react_router_dom2 = require("react-router-dom");
var import_lucide_react4 = require("lucide-react");

// src/components/PageHeader/styles/PageHeader.ts
var import_styled_components18 = __toESM(require("styled-components"));
var Wrapper5 = import_styled_components18.default.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var Back = import_styled_components18.default.button`
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
var Row = import_styled_components18.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.base};
`;
var Titles = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
var Title = import_styled_components18.default.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.2;
`;
var Subtitle = import_styled_components18.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodyMd.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;

// src/components/PageHeader/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function PageHeader({ title, subtitle, back, action }) {
  const navigate = (0, import_react_router_dom2.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Wrapper5, { children: [
    back && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Back, { onClick: () => navigate(-1), children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react4.ArrowLeft, { size: 15 }),
      "Voltar"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Titles, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Title, { children: title }),
        subtitle && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Subtitle, { children: subtitle })
      ] }),
      action && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: action })
    ] })
  ] });
}

// src/components/Inputs/SegmentedControl/styles/SegmentedControl.ts
var import_styled_components19 = __toESM(require("styled-components"));
var Wrap = import_styled_components19.default.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Label2 = import_styled_components19.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Toggle = import_styled_components19.default.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  border: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  overflow: hidden;
`;
var Btn = import_styled_components19.default.button`
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
var import_jsx_runtime15 = require("react/jsx-runtime");
function SegmentedControl({
  value,
  onChange,
  options,
  label,
  tone = "ink"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Wrap, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Label2, { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Toggle, { role: "radiogroup", "aria-label": label, children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_styled_components20 = __toESM(require("styled-components"));
var pulse = import_styled_components20.keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
`;
var Skeleton = import_styled_components20.default.div`
  height: ${({ $h }) => $h != null ? $h : "16px"};
  width: ${({ $w }) => $w != null ? $w : "100%"};
  border-radius: 6px;
  background: ${({ theme: theme2 }) => theme2.colors.surfaceStrong};
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

// src/components/StatusBadge/index.tsx
var import_styled_components21 = __toESM(require("styled-components"));
var import_jsx_runtime16 = require("react/jsx-runtime");
var StyledBadge = import_styled_components21.default.span`
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(StyledBadge, { $tone: tone, children });
}

// src/components/SummaryCard/styles/SummaryCard.ts
var import_styled_components22 = __toESM(require("styled-components"));
var Card2 = import_styled_components22.default.div`
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
var Label3 = import_styled_components22.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;
var Row2 = import_styled_components22.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Info2 = import_styled_components22.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
  width: 100%;
`;
var Items = import_styled_components22.default.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.captionSm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  flex: 1;
`;
var EmptyMessage = (0, import_styled_components22.default)(Items)`
  text-align: center;
`;
var Total = import_styled_components22.default.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  text-align: right;
  flex-shrink: 0;
  min-width: fit-content;
  margin-left: ${({ theme: theme2 }) => theme2.spacing.sm};
`;
var ItemDetail = import_styled_components22.default.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};
  padding: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ItemDetailName = import_styled_components22.default.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  flex: 1;
`;
var ItemDetailPrice = import_styled_components22.default.span`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  white-space: nowrap;
  flex-shrink: 0;
  text-align: right;
`;
var Divider = import_styled_components22.default.hr`
  border: none;
  border-top: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin: ${({ theme: theme2 }) => theme2.spacing.xs} 0;
`;
var ButtonRow = import_styled_components22.default.div`
  display: flex;
  gap: ${({ theme: theme2 }) => theme2.spacing.sm};

  button {
    flex: 1;
  }
`;

// src/components/SummaryCard/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Card2, { $bottomOffset: bottomOffset, children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Label3, { style: { marginBottom: 0 }, children: label }),
    isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(EmptyMessage, { children: emptyMessage }) : hasSubtotals ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ItemDetail, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(ItemDetailName, { children: [
        item.qty,
        "\xD7 ",
        item.name
      ] }),
      item.subtotal !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ItemDetailPrice, { children: formatCurrency(item.subtotal) })
    ] }, item.name)) }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Row2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Items, { children: itemsText }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Total, { children: formatCurrency(total) })
    ] }),
    !isEmpty && hasSubtotals && /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Row2, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Info2, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Total, { children: formatCurrency(total) }) }) })
    ] }),
    buttons && buttons.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ButtonRow, { children: buttons.map((btn, idx) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
    )) }) : onConfirm ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_styled_components23 = __toESM(require("styled-components"));
var TabBar = import_styled_components23.default.div.attrs({ role: "tablist" })`
  display: flex;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairline};
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
  gap: ${({ theme: theme2 }) => theme2.spacing.xs};
`;
var Tab = import_styled_components23.default.button.attrs(({ $active }) => ({
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
var TabBadge = import_styled_components23.default.span`
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
var import_react_dom2 = require("react-dom");

// src/components/Toast/styles/Toast.ts
var import_styled_components24 = __toESM(require("styled-components"));
var fadeOut = import_styled_components24.keyframes`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(8px); }
`;
var ToastEl = import_styled_components24.default.div`
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
var import_react6 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function useToast(duration = 2500) {
  const [state, setState] = (0, import_react6.useState)(null);
  const timerRef = (0, import_react6.useRef)(null);
  const show = (0, import_react6.useCallback)(
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
  const toast = state ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Toast, { message: state.message, leaving: state.leaving }) : null;
  return { show, toast };
}

// src/components/Toast/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function Toast({ message, leaving }) {
  return (0, import_react_dom2.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime19.jsx)(ToastEl, { $leaving: leaving, children: message }), document.body);
}

// src/pages/LoginPage/index.tsx
var import_zod2 = require("@hookform/resolvers/zod");
var import_react_hook_form3 = require("react-hook-form");

// src/pages/LoginPage/hooks/useLogin.ts
var import_react9 = require("react");
var import_react_router_dom3 = require("react-router-dom");

// src/hooks/useAuth.ts
var import_react8 = require("react");

// src/contexts/AuthContext.tsx
var import_react7 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var AuthContext = (0, import_react7.createContext)(null);
function AuthProvider({ client, children }) {
  const authValue = useAuth(client);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AuthContext.Provider, { value: authValue, children });
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
  const [user, setUser] = (0, import_react8.useState)(null);
  const [userEmail, setUserEmail] = (0, import_react8.useState)("");
  const [loading, setLoading] = (0, import_react8.useState)(true);
  const [error, setError] = (0, import_react8.useState)(null);
  const [sessionUser, setSessionUser] = (0, import_react8.useState)(void 0);
  (0, import_react8.useEffect)(() => {
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
  (0, import_react8.useEffect)(() => {
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
  const login = (0, import_react8.useCallback)(async (email, password) => {
    setError(null);
    const { error: signInError } = await client.auth.signInWithPassword({ email, password });
    if (signInError) {
      const errorMsg = "E-mail ou senha incorretos.";
      setError(errorMsg);
      return errorMsg;
    }
    return null;
  }, [client]);
  const logout = (0, import_react8.useCallback)(async () => {
    await client.auth.signOut();
    setUser(null);
    setUserEmail("");
  }, [client]);
  const updateProfile = (0, import_react8.useCallback)(async (name, email) => {
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
  return (0, import_react8.useMemo)(
    () => ({ user, userEmail, loading, error, login, logout, updateProfile }),
    [user, userEmail, loading, error, login, logout, updateProfile]
  );
}
function useAuthCtx() {
  const ctx = (0, import_react8.useContext)(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

// src/pages/LoginPage/hooks/useLogin.ts
function useLogin(resolveRoute) {
  const [error, setError] = (0, import_react9.useState)("");
  const [submitting, setSubmitting] = (0, import_react9.useState)(false);
  const { login, user } = useAuthCtx();
  const navigate = (0, import_react_router_dom3.useNavigate)();
  (0, import_react9.useEffect)(() => {
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
var import_styled_components25 = __toESM(require("styled-components"));
var Page = import_styled_components25.default.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
var Brand2 = import_styled_components25.default.div`
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
var BrandMark = import_styled_components25.default.div`
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
var BrandText = import_styled_components25.default.div`
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 1;
`;
var BrandName2 = import_styled_components25.default.h1`
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
var BrandSub = import_styled_components25.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  opacity: 0.75;
  line-height: 1.4;
`;
var BrandQuote = import_styled_components25.default.blockquote`
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
var FormPanel = import_styled_components25.default.div`
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
var FormBox = import_styled_components25.default.div`
  width: 100%;
  max-width: 400px;
  animation: ${fadeUp} 0.35s ease;
`;
var FormHeader = import_styled_components25.default.div`
  margin-bottom: ${({ theme: theme2 }) => theme2.spacing.lg};
`;
var FormTitle = import_styled_components25.default.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  letter-spacing: -0.3px;
  margin-bottom: 6px;
`;
var FormSubtitle = import_styled_components25.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Form = import_styled_components25.default.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var ErrorMsg = import_styled_components25.default.p`
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.primaryErrorText};
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: ${({ theme: theme2 }) => theme2.rounded.sm};
  padding: ${({ theme: theme2 }) => `${theme2.spacing.sm} ${theme2.spacing.md}`};
  text-align: center;
`;

// src/pages/LoginPage/validators/schema.ts
var import_zod = require("zod");
var loginSchema = import_zod.z.object({
  email: import_zod.z.string().email("E-mail inv\xE1lido"),
  password: import_zod.z.string().min(1, "Senha obrigat\xF3ria")
});

// src/pages/LoginPage/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function LoginPage({ brand, resolveRoute }) {
  const { error, submitting, handleLogin } = useLogin(resolveRoute);
  const { control, handleSubmit } = (0, import_react_hook_form3.useForm)({
    resolver: (0, import_zod2.zodResolver)(loginSchema),
    defaultValues: { email: "", password: "" }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Page, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Brand2, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BrandMark, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("img", { src: brand.icon, alt: brand.iconAlt }) }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(BrandText, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BrandName2, { children: brand.name }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BrandSub, { children: brand.sub })
      ] }),
      brand.quote && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BrandQuote, { children: brand.quote })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FormPanel, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(FormBox, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(FormHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FormTitle, { children: "Bem-vindo" }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(FormSubtitle, { children: "Entre com suas credenciais para continuar" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Form, { onSubmit: handleSubmit(handleLogin), children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          TextInput,
          {
            label: "Senha",
            control,
            name: "password",
            type: "password",
            placeholder: "M\xEDnimo 6 caracteres"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        error && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(ErrorMsg, { children: error })
      ] })
    ] }) })
  ] });
}

// src/pages/ProfilePage/index.tsx
var import_zod4 = require("@hookform/resolvers/zod");
var import_react_hook_form4 = require("react-hook-form");
var import_react_router_dom4 = require("react-router-dom");

// src/pages/ProfilePage/styles/ProfilePage.ts
var import_styled_components26 = __toESM(require("styled-components"));
var Wrap2 = import_styled_components26.default.div`
  max-width: 560px;
`;
var Identity = import_styled_components26.default.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.hairlineSoft};
`;
var Name = import_styled_components26.default.h2`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.displaySm.fontSize};
  font-weight: 700;
  color: ${({ theme: theme2 }) => theme2.colors.ink};
  line-height: 1.1;
  margin-bottom: 4px;
`;
var RoleLabel = import_styled_components26.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.bodySm.fontSize};
  color: ${({ theme: theme2 }) => theme2.colors.muted};
`;
var Section = import_styled_components26.default.div`
  padding: ${({ theme: theme2 }) => theme2.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: theme2 }) => theme2.spacing.md};
`;
var SectionTitle = import_styled_components26.default.p`
  font-family: ${({ theme: theme2 }) => theme2.typography.fontFamily};
  font-size: ${({ theme: theme2 }) => theme2.typography.caption.fontSize};
  font-weight: 600;
  color: ${({ theme: theme2 }) => theme2.colors.muted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
var Actions = import_styled_components26.default.div`
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
var import_zod3 = require("zod");
var profileSchema = import_zod3.z.object({
  name: import_zod3.z.string().min(3, "Informe pelo menos nome e sobrenome"),
  email: import_zod3.z.string().email("E-mail inv\xE1lido")
});

// src/pages/ProfilePage/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function ProfilePage({ roleLabel }) {
  var _a, _b;
  const { user, userEmail, updateProfile } = useAuthCtx();
  const navigate = (0, import_react_router_dom4.useNavigate)();
  const { show: showToast, toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = (0, import_react_hook_form4.useForm)({
    resolver: (0, import_zod4.zodResolver)(profileSchema),
    defaultValues: { name: (_a = user == null ? void 0 : user.name) != null ? _a : "", email: userEmail }
  });
  const onSubmit = async (data) => {
    const err = await updateProfile(data.name, data.email);
    showToast(err != null ? err : "Perfil atualizado com sucesso.");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Wrap2, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(PageHeader, { title: "Meu perfil", back: true }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Identity, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Name, { children: (_b = user == null ? void 0 : user.name) != null ? _b : "\u2014" }),
      roleLabel && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(RoleLabel, { children: roleLabel })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Section, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SectionTitle, { children: "Informa\xE7\xF5es pessoais" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TextInput, { label: "Nome completo", control, name: "name", placeholder: "Nome e sobrenome" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(TextInput, { label: "E-mail de acesso", control, name: "email", type: "email", placeholder: "seu@email.com" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Actions, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: "secondary", size: "md", onClick: () => navigate(-1), children: "Cancelar" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Button, { variant: "primary", size: "md", onClick: handleSubmit(onSubmit), disabled: isSubmitting, children: isSubmitting ? "Salvando..." : "Salvar altera\xE7\xF5es" })
    ] }),
    toast
  ] });
}

// src/hooks/useMediaQuery.ts
var import_react10 = require("react");
function useMediaQuery(query) {
  const [matches, setMatches] = (0, import_react10.useState)(() => window.matchMedia(query).matches);
  (0, import_react10.useEffect)(() => {
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

// src/hooks/useModal.ts
var import_react11 = require("react");
var import_react_dom3 = require("react-dom");
function useModal() {
  const [content, setContent] = (0, import_react11.useState)(null);
  const open = (c) => setContent(c);
  const close = () => setContent(null);
  const modal = content !== null ? (0, import_react_dom3.createPortal)((0, import_react11.createElement)(Modal, { close, children: content }), document.body) : null;
  return { open, close, modal };
}

// src/styles/styled.d.ts
var import_styled_components27 = require("styled-components");

// src/styles/GlobalStyles.ts
var import_styled_components28 = require("styled-components");
var GlobalStyles = import_styled_components28.createGlobalStyle`
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  GlobalStyles,
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
});
