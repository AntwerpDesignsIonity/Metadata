import { Request, Response } from 'express';
import { MetadataRemovalService } from '../../services/metadata-removal.service';
import { FileProcessorService } from '../../services/file-processor.service';

const metadataService = new MetadataRemovalService();
const fileProcessor = new FileProcessorService();

/**
 * Remove metadata from a single file
 */
export const removeMetadata = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fileData, fileName } = req.body;

    if (!fileData || !fileName) {
      res.status(400).json({ error: 'File data and file name are required' });
      return;
    }

    const result = await metadataService.removeMetadata(fileData, fileName);
    
    res.status(200).json({
      success: true,
      message: 'Metadata removed successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Analyze file for metadata
 */
export const analyzeMetadata = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fileData, fileName } = req.body;

    if (!fileData || !fileName) {
      res.status(400).json({ error: 'File data and file name are required' });
      return;
    }

    const metadata = await fileProcessor.analyzeMetadata(fileData, fileName);
    
    res.status(200).json({
      success: true,
      message: 'Metadata analyzed successfully',
      data: metadata
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Batch process multiple files
 */
export const batchRemoveMetadata = async (req: Request, res: Response): Promise<void> => {
  try {
    const { files } = req.body;

    if (!files || !Array.isArray(files)) {
      res.status(400).json({ error: 'Files array is required' });
      return;
    }

    const results = await metadataService.batchRemove(files);
    
    res.status(200).json({
      success: true,
      message: 'Batch processing completed',
      data: results
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Get metadata processing result
 */
export const getMetadataResult = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fileId } = req.params;

    if (!fileId) {
      res.status(400).json({ error: 'File ID is required' });
      return;
    }

    const result = await metadataService.getResult(fileId);
    
    if (!result) {
      res.status(404).json({ error: 'Result not found' });
      return;
    }

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
