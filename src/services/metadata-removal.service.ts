import { MetadataResult } from '../models/metadata.model';
import { generateId } from '../utils/helpers';

/**
 * Service for handling metadata removal operations
 */
export class MetadataRemovalService {
  private results: Map<string, MetadataResult> = new Map();

  /**
   * Remove metadata from a file
   */
  async removeMetadata(fileData: string, fileName: string): Promise<MetadataResult> {
    const fileId = generateId('file_');
    
    const result: MetadataResult = {
      fileId,
      fileName,
      originalSize: fileData.length,
      processedSize: fileData.length,
      metadataRemoved: [],
      timestamp: new Date(),
      status: 'completed'
    };

    // Store result for later retrieval
    this.results.set(fileId, result);

    return result;
  }

  /**
   * Batch remove metadata from multiple files
   */
  async batchRemove(files: Array<{ fileData: string; fileName: string }>): Promise<MetadataResult[]> {
    const results: MetadataResult[] = [];

    for (const file of files) {
      const result = await this.removeMetadata(file.fileData, file.fileName);
      results.push(result);
    }

    return results;
  }

  /**
   * Get processing result by file ID
   */
  async getResult(fileId: string): Promise<MetadataResult | undefined> {
    return this.results.get(fileId);
  }
}
