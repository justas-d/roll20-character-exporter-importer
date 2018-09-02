console.log("=================");
console.log("r20io bootstrap");
console.log("=================");


const injectId = "io-scripts";

let existing = document.getElementById(injectId);
if (existing) {
    document.head.removeChild(existing);
}

var root = document.createElement("div");
root.id = injectId;

function createScript(payload, module) {
    var s = document.createElement("script");
    let ctx = chrome || browser;

    s.src = ctx.extension.getURL(payload);
    s.onload = () => { s.remove(); };

    root.appendChild(s);
}

createScript("FileSaver.js");
createScript("roll20-io-payload.js");

document.head.appendChild(root);

{
    const placementRoot = document.getElementById("playerzone");
    const root = document.createElement("div");

    root.style.backgroundColor = "#ffffff";
    root.style.maxWidth = "30%";
    root.style.right = "20%";
    root.style.top = "5%";
    root.style.position = "absolute";
    root.style.padding = "10px";
    root.style.zIndex = "10000";
    root.style.border = "1px solid black";

    root.addEventListener("click", e => {
        e.stopPropagation();
        root.remove();
    });

    {
        const header = document.createElement("h2");
        header.innerText = "Roll20 Character Import/Export";
        root.appendChild(header);
    }

    {
        const p = document.createElement("p");
        p.innerText = "Roll20 Character IO is being deprecated in favor of Roll20 Enhancement Suite."
        root.appendChild(p)
    }

    {
        const p = document.createElement("p");
        p.innerText = "All R20IO exported files are compatible with R20ES.";
        root.appendChild(p)
    }

    {
        const href = document.createElement("a");
        href.href = "https://ssstormy.github.io/roll20-enhancement-suite/";
        href.innerText = "You can find out more about it here.";
        root.appendChild(href);
    }

    {
        const btn = document.createElement("button");
        btn.innerText = "OK";
        btn.class = "btn";
        btn.style.display = "block";
        root.appendChild(btn);
    }

    placementRoot.parentElement.insertBefore(root, placementRoot);
}
