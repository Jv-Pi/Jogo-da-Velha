document.getElementById("a1").addEventListener("click", a1, !0), document.getElementById("a2").addEventListener("click", a2, !0), document.getElementById("a3").addEventListener("click", a3, !0), document.getElementById("b1").addEventListener("click", b1, !0), document.getElementById("b2").addEventListener("click", b2, !0), document.getElementById("b3").addEventListener("click", b3, !0), document.getElementById("c1").addEventListener("click", c1, !0), document.getElementById("c2").addEventListener("click", c2, !0), document.getElementById("c3").addEventListener("click", c3, !0);
var turno = { atual: 0, get: function() { return this.atual }, set: function(e) { this.atual = e } },
    x = [],
    o = [],
    jogo = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];

function checar(e) {
    for (var t = 0, n = 0; n < jogo.length; n++) {
        for (var c = 0; c < jogo[n].length; c++)
            for (var r = 0; r < e.length; r++) jogo[n][c] === e[r] && (3 === ++t && 1 === turno.get() ? (alert("X Ganhou!!!"), resetar()) : 3 === t && 0 === turno.get() && (alert("O Ganhou!!!"), resetar()));
        t = 0
    }
    x.length + o.length === 9 && (alert("Deu Velha!!!"), resetar())
}

function resetar() { document.getElementById("a1").innerHTML = "", document.getElementById("a2").innerHTML = "", document.getElementById("a3").innerHTML = "", document.getElementById("b1").innerHTML = "", document.getElementById("b2").innerHTML = "", document.getElementById("b3").innerHTML = "", document.getElementById("c1").innerHTML = "", document.getElementById("c2").innerHTML = "", document.getElementById("c3").innerHTML = "", x = [], o = [], turno.set(0) }

function a1() { "" === document.getElementById("a1").innerHTML && (0 === turno.get() ? (document.getElementById("a1").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/>', turno.set(1), x.push(1), checar(x)) : 1 === turno.get() && (document.getElementById("a1").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(1), checar(o))) }

function a2() { "" === document.getElementById("a2").innerHTML && (0 === turno.get() ? (document.getElementById("a2").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(2), checar(x)) : 1 === turno.get() && (document.getElementById("a2").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(2), checar(o))) }

function a3() { "" === document.getElementById("a3").innerHTML && (0 === turno.get() ? (document.getElementById("a3").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(3), checar(x)) : 1 === turno.get() && (document.getElementById("a3").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(3), checar(o))) }

function b1() { "" === document.getElementById("b1").innerHTML && (0 === turno.get() ? (document.getElementById("b1").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(4), checar(x)) : 1 === turno.get() && (document.getElementById("b1").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(4), checar(o))) }

function b2() { "" === document.getElementById("b2").innerHTML && (0 === turno.get() ? (document.getElementById("b2").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(5)) : 1 === turno.get() && (checar(x), document.getElementById("b2").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(5), checar(o))) }

function b3() { "" === document.getElementById("b3").innerHTML && (0 === turno.get() ? (document.getElementById("b3").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(6), checar(x)) : 1 === turno.get() && (document.getElementById("b3").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(6), checar(o))) }

function c1() { "" === document.getElementById("c1").innerHTML && (0 === turno.get() ? (document.getElementById("c1").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(7), checar(x)) : 1 === turno.get() && (document.getElementById("c1").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(7), checar(o))) }

function c2() { "" === document.getElementById("c2").innerHTML && (0 === turno.get() ? (document.getElementById("c2").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(8), checar(x)) : 1 === turno.get() && (document.getElementById("c2").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(8), checar(o))) }

function c3() { "" === document.getElementById("c3").innerHTML && (0 === turno.get() ? (document.getElementById("c3").innerHTML = ' <img src="https://img.icons8.com/ios/100/000000/circled-x.png"/> ', turno.set(1), x.push(9), checar(x)) : 1 === turno.get() && (document.getElementById("c3").innerHTML = '<img src="https://img.icons8.com/ios/100/000000/circled-o.png"/>', turno.set(0), o.push(9), checar(o))) }
