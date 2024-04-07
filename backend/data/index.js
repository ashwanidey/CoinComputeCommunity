import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const postIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
]

export const users = [
  
  
  {
    _id: userIds[0],
    name: "Steve",
    username: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "1.jpg",
    
    __v: 0,
  },
  
  {
    _id: userIds[1],
    name: "Whatcha",
    username: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "2.jpg",
   
    __v: 0,
  },
  {
    _id: userIds[2],
    name: "Jane",
    username: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "3.jpg",
    
    __v: 0,
  },
  {
    _id: userIds[3],
    name: "Jimmy Boss",
    username: "jimmyBoss",
    email: "jimmyBoss@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "4.jpg",
    
    __v: 0,
  },
  {
    _id: userIds[4],
    name: "Degen Ape Trader",
    username: "Degenapetrader",
    email: "Degenapetrader@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "5.png",
    
    __v: 0,
  },
]

export const posts = [
  {
    _id: postIds[0],
    userId: userIds[0],
    name: "Steve",

    username: "Ralph",
    
    description: "Some really long random description",
    picturePath: "1.jpg",
    isBullish : 'true',
 
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    
  },
  {
    _id: postIds[1],
    userId: userIds[0],
    name: "Steve",

    username: "Ralph",

    description:  `Casa is emerging from bear market hibernation.

    Today I'm excited to announce our acquisition of Chamber, a company on the forefront of applied cryptography. With our shared vision & resources, we intend to bring some amazing products to market soon!`,
    picturePath: "1.jpg",
    isBullish : 'false',

    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    
  },
  {
    _id: postIds[2],
    userId: userIds[1],
    name: "Whatcha",
    username :"something",
    
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "2.jpg",
    isBullish : 'false',

    likes: new Map([
      [userIds[0], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    
  },
  {
    _id: postIds[3],
    userId: userIds[2],
    name: "Jane",
    username: "Doe",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "3.jpg",
    isBullish : 'true',
   
    likes: new Map([
      [userIds[1], true],
      [userIds[0], true],
      [userIds[3], true],
      [userIds[2], true],
    ]),
    
  },
  {
    _id: postIds[4],
    userId: userIds[3],
    name: "Jimmy Boss",
    username: "jimmyBoss",
    description:
      `Poor #ETHBTC chart.

      However, we are right at range low with a good support at 0.048. There is no point to short this ratio here.
      
      
      I think we could at least have a small bounce to 0.05+, and then we can see if ETH bulls can actually make it or not.`,
    picturePath: "4.jpg",
    isBullish : '',
  
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[0], true],
    ]),
  
  },
  {
    _id: postIds[5],
    userId: userIds[4],
    name: "Degen Ape Trader",
    username: "Degenapetrader",
    description:
      `This is usually good local top signal for Gold around 2.3k.

      Probably #BTC will keep going up from here while Gold just trades sideway.
      
      Seriously thinking about shorting Gold / Longing BTC trade combo 🤣.`,
    picturePath: "5.png",
    isBullish : '',
    // userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[4], true],
      [userIds[3], true],
      [userIds[0], true],
    ]),
    
  },
]

export const comments = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    postId : postIds[1],
    name: "Steve",
    username: "Ralph",
    description: "Very nice post",
    userPicturePath: "1.jpg",
    isBullish : 'true',
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
  },

  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    postId : postIds[1],
    name: "Whatcha",
    username: "Doing",
    description: "Damn bro good stuff!!",
    userPicturePath: "2.jpg",
    isBullish : 'true',
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
  },

  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    postId : postIds[1],
    name: "Jane",
    username: "Doe",
    description: "Interested..Now Gimme Job!",
    userPicturePath: "3.jpg",
    isBullish : 'true',
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      
    ]),
  },




]


