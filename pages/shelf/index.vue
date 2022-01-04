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
                    </v-row>
                </div>
                <v-row>
                    <v-col  cols="12" >
                        <template>
                             <v-data-table
                                :headers="headers"
                                :items="myApprovedBooks"
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
import { mapGetters, mapActions } from "vuex"
export default {
    middleware: ['auth', 'isUser'],
    components: {},
    data(){
        return {
            search: null,
            headers: [
            {
                text: 'Book Title',
                align: 'start',
                sortable: false,
                value: 'bookTitle',
            },
            { text: 'Author', value: 'availableCopies' },
            { text: 'My request ID', value: 'availableCopies' },
            { text: 'Return Date', value: 'availableCopies' },
            ],
        }
    },
    watch: {
        
    },
    computed: {
        ...mapGetters({
            'myApprovedBooks': 'transactions/myApprovedBooks'
        }),
        books: function(){
            if(this.search) {
                return this.searchResult()
            }
            return this.allBooks
        }
    },
    methods: {
        ...mapActions({
            'getMyApprovedBooks': 'transactions/getMyApprovedBooks',
            'getAllBooksSearch': 'transactions/getAllBooksSearch',
        }),
        editItem(val){
            this.$router.push(`/admins/all-books/edit/${val._id}`)
        },
        searchResult(){
            this.getAllBooksSearch(this.search)
        }
    },
    mounted(){
        this.getMyApprovedBooks(this.search)
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