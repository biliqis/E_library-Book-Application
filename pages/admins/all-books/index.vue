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
                                        placeholder="Password"
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
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="!allBooks">
                            No book has been added yet, please check back !
                        </div>
                        <template else>
                             <v-data-table
                                :headers="headers"
                                :items="allBooks"
                                :items-per-page="5"
                                class="elevation-0"
                                >
                                
                                    <template v-slot:item.actions="{ item }">
                                        <v-icon
                                            small
                                            class="mr-2"
                                            @click="editItem(item)"
                                        >
                                            mdi-pencil
                                        </v-icon>
                                        </template>
                                </v-data-table>
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
            headers: [
                {
                    text: 'Book Title',
                    align: 'start',
                    sortable: false,
                    value: 'bookTitle',
                },
                { text: '', value: 'actions', sortable: false },
                { text: 'Available Copies', value: 'availableCopies' },
                { text: 'Borrowed Copies', value: 'borrowedCopies' },
                { text: 'Total', value: 'noOfCopies' },
            ],
        }
  },

  computed:{
            ...mapGetters({
             'allBooks': 'transactions/allBooks'
            })
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
},
mounted(){
this.getAllBooks()

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