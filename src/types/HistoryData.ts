export interface HistoryData {
  isSaved: boolean;
  createdAt: string;
  companyId: number;
  studentId: number;
  company: {
    name: string;
  };
}
