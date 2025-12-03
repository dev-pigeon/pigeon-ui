

function getRequestObject(method: 'GET' | "POST" | "PUT" | "DELETE", payload?:object,) {
    const request = {
        method : method,
        headers: {
            'content-type' : "application/json",
        },
        body: payload ? JSON.stringify(payload) : null
    }

    return request;
}

async function makeRequest(requestObject : object, URL : string) {
    const response = await fetch(URL, requestObject);
    const jsonResponse = await response.json();
    if(!response.ok) {
        throw new Error(jsonResponse['error']);
    }
    return response;
}

export {getRequestObject, makeRequest}