# TextBee SMS Dispatch

Send SMS messages programmatically using your Android phone as a gateway.

## Installation

```bash
npm i sms-dispatch
```

## Setup

### 1. Install the Android App

Download the TextBee.dev APK from [https://textbee.dev](https://textbee.dev) and install it on your Android phone.

### 2. Generate API Key

1. Open the TextBee app
2. Tap **"Generate API Key / Get Started"**
3. Copy the API key

![Generate QR](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Generate.jpeg)

### 3. Register (Optional)

- Enter a **Device ID** (optional—auto-assigned if blank)
- Paste your **API Key**
- Tap **"UPDATE"**

![Register](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Register.jpeg)

## ⚠️ Important Warnings

- **The TextBee app MUST remain installed** on your Android device for the service to work
- **Uninstalling the app will break the SMS functionality** immediately
- **Keep the app running** in the background
- **Stable internet connection required** on your Android device
- **Active SIM card required** to send SMS messages

## Usage

```javascript
// Import required dependencies
import "dotenv/config";
import { sendSms } from "sms-dispatch";

// Main function to send SMS
async function sendData() {
  try {
    // Send SMS using your Android device as a gateway
    const result = await sendSms({
      apiKey: process.env.TEXTBEE_KEY, // Your API key from the app
      deviceId: process.env.TEXTBEE_DEVICE, // Your device ID
      recipients: ["+1234567890"], // Phone numbers with country code
      message: "Hello from TextBee!", // Your message content
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

**Important:** Add `.env` to your `.gitignore` to keep credentials safe.

## How It Works

1. Your code calls the TextBee API with your API key
2. The API routes the message to your registered Android device
3. The TextBee app sends the SMS through your SIM card
4. You receive a confirmation response

## Pricing

- **Free tier:** 50 SMS per day
- **Upgrades:** Available in-app for higher volumes

No credit card required to start!

---

Start sending SMS in Mili-Seconds 📱✉️
