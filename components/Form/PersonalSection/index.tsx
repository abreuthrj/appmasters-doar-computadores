import { ChangeEventHandler } from "react";

export type PersonalSectionProps = {
  onNameChange: (name: string) => void;
  onEmailChange: (email: string) => void;
  onPhoneChange: (phone: string) => void;
};

export default function PersonalSection(props: PersonalSectionProps) {
  return (
    <>
      <input
        placeholder="Nome"
        name="name"
        onChange={(evt) => props.onNameChange(evt.target.value)}
        className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
      />
      <input
        placeholder="E-mail"
        name="email"
        onChange={(evt) => props.onEmailChange(evt.target.value)}
        className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
      />
      <input
        placeholder="Telefone"
        name="phone"
        onChange={(evt) => props.onPhoneChange(evt.target.value)}
        className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
      />
    </>
  );
}
