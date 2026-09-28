import { Link } from "react-router-dom";
import { moderatorContent } from "../../../content/moderator";
import { ArrowRight } from "lucide-react";
import type { RankingBy } from "./ModeratorRankingFilters";

export type ModeratorRankingRow = {
  position: number;
  userId: number;
  name: string;
  functionName: string;
  points: {
    service: number;
    meetings: number;
    other: number;
    total: number;
  };
};

type ModeratorRankingTableProps = {
  users: ModeratorRankingRow[];
  rankingBy: RankingBy;
};

export function ModeratorRankingTable({
  users,
  rankingBy,
}: ModeratorRankingTableProps) {
  const { ranking } = moderatorContent;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {users.length === 0 ? (
        <p className="p-6 text-sm text-white/50">{ranking.empty}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
              <tr>
                <th className="px-5 py-4">{ranking.table.position}</th>
                <th className="px-5 py-4">{ranking.table.user}</th>
                <th className="px-5 py-4">{ranking.table.function}</th>
                <th className="px-5 py-4 text-right">
                  {ranking.table.service}
                </th>
                <th className="px-5 py-4 text-right">
                  {ranking.table.meetings}
                </th>
                <th className="px-5 py-4 text-right">{ranking.table.total}</th>
                <th className="px-5 py-4 text-right">
                  {ranking.table.actions}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {users.map((user) => (
                <tr key={user.userId} className="transition hover:bg-white/5">
                  <td className="px-5 py-4 font-semibold text-amber-200">
                    {user.position}
                  </td>
                  <td className="px-5 py-4 font-medium text-white">
                    {user.name}
                  </td>
                  <td className="px-5 py-4 text-white/60">
                    {user.functionName}
                  </td>
                  <td
                    className={`px-5 py-4 text-right ${
                      rankingBy === "service"
                        ? "font-semibold text-amber-200"
                        : "text-white/70"
                    }`}
                  >
                    {user.points.service}
                  </td>
                  <td
                    className={`px-5 py-4 text-right ${
                      rankingBy === "meetings"
                        ? "font-semibold text-amber-200"
                        : "text-white/70"
                    }`}
                  >
                    {user.points.meetings}
                  </td>
                  <td
                    className={`px-5 py-4 text-right ${
                      rankingBy === "total"
                        ? "font-semibold text-amber-200"
                        : "text-white/70"
                    }`}
                  >
                    {user.points.total}
                  </td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      to={`/panel/moderator/users/${user.userId}`}
                      className="inline-flex items-center gap-2 text-sm text-amber-300 transition hover:text-amber-200"
                    >
                      {ranking.table.details}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
