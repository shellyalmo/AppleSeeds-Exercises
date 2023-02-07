document.getElementById("get-joke").addEventListener("click", getJoke);

async function getJoke() {
  try {
    let response = await fetch("https://api.jokes.one/jod");
    // console.log(response);
    // let response = await mockFetch("https://api.jokes.one/jod");
    let data = await response.json();
    console.log(data);
    document.getElementById("output").innerText =
      data.contents.jokes[0].joke.title + data.contents.jokes[0].joke.text;
  } catch (error) {
    console.log(error);
  }
}

function mockFetch(url) {
  return new Promise((res) => {
    res({
      json: () =>
        new Promise((res2) => {
          res2({
            success: { total: 1 },
            contents: {
              jokes: [
                {
                  description: "Joke of the day ",
                  language: "en",
                  background: "",
                  category: "jod",
                  date: "2023-02-06",
                  joke: {
                    title: "Knock Knock - Opera who?",
                    lang: "en",
                    length: "111",
                    clean: "1",
                    racial: "0",
                    date: "2023-02-06",
                    id: "oFr2gwJ7UpCrRffHKbXksQeF",
                    text: "Knock Knock\r\nWho's there?\r\nOpera!\r\nOpera who?\r\nOpera-tunity, and you thought opportunity only knocked once!\r\n\r\n",
                  },
                },
              ],
              copyright: "2019-20 https://jokes.one",
            },
          });
        }),
    });
  });
}
