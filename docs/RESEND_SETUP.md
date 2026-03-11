# Resend Setup - Quick Verification

## What You've Done

1. Signed up at https://resend.com
2. Got your API key
3. Added to `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

## What I've Done

1. Installed Resend package
2. Updated `app/api/contact/route.ts` to send emails
3. Configured email template

## Next Steps

### 1. Verify Your Domain (Important!)

Resend requires domain verification to send emails from your domain.

**Option A: Use Resend's Test Domain (Quick Start)**
- Update the API route `from` field to use Resend's test domain
- Change: `from: 'portfolio@sarahcancode.dev'`
- To: `from: 'onboarding@resend.dev'`
- This works immediately for testing

**Option B: Verify Your Domain (Production)**
- Go to https://resend.com/domains
- Add your domain: `sarahcancode.dev`
- Add DNS records they provide
- Wait for verification (5-30 minutes)
- Then use: `from: 'portfolio@sarahcancode.dev'`

### 2. Test the Form

**For Quick Testing (Use Test Domain):**

Update `app/api/contact/route.ts` line with `from:`:
```typescript
from: 'onboarding@resend.dev',  // Resend's test domain
```

Then:
1. Restart your dev server: `pnpm dev`
2. Fill out the contact form
3. Submit
4. Check your email inbox (hello@sarahcancode.dev)

### 3. Check for Errors

If it doesn't work:
- Check browser console for errors
- Check terminal/server logs
- Verify API key is correct in `.env.local`
- Make sure dev server restarted after adding `.env.local`

## Current Configuration

**Email will be sent:**
- **From:** portfolio@sarahcancode.dev (or onboarding@resend.dev for testing)
- **To:** hello@sarahcancode.dev
- **Reply-To:** User's email (so you can reply directly)

**Email will contain:**
- User's name
- User's email
- Subject
- Message
- Preferred contact method (if provided)

## Troubleshooting

### Error: "Domain not verified"
**Solution:** Use `from: 'onboarding@resend.dev'` for testing

### Error: "Invalid API key"
**Solution:** Check `.env.local` has correct key, restart dev server

### No email received
**Solution:** 
- Check spam folder
- Verify email address in API route matches your actual email
- Check Resend dashboard for delivery logs

### Dev server not picking up .env.local
**Solution:** 
- Stop dev server (Ctrl+C)
- Run `pnpm dev` again
- Environment variables only load on server start

## Quick Test Checklist

- [ ] API key added to `.env.local`
- [ ] Dev server restarted
- [ ] Using test domain (`onboarding@resend.dev`) OR domain verified
- [ ] Form submits without errors
- [ ] Check email inbox (and spam folder)
- [ ] Check Resend dashboard for logs

## Production Checklist

Before deploying:
- [ ] Verify your domain in Resend
- [ ] Update `from` to use your domain
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] Test on production
- [ ] Monitor Resend dashboard for delivery

## Need Help?

Check:
1. Resend dashboard: https://resend.com/emails
2. Resend docs: https://resend.com/docs
3. Server logs in terminal
4. Browser console for errors
