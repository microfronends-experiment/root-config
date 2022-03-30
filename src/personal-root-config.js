import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@personal/react-app",
  app: () => System.import("@personal/react-app"),
  activeWhen: ["/"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/employee"],
});

registerApplication({
  name: "@personal/department-vue",
  app: () => System.import("@personal/department-vue"),
  activeWhen: ["/department"],
});

start({
  urlRerouteOnly: true,
});
