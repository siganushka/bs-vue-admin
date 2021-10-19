import Layout from '@/layouts/Layout'

export default [
  // 管理后台
  {
    path: '/',
    name: 'Homepage',
    component: Layout,
    redirect: '/welcome',
    meta: {
      title: '仪表盘',
      icon: 'house-fill'
    },
    children: [
      {
        path: '/welcome',
        name: 'Welcome',
        component: () => import(/* webpackChunkName: "Dashboard" */ '../views/Welcome.vue'),
        meta: {
          title: '欢迎页面'
        }
      }
    ]
  },
  // 订单管理
  {
    path: '/orders',
    name: 'Order',
    component: Layout,
    meta: {
      title: '订单管理',
      icon: 'minecart-loaded'
    },
    children: [
      {
        path: '/orders/list',
        name: 'OrderList',
        component: { template: '<div>OrderList</div>' },
        meta: {
          title: '订单管理'
        }
      },
      {
        path: '/orders/refund',
        name: 'OrderRefund',
        component: { template: '<div>OrderRefund</div>' },
        meta: {
          title: '退款订单'
        }
      },
      {
        path: '/orders/exception',
        name: 'OrderException',
        component: { template: '<div>OrderException</div>' },
        meta: {
          title: '异常订单'
        }
      }
    ]
  },
  // 数据报表
  {
    path: '/data',
    name: 'Data',
    component: Layout,
    meta: {
      title: '数据报表',
      icon: 'bar-chart-fill'
    },
    children: [
      {
        path: '/data/detail',
        name: 'DataDetail',
        component: { template: '<div>DataDetail</div>' },
        meta: {
          title: '销售明细'
        }
      },
      {
        path: '/data/analyse',
        name: 'DataAnalyse',
        component: { template: '<div>DataAnalyse</div>' },
        meta: {
          title: '数据分析'
        }
      },
      {
        path: '/data/statistic',
        name: 'DataStatistic',
        component: { template: '<div>DataStatistic</div>' },
        meta: {
          title: '运营情况'
        }
      },
      {
        path: '/data/refund',
        name: 'DataRefund',
        component: { template: '<div>DataRefund</div>' },
        meta: {
          title: '退款明细'
        }
      }
    ]
  },
  // 系统管理
  {
    path: '/system',
    name: 'System',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'gear-fill'
    },
    children: [
      {
        path: '/system/user',
        name: 'SystemUser',
        component: { template: '<div>SystemUser</div>' },
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/system/role',
        name: 'SystemRole',
        component: { template: '<div>SystemRole</div>' },
        meta: {
          title: '角色管理'
        }
      },
      {
        path: '/system/permission',
        name: 'SystemPermission',
        component: { template: '<div>SystemPermission</div>' },
        meta: {
          title: '权限节点'
        }
      },
      {
        path: '/system/setting',
        name: 'SystemSetting',
        component: { template: '<div>SystemSetting</div>' },
        meta: {
          title: '参数设置'
        }
      }
    ]
  },
  // 异常页面
  {
    path: '/error',
    name: 'Error',
    component: Layout,
    meta: {
      title: '异常页面',
      icon: 'emoji-expressionless'
    },
    children: [
      {
        path: '/error/403',
        name: 'Error403',
        component: { template: '<div>Error403</div>' },
        meta: {
          title: 'Error403'
        }
      },
      {
        path: '/error/404',
        name: 'Error404',
        component: { template: '<div>Error404</div>' },
        meta: {
          title: 'Error404'
        }
      },
      {
        path: '/error/500',
        name: 'Error500',
        component: { template: '<div>Error500</div>' },
        meta: {
          title: 'Error500'
        }
      }
    ]
  },
  // // Page not found
  // {
  //   path: '*',
  //   redirect: '/error/404'
  // }
]
