const fakeArticles = {
    1: {
      date: new Date(2021, 2, 16),
      title: "There’s a fair tomorrow",
      body: `
          Is a mháithrín an ligfidh tú chun aonaigh mé
          Is a mhuirnín óg ná healaí é
          Beidh aonach amárach in gContae an Chláir
          Cén mhaith domh é ní bheidh mé ann
        `,
    },
    2: {
      date: new Date(2021, 9, 24),
      title: "React is interesting",
      body: "Takes time to learn Firebase, right?",
    },
  };
  
  export function fetchTitles() {
    return Object.entries(fakeArticles).map(([id, { title }]) => ({ id, title }));
  }
  
  export function fetchArticleById(id) {
    return fakeArticles[id];
  }