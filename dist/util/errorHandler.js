export class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Network Error';
    }
}
export class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Data Error';
    }
}
export function validateNetwork(response) {
    if (!response.ok) {
        throw new NetworkError(`Error: ${response.status}`);
    }
}
export function validateData(data) {
    if (typeof data !== 'object' || data === null) {
        throw new DataError('Error validating data, please try again');
    }
}
