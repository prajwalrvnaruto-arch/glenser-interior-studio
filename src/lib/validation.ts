/**
 * Shared client-side validation helpers for the enquiry + quote forms.
 * Kept in one place so both forms surface identical, on-brand messages.
 */

/** Indian mobile number: 10 digits starting 6–9, optionally with +91 / 91 / 0 prefix. */
const MOBILE_ONLY_RE = /^[6-9]\d{9}$/;
const MOBILE_WITH_PREFIX_RE = /^(?:0|91)[6-9]\d{9}$/;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Returns a human message when the phone value is filled but invalid, else "". */
export function invalidPhoneMessage(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (!MOBILE_ONLY_RE.test(digits) && !MOBILE_WITH_PREFIX_RE.test(digits)) {
    return "Enter a valid 10-digit mobile number, e.g. +91 98450 12345.";
  }
  return "";
}

/** Returns a human message when the email value is filled but invalid, else "". */
export function invalidEmailMessage(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return "";
  if (!EMAIL_RE.test(trimmed)) return "Enter a valid email address, e.g. you@example.com.";
  return "";
}