import { users, admins, currentUser } from "../../data/db.js";
import adminDashboardInit from "../admin/dashboard/dashboard.js";
import userDashboardInit from "../user/dashboard/dashboard.js";

export default function (email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    currentUser = {
      id: user.id,
      name: user.name,
      role: "user",
    }
    userDashboardInit();
  } else {
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );
    if (admin) {
      currentUser = {
        id: admin.id,
        name: admin.name,
        role: "admin",
      }
      adminDashboardInit();
    } else {
      alert("Invalid email or password");
    }
  }
}
