<template>
  <v-app>
    <v-navigation-drawer
      class="primary--text mt-0 pt-0"
      v-model="drawer"
      :mini-variant="false"
      :clipped="false"
      fixed
      disable-route-watcher
      width="280"
      app>
        <v-list class="mt-0 py-0 pt-0 mx-0 pr-0 pl-0 primary--text">
          <v-list-item
            class="py-sm-4 d-flex justify-center white"
            to="/"
            router
            exact
            light
            id="navBrand"
          >
            <v-btn icon v-if="logo">
              <v-avatar class="px-7" size="70">
                <img
                  src="/svg/sidebar.svg"
                  alt="District Logo"
                />
              </v-avatar>
            </v-btn>
            <v-img
              v-else
              height="40"
              full-width
              contain
              class="logo"
              src="/img/NoPath.png"
            ></v-img>
          </v-list-item>

          <v-list-item
          router
          active-class="class-active"
          :to="item.to"
          v-for="(item, index) in items"
          :key="index"
          class="mt-6 my-7 mx-3"
        >
          <div class="d-flex flex-row px-20 align-center">
            <div class="mr-2 d-flex align-center">
              <img :src="item.icon" class="mr-4" />
            </div>
            <v-list-item-title class="text-subtitle-2"
              >{{ item.title }}
            </v-list-item-title>
          </div>
        </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <!-- Top navigation bar -->
    <v-app-bar
      :clipped-left="false"
      fixed
      flat
      app
      height="60"
      color="tertiary"
    >
      <template class="d-flex align-center">
        <v-app-bar-nav-icon color="primary" @click.stop="drawer = !drawer" />
        <div class="d-flex align-center ml-2">
          <p class="d-flex my-auto font-weight-medium text-capitalize d-none d-md-block primary--text text-h5">Welcome, <span class="accent--text pl-2"> {{username}}</span></p>
        </div>
      </template>

      <v-spacer></v-spacer>

      <div class="mr-md-5 md-0 d-flex align-center">
        <v-menu offset-y :nudge-width="120" class="mr-1 px-md-2 px-0">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" v-if="userPicture">
              <v-avatar class="px-7" size="35">
                <img
                  src="/svg/sidebar.svg"
                  alt="Profile Picture"
                />
              </v-avatar>
            </v-btn>
            <v-btn v-else icon v-on="on">
              <v-icon color="primary" size="35" class
                >mdi-account-circle</v-icon
              >
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, index) in profileItems"
              :key="index"
              :to="item.to"
            >
              <v-list-item-title>
                <v-icon class="mr-3">
                  {{ item.icon }}
                </v-icon>
                <span>{{ item.title }}</span>
              </v-list-item-title>
            </v-list-item>

            <v-list-item @click="logout()">
              <v-list-item-title>
                <v-icon class="mr-3"> mdi-logout </v-icon>
                <span>Logout</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid class="px-6">
        <nuxt/>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data:() => ({
    drawer: true,
    userPicture: false,
    logo: false,
    username: "Admin",
    profileItems: [
      {
        title: "User profile",
        to: "/dashboard/profile",
        icon: "mdi-account",
      }
    ],
    items: [
      {
        title: "Dashboards",
        to: "/admins/dashboard",
        icon: "/svg/Vector.svg",
      },
      {
        title: "All Users",
        to: "/admins/users",
        icon: "/svg/user.svg",
      },
      {
        title: "All Books",
        to: "/admins/all-books",
        icon: "/svg/shelf.svg",
      },
      {
        title: "Book Requests",
        to: "/admins/book-requests",
        icon: "/svg/profile.svg",
      },
      {
        title: "User Record",
        to: "/admins/book-requests",
        icon: "/svg/profile.svg",
      },
    ],
  })
}
</script>