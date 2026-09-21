import { Navigate, useParams } from "react-router-dom";
import { moderatorUsersMock } from "../../mocks/moderatorUsersMock";

export function ModeratorUserDetailsPage() {
  const { userId } = useParams();
  const user = moderatorUsersMock.find((item) => item.id === Number(userId));
  if (!user) {
    return <Navigate to="/panel/moderator/users" replace />;
  }
  return <div>{user.name}</div>;
}
