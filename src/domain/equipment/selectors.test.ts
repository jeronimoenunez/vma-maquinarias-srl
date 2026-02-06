import { describe, it, expect } from "vitest";
import { filterEquipment } from "@/domain/equipment/selectors";
import type { Equipment } from "@/domain/equipment/types";

const items: Equipment[] = [
  { id: "1", name: "Tijera 12m", type: "tijera", maxHeightM: 12, power: "electrica" },
  { id: "2", name: "Telescópico 18m", type: "telescopico", maxHeightM: 18, power: "diesel" },
];

describe("filterEquipment", () => {
  it("filtra por texto", () => {
    const r = filterEquipment(items, { q: "tijera", type: undefined, minHeightM: undefined });
    expect(r).toHaveLength(1);
    expect(r[0].id).toBe("1");
  });

  it("filtra por tipo", () => {
    const r = filterEquipment(items, { q: "", type: "telescopico", minHeightM: undefined });
    expect(r).toHaveLength(1);
    expect(r[0].id).toBe("2");
  });

  it("filtra por altura mínima", () => {
    const r = filterEquipment(items, { q: "", type: undefined, minHeightM: 15 });
    expect(r).toHaveLength(1);
    expect(r[0].id).toBe("2");
  });
});
