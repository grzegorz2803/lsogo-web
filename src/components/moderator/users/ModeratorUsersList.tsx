import {
  moderatorFunctionsMock,
  moderatorUsersMock,
} from "../../../mocks/moderatorUsersMock";
import { moderatorContent } from "../../../content/moderator";
import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export function ModeratorUsersList() {
  const { users } = moderatorContent;
  const [search, setSearch] = useState("");
  const [functionFilter, setFunctionFilter] = useState("ALL");
  const filteredUsers = moderatorUsersMock.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFunction =
      functionFilter === "ALL" || user.function.code === functionFilter;

    return matchesSearch && matchesFunction;
  });

  return (
    <>
      <div className="space-y-4 ">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={users.search.placeholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-amber-300/50"
            />
          </div>
          <select
            value={functionFilter}
            onChange={(event) => setFunctionFilter(event.target.value)}
            className="min-w-48 cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300/50"
          >
            <option value="ALL">{users.filters.all}</option>
            {moderatorFunctionsMock.map((userFunction) => (
              <option key={userFunction.id} value={userFunction.code}>
                {userFunction.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-white/10 bg-white/5">
              <tr className="text-sm text-white/60">
                <th className="px-5 py-4 font-medium">{users.table.user}</th>
                <th className="px-5 py-4 font-medium">
                  {users.table.function}
                </th>
                <th className="px-5 py-4 font-medium">{users.table.points}</th>
                <th className="px-5 py-4 font-medium">
                  {users.table.attendance}
                </th>
                <th className="px-5 py-4 text-right font-medium">
                  {users.table.actions}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="transition hover:bg-white/5">
                    <td className="px-5 py-4 font-medium text-white">
                      {user.name}
                    </td>
                    <td className="px-5 py-4 text-white/70">
                      {user.function.name}
                    </td>
                    <td className="px-5 py-4 text-white/70">{user.points}</td>
                    <td className="px-5 py-4  text-white/70">
                      {user.attendanceRate}%
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        to={`/panel/moderator/users/${user.id}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
                      >
                        {users.action.details}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-sm text-white/50"
                  >
                    {users.empty}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
