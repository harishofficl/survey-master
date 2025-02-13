import { users, admins, currentUserStore } from "../../data/store.js";
import adminDashboardInit from "../admin/dashboard/dashboard.js";
import userDashboardInit from "../user/dashboard/dashboard.js";

export default async function (email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    currentUserStore.setState({
      id: user.id,
      name: user.name,
      role: "user",
    });

    swal("Welcome!", "You have successfully logged in!", "success").then(() => {
      userDashboardInit();
    });
  } else {
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
      currentUserStore.setState({
        id: admin.id,
        name: admin.name,
        role: "admin",
      });

      swal("Welcome!", "You have successfully logged in!", "success").then(
        () => {
          adminDashboardInit();
        }
      );
    } else {
      swal("Login Failed", "Invalid email or password", "error");
      document.getElementById("password").value = "";
    }
  }
}
