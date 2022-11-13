class useLocalstorage {
  private static time: number = new Date().getTime();
  private constructor() {}
  public static get(key: string) {
    let value = localStorage.getItem(key);
    if (!value) return null;

    let valueArr = value.split("|");
    console.log(key, valueArr.length);
    if (valueArr.length && valueArr.length > 1) {
      if (this.time > parseInt(valueArr[1])) {
        console.log("缓存到期");
        localStorage.removeItem(key);
        console.log(this.time, parseInt(valueArr[1]));
        return "";
      } else {
        return JSON.parse(valueArr[0]);
      }
    } else {
      return JSON.parse(value);
    }
  }
  public static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public static cacheSet(key: string, value: any, delay: number = 3000 * 10) {
    value = JSON.stringify(value) + "|" + (this.time + delay);
    localStorage.setItem(key, value);
    console.log("已经把" + key + "存入缓存,过期时间是" + (this.time + delay));
  }
  public static remove(key: string) {
    localStorage.removeItem(key);
    return "";
  }
}

export default useLocalstorage;
