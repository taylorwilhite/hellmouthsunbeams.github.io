const fics = [
  // -- ADD YOUR FICS HERE --
  {
    url:
      "https://docs.google.com/document/d/1g4a1xX678CjjaTLEb0_4Uay8qIyoCoiFaiPbx0Sg3Nk/edit",
    title: "Rebooting",
    words: 293,
    author: "ENBY",
    characters: ["Emmett Internet"],
  },
  {
    url:
      "https://docs.google.com/document/d/18Vg6VQuudZoPE7BFbi4_1LLj57wzXw3t7hd8S8lwtjM/edit?usp=sharing",
    title: "This Is Me",
    words: 922,
    author: "slavfox",
    characters: ["Nagomi Nava"],
  },
  // -- END FICS --
].sort((left, right) => {
  if (left.author > right.author) {
    return 1;
  } else if (left.author < right.author) {
    return -1;
  } else if (left.title > right.title) {
    return 1;
  } else if (left.title < right.title) {
    return -1;
  } else {
    return 0;
  }
});

const characters = [...new Set(fics.map((fic) => fic["characters"]).flat())];

const websiteState = () => {
  return {
    ficFilters: { characters: [], words: [0, Infinity], author: null },
    characters: characters,
    getFilteredFics: (filters) => {
      filteredFics = fics.filter(
        (fic) => filters.words[0] <= fic.words <= filters.words[1]
      );
      if (filters.author !== null) {
        filteredFics = filteredFics.filter(
          (fic) => fic.author == filters.author
        );
      }
      if (filters.characters !== []) {
        filteredFics = filteredFics.filter((fic) =>
          filters.characters.every((c) => c in fic.characters)
        );
      }
      return filteredFics;
    },
    getFicMeta: (fic) =>
      `${fic.author} [${fic.words} words; ${fic.characters.join(", ")}]`,
  };
};
