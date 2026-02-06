import type { Equipment, EquipmentFilters } from "./types";

export function filterEquipment(
  items: Equipment[],
  filters: EquipmentFilters
): Equipment[] {
  const q = (filters.q ?? "").trim().toLowerCase();
  const type = filters.type;
  const minHeightM = filters.minHeightM;

  return items.filter((e) => {
    const matchesQ =
      q.length === 0 ||
      e.name.toLowerCase().includes(q) ||
      e.type.toLowerCase().includes(q);

    const matchesType = !type || e.type === type;

    const matchesHeight =
      typeof minHeightM !== "number" || e.maxHeightM >= minHeightM;

    return matchesQ && matchesType && matchesHeight;
  });
}
