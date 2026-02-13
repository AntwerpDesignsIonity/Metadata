/**
 * Metadata result from processing
 */
export interface MetadataResult {
  fileId: string;
  fileName: string;
  originalSize: number;
  processedSize: number;
  metadataRemoved: string[];
  timestamp: Date;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  error?: string;
}

/**
 * File metadata information
 */
export interface FileMetadata {
  fileName: string;
  fileSize: number;
  fileType: string;
  metadata: {
    hasEXIF: boolean;
    hasIPTC: boolean;
    hasXMP: boolean;
    customFields: Array<{
      key: string;
      value: string;
    }>;
  };
  analyzedAt: Date;
}

/**
 * Batch processing request
 */
export interface BatchRequest {
  files: Array<{
    fileData: string;
    fileName: string;
  }>;
}
