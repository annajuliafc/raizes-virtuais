import { PlantedCrops } from "./PlantedCrops";
import { States } from "./States";

export interface RuralProducer {
  id: number;
  document: string;
  name: string;
  farmName: string;
  city: string;
  state: States[];
  farmTotalArea: number;
  arableArea: number;
  vegetationArea: number;
  plantedCrops: PlantedCrops;
}
