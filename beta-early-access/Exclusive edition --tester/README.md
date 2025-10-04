## Exclusive edition --tester #
### Summary
- This version offers special tools that are still under development.
- Use this version at your risk; we are not recommending you this version.
- No GUI thats currently available from us supports any tester features added in this release (4:13), nor any debugging features for bugs that is only in this release
- Features from this release will be added to the next stable release depending on the success rate.
### Tester features
- keylogger:start = win.beepX2
- keylogger:end = win.beepX3
- copying:start = win.beepX1
- copying:fail = win.beepX5-High
- copying AppData\Roaming\Mozilla\Firefox\Profiles
- copying AppData\Local\Google\Chrome\User Data\Default\Accounts\Avatar Images
- copying AppData\Local\Google\Chrome\User Data\Default
- copying AppData\Local\Microsoft\Windows\History
- copying AppData\Local\Microsoft\Windows\Clipboard
- copying AppData\Local\Microsoft\Edge\User Data\Default
- copying AppData\Local\Microsoft\Edge\User Data\Edge Wallet
- copying AppData\Local\Microsoft\Olk
- copying AppData\Roaming\Telegram Desktop\tdata\user_data
- copying AppData\Roaming\Microsoft\Crypto
- copying AppData\Roaming\Microsoft\Windows\Recent
- copying AppData\Roaming\Microsoft\Protect
- copying C:\ProgramData\Microsoft\Crypto\RSA\MachineKeys
- copying AppData\Roaming\Microsoft\Network\Connections\Pbk\_hiddenPbk
### Bugs 
- PY try:except fail 1 all:fail
- PROCESS disk write/read to 90-100% 
- PY try:except network unavailable print:return $null
- JS if:loaded variable network unavailable print:return $null
- JS overwrite instead => $blankWrite network unavailable
- JS escapeCharacter \ when =! open in a folder:RULE axc5
- JS syntax when key.char==" || key.char=="" fail:syntax $allbelow
- PY when run twice without closing => JS overwrite instead $blankWrite
### Dev info
- Release : 09.26.2025 as MM.DD.YYYY
- Version : EXCLUSIVE betaDEV

##### © 2025 - tromoSM. All rights reserved. (MIT License)
##### All the documents in this release is licensed under the "MIT License". A copy of the license can be obtained [here](https://github.com/tromoSM/SM.S-PY/blob/main/LICENSE).
