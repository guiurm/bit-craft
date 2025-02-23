/**
 * A response validator that checks if the response status code is valid.
 *
 * @param {number} responseCode - The status code of the response.
 * @returns {boolean} true if the response code is valid, false otherwise.
 */
const validResponseValidator = (responseCode: number) => {
    return !(responseCode < 200 || responseCode >= 300);
};

export { validResponseValidator };
