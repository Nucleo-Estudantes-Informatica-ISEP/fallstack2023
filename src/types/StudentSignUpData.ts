export interface StudentSignUpData {
  name: string | null;
  email: string | null;
  password: string | null;
  bio: string | null;
  interests: string[];
  cv: {
    name: string;
    id: string;
    preview: string;
  } | null;
  avatar: string | null;
  year: string | null;
}
