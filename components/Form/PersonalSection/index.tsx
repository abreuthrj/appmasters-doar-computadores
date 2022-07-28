import { useEffect, useRef, useState } from "react";
import axios from "../../../node_modules/axios/index";
import classNames from "../../../node_modules/classnames/index";
import { ZIPRequestResponse } from "../../../store/types";
import useForm from "../utils/useForm";

export default function PersonalSection() {
  const form = useForm();
  const [loadingZip, setLoadingZip] = useState(false);
  const numberRef = useRef(null);

  // Setup static functions
  const fetchCep = async () => {
    try {
      setLoadingZip(true);

      const { data } = await axios.get<ZIPRequestResponse>(
        `https://viacep.com.br/ws/${form.zip}/json/`
      );

      form.setAddress(data.logradouro);
      form.setCity(data.localidade);
      form.setState(data.uf);
      form.setNeighborhood(data.bairro);

      numberRef.current?.focus();
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingZip(false);
    }
  };

  // Setup handlers
  const 

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
          onChange={(evt) => form.setName(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1"
        />
        <input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={(evt) => form.setEmail(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1"
        />
        <input
          placeholder="Telefone"
          name="phone"
          value={form.phone}
          onChange={(evt) => form.setPhone(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1"
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
              onChange={(evt) => form.setZip(evt.target.value)}
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
            onChange={(evt) => form.setCity(evt.target.value)}
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
            onChange={(evt) => form.setState(evt.target.value)}
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
            onChange={(evt) => form.setAddress(evt.target.value)}
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
            onChange={(evt) => form.setNumber(evt.target.value)}
            ref={numberRef}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          />
          <input
            placeholder="Complemento"
            name="complement"
            value={form.complement}
            onChange={(evt) => form.setComplement(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800 flex-1"
          />
        </div>

        <input
          placeholder="Bairro"
          name="neighborhood"
          value={form.neighborhood}
          onChange={(evt) => form.setNeighborhood(evt.target.value)}
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
