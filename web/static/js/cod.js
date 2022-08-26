function runc(cid) {
    let txt = document.getElementById(cid).value;
    let output = "";
    let outputs;
    const lines = [];
    let line = "";
    let end;
    txt = txt.replace(/[\r\n]/gm, '');
    for (const i of txt) {
        if (i !== ";") {
            line += i
        } else {
            lines.push(line)
            line = ""
        }
    }
    for (const i of lines) {
        outputs = getInputs(i);
        if (outputs[0] === "print") {
            end = "<br>"
            if (outputs[2] !== undefined) {
                end = outputs[2];
            }
            output += outputs[1] + end;
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
        i++
        item = txt[i];
    }
    outputs.push(cmd);
    let output = "";
    i++
    item = txt[i]
    while (i < txt.length) {
        while (item != ' ' || str) {
            if (i >= txt.length) {
                break;
            }
            if (item === '"' || item === "'") {
                str = !str;
            }
            if (!(item === '"' || item === "'")) {
                output += item;
            }
            i++;
            item = txt[i];
        }
        i++
        item = txt[i]
        outputs.push(output);
        output = "";
    }
    return outputs;
}