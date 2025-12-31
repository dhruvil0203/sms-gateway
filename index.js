import axios from "axios";

const BASE = process.env.BASE;

export async function sendSms({
  apiKey,
  deviceId,
  baseUrl = BASE,
  recipients,
  message,
}) {
  const to = Array.isArray(recipients) ? recipients : [recipients];

  const { data } = await axios.post(
    `${baseUrl}/gateway/devices/${deviceId}/send-sms`,
    { recipients: to, message },
    { headers: { "x-api-key": apiKey } }
  );
  return data;
}
