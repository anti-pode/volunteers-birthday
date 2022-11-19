export const enum PopupTypes {
  Promo,
  Story,
}

interface IPopup {
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

export interface IItems {
  id: number;
  icon: string;
  isActive: boolean;
  popup: IPromoPopup | IStoryPopup;
}
