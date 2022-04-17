import { ptrGetBoundingClientRect, clearClientRects } from "./bounding-rects";
import gsap from "gsap";

const sprites = {
  logo2: {
    sheetCount: "%%2%%",
    imageExtension: "&&png&&",
    aspectRatio: "**100.00%**",
    frames: [
      {
        x: 0,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 1600,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1920,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 1280,
        w: 320,
        h: 320,
        sheet: {
          index: 1,
          h: 1600,
          w: 1920,
        },
      },
    ],
  },
  "logo-hover": {
    sheetCount: "%%1%%",
    imageExtension: "&&png&&",
    aspectRatio: "**100.00%**",
    frames: [
      {
        x: 0,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 0,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 320,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 640,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 960,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1280,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 1600,
        y: 640,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 0,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
      {
        x: 320,
        y: 960,
        w: 320,
        h: 320,
        sheet: {
          index: 0,
          h: 1280,
          w: 1920,
        },
      },
    ],
  },
};
let resizeTimer;

// debounced resize handler to force sprite scale to be recalculated
const onResize = () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    clearClientRects();
  }, 200);
};

export const initSprites = () => {
  try {
    const sprites = document.querySelectorAll("[data-sprite]");
    console.log(sprites);

    // only animate sprites when in view
    const inviewObserver = new window.IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        target.sprite.setInView(isIntersecting);
      });
    });

    sprites.forEach((spriteEl) => {
      spriteEl.sprite = createSprite(spriteEl);
      gsap.set(spriteEl, { visibility: "visible" });
      inviewObserver.observe(spriteEl);
    });

    window.addEventListener("resize", onResize);
  } catch (error) {
    console.error(error);
  }
};

const getSpriteFramesData = (name) => sprites[name].frames;

const createSprite = (sprite) => {
  const sheetImages = sprite.querySelectorAll("img");
  const name = sprite.getAttribute("data-sprite");
  const frames = getSpriteFramesData(name);

  if (!frames) return;

  const defaults = {
    autoPlay: !(sprite.getAttribute("data-auto-play") === "0"),
    loop: !(sprite.getAttribute("data-loop") === "0"),
    frameRate: parseInt(sprite.getAttribute("data-frame-rate") || 15, 10),
    frameStart: parseInt(sprite.getAttribute("data-frame-start") || 0, 10),
    frameEnd: parseInt(
      sprite.getAttribute("data-frame-end") || frames.length - 1,
      10
    ),
  };

  const renderFrame = (frame) => {
    if (!frame) return;

    const sheetId = frame.sheet.index;
    const img = sheetImages[sheetId];
    const scale = ptrGetBoundingClientRect(sprite).width / frame.w;

    gsap.set(sheetImages, {
      opacity: 0,
      x: 0,
      y: 0,
    });

    gsap.set(img, {
      x: -frame.x * scale,
      y: -frame.y * scale,
      scale: scale,
      force3D: !0,
      opacity: 1,
    });
  };

  let prevFrame = 0;
  let inView = true;
  let anim;

  const updateAnimation = (options) => {
    const { frameStart, frameEnd, frameRate, loop, autoPlay } = {
      ...defaults,
      ...options,
    };
    const totalFrames = frameEnd - frameStart;

    if (anim) anim.kill();

    anim = gsap.to(
      {},
      {
        duration: totalFrames / frameRate,
        repeat: loop ? -1 : 0,
        onUpdate: function () {
          const currentFrame = Math.min(
            Math.floor(this.progress() * totalFrames + frameStart, frameEnd)
          );

          if (prevFrame !== currentFrame) {
            prevFrame = currentFrame;

            if (inView || this.repeat() === 0)
              renderFrame(frames[currentFrame]);
          }
        },
      }
    );

    if (!autoPlay) anim.pause();

    // render initial frame
    renderFrame(frames[frameStart]);
  };

  updateAnimation();

  return {
    play: () => {
      anim.play();
    },

    pause: () => {
      anim.pause();
    },

    playOnce: (options = {}) => {
      updateAnimation({ ...options, loop: false, autoPlay: true });
    },

    playLoop: (options = {}) => {
      updateAnimation({ ...options, loop: true, autoPlay: true });
    },

    setInView: (value) => {
      inView = value;
    },

    onComplete: (callback) => {
      anim.eventCallback("onComplete", callback);
    },

    onLoop: (callback) => {
      anim.eventCallback("onRepeat", callback);
    },
  };
};
