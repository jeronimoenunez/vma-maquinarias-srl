export type EquipmentType =
  | "tijera"
  | "brazo_articulado"
  | "telescopico"
  | "vertical";

export type Equipment = {
  id: string;
  name: string;
  type: EquipmentType;
  maxHeightM: number; // altura máxima en metros
  power: "electrica" | "diesel";
  image?: { src: string; alt: string };
};

export type EquipmentFilters = {
  q?: string;            // búsqueda por texto
  type?: EquipmentType;  // filtro por tipo
  minHeightM?: number;   // altura mínima
};
