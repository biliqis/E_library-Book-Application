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
                                v-model="reset.password"
                                placeholder="New Password"
                                label="New Password"
                                dense
                                outlined
                                :required="true"
                                block
                                class="ma-0 p-0"
                            />
                        </div>
                        <div>
                            <v-text-field
                                v-model="reset.confirmPassword"
                                placeholder="Confirm New Password"
                                label="Confirm New Password"
                                dense
                                outlined
                                :required="true"
                                block
                                class="ma-0 p-0"
                            />
                        </div>

                        <div class="d-flex flex-column justify-center">
                            <v-btn @click="signIn()" color="primary" block class="px-12 w-full bg-primary ">Login</v-btn>
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
        <v-dialog
            v-model="show1"
            max-width="600"
            min-height="500"
        >
        <v-card class=" d-flex justify-center flex-column">
            <img src="/svg/success.svg" class="d-flex justify-center mx-auto mt-16 mb-2" width="20%" alt="Login image"/>

            <v-card-text class="text-center pb-16 text-h6">
                Password reset was successful!!!

                <v-btn @click="pushToSignIn()" color="primary" block class="px-12 w-full mt-10 bg-primary ">Login</v-btn>
            </v-card-text>
            </v-card>
        </v-dialog>
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from "vuex"
// import { DEFAULT_RULE } from "@/constants/";
export default {
  components: {},
  layout: "guest",
  // middleware: "guest",
  data: () => ({
    dialog: true,
    valid: false,
    show1: false,
    email: null,
    reset: {
      password: null,
      confirmPassword: null,
    },
  }),
  computed: {
    rule() {
    //   return DEFAULT_RULE;
    },
  },
  methods: {
      ...mapActions({
            'resetPassword' : 'resetPassword'
        }),
    async signIn() {
        
        try{
                const data= {
                    confirmPassword: this.reset.confirmPassword,
                    password: this.reset.password,
                    email: this.email
                }
                await this.resetPassword(data);
                this.show1 = true;
                localStorage.removeItem("reset_email");
        } catch(e){
            
        }
      },

      pushToSignIn(){
          this.$router.push("/login")
      }
    },
    mounted() {
        this.email = localStorage.getItem("reset_email")
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