import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  plugins: {
    react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Vite + React では不要
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
});
