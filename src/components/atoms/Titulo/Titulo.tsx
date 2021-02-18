import React, { FC } from 'react';
import styles from './Titulo.module.scss';

type Props = {
    children: string
}

const Titulo: FC<Props> = ({ children }) => (
  <div className={styles.title}>
    <h1>{children}</h1>
  </div>
);

export default Titulo;

// module.exports = {
//     env: {
//       browser: true,
//       es2021: true,
//       node: true
//     },
//     extends: [
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react/recommended'
//     ],
//     parser: '@typescript-eslint/parser',
//     parserOptions: {
//       ecmaFeatures: {
//         jsx: true
//       },
//       ecmaVersion: 12,
//       sourceType: 'module'
//     },
//     plugins: [
//       'react',
//       '@typescript-eslint'
//     ],
//     rules: {
//       'no-unused-vars': 0,
//       'react/prop-types': ['off'],
//     },
//     settings: {
//       "react": {
//         "version": "detect"
//       }
//     }
//   }
