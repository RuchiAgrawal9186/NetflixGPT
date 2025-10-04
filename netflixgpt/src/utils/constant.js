export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGEyZTNhN2Q3NDNiNzZlNTJjNjU1MTlhYjNhNTA2NCIsIm5iZiI6MTY4MTAyMzU2Ny42MjQsInN1YiI6IjY0MzI2MjRmOTI0Y2U2MDA3N2IwMDk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.deaGX5HkJuvaOozl-0WEhDmDs691Z9vK59RpPxt_hiM",
  },
};

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BACKGROUND_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg";

export const LANGUAGES = [
  { label: "English", value: "en-US" },
  { label: "Hindi", value: "hi-IN" },
];

export const LANGUAGE_OBJ = {
  "en-US": {
    gptSearch: "GPT Search",
    signIn: "Sign In",
    signOut: "Sign Out",
    backToBrowse: "Back to Browse",
    homeTitle: "Unlimited movies, TV shows and more",
    homeSubtitle: "Watch anywhere. Cancel anytime.",
    getStarted: "Get Started",
    searchPlaceholder: "What would you like to watch today?",
    searchBtn: "Search",
  },
  "hi-IN": {
    gptSearch: "जीपीटी खोज",
    signIn: "साइन इन",
    signOut: "साइन आउट",
    backToBrowse: "ब्राउज़ पर वापस जाएं",
    homeTitle: "अनलिमिटेड फ़िल्में, टीवी शो और भी बहुत कुछ",
    homeSubtitle: "कहीं भी देखें। कभी भी रद्द करें।",
    getStarted: "शुरू करें",
    searchPlaceholder: "आज आप क्या देखना चाहेंगे?",
    searchBtn: "खोजें",
  },
};

export const OPENAPI_KEY = import.meta.env.VITE_OPENAI_API_KEY;
