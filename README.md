# Corrily Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/corrily)](https://www.npmjs.com/package/@fern-api/corrily)

The Corrily Node.js library provides access to the Corrily API from JavaScript/TypeScript.

## Documentation

API documentation is available [here](https://docs.corrily.com/api-reference/calculate-price).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-zxpd4j?file=app.ts&view=editor)

```typescript
import { CorrilyApiClient, CorrilyApiEnvironment } from '@fern-api/corrily';

const client = new CorrilyApiClient({
  environment: CorrilyApiEnvironment.Production,
  token: 'MY_TOKEN',
});

const response = await client.price.calculate({
  userId: '193.37.32.232',
  products: ['product456'],
  ip: '193.37.32.232',
  getIpFromRequest: true,
  country: 'US',
  integrations: ['stripe'],
  currency: 'USD',
  override: true,
  runExperiment: true,
});

console.log('Received response from Corrily!', response);
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-corrily/corrily-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
