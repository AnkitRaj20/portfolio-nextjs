# API Documentation

This file documents the available API endpoints in the portfolio-nextjs project.

## Endpoints

### Hashnode API
- **GET** `/api/hashnode`
  - Fetches blog posts from Hashnode.

### Hashnode Post API
- **GET** `/api/hashnode-post`
  - Fetches a single blog post from Hashnode.

## Example Request
```http
GET /api/hashnode
```

## Response
```json
{
  "posts": [
    {
      "id": "...",
      "title": "...",
      "content": "..."
    }
  ]
}
```
