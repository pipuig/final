<template>
  <div :class="[$style.userExperience, 'featureSection']">

    <br>
    <vue-grid>
          <vue-grid-row>
            <VueGridItem fill class="vueGridItem">
                    <h2>Colaboraciones</h2>
            </VueGridItem>

          </vue-grid-row>
          <vue-grid-row>
              <vue-grid-item class="vueGridItem">
                  <vue-panel class="vuePanel">
                      <vue-panel-body>
                        <vue-icon-flag />
                        <h5>Ayuda a la Basílica suscribiendote a una donación <b>mensual:</b></h5>
                        <vue-button onclick="window.location.href='http://mpago.la/bOiI'">$500</vue-button>
                        <vue-button onclick="window.location.href='http://mpago.la/QHIN'">$2000</vue-button>
                        <vue-button onclick="window.location.href='http://mpago.la/AtDN'">$5000</vue-button>
                      </vue-panel-body>
                  </vue-panel>
              </vue-grid-item>
              <vue-grid-item class="vueGridItem">
                  <vue-panel class="vuePanel">
                    <vue-panel-body>
                        <vue-icon-certificate />
                        <h5>Ayuda a la Basílica con una donación <b>única:</b></h5>
                        <vue-button onclick="window.location.href='http://mpago.la/bOiI'">$50</vue-button>
                        <vue-button onclick="window.location.href='http://mpago.la/bOiI'">$100</vue-button>
                        <vue-button onclick="window.location.href='http://mpago.la/bOiI'">$500</vue-button>
                    </vue-panel-body>
                  </vue-panel>
              </vue-grid-item>
          </vue-grid-row>

    </vue-grid>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script lang="ts">
  import VueGrid            from '../../shared/components/VueGrid/VueGrid';
  import VueGridItem        from '../../shared/components/VueGridItem/VueGridItem';
  import VuePanel           from '../../shared/components/VuePanel/VuePanel';
  import VuePanelBody       from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody';
  import VueGridRow         from '../../shared/components/VueGridRow/VueGridRow';
  import VueIconSpinner     from '../../shared/components/icons/VueIconSpinner/VueIconSpinner';
  import VueIconMobile      from '../../shared/components/icons/VueIconMobile/VueIconMobile';
  import VueIconPuzzlePiece from '../../shared/components/icons/VueIconPuzzlePiece/VueIconPuzzlePiece';
  import VueBadge                                         from '../../shared/components/VueBadge/VueBadge';
  import VueButton                                        from '../../shared/components/VueButton/VueButton.vue';
  import VueIconCertificate from '../../shared/components/icons/VueIconCertificate/VueIconCertificate';
  import VueIconFlag        from '../../shared/components/icons/VueIconFlag/VueIconFlag';


  export default {
    metaInfo:   {
      title: 'Ofrendas',
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
          content: 'Ofrendas',
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
      VueIconPuzzlePiece,
      VueIconMobile,
      VueIconSpinner,
      VueGrid,
      VueGridItem,
      VuePanel,
      VuePanelBody,
      VueGridRow,
      VueBadge,
      VueButton,
      VueIconFlag,
      VueIconCertificate,
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .userExperience {
    display:    block;
    text-align: center;


    i {
      display:    inline-block;
      height:     $font-size-h1;
      width:      $font-size-h1;
      margin-top: $space-unit;
    }

  }
</style>
