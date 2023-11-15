<template>
  <div class="h-screen w-screen bg-gray-900">
    <header class="bg-white shadow-lg mb-4 border-gray-200 dark:bg-gray-900">
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
              class="z-50 absolute my-4 top-10 right-4 sm:right-32 text-base list-none w-50 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
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

    <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div class="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div
          class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
        >
          <div
            class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
          >
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Search"
                    required=""
                  />
                </div>
              </form>
            </div>
            <div
              class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
            >
              <button
                @click="this.toggleCreateItemModal"
                type="button"
                id="createProductModalButton"
                data-modal-target="createProductModal"
                data-modal-toggle="createProductModal"
                class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                <svg
                  class="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
            </div>
          </div>

          <div class="overflow-x-hidden overflow-y-hidden h-full">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-4 py-4">Name</th>
                  <th scope="col" class="px-4 py-3">Description</th>
                  <th scope="col" class="px-4 py-3">Quantity</th>
                  <th scope="col" class="px-4 py-3">Category</th>

                  <th scope="col" class="px-4 py-3">
                    <span class="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in items"
                  class="border-b dark:border-gray-700"
                  :key="item.id"
                >
                  <th
                    scope="row"
                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ item.name }}
                  </th>
                  <td class="px-4 py-3">{{ item.description }}</td>
                  <td class="px-4 py-3">{{ item.quantity }}</td>
                  <td class="px-4 py-3 max-w-[12rem] truncate">
                    {{ item.category }}
                  </td>

                  <td class="z px-4 py-3 flex items-center justify-end">
                    <ItemControl :item="item" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <CreateItemModal
      v-if="showCreateItemModal"
      :toggleModal="this.toggleCreateItemModal"
    />
  </div>
</template>

<script>
import ItemControl from "../components/ItemControl.vue";
import CreateItemModal from "../components/CreateItemModal.vue";
import ReadItemModal from "../components/ReadItemModal.vue";

import { mapState } from "vuex";

export default {
  components: {
    CreateItemModal,
    ItemControl,
  },

  data() {
    return {
      showUserDropDown: false,
      showCreateItemModal: false,

      user: this.$store.state.user,
    };
  },

  computed: {
    ...mapState(["items"]),
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
