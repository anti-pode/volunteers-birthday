export enum PopupTypes {
  Promo,
  Story,
  Personal,
}

export interface IPopup {
  id: number;
  title: string;
}

interface IPromoPopup extends IPopup {
  type: PopupTypes.Promo;
  gift: string;
  code: string;
  link: string;
  description?: string;
}

interface IPersonalPopup extends IPopup {
  type: PopupTypes.Personal;
  image: string;
  text: string;
  author: string;
  supportLink: string;
}

interface IStoryPopup extends IPopup {
  type: PopupTypes.Story;
  tag: string;
  image?: string;
  video?: string;
  text: string;
  hasSocialBlock: boolean;
  supportLink?: string;
  shareUrl?: string;
}

export interface IItem {
  id: number;
  icon: string;
  isActive: boolean;
  popup: IPromoPopup | IStoryPopup | IPersonalPopup;
}
