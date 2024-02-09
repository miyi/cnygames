return {
  mode: "history",
  default: "home",
  aliases: { "": "home" },
  routing: {
    title: "2024",
    children: [
      {
        path: "home",
        modules: "home",
        constants: { layer1: "home", title: "home" },
      },
      {
        path: "english",
        modules: "english",
        modules: ["layout", "english"],
        constants: { layer1: "layout", layer2: "english", title: "英语" },
        tailable: true,
      },
      {
        path: "knowledge",
        modules: "knowledge",
        constants: { layer1: "knowledge", title: "知识" },
      },
      {
        path: "poetry",
        modules: ["layout", "poetry"],
        constants: { layer1: "layout", layer2: "poetry", title: "诗集" },
      },
      {
        path: "taboo",
        modules: "taboo",
        constants: { layer1: "taboo", title: "taboo" },
      },
      {
        path: "scattergory",
        modules: "scattergory",
        constants: { layer1: "scattergory", title: "scattergory" },
      },
      {
        path: "hangman",
        modules: "hangman",
        constants: {
          layer1: "hangman",
        },
      },
    ],
  },
};
