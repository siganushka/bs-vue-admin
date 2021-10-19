<template>
  <b-nav :class="{ collapsed: collapsed }" vertical pills>
    <template v-for="item in data">
      <li class="nav-item" role="tablist" :key="item.name">
        <b-link
          :class="{ 'nav-link': true, active: item.name === $route.name }"
          v-b-toggle="`Nav-Item-${item.name}`"
          @click="handleNavClick(item)"
        >
          <!-- 菜单左侧图标 -->
          <template v-if="item.meta.icon">
            <b-icon :icon="item.meta.icon" class="nav-link-left" />
          </template>

          <!-- 菜单文字内容 -->
          <span class="nav-link-text">{{ item.meta.title }}</span>

          <!-- 菜单右侧图标 -->
          <template v-if="item.children && item.children.length">
            <b-icon icon="chevron-down" class="nav-link-right" />
          </template>
        </b-link>

        <!-- 下级菜单列表 -->
        <template v-if="item.children && item.children.length">
          <b-collapse :id="`Nav-Item-${item.name}`" accordion="nav-item-children" role="tabpanel">
            <bsv-menu :data="item.children" />
          </b-collapse>
        </template>
      </li>
    </template>
  </b-nav>
</template>

<script>
export default {
  name: 'bsv-menu',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    active: {
      type: String
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleNavClick: function(item) {
      if (item.children && item.children.length) return
      this.$router.push({ name: item.name })
    }
  }
}
</script>

<style lang="scss">
.nav {
  &.collapsed {
    .nav-item {
      .nav-link {
        .nav-link-text,
        .nav-link-right {
          display: none;
        }
      }
    }

    .nav {
      display: none;
    }
  }

  .nav-item {
    .nav-link {
      padding: .75rem 0 .75rem 1.15rem;
      border-radius: 0;
      position: relative;
      white-space: nowrap;

      &.not-collapsed {
        .nav-link-right {
          transform: translateY(-50%) rotate(180deg);
        }
      }

      .nav-link-left {
        margin: 0 .75rem 0 0;
      }

      .nav-link-right {
        font-size: .75rem;
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        transition: transform .15s ease-in-out;
      }
    }

    .nav {
      .nav-item {
        .nav-link {
          padding-left: 3rem;
        }
      }
    }
  }
}
</style>
