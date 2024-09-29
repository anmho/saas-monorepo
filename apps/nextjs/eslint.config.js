import baseConfig, {
  restrictEnvAccess,
} from "@saas-monorepo/eslint-config/base";
import nextjsConfig from "@saas-monorepo/eslint-config/nextjs";
import reactConfig from "@saas-monorepo/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
