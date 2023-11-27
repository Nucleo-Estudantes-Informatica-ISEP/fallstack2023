export interface StudentsWithEmail {
  user: {
    email: string;
  };
  id: number;
  code: string;
  name: string;
  bio: string | null;
  year: string;
  cv: string | null;
  linkedin: string | null;
}
