export const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  api: {
    prefix: '/api',
    version: 'v1'
  },
  metadata: {
    maxFileSize: 50 * 1024 * 1024, // 50MB
    supportedFormats: [
      'jpg', 'jpeg', 'png', 'gif', 'bmp',
      'pdf', 'doc', 'docx', 'xls', 'xlsx',
      'mp3', 'mp4', 'avi', 'mov'
    ]
  },
  links: {
    maxLinks: 100
  }
};
