export class HttpError extends Error {
  constructor(status, statusText) {
    super("My custom exception" + statusText);
    this.status = status;
  }
}

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (res.status === 204) {
    return null;
  } else if (res.ok) {
    return await res.json();
  } else {
    throw new HttpError(res.status, res.statusText);
  }
}

export async function requestJSON(url, json, method) {
  const res = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  if (res.status === 204) {
    return null;
  } else if (res.ok) {
    return await res.json();
  } else {
    throw new HttpError(res.status, res.statusText);
  }
}
