

function getRequestObject(method: 'GET' | "POST" | "PUT" | "DELETE", payload?:object,) {
    const request = {
        method : method,
        header: {
            'content-type' : "application/json",
        },
        body: payload ? JSON.stringify(payload) : null
    }

    return request;
}

async function makeRequest(requestObject : object, URL : string) {
    const response = await fetch(URL, requestObject);
    if(!response.ok) {
        throw new Error("An error has occured");
    }
    return response;
}

export {getRequestObject, makeRequest}