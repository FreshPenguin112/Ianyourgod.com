function runc(cid) {
    let txt = document.getElementById(cid).value;
    let output = "";
    let i = 0;
    let item = txt[0];
    let line = "";
    let outputs;
    while (i < txt.length) {
        while (item != "\n" && i < txt.length) {
            line += item
            i += 1
            item = txt[i]
        }
        if (i > txt.length || line === undefined) {
            break
        }
        outputs = getInputs(line);
        if (outputs[0] === "print") {
            output += outputs[1]; + "\n"
        }
        if (outputs[0] === "add") {
            n1 = parseFloat(outputs[1])
            n2 = parseFloat(outputs[2])
            ret = n1 + n2
            output += ret
        }
    }
    document.getElementById("output").innerHTML = output;
}

function getInputs(txt) {
    const outputs = [];
    let item = txt[0]
    let cmd = "";
    let i = 0
    let str = false;
    while (item != " ") {
        if (i >= txt.length) {
            break;
        }
        cmd += item;
        i += 1;
        item = txt[i];
    }
    outputs.push(cmd);
    let output = "";
    i += 1
    item = txt[i]
    while (i < txt.length) {
        while (item != ' ' || str) {
            if (i >= txt.length) {
                break;
            }
            if (item === '"' || item === "'") {
                str = !str;
                console.log("flip");
            }
            if (!(item === '"' || item === "'")) {
                output += item;
            }
            i += 1;
            item = txt[i];
        }
        i += 1
        item = txt[i]
        outputs.push(output);
        output = "";
    }
    return outputs;
}