const state = {
  navibarCells: [{
    path: '',
    title: '小米商城'
  },
  {
    path: '/documentation',
    title: 'MIUI'
  }
    ,
  {
    path: '/documentation',
    title: 'IoT'
  },
  {
    path: '/documentation',
    title: '云服务'
  },
  {
    path: '/documentation',
    title: '天星数科'
  },
  {
    path: '/documentation',
    title: '有品'
  },
  {
    path: '/documentation',
    title: '小爱开放平台'
  },
  {
    path: '/documentation',
    title: '企业团购'
  },
  {
    path: '/documentation',
    title: '资质证照'
  },
  {
    path: '/documentation',
    title: '协议规则'
  },
  {
    path: '/documentation',
    title: '下载app'
  },
  {
    path: '/documentation',
    title: '智能生活'
  },
  {
    path: '/documentation',
    title: 'Select Location'
  },
  ]
}

const mutations = {
  SET_NAVIBAR: (state, navibarCells) => {
    state.navibarCells = navibarCells
  }
}
const actions = {
  setNavibar({ commit }, navibarCells) {
    commit('SET_NAVIBAR', navibarCells)
  }
}
export default
  {
    mutations,
    actions,
    state
  }
