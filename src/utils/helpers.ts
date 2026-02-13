/**
 * Validate file type
 */
export const isValidFileType = (fileName: string, supportedFormats: string[]): boolean => {
  const extension = fileName.split('.').pop()?.toLowerCase();
  return extension ? supportedFormats.includes(extension) : false;
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Generate unique ID
 */
export const generateId = (prefix: string = ''): string => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  return `${prefix}${timestamp}_${random}`;
};
