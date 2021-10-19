<template>
  <b-container fluid>
    <b-row>
      <b-col class="global-menu bg-dark p-0" :style="{ width: menuCollapsed ? '54px' : '200px' }">
        <b-navbar toggleable="md" type="dark" variant="dark" class="shadow-sm">
          <b-navbar-brand href="/">
            <b-icon-bootstrap />
            <span v-if="!menuCollapsed">Dashboard</span>
          </b-navbar-brand>
        </b-navbar>
        <bsv-menu
          :data="menuData"
          :collapsed="menuCollapsed"
        />
      </b-col>
      <b-col class="global-main p-0" :style="{ marginLeft: menuCollapsed ? '54px' : '200px' }">
        <bsv-navbar
          :sticky="navBarSticky"
          :collapsed="menuCollapsed"
          @brand-click="handleBrandClick"
          @nav-click="handleNavClick"
        />
        <div class="main-content m-3">
          <router-view />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'

export default {
  name: 'Layout',
  components: {
    [Menu.name]: Menu,
    [Navbar.name]: Navbar
  },
  data() {
    return {
      // 菜单收起
      menuCollapsed: false,
      // 导航栏固定
      navBarSticky: true
    }
  },
  computed: {
    menuData: function() {
      return this.$router.options.routes
    }
  },
  methods: {
    handleBrandClick: function() {
      this.menuCollapsed = !this.menuCollapsed
      this.$bvToast.toast('Brand Clicked!', {
        title: 'foo',
        variant: 'success',
        autoHideDelay: 2000
      })
    },
    handleNavClick: function (item) {
      this.$bvToast.toast(`NavBar Clicked: ${item.title}`, {
        title: 'foo',
        variant: 'success',
        autoHideDelay: 2000
      })
    }
  }
}
</script>

<style lang="scss">
.container-fluid {
  .global-menu,
  .global-main {
    transition: margin-left .15s ease-in-out, width .15s ease-in-out;
  }

  .global-menu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
    overflow: hidden;

    .navbar {
      padding-left: 1.15rem;
      .navbar-brand {
        color: rgba(255, 255, 255, .55);

        &:hover {
          color: rgba(255, 255, 255, .75);
        }

        .bi {
          margin-right: .75rem;
        }
      }
    }

    .nav-link {
      color: rgba(255, 255, 255, .55);

      &:hover {
        color: rgba(255, 255, 255, .75);
      }

      &.active {
        color: #fff;
      }
    }
  }
}
</style>
