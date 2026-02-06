import type { Equipment } from "@/domain/equipment/types";

export const equipmentCatalog: Equipment[] = [
  {
    id: "tijera-8e",
    name: "Tijera eléctrica 8m",
    type: "tijera",
    maxHeightM: 8,
    power: "electrica",
  },
  {
    id: "tijera-12d",
    name: "Tijera diésel 12m",
    type: "tijera",
    maxHeightM: 12,
    power: "diesel",
  },
  {
    id: "articulado-16d",
    name: "Brazo articulado 16m",
    type: "brazo_articulado",
    maxHeightM: 16,
    power: "diesel",
  },
  {
    id: "telescopico-20d",
    name: "Telescópico 20m",
    type: "telescopico",
    maxHeightM: 20,
    power: "diesel",
  },
];
