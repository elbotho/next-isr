This is a minimal example of on-demand revalidation in nextjs.

## Docs

https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#using-on-demand-revalidation

## Try locally

To see the revalidation you need to create a production build and run that locally.
([see docs](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration#testing-on-demand-isr-during-development))

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

And then open [http://localhost:3000](http://localhost:3000).
