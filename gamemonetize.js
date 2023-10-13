// Name: Game Monetize
// ID: gamemonetize
// Description: Interact with the GameMonetize.com SDK.

(function (Scratch) {
  "use strict";

  // Initialize with a default Game ID
  var gameId = "your_game_id_here";

  class GameMonetizeExtension {
    constructor(runtime) {
      this.runtime = runtime;
    }

    getInfo() {
      return {
        id: "gamemonetize",
        name: "Game Monetize",
        blocks: [
          // Initialize the SDK with a Game ID
          {
            opcode: "initializeSDK",
            blockType: Scratch.BlockType.COMMAND,
            text: "Initialize GameMonetize SDK with Game ID [GAMEID]",
            arguments: {
              GAMEID: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: gameId,
              },
            },
          },
          // Show an ad
          {
            opcode: "showAd",
            blockType: Scratch.BlockType.COMMAND,
            text: "Show an Ad",
          },
        ],
      };
    }

    initializeSDK(args) {
      // Initialize the GameMonetize SDK with the provided Game ID
      window.SDK_OPTIONS = {
        gameId: args.GAMEID,
        onEvent: function (event) {
          switch (event.name) {
            case "SDK_GAME_PAUSE":
              // Handle game pause logic (e.g., mute audio)
              break;
            case "SDK_GAME_START":
              // Handle game start logic (e.g., resume game and unmute audio)
              break;
            case "SDK_READY":
              // SDK is ready
              break;
          }
        },
      };
      (function (a, b, c) {
        var d = a.getElementsByTagName(b)[0];
        a.getElementById(c) || ((a = a.createElement(b)), (a.id = c), (a.src = "https://api.gamemonetize.com/sdk.js"), d.parentNode.insertBefore(a, d));
      })(document, "script", "gamemonetize-sdk");
    }

    showAd() {
      // Call the SDK to show an ad
      if (typeof sdk !== "undefined" && typeof sdk.showBanner !== "undefined") {
        sdk.showBanner();
      }
    }
  }

  Scratch.extensions.register(new GameMonetizeExtension());
})(Scratch);
