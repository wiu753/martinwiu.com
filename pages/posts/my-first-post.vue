<template>
  <post-template>
    <template v-slot:title>{{ post.title }}</template>
    <template v-slot:info>
      {{ post.datePublished }} - {{ post.minutesToRead }} min read
    </template>
    <template v-slot:body>
      <p>
        Bacon ipsum dolor amet chuck leberkas brisket pancetta flank ribeye
        sausage jowl bresaola tongue swine. Meatball cow venison sausage ham
        spare ribs tenderloin ribeye turkey burgdoggen kevin brisket. Salami ham
        hock ribeye porchetta, sirloin pork chop chislic prosciutto filet mignon
        kevin ball tip venison doner. Capicola hamburger kielbasa meatloaf tail
        kevin rump sausage.
      </p>
      <p>
        Chuck frankfurter ham, shankle tongue meatball turducken venison
        capicola biltong rump. Hamburger pork shankle ham, sirloin turducken
        tail. Tri-tip shankle burgdoggen short ribs. Strip steak tongue
        drumstick flank, pancetta tri-tip frankfurter bacon bresaola porchetta
        pastrami ribeye corned beef jerky pig.
      </p>
      <p>
        Beef porchetta pork pork chop tail sausage, meatball ground round
        drumstick chuck. Beef picanha tongue shankle chuck cupim sausage beef
        ribs doner strip steak salami pancetta. Burgdoggen buffalo andouille,
        chuck brisket jowl shank sausage jerky. Kielbasa beef turkey pork chop
        jowl fatback short loin spare ribs picanha buffalo. Venison ball tip
        burgdoggen leberkas prosciutto short loin. Ham flank cow fatback t-bone
        hamburger. Tenderloin beef ribs rump jerky.
      </p>
    </template>
  </post-template>
</template>

<script>
import PostTemplate from '@/components/Post'
import posts from '@/posts.js'

export default {
  components: {
    PostTemplate
  },

  data() {
    return {
      slug: 'my-first-post'
    }
  },

  computed: {
    post() {
      return posts.find((obj) => obj.slug === this.slug)
    }
  }
}
</script>
