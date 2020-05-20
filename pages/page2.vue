<template>
  <p>page2</p>
</template>

<script>
import Header from '~/mixins/header'

export default {
  mixins: [Header],
  asyncData() {
    const title = 'page2'
    const description = 'page2 description'
    const ogDescription = 'page2 ogDescription'
    const image = 'htts://example.com/images/page2.png'
    return {
      meta: {
        title,
        description,
        ogDescription,
        image
      }
    }
  }
}
</script>
