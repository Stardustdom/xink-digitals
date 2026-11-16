export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates an email address.
 * Returns an error message string if invalid, or null if valid.
 */
export function validateEmail(email: string): string | null {
  if (!email || typeof email !== "string" || !email.trim()) {
    return "Please enter your email address.";
  }
  const clean = email.trim();
  if (!clean.includes("@")) {
    return "Email must contain an '@' symbol (e.g. name@company.com).";
  }
  const parts = clean.split("@");
  if (parts.length !== 2 || !parts[0] || !parts[1]) {
    return "Please enter a valid email (e.g. name@company.com).";
  }
  if (!parts[1].includes(".")) {
    return "Email domain must include a top-level domain like .com or .in.";
  }
  if (!EMAIL_REGEX.test(clean)) {
    return "Please enter a valid email address without invalid characters.";
  }
  return null;
}

/**
 * Validates a contact phone number.
 * Ensures the phone number contains at least 10 digits and only valid telephone characters.
 * Returns an error message string if invalid, or null if valid.
 */
export function validatePhone(phone: string, required: boolean = true): string | null {
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return required ? "Please enter your contact phone number." : null;
  }
  const clean = phone.trim();
  // Allowed chars: numbers, spaces, +, -, (, ), .
  if (!/^[\d\s+\-().]{7,25}$/.test(clean)) {
    return "Phone number contains invalid characters.";
  }
  const digits = clean.replace(/\D/g, "");
  if (digits.length < 10) {
    return `Phone number must have at least 10 digits (found ${digits.length}).`;
  }
  if (digits.length > 15) {
    return "Phone number cannot exceed 15 digits.";
  }
  return null;
}
