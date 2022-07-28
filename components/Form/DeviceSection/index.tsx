import { Fragment, useEffect, useState } from "react";
import useForm from "../utils/useForm";

export default function DeviceSection() {
  const form = useForm();
  const [deviceCount, setDeviceCount] = useState(1);

  // Setup handlers
  const handleChangeDeviceType = (
    index: number,
    key: string,
    value: string
  ) => {
    const copy = [...form.devices];
    copy[index][key] = value;
    form.setDevices([...copy]);
  };

  // Setup listeners
  useEffect(() => {
    if (deviceCount < form.devices.length)
      form.setDevices(form.devices.slice(0, deviceCount));
    else
      form.setDevices(
        form.devices.concat([
          {
            type: "notebook",
            condition: "working",
          },
        ])
      );
  }, [deviceCount]);

  return (
    <div className="flex flex-col gap-2">
      <label className="w-full">
        <span className="text-black">Quantidade</span>
        <input
          placeholder="Equipamentos"
          type="number"
          min={1}
          onChange={(evt) => setDeviceCount(evt.target.valueAsNumber)}
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

          {i < deviceCount - 1 && (
            <span className="block border-b my-6 border-gray-100 w-full"></span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
