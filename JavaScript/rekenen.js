var arrayEen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwee = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

function optellen(arr1, arr2, elementId) {
    var resultDiv = document.getElementById(elementId);
    for (var i = 0; i < arr1.length; i++) {
        var result = arr1[i] + arr2[i];
        resultDiv.innerHTML += arr1[i] + " + " + arr2[i] + " = " + result + "<br>";
    }
}

function aftrekken(arr1, arr2, elementId) {
    var resultDiv = document.getElementById(elementId);
    for (var i = 0; i < arr1.length; i++) {
        var result = arr1[i] - arr2[i];
        resultDiv.innerHTML += arr1[i] + " - " + arr2[i] + " = " + result + "<br>";
    }
}

function vermenigvuldigen(arr1, arr2, elementId) {
    var resultDiv = document.getElementById(elementId);
    for (var i = 0; i < arr1.length; i++) {
        var result = arr1[i] * arr2[i];
        resultDiv.innerHTML += arr1[i] + " * " + arr2[i] + " = " + result + "<br>";
    }
}

function delen(arr1, arr2, elementId) {
    var resultDiv = document.getElementById(elementId);
    for (var i = 0; i < arr1.length; i++) {
        var result = arr1[i] / arr2[i];
        resultDiv.innerHTML += arr1[i] + " / " + arr2[i] + " = " + result + "<br>";
    }
}

optellen(arrayEen, arrayTwee, "optellen");
aftrekken(arrayTwee, arrayEen, "aftrekken");
vermenigvuldigen(arrayEen, arrayTwee, "vermenigvuldigen");
delen(arrayTwee, arrayEen, "delen");
