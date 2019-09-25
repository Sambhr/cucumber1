$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/new.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" as a username and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "login-action;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ],
      "line": 11,
      "id": "login-action;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password456"
      ],
      "line": 12,
      "id": "login-action;successful-login-with-valid-credentials;;3"
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ],
      "line": 13,
      "id": "login-action;successful-login-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"lalitha\" as a username and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo01_para.user_opens_the_application()"
});
formatter.result({
  "duration": 17195908600,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.user_click_on_signin_link()"
});
formatter.result({
  "duration": 1449979700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalitha",
      "offset": 13
    },
    {
      "val": "password123",
      "offset": 41
    }
  ],
  "location": "demo01_para.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 241675300,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 2970078100,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"admin\" as a username and \"password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo01_para.user_opens_the_application()"
});
formatter.result({
  "duration": 17072528300,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.user_click_on_signin_link()"
});
formatter.result({
  "duration": 2409083700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password456",
      "offset": 39
    }
  ],
  "location": "demo01_para.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 196823300,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 2414066500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click on signin link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Lalitha\" as a username and \"Password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo01_para.user_opens_the_application()"
});
formatter.result({
  "duration": 41846630000,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.user_click_on_signin_link()"
});
formatter.result({
  "duration": 4114888900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalitha",
      "offset": 13
    },
    {
      "val": "Password123",
      "offset": 41
    }
  ],
  "location": "demo01_para.user_enters_as_a_username_and(String,String)"
});
formatter.result({
  "duration": 301895400,
  "status": "passed"
});
formatter.match({
  "location": "demo01_para.message_displayed_login_successfully()"
});
formatter.result({
  "duration": 1041587200,
  "status": "passed"
});
});