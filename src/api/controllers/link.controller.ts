import { Request, Response } from 'express';
import { RemoteLinkerService } from '../../services/remote-linker.service';

const linkerService = new RemoteLinkerService();

/**
 * Add a link to a remote system
 */
export const addRemoteLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const { url, type, metadata } = req.body;

    if (!url || !type) {
      res.status(400).json({ error: 'URL and type are required' });
      return;
    }

    const link = await linkerService.addLink({ url, type, metadata });
    
    res.status(201).json({
      success: true,
      message: 'Remote link added successfully',
      data: link
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Get all remote links
 */
export const getRemoteLinks = async (req: Request, res: Response): Promise<void> => {
  try {
    const links = await linkerService.getAllLinks();
    
    res.status(200).json({
      success: true,
      data: links
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Update a remote link
 */
export const updateRemoteLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const { linkId } = req.params;
    const updates = req.body;

    if (!linkId) {
      res.status(400).json({ error: 'Link ID is required' });
      return;
    }

    const link = await linkerService.updateLink(linkId, updates);
    
    if (!link) {
      res.status(404).json({ error: 'Link not found' });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Link updated successfully',
      data: link
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

/**
 * Delete a remote link
 */
export const deleteRemoteLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const { linkId } = req.params;

    if (!linkId) {
      res.status(400).json({ error: 'Link ID is required' });
      return;
    }

    await linkerService.deleteLink(linkId);
    
    res.status(200).json({
      success: true,
      message: 'Link deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};
