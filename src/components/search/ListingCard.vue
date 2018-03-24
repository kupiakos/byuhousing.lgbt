<template>
<v-flex xs12 sm6 md6 lg4>
<v-card v-if="listing">
  <v-card-title primary-title>
    <div>
      <div class="headline">
        {{ listing.title }}
        <v-spacer></v-spacer>
      </div>
      <span class="grey--text">
        {{ listing.ward }}
      </span>
    </div>
  </v-card-title>
  <v-card-actions>
    <v-btn v-if="referred" flat color="purple">Contact</v-btn>
    <v-btn flat>Copy Link</v-btn>
    <v-spacer></v-spacer>
    <v-btn icon @click.native="show = !show">
      <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
    </v-btn>
  </v-card-actions>
  <v-slide-y-transition>
    <v-card-text v-show="show">
      {{ listing.description }}
    </v-card-text>
  </v-slide-y-transition>
</v-card>
</v-flex>
</template>

<script>
export default {
  props: ['listing', 'referred'],
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>

