<template>
  <section class="bg-gray-50 dark:bg-gray-900 h-screen">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="handleLogin">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Seu email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="seuemail@email.com"
                required
                v-model="form.email"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Senha</label
              >
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                v-model="form.password"
              />
            </div>

            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Entrar
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Ainda não tem uma conta?
              <a
                href="/register"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Registre-se</a
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { login } from "../services/apifaker/auth";
export default {
  props: {},
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },

  setup() {
    const toast = useToast();
    const router = useRouter();

    return { toast, router };
  },

  created() {
    console.log("Store:", this.$store.state.user);
  },

  methods: {
    async handleLogin() {
      const response = login(this.form.email, this.form.password);

      if (!response.success) {
        return this.toast.error("Credenciais invalidas");
      }

      console.log("response ", response);

      this.$store.state.user = response.user;
      this.toast.success("Logado com sucesso!");
      this.router.push("/");

      // try {
      //   const { data: response } = await axios.post(
      //     "http://localhost:3333/api/login",
      //     this.form
      //   );

      //   console.log("response: ", response);
      //
      //   this.toast.success("Logado com sucesso!");
      // } catch (error) {
      //   console.log("Api error:", error);
      //   this.toast.error("Aconteceu um erro inesperado!");
      // }
    },
  },

  saveUser(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
</script>
