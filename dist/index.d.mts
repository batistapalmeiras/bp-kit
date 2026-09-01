import * as react from 'react';
import react__default, { ButtonHTMLAttributes, ReactNode, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, HTMLAttributes, ElementType } from 'react';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as styled_components from 'styled-components';
import { FieldValues, FieldPath, Control, ControllerRenderProps } from 'react-hook-form';
import { SupabaseClient } from '@supabase/supabase-js';
import * as styled_components_dist_models_Keyframes from 'styled-components/dist/models/Keyframes';

interface Props$5 {
    children: react__default.ReactNode;
    onClose: () => void;
}
declare function BottomSheet({ children, onClose }: Props$5): react__default.ReactPortal;

interface Props$4 {
    icon: string;
    alt: string;
    name: string;
    to?: string;
}
declare function Brand({ icon, alt, name, to }: Props$4): react.JSX.Element;

declare const Card: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$hoverable"> & {
    $hoverable?: boolean | undefined;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$hoverable"> & {
    $hoverable?: boolean | undefined;
}, never>>> & string;

declare const DangerLink: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>>> & string;

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

type Variant$2 = ButtonVariant;
type Size$1 = 'sm' | 'md' | 'lg';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant$2;
    size?: Size$1;
    fullWidth?: boolean;
}

declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

declare const ChipBar: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;
declare const Chip: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$active"> & {
    $active: boolean;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$active"> & {
    $active: boolean;
}, never>>> & string;

interface IEmptyProps {
    title: string;
    description: string;
}
declare function Empty({ title, description }: IEmptyProps): react.JSX.Element;

declare const Form: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, never>>> & string;

type Variant$1 = ButtonVariant;
type Size = ButtonSize;
type IconPosition = 'left' | 'center' | 'right';
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    iconPosition?: IconPosition;
    variant?: Variant$1;
    size?: Size;
    fullWidth?: boolean;
}

declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

type Variant = 'info' | 'warning';
interface Props$3 {
    variant?: Variant;
    children: react__default.ReactNode;
    style?: react__default.CSSProperties;
}
declare function InfoBox({ variant, children, style }: Props$3): react__default.JSX.Element;

interface BaseInputProps {
    label: string;
    wrapperStyle?: React.CSSProperties;
    error?: string;
    children: ReactNode;
}
interface ControlledBaseProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    wrapperStyle?: React.CSSProperties;
    children: (field: ControllerRenderProps<T, N>, error?: string) => React.ReactNode;
}

declare const InputField: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, never>>> & string;

declare function BaseInput({ label, wrapperStyle, error, children }: BaseInputProps): react.JSX.Element;
declare function ControlledBase<T extends FieldValues, N extends FieldPath<T>>({ label, control, name, wrapperStyle, children, }: ControlledBaseProps<T, N>): react.JSX.Element;

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}

declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface DatePickerProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    wrapperStyle?: React.CSSProperties;
    placeholder?: string;
    isDateDisabled?: (date: Date) => boolean;
    /** Month to open the calendar on when there's no value yet (defaults to
     * today's month) — e.g. the earliest allowed date, so the picker doesn't
     * land on a month that's entirely disabled by isDateDisabled. */
    initialMonth?: Date;
}

declare function DatePicker<T extends FieldValues, N extends FieldPath<T>>({ label, control, name, wrapperStyle, placeholder, isDateDisabled, initialMonth, }: DatePickerProps<T, N>): react.JSX.Element;

interface ImageUploadItem {
    id: string;
    url: string;
    file?: File;
}
interface ImageUploadProps {
    label?: string;
    value: ImageUploadItem[];
    onChange: (value: ImageUploadItem[]) => void;
    maxFiles?: number;
    accept?: string;
    hint?: string;
    error?: string;
    wrapperStyle?: React.CSSProperties;
}

declare function ImageUpload({ label, value, onChange, maxFiles, accept, hint, error, wrapperStyle, }: ImageUploadProps): react.JSX.Element;

