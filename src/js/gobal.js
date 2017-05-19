function classA(name) {
    this.name = name;
    this.showName = function () {
        console.log(this.name)
    }
}
function classB(name) {
    classA.call(this,name);
}
var objA = new classA("操作系统");
var objB = new classB("组成原理");
objA.showName();
objB.showName();
console.log("wewww");
var objB = new classB("组成原理");
var objB = new classB("组成原理");

var objB = new classB("组成原理");
