import { MetadataRemovalService } from '../src/services/metadata-removal.service';

describe('MetadataRemovalService', () => {
  let service: MetadataRemovalService;

  beforeEach(() => {
    service = new MetadataRemovalService();
  });

  test('should remove metadata from a file', async () => {
    const fileData = 'sample file data';
    const fileName = 'test.jpg';

    const result = await service.removeMetadata(fileData, fileName);

    expect(result).toBeDefined();
    expect(result.fileName).toBe(fileName);
    expect(result.status).toBe('completed');
    expect(result.fileId).toBeDefined();
  });

  test('should process batch removal', async () => {
    const files = [
      { fileData: 'data1', fileName: 'file1.jpg' },
      { fileData: 'data2', fileName: 'file2.png' }
    ];

    const results = await service.batchRemove(files);

    expect(results).toHaveLength(2);
    expect(results[0].fileName).toBe('file1.jpg');
    expect(results[1].fileName).toBe('file2.png');
  });

  test('should retrieve result by file ID', async () => {
    const fileData = 'sample file data';
    const fileName = 'test.jpg';

    const result = await service.removeMetadata(fileData, fileName);
    const retrieved = await service.getResult(result.fileId);

    expect(retrieved).toBeDefined();
    expect(retrieved?.fileId).toBe(result.fileId);
  });
});
