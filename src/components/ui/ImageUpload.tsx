
import { useState, useRef } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ImageUploadProps {
  onImageSelect: (file: File, previewUrl: string) => void;
  className?: string;
}

export default function ImageUpload({ onImageSelect, className }: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setError(null);
    
    // Check if file is an image
    if (!file.type.match('image.*')) {
      setError('Please select an image file');
      toast.error('Please select an image file');
      return;
    }
    
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be smaller than 5MB');
      toast.error('Image must be smaller than 5MB');
      return;
    }
    
    setIsUploading(true);

    // Create a preview
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setPreview(e.target.result as string);
        
        // Simulate upload delay
        setTimeout(() => {
          setIsUploading(false);
          onImageSelect(file, e.target.result as string);
          toast.success('Image uploaded successfully');
        }, 1500);
      }
    };
    
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={className}>
      <div
        className={cn(
          'relative border-2 border-dashed rounded-lg transition-all duration-300 overflow-hidden',
          isDragging ? 'border-white bg-white/5' : 'border-white/20',
          preview ? 'aspect-square' : 'aspect-video',
          error ? 'border-red-500/50' : ''
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        
        {!preview ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <Upload className={cn(
              "h-10 w-10 mb-4 transition-colors",
              isDragging ? 'text-white' : 'text-white/50'
            )} />
            
            <p className={cn(
              "text-sm text-center transition-colors",
              isDragging ? 'text-white' : 'text-white/50'
            )}>
              Drag and drop an image here, or click to select
            </p>
            
            {error && (
              <div className="flex items-center mt-4 text-red-400 text-sm">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>{error}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-full w-full">
            <img 
              src={preview} 
              alt="Preview" 
              className="object-cover h-full w-full"
            />
            
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 animate-fade-in">
                <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            
            {!isUploading && (
              <div className="absolute top-2 right-2 bg-green-500/90 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
        )}
      </div>
      
      <p className="mt-2 text-xs text-white/40 text-center">
        Supported formats: JPG, PNG, GIF, WEBP (max 5MB)
      </p>
    </div>
  );
}
