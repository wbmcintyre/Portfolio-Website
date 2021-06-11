import React from "react";
import style from "./Canvas.module.scss";

class Canvas extends React.Component {
  componentDidMount = () => {
    const cvs = document.querySelector("canvas");
    const ctx = cvs.getContext("2d");

    cvs.width = document.documentElement.clientWidth;
    cvs.height = document.documentElement.clientHeight;

    window.addEventListener("resize", function () {
      cvs.width = document.documentElement.clientWidth;
      cvs.height = document.documentElement.clientHeight;
    });

    let mouse = {
      x: undefined,
      y: undefined,
      prevX: undefined,
      prevY: undefined,
      vx: 0,
      vy: 0,
    };

    window.addEventListener("mousemove", function (event) {
      mouse.x = event.x;
      mouse.y = event.y;
      if (mouse.prevX && mouse.prevY) {
        mouse.vx = mouse.x - mouse.prevX;
        mouse.vy = mouse.y - mouse.prevY;
      }
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    });

    class Star {
      constructor(x, y, vx, vy, radius) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = radius / 4;
        this.radius = radius;
      }

      draw = () => {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2, true);
        ctx.closePath();

        if (ctx.isPointInPath(mouse.x, mouse.y)) {
          this.vx += mouse.vx;
          this.vy += mouse.vy;
        }

        this.update();
      };

      update = () => {
        this.x += this.vx;
        this.y += this.vy;
      };

      reset(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = this.radius / 4;
      }

      isOffScreen() {
        if (
          this.y > document.documentElement.clientHeight ||
          this.x > document.documentElement.clientWidth ||
          this.y < 0 ||
          this.x < 0
        ) {
          return true;
        } else {
          return false;
        }
      }
    }

    const starArray = [];

    //creation of stars
    for (let i = 0; i < 200; i++) {
      const randomX = Math.random();
      const randomY = Math.random();
      const randomRadius = Math.round(Math.random());

      starArray.push(
        new Star(
          randomX * document.documentElement.clientWidth + 1,
          randomY * document.documentElement.clientHeight,
          0,
          0,
          randomRadius + randomX
        )
      );
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(
        0,
        0,
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      );
      starArray.forEach((star) => {
        star.draw();
        if (star.isOffScreen()) {
          const randomX = Math.random();
          star.reset(
            randomX * document.documentElement.clientWidth + 1,
            0,
            0,
            0
          );
        }
      });
    }

    animate();
  };

  render() {
    return (
      <canvas
        className={style.canvas}
        ref={this.canvasRef}
        id="myCanvas"
        width="100%"
        height="100%"
      ></canvas>
    );
  }
}

export default Canvas;
