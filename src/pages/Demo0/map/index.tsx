import { useLayoutEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { geoMercator } from "d3-geo";
import { gsap } from "gsap";
import type { CityGeoJSON } from "@/types/map";
import BaseMap from "./baseMap";
import OutLine from "./outline";
import FlyLine from "./flyLine";

import yongzhouMapData from "@/assets/yongzhou.json";

const data = yongzhouMapData as CityGeoJSON;

export default function Index() {
  const camera = useThree((state) => state.camera);

  const projection = useMemo(() => {
    return geoMercator()
      .center(data.features[0].properties.centroid)
      .scale(10000)
      .translate([0, 0]);
  }, []);

  useLayoutEffect(() => {
    const tween = gsap.fromTo(
      camera.position,
      { x: 0, y: 50, z: 50 },
      { x: 0, y: 50, z: 50, duration: 0.01 }
    );

    return () => {
      tween.kill();
    };
  }, [camera]);

  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={2.0}>
      <Center top>
        <BaseMap projection={projection} />
        <OutLine projection={projection} />
        <FlyLine projection={projection} />
      </Center>
    </group>
  );
}
