import adminDashboardInit from "../modules/admin/dashboard/dashboard.js";
import userDashboardInit from "../modules/user/dashboard/dashboard.js";
import loginInit from "../modules/auth/login.js";
import structInit from "../utils/struct-init.js";

// creates header and main tag in the body
await structInit();

loginInit();

// adminDashboardInit();

// userDashboardInit();
