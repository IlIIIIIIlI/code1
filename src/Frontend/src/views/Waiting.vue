<template>
    <v-row align="center">
        <v-col class="text-center">

            <!-- Title -->
            <div class="my-10">
                <h1 class='display-1'>Game ID: <i>{{ this.$store.state.gameID }}</i> </h1> 
                    <p>Other players can use this Game ID to join this game.</p>
                    <v-btn v-on:click='copyGameId' depressed color="primary">
                        Copy Game ID
                        <v-icon right>
                            mdi-clipboard
                        </v-icon>
                    </v-btn>
            </div>

            <!-- List of Players in Room -->
            <div class="my-6">
                <v-card class="mx-auto" tile max-width="400">
                    <v-list-item v-for="player in players" v-bind:key="player">
                        <v-list-item-content>
                            <v-list-item-title v-text="player"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </div>

            <!-- Display start game if game can start, otherwise show progress bar -->
            <div class="my-6">
                <div v-if="this.ready === true">
                    <router-link to="/Background">
                        <v-btn x-large color="primary">Start Game</v-btn>
                    </router-link>
                </div>
                <div v-else>
                    <v-progress-circular indeterminate color="primary" />
                    <p class="my-5">Waiting for all players</p>
                </div>
            </div>

            <v-snackbar timeout="4000" v-model="copyGameIdSnackbar">
                <div class="text-center">
                    Game ID copied to clipboard
                </div>
            </v-snackbar>

        </v-col>
    </v-row>
</template>

<script>
import axios from "axios";

function updatePlayers() {
    if (!this.ready) {
        let vm = this;
        return axios
            .get(process.env.VUE_APP_BACKEND_URL + "play/wait/" + vm.$store.state.gameID, {params: {roleID: vm.$store.state.roleID}})
            .then((response) => {
                if (response.status === 200) {
                    vm.players = response.data.players;
                    vm.ready = response.data.ready;
                }
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    }
}

function copyGameId() {
    navigator.clipboard.writeText(this.$store.state.gameID);
    this.copyGameIdSnackbar = true;
}

export default {
    data() {
        return {
            gameID: "",
            players: [],
            timer: "",
            ready: false,
            copyGameIdSnackbar: false,
        };
    },
    created() {
        this.updatePlayers();
        this.timer = setInterval(this.updatePlayers, 1000);
    },
    methods: {
        updatePlayers,
        copyGameId,
    },
};
</script>

<style>
ol {
    float: left;
    text-align: left;
    width: 100%;
}
</style>
