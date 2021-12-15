<template>
    <main>
        <v-item-group active-class="primary">
            <v-container>
                <div class="text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize">{{singleBook.bookTitle}}</div>
                <v-row>
                    <v-col  cols="12" md="6">
                        <v-row>
                            <v-col cols="12" md="4">
                                <div class="fill-height d-flex justify-center flex-column align-center" >
                                    <img :src="singleBook.bookCover" width="100%" alt="Login image"/>
                                </div>
                            </v-col>
                            <v-col cols="12" md="8">
                                <div class="grey--text mb-3">Author: <strong>{{singleBook.authorName}}</strong></div>
                                <div class="grey--text mb-3">Published on: <strong>{{singleBook.publishDate}}</strong></div>
                                <div class="grey--text mb-3">ISBN number: <strong>{{singleBook.isbnNumber}}</strong></div>
                                <div class="grey--text mb-3">Available copies: <strong>{{singleBook.availableCopies}}</strong></div>
                                <v-row>
                                    <v-col cols="6">
                                        <div class="grey--text mb-3">Borrow book for (in days):</div>
                                    </v-col>
                                    <v-col>
                                        <div class="grey--text"> 
                                            <v-select
                                                :items="items"
                                                label="Days"
                                                v-model="numberOfDays"
                                                solo
                                                :required="true"
                                                ></v-select>
                                        </div>
                                    </v-col>
                                </v-row>
                                <div class="grey--text mb-6 d-flex justify-center">Book description:
                                    <p class="text-justify text--disabled">{{singleBook.description}}</p>
                                </div>
                                <v-btn @click="borrowBook" color="primary" block class="px-12 w-full bg-primary ">Borrow Book</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-dialog
                    v-model="dialog"
                    max-width="290"
                    >
                    <v-card>
                        <v-card-title class="text-h5 text-center primary--text">
                            Borrow Book
                        </v-card-title>

                        <v-card-text class="text-center">
                            Are you sure you want to borrow this book for {{numberOfDays}} days
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                            <v-btn @click="confirmBorrow()" color="primary" depressed block class="px-12 w-full bg-primary ">Confirm</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
            </v-container>
        </v-item-group>
    </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
export default {
    middleware: ['auth', 'isUser'],
    data(){
        return {
            bookTitle: 'Purpose Driven Life',
            items: [1,  2, 3],
            dialog: false,
            bookId: null,
            numberOfDays: null
        }
    },
    computed: {
        ...mapGetters({
            'singleBook': 'transactions/singleBook'
        }),
        proposedDate: function(){
            if(this.numberOfDays){
                return new Date(theDate.getTime() + this.numberOfDays*24*60*60*1000)
            }
        }
    },
    methods: {
        ...mapActions({
            'getSingleBook': 'transactions/getSingleBook',
            'borrowBookAction': 'transactions/borrowBook'
        }),
        borrowBook(){
            this.dialog = true;
        },
        async confirmBorrow(){
            try{
                let currentDate = new Date();
                let newDate = currentDate.setDate(currentDate.getDate() + this.numberOfDays);
                const data = {
                    numberOfDays: this.numberOfDays,
                    bookId: this.bookId,
                    // returnDate: newDate
                }
                console.log(data)
                await this.borrowBookAction(data)
                this.dialog = false;
            } catch(err){

            }
        }
    },
    mounted(){
        this.bookId = this.$route.params.id
        this.getSingleBook(this.bookId)
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