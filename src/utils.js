export const getUserIdFromToken = (token) => {
    const payload = token.split('.')[1];
    const decodedPayload = atob(payload);
    const jsonPayload = JSON.parse(decodedPayload);
    return jsonPayload._id;
};