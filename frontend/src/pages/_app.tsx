
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import "../styles/globals.css";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI, // Update to your backend GraphQL URL
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: { Component: React.ComponentType; pageProps: Record<string, unknown> }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

