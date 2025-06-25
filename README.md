# Zen Syllabus

A TypeScript-based project featuring an MCP (Model Context Protocol) server, Cloudflare Workers deployment, and data fetching batch processes.

## Features

- **MCP Server**: Model Context Protocol server implementation
- **Cloudflare Workers**: API endpoints deployed on Cloudflare edge network
- **Data Batch**: Scheduled data fetching and storage
- **Test-Driven Development**: 100% test coverage with Vitest
- **Code Quality**: ESLint, Prettier, and automated formatting
- **Security**: Secret detection with detect-secrets
- **Pre-commit Hooks**: Automated code quality checks before commits

## Prerequisites

- Node.js 18.x or 20.x
- npm or yarn
- Python 3.x (for detect-secrets)
- Cloudflare account (for Workers deployment)

## Installation

```bash
# Install Node.js dependencies
npm install

# Install detect-secrets for secret scanning
pip install detect-secrets
# or
pipx install detect-secrets
```

## Development

### Running Tests

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

### Code Quality

```bash
# Lint code
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type checking
npm run typecheck
```

### Security

```bash
# Scan for secrets
npm run secrets:scan

# Audit detected secrets
npm run secrets:audit
```

### MCP Server

```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm run build
npm start
```

### Cloudflare Workers

```bash
# Local development
npm run dev:worker

# Deploy to Cloudflare
npm run deploy
```

### Data Batch

```bash
# Run batch process
npm run batch
```

## Project Structure

```
src/
├── mcp/          # MCP server implementation
├── workers/      # Cloudflare Workers code
├── batch/        # Data fetching batch processes
└── shared/       # Shared utilities and types

tests/
├── mcp/          # MCP server tests
├── workers/      # Workers tests
└── batch/        # Batch process tests
```

## API Endpoints

### GET /

Returns API information

### GET /syllabus

Returns syllabus content

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
CLOUDFLARE_API_TOKEN=your_api_token
CLOUDFLARE_ACCOUNT_ID=your_account_id
```

## Pre-commit Hooks

This project uses pre-commit hooks to ensure code quality:

- **Secret Detection**: Scans for hardcoded secrets using detect-secrets
- **Code Formatting**: Automatic formatting with Prettier
- **Linting**: ESLint checks with auto-fixing
- **Staged Files Only**: Runs only on staged files for performance

The hooks are automatically installed when you run `npm install` and will run before each commit.

## Deployment

The project uses GitHub Actions for CI/CD:

- **CI Pipeline**: Runs on every push and PR with comprehensive checks:
  - Secret detection
  - Code formatting verification
  - Linting
  - Type checking
  - Tests with coverage
- **Deploy Pipeline**: Deploys to Cloudflare Workers on main branch with security checks

## License

ISC
