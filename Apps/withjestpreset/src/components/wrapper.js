// Component Registration
// https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
import component from './test.vue'
import temprature from 'temprature.vue'

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('MyComponent', component);
}

// Create module definition for Vue.use()
const plugin = {
	install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default {
	component,
	temprature,
	component3
}

// https://forum.vuejs.org/t/import-all-components-from-a-specific-folder/9980
// in enhancement.js
// import components from '@/components/module'

// new Vue({
// 	components : components
//  }