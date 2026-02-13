import { RemoteLinkerService } from '../src/services/remote-linker.service';

describe('RemoteLinkerService', () => {
  let service: RemoteLinkerService;

  beforeEach(() => {
    service = new RemoteLinkerService();
  });

  test('should add a remote link', async () => {
    const linkData = {
      url: 'https://example.com/api',
      type: 'api' as const,
      metadata: { key: 'value' }
    };

    const link = await service.addLink(linkData);

    expect(link).toBeDefined();
    expect(link.url).toBe(linkData.url);
    expect(link.type).toBe(linkData.type);
    expect(link.id).toBeDefined();
  });

  test('should get all links', async () => {
    await service.addLink({ url: 'https://example1.com', type: 'storage' });
    await service.addLink({ url: 'https://example2.com', type: 'cdn' });

    const links = await service.getAllLinks();

    expect(links).toHaveLength(2);
  });

  test('should update a link', async () => {
    const link = await service.addLink({ url: 'https://example.com', type: 'api' });
    const updated = await service.updateLink(link.id, { url: 'https://updated.com' });

    expect(updated).toBeDefined();
    expect(updated?.url).toBe('https://updated.com');
  });

  test('should delete a link', async () => {
    const link = await service.addLink({ url: 'https://example.com', type: 'api' });
    const deleted = await service.deleteLink(link.id);

    expect(deleted).toBe(true);
    
    const links = await service.getAllLinks();
    expect(links).toHaveLength(0);
  });
});
