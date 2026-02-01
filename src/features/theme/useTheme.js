import { useDispatch, useSelector } from "react-redux";
import { getIsDark, setActiveVariant, setTheme } from "./themeSlice";

export function useTheme() {
  const { mode, activeVariant, variants } = useSelector((state) => state.theme);
  const isDark = useSelector(getIsDark);
  const dispatch = useDispatch();

  function changeTheme(choiceMode) {
    dispatch(setTheme(choiceMode));
    localStorage.setItem("mode", choiceMode);
  }

  function selectVariant(variant) {
    dispatch(setActiveVariant(variant));
  }

  return { mode, activeVariant, variants, isDark, changeTheme, selectVariant };
}
