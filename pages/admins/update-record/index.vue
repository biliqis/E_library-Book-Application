<template>
    <main>
        <v-item-group active-class="primary">
        <v-container fluid>
                <div>
                    <v-row>
                        <v-col cols="12" md="4">
                            <div class="d-flex items-center">
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
                            </div>
                        </v-col>
                    </v-row>
                </div>

                <v-row>
                    <v-col  cols="12" >
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="allBooks < 1">
                            No book request yet, please check back !
                        </div>
                        <div v-else>
                            <template >
                                <v-simple-table>
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left">
                                            <div class="text-subtitle-1 text-left font-weight-medium grey--text mb-2">Book <span class="primary--text">Title</span></div>
                                        </th>
                                        <th class="text-center">
                                            Number of requests
                                        </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="item in allBooks"
                                            :key="item.id"
                                            class="grey--text"
                                        >
                                            <td>
                                                <nuxt-link :to="'/admins/update-record/' + item._id" class="grey--text" >{{ item.bookTitle }}</nuxt-link>
                                            </td>
                                            <td class="text-center" v-if="item.requestUsers">{{ item.requestUsers.length }}</td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </template>
                        </div>
                    </v-col>
                </v-row>
                </v-container>
        </v-item-group>
    </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
    middleware: ['auth', 'isAdmin'],
    components: {},
    data(){
        return {
            loading: false,
            search: null,
        }
    },
    computed: {
        ...mapGetters({
            'bookRequests': 'administration/bookRequests',
            'allBooks': 'transactions/allBooks',
            'pendingRequests': 'administration/pendingRequests'
        })
    },
    methods:{
        ...mapActions({
            'getAllBookRequests': 'administration/getAllBookRequests',
            'getAllPendingRequests': 'administration/getAllPendingRequests',
            'getAllBooks': 'transactions/getAllBooks',
        }),
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
        // this.getAllPendingRequests
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