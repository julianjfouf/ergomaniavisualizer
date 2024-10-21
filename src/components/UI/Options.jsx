export default function Options({
  configuration,
  setConfiguration,
  setColors,
  title = "",
  options = [""],
  colors = [""],
}) {
  return (
    <>
      {options.length > 1 || colors.length > 1 ? (
        <div className="flex flex-col text-white">
          <h3 className="pb-2 font-bold">{title}</h3>
          <div className="flex flex-col gap-2">
            {options.length > 1 ? (
              <div className="flex gap-2 items-center">
                Type:{" "}
                {options?.map((option, id) => {
                  return (
                    <div
                      className={`px-4 py-1 border text-sm border-white cursor-pointer duration-300 ${
                        configuration[title] == option?.path
                          ? `bg-white text-black`
                          : `bg-black text-white`
                      }`}
                      onClick={() =>
                        setConfiguration((prev) => {
                          if (configuration[title] == option?.path) {
                            return { ...prev, [title]: "" };
                          }
                          return { ...prev, [title]: option?.path };
                        })
                      }
                      key={id}
                    >
                      {option?.name}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {colors.length > 1 ? (
              <div className="flex gap-2 items-center">
                Colors:{" "}
                {colors?.map((color) => (
                  <div
                    onClick={() =>
                      setColors((prev) => {
                        return { ...prev, [title]: color["color"] };
                      })
                    }
                    style={{
                      backgroundColor: color["color"] || "#ffffff",
                    }}
                    className={`cursor-pointer border h-5 w-5 border-white`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
