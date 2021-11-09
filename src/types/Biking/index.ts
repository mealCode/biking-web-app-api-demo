export type FilterBikingReqBodyTypes = {
  sorting: number;
  filter: string;
};

export type DeleteBikingReqBodyTypes = {
  _id: string;
};

export type BikingRecordTypes = {
  _id: string;
  date: Date;
  location: string;
  notes: string;
};
