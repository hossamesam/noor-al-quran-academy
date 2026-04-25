export type Language = 'ar' | 'en';
export type UserRole = 'Parent' | 'Teacher' | 'Supervisor';
export type View = 'Home' | 'Profile' | 'Login' | 'Signup' | 'ForgotPassword' | 'Schedule' | 'MeetingRoom' | 'Messages' | 'RegisterTeacherM' | 'RegisterTeacherF' | 'RegisterSupervisorM' | 'RegisterSupervisorF';

export interface Child {
  id: string;
  name: string;
  email: string;
  password?: string;
  progress: number;
}

export interface DetailedChild extends Child {
  history: { date: string; subject: string; grade: string; notes: string }[];
  schedule: { day: string; time: string; subject: string; teacher: string }[];
}
