import wrap from '@vue/web-component-wrapper';
import helloWorld from './helloWorld';
import myComponent from './myComponent';

const VUECOMPONENTS = [
    helloWorld,
    myComponent
]

// eslint-disable-next-line
const testPlugin = options => console.log(process.env.NODE_ENV, options)

const install = Vue => {
    if (install.installed) return;
    install.installed = true;
    Object.assign(Vue.prototype, {
        $testPlugin: testPlugin
    })
    VUECOMPONENTS.map(e => window.customElements.define(e.name, wrap(Vue, e)));
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export {
    install as default
}