export const enum PopupTypes {
  Promo,
  Story,
  Personal,
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
  description?: string;
}

interface IPersonalPopup extends IPopup {
  type: PopupTypes.Personal;
  title: string;
  image: string;
  text: string;
  author: string;
  supportLink: string;
}

interface IStoryPopupBasic extends IPopup {
  type: PopupTypes.Story;
  title: string;
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
