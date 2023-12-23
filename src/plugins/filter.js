import Vue from "vue";
import moment from "moment";

// Filters
Vue.filter("formatCurrency", function (value) {
  if (!value) return "";
  value = Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "NGN",
  });
  return value;
});

Vue.filter("formatDate", function (value) {
  if (!value) return "";
  let date = new Date(value);
  value = moment(String(date)).format("MMM DD, YYYY");
  return value;
});

Vue.filter("titleCase", function (inputString) {
  return inputString.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
});

Vue.filter("formatFullDate", function (value) {
  if (!value) return "";
  let date = new Date(value);
  value = moment(String(date)).format("dddd, DD MMMM, YYYY");
  return value;
});

