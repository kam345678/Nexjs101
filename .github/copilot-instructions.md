# Copilot Instructions for nextjs101

## Project Overview
- This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`.
- The codebase uses the Next.js App Router (see `src/app/`) and TypeScript.
- Major UI components are in `src/app/component/`.
- Pages are organized by route in `src/app/`, with nested folders for routes (e.g., `about/`, `admin/`, `contact/`).

## Key Workflows
- **Development:**
  - Start the dev server: `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
  - Edit pages in `src/app/` and components in `src/app/component/`.
  - Changes auto-update in the browser at [http://localhost:3000](http://localhost:3000).
- **Build:**
  - Run `npm run build` to create a production build.
- **Deployment:**
  - Deploy to Vercel for best integration. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## Project Conventions
- **Routing:**
  - Each folder in `src/app/` with a `page.tsx` is a route. Nested folders create nested routes.
  - `layout.tsx` in a folder provides layout for all nested routes.
- **Styling:**
  - Global styles: `src/app/globals.css`.
  - Use CSS modules or global CSS as needed.
- **Assets:**
  - Static files (SVGs, images) are in `public/`.
- **TypeScript:**
  - All code is TypeScript-first. Type definitions are in `tsconfig.json` and `next-env.d.ts`.

## Patterns & Examples
- **Component Example:**
  - See `src/app/component/Navbar.tsx` and `Footer.tsx` for reusable layout components.
- **Page Example:**
  - `src/app/about/page.tsx` defines the `/about` route.
  - `src/app/admin/layout.tsx` wraps all `/admin` pages.

## External Integrations
- No custom backend or API routes are present by default.
- Deployment is optimized for Vercel.

## Additional Notes
- No custom test setup or scripts are present by default.
- For more, see the project [README.md](../README.md).
