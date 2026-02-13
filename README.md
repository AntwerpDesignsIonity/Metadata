# Metadata Removal API

A RESTful API service for removing metadata from files and managing links to remote systems.

## Features

- **Metadata Removal**: Remove metadata from various file types (images, documents, media files)
- **Metadata Analysis**: Analyze files to identify embedded metadata
- **Batch Processing**: Process multiple files simultaneously
- **Remote Linking**: Manage links to remote storage systems, CDNs, and APIs
- **RESTful API**: Clean and well-documented API endpoints

## Project Structure

```
Metadata/
├── src/
│   ├── api/
│   │   ├── controllers/          # Request handlers
│   │   │   ├── metadata.controller.ts
│   │   │   └── link.controller.ts
│   │   ├── routes/               # API route definitions
│   │   │   ├── metadata.routes.ts
│   │   │   └── link.routes.ts
│   │   └── middleware/           # Custom middleware
│   │       └── error.middleware.ts
│   ├── services/                 # Business logic
│   │   ├── metadata-removal.service.ts
│   │   ├── file-processor.service.ts
│   │   └── remote-linker.service.ts
│   ├── models/                   # Data models and interfaces
│   │   ├── metadata.model.ts
│   │   └── link.model.ts
│   ├── utils/                    # Utility functions
│   │   └── helpers.ts
│   ├── config/                   # Configuration files
│   │   └── app.config.ts
│   └── index.ts                  # Application entry point
├── tests/                        # Test files
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AntwerpDesignsIonity/Metadata.git
cd Metadata
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Build the project:
```bash
npm run build
```

5. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Metadata Endpoints

#### Remove Metadata
```http
POST /api/metadata/remove
Content-Type: application/json

{
  "fileData": "base64_encoded_file_data",
  "fileName": "example.jpg"
}
```

#### Analyze Metadata
```http
POST /api/metadata/analyze
Content-Type: application/json

{
  "fileData": "base64_encoded_file_data",
  "fileName": "example.jpg"
}
```

#### Batch Remove Metadata
```http
POST /api/metadata/batch
Content-Type: application/json

{
  "files": [
    {
      "fileData": "base64_encoded_file_data",
      "fileName": "file1.jpg"
    },
    {
      "fileData": "base64_encoded_file_data",
      "fileName": "file2.png"
    }
  ]
}
```

#### Get Processing Result
```http
GET /api/metadata/:fileId
```

### Remote Link Endpoints

#### Add Remote Link
```http
POST /api/links/add
Content-Type: application/json

{
  "url": "https://example.com/storage",
  "type": "storage",
  "metadata": {
    "key": "value"
  }
}
```

#### Get All Links
```http
GET /api/links
```

#### Update Link
```http
PUT /api/links/:linkId
Content-Type: application/json

{
  "url": "https://updated-url.com"
}
```

#### Delete Link
```http
DELETE /api/links/:linkId
```

### Health Check
```http
GET /health
```

## Running Tests

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Configuration

Edit `.env` file to configure:

- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)

## Supported File Types

- Images: JPG, JPEG, PNG, GIF, BMP
- Documents: PDF, DOC, DOCX, XLS, XLSX
- Media: MP3, MP4, AVI, MOV

## License

MIT
