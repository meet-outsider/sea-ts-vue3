import {createPinia} from 'pinia';
import piniaPluginPersist from "pinia-plugin-persist";

export const pinia = createPinia();
pinia.use(piniaPluginPersist)
