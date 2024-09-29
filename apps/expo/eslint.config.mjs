import baseConfig from "@saas-monorepo/eslint-config/base";
import reactConfig from "@saas-monorepo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
