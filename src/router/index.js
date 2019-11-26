
import loadable from '@/utils/loading'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views'))

// const ButtonView = loadable(() => import(/* webpackChunkName: 'button' */ '@/views/PublicView/Button'))
// const IconView = loadable(() => import(/* webpackChunkName: 'icon' */ '@/views/PublicView/Icon'))

// // 导航
// const DropdownView = loadable(() => import(/* webpackChunkName: 'dropdown' */ '@/views/NavView/Dropdown'))
// const MenuView = loadable(() => import(/* webpackChunkName: 'menu' */ '@/views/NavView/Menu'))
// const StepView = loadable(() => import(/* webpackChunkName: 'step' */ '@/views/NavView/Step'))

// // 表单
// const FormBaseView = loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/FormView/FormBaseView'))
// const FormStepView = loadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/FormView/FormStepView'))

// // 展示
// const TableView = loadable(() => import(/* webpackChunkName: 'table' */ '@/views/ShowView/Table'))
// const CollapseView = loadable(() => import(/* webpackChunkName: 'collapse' */ '@/views/ShowView/Collapse'))
// const TreeView = loadable(() => import(/* webpackChunkName: 'tree' */ '@/views/ShowView/Tree'))
// const TabsView = loadable(() => import(/* webpackChunkName: 'tabs' */ '@/views/ShowView/Tabs'))


const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },

]

export default routes