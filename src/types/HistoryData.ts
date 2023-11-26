export interface HistoryData {
  isSaved: boolean;
  createdAt: string;
  studentId: number;
  savedById: number;
  savedBy: {
    company?: {
      name: string;
    };
    student?: {
      name: string;
    };
  };
}
