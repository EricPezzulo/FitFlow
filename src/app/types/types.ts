export interface UserType {
  firstName: string | undefined;
  lastName: string | undefined;
  phoneNumber?: string;
  address?: string;
  age?: number;
  profilePicture?: string | null;
  heightFt?: number;
  heightIn?: number;
  heightCm?: number;
  weightLbs?: number;
  weightKg?: number;
  bodyFatPercent?: number;
  ptPackage?: string | null;
  sessionsRemaining?: number | null;
  userId: string | number;
}
