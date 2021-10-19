<template>
  <b-navbar :sticky="sticky" toggleable="md" type="light" variant="light" class="shadow-sm">
    <b-navbar-brand href="#" :class="{ collapsed: collapsed }">
      <b-icon-text-indent-right @click="$emit('brand-click')" />
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav v-if="items.length">
        <template v-for="item in items">
          <b-nav-item :key="item.key" @click="$emit('nav-click', item)">
            {{ item.title }}
          </b-nav-item>
        </template>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'bsv-navbar',
  props: {
    sticky: {
      type: Boolean,
      default: true
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    brandClick: {
      type: Function
    },
    navClick: {
      type: Function
    }
  },
  data() {
    return {
      items: [
        { key: 'users', title: '用户', href: '#' },
        { key: 'transactions', title: '交易', href: '#' },
        { key: 'inventories', title: '库存', href: '#' },
        { key: 'refunds', title: '退款', href: '#' },
        { key: 'feedbacks', title: '反馈', href: '#' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    margin-right: .5rem;

    &.collapsed {
      .bi {
        transform: rotate(180deg);
      }
    }

    .bi {
      color: rgba(0, 0, 0, 0.5);
      font-size: 1.25rem;
      transition: transform .15s ease-in-out;
    }
  }
}
</style>
