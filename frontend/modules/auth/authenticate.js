import { users, admins, currentUserStore } from "../../data/store.js";
import { loadPage } from "../../js/routing.js";

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
      loadPage(`user`); // user dashboard
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
          loadPage(`admin`); // admin dashboard
        }
      );
    } else {
      swal("Login Failed", "Invalid email or password", "error").then(() => {
        const passwordInput = document.getElementById("password");
        passwordInput.value = "";
        passwordInput.focus();
      });
    }
  }
}
