import { users, admins } from "../../data/db.js";
import adminDashboardInit from "../admin/dashboard/dashboard.js";
import userDashboardInit from "../user/dashboard/dashboard.js";

export default function (email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    localStorage.setItem("user", user.name);
    userDashboardInit();
  } else {
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );
    if (admin) {
      localStorage.setItem("admin", admin.name);
      adminDashboardInit();
    } else {
      alert("Invalid email or password");
    }
  }
}
