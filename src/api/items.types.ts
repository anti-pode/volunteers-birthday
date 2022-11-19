export const enum PopupTypes {
  Promo,
  Story,
}

export interface IPopup {
  id: number;
}

interface IPromoPopup extends IPopup {
  type: PopupTypes.Promo;
  title: string;
  gift: string;
  code: string;
  link: string;
}

interface IStoryPopup extends IPopup {
  type: PopupTypes.Story;
  title: string;
  image: string;
  text: string;
  supportLink: string;
  aboutLink: string;
}

export interface IItem {
  id: number;
  icon: string;
  isActive: boolean;
  popup: IPromoPopup | IStoryPopup;
}
