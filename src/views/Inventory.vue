<template>
  <div class="h-screen w-screen bg-gray-900">
    <header class="bg-white shadow-xl border-gray-200 dark:bg-gray-900">
      <nav>
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
          <div
            href="https://www.instagram.com/sertanustecnologia/"
            class="flex space-x-3 rtl:space-x-reverse"
          >
            <h2 class="text-3xl font-semibold text-green-600">Sertanus</h2>

            <h2 class="text-xl mt-1.5 font-semibold text-gray-500">
              Tecnologia
            </h2>
          </div>

          <div
            class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              @click="this.toggleUserDropDown"
              type="button"
              class="flex relative text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="../assets/user-example.jpg"
                alt="user photo"
              />
            </button>

            <div
              v-if="showUserDropDown"
              class="z-50 absolute my-4 top-10 right-32 text-base list-none w-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
              id="user-dropdown"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">{{
                  user.name
                }}</span>
                <span
                  class="block text-sm text-gray-500 truncate dark:text-gray-400"
                  >{{ user.email }}</span
                >
              </div>
            </div>
          </div>

          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          ></div>
        </div>
      </nav>
    </header>

    <div></div>
    <CreateItemModal
      v-if="showCreateItemModal"
      :toggleModal="this.toggleCreateItemModal"
    />
  </div>
</template>

<script>
import CreateItemModal from "../components/CreateItemModal.vue";
export default {
  components: {
    CreateItemModal,
  },

  data() {
    return {
      showUserDropDown: false,
      showCreateItemModal: true,
      user: this.$store.state.user,
    };
  },

  mounted() {
    console.log("User^:", this.user.email);
  },

  methods: {
    toggleUserDropDown() {
      this.showUserDropDown = !this.showUserDropDown;
    },

    toggleCreateItemModal() {
      this.showCreateItemModal = !this.showCreateItemModal;
    },
  },
};
</script>
