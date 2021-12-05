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
            to="/dashboard"
            router
            exact
            light
            id="navBrand"
          >
            <v-btn icon v-if="logo">
              <v-avatar class="px-7" size="70">
                <img
                  src="/svg/LMS.svg"
                  alt="mls logo"
                />
              </v-avatar>
            </v-btn>
            <v-img
              v-else
              height="40"
              full-width
              contain
              class="logo"
              src="/img/LMS.png"
            ></v-img>
          </v-list-item>

          <v-list-item
            v-if="user.role==='user'"
            router
            active-class="class-active"
            :to="items[0].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[0].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[0].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            v-if="user.role==='admin'"
            router
            active-class="class-active"
            :to="items[1].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[1].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[1].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            v-if="user.role==='admin'"
            router
            active-class="class-active"
            :to="items[2].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[2].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[2].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            router
            v-if="user.role==='admin'"
            active-class="class-active"
            :to="items[3].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[3].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[3].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            router
            v-if="user.role==='user'"
            active-class="class-active"
            :to="items[4].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[4].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[4].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

<v-list-item
            v-if="user.role==='user'"
            router
            active-class="class-active"
            :to="items[5].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[5].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[5].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            router
            v-if="user.role==='user'"
            active-class="class-active"
            :to="items[6].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[6].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[6].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            v-if="user.role==='admin'"
            router
            active-class="class-active"
            :to="items[7].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[7].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[7].title }}
              </v-list-item-title>
            </div>
          </v-list-item>

          <v-list-item
            v-if="user.role==='admin'"
            router
            active-class="class-active"
            :to="items[8].to"
            class="mt-6 my-7 mx-3"
          >
            <div class="d-flex flex-row px-20 align-center">
              <div class="mr-2 d-flex align-center">
                <img :src="items[8].icon" class="mr-4" />
              </div>
              <v-list-item-title class="text-subtitle-2"
                >{{ items[8].title }}
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
          <p class="d-flex my-auto font-weight-medium text-capitalize d-none d-md-block primary--text text-h5">Welcome, <span class="accent--text pl-2">{{user.firstName}}</span></p>
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

            <v-list-item @click="logoutUser()">
              <v-list-item-title>
                <v-icon class="mr-3"> mdi-logout </v-icon>
                <span>Logout</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-dialog
        v-model="dialog"
        max-width="290"
        >
        <v-card>
            <v-card-title class="text-h5 text-center primary--text">
                Borrow Book
            </v-card-title>

            <v-card-text class="text-center">
                Are you sure you want to logout
            </v-card-text>

<v-card-actions>
            <v-spacer></v-spacer>
                <v-btn @click="confirmLogout()" color="primary" depressed block class="px-12 w-full bg-primary ">Confirm</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
            
    <v-main>
      <v-container fluid>
        <nuxt/>
        <notifications  position="top center" group="all"/>
        <notifications  position="bottom center" group="auth"/>
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
    dialog: false,
    profileItems: [
      {
        title: "User profile",
        to: "/profile",
        icon: "mdi-account",
      }
    ],
    items: [
      {
        title: "Dashboard",
        to: "/dashboard",
        icon: "/svg/Vector.svg",
      },
      {
        title: "Dashboard",
        to: "/admins/dashboard",
        icon: "/svg/Vector.svg",
      },
      {
        title: "All Users",
        to: "/admins/users",
        icon: "/svg/Vector.svg",
      },
      {
        title: "All Books",
        to: "/admins/all-books",
        icon: "/svg/user.svg",
      },
      {
        title: "All Books",
        to: "/books",
        icon: "/svg/user.svg",
      },
      {
        title: "Your Shelf",
        to: "/shelf",
        icon: "/svg/shelf.svg",
      },
      {
        title: "Profile",
        to: "/profile",
        icon: "/svg/profile.svg",
      },
      {
        title: "Book Requests",
        to: "/admins/book-requests",
        icon: "/svg/profile.svg",
      },
      {
        title: "Update Record",
        to: "/admins/update-record",
        icon: "/svg/profile.svg",
      },
    ],
  }),
  methods: {
    logoutUser(){
      this.dialog = true;
    },
    confirmLogout(){
      this.$auth.logout()
      this.dialog = false;
    }
  }
}
</script>