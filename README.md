## Portfolio React site bootstrapped with Next.js, using Typescript and Tailwind CSS.

Deployed here: https://next-ts-portfolio-seven.vercel.app/

This site is intended to be a work in progress utilizing technologies of my current focus while displaying my professional abilities and artistic accomplishments.
Sort of a living resume/portfolio.

## Updates:

Added db seed files in case new db instances are needed for future deployments.

Currently serving tech logo images from public folder, may move to storing images in db.

Moved db connection to layout file, in order to connect to and update/populate db as early as possible. Because of this, I have commented out the db connection call in pages. Will eventually make this more stable (in case connection to db is lost between initial connection and loading pages that require db data).

-
-
-

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
