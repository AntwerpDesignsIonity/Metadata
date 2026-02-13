import { Router } from 'express';
import {
  addRemoteLink,
  getRemoteLinks,
  updateRemoteLink,
  deleteRemoteLink
} from '../controllers/link.controller';

const router = Router();

/**
 * @route   POST /api/links/add
 * @desc    Add a link to a remote system
 * @access  Public
 */
router.post('/add', addRemoteLink);

/**
 * @route   GET /api/links
 * @desc    Get all remote links
 * @access  Public
 */
router.get('/', getRemoteLinks);

/**
 * @route   PUT /api/links/:linkId
 * @desc    Update a remote link
 * @access  Public
 */
router.put('/:linkId', updateRemoteLink);

/**
 * @route   DELETE /api/links/:linkId
 * @desc    Delete a remote link
 * @access  Public
 */
router.delete('/:linkId', deleteRemoteLink);

export default router;
