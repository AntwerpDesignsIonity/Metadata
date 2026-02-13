import { RemoteLink } from '../models/link.model';
import { generateId } from '../utils/helpers';

/**
 * Service for managing remote system links
 */
export class RemoteLinkerService {
  private links: Map<string, RemoteLink> = new Map();

  /**
   * Add a new remote link
   */
  async addLink(linkData: Omit<RemoteLink, 'id' | 'createdAt' | 'updatedAt'>): Promise<RemoteLink> {
    const id = generateId('link_');
    
    const link: RemoteLink = {
      id,
      ...linkData,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.links.set(id, link);
    return link;
  }

  /**
   * Get all remote links
   */
  async getAllLinks(): Promise<RemoteLink[]> {
    return Array.from(this.links.values());
  }

  /**
   * Update a remote link
   */
  async updateLink(linkId: string, updates: Omit<Partial<RemoteLink>, 'id' | 'createdAt'>): Promise<RemoteLink | undefined> {
    const link = this.links.get(linkId);
    
    if (!link) {
      return undefined;
    }

    const updatedLink: RemoteLink = {
      ...link,
      ...updates,
      id: linkId,
      createdAt: link.createdAt,
      updatedAt: new Date()
    };

    this.links.set(linkId, updatedLink);
    return updatedLink;
  }

  /**
   * Delete a remote link
   */
  async deleteLink(linkId: string): Promise<boolean> {
    return this.links.delete(linkId);
  }
}
