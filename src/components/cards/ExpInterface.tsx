export type ResumeExperienceDetails = string | string[];

export interface ResumeSummary {
  name: string;
  url?: string;
  location: string;
}
export interface ResumeAchievement {
  title: string;
  startDate: string;
  endDate: string;
  details: string;
}
