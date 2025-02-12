import { users, admins, currentUser } from "../../data/db.js";
import adminDashboardInit from "../admin/dashboard/dashboard.js";
import userDashboardInit from "../user/dashboard/dashboard.js";

export default function (email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    currentUser.id = user.id;
    currentUser.name = user.name;
    currentUser.role = "user";

    swal("Welcome!", "You have successfully logged in!", "success");
    userDashboardInit();
  } else {
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
      currentUser.id = admin.id;
      currentUser.name = admin.name;
      currentUser.role = "admin";
      swal("Welcome!", "You have successfully logged in!", "success");
      adminDashboardInit();
    } else {
      swal("Login Failed", "Invalid email or password", "error");
      document.getElementById("password").value = "";
    }
  }
}
