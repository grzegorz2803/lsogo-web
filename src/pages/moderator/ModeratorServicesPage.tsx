import { useState } from "react";

import type {
  ServiceCategory,
  Weekday,
  WeeklyMass,
} from "../../types/moderatorServices";

import { moderatorContent } from "../../content/moderator";
import { weeklyMassesMock } from "../../mocks/moderatorServices";

import { ServicesTabs } from "../../components/moderator/services/ServicesTabs";
import { WeeklyMassSchedule } from "../../components/moderator/services/WeeklyMassSchedule";

import {
  WeeklyMassModal,
  type WeeklyMassFormValues,
} from "../../components/moderator/services/WeeklyMassModal";

type MassActionTarget = {
  mass: WeeklyMass;
  weekday: Weekday;
};

type MassEditScope = "single" | "all";

export default function ModeratorServicesPage() {
  const content = moderatorContent.services;
  const deleteContent = content.weeklyMass.deleteConfirmation;
  const editScopeContent = content.weeklyMass.editScope;

  const [activeTab, setActiveTab] = useState<ServiceCategory>("wekly_mass");

  const [masses, setMasses] = useState<WeeklyMass[]>(weeklyMassesMock);

  const [isMassModalOpen, setIsMassModalOpen] = useState(false);

  const [editingMass, setEditingMass] = useState<WeeklyMass | null>(null);

  const [massToDelete, setMassToDelete] = useState<WeeklyMass | null>(null);

  const [massEditTarget, setMassEditTarget] = useState<MassActionTarget | null>(
    null,
  );

  const [massEditScope, setMassEditScope] = useState<MassEditScope | null>(
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

  function handleSelectEditScope(scope: MassEditScope) {
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

  function confirmDeleteMass(scope: MassEditScope) {
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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">{content.title}</h1>
        <p className="mt-2 text-sm text-white/50">{content.description}</p>
      </div>
      <ServicesTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "wekly_mass" ? (
        <WeeklyMassSchedule
          masses={masses}
          onAdd={handleAddMass}
          onEdit={handleEditMass}
          onDelete={handleDeleteMass}
        />
      ) : (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm text-white/50">Do przygotowania</p>
        </div>
      )}
      {massEditTarget && massEditScope === null && !isMassModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="mass-edit-scope-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
          >
            <h2
              id="mass-edit-scope-title"
              className="text-xl font-semibold text-white"
            >
              {editScopeContent.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              {editScopeContent.descriptionStart}{" "}
              {massEditTarget.mass.weekdays.length}{" "}
              {editScopeContent.descriptionEnd}
            </p>
            <div className="mt-6 space-y-3">
              <button
                type="button"
                onClick={() => handleSelectEditScope("single")}
                className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white transition hover:border-amber-400/50 hover:bg-white/10"
              >
                {editScopeContent.single}{" "}
                <span className="font-semibold text-amber-400">
                  {content.weekdays[massEditTarget.weekday]}
                </span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectEditScope("all")}
                className="w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white transition hover:border-amber-400/50 hover:bg-white/10"
              >
                {editScopeContent.all}
              </button>
            </div>
            <button
              type="button"
              onClick={() => setMassEditTarget(null)}
              className="mt-5 cursor-pointer text-sm text-white/50 transition hover:text-white"
            >
              {editScopeContent.cancel}
            </button>
          </div>
        </div>
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
      {massToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-mass-title"
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080e25] p-6 shadow-2xl"
          >
            <h2
              id="delete-mass-title"
              className="text-xl font-semibold text-white"
            >
              {deleteContent.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              {deleteContent.description}{" "}
              <span className="font-semibold text-white">
                {massToDelete.time}
              </span>
              ?
            </p>
            <p className="mt-3 text-sm text-amber-400">
              {deleteContent.warning} ({massToDelete.weekdays.length}
              ).
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => confirmDeleteMass("single")}
                className="cursor-pointer rounded-xl borderb border-red-500/40 px-5 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
              >
                {deleteContent.single}{" "}
                {massDeleteTarget && content.weekdays[massDeleteTarget.weekday]}
              </button>

              {massToDelete && massToDelete.weekdays.length > 1 && (
                <button
                  type="button"
                  onClick={() => confirmDeleteMass("all")}
                  className="cursor-pointer rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-400"
                >
                  {deleteContent.all}
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setMassToDelete(null);
                  setMassDeleteTarget(null);
                }}
                className="cursor-pointer rounded-xl px-5 py-3 text-sm text-white/60 transition hover:text-white"
              >
                {deleteContent.cancel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
