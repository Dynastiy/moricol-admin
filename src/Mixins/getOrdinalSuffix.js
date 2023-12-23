export default {
  methods: {
    //   clicked(value) {
    //     alert(value);
    //   }
    getOrdinalSuffix(index) {
      const suffixes = ["th", "st", "nd", "rd"];
      const v = index % 100;

      return index + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    },
  },
};
