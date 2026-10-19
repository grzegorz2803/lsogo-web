import { useState } from "react";

import type { Weekday, WeeklyMass } from "../../../types/moderatorServices";

import { weeklyMassesMock } from "../../../mocks/moderatorServices";

import { WeeklyMassSchedule } from "./WeeklyMassSchedule";

import { WeeklyMassModal, type WeeklyMassFormValues } from "./WeeklyMassModal";

import {
  WeeklyMassEditScopeModal,
  type MassActionScope,
} from "./WeeklyMassEditScopeModal";

import { WeeklyMassDeleteModal } from "./WeeklyMassDeleteModal";

type MassActionTarget = {
  mass: WeeklyMass;
  weekday: Weekday;
};

export default function WeeklyMassManager() {
  const [masses, setMasses] = useState<WeeklyMass[]>(weeklyMassesMock);

  const [isMassModalOpen, setIsMassModalOpen] = useState(false);

  const [editingMass, setEditingMass] = useState<WeeklyMass | null>(null);

  const [massToDelete, setMassToDelete] = useState<WeeklyMass | null>(null);

  const [massEditTarget, setMassEditTarget] = useState<MassActionTarget | null>(
    null,
  );

  const [massEditScope, setMassEditScope] = useState<MassActionScope | null>(
    null,
  );

  const [massDeleteTarget, setMassDeleteTarget] =
    useState<MassActionTarget | null>(null);

  function handleAddMass() {
    setEditingMass(null);
    setMassEditTarget(null);
    setMassEditScope(null);
    setIsMassModalOpen(true);
  }

  function handleEditMass(mass: WeeklyMass, weekday: Weekday) {
    setMassEditTarget({ mass, weekday });
    if (mass.weekdays.length === 1) {
      setEditingMass(mass);
      setMassEditScope("all");
      setIsMassModalOpen(true);
      return;
    }
    setEditingMass(null);
    setMassEditScope(null);
    setIsMassModalOpen(false);
  }

  function handleSelectEditScope(scope: MassActionScope) {
    if (!massEditTarget) return;

    setMassEditScope(scope);

    if (scope === "single") {
      setEditingMass({
        ...massEditTarget.mass,
        weekdays: [massEditTarget.weekday],
      });
    } else {
      setEditingMass(massEditTarget.mass);
    }
    setIsMassModalOpen(true);
  }

  function handleSaveMass(values: WeeklyMassFormValues) {
    if (editingMass) {
      if (
        massEditScope === "single" &&
        massEditTarget &&
        massEditTarget.mass.weekdays.length > 1
      ) {
        setMasses((current) => {
          const nextId =
            current.reduce((maxId, mass) => Math.max(maxId, mass.id), 0) + 1;

          return [
            ...current.map((mass) =>
              mass.id === massEditTarget.mass.id
                ? {
                    ...mass,
                    weekdays: mass.weekdays.filter(
                      (day) => day !== massEditTarget.weekday,
                    ),
                  }
                : mass,
            ),
            {
              id: nextId,
              ...values,
              weekdays: [massEditTarget.weekday],
            },
          ];
        });
      } else {
        setMasses((current) =>
          current.map((mass) =>
            mass.id === editingMass.id ? { ...mass, ...values } : mass,
          ),
        );
      }
    } else {
      setMasses((current) => {
        const nextId =
          current.reduce((maxId, mass) => Math.max(maxId, mass.id), 0) + 1;
        return [
          ...current,
          {
            id: nextId,
            ...values,
          },
        ];
      });
    }
    setIsMassModalOpen(false);
    setEditingMass(null);
    setMassEditTarget(null);
    setMassEditScope(null);
  }

  function handleDeleteMass(mass: WeeklyMass, weekday: Weekday) {
    setMassDeleteTarget({ mass, weekday });
    setMassToDelete(mass);
  }

  function confirmDeleteMass(scope: MassActionScope) {
    if (!massDeleteTarget) return;

    const { mass: targetMass, weekday } = massDeleteTarget;

    setMasses((current) => {
      if (scope === "all") {
        return current.filter((mass) => mass.id !== targetMass.id);
      }
      return current.flatMap((mass) => {
        if (mass.id !== targetMass.id) {
          return [mass];
        }

        const remainingWeekdays = mass.weekdays.filter(
          (day) => day !== weekday,
        );
        if (remainingWeekdays.length === 0) {
          return [];
        }
        return [
          {
            ...mass,
            weekdays: remainingWeekdays,
          },
        ];
      });
    });
    setMassDeleteTarget(null);
    setMassToDelete(null);
  }

  function handleCloseModal() {
    setIsMassModalOpen(false);
    setEditingMass(null);
    setMassEditTarget(null);
    setMassEditScope(null);
  }

  return (
    <>
      <WeeklyMassSchedule
        masses={masses}
        onAdd={handleAddMass}
        onEdit={handleEditMass}
        onDelete={handleDeleteMass}
      />
      {massEditTarget && massEditScope === null && !isMassModalOpen && (
        <WeeklyMassEditScopeModal
          mass={massEditTarget.mass}
          weekday={massEditTarget.weekday}
          onSelect={handleSelectEditScope}
          onClose={() => setMassEditTarget}
        />
      )}
      {isMassModalOpen && (
        <WeeklyMassModal
          key={editingMass?.id ?? "new"}
          mass={editingMass}
          singleWeekday={
            massEditScope === "single" ? massEditTarget?.weekday : undefined
          }
          onClose={handleCloseModal}
          onSave={handleSaveMass}
        />
      )}
      {massToDelete && massDeleteTarget && (
        <WeeklyMassDeleteModal
          mass={massToDelete}
          weekday={massDeleteTarget.weekday}
          onConfirm={confirmDeleteMass}
          onClose={() => {
            setMassToDelete(null);
            setMassDeleteTarget(null);
          }}
        />
      )}
    </>
  );
}
