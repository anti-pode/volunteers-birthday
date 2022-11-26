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

interface IStoryPopupBasic extends IPopup {
  type: PopupTypes.Story;
  image?: string;
  text: string;
  hasSocialBlock: boolean;
}

interface IStoryPopupShare extends IStoryPopupBasic {
  supportLink?: never;
  shareUrl?: string;
}

interface IStoryPopupSupport extends IStoryPopupBasic {
  supportLink: string;
  shareUrl?: never;
}

type IStoryPopup = IStoryPopupShare | IStoryPopupSupport;

export interface IItem {
  id: number;
  icon: string;
  isActive: boolean;
  popup: IPromoPopup | IStoryPopup | IPersonalPopup;
}
