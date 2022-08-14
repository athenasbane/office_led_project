const { app, BrowserWindow } = require("electron");
const path = require("path");
// const ws281x = require("rpi-ws281x");

// class Strip {
//   constructor() {
//     this.config = {};
//     this.config.leds = 116;
//     this.config.dma = 10;
//     this.config.brightness = 255;
//     this.config.gpio = 18;

//     this.config.stripType = "grb";
//     ws281x.configure(this.config);
//   }

//   run() {
//     const pixels = new Uint32Array(this.config.leds);

//     var red = 255,
//       green = 255,
//       blue = 255;
//     var color = (red << 16) | (green << 8) | blue;

//     for (var i = 0; i < this.config.leds; i++) {
//       pixels[i] = color;
//     }

//     ws281x.render(pixels);
//   }

//   setBrightness(brightness = 255) {
//     const pixels = new Uint32Array(this.config.leds);

//     var red = brightness,
//       green = brightness,
//       blue = brightness;
//     var color = (red << 16) | (green << 8) | blue;

//     for (var i = 0; i < this.config.leds; i++) {
//       pixels[i] = color;
//     }

//     ws281x.render(pixels);
//   }

//   clear() {
//     const pixels = new Uint32Array(this.config.leds);

//     for (let g = 255; g > 0; g--) {
//       var red = g,
//         green = g,
//         blue = g;
//       var color = (red << 16) | (green << 8) | blue;
//       for (var i = 0; i < this.config.leds; i++) {
//         pixels[i] = color;
//       }
//       ws281x.sleep(75);
//       console.log(color);
//       ws281x.render(pixels);
//     }
//   }
// }

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
    //   const lights = new Strip();

  const slider = window.document.getElementById("slider");
  slider.addEventListener("change", (event) => {
    console.log(event);
  });
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
