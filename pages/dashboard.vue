<template>
    <main>
        <v-item-group active-class="primary">
            <v-container>
                <v-row>
                    <v-col  cols="12" md="4" >
                        <v-item >
                            <v-card  class="d-flex align-center justify-center flex-column pa-2"  height="150" >
                                <nuxt-link to="">
                                    <div class="text-subtitle-1 text-center mx-auto font-weight-normal grey--text">Number of books borrowed </div>
                                    <div class="text-h3 text-center mx-auto primary--text">{{borrowedBooks.length}}</div>
                                </nuxt-link>
                            </v-card>
                        </v-item>
                    </v-col>
                </v-row>
            </v-container>
        </v-item-group>
    </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
    middleware: ['auth', 'isUser'],
    data(){
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            'borrowedBooks': 'transactions/borrowedBooks'
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
        }),
        searchResult(){

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
</style>