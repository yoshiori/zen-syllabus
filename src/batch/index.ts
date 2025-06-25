#!/usr/bin/env node
import { DataFetcher } from './fetcher';

async function main() {
  console.log('Starting data fetch batch...');
  
  const fetcher = new DataFetcher();
  const result = await fetcher.run();
  
  if (result.success) {
    console.log(`Data saved successfully: ${result.filename}`);
  } else {
    console.error(`Failed to fetch data: ${result.error}`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Batch error:', error);
  process.exit(1);
});