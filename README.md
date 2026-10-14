# LocalPass

A mobile-first Gold Coast membership and discovery platform.

## Membership products
- Tourist Pass: AUD $9 for 7 days, one-off.
- Locals Pass: AUD $49 for 12 months.

## Current status
**Pre-launch public website only.** The starter includes a responsive landing page and illustrative discovery cards. There are no live merchant offers, no checkout, no membership account, no QR redemption, and no admin backend yet.

## Local development
Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Deploy to Vercel
Import `Boatsy007/localspass` in Vercel; select Next.js, leave root as `./`, deploy. No secrets are currently required.

## Next implementation phases
1. Confirm brand/domain and merchant offer agreements.
2. Replace demonstration imagery and connect actual approved merchant listings.
3. Supabase schema, authentication, role-based authorisation and dashboards.
4. Stripe checkout/webhooks, refund and entitlement lifecycle.
5. Server-validated, non-replayable QR redemptions.
6. Accommodation referrals and commission ledgers.
7. Legal review, security testing and production-readiness checks.

Do not use `hello@localspass.example` as a production email; replace placeholder links when a real support inbox is ready.
