-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_crops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sugarCane" BOOLEAN DEFAULT false,
    "soy" BOOLEAN DEFAULT false,
    "corn" BOOLEAN DEFAULT false,
    "cotton" BOOLEAN DEFAULT false,
    "coffee" BOOLEAN DEFAULT false
);
INSERT INTO "new_crops" ("coffee", "corn", "cotton", "id", "soy", "sugarCane") SELECT "coffee", "corn", "cotton", "id", "soy", "sugarCane" FROM "crops";
DROP TABLE "crops";
ALTER TABLE "new_crops" RENAME TO "crops";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
