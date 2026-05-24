import { Suspense } from "react";
import Cloud from "./cloud";
import Base from "./base";
import Bottom from "./bottom";
import type { CityGeoJSON } from "@/types/map";

import yongzhouMapData from "@/assets/yongzhou.json";
import yongzhouOutlineData from "@/assets/yongzhou_outline.json";

const mapData = yongzhouMapData as CityGeoJSON,
  outlineData = yongzhouOutlineData as CityGeoJSON;

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Cloud />

      <Base data={mapData} outlineData={outlineData} />

      <Bottom />
    </Suspense>
  );
}
