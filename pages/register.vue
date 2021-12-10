<template>
  <v-app class="half-bg d-flex justify-center align-center">
        <div class="d-flex d-flex justify-center justify-center pt-10 pb-10"  >
            <img src="/svg/LMS.svg" width="5%" alt="Login image"/>
        </div>
        <v-card max-width="1000" class="d-flex flex-column mx-auto pb-10  relative bg-tertiary">
            
                    <v-form ref="form" v-model="valid" lazy-validation v-on:keyup.native.enter="signIn" >
                        <v-row class="px-10 py-10">
                            <v-col cols="12" md="6" class="pa-2">
                                <div>
                                    <v-text-field
                                    v-model="register.firstName"
                                    placeholder="First Name"
                                    label="First Name"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                     :rules="[rules.required]"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.lastName"
                                    placeholder="Last Name"
                                    label="Last Name"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                     :rules="[rules.required]"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.username"
                                    placeholder="Username"
                                    label="Username"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                     :rules="[rules.required]"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.email"
                                    placeholder="Email"
                                    label="Email"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                     :rules="[rules.required, rules.email]"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.password"
                                    placeholder="Password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show1 ? 'text' : 'password'"
                                    label="Password"
                                    hint="At least 8 characters"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    :rules="[rules.required, rules.password]"
                                    @click:append="show1 = !show1"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.confirmPassword"
                                    placeholder="Re-enter Password"
                                     :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    label="Re-enter Password"
                                    hint ="must match password"
                                    dense
                                    type="password"
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" class="pa-2">
                                <div>
                                    <v-text-field
                                    v-model="register.phoneNumber"
                                    placeholder="Phone Number"
                                    label="Phone Number"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    :rules="[rules.required, rules.phone]"
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.occupation"
                                    placeholder="Occupation"
                                    label="Occupation"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                                <div>
                                    <v-text-field
                                    v-model="register.address"
                                    placeholder="Address"
                                    label="Address"
                                    dense
                                    outlined
                                    block
                                    :required="true"
                                    class="ma-0 p-0 "
                                    />
                                </div>
                            </v-col>
                        </v-row>
                        <v-row class=" d-flex justify-center flex-column">
                            <v-btn @click="signIn" color="primary" width="60%" class="bg-primary d-flex mx-auto">{{ registering ? 'Registering' : 'Register'}}</v-btn>
                            <nuxt-link to="/login" class="text-center mt-3">
                                <span class="accent--text text-center">Already have an account?</span>
                            </nuxt-link>
                        </v-row>
                    </v-form>
        </v-card>
  </v-app>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
  components: {},
  layout: "guest",
  // middleware: "guest",
  data: () => ({
    dialog: true,
    valid: false,
    show1: false,
    register: {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      confirmPassword: null,
      phoneNumber: null,
      occupation: null,
      address: null,
      password: null,
    },
    rules:{
        required:value => !!value ||'Required',
        email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'            
        },
        phone: value => {
            const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            return pattern.test(value) || 'Invalid phone number.'            
        },
        password: value => {
            const pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            return pattern.test(value) || 'must contain at least one upper case, one lower case, one character'            
        },
        matchpassword: value => {
            value === this.register.password || "password doesn't match"
        }


    },      
  }),
  computed: {
    ...mapGetters({
        'registering': 'registering',
    })
  },
  methods: {
    ...mapActions({
        'userRegister': 'userRegister'
    }),
    async signIn() {
        try{
            const data = {
                firstName: this.register.firstName,
                lastName: this.register.lastName,
                username: this.register.username,
                email: this.register.email,
                phonenumber: this.register.phoneNumber,
                occupation: this.register.occupation,
                password: this.register.password,
                confirmPassword: this.register.confirmPassword,
                address: this.register.address,
                role: 'user'
            }
            await this.userRegister(data);
           await this.$auth.loginWith("local", {
                data: {
                    email: this.login.usernameEmail,
                    username: this.login.usernameEmail,
                    password: this.login.password
                }
            });
            // this.$router.push("/login")
              return this.$router.push("/admins/dashboard/")
        } catch(e){

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