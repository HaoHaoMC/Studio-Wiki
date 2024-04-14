var thisTitle = document.title
var thisProtocol = window.location.protocol
var thisHost = window.location.host
var linkHost = `${thisProtocol}//${thisHost}`
var thisURL = window.location.pathname
var dialog = document.getElementById("dialog")

var endl = document.createElement("br")

console.log(thisTitle)

var body = document.body

var urlMap = {
    "/": "/Pages/Home.html"
}

var mapJS = {}

function loadBody() {
    var XHR = new XMLHttpRequest()
    XHR.open('GET', linkHost + urlMap[thisURL])
    XHR.send()
    XHR.onload = function () {
        var wiki_body = document.getElementById("wiki-body")
        wiki_body.innerHTML = XHR.response

        if (mapJS[thisURL]) {
            var input_script = document.getElementById("input-script")
            input_script.src = mapJS[thisURL]
        }
        else {
            var input_script = document.getElementById("input-script")
            document.body.removeChild(input_script)
        }
    }
}

function loadHeader() {
    var XHR = new XMLHttpRequest()
    XHR.open("GET", linkHost + "/Pages/Header.html")
    XHR.send()
    XHR.onload = function (ev) {
        var header = document.getElementById("header")
        header.innerHTML = XHR.response
        loadUser()
    }
}

function mainDialog() {
    var dialog_body = document.getElementById("dialog-body")
    var dialog_title = document.getElementById("dialog-title")

    dialog_title.innerHTML = ""
    dialog_body.innerHTML = ""
}

function closeDialog() {
    dialog.close()
    mainDialog()
}

loadHeader()
loadFooter()
loadBody()
mainDialog()

var date = new Date()
var dateLocaleStr = date.toLocaleDateString("zh-CN")
var dateArr = dateLocaleStr.split("/")
var dateStr = dateLocaleStr.replace(/\//g, "-")
var datesObj = {
    "Every": `希望你每天开开心心~`,
    "1-1": `祝你元旦快乐~`,
    "1-23": "是我们的成立日哦~",
    "4-1": "愚人节快乐~",
    "5-1": `祝你五一快乐~`,
    "10-1": `祝你国庆快乐~`,
    "12-25": `祝你圣诞快乐~`,
    "12-31": `明天是元旦了，加油~`
}
var MM_dd = `${dateArr[1]}-${dateArr[2]}`
alert("今天是" + dateStr + "，" + datesObj[datesObj[MM_dd] == undefined ? "Every" : MM_dd])