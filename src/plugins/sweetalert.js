import Vue from 'vue'

// vue-sweetalert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2, {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
  reverseButtons: false,
  buttonsStyling: true,
  customClass: {
    confirmButton: "tw-bg-green-600 tw-text-white tw-py-3",
    cancelButton: "tw-bg-red-600 tw-text-white tw-py-3",
  },
});

export default VueSweetalert2