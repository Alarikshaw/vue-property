import 'element-ui/lib/theme-chalk/index.css';
import './permission';
import 'vue-json-pretty/lib/styles.css'

//  按需引入element
import {
  Aside,
  Avatar,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Cascader,
  Checkbox,
  CheckboxGroup,
  Col,
  Collapse,
  CollapseItem,
  Container,
  DatePicker,
  Dialog,
  Divider,
  Drawer,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Header,
  Input,
  InputNumber,
  Loading,
  Main,
  Menu,
  MenuItem,
  Message,
  MessageBox,
  Option,
  Pagination,
  Popover,
  Progress,
  Row,
  Select,
  Steps,
  Submenu,
  Switch,
  TabPane,
  Table,
  TableColumn,
  Tabs,
  Tag,
  Tooltip,
  Tree,
  Upload
} from 'element-ui';

import App from './App.vue'
import ElementUI from 'element-ui';
import Vue from 'vue'
// 引入封装的router
import route from './router/index';
import { store } from './store/index';

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Select);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Option);
Vue.use(Container);
Vue.use(Card);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Badge);
Vue.use(Header);
Vue.use(Tabs);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Avatar);
Vue.use(TabPane);
Vue.use(Divider);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Checkbox);
Vue.use(Cascader);
Vue.use(Tag);
Vue.use(Pagination);
Vue.use(Drawer);
Vue.use(Tree);
Vue.use(CheckboxGroup);
Vue.use(Popover);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tooltip);
Vue.use(DatePicker);
Vue.use(Steps);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

new Vue({
  // @ts-ignore
  render: h => h(App),
  // @ts-ignore
  router: route,
  store
}).$mount('#app')
