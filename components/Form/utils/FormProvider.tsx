import React, { useState } from "react";
import { ApiFormDeviceType } from "../../../store/types";

export type FormType = {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  zip: string;
  setZip: (zip: string) => void;
  city: string;
  setCity: (city: string) => void;
  state: string;
  setState: (state: string) => void;
  address: string;
  setAddress: (address: string) => void;
  number: string;
  setNumber: (number: string) => void;
  complement: string;
  setComplement: (complement: string) => void;
  neighborhood: string;
  setNeighborhood: (neighborhood: string) => void;
  devices: ApiFormDeviceType[];
  setDevices: (devices: ApiFormDeviceType[]) => void;
};

export const FormContext = React.createContext<FormType | null>(null);

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [devices, setDevices] = useState([]);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        zip,
        setZip,
        city,
        setCity,
        state,
        setState,
        address,
        setAddress,
        number,
        setNumber,
        complement,
        setComplement,
        neighborhood,
        setNeighborhood,
        devices,
        setDevices,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
