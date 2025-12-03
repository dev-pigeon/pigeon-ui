import { useState, useRef, useEffect } from "react";

export type AuthStatus = {
    status : 'success' | 'error',
    message : string,
    durationMs : number
}

export interface authStatusReturn {
    authStatus : AuthStatus | null,
    submitCallbackWrapper(fn: () => any):void
}

function useAuthStatus() : authStatusReturn {
    function isAuthStatus(value : any): value is AuthStatus {
        return (
            value !== null && 
            typeof value === 'object' &&
            typeof value.status === 'string' &&
            value.status == 'error' || value.status == 'success' &&
            typeof value.message === 'string' &&
            typeof value.durationMs === 'number'
        )
    }

    const [authStatus, setAuthStatus] = useState<AuthStatus | null>(null);
    const authStatusTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
        if (authStatusTimer.current) {
            clearTimeout(authStatusTimer.current);
        }
        };
    }, []); 

    async function submitCallbackWrapper(fn: () => any) {
        const result = await fn();
        if (result != undefined && isAuthStatus(result)) {
        setAuthStatus(result);

        authStatusTimer.current = setTimeout(() => {
            setAuthStatus(null);
            authStatusTimer.current = null;
        }, result.durationMs);
        }
    }

    return {
        authStatus,
        submitCallbackWrapper
    }
}

export default useAuthStatus;