import axios from 'axios';

const BuildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    console.log("On the server!!!")
    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // We must be on the browser
    console.log("On the browser!!!");
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default BuildClient;
