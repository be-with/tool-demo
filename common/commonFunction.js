var myFunction = {
    /**
    * 该函数用于判断某个数是不是奇数
    * @param {number} n 输入的数字
    */
    isOdd: function (n) {
        if (n % 2 === 0) {
            return false;//不是奇数
        }
        return true;//是奇数
    },
    /**
 * 该函数用于判断某个数是不是素数
 * @param {number} n 输入的数字
 */
    isPrime: function (n) {
        if (n < 2) {
            return false;//不是素数
        }
        for (var i = 2; i <= n - 1; i++) {
            if (n % i === 0) {
                return false;//不是素数
            }
        }
        return true;//是素数 
    },


    /**
     * 该函数用于对数组求和
     * @param {array} arr 输入的数组
     * 
     */
    sumOfArray: function (arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    /**
     * 该函数用于得到数组中的最大值,如果数组的长度为0,则直接返回
     * @param {array} arr 输入的数组
     */
    maxOfArray: function (arr) {
        if (arr.length === 0) {
            return;
        }
        var max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }
        return max;
    },

    /**
     * 该函数用于得到数组中的最小值
     * @param {array} arr 输入的数组
     */
    minOfArray: function (arr) {
        if (arr.length === 0) {
            return;
        }
        var min = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (min > arr[i]) {
                min = arr[i];
            }
        }
        return min;
    },

    /**
     * 该函数用于判断数组是否是稀松数组
     * @param {array} arr 输入的数组
     */
    hasEmptyInArray: function (arr) {
        for (var i = 0; i < arr.length; i++) {
            if (!(i in arr)) {
                return true;//是稀松数组
            }
        }
        return false;//不是稀松数组
    },

    /**
     * 判断该某年是否是闰年
     * @param {number} year 输入的年份
     */
    isLeap: function (year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    },

    /**
     * 得到某年某月的天数
     * @param {number} year 年份
     * @param {number} month 月份
     * @param {number} day 天数
     */
    getDays: function (year, month) {
        var date = new Date(year, month, 0);
        // console.log(date)
        var days = date.getDate();
        return days;
    },

    /**
     * 得到某个数字数组中出现次数最多的数字和频率
     * @param {array} arr 输入的数字数组
     */
    getTopFreqInArray: function (arr) {
        var obj = {};
        var result;//记录最终结果的对象
        var time;//记录出现次数最多的数字的频率
        for (var i = 0; i < arr.length; i++) {
            var temp = arr[i];
            if (!obj[temp]) {
                obj[temp] = 1
            } else {
                obj[temp]++;
            }
        }
        // console.log(obj)
        for (var prop in obj) {
            if (!result || obj[prop] > result["frequency"]) {
                result = {
                    number: prop,
                    frequency: obj[prop]
                }
            }
        }
        return result;
    },
    /**
     * 该函数用于对数组排序
     * @param {Function} compare 比较大小
     * 该函数有两个参数，代表数组中的两个元素
     * 函数返回一个数字  如果返回正数，表示第一个元素比第二个元素大
     * 如果返回0 表示第一个元素和第二个元素相等
     * 如果返回负数 表示第一个元素比第二个元素小
     */
    sort: function (arr, compare) {
        if (!compare) {
            compare = function (a, b) {
                if (a > b) {
                    return 1;
                } else if (a < b) {
                    return -1;
                } else {
                    return 0;
                }
            }
        }
        // 冒泡排序
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i; j++) {
                if (compare(arr[j], arr[j + 1]) > 0) {
                    // 交换
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    },
    /**
     * 按照指定的条件对某个数组进行筛选
     * @param {*} arr 
     * @param {Function} callback 
     * 返回值是Boolean 如果满足条件 返回true 否则返回false
     */
    filter: function (arr, callback) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            // 把每一项拿出来，看是否满足条件
            if (callback(arr[i], i)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    /**
     * 按照指定的条件，得到某个数组中第一个满足条件的元素
     * @param {*} arr 
     * @param {Function} callback 
     * 返回类型为Boolean 如果满足条件返回true 否则返回false
     */
    find: function (arr, callback) {
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                return arr[i];
            }
        }
    },
    /**
     * 按照指定的条件，得到某个数组中满足条件的元素数量
     * @param {*} arr 
     */
    count: function (arr, callback) {
        var number = 0;//记录满足条件的元素数量
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i], i)) {
                number++;
            }
        }
        return number;
    },
    getRandom:function(min,max){
        return Math.random()*(max-min) + min;
    },
    // 深度克隆
    deepClone(origin,target){
        var target = target || {},
            toStr = Object.prototype.toString,
            arrStr = "[object Array]";
        for(var prop in orgin){
            if(origin.hasOwnProperty(prop)){
                if(origin[prop] !== 'null' && typeof(origin[prop] == 'object')){
                    if(toStr.call(origin[prop]) == arrStr){
                        target[prop] = [];
                    }else{
                        target[prop] = {};
                    }
                    this.deepClone(origin[prop],target[prop]);
                }else{
                    target[prop] = origin[prop];
                }
            }
        }
        return target;
    }
}

// 数组去重
Array.prototype.unique = function(){
    var temp = {},arr = [],len = this.length;
        for(var i=0;i<len;i++){
            if(!temp[this[i]]){
                temp[this[i]] = 'abc';
                arr.push(this[i]);
            }
        }
        return arr;
}

// 
var inherit = (function(){
    var F = function(){};
    return function(Target,Origin){
        F.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
})();