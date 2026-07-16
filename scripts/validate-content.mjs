export const requiredExactCopy = [
  "Letters from Cyrus",
  "Letters for men carrying silent weight—and for the women who stand with them.",
  "Sent two to three times each week.",
  "Move from emotional shutdown to calm, steady leadership—so your children never have to recover from you.",
  "By subscribing, you agree to receive Letters from Cyrus two to three times each week. Unsubscribe at any time. Read the Privacy Policy.",
  "There is no public call-booking link. Invitations are based on the scorecard results and whether the Audit appears appropriate.",
];

export const prohibitedPublicCopy = [
  "Words from Cyrus",
  "Book a Call",
  "Apply Now",
  "Book your free discovery call",
  "Unlock your potential",
  "Become the best version of yourself",
  "Transform your life",
  "Start your journey",
  "Step into your power",
  "Game-changing",
  "Revolutionary",
];

export function findMissingCopy(content, expected = requiredExactCopy) {
  return expected.filter((text) => !content.includes(text));
}

export function findProhibitedCopy(content, prohibited = prohibitedPublicCopy) {
  return prohibited.filter((text) => content.includes(text));
}
