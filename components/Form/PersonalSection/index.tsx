import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "../../../node_modules/axios/index";
import classNames from "../../../node_modules/classnames/index";
import { ZIPRequestResponse } from "../../../store/types";
import useForm from "../utils/useForm";

export default function PersonalSection() {
  const [form, setForm] = useForm();
  const [loadingZip, setLoadingZip] = useState(false);
  const numberRef = useRef(null);

  // Setup static functions
  const fetchCep = async () => {
    try {
      setLoadingZip(true);

      const { data } = await axios.get<ZIPRequestResponse>(
        `https://viacep.com.br/ws/${form.zip}/json/`
      );

      setForm((state) => ({
        ...state,
        address: data.logradouro,
        city: data.localidade,
        state: data.uf,
        neighborhood: data.bairro,
      }));

      numberRef.current?.focus();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingZip(false);
    }
  };

  // Setup handlers
  const handleInputFocus = (name: keyof typeof form) => {
    setForm((state) => ({
      ...state,
      validationError: { ...state.validationError, [name]: false },
    }));
  };

  const handleInputChange = (name: keyof typeof form, value: string) => {
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  // Setup listeners
  useEffect(() => {
    if (form.zip.length == 8) fetchCep();
  }, [form.zip]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <input
          placeholder="Nome"
          name="name"
          value={form.name}
          onFocus={() => handleInputFocus("name")}
          onChange={(evt) => handleInputChange("name", evt.target.value)}
          className={classNames({
            "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
              true,
            "border-2 border-red-200": form.validationError.name,
          })}
        />
        <input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onFocus={() => handleInputFocus("email")}
          onChange={(evt) => handleInputChange("email", evt.target.value)}
          className={classNames({
            "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
              true,
            "border-2 border-red-200": form.validationError.email,
          })}
        />
        <input
          placeholder="Telefone"
          name="phone"
          value={form.phone}
          onFocus={() => handleInputFocus("phone")}
          onChange={(evt) => handleInputChange("phone", evt.target.value)}
          className={classNames({
            "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
              true,
            "border-2 border-red-200": form.validationError.phone,
          })}
        />
      </div>

      <span className="border-b my-8"></span>

      <div className="flex flex-wrap gap-2">
        <div className="flex w-full gap-2 flex-wrap">
          <label className="relative flex items-center">
            <input
              placeholder="CEP"
              name="zip"
              value={form.zip}
              onFocus={() => handleInputFocus("zip")}
              onChange={(evt) => handleInputChange("zip", evt.target.value)}
              className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
            />
            {loadingZip && (
              <span className="absolute right-0 m-4 animate-spin border-2 w-6 h-6 rounded-full border-t-gray-500"></span>
            )}
          </label>

          <input
            placeholder="Cidade"
            name="city"
            value={form.city}
            onFocus={() => handleInputFocus("city")}
            onChange={(evt) => handleInputChange("city", evt.target.value)}
            disabled={loadingZip}
            className={classNames({
              "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
                true,
              "bg-gray-100": loadingZip,
            })}
          />
        </div>

        <div className="flex w-full gap-2 flex-wrap">
          <input
            placeholder="Estado"
            name="state"
            value={form.state}
            onFocus={() => handleInputFocus("state")}
            onChange={(evt) => handleInputChange("state", evt.target.value)}
            disabled={loadingZip}
            className={classNames({
              "p-3 bg-transparent border rounded-md outline-none text-gray-800":
                true,
              "bg-gray-100": loadingZip,
            })}
          />
          <input
            placeholder="Endereço"
            name="address"
            value={form.address}
            onFocus={() => handleInputFocus("address")}
            onChange={(evt) => handleInputChange("address", evt.target.value)}
            disabled={loadingZip}
            className={classNames({
              "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
                true,
              "bg-gray-100": loadingZip,
            })}
          />
        </div>

        <div className="flex w-full gap-2 flex-wrap">
          <input
            placeholder="Número"
            name="number"
            value={form.number}
            onFocus={() => handleInputFocus("number")}
            onChange={(evt) => handleInputChange("number", evt.target.value)}
            ref={numberRef}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          />
          <input
            placeholder="Complemento"
            name="complement"
            value={form.complement}
            onFocus={() => handleInputFocus("complement")}
            onChange={(evt) =>
              handleInputChange("complement", evt.target.value)
            }
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1"
          />
        </div>

        <input
          placeholder="Bairro"
          name="neighborhood"
          value={form.neighborhood}
          onFocus={() => handleInputFocus("neighborhood")}
          onChange={(evt) =>
            handleInputChange("neighborhood", evt.target.value)
          }
          disabled={loadingZip}
          className={classNames({
            "p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1":
              true,
            "bg-gray-100": loadingZip,
          })}
        />
      </div>
    </div>
  );
}
