import { Fragment, useState } from "react";

export default function DeviceSection() {
  const [deviceCount, setDeviceCount] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <input
        placeholder="Equipments"
        type="number"
        min={1}
        onChange={(evt) => setDeviceCount(evt.target.valueAsNumber)}
        className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
      />

      {Array(deviceCount)
        .fill(1)
        .map((_, i) => (
          <Fragment key={`device-section-${i}`}>
            <h1 className="text-gray-300 font-bold mb-2">Device {i + 1}</h1>

            <input
              placeholder="Type"
              name="deviceType"
              className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
            />

            <input
              placeholder="Condition"
              name="deviceCondition"
              className="p-3 bg-transparent border rounded-md outline-none text-gray-800"
            />
            {i < deviceCount - 1 && (
              <span className="block border-b my-6 border-gray-100 w-full"></span>
            )}
          </Fragment>
        ))}
    </div>
  );
}
