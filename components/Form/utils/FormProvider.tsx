/**
 * Este provider foi desenvolvido para servir
 * o propósito de um código mais limpo
 *
 * Aqui você vai encontrar o estado inicial do form
 * assim como a sua tipagem
 *
 * Eu poderia ter construido um form dinamico ou
 * usado alguma lib, mas preferi pro mostrar conhecimentos
 * em context, já que a aplicação conta somente com um
 * formulário
 */
import React, { useState } from "react";
import { ApiFormDeviceType } from "../../../store/types";

// Initial form declarations
export type FormType = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  state: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  devices: ApiFormDeviceType[];
  validationError: Partial<Record<keyof FormType, boolean>>;
};

const initialFormState: FormType = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  city: "",
  state: "",
  address: "",
  number: "",
  complement: "",
  neighborhood: "",
  devices: [
    {
      type: "desktop",
      condition: "working",
    },
  ],
  validationError: {
    name: false,
    email: false,
    phone: false,
    zip: false,
    city: false,
    state: false,
    address: false,
    number: false,
    complement: false,
    neighborhood: false,
  },
};

export const FormContext = React.createContext<
  | [
      get: FormType,
      set: React.Dispatch<React.SetStateAction<FormType>>,
      reset: () => void
    ]
  | null
>(null);

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [get, set] = useState(initialFormState);

  // Reset the form state
  const reset = () => {
    set({ ...initialFormState });
  };

  return (
    <FormContext.Provider value={[get, set, reset]}>
      {children}
    </FormContext.Provider>
  );
}
