export interface HistoryData {
  isSaved: boolean;
  createdAt: string;
  companyId: number;
  studentId: number;
  student: {
    name: string;
    code: string;
    cv: string;
    interests: {
      name: string;
    }[];
  };
  savedBy: {
    id: number;
    company: {
      name: string;
    };
  };
}
