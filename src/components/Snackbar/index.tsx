/**
 * Aqui você vai encontrar o snackbar responsável
 * pelo feedback do usuário
 *
 * Ele está sendo renderizado na pagina principal
 * e conta com o redux para que suas informações
 * sejam modificadas de qualquer lugar da aplicação
 */
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hideSnackAction } from "../../store/reducers/App";

export type SnackbarProps = {
  visible?: boolean;
  text?: string;
  duration?: number;
  type?: "success" | "warn" | "error";
};

export default function Snackbar({
  visible,
  text,
  duration,
  type,
}: SnackbarProps) {
  const timer = useRef(null);
  const dispatch = useDispatch();

  // Setup listeners
  useEffect(() => {
    // Setup auto-hiding behaviour
    if (visible) {
      timer.current = setTimeout(() => {
        dispatch(hideSnackAction());
      }, duration);
    }

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [visible, duration]);

  useEffect(() => {
    // If multiple snacks are triggered before
    // the actual is hidden, the time is reseted
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch(hideSnackAction());
    }, duration);
  }, [text, duration]);

  return (
    <div className="fixed bottom-0 w-full flex items-center justify-center pointer-events-none">
      <div
        className={classNames({
          "text-neutral-800 mx-auto py-2 px-4 mb-4 rounded-md shadow-md transition-all pointer-events-auto":
            true,
          "translate-y-10 opacity-0 scale-50": !visible,
          "translate-y-0 opacity-100 scale-100": visible,
          "bg-red-100": type == "error",
          "bg-green-100": type == "success",
          "bg-orange-100": type == "warn",
        })}
      >
        {text}
      </div>
    </div>
  );
}
