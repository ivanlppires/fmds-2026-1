import router from '../router';
import { createPinia } from 'pinia';
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue'

// Plugins
import vuetify from './vuetify'
// @ts-expect-error Missing declaration file for local JavaScript plugin module.
import firebaseApp from './firebase.js';

export function registerPlugins(app: App) {
    app.use(createPinia());
    app.use(firebaseApp);
    app.use(vuetify)
    app.use(router);
}