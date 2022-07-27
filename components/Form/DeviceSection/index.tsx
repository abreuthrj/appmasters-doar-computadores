export type DeviceSectionProps = {
  index?: number;
};

export default function DeviceSection(props: DeviceSectionProps) {
  return (
    <>
      <h1 className="text-gray-300 font-bold mb-2">Device {props.index + 1}</h1>

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
    </>
  );
}
