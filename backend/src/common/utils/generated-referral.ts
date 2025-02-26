export const generateReferralCode = (): string => {
  return `${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
};

export const generateReferralLink = (userId: string): string => {
  return `https://play.google.com/store/apps/details?id=solutions.digitalumbrella.ooulet&hl=en_US&pli=1/${userId}-${generateReferralCode()}`;
};