module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotateYoyo: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        rotateYoyo: "rotateYoyo 0.8s ease-in-out",
      },
    },
  },
};
