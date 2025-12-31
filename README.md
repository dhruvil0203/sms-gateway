# TextBee SMS Gateway

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
2. Tap **“Generate API Key / Get Started”**
3. Copy the API key

![Generate QR](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Generate.jpeg)

### 3. Register (Optional)

- Enter a **Device ID** (optional—auto-assigned if blank)
- Paste your **API Key**
- Tap **“UPDATE”**

![Register](https://raw.githubusercontent.com/dhruvil0203/sms-gateway/main/public/Register.jpeg)

## Usage

<!-- one-click copy wrapper -->
<div align="right">
  <button onclick="copyCode()">📋 Copy</button>
</div>

<!-- the actual code block -->

```javascript
import "dotenv/config";
import { sendSms } from "sms-dispatch";

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

**Important:** add `.env` to your `.gitignore` to keep credentials safe.

## How It Works

1. Your code calls the TextBee API with your API key
2. The API routes the message to your registered Android device
3. The TextBee app sends the SMS through your SIM card
4. You receive a confirmation response

## Pricing

- **Free tier:** 50 SMS per day
- **Upgrades:** available in-app for higher volumes  
  No credit card required to start!

---

Start sending SMS in minutes 📱✉️

<!-- copy helper -->
<script>
function copyCode() {
  const code = document.querySelector('pre code').textContent;
  navigator.clipboard.writeText(code).then(() => alert('Code copied!'));
}
</script>