interface MonthPickerProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    wrapperStyle?: React.CSSProperties;
    placeholder?: string;
}

declare function MonthPicker<T extends FieldValues, N extends FieldPath<T>>({ label, control, name, wrapperStyle, placeholder, }: MonthPickerProps<T, N>): react.JSX.Element;

interface MultiSelectOption {
    value: string;
    label: string;
}
interface MultiSelectProps {
    label: string;
    options: MultiSelectOption[];
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    disabled?: boolean;
    max?: number;
    error?: string;
}

declare function MultiSelect({ label, options, value, onChange, placeholder, disabled, max, error }: MultiSelectProps): react.JSX.Element;

interface RadioGroupOption {
    value: string;
    label: string;
}
interface RadioGroupProps {
    name: string;
    options: RadioGroupOption[];
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    disabled?: boolean;
}

declare function RadioGroup({ name, options, value, onChange, label, disabled }: RadioGroupProps): react.JSX.Element;

interface SelectProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    children: ReactNode;
    wrapperStyle?: React.CSSProperties;
}
interface RawSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    wrapperStyle?: React.CSSProperties;
    error?: string;
}

declare function RawSelect({ label, wrapperStyle, error, children, ...rest }: RawSelectProps): react.JSX.Element;
declare function Select<T extends FieldValues, N extends FieldPath<T>>({ label, control, name, wrapperStyle, children, }: SelectProps<T, N>): react.JSX.Element;

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: ReactNode;
}

declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface TextareaProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    wrapperStyle?: React.CSSProperties;
    placeholder?: string;
    rows?: number;
}
interface RawTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    wrapperStyle?: React.CSSProperties;
    error?: string;
}

declare function RawTextarea({ label, wrapperStyle, error, ...rest }: RawTextareaProps): react.JSX.Element;
declare function Textarea<T extends FieldValues, N extends FieldPath<T>>({ label, control, name, wrapperStyle, placeholder, rows, }: TextareaProps<T, N>): react.JSX.Element;

interface BaseFieldProps<T extends FieldValues, N extends FieldPath<T>> {
    label: string;
    control: Control<T>;
    name: N;
    wrapperStyle?: React.CSSProperties;
    placeholder?: string;
}
interface CurrencyFieldProps<T extends FieldValues, N extends FieldPath<T>> extends BaseFieldProps<T, N> {
    currency: true;
}
interface TextFieldProps<T extends FieldValues, N extends FieldPath<T>> extends BaseFieldProps<T, N>, Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'name'> {
    currency?: false;
    mask?: 'phone';
}

type Props$2<T extends FieldValues, N extends FieldPath<T>> = TextFieldProps<T, N> | CurrencyFieldProps<T, N>;
declare function TextInput<T extends FieldValues, N extends FieldPath<T>>(props: Props$2<T, N>): react.JSX.Element;

type ModalVariant = 'dialog' | 'drawer' | 'drawer-wide';
declare const ModalActions: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>> & string;

interface ModalTitleProps {
    children: react__default.ReactNode;
    onClose?: () => void;
}
declare function ModalTitle({ children, onClose }: ModalTitleProps): react__default.JSX.Element;
interface Props$1 {
    children: react__default.ReactNode;
    close: () => void;
    variant?: ModalVariant;
}
declare function Modal({ children, close, variant }: Props$1): react__default.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
declare function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps): react.JSX.Element | null;

interface Props {
    title: string;
    subtitle?: string;
    back?: boolean;
    action?: react__default.ReactNode;
}
declare function PageHeader({ title, subtitle, back, action }: Props): react__default.JSX.Element;

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

declare function SearchInput({ value, onChange, placeholder }: SearchInputProps): react.JSX.Element;

interface SegmentedControlOption<T extends string | number | boolean> {
    value: T;
    label: string;
}
type SegmentedControlTone = 'ink' | 'primary';
interface SegmentedControlProps<T extends string | number | boolean> {
    value: T;
    onChange: (value: T) => void;
    options: SegmentedControlOption<T>[];
    label?: string;
    tone?: SegmentedControlTone;
}

