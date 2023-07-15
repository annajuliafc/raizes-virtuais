-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_crops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sugarCane" BOOLEAN,
    "soy" BOOLEAN,
    "corn" BOOLEAN,
    "cotton" BOOLEAN,
    "coffee" BOOLEAN
);
INSERT INTO "new_crops" ("coffee", "corn", "cotton", "id", "soy", "sugarCane") SELECT "coffee", "corn", "cotton", "id", "soy", "sugarCane" FROM "crops";
DROP TABLE "crops";
ALTER TABLE "new_crops" RENAME TO "crops";
CREATE TABLE "new_farmers" (
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
    CONSTRAINT "farmers_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "crops" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_farmers" ("arableArea", "city", "createdAt", "cropId", "document", "farmName", "farmTotalArea", "id", "name", "state", "updatedAt", "vegetationArea") SELECT "arableArea", "city", "createdAt", "cropId", "document", "farmName", "farmTotalArea", "id", "name", "state", "updatedAt", "vegetationArea" FROM "farmers";
DROP TABLE "farmers";
ALTER TABLE "new_farmers" RENAME TO "farmers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
