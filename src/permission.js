import 'nprogress/nprogress.css' // progress bar style

import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import { RouterList } from './utils/whitelist'
import router from './router';

let routerWhile = [];
for (let item of RouterList) {
  routerWhile.push(item.path)
}
NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = routerWhile // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = 0;
  if (hasToken) {
    if (to.path === '/practice') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      try {
        // get user info
        next()
      } catch (error) {
        // remove token and go to login page to re-login
        Message.error(error || 'Has Error')
        next(`/practice?redirect=${to.path}`)
        NProgress.done()
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/practice?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