declare function SegmentedControl<T extends string | number | boolean>({ value, onChange, options, label, tone }: SegmentedControlProps<T>): react.JSX.Element;

declare const Skeleton: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$h" | "$w"> & {
    $h?: string | undefined;
    $w?: string | undefined;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$h" | "$w"> & {
    $h?: string | undefined;
    $w?: string | undefined;
}, never>>> & string;

type StatusTone = 'success' | 'warning';
interface StatusBadgeProps {
    tone: StatusTone;
    children: React.ReactNode;
}
declare function StatusBadge({ tone, children }: StatusBadgeProps): react.JSX.Element;

type StatTone = 'warning' | 'danger';
declare const StatsGrid: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columns"> & {
    $columns?: number | undefined;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$columns"> & {
    $columns?: number | undefined;
}, never>>> & string;
declare const StatCard: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$tone"> & {
    $tone?: StatTone | undefined;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$tone"> & {
    $tone?: StatTone | undefined;
}, never>>> & string;
declare const StatLabel: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, never>>> & string;
declare const StatValue: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$tone" | "$muted"> & {
    $tone?: StatTone | undefined;
    $muted?: boolean | undefined;
}, never> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$tone" | "$muted"> & {
    $tone?: StatTone | undefined;
    $muted?: boolean | undefined;
}, never>>> & string;

interface SummaryItem {
    name: string;
    qty: number;
    subtotal?: number;
}
interface SummaryCardButton {
    text: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    loading?: boolean;
}
interface SummaryCardProps {
    label?: string;
    items: SummaryItem[];
    total: number;
    onConfirm?: () => void;
    confirmText?: string;
    loading?: boolean;
    disabled?: boolean;
    buttons?: SummaryCardButton[];
    emptyMessage?: string;
    /** Distância do rodapé quando fixo no mobile. Use '0' em páginas sem tab bar. Padrão: '80px'. */
    bottomOffset?: string;
}

declare function SummaryCard({ label, items, total, onConfirm, confirmText, loading, disabled, buttons, emptyMessage, bottomOffset, }: SummaryCardProps): react.JSX.Element;

declare const TabBar: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof react.ClassAttributes<HTMLDivElement> | keyof react.HTMLAttributes<HTMLDivElement>> & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>, "role"> & Partial<Pick<styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof react.ClassAttributes<HTMLDivElement> | keyof react.HTMLAttributes<HTMLDivElement>> & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>, "role">>> & string;
declare const Tab: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<styled_components.FastOmit<styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof react.ClassAttributes<HTMLButtonElement> | keyof react.ButtonHTMLAttributes<HTMLButtonElement>> & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>, "$active"> & {
    $active: boolean;
}, "$active"> & {
    $active: boolean;
}, "form" | "slot" | "children" | "ref" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoCapitalize" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "enterKeyHint" | "hidden" | "id" | "lang" | "nonce" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "popover" | "popoverTargetAction" | "popoverTarget" | "inert" | "inputMode" | "is" | "exportparts" | "part" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onScrollEnd" | "onScrollEndCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onToggle" | "onBeforeToggle" | "onTransitionCancel" | "onTransitionCancelCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onTransitionRun" | "onTransitionRunCapture" | "onTransitionStart" | "onTransitionStartCapture" | "type" | "disabled" | "name" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "value" | "$active"> & Partial<Pick<styled_components.FastOmit<styled_components.FastOmit<styled_components.FastOmit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof react.ClassAttributes<HTMLButtonElement> | keyof react.ButtonHTMLAttributes<HTMLButtonElement>> & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>, "$active"> & {
    $active: boolean;
}, "$active"> & {
    $active: boolean;
}, "form" | "slot" | "children" | "ref" | "key" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoCapitalize" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "enterKeyHint" | "hidden" | "id" | "lang" | "nonce" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "popover" | "popoverTargetAction" | "popoverTarget" | "inert" | "inputMode" | "is" | "exportparts" | "part" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onScrollEnd" | "onScrollEndCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onToggle" | "onBeforeToggle" | "onTransitionCancel" | "onTransitionCancelCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onTransitionRun" | "onTransitionRunCapture" | "onTransitionStart" | "onTransitionStartCapture" | "type" | "disabled" | "name" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "value" | "$active">>> & string;
declare const TabBadge: styled_components_dist_types.IStyledComponentBase<"web", styled_components.FastOmit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never> & Partial<Pick<react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, never>>> & string;

