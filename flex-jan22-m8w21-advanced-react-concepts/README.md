# Real World React!

## Today's menu

- React Context
- React Router
- React Query (Stretch!)

## React Context

React Context is a feature in the React library that allows you to share data between components without manually passing it down through every level of the component tree as props. This is particularly useful for data that you might consider "global" within your application, such as user preferences, themes, or authentication status.

There is two parts to a React Context

### Creating Context:

You use the `createContext` function to create a `Context` object. This object has two main components:

- Provider: This component wraps the part of your component tree where you want the context to be available. It takes a value prop, which is the data you want to share.

- Consumer: Components within the Provider's tree can use this to read the context value. (Using the `useContext` hook ideally!)

## React Router

React Router is a popular library for handling navigation and routing in React applications. It allows us to create a single-page application (SPA) where different components are rendered based on the current URL.

With React Router, you can:

- Declare Routes: You define routes that map specific URLs to different components or views within your app.
- Match Routes: React Router matches the current browser URL to these defined routes.
- Renderg Components: Based on the matched route, it renders the corresponding component in the designated area of your app.
- Handle Navigation: It provides components and hooks for managing navigation, such as <Link> for creating links and `useNavigate` for programmatic navigation.

## React Query

React Query (known also as TanStack Query) is a powerful library for fetching, caching, synchronizing, and updating server state in your React applications. It simplifies the process of managing asynchronous data, making it easier to build applications that interact with APIs or other data sources.

The main points about React Query are:

- Data Fetching: React Query provides hooks like useQuery to fetch data from APIs. It handles the loading, error, and success states automatically, and it re-fetches data in the background to keep it up-to-date.
- Caching: It has built-in caching mechanisms to store fetched data, reducing the number of requests to the server and improving performance. You can configure caching policies based on your needs.
- Optimistic Updates: It allows for optimistic UI updates, where changes are immediately reflected in the interface before they are confirmed by the server. This can create a more responsive user experience.
- Mutation Management: React Query also provides hooks like useMutation to manage mutations (updates, deletions, etc.) to your server state. It handles loading and error states for these operations as well.
