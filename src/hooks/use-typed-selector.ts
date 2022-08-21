import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// Get the type of component from redux store.
export const useTypedSelector:  TypedUseSelectorHook<RootState> = useSelector; 