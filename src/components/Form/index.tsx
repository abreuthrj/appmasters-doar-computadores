/**
 * Aqui você vai encontrar toda a estrutura
 * que compõe o formulário
 *
 * A mesma é dividida em duas seções para
 * que o código fique mais limpo
 *
 * São elas:
 * - Dados do usuário ( PersonalSection )
 * - Dados dos equipamentos ( DeviceSection )
 *
 * A validação foi feita diretamente no front
 * de maneira que "nunca" ocorrerá o retorno 400
 *
 * Para forçar este retorno basta comentar a etapa
 * de verificação ( linha 94 ) e comentar os campos
 * do apiBody ( linha 102 )
 */
import { FormEventHandler, useState } from "react";
import DeviceSection from "./DeviceSection/index";
import PersonalSection from "./PersonalSection/index";
import useForm from "./utils/useForm";
import classNames from "classnames";
import { apiPostForm } from "../../store/api";
import { showSnackAction } from "../../store/reducers/App";
import { useStoreDispatch } from "../../store/store";

export type FormProps = {};

export default function Form(props: FormProps) {
  const [form, setForm, resetForm] = useForm();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useStoreDispatch();

  // Setup handlers
  const handleFormValidation = (): boolean => {
    type ValidatorType = {
      [k in keyof typeof form]: () => boolean;
    };

    // Define validation functions
    const validateFunctions: Partial<ValidatorType> = {
      name: () => !!form.name,
      phone: () => !!form.phone.match(/\([0-9]{2}\)\ [0-9]{5}\-[0-9]{4}/g),
      zip: () => !!form.zip.match(/[0-9]{5}\-[0-9]{3}/g),
      city: () => !!form.city,
      state: () => !!form.state,
      address: () => !!form.address,
      number: () => !!form.number,
      neighborhood: () => !!form.neighborhood,
    };

    // Run validation for each validation function
    for (let field of Object.keys(validateFunctions))
      if (!validateFunctions[field]()) {
        setForm((state) => ({
          ...state,
          validationError: { ...state.validationError, [field]: true },
        }));

        dispatch(
          showSnackAction({
            text: `${
              {
                name: "Nome",
                phone: "Telefone",
                zip: "CEP",
                city: "Cidade",
                state: "Estado",
                address: "Endereço",
                number: "Número",
                neighborhood: "Bairro",
              }[field]
            } inválido`,
            type: "error",
          })
        );

        return false;
      }

    return true;
  };

  const handleFormSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    // Handle validation and change step
    if (step < 2) {
      if (handleFormValidation()) setStep(step + 1);
      return;
    }

    // Mount api body
    const apiBody = {
      name: form.name,
      email: form.email || null,
      phone: form.phone,
      zip: form.zip,
      city: form.city,
      state: form.state,
      streetAddress: form.address,
      number: form.number,
      complement: form.complement || null,
      neighborhood: form.neighborhood,
      deviceCount: form.devices.length,
      devices: form.devices,
    };

    console.log(apiBody);

    try {
      setLoading(true);

      const { data } = await apiPostForm(apiBody);
      console.log(data);

      dispatch(
        showSnackAction({
          text: "Formulário enviado com sucesso!",
        })
      );

      // Go back to main step and empty form
      setStep(1);
      resetForm();
    } catch (err) {
      console.log(err);

      // Handle error in case of missing fields
      if (err.response?.status == 400)
        dispatch(
          showSnackAction({
            text: `Ocorreu um problema! ${err.response.data.errorMessage}`,
            type: "error",
          })
        );
      // Handle error in case of unknown cause
      else
        dispatch(
          showSnackAction({
            text: "Ocorreu um problema! Tente novamente",
            type: "error",
          })
        );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-white xl:px-16 py-16 px-4 md:rounded-md lg:max-h-[680px] max-h-max lg:overflow-y-auto overflow-y-hidden"
    >
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
