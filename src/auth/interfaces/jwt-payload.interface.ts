export type AuthType = 'ADMIN' | 'LEARNER';

export interface JwtPayload {
  sub: string;
  authType: AuthType;
  schoolId: string | null;

  role?: string;
  learnerTypeId?: string;
}
