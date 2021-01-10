var $ = function(id) {
	return document.getElementById(id);
}
var aqiData = {};

function addAqiData() {
    var city = $("aqi-wenzhang-input").value.trim();
    var num = $("aqi-value-input").value.trim();
	if(!city.match(/^[A-Za-z\s\u4E00-\u9FA5]+$/)){
        alert("文章名必须为中英文字符！");
        return;
    }
    if(!num.match(/^\d+$/)) {
        alert("分数必须为整数！");
        return;
    }
    aqiData[city] = num;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var content = "<tr><td>文章名称</td><td>分数</td><td>操作</td></tr>";
    for(var city in aqiData){
        content += "<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button data-city='" + city +"'>删除</button></td></tr>";
    }
    $("aqi-table").innerHTML = city ? content : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    $("add-btn").onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    $("aqi-table").addEventListener("click", function(event){
        delBtnHandle(event.target.dataset.city);
    })
}
init();
