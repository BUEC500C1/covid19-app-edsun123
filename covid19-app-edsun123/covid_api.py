import requests

response=requests.get("https://api.covid19api.com/dayone/country/united-states")
dict = response.json()

for entry in dict:
    print(entry['Lat'])
    print(entry['Lon'])
    print('\n')

