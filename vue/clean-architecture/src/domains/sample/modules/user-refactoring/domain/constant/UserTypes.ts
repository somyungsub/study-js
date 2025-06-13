export const USER_TYPES = ['ADMIN', 'GENERAL'] as const;
export type UserType = typeof USER_TYPES[number];

export const GENDER = ['M', 'F'] as const;
export type Gender = typeof GENDER[number];
