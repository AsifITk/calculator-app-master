
let str = "";
let numbers = [];
let func = [];


let calculate = (val) => {
    if (val === "AC") {
        str = "";
        numbers = [];
        func = [];
        document.querySelector(".display").innerHTML = 0;
    }
    else {

        if (val !== "+" && val !== "-" && val !== "*" && val !== "/" && val !== "=" && val !== "AC") {
            str += val;
            document.querySelector(".display").innerHTML = str;
        }
        if (val === "+" || val === "-" || val === "*" || val === "/" || val === "=" || val === "AC") {
            let arr = str.split(val);
            numbers.push(Number(arr[0]))
            func.push(val);
            str = "";
        }

        if (func.length > 1 || numbers.length === 2) {

            let operation = func[0];

            if (operation === "+") {
                let res = Number(numbers[0]) + Number(numbers[1])
                numbers = [res]
                func.shift();
                document.querySelector(".display").innerHTML = res;
            }
            if (operation === "-") {
                let res = Number(numbers[0]) - Number(numbers[1])
                numbers = [res]
                func.shift();
                document.querySelector(".display").innerHTML = res;
            }
            if (operation === "*") {
                let res = Number(numbers[0]) * Number(numbers[1])
                numbers = [res]
                func.shift();
                document.querySelector(".display").innerHTML = res;
            }
            if (operation === "/") {
                let res = Number(numbers[0]) / Number(numbers[1])
                numbers = [res]
                func.shift();
                document.querySelector(".display").innerHTML = res;
            }
            if (operation === "=") {
                let res = Number(numbers[0])
                numbers = [res]
                func.shift();
                document.querySelector(".display").innerHTML = res;
            }
        }
    }
}

