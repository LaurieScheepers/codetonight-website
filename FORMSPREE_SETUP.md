# Formspree Setup Guide

## 1. Create Account

1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email (or use Google/GitHub)
3. Verify your email address

## 2. Create a Form

1. Click "New Form" in your dashboard
2. Name it "CodeTonight Contact Form"
3. Set the email destination (where submissions go)
4. Copy the form endpoint (looks like `https://formspree.io/f/xyzabcde`)

## 3. Update index.html

Replace `{YOUR_FORM_ID}` with your actual form ID:

```html
<form action="https://formspree.io/f/{YOUR_FORM_ID}" method="POST" class="contact-form">
```

Example with real ID:

```html
<form action="https://formspree.io/f/xyzabcde" method="POST" class="contact-form">
```

## 4. Test

1. Open the site locally or deploy
2. Submit a test message
3. Check your email for the submission
4. Verify in Formspree dashboard

## Optional: Customise Redirect

Add a hidden field to redirect users after submission:

```html
<input type="hidden" name="_next" value="https://www.codetonight.co.za/thank-you.html">
```

## Optional: Spam Protection

Formspree includes reCAPTCHA by default. For honeypot protection, add:

```html
<input type="text" name="_gotcha" style="display:none">
```

## Pricing

- Free tier: 50 submissions/month
- Paid plans for higher volume

---

Form endpoint location: `public/index.html` line ~432
