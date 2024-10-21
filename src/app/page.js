"use client";

import Scene from "@/components/R3F/Scene";
import UI from "@/components/UI/UI";
import { useEffect, useState } from "react";

export default function Home() {
  const [configuration, setConfiguration] = useState({
    Case: "/case/case-cherry.glb",
    PCB: "/pcb/pcb-cherry.glb",
    Plate: "/plate/plate-cherry.glb",
    Switches: "",
    Keycaps: "",
  });

  const [colors, setColors] = useState({
    Case: "",
    PCB: "",
    Plate: "",
    Switches: "",
    Keycaps: "",
  });

  useEffect(() => {
    if (configuration.Switches == "") {
      setConfiguration((prev) => {
        return { ...prev, Keycaps: "" };
      });
    } else if (configuration.Switches.includes("cherry")) {
      setConfiguration((prev) => {
        return { ...prev, Keycaps: "/keycaps/keycaps-cherry.glb" };
      });
    } else {
      setConfiguration((prev) => {
        return { ...prev, Keycaps: "/keycaps/keycaps-choc.glb" };
      });
    }
  }, [configuration.Switches]);

  useEffect(() => {
    if (configuration.Keycaps == "") {
      setConfiguration((prev) => {
        return { ...prev, Switches: "" };
      });
    } else if (configuration.Keycaps.includes("cherry")) {
      setConfiguration((prev) => {
        return { ...prev, Switches: "/switches/switches-cherry.glb" };
      });
    } else {
      setConfiguration((prev) => {
        return { ...prev, Switches: "/switches/switches-choc.glb" };
      });
    }
  }, [configuration.Keycaps]);

  useEffect(() => {
    setColors((prev) => {
      return { ...prev, Switches: colors.Keycaps };
    });
  }, [colors.Keycaps]);

  return (
    <>
      <div className="fixed top-0 left-0 right-1/3 bottom-0 cursor-grab active:cursor-grabbing">
        <Scene colors={colors} configuration={configuration} />
      </div>
      <UI
        configuration={configuration}
        setConfiguration={setConfiguration}
        setColors={setColors}
      />
    </>
  );
}
