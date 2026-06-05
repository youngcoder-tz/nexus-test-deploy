import http from "k6/http";
import { uuidv4 } from "https://jslib.k6.io/k6-utils/1.2.0/index.js";
import { check } from "k6";

export const options = {
  vus: 200,
  duration: "30s",
  // Optional: Add a threshold to fail the test if errors are > 1%
  thresholds: {
    http_req_failed: ["rate<0.01"],
  },
};

function randomIP() {
  return `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
}

export default function () {
  const payload = JSON.stringify({
    projectId: "cmnz8p2v70001lm60eo7r2pej",
    url: "http://localhost:3000/load-test",
    eventType: "page_view",
    eventName: "Stress Test",
    sessionId: uuidv4(),
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer nx_pk_live_xxx",
      "X-Forwarded-For": randomIP(),
    },
  };

  const res = http.post("http://localhost:3002/api/collect", payload, params);

  // ADD THIS: Validates that the server is actually accepting the data
  check(res, {
    "is status 202": (r) => r.status === 202,
    "is not 429": (r) => r.status !== 429,
  });
}
