PORT='DB_HOST='localhost' DB_PASSWORD='' // your postgress db password DATABASE='' // your postgress db name

CLIENT_URL='http://127.0.0.1:8000'

DATABASE_URL='postgres://postgres:db_password@127.0.0.1:5432/database'

https://postgresql.org/docs/6.4/jdbc19100.htm

NEXT

pnpm i
cd packages\api + pnpm run dev
cd packages\client + pnpm run dev
Project Description:

This GitHub repository hosts a comprehensive wallet application that seamlessly integrates with the Binance API, facilitating various coin transfer and card operations. Developed as a FullStack application, the project encompasses both backend and frontend components, leveraging cutting-edge technologies such as Fastify, TypeScript, Vite, and React.

Key Features:

Binance API Integration, PayPal : Utilizing the Binance API, the application enables users to interact with their Binance accounts directly from within the wallet interface, allowing for seamless transfer and management of cryptocurrencies.

Transfer Operations: Users can effortlessly transfer coins between different wallets, execute transactions, and manage their digital assets with ease, all within a secure and user-friendly environment.

Card Operations: The wallet extends its functionality beyond just cryptocurrency management by providing users with various card operations, including balance inquiries, transaction history, and card settings adjustments.

FullStack Implementation: Developed using a FullStack architecture, the project encompasses both backend and frontend components, ensuring a cohesive and integrated user experience across all features.

Fastify Backend: The backend of the application is built using Fastify, a highly efficient and low-overhead web framework for Node.js. Fastify's performance-oriented design ensures optimal speed and responsiveness for handling API requests and business logic.

TypeScript: Leveraging the power of TypeScript, the project benefits from static typing, enhanced code readability, and improved developer productivity, reducing the likelihood of runtime errors and enhancing maintainability.

Vite and React: The frontend of the wallet is developed using Vite, an innovative build tool that offers lightning-fast cold server start, instant hot module replacement (HMR), and optimized bundling for rapid development cycles. React is used for building dynamic and interactive user interfaces, providing a modern and intuitive user experience.

Contributions and Collaboration:

Contributions to the project are welcomed and encouraged. Developers interested in contributing to the project can fork the repository, make their modifications or enhancements, and submit pull requests for review. Collaboration and feedback from the community are essential for the continuous improvement and evolution of the wallet application.

Installation and Usage:

Detailed instructions for installing and running the wallet application locally can be found in the project's documentation. Developers can follow the provided guidelines to set up the backend and frontend environments, configure API integration with Binance, and start using the application for managing their digital assets efficiently.
