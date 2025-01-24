# Coin Compute Community

## Project Description
Coin Compute Community is a platform that allows users to connect and share posts related to cryptocurrency. It provides a feature to message and follow users.

Inspired from [CoinMarketCap](https://coinmarketcap.com/community/)
## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ashwanidey/CoinComputeCommunity.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
5. Install dependencies:
   ```sh
   npm install
   ```

## Usage
1. Start the server:
   ```sh
   npm start
   ```
2. Start the Client:
   ```sh
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.

## File Structure
```
CoinComputeCommunity/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── index.js
├── public/
├── package.json
└── README.md
```

## Environment Variables
To run the backend, you need to set up the following environment variables in a `.env` file at the root of the project:
```
MONGO_URL=your_database_url
JWT_SECRET=your_jwt_secret
PORT=3001
```

## Contribution
We welcome contributions from the community! To contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License.
