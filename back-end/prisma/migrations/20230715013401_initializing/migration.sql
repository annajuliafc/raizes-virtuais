-- CreateTable
CREATE TABLE "farmers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "document" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "farmName" TEXT NOT NULL,
    "farmTotalArea" INTEGER NOT NULL,
    "arableArea" INTEGER NOT NULL,
    "vegetationArea" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cropId" INTEGER NOT NULL,
    CONSTRAINT "farmers_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "crops" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "crops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sugarCane" BOOLEAN NOT NULL,
    "soy" BOOLEAN NOT NULL,
    "corn" BOOLEAN NOT NULL,
    "cotton" BOOLEAN NOT NULL,
    "coffee" BOOLEAN NOT NULL
);
