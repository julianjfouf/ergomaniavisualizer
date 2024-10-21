import cornev4 from "@/variants/cornev4";
import Options from "./Options";

export default function UI({ configuration, setConfiguration, setColors }) {
  return (
    <div className="absolute md:top-4 md:min-h- min-h-1/3 left-4 right-4 md:left-2/3 bottom-4 bg-black p-8">
      <div className="flex flex-row md:flex-col text-sm flex-wrap gap-4 text-white">
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
