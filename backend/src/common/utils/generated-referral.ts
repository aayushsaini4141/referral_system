export const generateReferralCode = (): string => {
  return `REF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
};

export const generateReferralLink = (userId: string): string => {
  return `http://localhost:4000/graphql/${userId}-${generateReferralCode()}`;
};