// lib/sanity.js

import sanityClient from '@sanity/client'

// Sanity client configuration
export const client = sanityClient({
  projectId: 'thozhujj', // Replace with your actual project ID from Sanity
  dataset: 'production',        // Replace with your dataset name (usually "production")
  useCdn: true,                 // Use the CDN for faster reads; set to false for fresh data during development
  apiVersion: '2023-01-01',     // Use the latest API version; adjust as needed
})
