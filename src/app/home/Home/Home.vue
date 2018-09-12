<template>
  <div :class="$style.home">

    <stage
      :disable-particles="disableParticles" />
    <user-experience />
    <enterprise-ready />
    <dev-ex/>
    <quick-start />
  </div>
</template>

<script lang="ts">
  import { mapState }    from 'vuex';
  import Stage           from '../Stage/Stage';
  import DevEx           from '../DevEx/DevEx';
  import EnterpriseReady from '../EnterpriseReady/EnterpriseReady';
  import UserExperience  from '../UserExperience/UserExperience';
  import QuickStart      from '../QuickStart/QuickStart';
  import { IState }      from '../../state';

  export default {
    metaInfo:   {
      title: 'Basílica de Luján',
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
          content: 'Basílica de Luján',
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
      Stage,
      DevEx,
      EnterpriseReady,
      UserExperience,
      QuickStart,
    },
    computed:   {
      ...mapState({
                    disableParticles: (state: IState) => state.app.config && state.app.config.features.disableParticles,
                  }),
    },
  };
</script>

<style lang="scss" module>
  @import "../../shared/styles";

  .home {
    h2 {
      text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
    }

    :global {
      .vuePanel {
        height: 100%;
      }

      .vueGridItem {
        margin-bottom: $space-unit * 2;
      }

      .featureSection {
        padding: 0;
      }
    }

    @include media(tabletLandscape) {
      :global {
        .featureSection {
          padding: $space-unit * 15 0;
        }
      }
    }
  }
</style>
