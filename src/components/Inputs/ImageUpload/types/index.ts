export interface ImageUploadItem {
  id: string;
  url: string;
  file?: File;
}

export interface ImageUploadProps {
  label?: string;
  value: ImageUploadItem[];
  onChange: (value: ImageUploadItem[]) => void;
  maxFiles?: number;
  accept?: string;
  hint?: string;
  error?: string;
  wrapperStyle?: React.CSSProperties;
}
