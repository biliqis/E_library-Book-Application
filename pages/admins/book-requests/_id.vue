<template>
    <main>
    <v-container>
        <v-item-group active-class="primary">
                <div class="text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize">{{singleBook.bookTitle}}</span></div>
                <div>
                    <v-row>
                        <v-col cols="12" md="4" class="pa-0">
                            <div class="d-flex items-center">
                                <v-text-field
                                    v-model="search"
                                    placeholder="Search user"
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
                        <div>
                        </div>
                        <v-col cols="12" md="8" class="pa-0">
                            <v-btn class="ml-auto d-flex" color="primary" depressed @click="approveReq">Lend Book</v-btn>
                        </v-col>
                    </v-row>
                </div>
                <v-row>
                    <v-col  cols="12" class="pa-0">
                        <template>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        Users
                                    </th>
                                    <th class="text-right">
                                        Update User
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="item in pendingRequests"
                                    :key="item.name"
                                    >
                                    <td>{{ item.username }}</td>
                                    <td class="text-right d-flex ml-auto">                                        
                                        <v-checkbox v-model="selected" color="primary" class="d-flex justify-content-end ml-auto align-right" :value="item._id" :multiple="true"></v-checkbox>
                                    </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                        </template></v-col>
                </v-row>
        </v-item-group>
        </v-container>
        <v-dialog
            v-model="dialog"
            max-width="290"
            >
            <v-card>
                <v-card-title class="text-h5 d-flex mx-center text-center primary--text">
                    Borrow Book
                </v-card-title>

                <v-card-text class="text-center">
                    Are you sure you want to approve this book
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                    <v-btn @click="confirmApproval()" color="primary" depressed block class="px-12 w-full bg-primary ">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
            
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
    middleware: ['auth', 'isAdmin'],
    data(){
        return {
            dialog: false,
            loading: false,
            search: null,
            bookTitle: 'Purpose driven life',
            checkbox: false,
            approvals: null,
            selected: []
        }
    },
    computed: {
        ...mapGetters({
            'singleBook': 'transactions/singleBook',
            'pendingRequests': 'administration/pendingRequests'
        })
    },
     methods: {
        ...mapActions({
                'getSingleBook': 'transactions/getSingleBook',
                'approveRequests': 'administration/approveRequests',
                'getAllPendingRequests': 'administration/getAllPendingRequests',
        }),
        clickToApprove(val){
            console.log(val)
            this.approvals = val
        },

        async approveReq(){
            if(this.selected.length < 1){
                this.$notify({
                    group: 'auth',
                    text: 'You need to select at least a book to continue.',
                    duration: 2000,
                });
                this.dialog = false;
            }    else{
                this.dialog = true;
            }
            
        },
        async confirmApproval(){
            try{
                const data = {
                        requestIds: this.selected,
                        bookId: this.bookRequestsId
                    }
                await this.approveRequests(data)
                this.dialog = true;
                this.$notify({
                    group: 'auth',
                    text: 'Book has been approved',
                    duration: 2000,
                });
            } catch(err){

            }
        },

      searchResult(){
            const data = {
                book: this.search ? this.search : ""
            }
            this.getAllBooks(data)
        }
    },
    mounted(){
        this.bookRequestsId = this.$route.params.id
        this.getAllPendingRequests(this.bookRequestsId)
        this.getSingleBook(this.bookRequestsId)
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