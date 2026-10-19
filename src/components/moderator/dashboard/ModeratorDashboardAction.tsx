import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ModeratorDaschboardActionProps = {
  to: string;
  label: string;
};

export function ModeratorDaschboardAction({
  to,
  label,
}: ModeratorDaschboardActionProps) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
