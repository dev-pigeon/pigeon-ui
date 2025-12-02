export type AuthStatus = {
    status : 'success' | 'error',
    message : string,
    durationMs : number
}

export function isAuthStatus(value : any): value is AuthStatus {
    return (
        value !== null && 
        typeof value === 'object' &&
        typeof value.status === 'string' &&
        value.status == 'error' || value.status == 'success' &&
        typeof value.message === 'string' &&
        typeof value.durationMs === 'number'
    )
}

