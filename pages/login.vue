<template>
  <v-app class="half-bg d-flex justify-center align-center">
        <div class="d-flex d-flex justify-center justify-center pt-10 pb-10"  >
            <img src="/svg/LMS.svg" width="5%" alt="Login image"/>
        </div>
        <v-card max-width="900" class="d-flex flex-column mx-auto relative bg-tertiary">
            
            <v-row class="px-10 py-10">
                <v-col cols="12" md="6" class="mx-auto pa-0">
                     <v-form ref="form" v-model="valid" lazy-validation v-on:keyup.native.enter="signIn"
                    >
                        <div class="mb-10">
                            <h2 class="accent--text">User <span class="primary--text">Login</span></h2>
                        </div>
                        <div>
                            <v-text-field
                                v-model="login.usernameEmail"
                                placeholder="Username"
                                label="Username/email"
                                dense
                                outlined
                                :required="true"
                                block
                                class="ma-0 p-0"
                            />
                        </div>
                        <div>
                            <v-text-field
                            v-model="login.password"
                            placeholder="Password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            :rules="rule"
                            label="Password"
                            dense
                            outlined
                            block
                            :required="true"
                            class="ma-0 p-0 mb-3"
                            />
                        </div>

                        <div class="d-flex justify-start ma-0 pa-0 mb-10">
                            <nuxt-link to="/password/email"
                                ><span class="accent--text"> Forgot Password</span></nuxt-link
                            >
                        </div>

                        <div class="d-flex flex-column justify-center">
                            <v-btn @click="signIn()" color="primary" block class="px-12 w-full bg-primary ">Login</v-btn>
                            <nuxt-link to="/register" class="text-center mt-2">
                                <span class="accent--text text-center">Don't have an account?</span>
                            </nuxt-link>
                        </div>
                    </v-form>
                </v-col>
                <v-col cols="12" md="6" class="mx-auto">
                    <div class="fill-height d-flex justify-center flex-column align-center" >
                        <p class="text-center primary--text font-weight-medium">Readers are <span class="accent--text">Leaders</span></p>
                        <img src="/svg/login.svg" width="100%" alt="Login image"/>
                    </div>
                </v-col>
            </v-row>
        </v-card>
        

        <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ response }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>


  </v-app>
</template>

<script>
// import { DEFAULT_RULE } from "@/constants/";
export default {
  components: {},
  layout: "guest",
  // middleware: "guest",
  data: () => ({
    dialog: true,
    valid: false,
    show1: false,
      timeout: 2000,
    response: "",
    snackbar: false,

    login: {
      usernameEmail: null,
      password: null,
    },
  }),
  computed: {
    rule() {
    //   return DEFAULT_RULE;
    },
  },
  methods: {
    async signIn() {
       try{
            await this.$auth.loginWith("local", {
                data: {
                    username: this.login.usernameEmail,
                    password: this.login.password
                }
            });
            if(this.user.role === "admin"){
                this.$router.push("/admins/dashboard/")
            }
            this.$router.push("/dashboard/")
         } catch(e){
            this.response = e.response.data.message;
        this.snackbar = true;
        
        }
      }
    },
}
</script>
<style scoped>
.half-bg {
  background-color: #2B2862 !important;
}
.bg-tertiary{
    background-color: #ffffff !important;
}
a{
    text-decoration: none !important;
}
</style>