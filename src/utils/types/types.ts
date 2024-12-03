import {AppDispatch, RootState} from "../../services/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export type TProduct = {
  id: string,
  categoryId: string,
  subCategoryId: string,
  title: string,
  subtitle: string,
  htmlTitle: string,
  metaDescription: string,
  metaKeywords: string,
  image: string,
  vendorCode: string,
  costByCard: number,
  cost: number,
  oldCost: number,
  hit: boolean,
  new: boolean,
  isProductOfTheDay: boolean,
  productOfTheDayLimit: number,
  newPeriodStart: string | null,
  newPeriodEnd: string | null,
  sale: boolean,
  discountActive: boolean,
  disableControl: boolean,
  isOutOfStock: boolean,
  isGift: boolean,
  isDiscountable: boolean,
  isGiftCertApplied: boolean,
  isLowCalories: boolean,
  sortIndex: number,
  isFavorite: boolean
}

export type ServerResponse<T> = {
  success: boolean;
} & T;

export type TMessageResponse = ServerResponse<{
  message: string | null;
}>

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;