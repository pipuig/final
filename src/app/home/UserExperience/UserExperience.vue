<template>
  <div :class="[$style.userExperience, 'featureSection']">

    <vue-grid>

        <!--
        <vue-grid-item class="vueGridItem">
          <h2>Headlines with badges</h2>
          <h1>Headline 1
            <vue-badge>New</vue-badge>
          </h1>
          <h2>Headline 2
            <vue-badge primary>New</vue-badge>
          </h2>
          <h3>Headline 3
            <vue-badge accent>New</vue-badge>
          </h3>
          <h4>Headline 4
            <vue-badge warn>New</vue-badge>
          </h4>
          <h5>Headline 5
            <vue-badge>New</vue-badge>
          </h5>
          <h6>Headline 6
            <vue-badge>New</vue-badge>
          </h6>
        </vue-grid-item>
-->
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
