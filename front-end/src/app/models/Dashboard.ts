import { QuantityFarmsPerCrop } from "./QuantityFarmsPerCrop";
import { QuantityFarmsPerState } from "./QuantityFarmsPerState";

export interface Dashboard {
  totalFarmersQuantity: number;
  totalFarmArea: number;
  totalArableArea: number;
  totalVegetationArea: number;
  quantityFarmsPerState: QuantityFarmsPerState[];
  quantityFarmsPerCrop: QuantityFarmsPerCrop[];
}
