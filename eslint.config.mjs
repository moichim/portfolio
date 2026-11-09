import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([{
    extends: [...nextCoreWebVitals],

    rules: {
        "react/no-unescaped-entities": 0,

        // New react-hooks v6 rules introduced with eslint-config-next 16.
        // Downgraded to warnings for pre-existing patterns; fix separately.
        "react-hooks/set-state-in-effect": "warn",
        "react-hooks/refs": "warn",
    },
}]);