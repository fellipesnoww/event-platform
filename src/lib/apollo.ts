import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4sfdfds1xf901z5hrx98eah/master',
    cache: new InMemoryCache(),
})