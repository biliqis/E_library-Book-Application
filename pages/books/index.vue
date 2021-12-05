<template>
    <main>
        <v-item-group active-class="primary">
            <v-container>
                
                <v-row>
                    <v-col  cols="12" >
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="!books">
                            No book has been added yet, please check back !
                        </div>
                        <template>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        <div class="text-h6 text-left font-weight-medium grey--text mb-2">Book <span class="primary--text">Title</span></div>
                                    </th>
                                    <th class="text-center">
                                        Available Copies
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
                                            <nuxt-link :to="'/books/' + item._id" class="grey--text">{{ item.bookTitle }}</nuxt-link>
                                        </td>
                                        <td class="text-center">{{ item.availableCopies }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            </template>
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
    components: {},
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
            'allBooks': 'transactions/allBooks'
        })
    }, 
    methods: {
        ...mapActions({
            'getAllBooks': 'transactions/getAllBooks'
        })
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