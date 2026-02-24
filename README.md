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

The contact page uses [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) for bot protection and [Web3Forms](https://web3forms.com) for delivery. The form submits **from the browser** to Web3Forms so Cloudflare does not block the request (server-side calls to api.web3forms.com often get 403 unless your server IP is whitelisted).

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_WEB3FORMS_KEY` – Web3Forms access key (public; used in the client)
- `NEXT_PUBLIC_TURNSTILE_SITEKEY` – Turnstile widget sitekey (public)

For **Turnstile token validation** with Web3Forms you need [Web3Forms Pro](https://web3forms.com): in the Web3Forms dashboard add your Turnstile secret and choose Turnstile as the captcha provider. Without Pro, submissions still go through but Web3Forms will not validate the Turnstile token.

For local testing use [Turnstile’s testing keys](https://developers.cloudflare.com/turnstile/troubleshooting/testing/) (e.g. sitekey `1x00000000000000000000AA`). The route `/api/contact` is kept in the repo but not used by the form; it can be used if you later switch to a server-side flow (e.g. IP whitelisting).

## Notes
This project is primarily client-side. The contact form posts to Web3Forms from the client. All other assets and data are stored locally.
