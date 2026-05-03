import moment from "moment";
import Vue from "vue";

export default () => {
    Vue.filter("date", (d) => moment(d).format());
};