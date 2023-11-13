from multiprocessing.dummy import Pool
import pandas as pd
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from time import sleep

#Collect categories and sub-categories list
with open('./categories.json', 'r') as rstream:
    CATEGORIES = json.load(rstream)
with open('./sub_categories.json', 'r') as rstream:
    SUB_CATEGORIES = json.load(rstream)
cat_list = CATEGORIES.keys()
sub_cat_list = SUB_CATEGORIES.keys()

def extract_data(game_list, cur_titles, data:list, default_cat):
    for game in game_list:
        title = game.find_element(By.CLASS_NAME, 'salepreviewwidgets_TitleCtn_1F4bc').text
        if title in cur_titles: #Avoid overlapping
            continue
        else:
            cur_titles.append(title)
        img_url = game.find_element(By.TAG_NAME, 'img').get_attribute('src')
        release_date = game.find_element(By.CLASS_NAME, 'salepreviewwidgets_StoreSaleWidgetRelease_3eOdk').text
        try:
            price = game.find_element(By.CLASS_NAME, 'salepreviewwidgets_StoreSalePriceBox_Wh0L8').text.strip('₫')
            if price == "Free To Play":
                price = 0
        except:
            price = 0
        rating = game.find_element(By.CSS_SELECTOR, 'a[class="gamehover_ReviewScore_24NyY ReviewScore Focusable"]').find_elements(By.TAG_NAME, 'div')[1].text
        reviews = game.find_element(By.CLASS_NAME, 'gamehover_ReviewScoreCount_1Deyv').text.strip('|')
        reviews = reviews.strip('User Reviews').strip()
        
        categories = default_cat + ";"
        sub_categories = ""
        cats = game.find_element(By.CLASS_NAME, 'salepreviewwidgets_StoreSaleWidgetTags_3OSJs')
        tags = cats.find_elements(By.TAG_NAME, 'a')
        for tag in tags:
            t = tag.text
            if t == default_cat:
                continue
            if t in cat_list:
                categories += t + ";"
            elif t in sub_cat_list:
                sub_categories += t + ";"
    
        data.append([title,release_date,categories,sub_categories,price,img_url,"dummy desc",rating,reviews])
    return data, cur_titles

urls = CATEGORIES.items()
data = []
cur_titles = []

#Initialize and run Chrome browser
options = webdriver.ChromeOptions()
browser = webdriver.Chrome(options=options)
browser.implicitly_wait(5)

#Start scraping
for cat,url in urls:
    print("Scraping: ",url)
    browser.get(url)
    sleep(7)
    
    game_list = browser.find_elements(By.CLASS_NAME,'salepreviewwidgets_SaleItemBrowserRow_y9MSd')
    data, cur_titles = extract_data(game_list, cur_titles, data, cat)

columns = ['title','release_date','categories','sub_categories','price','img_url','desc','rating','reviews_count']
df = pd.DataFrame(data,columns=columns)
df.to_csv('games_steam_org.csv')

#Preprocessing
mapping = {'Overwhelmingly Positive':5,'Very Positive':4,'Mostly Positive':3,'Mixed':2,'Mostly Negative':1,'Overwhelmingly Negative':0}

df['rating'] = df['rating'].map(mapping)
df.to_csv('games_steam_processed.csv')