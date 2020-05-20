export default {
  head() {
    return {
      htmlAttrs: {
        lang: 'ja'
      },
      title: (this.meta && this.meta.title) || 'デフォルトのタイトル',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            (this.meta && this.meta.description) || 'デフォルトのdescription'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            (this.meta && this.meta.description) || 'デフォルトのog:description'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: (this.meta && this.meta.title) || 'デフォルトのog:site_name'
        },
        {
          hid: 'og:type',
          propery: 'og:type',
          content: (this.meta && this.meta.type) || 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            (this.meta && this.meta.image) ||
            'https//example.com/ogImagePath.png'
        }
      ]
    }
  }
}
