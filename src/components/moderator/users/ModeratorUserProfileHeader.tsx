import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { moderatorContent } from "../../../content/moderator";
import { useModeratorPermissions } from "../../../hooks/useModeratorPermissions";
import { useState } from "react";
import { ChangeUserFunctionModal } from "./ChangeUserFunctionModal";
import { parishFunctionsMock } from "../../../mocks/parishFunctionsMock";
import { ModeratorUserResetAccessModal } from "./ModeratorUserResetAccessModal";
type ModeratorUserProfileHeaderProps = {
  user: {
    profile: {
      name: string;
      function: {
        name: string;
      };
      accountStatus: string;
      login: string;
    };
  };
};

export function ModeratorUserProfileHeader({
  user,
}: ModeratorUserProfileHeaderProps) {
  const { users } = moderatorContent;
  const { hasPermission } = useModeratorPermissions();
  const [isFunctionModalOpen, setIsFunctionModalOpen] = useState(false);
  const [isResetAccessModalOpen, setIsResetAccessModalOpen] = useState(false);
  const [resetAccessResault, setResetAccessResult] = useState<{
    login: string;
    temporaryPassword: string;
  } | null>(null);
  const [selectedFunctionId, setSelectedFunctionId] = useState<number | null>(
    null,
  );
  function getAccountStatusLabel(status: string) {
    switch (status) {
      case "ACTIVE":
        return users.details.account.active;
      case "PENDING_ACTIVATION":
        return users.details.account.pendingActivation;
      default:
        return users.details.account.inactive;
    }
  }
  return (
    <>
      <div className="space-y-5">
        <Link
          to="/panel/moderator/users"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-amber-300"
        >
          <ArrowLeft className="h-4 w-4" />
          {users.details.back}
        </Link>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="font-serif text-3xl text-amber-100">
              {user.profile.name}
            </h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/60">
              <span>{user.profile.function.name}</span>
              <span>•</span>
              <span>{getAccountStatusLabel(user.profile.accountStatus)}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {hasPermission("users.manage") && (
              <button
                type="button"
                onClick={() => setIsFunctionModalOpen(true)}
                className="cursor-pointer rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white transition hover:bg-white/10"
              >
                {users.details.actions.changeFunction}
              </button>
            )}
            {hasPermission("users.password.reset") && (
              <button
                type="button"
                onClick={() => setIsResetAccessModalOpen(true)}
                className="cursor-pointer rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
              >
                {users.details.actions.resetPassword}
              </button>
            )}
          </div>
        </div>
      </div>
      {isFunctionModalOpen && (
        <ChangeUserFunctionModal
          userName={user.profile.name}
          currentFunction={user.profile.function.name}
          functions={parishFunctionsMock}
          selectedFunctionId={selectedFunctionId}
          onFunctionChange={setSelectedFunctionId}
          onClose={() => {
            setIsFunctionModalOpen(false);
            setSelectedFunctionId(null);
          }}
          onSave={() => {
            console.log("NOwa funkcja:", selectedFunctionId);
            setIsFunctionModalOpen(false);
            setSelectedFunctionId(null);
          }}
        />
      )}
      {isResetAccessModalOpen && (
        <ModeratorUserResetAccessModal
          userName={user.profile.name}
          login={user.profile.login}
          resetResult={resetAccessResault}
          onClose={() => {
            setIsResetAccessModalOpen(false);
            setResetAccessResult(null);
          }}
          onReset={() => {
            setResetAccessResult({
              login: user.profile.login,
              temporaryPassword: "LSO-4827",
            });
          }}
        />
      )}
    </>
  );
}
