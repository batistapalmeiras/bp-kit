// React
import { useRef, useState } from 'react';
// Libs
import { ImagePlus, Plus, X } from 'lucide-react';
// Components
import { BaseInput } from '../BaseInput';
// Local
import {
  AddTile,
  Dropzone,
  DropzoneHint,
  DropzoneText,
  EmptyState,
  HiddenInput,
  RemoveButton,
  Thumb,
  ThumbImage,
} from './styles';
import { ImageUploadItem, ImageUploadProps } from './types';

export function ImageUpload({
  label = 'Imagens',
  value,
  onChange,
  maxFiles,
  accept = 'image/*',
  hint,
  error,
  wrapperStyle,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const hasImages = value.length > 0;
  const atLimit = maxFiles !== undefined && value.length >= maxFiles;

  const openPicker = () => {
    if (!atLimit) inputRef.current?.click();
  };

  const addFiles = (files: FileList | File[]) => {
    const images = Array.from(files).filter((file) => file.type.startsWith('image/'));
    const remaining = maxFiles !== undefined ? Math.max(0, maxFiles - value.length) : images.length;
    const accepted = images.slice(0, remaining);
    if (accepted.length === 0) return;

    const items: ImageUploadItem[] = accepted.map((file) => ({
      id: crypto.randomUUID(),
      url: URL.createObjectURL(file),
      file,
    }));
    onChange([...value, ...items]);
  };

  const removeItem = (id: string) => onChange(value.filter((item) => item.id !== id));

  return (
    <BaseInput label={label} wrapperStyle={wrapperStyle} error={error}>
      <Dropzone
        $dragOver={dragOver}
        $hasImages={hasImages}
        onDragOver={(e) => {
          e.preventDefault();
          if (!atLimit) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!atLimit && e.dataTransfer.files.length > 0) addFiles(e.dataTransfer.files);
        }}
      >
        {!hasImages && (
          <EmptyState
            role="button"
            tabIndex={0}
            onClick={openPicker}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') openPicker();
            }}
          >
            <ImagePlus size={22} />
            <DropzoneText>Arraste imagens aqui ou clique para selecionar</DropzoneText>
            {hint && <DropzoneHint>{hint}</DropzoneHint>}
          </EmptyState>
        )}

        {value.map((item) => (
          <Thumb key={item.id}>
            <ThumbImage src={item.url} alt="" />
            <RemoveButton type="button" onClick={() => removeItem(item.id)} title="Remover">
              <X size={12} />
            </RemoveButton>
          </Thumb>
        ))}

        {hasImages && !atLimit && (
          <AddTile type="button" onClick={openPicker} title="Adicionar imagem">
            <Plus size={18} />
          </AddTile>
        )}

        <HiddenInput
          ref={inputRef}
          type="file"
          accept={accept}
          multiple
          onChange={(e) => {
            if (e.target.files) addFiles(e.target.files);
            e.target.value = '';
          }}
        />
      </Dropzone>
    </BaseInput>
  );
}
