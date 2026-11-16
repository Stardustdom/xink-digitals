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
    return "Email domain must include an extension like .com or .in.";
  }
  const domainParts = parts[1].split(".");
  const tld = domainParts[domainParts.length - 1];
  if (!tld || tld.length < 2) {
    return "Email domain must end with a valid domain extension.";
  }
  if (!EMAIL_REGEX.test(clean)) {
    return "Please enter a valid email address without invalid characters.";
  }
  return null;
}

/**
 * Validates a contact phone number.
 * Strict rules:
 * - Empty check (returns error if required, null if optional)
 * - Only valid phone characters: digits, space, +, -, (, ), .
 * - Indian numbers (+91 or starting with 91): exactly 10 digits after +91 (total 12 digits)
 * - Local numbers (without +): exactly 10 digits
 * - Other international numbers with '+': between 10 and 13 digits
 * - Numbers over or under the required digits are clearly reported.
 * Returns an error message string if invalid, or null if valid.
 */
export function validatePhone(phone: string, required: boolean = true): string | null {
  if (!phone || typeof phone !== "string" || !phone.trim()) {
    return required ? "Please enter your contact phone number." : null;
  }
  const clean = phone.trim();

  // Check for alphabetic letters
  if (/[a-zA-Z]/.test(clean)) {
    return "Phone number cannot contain alphabetic letters.";
  }

  // Allowed chars: numbers, spaces, +, -, (, ), .
  if (!/^[\d\s+\-().]+$/.test(clean)) {
    return "Phone number contains invalid characters (only digits, +, -, () allowed).";
  }

  const digits = clean.replace(/\D/g, "");

  // If phone starts with +91 or starts with 91 followed by standard Indian mobile digits
  if (clean.startsWith("+91") || (digits.startsWith("91") && digits.length >= 11)) {
    const national = digits.startsWith("91") ? digits.slice(2) : digits;
    if (national.length < 10) {
      return `Indian mobile number must be 10 digits (currently ${national.length} digits after +91).`;
    }
    if (national.length > 10) {
      return `Indian mobile number cannot exceed 10 digits (found ${national.length} digits after +91).`;
    }
    return null;
  }

  // Without '+' prefix: local 10-digit number
  if (!clean.startsWith("+")) {
    if (digits.length < 10) {
      return `Phone number must be 10 digits (currently ${digits.length}).`;
    }
    if (digits.length > 10) {
      return `Local phone number should be 10 digits (found ${digits.length}). For international, prefix with '+' (e.g. +91).`;
    }
    return null;
  }

  // Other international phone numbers with '+' prefix
  if (digits.length < 10) {
    return `Phone number must be at least 10 digits (currently ${digits.length}).`;
  }
  if (digits.length > 13) {
    return `International phone numbers cannot exceed 13 digits (found ${digits.length} digits).`;
  }

  return null;
}
