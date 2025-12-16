type Gift = string | number | boolean
type Workshop = Record<string, any>
type Path = string[]

function findGiftPath(workshop: Workshop, gift: Gift): Path {

  function recurse(rNode: string, shop: Workshop, currentPath: Path, gift: Gift) {
    if (shop[rNode] === gift) return path;

    const newShopOrGift = shop[rNode];
    currentPath.push(rNode);

    if (typeof newShopOrGift === 'object') {
      const newPath = [...currentPath];
      Object.keys(newShopOrGift).forEach((sg) => {
        return recurse(sg, newShopOrGift, newPath, gift)
      })
    }
    else {

    }
  }

  const visited = new Set<string>();
  const stack = Object.keys(workshop);
  const path: Path = [];

  while (stack.length) {
    const node = stack.pop()!;
    visited.add(node);)
    path.push(node);
    return recurse(node, path, gift)
  }
}