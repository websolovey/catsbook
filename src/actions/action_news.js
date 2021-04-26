const newsLoaded = (newNews) => {
    return {
        type: 'NEWS_LOADED',
        payload: newNews
    }
}

const newsRequested = () => {
    return {
        type: 'NEWS_REQUESTED',
    }
}

const newsError = () => {
    return {
        type: 'NEWS_ERROR',
    }
}

export {
    newsLoaded,
    newsRequested,
    newsError
};