declare function useToast(duration?: number): {
    show: (message: string) => void;
    toast: react.JSX.Element | null;
};

interface ToastProps {
    message: string;
    leaving: boolean;
}
declare function Toast({ message, leaving }: ToastProps): react.ReactPortal;

type TypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'caption' | 'error' | 'micro';
interface TypographyProps extends HTMLAttributes<HTMLElement> {
    type: TypographyType;
    as?: ElementType;
}

declare function Typography({ type, as, children, ...rest }: TypographyProps): react.JSX.Element;

interface LoginPageBrand {
    icon: string;
    iconAlt: string;
    name: string;
    sub: string;
    quote?: string;
}
interface LoginPageProps {
    brand: LoginPageBrand;
    resolveRoute: (role: string) => string;
}
declare function LoginPage({ brand, resolveRoute }: LoginPageProps): react.JSX.Element;

interface ProfilePageProps {
    /** Display label for the user's role (e.g. "Administrador"). Each app defines its own role vocabulary. */
    roleLabel?: string;
    /** Route to the app's "Alterar senha" screen (bp-kit's ChangePasswordPage mounted there). Omit to hide the Segurança section entirely. */
    changePasswordPath?: string;
}
declare function ProfilePage({ roleLabel, changePasswordPath }: ProfilePageProps): react.JSX.Element;

declare function ChangePasswordPage(): react.JSX.Element;

declare function useMediaQuery(query: string): boolean;

declare function useModal(variant?: ModalVariant): {
    open: (c: ReactNode) => void;
    close: () => void;
    modal: react.ReactPortal | null;
};

interface User {
    id: string;
    name: string;
    /** Raw value from `profiles.role` — each app defines its own role set and interprets this string. */
    role: string;
}

interface AuthContextValue {
    user: User | null;
    userEmail: string;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<string | null>;
    logout: () => Promise<void>;
    updateProfile: (name: string, email: string) => Promise<string | null>;
    updatePassword: (newPassword: string) => Promise<string | null>;
}
declare const AuthContext: react.Context<AuthContextValue | null>;
declare function AuthProvider({ client, children }: {
    client: SupabaseClient;
    children: ReactNode;
}): react.JSX.Element;

declare function fetchProfile(client: SupabaseClient, userId: string): Promise<User | null>;
declare function useAuth(client: SupabaseClient): AuthContextValue;
declare function useAuthCtx(): AuthContextValue;

declare const text: {
    actions: {
        cancel: string;
        confirm: string;
        remove: string;
        actionsColumn: string;
    };
    fields: {
        name: string;
        fullName: string;
        email: string;
        emailPlaceholder: string;
        phone: string;
        status: string;
        password: string;
    };
    validation: {
        required: (what: string) => string;
        selectRequired: (what: string) => string;
        emailInvalid: string;
        passwordMin: string;
        passwordMismatch: string;
        passwordSameAsOld: string;
    };
    feedback: {
        loadError: string;
    };
};

