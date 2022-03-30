import os
import json

# This script reads all asset file paths and writes them into file "assetlist.js"

path = "./src/assets"
filenames = []
for r, d, f in os.walk(path):
    for file in f:
        filenames.append(os.path.join(r, file))

formatted = []
for filename in filenames:
    formatted.append(filename.replace('./src/assets' , ''))



f=open("./src/assets/assetlist.js", "w")
f.write("export default {'assets': "+json.dumps(formatted)+"}")
f.close