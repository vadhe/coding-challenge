import * as React from 'react'

import { typeRatings } from '../type/types';

export default function Fetch() {
  const [response, setResponse] = React.useState([] as unknown as typeRatings);

  React.useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_BASE_LINK || '', {
          headers:{
            apikey: process.env.REACT_APP_SUPABASE_KEY || '',
            Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`
          },
        });
        const data = await response.json();
        setResponse(data)
      } catch (error) {
      } finally {
      }
    };
    get();
  }, []);

  return [response];
}
