export class NetworkError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Network Error'
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Data Error'
    }
}

export function validateNetwork(response: Response) {
    if (!response.ok) {
        throw new NetworkError(`Error: ${response.status}`)
    }
}

export function ValidateData(data: any) {
    if (typeof data !== 'object' || data === null) {
        throw new DataError('Error validating data, please try again')
    }
}

