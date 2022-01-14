<template>
    <main>
        <v-item-group active-class="primary">
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
                    </v-row>
                </div>
                <v-row>
                    <v-col  cols="12" >
                        <div class="text-subtitle-1 text-left font-weight-normal grey--text mb-2" v-if="allUsers.length < 1">
                            No user has been registered yet, please check back !
                        </div>
                        <template v-else>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                    <th class="text-left">
                                        <div class="text-h6 text-left font-weight-medium grey--text mb-2">All <span class="primary--text">Users</span></div>
                                    </th>
                                    <th class="text-center">
                                        Date of Registration
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                    v-for="item in allUsers"
                                    :key="item._id"
                                    class="grey--text"
                                    >
                                        <td class="grey--text">{{ item.firstName }}                                </td>
                                        <td class="text-center">{{ item.updatedAt }}</td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            </template>
                    </v-col>
                </v-row>
        </v-item-group>
    </main>
</template>




<script>

import { mapGetters, mapActions } from "vuex"
export default {
    components: {},
    middleware: ['auth', 'isAdmin'],
    data(){
        return {
            search: null
        }
    },
    computed: {
        ...mapGetters({
            'allUsers': 'administration/allUsers',
        })
    },
    methods: {
        ...mapActions({
            'getAllUsers': 'administration/getAllUsers',
        }),
        searchResult(e) {
            
            this.getAllUsers(this.search ? this.search : "");
        }
    },
    mounted(){
        const registerData = {
            userSearch: this.search ? this.search : ""
        };
        this.getAllUsers(registerData);
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