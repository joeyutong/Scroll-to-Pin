// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.

function genericOnClick(info, tab) {
  chrome.tabs.sendMessage(tab.id, {message: "scrollTo"}, function (res) {
    console.log(res.result);
  });
  console.log("send message");
}

var id = chrome.contextMenus.create({
  "title": "Scroll to Pin", 
  "contexts": ["all"], 
  "onclick": genericOnClick,
}, function () {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
