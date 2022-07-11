import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function Drawing() {
  let cnv;
  let img;
  let gridSize = 10;

  const paintPixels = (p5) => {
    for (let col = 0; col < img.width; col = col + img.width / gridSize) {
      for (let row = 0; row < img.height; row = row + img.height / gridSize) {
        let c = img.get(col, row);
        p5.stroke(p5.color(c));
        p5.fill(p5.color(c));
        p5.square(col, row, img.width / gridSize);
      }
    }

    console.log("draw");
  };

  const preload = (p5) => {
    img = p5.loadImage("/0jqUp84QnX9ssTONXX2B.jpg");
  };

  const setup = (p5, canvasParentRef) => {
    cnv = p5.createCanvas(img.width, img.height).parent(canvasParentRef);

    paintPixels(p5);

    // for (let i = 0; i < 10; i++) {
    //   for (let j = 0; j < 10; j++) {
    //     p5.fill(255, 0, 0);
    //     p5.square(i * 50, j * 50, 50);
    //   }
    // }
  };

  const draw = (p5) => {
    if (p5.mousePressed()) {
    }
  };

  return <Sketch setup={setup} draw={draw} preload={preload} />;
}
