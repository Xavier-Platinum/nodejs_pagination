// regex function for searching functionality
const escapeRegex = (string) => {
    return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

// exporing module
module.exports = escapeRegex;