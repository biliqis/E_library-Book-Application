<template>
    <main>
    <v-container>
        <v-item-group active-class="primary">
                <div class="text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize">'{{singleBook.bookTitle}}'</span></div>
                <div>
                    <v-row>
                        <v-col cols="12" md="4" class="pa-0">
                            <div class="d-flex items-center">
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
                                    @click="loader = 'loading'"
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
                            <v-btn class="ml-auto d-flex" color="primary" depressed @click="approveReq">Update Record</v-btn>
                        </v-col>
                    </v-row>
                </div>
                <v-row>
                    <v-col  cols="12" class="pa-0">
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="!bookRequests">
                            No book request yet, please check back !
                        </div>
                        <template>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        <div class="text-subtitle-1 text-left font-weight-medium grey--text mb-2">Users</div>
                                    </th>
                                    <th class="text-center">
                                        Select
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="(item, index) in singleBook.requestUsers"
                                    :key="index"
                                    class="grey--text"
                                    >
                                        <td>
                                            {{ item.firstName }}
                                        </td>
                                        <td class="text-center d-flex justify-center">
                                            <v-checkbox
                                                v-model="approvals"
                                                @click="clickToApprove(item._id)"
                                                multiple
                                                :value="item._id"
                                                class="my-auto d-flex"
                                            ></v-checkbox>
                                        </td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            </template>
                    </v-col>
                </v-row>
        </v-item-group>
        </v-container>
        <v-dialog
            v-model="dialog"
            max-width="290"
            >
            <v-card>
                <v-card-title class="text-h5 text-center primary--text">
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
import { mapGetters, mapActions, mapMutations } from "vuex"
export default {
    middleware: ['auth', 'isAdmin'],
  components: {},
  data(){
      return {
        dialog: false,
        loading: false,
        search: null,
        bookTitle: 'Purpose driven life',
        checkbox: false,
        approvals: null
      }
    },
    computed: {
            ...mapGetters({
                'bookRequests': 'administration/bookRequests',
                'singleBook': 'transactions/singleBook'
            })
        },
    methods:{
        ...mapMutations({
            'SET_MESSAGE': 'transactions/SET_MESSAGE',
        }),
            ...mapActions({
                'getSingleBook': 'transactions/getSingleBook',
                'updateRequests': 'administration/updateRequests',
            }),

            clickToApprove(val){
                console.log(val)
                this.approvals = val
            },

            async approveReq(){
                if(!this.approvals){
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
                    await this.updateRequests(this.bookRequestsId)
                    this.dialog = true;
                    this.$notify({
                        group: 'auth',
                        text: 'Book has been updated',
                        duration: 2000,
                    });
                } catch(err){

                }
            }
    },
    mounted(){
        this.bookRequestsId = this.$route.params.id
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