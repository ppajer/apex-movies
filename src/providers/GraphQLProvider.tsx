import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { ReactElement } from "react";
import { IHasChildren } from "../@types/IHasChildren";
import { API } from "../config";

function GraphQLProvider({ children }:IHasChildren): ReactElement {
    const gqlApiBase = API.GQL;
    const gqlCache = new InMemoryCache();
    const gqlClient = new ApolloClient({
        uri: gqlApiBase,
        cache: gqlCache
    });

    return (
        <ApolloProvider client={gqlClient}>
            {children}
        </ApolloProvider>
    );
}

export default GraphQLProvider;