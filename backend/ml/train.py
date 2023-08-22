import pandas as pd 

artists_json = pd.read_json('../output/artists_Mon Aug 21 2023 13:26:54 GMT-0300 (Brasilia Standard Time).json')
artists_json.to_csv('./out/artists.csv');

df = pd.DataFrame(artists_json)
print(df)