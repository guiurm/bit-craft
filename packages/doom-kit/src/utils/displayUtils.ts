/**
 * Returns true if the user is using a mobile device, or if the window's screen width is less than or equal to 800px.
 * @returns {boolean} true if user is using a mobile device or window width is less than or equal to 800px, false otherwise.
 */
const isMobile = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    const esMobile = /mobile|android|iphone|ipad|ipod|windows phone/i.test(userAgent);
    const screenWidthMobile = window.innerWidth <= 800;
    return esMobile || screenWidthMobile;
};

export { isMobile };
