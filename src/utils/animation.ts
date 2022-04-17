import lottie, { AnimationItem, RendererType } from "lottie-web";
import lottie_api from "lottie-api";

export type Animation = { instance: AnimationItem; data: any };

const animReferences = new Map<String, Animation>();

const createAnimationObject = (
  el: Element,
  instance: AnimationItem
): Animation => {
  return {
    instance,
    data: {
      animEl: el,
      loopSegment: el.getAttribute(`data-anim-loop-segment`),
    },
  };
};

// load all animations and store references for future interactions
export const initializeAnimations = () => {
  const $animations = document.querySelectorAll(`[data-anim]`);

  $animations.forEach(($animEl) => {
    const path = $animEl.getAttribute(`data-anim`);
    const renderer =
      <RendererType>$animEl.getAttribute(`data-anim-renderer`) || "canvas";
    const aspect = $animEl.getAttribute(`data-anim-aspect`) || `xMidYMid meet`;
    const name = $animEl.getAttribute(`data-anim-name`) || undefined;
    const loop =
      !!$animEl.getAttribute(`data-anim-loop`) ||
      !!$animEl.getAttribute(`data-anim-loop-segment`);
    const autoplay = !!$animEl.getAttribute(`data-anim-autoplay`);

    if (!path) return;

    const instance = lottie.loadAnimation({
      container: $animEl,
      renderer,
      loop,
      name,
      path,
      autoplay,
      rendererSettings: {
        preserveAspectRatio: aspect,
      },
    });

    const animation = createAnimationObject($animEl, instance);

    window.addEventListener(`resize`, () => {
      instance.resize();
    });

    animReferences.set(path, animation);

    // on animation loaded
    instance.addEventListener(`DOMLoaded`, () => {
      // add loaded class for any css needs
      $animEl.classList.add(`loaded`);
      if (autoplay) playAnimation(animation);

      window.addEventListener(`load`, () => {
        instance.resize();
      });
    });
  });
};

const getAnimationInstances = (el: Element): Animation[] => {
  if (!el) return [];

  // get all animation children elements
  const animEls = el.querySelectorAll(`[data-anim]`);
  const animInstances: Animation[] = [];

  const addInstance = (element: Element) => {
    const path = element.getAttribute(`data-anim`);
    const animation = animReferences.get(path);
    if (animation) animInstances.push(animation);
  };

  animEls.forEach((animEl) => {
    addInstance(animEl);
  });

  // also check if provided element is also an animation item
  if (el.matches(`[data-anim]`)) addInstance(el);

  return animInstances;
};

export const pauseAnimations = (el: HTMLElement): void => {
  getAnimationInstances(el).forEach(({ instance }) => {
    instance.pause();
  });
};

export const playAnimation = (animation: Animation) => {
  const { instance, data } = animation;
  const { loopSegment } = data;

  // play animation & then loop segment if specified
  if (loopSegment) {
    // get frame numbers as array of ints from attribute
    const segment = (loopSegment as string)
      .split(`,`)
      .map((e) => parseInt(e, 10));

    // play segments
    if (segment && segment.length === 2) {
      console.log("segment", loopSegment);
      instance.playSegments(
        [
          [0, segment[0] - 1],
          [segment[0], segment[1]],
        ],
        true
      );
    } else {
      instance.goToAndPlay(0);
    }
  } else {
    instance.goToAndPlay(0);
  }
};

export const resizeAnimations = (el: HTMLElement): void => {
  getAnimationInstances(el).forEach((animation) => {
    setTimeout(() => {
      animation.instance.resize();
    }, 0);
  });
};

export const restartAnimations = (el: HTMLElement): void => {
  getAnimationInstances(el).forEach((animation) => {
    playAnimation(animation);
    resizeAnimations(el);
  });
};

export const createAnimationApi = (el: HTMLElement): void => {
  const animation = getAnimationInstances(el)[0];
  if (!animation) return;

  return lottie_api.createAnimationApi(animation.instance);
};

const normalize = (val) => {
  return (val - 0) / (255 - 0);
};

export const hexToLottieColor = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        normalize(parseInt(result[1], 16)),
        normalize(parseInt(result[2], 16)),
        normalize(parseInt(result[3], 16)),
        1,
      ]
    : null;
};
