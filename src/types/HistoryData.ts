export interface HistoryData {
  isScanned: boolean;
  createdAt: string;
  companyId: number;
  studentId: number;
  company: {
    name: string;
  };
}
