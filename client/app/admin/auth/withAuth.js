import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function withAuth(Component) {
  return function WithAuth(props) {
    const session = cookies().get("session");
    if (!session) {
      redirect("/admin/login");
    }
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
