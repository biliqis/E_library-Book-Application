<template>
    <main>
        <v-item-group active-class="primary">
                <v-row>
                    <v-col  cols="12" >
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="!books">
                            No user has been registered yet, please check back !
                        </div>
                        <template>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        <div class="text-h6 text-left font-weight-medium grey--text mb-2">All <span class="primary--text">Users</span></div>
                                    </th>
                                    <th class="text-center">
                                        Date of Registration
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="item in allUsers"
                                    :key="item._id"
                                    class="grey--text"
                                    >
                                        <td class="grey--text">{{ item.firstName }}                                </td>
                                        <td class="text-center">{{ item.updatedAt }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            </template>
                    </v-col>
                </v-row>
        </v-item-group>
    </main>
</template>




<script>

import { mapGetters, mapActions } from "vuex"
export default {
  components: {},
  middleware: ['auth', 'isAdmin'],
  data(){
      return {
          books: [ 
              {title: 'Purpose driven life', availebleCopies: 10, id: '121313311'},
              {title: 'Purpose driven life', availebleCopies: 10, id: '121313331'},
              {title: 'Purpose driven life', availebleCopies: 10, id: '121313371'},
              {title: 'Purpose driven life', availebleCopies: 10, id: '121313361'},
          ]
      }
  },
  
  computed: {
        ...mapGetters({
            'allUsers': 'administration/allUsers',
            
        })
    },
    methods: {
        ...mapActions({
            'getAllUsers': 'administration/getAllUsers',
        })
    },
    mounted(){
        this.getAllUsers()
        console.log(this.allUsers)
        
    }
}
</script>
<style scoped>
a{
    text-decoration: none !important;
}
.table-width{
    width: 100% !important;
    background: red !important;
}
</style>