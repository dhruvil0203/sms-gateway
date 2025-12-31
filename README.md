# TextBee SMS Gateway

Send SMS messages programmatically using your Android phone as a gateway.

## Installation

```bash
npm i @dhruvil02/sms-gateway
```

## Setup

### 1. Install the Android App

Download the TextBee.dev APK from [https://textbee.dev](https://textbee.dev) and install it on your Android phone.

### 2. Generate API Key

1. Open the TextBee app
2. Tap **"Generate API Key / Get Started"**
3. Copy the API key

![Generate](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Generate.jpeg)

### 3. Register (Optional)

- Enter a **Device ID** (optional - will auto-assign if blank)
- Paste your **API Key**
- Tap **"UPDATE"**

![Register](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Register.jpeg)

## Usage

```javascript
import "dotenv/config";
import { sendSms } from "textbee-sms-js";

async function sendData() {
  try {
    const result = await sendSms({
      apiKey: process.env.TEXTBEE_KEY,
      deviceId: process.env.TEXTBEE_DEVICE,
      recipients: ["+1234567890"],
      message: "Hello from TextBee!",
    });

    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

sendData();
```

Create a `.env` file:

```env
TEXTBEE_KEY=your_api_key_here
TEXTBEE_DEVICE=your_device_id_here
```

**Important:** Add `.env` to your `.gitignore` to keep your credentials secure.

## How It Works

1. Your code sends a request to the TextBee API with your API key
2. The API routes the message to your registered Android device
3. The TextBee app on your phone sends the SMS through your SIM card
4. You receive a confirmation response

Your phone acts as an SMS gateway, giving you full control over your messaging infrastructure.

## Pricing

- **Free Tier:** 50 SMS per Day
- **Upgrades:** Available in the app for higher volumes

No credit card required to start!

---

**That's it! Start sending SMS in minutes. 📱✉️**
