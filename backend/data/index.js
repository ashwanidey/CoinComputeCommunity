import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    name: "Steve",

    username: "Ralph",
    // location: "New York, CA",
    description: "Some really long random description",
    picturePath: "1.jpg",
    // userPicturePath: "p3.jpeg",
    // likes: new Map([
    //   [userIds[0], true],
    //   [userIds[2], true],
    //   [userIds[3], true],
    //   [userIds[4], true],
    // ]),
    // comments: [
    //   "random comment",
    //   "another random comment",
    //   "yet another random comment",
    // ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    name: "Whatcha",
    username :"something",
    
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "2.jpg",
    // userPicturePath: "p6.jpeg",
    // likes: new Map([
    //   [userIds[7], true],
    //   [userIds[4], true],
    //   [userIds[1], true],
    //   [userIds[2], true],
    // ]),
    // comments: [
    //   "one more random comment",
    //   "and another random comment",
    //   "no more random comments",
    //   "I lied, one more random comment",
    // ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    name: "Jane",
    username: "Doe",
    // location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "3.jpg",
    // userPicturePath: "p5.jpeg",
    // likes: new Map([
    //   [userIds[1], true],
    //   [userIds[6], true],
    //   [userIds[3], true],
    //   [userIds[5], true],
    // ]),
    // comments: [
    //   "one more random comment",
    //   "I lied, one more random comment",
    //   "I lied again, one more random comment",
    //   "Why am I doing this?",
    //   "I'm bored",
    // ],
  },
]
