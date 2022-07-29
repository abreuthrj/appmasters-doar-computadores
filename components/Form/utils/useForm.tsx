/**
 * O useForm é apenas uma versão mais limpa
 * do useContext
 */
import { useContext } from "react";
import { FormContext } from "./FormProvider";

export default function useForm() {
  const form = useContext(FormContext);

  return form;
}
