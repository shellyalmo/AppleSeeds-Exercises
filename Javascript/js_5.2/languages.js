const languageSpeakers = (language) => {
  switch (language) {
    case "Mandarin":
      console.log("MOST number of native speakers!");
      break;
    case "Spanish":
      console.log("2nd place in a number of native speakers");
      break;
    case "English":
      console.log("3rd place");
      break;
    case "Hindi":
      console.log("Number 4");
      break;
    case "Arabic":
      console.log("5th most spoken language");
      break;
    default:
      console.log("Not in the top 5");
  }
};

languageSpeakers("Mandarin");
languageSpeakers("Spanish");
languageSpeakers("English");
languageSpeakers("Hindi");
languageSpeakers("Arabic");
languageSpeakers("Hebrew");
