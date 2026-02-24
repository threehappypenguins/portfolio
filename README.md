# Portfolio Website

This project is a personal portfolio built with **Next.js** and styled using **Tailwind CSS**. It is fully front-end and serves as a space to showcase projects, experience, and contact information.

The application uses the Next.js App Router and a collection of custom components for layout, navigation, theming, and content display. All timeline and portfolio information is sourced from **`/data/portfolio-data.ts`**, which centralizes the project and experience data.

## Technologies Used
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **PostCSS**
- **ESLint**

## Contact form

The contact page uses [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) for bot protection and [Web3Forms](https://web3forms.com) for delivery. Submissions are sent to your API route (`/api/contact`), which verifies the Turnstile token then forwards the payload to Web3Forms.

Copy `.env.example` to `.env.local` and set:

- `WEB3FORMS_KEY` – Web3Forms access key
- `NEXT_PUBLIC_TURNSTILE_SITEKEY` – Turnstile widget sitekey (public)
- `TURNSTILE_SECRET_KEY` – Turnstile secret (server-only)

For local testing you can use [Turnstile’s testing keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) (e.g. sitekey `1x00000000000000000000AA`, secret `1x0000000000000000000000000000000AA`).

## Notes
This project is primarily client-side. The contact form uses a small API route for Turnstile verification and Web3Forms. All other assets and data are stored locally.
