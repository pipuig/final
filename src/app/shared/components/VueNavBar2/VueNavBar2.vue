<template>
  <div :class="$style.vueNavBar2" ref="nav">
    <div :class="$style.bg">
    </div>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <router-link to="/" exact>
            <img :class="$style.brand" :src="imageUrl" alt="logo" />
          </router-link>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
  import VueGrid     from '../VueGrid/VueGrid';
  import VueGridItem from '../VueGridItem/VueGridItem';
  import VueGridRow  from '../VueGridRow/VueGridRow';
  import { EventBus } from '../../services/EventBus';

  export default {
    name:       'VueNavBar',
    components: {
      VueGrid,
      VueGridItem,
      VueGridRow,
    },
    props:      {
      to:       {
        type:     String,
        required: false,
        default:  '/',
      },
      imageUrl: {
        type:     String,
        required: false,
        default:  '/circle.png',
      },
    },
    computed:   {
      bgCssClasses() {
        const classes = [this.$style.bg];

      },
      hamburgerCssClasses() {
        const classes = [this.$style.hamburger];

      },
    },
    methods:    {
      handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isSticky = scrollTop > 0;
      },
      handleDocumentClick(e: Event) {
        if (this.$refs.nav.contains(e.target) === false) {
          this.isOpen = false;
        }
      },
      handleCloseEvent() {
        this.isOpen = false;
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
      document.addEventListener('click', this.handleDocumentClick);
      document.addEventListener('touchstart', this.handleDocumentClick);
      EventBus.$on('navbar.close', this.handleCloseEvent);
    },
    mounted() {
      this.handleScroll();
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
      document.removeEventListener('click', this.handleDocumentClick);
      document.removeEventListener('touchstart', this.handleDocumentClick);
    },
  };
</script>

<style lang="scss" module>
  @import "../../styles";

  .vueNavBar2 {
    width:      $nav-bar-width;
    max-height: 4.5rem;
    color:      $nav-bar-color;
    padding:    $nav-bar-padding;
    z-index:    $nav-bar-index;
    position:   fixed;
    top:        0;
    left:       0;
  }

  .bg {
    background: white;
    width:      100%;
    height:     100%;
    position:   absolute;
    top:        0;
    left:       0;
    z-index:    -1;
    transition: $nav-bar-bg-transition;
    opacity:    1;
    box-shadow: $nav-bar-shadow;

    &.in {
      opacity: 1;

      .accent {
        transform: skewX(-50deg) translateX(0);
      }
    }

    .accent {
      height:     $nav-bar-height;
      background: $nav-bar-accent-bg;
      width:      66%;
      transform:  skewX(-50deg) translateX(-100%);
      left:       -47px;
      position:   relative;
      box-shadow: $nav-bar-accent-shadow;
      transition: $nav-bar-bg-accent-transition
    }
  }

  .brand {
    flex: 1;
    padding: $space-unit * 2 0 0 0;
    height:  4.5rem - ($space-unit);
    z-index: 2;
  }

  .brand2 {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .menu {
    display:    block;
    flex:       1;
    flex-basis: 100%;
    list-style: none;
    margin-top: 1px;
    padding:    $space-unit * 2 0;
    border-top: 1px solid $nav-bar-menu-border-color;
    background: $nav-bar-menu-bg;
  }

  .hamburger {
    position:                   absolute;
    right:                      $space-unit * 2;
    top:                        $space-unit * 2;
    padding:                    $space-unit / 2 $space-unit;
    display:                    inline-block;
    cursor:                     pointer;
    transition-property:        opacity, filter;
    transition-duration:        250ms;
    transition-timing-function: linear;
    font:                       inherit;
    color:                      inherit;
    text-transform:             none;
    border:                     0;
    overflow:                   visible;
    background:                 $brand-primary;

    &.in {
      background: transparent;
      .inner {
        &,
        &::before,
        &::after {
          background: $nav-bar-hamburger-bg;
        }
      }
    }

    .box {
      width:    $space-unit * 4;
      height:   $space-unit * 4;
      display:  inline-block;
      position: relative;
    }

    .inner {
      display:                    block;
      top:                        50%;
      margin-top:                 0;

      &,
      &::before,
      &::after {
        width:                      $space-unit * 4;
        height:                     $space-unit / 2;
        background:                 $nav-bar-bg;
        border-radius:              0;
        position:                   absolute;
        transition-property:        transform;
        transition-duration:        0.15s;
        transition-timing-function: ease;
      }

      &::before,
      &::after {
        content: "";
        display: block;
      }

      &::before {
        top: ($space-unit / 2+ $space-unit / 2) * -1;
      }

      &::after {
        bottom: ($space-unit / 2 + $space-unit / 2) * -1;
      }

      transition-duration:        0.075s;
      transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

      &::before {
        transition: top 0.075s 0.12s ease,
                    opacity 0.075s ease;
      }

      &::after {
        transition: bottom 0.075s 0.12s ease,
                    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }

    &.active {
      .inner {
        transform:                  rotate(45deg);
        transition-delay:           0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);

        &::before {
          top:        0;
          opacity:    0;
          transition: top 0.075s ease,
                      opacity 0.075s 0.12s ease;
        }

        &::after {
          bottom:     0;
          transform:  rotate(-90deg);
          transition: bottom 0.075s ease,
                      transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
        }
      }
    }
  }

  @include media(tabletPortrait) {
    .hamburger {
      margin-right: $space-unit * 2;
    }
  }
</style>
