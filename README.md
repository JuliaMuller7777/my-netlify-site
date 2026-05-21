# B2B Marketcraft — Job Signals Report landing pages

Static landing pages for the $7 job signals report, deployed from GitHub to Netlify.

## Pages

| File | Live URL | What it is |
|------|----------|------------|
| `index.html` | `/` | Simple hub linking to both variants |
| `direct.html` | `/direct` | Variant A — direct / feature-led landing page |
| `story.html` | `/story` | Variant B — story-led landing page (founder narrative) |

`direct.html` and `story.html` are A/B variants of the same $7 offer.

## Checkout buttons

The $7 Stripe Payment Link is wired into every checkout button — 2 buttons
in `direct.html` and 3 in `story.html`:

`https://buy.stripe.com/bJe6oAeCX34NaHR0bZ0kE08`

Still outstanding for `story.html`: a Meta Pixel is installed, and there is
a TODO for an Open Graph share image (`og:image`). In Stripe, set the
Payment Link's success/redirect URL to your post-purchase form page so the
Meta Purchase conversion event fires after checkout.

## How deployment works

This repository is connected to Netlify. Every push to the `main` branch
triggers an automatic redeploy. No build tools required — these are plain
static HTML files.