declare const theme: {
    readonly colors: {
        readonly primary: "#78b9a4";
        readonly primaryActive: "#5a9d88";
        readonly primaryDisabled: "#c2dbd4";
        readonly primaryErrorText: "#c13515";
        readonly primaryErrorTextHover: "#b32505";
        readonly luxe: "#2d6a58";
        readonly plus: "#4a9e82";
        readonly ink: "#222222";
        readonly body: "#3f3f3f";
        readonly muted: "#6a6a6a";
        readonly mutedSoft: "#929292";
        readonly hairline: "#dddddd";
        readonly hairlineSoft: "#ebebeb";
        readonly borderStrong: "#c1c1c1";
        readonly canvas: "#ffffff";
        readonly surfaceSoft: "#f7f7f7";
        readonly surfaceCard: "#ffffff";
        readonly surfaceStrong: "#f2f2f2";
        readonly onPrimary: "#ffffff";
        readonly onDark: "#ffffff";
        readonly legalLink: "#428bff";
        readonly starRating: "#222222";
        readonly scrim: "#000000";
        readonly success: "#1a7a4a";
        readonly successSurface: "#f0faf5";
        readonly successBorder: "#b6e8cf";
        readonly warning: "#b45309";
        readonly warningSurface: "#fffbeb";
        readonly warningBorder: "#fde68a";
        readonly info: "#3b82f6";
        readonly infoSurface: "#eff6ff";
        readonly infoBorder: "#bfdbfe";
        readonly danger: "#ef4444";
    };
    readonly typography: {
        readonly fontFamily: "'Airbnb Cereal VF', Circular, -apple-system, system-ui, Roboto, 'Helvetica Neue', sans-serif";
        readonly displayXl: {
            readonly fontSize: "28px";
            readonly fontWeight: 700;
            readonly lineHeight: 1.43;
            readonly letterSpacing: "0";
        };
        readonly displayLg: {
            readonly fontSize: "22px";
            readonly fontWeight: 500;
            readonly lineHeight: 1.18;
            readonly letterSpacing: "-0.44px";
        };
        readonly displayMd: {
            readonly fontSize: "21px";
            readonly fontWeight: 700;
            readonly lineHeight: 1.43;
            readonly letterSpacing: "0";
        };
        readonly displaySm: {
            readonly fontSize: "20px";
            readonly fontWeight: 600;
            readonly lineHeight: 1.2;
            readonly letterSpacing: "-0.18px";
        };
        readonly titleMd: {
            readonly fontSize: "16px";
            readonly fontWeight: 600;
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0";
        };
        readonly titleSm: {
            readonly fontSize: "16px";
            readonly fontWeight: 500;
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0";
        };
        readonly ratingDisplay: {
            readonly fontSize: "64px";
            readonly fontWeight: 700;
            readonly lineHeight: 1.1;
            readonly letterSpacing: "-1px";
        };
        readonly bodyMd: {
            readonly fontSize: "16px";
            readonly fontWeight: 400;
            readonly lineHeight: 1.5;
            readonly letterSpacing: "0";
        };
        readonly bodySm: {
            readonly fontSize: "14px";
            readonly fontWeight: 400;
            readonly lineHeight: 1.43;
            readonly letterSpacing: "0";
        };
        readonly caption: {
            readonly fontSize: "14px";
            readonly fontWeight: 500;
            readonly lineHeight: 1.29;
            readonly letterSpacing: "0";
        };
        readonly captionSm: {
            readonly fontSize: "13px";
            readonly fontWeight: 400;
            readonly lineHeight: 1.23;
            readonly letterSpacing: "0";
        };
        readonly badge: {
            readonly fontSize: "11px";
            readonly fontWeight: 600;
            readonly lineHeight: 1.18;
            readonly letterSpacing: "0";
        };
        readonly microLabel: {
            readonly fontSize: "12px";
            readonly fontWeight: 700;
            readonly lineHeight: 1.33;
            readonly letterSpacing: "0";
        };
        readonly uppercaseTag: {
            readonly fontSize: "8px";
            readonly fontWeight: 700;
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0.32px";
            readonly textTransform: "uppercase";
        };
        readonly buttonMd: {
            readonly fontSize: "16px";
            readonly fontWeight: 500;
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0";
        };
        readonly buttonSm: {
            readonly fontSize: "14px";
            readonly fontWeight: 500;
            readonly lineHeight: 1.29;
            readonly letterSpacing: "0";
        };
        readonly link: {
            readonly fontSize: "14px";
            readonly fontWeight: 400;
            readonly lineHeight: 1.43;
            readonly letterSpacing: "0";
        };
        readonly navLink: {
            readonly fontSize: "16px";
            readonly fontWeight: 600;
            readonly lineHeight: 1.25;
            readonly letterSpacing: "0";
        };
    };
    readonly rounded: {
        readonly none: "0px";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "14px";
        readonly lg: "20px";
        readonly xl: "32px";
        readonly full: "9999px";
    };
    readonly spacing: {
        readonly xxs: "2px";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly base: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
        readonly xxl: "48px";
        readonly section: "64px";
    };
    readonly shadows: {
        readonly sm: "rgba(0, 0, 0, 0.08) 0px 1px 2px 0px";
        readonly md: "rgba(0, 0, 0, 0.12) 0px 6px 16px 0px";
        readonly lg: "rgba(0, 0, 0, 0.02) 0 0 0 1px, rgba(0, 0, 0, 0.04) 0 2px 6px 0, rgba(0, 0, 0, 0.1) 0 4px 8px 0";
    };
    readonly breakpoints: {
        readonly mobile: "744px";
        readonly tablet: "1128px";
        readonly desktop: "1440px";
    };
};
type Theme = typeof theme;

