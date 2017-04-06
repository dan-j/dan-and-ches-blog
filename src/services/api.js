import contentful from 'contentful';

let client;

function getClient() {
    if (client) {
        return client;
    }

    const options = {
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
        space: process.env.CONTENTFUL_SPACE_ID,
    };

    client = contentful.createClient(options);
    return client;
}

function getBlogs(page = 0, limit = 10) {
    return getClient().getEntries({
        content_type: '2wKn6yEnZewu2SCCkus4as',
        limit,
        skip: page * limit,
    }).then(result => result.items);
}

export default {
    getBlogs,
};
