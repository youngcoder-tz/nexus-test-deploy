-- Initialize random seed
math.randomseed(os.time())

wrk.method = "POST"
wrk.headers["Content-Type"] = "application/json"
wrk.headers["Authorization"] = "Bearer nx_pk_live_xxx"

-- This function runs for every single request
request = function()
   -- Generate a random number to simulate different users
   local session_id = "sess_" .. math.random(1000000, 9999999)
   
   local body = [[
   {
     "projectId": "cmnz8p2v70001lm60eo7r2pej",
     "url": "http://localhost:3000/load-test",
     "eventType": "page_view",
     "eventName": "Performance Stress Test",
     "userAgent": "NexusHub Wrk/1.0",
     "sessionId": "]] .. session_id .. [["
   }
   ]]
   
   return wrk.format(nil, nil, nil, body)
end