/**
 * Remote link model
 */
export interface RemoteLink {
  id: string;
  url: string;
  type: 'storage' | 'cdn' | 'api' | 'other';
  metadata?: {
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Link creation request
 */
export interface CreateLinkRequest {
  url: string;
  type: 'storage' | 'cdn' | 'api' | 'other';
  metadata?: {
    [key: string]: any;
  };
}
