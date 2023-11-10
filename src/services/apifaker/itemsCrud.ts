// api.ts

interface Item {
  id: number;
  name: string;
  description: string;
  quantity: number;
  category: string;
  images: string[]; // Array de URLs das imagens
}

const items: Item[] = JSON.parse(localStorage.getItem("items") || "[]");

export function createItem(itemData: {
  name: string;
  description: string;
  quantity: number;
  category: string;
  images: string[];
}): { success: boolean; message?: string } {
  const newItem: Item = {
    id: items.length + 1,
    ...itemData,
  };
  items.push(newItem);
  updateLocalStorage();
  return { success: true };
}

export function readItems(): Item[] {
  return items;
}

export function updateItem(
  itemId: number,
  updatedItemData: {
    name: string;
    description: string;
    quantity: number;
    category: string;
    images: string[];
  }
): { success: boolean; message?: string } {
  const existingItem = items.find((item) => item.id === itemId);
  if (!existingItem) {
    return { success: false, message: "Item not found" };
  }

  // Atualiza as propriedades do item
  Object.assign(existingItem, updatedItemData);
  updateLocalStorage();
  return { success: true };
}

export function deleteItem(itemId: number): {
  success: boolean;
  message?: string;
} {
  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) {
    return { success: false, message: "Item not found" };
  }

  // Remove o item do array
  items.splice(itemIndex, 1);
  updateLocalStorage();
  return { success: true };
}

function updateLocalStorage(): void {
  localStorage.setItem("items", JSON.stringify(items));
}
