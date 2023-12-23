<template>
  <div>
    <div class="tw-flex tw-flex-col tw-gap-4">
      <div>
        <h4 class="tw-mb-0 tw-text-gray-900 tw-font-bold tw-text-xl">
          Overview
        </h4>
        <h6 class="tw-mb-0 tw-text-gray-500 tw-text-sm">
          {{ date | formatFullDate }}
        </h6>
      </div>

      <div class="tw-bg-white tw-rounded-lg tw-flex">
        <div
          v-for="(value, name) of cardsData"
          :key="name"
          class="tw-w-full tw-px-8 tw-py-5 card-container"
        >
          <div class="tw-flex tw-flex-col tw-gap-3">
            <div class="tw-flex tw-justify-between">
              <span
                class="tw-block tw-rounded-lg tw-p-2"
                :class="{
                  'tw-bg-primary-50 tw-text-primary-500':
                    name === 'total_loan_request',
                  'tw-bg-green-50 tw-text-primary-500': name === 'pending_loan',
                  'tw-bg-secondary-50 tw-text-secondary-500':
                    name === 'approved_loan',
                  'tw-bg-gray-50 tw-text-tertiary-500':
                    name === 'declined_loan',
                }"
              >
                <i-icon :icon="getIcon(name)" class="tw-h-[18px] tw-w-[18px]" />
              </span>
              <span>
                <i-icon
                  icon="tabler:arrows-diagonal-minimize-2"
                  class="tw-text-gray-400"
                />
              </span>
            </div>
            <span
              class="tw-capitalize tw-text-sm tw-font-semibold tw-text-gray-500 tw-text-[11.7px]"
              role="button"
              @click="
                $router.push(`/loan-requests?status=${getRoute(name)}`)
              "
              >{{ name.split("_").join(" ") }}</span
            >
            <h5 class="tw-font-bold tw-text-gray-900">{{ value }}</h5>
          </div>
        </div>
      </div>

      <div class="tw-bg-white tw-p-4 tw-rounded-lg">
        <div id="chart">
          <h4 class="tw-font-bold tw-text-gray-900 tw-text-xl">Statistics</h4>
          <ApexChart
            type="bar"
            height="280"
            :options="chartOptions"
            :series="series"
          ></ApexChart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pick } from "lodash";
export default {
  data() {
    return {
      series: [
        {
          name: "Completed Loan",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 45, 23, 34],
          color: "#E29A13",
          radius: 5,
        },
        {
          name: "Pending Loan",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 61, 58, 63],
          color: "#4B66BF",
        },
        {
          name: "Declined Loan",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 101, 98, 87],
          color: "#DBEAFE",
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          horizontalAlign: "left",
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        // yaxis: {
        //   title: {
        //     text: "$ (thousands)",
        //   },
        // },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
      displayKey: [
        "total_loan_request",
        "pending_loan",
        "approved_loan",
        "declined_loan",
      ],
      icons: {
        "lucide:radio": "total_loan_request",
        "eva:message-circle-outline": "pending_loan",
        "tabler:edit": "approved_loan",
        "tabler:layout-sidebar-right": "declined_loan",
      },
      routes: {
        all: "total_loan_request",
        pending: "pending_loan",
        approved: "approved_loan",
        declined: "declined_loan",
      },
    };
  },

  methods: {
    getIcon(value) {
      let res = Object.keys(this.icons).find(
        (key) => this.icons[key] === value
      );
      return res;
    },

    getRoute(value) {
      let res = Object.keys(this.routes).find(
        (key) => this.routes[key] === value
      );
      return res;
    },
  },
  computed: {
    date() {
      let date = new Date();
      return date;
    },

    cardsData() {
      let data = {
        total_loan_request: 30,
        pending_loan: 10,
        approved_loan: 5,
        declined_loan: 6,
      };
      return pick(data, this.displayKey);
    },
  },
};
</script>

<style scoped>
.card-container {
  position: relative;
}
.card-container::after {
  content: "";
  background: var(--gray-300);
  height: 45px;
  width: 1px;
  position: absolute;
  right: 0;
  top: 35%;
  bottom: 50%;
}
</style>
