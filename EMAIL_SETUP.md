# Email Configuration Guide

This guide will help you set up email functionality for your portfolio contact form.

## Setup Steps

### 1. Configure Environment Variables

Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

### 2. Set Up Email Credentials

#### For Gmail:

1. **Enable 2-Step Verification** (if not already enabled)
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create an App Password**
   - Visit [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" as the app
   - Select "Other" as the device and give it a name (e.g., "Portfolio")
   - Click "Generate"
   - Copy the 16-character password

3. **Update `.env.local`**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   EMAIL_SERVICE=gmail
   EMAIL_TO=your-email@gmail.com
   ```

#### For Outlook/Hotmail:

1. **Create an App Password**
   - Go to [Microsoft Account Security](https://account.microsoft.com/security)
   - Under "Security basics", select "Advanced security options"
   - Create a new app password

2. **Update `.env.local`**
   ```env
   EMAIL_USER=your-email@outlook.com
   EMAIL_PASSWORD=your-app-password
   EMAIL_SERVICE=outlook
   EMAIL_TO=your-email@outlook.com
   ```

#### For Other Email Providers:

Check your email provider's documentation for SMTP settings. Common services:
- **Yahoo**: `EMAIL_SERVICE=yahoo`
- **iCloud**: `EMAIL_SERVICE=iCloud`
- **Custom SMTP**: See advanced configuration below

### 3. Test the Contact Form

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact page
3. Fill out and submit the form
4. Check your email inbox for the inquiry

## Advanced Configuration

### Custom SMTP Server

If you want to use a custom SMTP server, modify `app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransport({
    host: "smtp.your-provider.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
```

### Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Sender email address | `your-email@gmail.com` |
| `EMAIL_PASSWORD` | App-specific password | `abcd efgh ijkl mnop` |
| `EMAIL_SERVICE` | Email service provider | `gmail`, `outlook`, `yahoo` |
| `EMAIL_TO` | Recipient email address | `your-email@gmail.com` |

## Troubleshooting

### Common Issues:

1. **"Invalid login" error**
   - Make sure you're using an app-specific password, not your regular email password
   - Verify 2-factor authentication is enabled

2. **"Connection timeout" error**
   - Check your firewall settings
   - Verify your email service is correct
   - Try using port 465 instead of 587

3. **Emails not arriving**
   - Check your spam folder
   - Verify `EMAIL_TO` is correct
   - Check the API logs in the terminal

4. **"Less secure app access" (Gmail)**
   - Google has deprecated this. You MUST use App Passwords now

## Security Notes

- ⚠️ **Never commit `.env.local` to version control**
- ✅ `.env.local` is already in `.gitignore`
- ✅ Use app-specific passwords, not your main email password
- ✅ Keep your environment variables secure

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names: `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_SERVICE`, `EMAIL_TO`
3. Restart your application after adding variables

### Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add each variable one by one
4. Redeploy your application

## Support

If you encounter issues:
- Check the API logs in your terminal
- Verify your email credentials are correct
- Ensure your email provider allows SMTP access
- Check if you need to enable "less secure apps" or app passwords
