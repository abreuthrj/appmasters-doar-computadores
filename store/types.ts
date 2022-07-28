export type ApiStatusResponseType = {
  alive: boolean;
};

export type ApiFormDeviceType = {
  type: "notebook" | "desktop" | "netbook" | "screen" | "printer" | "scanner";
  condition: "working" | "notWorking" | "broken";
};

export type ApiFormRequestType = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  city: string;
  state: string;
  streetAddress: string;
  number: string;
  complement: string;
  neighborhood: string;
  deviceCount: number;
  devices: ApiFormDeviceType[];
};

export type ApiFormResponseType = {};

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
