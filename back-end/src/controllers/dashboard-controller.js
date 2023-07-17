import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class DashboardController {
  static getDashboard = async (req, res) => {
    const cropNameTranslations = {
      'cotton': 'Algodão',
      'coffee': 'Café',
      'corn': 'Milho',
      'soy': 'Soja',
      'sugarCane': 'Cana-de-açúcar',
    }

    await prisma.farmer
      .findMany({
        include: {
          plantedCrops: true,
        },
      })
      .then((result) => {
        let totalFarmersQuantity = result.length;
        let totalArableArea = 0;
        let totalFarmArea = 0;
        let totalVegetationArea = 0;
        let quantityFarmsPerState = {};
        let quantityFarmsPerCrop = {
          sugarCane: 0,
          soy: 0,
          corn: 0,
          cotton: 0,
          coffee: 0,
        };

        result.forEach((ruralProducer) => {
          totalArableArea += ruralProducer.arableArea;
          totalVegetationArea += ruralProducer.vegetationArea;
          totalFarmArea += ruralProducer.farmTotalArea;

          if (quantityFarmsPerState[ruralProducer.state]) {
            quantityFarmsPerState[ruralProducer.state]++;
          } else {
            quantityFarmsPerState[ruralProducer.state] = 1;
          }

          for (let crop in ruralProducer.plantedCrops) {
            if (ruralProducer.plantedCrops[crop] && crop != "id") {
              quantityFarmsPerCrop[crop]++;
            }
          }
        });

        let listFarmsPerState = Object.entries(quantityFarmsPerState).map(
          ([stateName, quantity]) => ({ stateName, quantity })
        );
        let listFarmPerCrop = Object.entries(quantityFarmsPerCrop).map(([cropName, quantity]) => {
          const translatedCropName = cropNameTranslations[cropName] || cropName;
          return { cropName: translatedCropName, quantity };
        });
        
        res.status(200).json({
          totalFarmersQuantity: totalFarmersQuantity,
          totalArableArea: totalArableArea,
          totalFarmArea: totalFarmArea,
          totalVegetationArea: totalVegetationArea,
          quantityFarmsPerState: listFarmsPerState,
          quantityFarmsPerCrop: listFarmPerCrop,
        });
      })
      .catch((err) => {
        res.status(500).json({
          exception: `${err}`,
          message:
            "Ocorreu um erro ao tentar buscar o dashboard! Tente novamente mais tarde!",
        });
      });
  };
}

export default DashboardController;