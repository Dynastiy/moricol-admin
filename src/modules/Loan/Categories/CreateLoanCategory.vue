<template>
  <div class="tw-flex tw-justify-center">
    <div class="tw-bg-white tw-w-11/12 tw-py-5 tw-rounded-lg">
      <h5 class="tw-text-center tw-capitalize tw-font-semibold tw-text-md">add new loan category</h5>
      <validation-observer v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <span
            v-if="error"
            class="tw-mb-5 tw-block tw-text-xs tw-text-red-600"
            >{{ error }}</span
          >
          <div class="tw-px-6">
            <div class="tw-mb-3">
              <validation-provider
                name="name of loan"
                rules="required"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="name">Name of Loan</label>
                <input
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                  type="text"
                  name="name"
                  id="name"
                  v-model="dataObj.name"
                  placeholder="XXXXXXXX"
                />
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>

            <div class="tw-mb-3">
              <validation-provider
                name="name of loan"
                rules="required"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="name">Amount for this Category(RANGE FROM)</label>
                <input
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                  type="text"
                  name="name"
                  id="name"
                  v-model="dataObj.name"
                  placeholder="XXXXXXXX"
                />
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>

            <div class="tw-mb-3">
              <validation-provider
                name="name of loan"
                rules="required"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="name">Amount for this Category(RANGE To)</label>
                <input
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                  type="text"
                  name="name"
                  id="name"
                  v-model="dataObj.name"
                  placeholder="XXXXXXXX"
                />
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
          </div>

          <hr class="tw-my-6" />

          <div class="tw-px-6">
            <div v-for="(item, idx) in dataObj.loan_duration" :key="idx">
              <div class="tw-mb-3">
                <validation-provider
                  name="name of loan"
                  rules="required"
                  v-slot="{ dirty, invalid, errors }"
                >
                  <label for="name">How many days duration to pay back?</label>
                  <input
                    :class="{
                      'tw-border-red-600': dirty && invalid,
                    }"
                    type="text"
                    name="name"
                    id="name"
                    v-model="item.number_of_days"
                    placeholder="XXXXXXXX"
                  />
                  <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>

              <div class="tw-mb-3">
                <validation-provider
                  name="name of loan"
                  rules="required"
                  v-slot="{ dirty, invalid, errors }"
                >
                  <label for="name">Interest for each day</label>
                  <div class="inputgroup">
                    <span class="inputgroup-addon"> % </span>
                    <input
                      id="input"
                      v-model="item.interest_per_day"
                      :class="{
                        'tw-border-red-600': dirty && invalid,
                      }"
                      placeholder="Username"
                    />
                  </div>
                  <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>

              <div class="tw-mb-3">
                <validation-provider
                  name="name of loan"
                  rules="required"
                  v-slot="{ dirty, invalid, errors }"
                >
                  <label for="name">Interest for Late Payment per day</label>
                  <div class="inputgroup">
                    <span class="inputgroup-addon"> % </span>
                    <input
                      v-model="item.late_payment_interest"
                      id="input"
                      :class="{
                        'tw-border-red-600': dirty && invalid,
                      }"
                      placeholder="Username"
                    />
                  </div>
                  <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
              <div v-if="dataObj.loan_duration.length > 1">
                <span
                  role="button"
                  @click="removeLoanDuration(idx)"
                  class="tw-text-[13px] tw-text-red-500 tw-flex tw-justify-end tw-font-semibold tw-uppercase"
                  >remove</span
                >
              </div>
            </div>

            <div>
              <span
                role="button"
                @click="addLoanDuration"
                class="tw-text-[13px] tw-text-primary-500 tw-font-semibold tw-uppercase"
                >add another loan day duration</span
              >
            </div>
          </div>

          <hr class="tw-my-6" />

          <div class="tw-px-6">
            <div class="tw-mb-3">
              <validation-provider
                name="name of loan"
                rules="required"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="name">How many installments?</label>
                <input
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                  type="text"
                  name="name"
                  id="name"
                  v-model="dataObj.number_of_installments"
                  placeholder="XXXXXXXX"
                />
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>
            <div v-for="(item, idx) in dataObj.installments" :key="idx">
              <div>
                <span class="tw-font-semibold tw-mt-2 tw-text-sm">
                  {{ getOrdinalSuffix((idx+1)) + " Installment" }}
                </span>
              </div>
              <div class="tw-mb-3">
                <validation-provider
                  name="name of loan"
                  rules="required"
                  v-slot="{ dirty, invalid, errors }"
                >
                  <label for="name"
                    >How many days for frist installment(FROM)</label
                  >
                  <div class="inputgroup">
                    <span class="inputgroup-addon"> % </span>
                    <input
                      id="input"
                      v-model="item.interest_per_day"
                      :class="{
                        'tw-border-red-600': dirty && invalid,
                      }"
                      placeholder="Username"
                    />
                  </div>
                  <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>

              <div class="tw-mb-3">
                <validation-provider
                  name="name of loan"
                  rules="required"
                  v-slot="{ dirty, invalid, errors }"
                >
                  <label for="name">Interest for Late Payment per day</label>
                  <div class="inputgroup">
                    <span class="inputgroup-addon"> % </span>
                    <input
                      v-model="item.late_payment_interest"
                      id="input"
                      :class="{
                        'tw-border-red-600': dirty && invalid,
                      }"
                      placeholder="Username"
                    />
                  </div>
                  <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                    errors[0]
                  }}</span>
                </validation-provider>
              </div>
            </div>
          </div>

          <div class="tw-mt-4">
            <button
              class="moricol-btn moricol-primary w-100"
              v-bind:disabled="invalid"
              :class="{ 'tw-bg-gray-400': invalid }"
            >
              <span>apply</span>
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import getOrdinalSuffix from "@/Mixins/getOrdinalSuffix";
export default {
  mixins: [getOrdinalSuffix],
  data() {
    return {
      dataObj: {
        name: null,
        number_of_installments: 1,
        loan_duration: [
          {
            number_of_days: null,
            interest_per_day: null,
            late_payment_interest: null,
          },
        ],
        installments: [],
      },
      error: null,
      number_of_installments: 1
    };
  },

  methods: {
    onSubmit(e) {
      console.log(e);
    },

    addLoanDuration() {
      let payload = {
        number_of_days: null,
        interest_per_day: null,
        late_payment_interest: null,
      };
      this.dataObj.loan_duration.push(payload);
    },

    removeLoanDuration(idx) {
      this.dataObj.loan_duration.splice(idx, 1);
    },
  },

  watch: {
    "dataObj.number_of_installments": {
      handler(val) {
        console.log(val);
        // Example: Repeat the element 'World' 3 times
        const elementToRepeat = {
          number_of_days_from: null,
          number_of_days_to: null,
        };
        const numberOfRepeats = Number(val);

        const newArray = Array(numberOfRepeats).fill(elementToRepeat);
        console.log(newArray, "ommmo");
        this.dataObj.installments = newArray;
        // console.log(newArray);
        // Output: ['World', 'World', 'World']
      },
      immediate: true,
    },
  },
};
</script>

<style></style>
