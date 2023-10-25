//Pretty much used the official docs example

const saveOptions = () => {
    const width = document.getElementById("width").value;
    
    chrome.storage.sync.set(
        {size: width},
        () => {
            const status = document.getElementById("status");
            status.textContent = "Width saved as: " + width;
            setTimeout(() => {
                status.textContent = "";
            }, 5000);
        }
    );
};

const restoreOptions = () => {
    chrome.storage.sync.get(
        {size: "1800px"},
        (items) => {
            document.getElementById("width").value = items.size;
        }
    );
};

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);