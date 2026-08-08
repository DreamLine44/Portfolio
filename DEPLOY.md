Deploying to Vercel

Recommended: Use the Vercel Dashboard (auto deploys from GitHub)

1) Import repository
- Go to https://vercel.com/new and choose "Import Git Repository".
- Select GitHub and authorize if needed, then pick `DreamLine44/Portfolio`.
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

2) Environment variables
- Required: `VITE_CONTACT_API_URL` (example: https://api.example.com)
- In Vercel Dashboard → Project → Settings → Environment Variables add:
  - Key: `VITE_CONTACT_API_URL`
  - Value: your API base URL
  - Target: Production (and Preview if you want preview builds to work)

3) Deploy
- Click "Deploy" in the Dashboard. Vercel will build and provide a production URL.

CLI (alternative)
- Interactive login:
  ```bash
  npx vercel login
  npx vercel --prod
  ```
- Non-interactive with token (create token at https://vercel.com/account/tokens):
  PowerShell example:
  ```powershell
  $env:VERCEL_TOKEN="your_token_here"
  npx vercel --prod --token $env:VERCEL_TOKEN
  ```
- Add env vars via CLI:
  ```bash
  npx vercel env add VITE_CONTACT_API_URL production
  ```

Notes
- Add your real headshot in `src/assets/` and CI will pick it up on next deploy.
- The contact form requires `VITE_CONTACT_API_URL` to be set and point at a `POST /contact` endpoint.
- If you want, provide a Vercel token and I can run the CLI deploy for you from this environment (you may prefer to run it locally for security).