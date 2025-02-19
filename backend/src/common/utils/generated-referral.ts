export const generateReferralCode = (): string => {
    return `REF-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
  };
  