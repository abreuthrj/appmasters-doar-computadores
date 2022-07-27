import { FormEventHandler, useState, Fragment } from "react";
import DeviceSection from "./DeviceSection/index";
import PersonalSection from "./PersonalSection/index";

export type FormProps = {};

export default function Form(props: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [deviceCount, setDeviceCount] = useState(1);

  const handleFormSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-md">
      <div className="flex flex-col gap-2">
        <PersonalSection
          onNameChange={(name) => setName(name)}
          onEmailChange={(email) => setName(email)}
          onPhoneChange={(phone) => setName(phone)}
        />

        <input
          placeholder="Equipments"
          type="number"
          min={1}
          onChange={(evt) => setDeviceCount(evt.target.valueAsNumber)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
        />
      </div>

      <span className="block border-b my-6 border-gray-100 w-full"></span>

      <div className="flex flex-col gap-2">
        {Array(deviceCount)
          .fill(1)
          .map((_, i) => (
            <Fragment key={`device-section-${i}`}>
              <DeviceSection index={i} />
              {i < deviceCount - 1 && (
                <span className="block border-b my-6 border-gray-100 w-full"></span>
              )}
            </Fragment>
          ))}
      </div>

      <div className="flex flex-col mt-5 gap-2">
        <input
          type="submit"
          value={"Confirmar"}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer active:bg-blue-600 outline-none"
        />
        {/* <input
          type="button"
          value="Cancelar"
          className="bg-gray-200 text-gray-800 p-2 rounded-md cursor-pointer active:bg-gray-300 outline-none"
        /> */}
      </div>
    </form>
  );
}