// Libs


declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare const GlobalStyles: react.NamedExoticComponent<styled_components.ExecutionProps & object>;

declare const fadeIn: styled_components_dist_models_Keyframes.default;
declare const fadeUp: styled_components_dist_models_Keyframes.default;
declare const fadeDown: styled_components_dist_models_Keyframes.default;
declare const slideUp: styled_components_dist_models_Keyframes.default;

declare function formatCurrency(value: number | string): string;
declare function parseCurrency(value: string): number;
declare function maskCurrencyInput(value: string): string;
declare function maskPhone(value: string): string;
declare function parsePhone(value: string): string;
declare function formatCPF(value: string): string;
declare function formatCNPJ(value: string): string;
declare function formatCpfCnpj(value: string): string;

export { AuthContext, type AuthContextValue, AuthProvider, BaseInput, type BaseInputProps, BottomSheet, Brand, Button, type ButtonProps, Card, ChangePasswordPage, Checkbox, type CheckboxProps, Chip, ChipBar, ControlledBase, type CurrencyFieldProps, DangerLink, DatePicker, type DatePickerProps, Empty, Form, GlobalStyles, type IEmptyProps, IconButton, type IconButtonProps, ImageUpload, type ImageUploadItem, type ImageUploadProps, InfoBox, InputField, LoginPage, type LoginPageBrand, type LoginPageProps, Modal, ModalActions, ModalTitle, MonthPicker, type MonthPickerProps, MultiSelect, type MultiSelectOption, type MultiSelectProps, PageHeader, Pagination, ProfilePage, type ProfilePageProps, RadioGroup, type RadioGroupOption, type RadioGroupProps, RawSelect, RawTextarea, type RawTextareaProps, SearchInput, type SearchInputProps, SegmentedControl, type SegmentedControlOption, type SegmentedControlTone, Select, Skeleton, StatCard, StatLabel, type StatTone, StatValue, StatsGrid, StatusBadge, type StatusBadgeProps, SummaryCard, type SummaryCardButton, type SummaryCardProps, type SummaryItem, Switch, type SwitchProps, Tab, TabBadge, TabBar, type TextFieldProps, TextInput, Textarea, type TextareaProps, type Theme, Toast, Typography, type TypographyProps, type TypographyType, type User, fadeDown, fadeIn, fadeUp, fetchProfile, formatCNPJ, formatCPF, formatCpfCnpj, formatCurrency, maskCurrencyInput, maskPhone, parseCurrency, parsePhone, slideUp, text, theme, useAuth, useAuthCtx, useMediaQuery, useModal, useToast };
