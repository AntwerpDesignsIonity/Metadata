import { RemoteLink } from '../models/link.model';

/**
 * Service for managing remote system links
 */
export class RemoteLinkerService {
  private links: Map<string, RemoteLink> = new Map();

  /**
   * Add a new remote link
   */
  async addLink(linkData: Omit<RemoteLink, 'id' | 'createdAt' | 'updatedAt'>): Promise<RemoteLink> {
    const id = this.generateLinkId();
    
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
  async updateLink(linkId: string, updates: Partial<RemoteLink>): Promise<RemoteLink | undefined> {
    const link = this.links.get(linkId);
    
    if (!link) {
      return undefined;
    }

    const updatedLink: RemoteLink = {
      ...link,
      ...updates,
      id: linkId,
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

  /**
   * Generate a unique link ID
   */
  private generateLinkId(): string {
    return `link_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  }
}
