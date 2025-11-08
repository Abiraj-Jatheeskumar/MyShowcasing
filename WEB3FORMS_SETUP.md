# Web3Forms Setup Guide

Your contact form is now using **Web3Forms** - a free, secure form backend service.

## ✅ What's Already Configured

- ✅ Form implementation with animations (Framer Motion)
- ✅ Form validation (React Hook Form + Zod)
- ✅ Beautiful UI with contact info cards
- ✅ Social media links
- ✅ Email address: `abiraj30@gmail.com`

## 🔑 Get Your Web3Forms Access Key

1. **Visit Web3Forms**: Go to [https://web3forms.com/](https://web3forms.com/)
2. **Sign Up**: Create a free account (no credit card required)
3. **Get Access Key**: 
   - After signing up, you'll receive an access key
   - Copy this access key
4. **Add to Environment Variables**:
   - Create a `.env` file in the root of your project
   - Add: `VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here`
   - Replace `your_access_key_here` with your actual key

## 📝 Alternative: Use the Default Key

The form currently uses a default access key that should work. If you want to use your own:

1. Get your access key from Web3Forms
2. Create `.env` file:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
3. Restart your development server

## 🚀 How It Works

1. User fills out the contact form
2. Form data is validated
3. Data is sent to Web3Forms API
4. Web3Forms sends email to `abiraj30@gmail.com`
5. Success message is shown to user

## ✨ Features

- **Free**: 250 submissions/month on free tier
- **No Backend Required**: Web3Forms handles everything
- **Secure**: Built-in spam protection
- **Reliable**: 99.9% uptime
- **Customizable**: Easy to configure email templates

## 📧 Email Configuration

Emails will be sent to: `abiraj30@gmail.com`

Subject format: `New Contact Form Message from [Name] - Portfolio`

## 🎨 Features Included

- ✅ Smooth animations (Framer Motion)
- ✅ Form validation
- ✅ Contact information cards
- ✅ Social media links
- ✅ Responsive design
- ✅ Beautiful UI with gradients
- ✅ Success/Error notifications

## 🔍 Testing

1. Fill out the contact form
2. Click "Send Message"
3. Check your email at `abiraj30@gmail.com`
4. You should receive the form submission

## 🆘 Troubleshooting

### Form not sending emails?
- Check your Web3Forms access key
- Verify your email address in the code
- Check browser console for errors
- Make sure `.env` file is in the root directory

### Getting error messages?
- Verify your access key is correct
- Check your internet connection
- Ensure Web3Forms account is active

## 📚 More Information

- Web3Forms Docs: [https://docs.web3forms.com/](https://docs.web3forms.com/)
- Web3Forms Dashboard: [https://web3forms.com/](https://web3forms.com/)

## 🎉 That's It!

Your contact form is ready to use! No backend setup required, just get your access key and you're good to go.

