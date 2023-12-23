<template>
  <div class="auth-content">
    <div class="tw-flex">
      <div class="tw-bg-primary-300 tw-text-center tw-h-screen tw-w-8/12 tw-p-8">
        <h4 class="tw-capitalize tw-font-medium tw-mb-0">let's get you started</h4>
        <p class="tw-text-sm tw-font-semibold">Centralized health services and users' balance to <br>innovation</p>
        <div class="tw-flex tw-justify-center tw-mt-8">
          <img src="@/assets/img/auth-bg.svg" alt="" />
        </div>
      </div>
      <div class="tw-p-8 tw-w-full">
        <div class="tw-mb-12">
          <div class="tw-flex tw-justify-center">
            <img src="@/assets/img/logo.svg" class="" alt="" />
          </div>
          <!-- <h5 class="tw-font-bold tw-text-2xl tw-mb-0">Welcome back,</h5>
          <small class="tw-text-light tw-text-xs"
            >Sign in to continue to Peppy Stores administrative panel</small
          > -->
        </div>
        <validation-observer v-slot="{ invalid, handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <span
              v-if="error"
              class="tw-mb-5 tw-block tw-text-xs tw-text-red-600"
              >{{ error }}</span
            >
            <div>
              <validation-provider
                name="email"
                rules="required|email"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="email">Admin Email</label>
                <input
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                  type="email"
                  name="email"
                  id="email"
                  v-model="credentials.email"
                  placeholder="Email"
                />
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>

            <div class="tw-my-3">
              <validation-provider
                class=""
                name="password"
                rules="required"
                v-slot="{ dirty, invalid, errors }"
              >
                <label for="password">Admin Password</label>
                <div
                  class="input-field"
                  :class="{
                    'tw-border-red-600': dirty && invalid,
                  }"
                >
                  <input
                    :type="typePassword ? 'password' : 'text'"
                    name="password"
                    id="input"
                    v-model="credentials.password"
                    placeholder="Password"
                  />
                  <span
                    class="password-iccon"
                    role="button"
                    @click="typePassword = !typePassword"
                  >
                    <i-icon
                      :icon="
                        typePassword ? 'tabler:eye' : 'gridicons:not-visible'
                      "
                      class="form-icon"
                    />
                  </span>
                </div>
                <span class="tw-text-xs tw-text-red-600" v-if="errors">{{
                  errors[0]
                }}</span>
              </validation-provider>
            </div>

            <div class="tw-mt-4">
              <button
                class="moricol-btn moricol-primary w-100"
                v-bind:disabled="invalid"
                :class="{ 'tw-bg-gray-400': invalid  }"
              >
                <span>Login</span>
              </button>
            </div>
          </form>
        </validation-observer>
        <!-- <div class="tw-text-center tw-mt-3">
        <span class="tw-text-xs tw-font-semibold"
          >Don't have an account?
          <router-link to="/sign-up" class="tw-text-primary"
            >Sign Up</router-link
          >
        </span>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data: () => {
    return {
      credentials: {
        email: "",
        password: "",
      },
      typePassword: true,
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),

    onSubmit() {
      let credentials = {
        login: this.credentials.email,
        password: this.credentials.password,
      };
      console.log(credentials);
      this.$router.push('/home')
      // this.loginUser(credentials);
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  watch: {},

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
      success: (state) => state.success,
    }),
  },
};
</script>
