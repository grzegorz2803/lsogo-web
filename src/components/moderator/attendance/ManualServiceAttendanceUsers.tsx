import { useState } from "react";
import { moderatorContent } from "../../../content/moderator";

type AttendanceUser = {
  id: number;
  name: string;
  functionName: string;
  functionCode: string;
};

type ManualServiceAttendanceUsersProps = {
  users: AttendanceUser[];
  selectedUserIds: number[];
  onToggleUser: (userId: number) => void;
};

export function ManualServiceAttendanceUsers({
  users,
  selectedUserIds,
  onToggleUser,
}: ManualServiceAttendanceUsersProps) {
  const { manualService } = moderatorContent.attendance;
  const content = manualService.users;

  const [search, setSearch] = useState("");
  const [selectedFunction, setSelectedFunction] = useState("all");

  const functions = Array.from(
    new Map(
      users.map((user) => [
        user.functionCode,
        {
          code: user.functionCode,
          name: user.functionName,
        },
      ]),
    ).values(),
  ).sort((a, b) => a.name.localeCompare(b.name, "pl"));

  const filteredUsers = users
    .filter((user) => {
      const matchesSearch = user.name
        .toLocaleLowerCase("pl")
        .includes(search.trim().toLocaleLowerCase("pl"));

      const matchesFunction =
        selectedFunction === "all" || user.functionCode === selectedFunction;
      return matchesSearch && matchesFunction;
    })
    .sort((a, b) => a.name.localeCompare(b.name, "pl"));

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-white">{content.title}</h3>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="service-user-search"
              className="text-sm text-white/60"
            >
              {content.search}
            </label>
            <input
              id="service-user-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={content.searchPlaceholder}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none placeholder:text-white/30"
            />
          </div>
          <div>
            <label
              htmlFor="service-user-function"
              className="text-sm text-white/60"
            >
              {content.function}
            </label>
            <select
              id="service-user-function"
              value={selectedFunction}
              onChange={(event) => setSelectedFunction(event.target.value)}
              className="mt-2 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-white outline-none"
            >
              <option value="all">{content.allFunctions}</option>
              {functions.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-left">
            <thead className="border-b border-white/10 bg-white/10">
              <tr className="text-xs uppercase tracking-wider text-white/40">
                <th className="px-5 py-4 font-medium">{content.table.user}</th>
                <th className="px-5 py-4 font-medium">
                  {content.table.function}
                </th>
                <th className="px-5 py-4 font-medium">
                  {content.table.attendance}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                const isSelected = selectedUserIds.includes(user.id);
                return (
                  <tr
                    key={user.id}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-sm font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-5 py-4 text-sm text-white/60">
                      {user.functionName}
                    </td>
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => onToggleUser(user.id)}
                        className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition ${
                          isSelected
                            ? "border-emerald-400/30 bg-emerald-400/15 text-emerald-300"
                            : "border-white/10 text-white/60 hover:border-emerald-400/30 hover:text-emerald-300"
                        }`}
                      >
                        {content.table.present}
                      </button>
                    </td>
                  </tr>
                );
              })}
              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="px-5 py-10 text-center text-sm text-white/50"
                  >
                    {content.empty}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
