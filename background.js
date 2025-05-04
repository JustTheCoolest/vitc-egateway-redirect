function egateway_url(url) {
    const urlObj = new URL(url);
    const domain = urlObj.hostname.replace(/\./g, "-") + ".egateway.chennai.vit.ac.in";
    urlObj.hostname = domain;
    return urlObj.toString();
}

chrome.action.onClicked.addListener(function(tab) {
    let newUrl = egateway_url(tab.url);
    chrome.tabs.update(tab.id, { url: newUrl });
});