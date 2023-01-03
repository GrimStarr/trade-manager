import requests

tel_event = "haha"

res = requests.post('http://20.231.125.173:5009/buy',json=tel_event)
print(res)