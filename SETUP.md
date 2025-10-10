# Setup Guide for NPM Package Template

This guide will help you set up your new npm package using this template.

## 🚀 Quick Start

### 1. Clone or Use This Template

```bash
# If using as a template on GitHub, click "Use this template"
# Or clone directly:
git clone https://github.com/yourusername/starter-template-typescript.git my-new-package
cd my-new-package
```

### 2. Update Package Information

Edit `package.json` and replace:
- `"name"`: Your package name (e.g., `"my-awesome-package"`)
- `"description"`: Brief description of your package
- `"author"`: Your name
- `"repository"`: Your repository URL
- `"bugs"`: Your issues URL
- `"homepage"`: Your homepage URL
- `"keywords"`: Relevant keywords for npm search

### 3. Update README.md

Replace all placeholder text in `README.md`:
- Package name
- Description
- Usage examples
- API documentation
- Author information
- Repository URLs

### 4. Update LICENSE

Update the year and author name in the `LICENSE` file.

### 5. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 6. Start Developing

Replace the example code in `src/index.ts` with your actual implementation:

```typescript
// src/index.ts
export function myFunction(input: string): string {
  // Your implementation here
  return input;
}
```

Update `src/types.ts` with your type definitions:

```typescript
// src/types.ts
export interface MyConfig {
  option1: string;
  option2?: number;
}
```

### 7. Write Tests

Update `src/__test__/index.test.ts` with your test cases:

```typescript
import { myFunction } from '../index';

describe('myFunction', () => {
  it('should work correctly', () => {
    const result = myFunction('test');
    expect(result).toBe('test');
  });
});
```

### 8. Build and Test

```bash
# Run tests
npm test

# Build the package
npm run build

# Test locally
npm run dev
```

## 📦 Publishing to NPM

### First Time Setup

1. **Create an NPM account** at https://www.npmjs.com/signup

2. **Login to NPM**
   ```bash
   npm login
   ```

3. **Verify your email** on npmjs.com

### Publishing

1. **Update version** in `package.json` (follow [Semantic Versioning](https://semver.org/))
   ```bash
   npm version patch  # For bug fixes (0.0.x)
   npm version minor  # For new features (0.x.0)
   npm version major  # For breaking changes (x.0.0)
   ```

2. **Build the package**
   ```bash
   npm run build
   ```

3. **Test the package locally**
   ```bash
   npm pack
   # This creates a .tgz file you can test with
   npm install ./your-package-name-0.0.1.tgz
   ```

4. **Publish to NPM**
   ```bash
   npm publish
   ```

   For scoped packages (e.g., `@username/package-name`):
   ```bash
   npm publish --access public
   ```

### Automated Publishing with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm install
      - run: npm test
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 🔧 Configuration Files

### TypeScript (`tsconfig.json`)

Already configured with:
- ✅ Strict mode enabled
- ✅ Declaration files generation
- ✅ Source maps for debugging
- ✅ Output to `dist/` directory

### Jest (`jest.config.js`)

Already configured for TypeScript testing with ts-jest.

### NPM Ignore (`.npmignore`)

Configured to exclude:
- Source files (`src/`)
- Config files
- Development files
- Tests

Only `dist/`, `README.md`, and `LICENSE` will be published.

## 📝 Best Practices

### 1. Versioning

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### 2. Documentation

- Keep README.md up to date
- Document all public APIs with JSDoc
- Include usage examples
- Maintain CHANGELOG.md

### 3. Testing

- Write tests for all features
- Aim for high coverage (>80%)
- Test edge cases
- Run tests before publishing

### 4. Code Quality

- Use TypeScript strictly
- Follow consistent code style
- Use meaningful names
- Keep functions small and focused

### 5. Git Workflow

- Use meaningful commit messages
- Create feature branches
- Review code before merging
- Tag releases

## 🛠️ Optional Enhancements

### Add ESLint

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create `.eslintrc.js`:
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
```

### Add Prettier

```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

### Add Husky (Git Hooks)

```bash
npm install --save-dev husky lint-staged
npx husky install
```

### Add CI/CD with GitHub Actions

Create `.github/workflows/test.yml`:
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run build
```

## 📚 Resources

- [NPM Documentation](https://docs.npmjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Semantic Versioning](https://semver.org/)
- [Keep a Changelog](https://keepachangelog.com/)

## 🆘 Troubleshooting

### "Cannot find module" errors

```bash
npm install
npm run build
```

### Tests failing

```bash
npm test -- --verbose
```

### TypeScript errors

```bash
npx tsc --noEmit
```

### Package not found after publishing

- Check if the name is available on npmjs.com
- Verify you're logged in: `npm whoami`
- Check `.npmignore` isn't excluding necessary files

## ✅ Checklist Before Publishing

- [ ] Updated package.json with correct information
- [ ] Updated README.md
- [ ] Updated LICENSE
- [ ] All tests passing
- [ ] Build successful
- [ ] Version number updated
- [ ] CHANGELOG.md updated
- [ ] No sensitive information in code
- [ ] .npmignore configured correctly

---

Happy coding! 🚀
