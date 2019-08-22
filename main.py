import requests

import re
import os
import random
import time


def random_sleep():
    sleep_time = random.randint(30, 50)
    print(f"Sleeping for {sleep_time}s")
    time.sleep(sleep_time)


BASE = "https://www.super-parrain.com"

s = requests.Session()
resp = s.get(f"{BASE}/login")
resp.raise_for_status()

res = re.search(r"name=\"_csrf_token\" value=\"(.*?)\"", str(resp.content))
csrf = res.group(1)

print(csrf)

data = {
    "_username": "antoine.augusti@gmail.com",
    "_password": os.environ.get("PASSWORD"),
    "_csrf_token": csrf,
}
resp = s.post(f"{BASE}/login_check", data=data)
resp.raise_for_status()

random_sleep()

urls = [
    "/tableau-de-bord/messagerie",
    "/offres/habitation/parrainage-planete-oui",
    "/offres/voyage/parrainage-airbnb",
    "/offres/telephonie-internet/red-by-sfr",
    "/users/antoinea",
    "/",
    "/offres/auto-moto/parrainage-drivy",
    "/offres/drivy/parrainage-drivy/annonces/antoinea",
]
random.shuffle(urls)

for url in urls[:5]:
    resp = s.get(f"{BASE}{url}")
    resp.raise_for_status()
    print(url, resp.status_code)

    random_sleep()
