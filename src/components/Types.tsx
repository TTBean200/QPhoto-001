export type SearchCriteria = {
  //query: string;
  startDate?: string;
  endDate?:  string;
}

export interface ChildProps {
  onGetSearchCriteria: (data: SearchCriteria) => void; // A function that accepts searchCriteria
}