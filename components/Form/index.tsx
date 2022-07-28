import { FormEventHandler, useState, Fragment } from "react";
import DeviceSection from "./DeviceSection/index";
import PersonalSection from "./PersonalSection/index";
import useForm from "./utils/useForm";
import classNames from "classnames";
import axios from "axios";
import { apiPostForm } from "../../store/api";

export type FormProps = {};

export default function Form(props: FormProps) {
  const form = useForm();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    if (step < 2) return setStep(step + 1);

    const apiFields = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      zip: form.zip,
      city: form.city,
      state: form.state,
      streetAddress: form.address,
      number: form.number,
      complement: form.complement,
      neighborhood: form.neighborhood,
      deviceCount: form.devices.length,
      devices: form.devices,
    };

    console.log(apiFields);

    try {
      setLoading(true);

      const { data } = await apiPostForm(apiFields);
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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
          value={loading ? "Carregando" : step == 1 ? "Seguir" : "Confirmar"}
          disabled={loading}
          onClick={handleFormSubmit}
          className={classNames({
            "bg-blue-500 text-white p-2 rounded-md cursor-pointer active:bg-blue-600 outline-none":
              true,
            "bg-blue-200": loading,
          })}
        />
        {step > 1 && (
          <input
            type="button"
            value="Voltar"
            disabled={loading}
            onClick={() => setStep(step - 1)}
            className="bg-gray-200 text-gray-800 p-2 rounded-md cursor-pointer active:bg-gray-300 outline-none"
          />
        )}
      </div>
    </form>
  );
}
