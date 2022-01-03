<template>
    <main>
        <v-item-group active-class="primary">
            <v-row>
                <v-col  cols="12" md="4" >
                    <v-item >
                        <v-card  class="d-flex align-center justify-center flex-column pa-2"  height="150" >
                            <nuxt-link to="/admins/all-books">
                                <div class="text-subtitle-1 text-center mx-auto font-weight-normal grey--text">Total number of books </div>
                                <div class="text-h3 text-center mx-auto primary--text">{{allBooks ? allBooks.length : '0'}}</div>
                            </nuxt-link>
                        </v-card>
                    </v-item>
                </v-col>
                <v-col  cols="12" md="4" >
                    <v-item >
                        <v-card  class="d-flex align-center justify-center flex-column pa-2"  height="150" >
                            <nuxt-link to="/admins/users">
                                <div class="text-subtitle-1 text-center mx-auto font-weight-normal grey--text">Total number of user </div>
                                <div class="text-h3 text-center mx-auto primary--text">{{allUsers ? allUsers.length : '0'}}</div>
                            </nuxt-link>
                        </v-card>
                    </v-item >
                </v-col>
            </v-row>
        </v-item-group>
    </main>
</template>
<script>
import {mapActions, mapGetters} from "vuex"
export default {
  components: {},
  middleware: ['auth', 'isAdmin'],
  data(){
      return {
          books: [
              {
                  title: ''
              },
              {
                  title: ''
              },
              {
                  title: ''
              }
          ],
          users: [
              {
                  title: ''
              },
              {
                  title: ''
              }
          ]
      }
  },
  computed: {
        ...mapGetters({
            'allUsers': 'administration/allUsers',  
            'allBooks': 'transactions/allBooks',
            
        })
    },
    methods: {
        ...mapActions({
            'getAllUsers': 'administration/getAllUsers',
            'getAllBooks': 'transactions/getAllBooks',
        })
    },
    mounted(){
        this.getAllUsers()
        this.getAllBooks()
        if(this.user && this.user.role === "user"){
            this.$router.push("/dashboard")
        }
    }

}
</script>
<style scoped>
a{
    text-decoration: none !important;
}
</style>