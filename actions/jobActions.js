import axios from 'axios';
import reverseGeo from 'latlng-to-zip';
import { FETCH_JOBS } from './types';
import qs from 'qs';

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';

const JOB_QUERY = {
  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript',
};

const buildUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = region => async (dispatch) => {
  try {
    const zip = await reverseGeo(region);
    const url = buildUrl(zip);
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
  } catch (err) {
    console.log(err);
  }
};
