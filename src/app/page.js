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
      <div className="fixed top-0 left-0 right-0 md:right-1/3 bottom-1/3 md:bottom-0 cursor-grab active:cursor-grabbing flex">
        <p className="text-red-500 max-w-lg w-full text-xs absolute top-4 left-1/2 -translate-x-1/2 px-4">
          DISCLAIMER: The product you receive may not be identical to the
          product you see in the simulator. This visualizer serves the purpose of giving you a good idea of
          what you are purchasing, please ask the store owner about any questions
          you may have about the product.
        </p>
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
