import { useMemo, useState } from "react";
import type { Equipment, EquipmentFilters, EquipmentType } from "@/domain/equipment/types";
import { filterEquipment } from "@/domain/equipment/selectors";

type Props = {
  items: Equipment[];
};

const TYPE_OPTIONS: { value: EquipmentType; label: string }[] = [
  { value: "tijera", label: "Tijera" },
  { value: "brazo_articulado", label: "Brazo articulado" },
  { value: "telescopico", label: "Telescópico" },
  { value: "vertical", label: "Vertical" },
];

export default function EquipmentFilter({ items }: Props) {
  const [filters, setFilters] = useState<EquipmentFilters>({
    q: "",
    type: undefined,
    minHeightM: undefined,
  });

  const results = useMemo(() => filterEquipment(items, filters), [items, filters]);

  return (
  <div className="eqFilter">
    <div className="eqControls">
      {/* <input
        className="eqInput"
        placeholder="Buscar (ej: tijera, 12m, telescópico...)"
        value={filters.q ?? ""}
        onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
      /> */}

      {/* <select
        className="eqInput"
        value={filters.type ?? ""}
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            type: (e.target.value || undefined) as EquipmentType | undefined,
          }))
        }
      >
        <option value="">Tipo</option>
        {TYPE_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select> */}

      {/* <input
        className="eqInput"
        type="number"
        placeholder="Altura mín (m)"
        value={filters.minHeightM ?? ""}
        onChange={(e) =>
          setFilters((f) => ({
            ...f,
            minHeightM: e.target.value === "" ? undefined : Number(e.target.value),
          }))
        }
      /> */}
    </div>

    <div className="eqResults">
      {results.map((e) => (
        <div key={e.id} className="eqCardItem">
          <strong>{e.name}</strong>
          <div className="eqMeta">
            Tipo: {e.type} · Altura: {e.maxHeightM}m · Energía: {e.power}
          </div>
        </div>
      ))}

      {results.length === 0 && (
        <div className="eqEmpty">No hay equipos que coincidan con esos filtros.</div>
      )}
    </div>
  </div>
);

}
