chrome.runtime.onInstalled.addListener(() => {
  // Context Menus
  chrome.contextMenus.create({
    id: "sayhello",
    title: "Say Hello",
    type: "normal",
    contexts: ["selection"],
  });

  chrome.contextMenus.onClicked.addListener(() => {
    console.log("Hello");
  });
});
