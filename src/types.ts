export type Language = 'ar' | 'en';
export type UserRole = 'Parent' | 'Child' | 'Teacher' | 'Supervisor';
export type View = 'Home' | 'Profile' | 'Login' | 'Signup' | 'ForgotPassword' | 'Schedule' | 'MeetingRoom' | 'Messages' | 'RegisterTeacherM' | 'RegisterTeacherF' | 'RegisterSupervisorM' | 'RegisterSupervisorF';

export interface Child {
  id: string;
  name: string;
  email: string;
  password?: string;
  progress: number;
}

export interface DetailedChild extends Child {
  plan?: string;
  expiryDate?: string;
  history: { date: string; subject: string; grade: string; notes: string }[];
  schedule: { day: string; time: string; subject: string; teacher: string }[];
}
