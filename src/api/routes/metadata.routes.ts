import { Router } from 'express';
import {
  removeMetadata,
  analyzeMetadata,
  batchRemoveMetadata,
  getMetadataResult
} from '../controllers/metadata.controller';

const router = Router();

/**
 * @route   POST /api/metadata/remove
 * @desc    Remove metadata from a single file
 * @access  Public
 */
router.post('/remove', removeMetadata);

/**
 * @route   POST /api/metadata/analyze
 * @desc    Analyze file for metadata
 * @access  Public
 */
router.post('/analyze', analyzeMetadata);

/**
 * @route   POST /api/metadata/batch
 * @desc    Batch process multiple files for metadata removal
 * @access  Public
 */
router.post('/batch', batchRemoveMetadata);

/**
 * @route   GET /api/metadata/:fileId
 * @desc    Get metadata processing result
 * @access  Public
 */
router.get('/:fileId', getMetadataResult);

export default router;
