import pandas as pd 
import seaborn
import os

def get_newest_file(path):
    files = os.listdir(path)
    paths = [os.path.join(path, basename) for basename in files]
    return max(paths, key=os.path.getctime)

def json_to_dataframe(json):
    arr = []
    df = pd.DataFrame()

    for i in range(len(json['artists'])):
        df = pd.DataFrame(json['artists'][i])
        arr.append(df)

    tbl = pd.concat(arr)
    return tbl

def save_dataframe_as_csv(df):
    df.to_csv('./out/artists.csv')
    
if __name__ == '__main__':
    json = pd.read_json(get_newest_file('../output/'))
    df = json_to_dataframe(json)
    print(df[['name', 'genres', 'followers']])