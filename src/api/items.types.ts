export enum PopupTypes {
  Statistic,
  Story,
}

export type StatisticItem = {
  title: string;
  text: string;
};

export interface IStatisticPopup {
  type: PopupTypes.Statistic;
  items: StatisticItem[];
}

export interface IStoryPopup {
  type: PopupTypes.Story;
  title: string;
  text: string;
  image?: string | null;
  video?: string | null;
}

export interface IItem {
  year: number;
  text?: string | null;
  popup?: IStatisticPopup | IStoryPopup | null;
}

export interface IInfo {
  title: string;
  subtitle: string;
  text: string;
  items: IItem[];
}
