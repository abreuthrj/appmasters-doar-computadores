import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";
import useForm from "../utils/useForm";

export type ZIPRequestResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export default function PersonalSection() {
  const form = useForm();
  const [loadingZip, setLoadingZip] = useState(false);

  const fetchCep = async () => {
    try {
      const { data } = await axios.get<ZIPRequestResponse>(
        `viacep.com.br/ws/${form.zip}/json/`
      );

      form.setAddress(data.logradouro);
      form.setComplement(data.complemento);
      form.setNeighborhood(data.bairro);
    } catch (err) {}
  };

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
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
        />
        <input
          placeholder="E-mail"
          name="email"
          value={form.email}
          onChange={(evt) => form.setEmail(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
        />
        <input
          placeholder="Telefone"
          name="phone"
          value={form.phone}
          onChange={(evt) => form.setPhone(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
        />
      </div>

      <span className="border-b my-8"></span>

      <div className="flex flex-wrap gap-2">
        <div className="flex w-full gap-2">
          <input
            placeholder="CEP"
            name="zip"
            value={form.zip}
            onChange={(evt) => form.setZip(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          />
          <input
            placeholder="Cidade"
            name="city"
            value={form.city}
            onChange={(evt) => form.setCity(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800 w-full"
          />
        </div>

        <div className="flex w-full gap-2">
          <input
            placeholder="Estado"
            name="state"
            value={form.state}
            onChange={(evt) => form.setState(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          />
          <input
            placeholder="Endereço"
            name="address"
            value={form.address}
            onChange={(evt) => form.setAddress(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800 w-full"
          />
        </div>

        <div className="flex w-full gap-2">
          <input
            placeholder="Número"
            name="number"
            value={form.number}
            onChange={(evt) => form.setNumber(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          />
          <input
            placeholder="Complemento"
            name="complement"
            value={form.complement}
            onChange={(evt) => form.setComplement(evt.target.value)}
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800 w-full"
          />
        </div>

        <input
          placeholder="Bairro"
          name="neighborhood"
          onChange={(evt) => form.setNeighborhood(evt.target.value)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800 w-full"
        />
      </div>
    </div>
  );
}
