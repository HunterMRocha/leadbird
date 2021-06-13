from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time

# API login Info 
EMAIL = "huntermacias20@gmail.com"
PWORD = "Macias_00"


# Initiate the browser
browser  = webdriver.Chrome(ChromeDriverManager().install())
main_page = browser.current_window_handle

# Open the Website
browser.get('https://apispreadsheets.com')

# Login if needed
browser.find_element_by_class_name("green").click()

browser.find_element_by_name("email").send_keys(EMAIL)
browser.find_element_by_name("password").send_keys(PWORD)
browser.find_element_by_class_name("green").click()

# Click 'Upload'
time.sleep(5)
browser.get("https://apispreadsheets.com/upload")

# Click 'Google Sheets'
browser.find_element_by_class_name("uploadInnerSection").click()


# # Choose Email (might need to login into this too) + wait 5-10 seconds
for page in browser.window_handles:
	if page != main_page:
		login_page = page
browser.switch_to_window(login_page)
browser.find_element_by_name("email").send_keys(EMAIL)

# browser.find_element_by_xpath('''//*[@id="view_container"]/div/div/div[2]/div/div[1]/div/form/span/section/div/div/div/div/ul/li[2]/div/div[1]/div/div[2]/div[2]''')

# search for google sheet file 

# click file

# Copy URL and boom 