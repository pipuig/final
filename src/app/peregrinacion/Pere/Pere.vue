<template>
  <div :class="[$style.devEx, 'featureSection']">
    <br>
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Peregrinacion</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <iframe src="https://www.google.com/maps/d/embed?mid=1RX-IYlMAbDjHynUfmfdl2OneeDHyMYvN"></iframe>
      </vue-grid-row>
    </vue-grid>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
  import VueGrid         from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem     from '../../shared/components/VueGridItem/VueGridItem';
  import VueGridRow      from '../../shared/components/VueGridRow/VueGridRow';
  import VuePanel        from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody    from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueIconCode     from '../../shared/components/icons/VueIconCode/VueIconCode';
  import VueIconBullhorn from '../../shared/components/icons/VueIconBullhorn/VueIconBullhorn';

  export default {
    metaInfo:   {
      title: 'Peregrinacion',
      meta:  [
        {
          name:    'description',
          content: 'App Basílica de Luján',
        },
        {
          name:    'robots',
          content: 'INDEX,FOLLOW',
        },
        {
          name:    'keywords',
          content: 'basilica, de, lujan, basilica de lujan, virgen, virgen de lujan, progressive-web-app',
        },

        { name: 'og:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'og:site_name', content: 'App Basílica De Luján' },
        { name: 'og:type', content: 'website' },
        { name: 'og:locale', content: 'es' },
        {
          name:    'og:title',
          content: 'Peregrinacion',
        },
        {
          name:    'og:description',
          content: 'App Basílica de Luján',
        },
        { name: 'og:image:url', content: 'https://vue-starter.herokuapp.com/logo.png' },

        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@_jwerner_' },
        { name: 'twitter:creator', content: '@_jwerner_' },
        {
          name:    'twitter:title',
          content: 'vue-starter - Vue Starter',
        },
        { name: 'twitter:url', content: 'https://vue-starter.herokuapp.com/' },
        { name: 'twitter:image', content: 'https://vue-starter.herokuapp.com/logo.png' },
        {
          name:    'twitter:description',
          content: 'vue-starter - A flexible, scalable, opinionated boilerplate for production-ready PWAs with focus on performance, development speed, and best practices',
        },
      ],
    },
    components: {
      VueIconBullhorn,
      VueIconCode,
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  iframe{
    width:100%;
    height:520px;

/*
        @media (max-width: 760px) {
          height:400px;
        }
        @media (max-width: 600px) {
          height:350px;
    }
    @media (max-width: 450px) {
      height:350px;
    }
    @media (max-width: 350px) {
      height:200px;
    }
*/
  }

  .devEx {
    display:    block;
    text-align: center;
    height:100%;

    i {
      height:  $font-size-h1;
      width:  $font-size-h1;
      margin-top: $space-unit;
    }

  }
</style>
