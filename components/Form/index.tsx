import { FormEventHandler, useState, Fragment } from "react";
import DeviceSection from "./DeviceSection/index";
import PersonalSection from "./PersonalSection/index";
import useForm from "./utils/useForm";
import classNames from "classnames";

export type FormProps = {};

export default function Form(props: FormProps) {
  const form = useForm();
  const [step, setStep] = useState(1);

  const handleFormSubmit: FormEventHandler = (evt) => {
    evt.preventDefault();

    if (step < 2) return setStep(step + 1);

    return setStep(1);
  };

  return (
    <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-md">
      <div
        className={classNames({
          "flex flex-col gap-2": true,
          hidden: step == 2,
        })}
      >
        <PersonalSection />
      </div>

      <div
        className={classNames({
          "flex flex-col gap-2": true,
          hidden: step == 1,
        })}
      >
        <DeviceSection />
      </div>

      <div className="flex flex-col mt-5 gap-2">
        <input
          type="submit"
          value={step == 1 ? "Seguir" : "Confirmar"}
          onClick={handleFormSubmit}
          className="bg-blue-500 text-white p-2 rounded-md cursor-pointer active:bg-blue-600 outline-none"
        />
        {step > 1 && (
          <input
            type="button"
            value="Voltar"
            onClick={() => setStep(step - 1)}
            className="bg-gray-200 text-gray-800 p-2 rounded-md cursor-pointer active:bg-gray-300 outline-none"
          />
        )}
      </div>
    </form>
  );
}
