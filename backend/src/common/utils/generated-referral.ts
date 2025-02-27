export const generateReferralCode = (email: string): string => {
  // Get username part of email (before @)
  const username = email.split('@')[0];
 
  // Take first 4 characters of username (or all if less than 4)
  const emailPrefix = username.slice(0, 4).toLowerCase();
 
  // Generate 4 random alphanumeric characters
  const randomPart = Math.random().toString(36).substr(2, 4).toUpperCase();
 
  // Combine them
  return `${emailPrefix}${randomPart}`;
};
 
export const generateReferralLink = (userId: string, referralCode: string): string => {
  return `https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet&hl=en_US&pli=1/${userId}/${referralCode}`;
};