import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class FarmersController {
  static listFarmers = async (req, res) => {
    await prisma.farmer
      .findMany({
        include: {
          plantedCrops: true,
        },
      })
      .then((result) => {
        if (result != null && result.length > 0) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            message: `Nenhum produtor foi encontrado!`,
          });
        }
      })
      .catch((err) => {
        req.status(404).json({
          exception: `${err}`,
          message: "Nenhum produtor foi encontrado!",
        });
      });
  };

  static registerFarmer = async (req, res) => {
    const farmerData = req.body;
    const cropData = farmerData.plantedCrops;

    await prisma.farmer
      .create({
        data: {
          document: farmerData.document,
          name: farmerData.name,
          farmName: farmerData.farmName,
          city: farmerData.city,
          state: farmerData.state,
          farmTotalArea: farmerData.farmTotalArea,
          arableArea: farmerData.arableArea,
          vegetationArea: farmerData.vegetationArea,
          plantedCrops: {
            create: {
              sugarCane: cropData.sugarCane,
              soy: cropData.soy,
              corn: cropData.corn,
              cotton: cropData.cotton,
              coffee: cropData.coffee,
            },
          },
        },
        include: {
          plantedCrops: true,
        },
      })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(500).json({
          exception: `${err}`,
          message: `Ocorreu um erro ao cadastrar o produtor, por favor tente novamente mais tarde!`,
        });
      });
  };

  static updateFarmer = async (req, res) => {
    const farmerData = req.body;
    const farmerId = parseInt(req.params.id);
    const cropData = farmerData.plantedCrops;

    await prisma.farmer
      .update({
        where: { id: farmerId },
        data: {
          document: farmerData.document,
          name: farmerData.name,
          farmName: farmerData.farmName,
          city: farmerData.city,
          state: farmerData.state,
          farmTotalArea: farmerData.farmTotalArea,
          arableArea: farmerData.arableArea,
          vegetationArea: farmerData.vegetationArea,
          plantedCrops: {
            update: {
              sugarCane: cropData.sugarCane,
              soy: cropData.soy,
              corn: cropData.corn,
              cotton: cropData.cotton,
              coffee: cropData.coffee,
            },
          },
        },
        
        include: {
          plantedCrops: true,
        },
      })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        res.status(500).json({
          exception: `${err}`,
          message: `Ocorreu um erro ao cadastrar o produtor, por favor tente novamente mais tarde!`,
        });
      });
  };

  static deleteFarmer = async (req, res) => {
    const farmerId = parseInt(req.params.id);
    await prisma.farmer
      .delete({ where: { id: farmerId } })
      .then(() => {
        res.status(200).json({
          message: `Produtor rural deletado com sucesso!`,
        });
      })
      .catch((err) => {
        res.status(500).json({
          exception: `${err}`,
          message: `Ocorreu um erro ao cadastrar o produtor, por favor tente novamente mais tarde!`,
        });
      });
  };
}

export default FarmersController;
