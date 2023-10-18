import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/bookReducer";

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector 