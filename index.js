import axios from "axios";
import templates from "./templates.json" assert { type: "json" };

const BASE = "https://api.textbee.dev/api/v1";

// ===== ORIGINAL FUNCTION (v1.0 - Unchanged) =====
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

// ===== NEW FUNCTIONS (v1.1) =====

// Get template message with variables replaced
export function getTemplate(templateName, data = {}) {
  let message = templates[templateName];

  if (!message) {
    const available = Object.keys(templates).join(", ");
    throw new Error(
      `Template '${templateName}' not found.\nAvailable templates: ${available}`
    );
  }

  // Replace all {variable} with actual values
  for (let key in data) {
    const placeholder = new RegExp(`\\{${key}\\}`, "g");
    message = message.replace(placeholder, data[key]);
  }

  return message;
}

// List all available template IDs
export function listTemplates() {
  return Object.keys(templates);
}

// Get all templates with their messages
export function getAllTemplates() {
  return templates;
}

// Send SMS using a template
export async function sendSmsWithTemplate({
  apiKey,
  deviceId,
  baseUrl = BASE,
  recipients,
  template,
  data = {},
}) {
  // Get message from template
  const message = getTemplate(template, data);

  // Send using existing sendSms function
  return await sendSms({
    apiKey,
    deviceId,
    baseUrl,
    recipients,
    message,
  });
}
