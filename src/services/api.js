import contentful from 'contentful';

let client;

function getClient() {
    if (client) {
        return client;
    }

    const options = {
        accessToken: 'f65773a355fa25d5c63f0accee41503c7f4adc2c7cebc98f03c6c6ee82f29c4e',
        space: 'e5qo3wz2rwcl',
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
