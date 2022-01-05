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
                            <h2 class="accent--text">Password <span class="primary--text">Reset Pin</span></h2>
                        </div>
                        <div class="ma-auto mb-3 position-relative">
                            <v-otp-input
                              v-model="resetPin"
                              length="6"
                            >
                            </v-otp-input>
                        </div>

                        <div class="d-flex flex-column justify-center">
                            <v-btn @click="signIn()" color="primary" bloack class="px-12 w-full bg-primary ">Submit</v-btn>
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
    registeredEmail: null,
    resetPin: null
  }),
  computed: {
    rule() {
    //   return DEFAULT_RULE;
    },
  },
  methods: {
    ...mapActions({
        'passwordResetRequestToken' : 'passwordResetRequestToken'
    }),

    handleOnComplete(value) {
      this.resetPin = value
    },
    async signIn() {
        
        try{
                const data = {
                    token: this.resetPin 
                }
                await this.passwordResetRequestToken(data)
              
              this.$router.push("/password/change-password")
        } catch(e){
            
        }
      }
    },
    mounted() {
      if(!localStorage.getItem("reset_email")){
        this.$router.push("/password/email")
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
.error {
  border: 1px solid red !important;
}
</style>