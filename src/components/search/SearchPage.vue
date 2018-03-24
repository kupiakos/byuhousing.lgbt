<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex xs12 sm8 md6>
        <v-text-field
          solo append-icon="search"
          name="search" label="Search" single-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-spacer class="my-5"></v-spacer>
    <v-container grid-list-md>
      <v-layout row wrap>
        <listing-card
          v-for="(listing, i) of listings"
          :key="i"
          :listing="listing"
          :referred="referred"
        ></listing-card>
      </v-layout>
    </v-container>
  </v-container>

</template>

<script>
import ListingCard from './ListingCard'
export default {
  components: { ListingCard },
  data: () => ({
    referred: true,
    listings: [
      {
        'title': 'Safe housing with 2 queer women',
        'username': 'hayley_kiyoko',
        'ward': 'Provo 69th Ward',
        'description': 'Lorem ipsum solor dolaoeusntmh'
      },
      {
        'title': 'Cozy apartment',
        'username': 'kupiakos',
        'ward': 'Provo 42nd Ward',
        'description': 'aoeunthueth aounu e ausnthxk098 aaoenuth'
      },
      {
        'title': 'Example Listing',
        'username': 'kupiakos',
        'ward': 'Provo 420th Ward',
        'description': 'because I am too lazy to create something'
      }
    ]
  })
}
</script>


<style scoped>

</style>
