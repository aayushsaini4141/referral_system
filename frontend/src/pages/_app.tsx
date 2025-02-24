
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import "../styles/globals.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Update to your backend GraphQL URL
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: Record<string, unknown> }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

