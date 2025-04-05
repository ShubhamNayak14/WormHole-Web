import React, { useState, useRef } from "react";
import Image from "next/image";

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileChange }) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    updateFile(selectedFile);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0] || null;
    updateFile(droppedFile);
  };

  const updateFile = (selectedFile: File | null) => {
    setFile(selectedFile);
    onFileChange(selectedFile);

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const url = URL.createObjectURL(selectedFile);
      setPreviewURL(url);
    } else {
      setPreviewURL(null);
    }
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} bytes`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1048576).toFixed(1)} MB`;
  };

  return (
    <div className="w-full">
      <div
        className={`w-full h-64 rounded-2xl border-2 border-dashed transition-all duration-300 ease-in-out
          flex flex-col items-center justify-center text-center p-6 space-y-3
          ${isDragging ? "border-indigo-500 bg-indigo-100 dark:bg-indigo-900/30" : "border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800"}
          ${file ? "bg-gray-200 dark:bg-gray-700" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={handleDrop}
        onClick={triggerFileInput}
      >
        <input type="file" className="hidden" onChange={handleFileChange} ref={fileInputRef} />

        {file ? (
          <div className="animate-fade-in flex flex-col items-center">
            {previewURL ? (
              <Image
                src={previewURL}
                alt="Preview"
                className="w-24 h-24 object-cover rounded-lg shadow-md border border-gray-300 dark:border-gray-600"
              />
            ) : (
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-indigo-500 dark:text-indigo-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            )}

            <p className="font-medium text-base text-gray-900 dark:text-gray-100">{file.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{formatFileSize(file.size)}</p>

            <button
              className="mt-4 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
              onClick={(e) => {
                e.stopPropagation();
                setFile(null);
                setPreviewURL(null);
                onFileChange(null);
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-7 h-7 text-indigo-500 dark:text-indigo-400"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
              Choose a file or drag it here
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Securely share any type of file up to 1GB with end-to-end encryption
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default FileUpload;
