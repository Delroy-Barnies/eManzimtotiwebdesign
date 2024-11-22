import App from "./components/App";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/:section",
        element: <App />,
    }
];

export default routes;