import { PlantedCrops } from "./PlantedCrops";

export interface RuralProducer {
  id: number;
  document: string;
  name: string;
  farmName: string;
  city: string;
  state: string;
  farmTotalArea: number;
  arableArea: number;
  vegetationArea: number;
  plantedCrops: PlantedCrops;
}
