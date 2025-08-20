import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/**
 *
 * very long multiline comment
 *
 *
*/

const foo = `
very
long
multi
line
string
`;

export default defineConfig({
  plugins: [react()],
})
