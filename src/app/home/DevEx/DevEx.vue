<template>
  <div :class="[$style.devEx, 'featureSection']">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill class="vueGridItem">
          <h2>Peregrinacion</h2>
        </vue-grid-item>
      </vue-grid-row>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-panel class="vuePanel">
            <vue-panel-body>
              <iframe src="https://www.google.com/maps/d/embed?mid=1RX-IYlMAbDjHynUfmfdl2OneeDHyMYvN"></iframe>
            </vue-panel-body>
          </vue-panel>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
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
    height:550px;

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
