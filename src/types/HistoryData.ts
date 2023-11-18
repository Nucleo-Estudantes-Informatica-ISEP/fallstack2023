export interface HistoryData {
  isSaved: boolean;
  createdAt: string;
  companyId: number;
  studentId: number;
  company?: {
    name: string;
  };
  student: {
    name: string;
    code: string;
    cv: string;
    interests: {
      name: string;
    }[];
  };
}
