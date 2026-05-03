import CallHub from "./callHub";

export default {
    install(Vue) {
        CallHub.start();
        Vue.prototype.$callhub = CallHub;
    }
};