(() => {
  "use strict";

  const translations = {
    en: {
      title: "Easy Cube Games — One creator. Many worlds.",
      description: "Small games, many worlds. Discover Spellarium, Iron Dominion and Swipe Puzzle from Easy Cube Games, an independent mobile game developer.",
      skip: "Skip to content",
      navigation: "Main navigation",
      language: "Language",
      navGames: "The games",
      eyebrow: "Independent mobile games",
      headlineOne: "One creator.",
      headlineTwo: "Many worlds.",
      intro: "I'm Vasiliy, a solo indie developer. I make games about puzzles, magic and battles — one idea at a time.",
      visitPlay: "Visit Google Play",
      explore: "Explore the games",
      worldsAlt: "A knight, a fire-and-water crystal and colorful puzzle tiles surround the Easy Cube Games logo.",
      gamesTitle: "Find your kind of play.",
      android: "Made for Android",
      spellGenre: "Idle · Magic · Crafting",
      spellDescription: "Gather essence, craft spells and unlock fire and water. Build your magical workshop, one tap at a time.",
      spellLink: "Get Spellarium: Magic Clicker on Google Play",
      getPlay: "Get it on Google Play",
      ironGenre: "Match-3 · Strategy · Roguelite",
      ironDescription: "Match tiles to summon an army. Choose your route, recruit champions and shape each roguelite run.",
      comingSoon: "Coming soon to Google Play",
      swipeGenre: "Puzzles · Patterns · Color",
      swipeDescription: "Recreate colorful patterns with a swipe. A small challenge for your eyes, fingers and a little bit of logic.",
      swipeLink: "Get Swipe Puzzle on Google Play",
      footer: "Made with care. Played your way.",
      contact: "Say hello",
      artCaption: ["PUZZLES", "MAGIC", "BATTLES"]
    },
    ru: {
      title: "Easy Cube Games — Один автор. Много миров.",
      description: "Spellarium, Iron Dominion и Swipe Puzzle — игры про головоломки, магию и сражения от независимого разработчика Easy Cube Games.",
      skip: "Перейти к содержимому",
      navigation: "Основная навигация",
      language: "Язык",
      navGames: "Игры",
      eyebrow: "Независимые мобильные игры",
      headlineOne: "Один автор.",
      headlineTwo: "Много миров.",
      intro: "Я Василий, независимый разработчик. Создаю игры про головоломки, магию и сражения — воплощая идеи одну за другой.",
      visitPlay: "Открыть Google Play",
      explore: "Посмотреть игры",
      worldsAlt: "Рыцарь, кристалл огня и воды и цветные элементы головоломки вокруг логотипа Easy Cube Games.",
      gamesTitle: "Найдите свою игру.",
      android: "Созданы для Android",
      spellGenre: "Кликер · Магия · Крафт",
      spellDescription: "Собирайте эссенцию, создавайте заклинания и открывайте огонь и воду. Развивайте магическую мастерскую с каждым тапом.",
      spellLink: "Открыть Spellarium: Magic Clicker в Google Play",
      getPlay: "Скачать в Google Play",
      ironGenre: "Три в ряд · Стратегия · Roguelite",
      ironDescription: "Собирайте комбинации, чтобы призвать армию. Выбирайте маршрут, набирайте героев и пробуйте новую тактику в каждом походе.",
      comingSoon: "Скоро в Google Play",
      swipeGenre: "Головоломки · Узоры · Цвет",
      swipeDescription: "Повторяйте цветные узоры с помощью свайпов. Небольшая разминка для внимательности, пальцев и логического мышления.",
      swipeLink: "Открыть Swipe Puzzle в Google Play",
      footer: "Создаю с душой. Играйте в удовольствие.",
      contact: "Написать мне",
      artCaption: ["ГОЛОВОЛОМКИ", "МАГИЯ", "СРАЖЕНИЯ"]
    }
  };

  function setLanguage(language) {
    const copy = translations[language];
    if (!copy) return;
    document.documentElement.lang = language;
    document.title = copy.title;
    document.querySelector('meta[name="description"]').content = copy.description;
    document.querySelectorAll("[data-i18n]").forEach(element => {
      element.textContent = copy[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => {
      element.setAttribute("aria-label", copy[element.dataset.i18nAria]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(element => {
      element.alt = copy[element.dataset.i18nAlt];
    });
    document.querySelectorAll("[data-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.querySelectorAll(".art-caption span").forEach((element, index) => {
      element.textContent = copy.artCaption[index];
    });
  }

  document.querySelectorAll("[data-language]").forEach(button => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(navigator.language.toLowerCase().startsWith("ru") ? "ru" : "en");
})();
