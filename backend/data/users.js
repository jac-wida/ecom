import bcrpt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrpt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jac wida",
    email: "jacwida@example.com",
    password: bcrpt.hashSync("123456", 10),
  },
  {
    name: "jac wule",
    email: "jacwule@example.com",
    password: bcrpt.hashSync("123456", 10),
  },
];

export default users;
