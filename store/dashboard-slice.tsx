import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: [
    {
      id: 1,
      title: "Flutter Programming",
      date: "2023-01-19",
      address: "Mankato Mississippi 96522",
      imagePath: "/images/flutter.webp",
      isFeatured: true,
      desc: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross-platform applications for Android, iOS, Linux, macOS etc. It is flexible, fast, responsive to different screen sizes and much more! Join this event to start you off on learning modern android development using flutter!",
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Java Programming",
      date: "2023-03-11",
      address: "Frederick Nebraska 20620",
      imagePath: "/images/java.webp",
      isFeatured: false,
      desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA). Java is also utilized in frameworks such as Android Studio to write android app logic. Apply to this event to learn the basics of Java that you can apply to android development!",
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "Python Programming",
      date: "2023-04-29",
      address: "Kodi Road 2, Nairobi West",
      imagePath: "/images/python.webp",
      isFeatured: true,
      desc: "Python is a popular programming language. It was created by Guido van Rossum and released in 1991. It has multiple applications such as it can be used for server-side web development, system scripting and also handling big data and performing complex calculations.",
    },
    {
      id: Math.floor(Math.random() * 100),
      title: "ReactJS Programming",
      date: "2023-08-09",
      address: "Street Roseville",
      imagePath: "/images/react.webp",
      isFeatured: false,
      desc: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React js is the hottest front end web development technology currently in the market and without further ado, let's meet up in the event and get to learn!",
    },
  ],
  reducers: {
    addEvent(state, action) {
      state.push(action.payload);
    },
  },
});

export const dashboardAction = dashboardSlice.actions;

export default dashboardSlice;
