var wrapper = document.getElementById("content-wrapper");

chrome.storage.sync.get(
    {size: "1800px"},
    (items) => {
        wrapper.style.minWidth = items.size;
    }
);