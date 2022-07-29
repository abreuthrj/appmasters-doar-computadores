import React, { useState } from "react";
import { ApiFormDeviceType } from "../../../store/types";

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
  devices: [],
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
  [get: FormType, set: React.Dispatch<React.SetStateAction<FormType>>] | null
>(null);

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [get, set] = useState(initialFormState);

  return (
    <FormContext.Provider value={[get, set]}>{children}</FormContext.Provider>
  );
}
