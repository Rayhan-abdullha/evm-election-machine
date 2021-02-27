function add(name) {
    const searchDiv = document.getElementById(name);
    searchDiv.style.backgroundColor = 'green';
}
function cancel(name1,name2,name3,name4,name5,name6,name7,name8){
    const div1 = document.getElementById(name1)
    const div2 = document.getElementById(name2)
    const div3 = document.getElementById(name3)
    const div4 = document.getElementById(name5)
    const div5 = document.getElementById(name6)
    const div6 = document.getElementById(name4)
    const div7 = document.getElementById(name7)
    const div8 = document.getElementById(name8)
    div1.style.backgroundColor = 'white'
    div2.style.backgroundColor = 'white'
    div3.style.backgroundColor = 'white'
    div4.style.backgroundColor = 'white'
    div5.style.backgroundColor = 'white'
    div6.style.backgroundColor = 'white'
    div7.style.backgroundColor = 'white'
    div8.style.backgroundColor = 'white'
}

document.getElementById('green').addEventListener('click',function(){
    const div = document.getElementById('sl')
    div.style.display = 'block'
    const div1 = document.getElementById('evm-app')
    div1.style.display = 'none'
})