import cornev4 from "@/variants/cornev4";
import Options from "./Options";

export default function UI({ configuration, setConfiguration, setColors }) {
  return (
    <div className="absolute top-4 right-4 left-2/3 bottom-4 bg-black p-8">
      <div className="flex flex-col gap-4 text-white">
        {cornev4?.map((items, id) => (
          <Options
            configuration={configuration}
            setConfiguration={setConfiguration}
            setColors={setColors}
            title={items.title}
            options={items.options}
            colors={items.colors}
            key={id}
          />
        ))}
      </div>
    </div>
  );
}
