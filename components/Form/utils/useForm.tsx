import { useContext, useState } from "react";
import { FormContext } from "./FormProvider";

export default function useForm() {
  const form = useContext(FormContext);

  return form;
}
