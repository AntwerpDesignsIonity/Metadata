# API Documentation

## Overview

This document provides detailed information about the Metadata Removal API endpoints and usage examples.

## Base URL

```
http://localhost:3000/api
```

## Metadata Endpoints

### 1. Remove Metadata

Remove metadata from a single file.

**Endpoint:** `POST /metadata/remove`

**Request Body:**
```json
{
  "fileData": "base64_encoded_file_data",
  "fileName": "example.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Metadata removed successfully",
  "data": {
    "fileId": "file_1707843600000_abc123",
    "fileName": "example.jpg",
    "originalSize": 1024,
    "processedSize": 1024,
    "metadataRemoved": [],
    "timestamp": "2024-02-13T16:00:00.000Z",
    "status": "completed"
  }
}
```

### 2. Analyze Metadata

Analyze a file to identify existing metadata.

**Endpoint:** `POST /metadata/analyze`

**Request Body:**
```json
{
  "fileData": "base64_encoded_file_data",
  "fileName": "example.jpg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Metadata analyzed successfully",
  "data": {
    "fileName": "example.jpg",
    "fileSize": 1024,
    "fileType": "jpg",
    "metadata": {
      "hasEXIF": false,
      "hasIPTC": false,
      "hasXMP": false,
      "customFields": []
    },
    "analyzedAt": "2024-02-13T16:00:00.000Z"
  }
}
```

### 3. Batch Remove Metadata

Process multiple files for metadata removal.

**Endpoint:** `POST /metadata/batch`

**Request Body:**
```json
{
  "files": [
    {
      "fileData": "base64_encoded_file_data_1",
      "fileName": "file1.jpg"
    },
    {
      "fileData": "base64_encoded_file_data_2",
      "fileName": "file2.png"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Batch processing completed",
  "data": [
    {
      "fileId": "file_1707843600000_abc123",
      "fileName": "file1.jpg",
      "originalSize": 1024,
      "processedSize": 1024,
      "metadataRemoved": [],
      "timestamp": "2024-02-13T16:00:00.000Z",
      "status": "completed"
    },
    {
      "fileId": "file_1707843600001_def456",
      "fileName": "file2.png",
      "originalSize": 2048,
      "processedSize": 2048,
      "metadataRemoved": [],
      "timestamp": "2024-02-13T16:00:00.000Z",
      "status": "completed"
    }
  ]
}
```

### 4. Get Processing Result

Retrieve the result of a metadata processing operation.

**Endpoint:** `GET /metadata/:fileId`

**Response:**
```json
{
  "success": true,
  "data": {
    "fileId": "file_1707843600000_abc123",
    "fileName": "example.jpg",
    "originalSize": 1024,
    "processedSize": 1024,
    "metadataRemoved": [],
    "timestamp": "2024-02-13T16:00:00.000Z",
    "status": "completed"
  }
}
```

## Remote Link Endpoints

### 1. Add Remote Link

Add a link to a remote system (storage, CDN, API, etc.).

**Endpoint:** `POST /links/add`

**Request Body:**
```json
{
  "url": "https://example.com/storage",
  "type": "storage",
  "metadata": {
    "apiKey": "your-api-key",
    "region": "us-east-1"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Remote link added successfully",
  "data": {
    "id": "link_1707843600000_xyz789",
    "url": "https://example.com/storage",
    "type": "storage",
    "metadata": {
      "apiKey": "your-api-key",
      "region": "us-east-1"
    },
    "createdAt": "2024-02-13T16:00:00.000Z",
    "updatedAt": "2024-02-13T16:00:00.000Z"
  }
}
```

### 2. Get All Links

Retrieve all remote links.

**Endpoint:** `GET /links`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "link_1707843600000_xyz789",
      "url": "https://example.com/storage",
      "type": "storage",
      "metadata": {},
      "createdAt": "2024-02-13T16:00:00.000Z",
      "updatedAt": "2024-02-13T16:00:00.000Z"
    }
  ]
}
```

### 3. Update Link

Update an existing remote link.

**Endpoint:** `PUT /links/:linkId`

**Request Body:**
```json
{
  "url": "https://updated-url.com",
  "metadata": {
    "newKey": "newValue"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Link updated successfully",
  "data": {
    "id": "link_1707843600000_xyz789",
    "url": "https://updated-url.com",
    "type": "storage",
    "metadata": {
      "newKey": "newValue"
    },
    "createdAt": "2024-02-13T16:00:00.000Z",
    "updatedAt": "2024-02-13T16:10:00.000Z"
  }
}
```

### 4. Delete Link

Delete a remote link.

**Endpoint:** `DELETE /links/:linkId`

**Response:**
```json
{
  "success": true,
  "message": "Link deleted successfully"
}
```

## Health Check

Check if the API is running.

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "OK",
  "message": "Metadata API is running"
}
```

## Error Responses

All endpoints may return error responses in the following format:

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (missing or invalid parameters)
- `404` - Not Found
- `500` - Internal Server Error

## Link Types

The API supports the following link types:

- `storage` - Cloud storage systems (S3, Google Cloud Storage, etc.)
- `cdn` - Content Delivery Networks
- `api` - External APIs
- `other` - Other remote systems

## Supported File Types

- **Images**: JPG, JPEG, PNG, GIF, BMP
- **Documents**: PDF, DOC, DOCX, XLS, XLSX
- **Media**: MP3, MP4, AVI, MOV

## Usage Examples

### cURL Example

```bash
# Remove metadata from a file
curl -X POST http://localhost:3000/api/metadata/remove \
  -H "Content-Type: application/json" \
  -d '{
    "fileData": "base64_encoded_data",
    "fileName": "photo.jpg"
  }'

# Add a remote link
curl -X POST http://localhost:3000/api/links/add \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://storage.example.com",
    "type": "storage"
  }'
```

### JavaScript Example

```javascript
// Remove metadata
const response = await fetch('http://localhost:3000/api/metadata/remove', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fileData: base64Data,
    fileName: 'photo.jpg'
  })
});

const result = await response.json();
console.log(result);
```

### Python Example

```python
import requests

# Remove metadata
response = requests.post(
    'http://localhost:3000/api/metadata/remove',
    json={
        'fileData': base64_data,
        'fileName': 'photo.jpg'
    }
)

result = response.json()
print(result)
```
