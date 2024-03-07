chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url.includes("gachon.ac.kr") && changeInfo.status === "loading") {
    const cookieDetails = {
      url: "https://www.gachon.ac.kr",
      name: "moohan",
      value: "end",
      expirationDate: Math.floor(Date.now() / 1000) + 10,
    };
    chrome.cookies.set(cookieDetails);
  }
});
