import React from 'react';

export function useFetchGet() {
  return <div>useFetch</div>;
}

export const useFetchWithToken = async ({ endpoint, dataToSend, method }) => {
  const token = localStorage.getItem('token') || '';

  const data = await fetch(endpoint, {
    method: method,
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(dataToSend),
  });
  const response = await data.json();

  return { response };
};
