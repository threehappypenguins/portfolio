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

1. **Frontend:** The contact page uses [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) and submits the form plus the `cf-turnstile-response` token to **`/api/contact`**.
2. **API route:** `/api/contact` verifies the token with Cloudflare, then sends the message via the [Mailgun API](https://documentation.mailgun.com/docs/mailgun/user-manual/sending-messages/send-http). No third-party form service is used.

Copy `.env.example` to `.env.local` and set:

- **Turnstile:** `NEXT_PUBLIC_TURNSTILE_SITEKEY`, `TURNSTILE_SECRET_KEY` (use [testing keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) locally).
- **Mailgun:** `MAILGUN_API_KEY`, `MAILGUN_DOMAIN`, `MAILGUN_FROM`, `MAILGUN_TO`. For EU, set `MAILGUN_HOST=https://api.eu.mailgun.net`.

## Notes
This project is primarily client-side. The contact form is handled by the `/api/contact` route (Turnstile + Mailgun). All other assets and data are stored locally.
