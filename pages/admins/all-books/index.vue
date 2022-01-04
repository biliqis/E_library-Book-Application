<template>
    <main>
    <v-container>
        <v-item-group active-class="primary">
                <div>
                    <v-row>
                        <v-col cols="12" md="4" pa-0 class="pa-0">
                            <div class="d-flex items-center">
                                <v-form class="d-flex items-center">
                                    <v-text-field
                                        v-model="search"
                                        placeholder="Search book"
                                        append-icon="mdi-magnify"
                                        dense
                                        outlined
                                        block
                                        height="40"
                                        :required="true"
                                        class="ma-0 p-0 mb-3"
                                    />
                                    <v-btn
                                        class="ml-1"
                                        depressed
                                        height="40"
                                        width="40"
                                        :loading="loading"
                                        :disabled="loading"
                                        color="primary"
                                        @click="searchResult"
                                        >
                                        <v-icon>
                                            mdi-filter
                                        </v-icon>
                                    </v-btn>
                                </v-form>
                            </div>
                        </v-col>
                        <div>
                        </div>
                        <v-col cols="12" md="8" class="pa-0">
                            <v-btn class="ml-auto d-flex" color="primary" outlined depressed ><nuxt-link to="/admins/all-books/add-new-book">Add New Book</nuxt-link></v-btn>
                        </v-col>
                    </v-row>
                </div>
                <v-row>
                    <v-col  cols="12" >
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="allBooks.length < 1">
                            No book has been added yet, please check back !
                        </div>
                        <template v-else>
                        <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            <div class="text-subtitle-1 text-left font-weight-medium grey--text mb-2">Book  <span class="primary--text">Title</span></div>
                                        </th>
                                        <th class="text-center">
                                            Edit
                                        </th>
                                        <th class="text-center">
                                            Available Copies
                                        </th>
                                        <th class="text-center">
                                            Borrowed Copies
                                        </th>
                                        <th class="text-right">
                                            Total
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="item in allBooks"
                                            :key="item._id"
                                            class="grey--text"
                                        >
                                            <td>
                                                {{ item.bookTitle }}
                                            </td>
                                            <td class="text-center">
                                                <v-icon
                                                    small
                                                    class="mr-2"
                                                    @click="editItem(item)"
                                                >
                                                    mdi-pencil
                                                </v-icon>
                                            </td>
                                            <td class="text-center">{{ item.availableCopies }}</td>
                                            <td class="text-center">{{ item.borrowedCopies }}</td>
                                            <td class="text-right">{{ item.noOfCopies }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                            </template>
                    </v-col>
                </v-row>
        </v-item-group>
        </v-container>
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
  components: {},
  middleware: ['auth', 'isAdmin'],
  data(){
        return {
            search: null,
            loading: false,
        }
  },

  computed:{
            ...mapGetters({
             'allBooks': 'transactions/allBooks'
            }),
  },

  methods:{
        ...mapActions({
            'getAllBooks': 'transactions/getAllBooks',
        }),
        searchResult(){
            
        },
        editItem(val){
            console.log(val)
            this.$router.push(`/admins/all-books/edit/${val._id}`)
        },

        searchResult(){
            const data = {
                book: this.search ? this.search : ""
            }
            this.getAllBooks(data)
        }
},
mounted(){
    const data = {
            book: this.search ? this.search : ""
        }
        this.getAllBooks(data)
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