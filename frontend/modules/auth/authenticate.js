import { users, admins, currentUserStore } from "../../data/store.js";
import adminDashboardInit from "../admin/dashboard/dashboard.js";
import userDashboardInit from "../user/dashboard/dashboard.js";

export default function (email, password) {
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    currentUserStore.subscribe(userDashboardInit);

    swal("Welcome!", "You have successfully logged in!", "success").then(() => {
      userDashboardInit();
    });

    currentUserStore.setState({
      id: user.id,
      name: user.name,
      role: "user",
    });
    
  } else {
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (admin) {
      currentUserStore.subscribe(adminDashboardInit);

      swal("Welcome!", "You have successfully logged in!", "success").then(
        () => {
          adminDashboardInit();
        }
      );

      currentUserStore.setState({
        id: admin.id,
        name: admin.name,
        role: "admin",
      });
    } else {
      swal("Login Failed", "Invalid email or password", "error");
      document.getElementById("password").value = "";
    }
  }
}
