<template>
  <div class="player-info" v-cloak>
    <p>Current Player: {{ playerName }}</p>
    <p>Current Role: {{ roleName }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PlayerInfo",
  data() {
    return {
      playerName: '',
      roleName: 'Not Selected'
    };
  },
  mounted() {
    this.fetchRole();
  },
  methods: {
    fetchRole() {
      let vm = this;
      axios
          .get(process.env.VUE_APP_BACKEND_URL + "play/" + vm.$store.state.gameID + "/roles")
          .then((response) => {
            if (response.status === 200) {
              console.log(vm.$store.state)
              console.log("Response:", response.data);
              vm.playerName = vm.$store.state.playerName;
              const roleID = vm.$store.state.roleID;
              if (roleID >= 0 && roleID < response.data.roles.length) {
                vm.roleName = response.data.roles[roleID].title;
              }
            }
          })
          .catch((error) => {
            console.log("error: " + error);
          });
    }
  },
  watch: {
    '$store.state.roleID': function (newRoleID, oldRoleID) {
      if (newRoleID !== oldRoleID) {
        this.fetchRole();
      }
    }
  }
};
</script>

<style scoped>
.player-info {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
}

::v-deep [v-cloak] {
  display: none;
}
</style>




