export default class BuildConfig {
  get readonlyNamespace() {
    return []
  }
  /**
   * 业务路由
   */
  get promethusHost() {
    return '119.91.66.54:9090'
  }
  get observabiliy() {
    return true
  }
  get monitoring() {
    return true
  }
}
