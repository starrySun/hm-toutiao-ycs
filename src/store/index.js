// 新建一个sessionstorage数据的函数 提供给其他模块的使用
// 约定好 key 的名字
// 约定好value 的值 字符串格式  JSON数据
const KEY = "hm-toutiao-ycs-user";
// 导出 并封装一个函数
export default {
  setUser(user) {
    // 存储user 对象信息
    window.sessionStorage.setItem(KEY, JSON.stringify(user));
  },
  // 获取信息
  getUser() {
    return JSON.parse(window.sessionStorage.getItem(KEY) || "{}");
  },
  clearUser() {
    return window.sessionStorage.removeItem(KEY);
  }
};
