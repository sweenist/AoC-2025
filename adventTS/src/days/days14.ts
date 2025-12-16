type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path | null {
  function recurse(shop: Workshop | Gift | undefined, currentPath: Path) : Path |null {
    if (shop && typeof shop === "object") {
      for (const key of Object.keys(shop)) {
        const value = shop[key];
        const newPath = [...currentPath, key];
        if (value === gift) return newPath;
        if (typeof value === "object") {
          const result = recurse(value, newPath);
          if (result) return result;
        }
      }
    }
    return null;
  }

  return recurse(workshop, []) ?? [];
}

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

export const result = findGiftPath(workshop, "barf");
