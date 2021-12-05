<template>
    <main>
    <v-container>
        <div class="text-h6 text-left font-weight-medium grey--text mb-10 text-capitalize pa-0">Edit '{{singleBook.bookTitle}}'</span></div>
        <v-row>
            <v-col cols="12" md="4" class="pa-2">
                <div>
                    <v-text-field
                        v-model="title"
                        placeholder="Book Title"
                        required
                        label="Book Title"
                        dense
                        disabled
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                    <v-text-field
                        v-model="isbnNumber"
                        placeholder="ISBN number"
                        label="ISBN number"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                    <v-text-field
                        v-model="price"
                        placeholder="Price"
                        label="Price"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                    <v-text-field
                        v-model="noOfCopies"
                        placeholder="Number of copies"
                        label="Number of copies"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                    <v-text-field
                        v-model="description"
                        placeholder="Description"
                        label="Description"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
            </v-col>
            <v-col cols="12" md="4" class="pa-2">
                <div>
                    <v-text-field
                        v-model="authorName"
                        placeholder="Author name"
                        label="Author name"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                    <v-text-field
                        v-model="datePublished"
                        placeholder="Date published"
                        label="Date published"
                        required
                        dense
                        outlined
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
                <div cols="12" md="6" class="ma-0 pa-0">
                   <v-file-input
                        v-model="bookCover"
                        placeholder="Upload book cover"
                        label="Upload book cover"
                        required
                        dense
                        outlined
                        prepend-icon=""

accept="image/png, image/jpeg, image/jpg"
                        prepend-inner-icon="mdi-camera"
                        hide-details
                        block
                        :required="true"
                        class="ma-0 p-0 mb-3"
                    />
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="4" class="pa-0">
                <v-btn  color="primary" block class="px-12 bg-primary" @click="editExitedBook()">Edit Book</v-btn>
            </v-col>
        </v-row>
        </v-container>
    </main>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex"
export default {
    middleware: ['auth', 'isAdmin'],
    data(){
        return {
            bookId: null,
            bookCover: null
        }
    },
    computed: {
        ...mapGetters({
            'singleBook': 'transactions/singleBook',
        }),
        authorName: {
            get() {
                if (this.singleBook)
                return this.singleBook.authorName
                    ? this.singleBook.authorName
                    : null;
                return null;
            },
            set(value) {
                let item = "authorName";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        bookTitle: {
            get() {
                if (this.singleBook)
                return this.singleBook.bookTitle
                    ? this.singleBook.bookTitle
                    : null;
                return null;
            },
            set(value) {
                let item = "bookTitle";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        title: {
            get() {
                if (this.singleBook)
                return this.singleBook.bookTitle
                    ? this.singleBook.bookTitle
                    : null;
                return null;
            },
            set(value) {
                let item = "bookTitle";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        price: {
            get() {
                if (this.singleBook)
                return this.singleBook.pricePerBook
                    ? this.singleBook.pricePerBook
                    : null;
                return null;
            },
            set(value) {
                let item = "pricePerBook";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        isbnNumber: {
            get() {
                if (this.singleBook)
                return this.singleBook.isbnNumber
                    ? this.singleBook.isbnNumber
                    : null;
                return null;
            },
            set(value) {
                let item = "isbnNumber";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        noOfCopies: {
            get() {
                if (this.singleBook)
                return this.singleBook.noOfCopies
                    ? this.singleBook.noOfCopies
                    : null;
                return null;
            },
            set(value) {
                let item = "noOfCopies";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        description: {
            get() {
                if (this.singleBook)
                return this.singleBook.description
                    ? this.singleBook.description
                    : null;
                return null;
            },
            set(value) {
                let item = "description";
                this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
        datePublished: {
            get() {
                if (this.singleBook)
                return this.singleBook.publishDate
                    ? this.singleBook.publishDate
                    : null;
                return null;
            },
            set(value) {
                let item = "publishDate";

this.SET_BOOK_EDITED_DATA({ item, value });
            },
        },
    },
    methods: {
        ...mapMutations({
            'SET_BOOK_EDITED_DATA': 'transactions/SET_BOOK_EDITED_DATA'
        }),
        ...mapActions({
            'getSingleBook': 'transactions/getSingleBook',
            'editBook': 'transactions/editBook'
        }),
        async editExitedBook() {
            try{
                let blob = this.bookCover
                let formData = new FormData()

                const dataM = {
                    bookTitle: this.bookTitle,
                    authorName: this.authorName,
                    isbnNumber: this.isbnNumber,
                    noOfCopies: this.noOfCopies,
                    publishDate: this.datePublished,
                    description: this.description,
                    pricePerBook: this.price,
                    bookCover: this.blob
                }
                const data = {bookId: this.bookId, dataM}
                await this.editBook(data)
                await this.$notify({
                    group: 'auth',
                    text: "Book updated successfully",
                    duration: 1500,
                })
                // this.$router.push("/admins/all-books/")
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