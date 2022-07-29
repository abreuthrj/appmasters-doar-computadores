/**
 * Esta é a seção do dispositivo e conta
 * com um input de quantidade
 *
 * Lista os dispositivos com base no array
 * do form context
 */
import { Fragment } from "react";
import useForm from "../utils/useForm";

export default function DeviceSection() {
  const [form, setForm] = useForm();

  // Setup handlers
  const handleChangeDeviceType = (
    index: number,
    key: string,
    value: string
  ) => {
    // Generate a devices copy, change it's key value
    // and update it
    const copy = [...form.devices];
    copy[index][key] = value;
    setForm((form) => ({ ...form, devices: [...copy] }));
  };

  const handleDeviceCountChange = (value: number) => {
    // Remove from array if decreased count
    if (value < form.devices.length) {
      setForm((form) => ({
        ...form,
        devices: form.devices.slice(0, value),
      }));
    }
    // Push new device if increased count
    else if (value > form.devices.length) {
      setForm((form) => ({
        ...form,
        devices: form.devices.concat([
          {
            type: "notebook",
            condition: "working",
          },
        ]),
      }));
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="w-full">
        <span className="text-black">Quantidade</span>
        <input
          placeholder="Equipamentos"
          type="number"
          min={1}
          value={form.devices.length}
          onChange={(evt) => handleDeviceCountChange(evt.target.valueAsNumber)}
          className="p-3 bg-transparent border rounded-md outline-none text-gray-800 w-full"
        />
      </label>

      <span className="block border-b my-6 border-gray-100 w-full"></span>

      {form.devices.map((device, i) => (
        <Fragment key={`device-section-${i}`}>
          <h1 className="text-gray-300 font-bold mb-2">Equipamento {i + 1}</h1>

          <select
            placeholder="Tipo"
            name="deviceType"
            value={device.type}
            onChange={(evt) =>
              handleChangeDeviceType(i, "type", evt.target.value)
            }
            className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
          >
            <option value="notebook">Notebook</option>
            <option value="desktop">Desktop</option>
            <option value="netbook">Netbook</option>
            <option value="screen">Monitor</option>
            <option value="printer">Impressora</option>
            <option value="scanner">Scanner</option>
          </select>

          <div className="flex flex-col gap-2">
            <label>
              <input
                type="radio"
                name={`deviceCondition-${i}`}
                value="working"
                onChange={(evt) =>
                  handleChangeDeviceType(i, "condition", evt.target.value)
                }
                checked={device.condition == "working"}
              />
              <span className="text-black ml-2">
                Tem todas as partes, liga e funciona normalmente
              </span>
            </label>

            <label>
              <input
                type="radio"
                name={`deviceCondition-${i}`}
                value="notWorking"
                onChange={(evt) =>
                  handleChangeDeviceType(i, "condition", evt.target.value)
                }
                checked={device.condition == "notWorking"}
              />
              <span className="text-black ml-2">
                Tem todas as partes, mas não liga mais
              </span>
            </label>

            <label>
              <input
                type="radio"
                name={`deviceCondition-${i}`}
                value="broken"
                onChange={(evt) =>
                  handleChangeDeviceType(i, "condition", evt.target.value)
                }
                checked={device.condition == "broken"}
              />
              <span className="text-black ml-2">
                Faltam peças, funciona só as vezes ou está quebrado
              </span>
            </label>
          </div>

          {i < form.devices.length - 1 && (
            <span className="block border-b my-6 border-gray-100 w-full"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
