var tipuesearch = {"pages": [{'title': 'About', 'text': '\n This is  https://github.com/mdecourse/cmstemplate \n \n 呵呵呵 \n ㄚㄚㄚ', 'tags': '', 'url': 'About.html'}, {'title': '每周進度', 'text': '', 'tags': '', 'url': '每周進度.html'}, {'title': 'w01~w04', 'text': '用python架網站 \n', 'tags': '', 'url': 'w01~w04.html'}, {'title': '建網站', 'text': '首先先到 mde.tw  網站第一頁，點選下面連結 \n \xa0 \n 點選此檔案，裡面老師有詳細的教學內容 \n \xa0 \n \xa0 \n 首先先下載隨身系統 \n fall2020( 老師有做好的路徑及 pip 指令 )  \n \xa0 \n 或是直接至官網下載 \n \n 載完後解壓縮會有這四個檔案 \n \n 確認 python 版本 \n 在 Y 槽打上 python \n \n 確認版本後用 ctrl+Z 跳出 \n \xa0 \n 再確認擁有的 pip 附加檔案 \n \xa0 \n 再到git 官網下載portable git \n \n 將其下載下來 \n \n 並且解壓縮到data (自行新增一個新的資料夾) \n \xa0 \n \xa0 \n 將開始的路徑做更動(將其拉的小白) \n 打上 \n \n 此處路徑要一樣 \n 宣告變數函數path_git的路徑為%Disk%:\\portablegit\\bin; \n \xa0 \n 再路徑下多打上%path_git%;，才能拿來當作路徑使用 \n \xa0 \n 打完後做儲存，並重開 \n \xa0 \n 再來設定git config (有對應的語法必須查Google找git windows \n 例如要設定網路語法 \n \n 因為程式碼太多所以建議多做一個txt檔，存在data\\tmp下當參考資料 \n 例如: \n \n 再github 創建倉儲 \n \n 就會得到三個檔案 \n \n 將檔案clone下來 \n \n 在tmp下就會得到 \n \n 並且裡面有 \n \xa0 \n 再git資料夾理會有要存版本的資料 \n 我現在希望再cad2020下的sumbugu做版本更動 \n \xa0 \n 所以到cad2020裡輸入 \n \n 再cad2020 下就會得到cmsimde的資料夾 \n 裡面有 \n \n 將up_dir的東西全部複製並貼到外面的cad2020裡 \n \n 取代up_dir資料夾裡的東西有.gitignore，LICENSE \n \xa0 \n 在小黑下載啟動模組 \n pip install flask flask_cors lxml bs4 markdown pelican leo\xa0 \n \xa0 \n \xa0 \n 補充:載完後解釋:leo \n \n 此處為leo設定的地方 \n \xa0 \n 之後即可開啟動態 \n \n 打上python wsgi.py \n 再google打上 http://localhost:9443/ \n 或是https://127.0.0.1:9443/ \n \n 即可登入  ( 密碼為admin \n 得網站 \n \n 在home中會要做一個.gitconfig \n 讓電腦知道要用哪知帳號 \n \xa0 \n 如果引擎壞掉如cmsimde網站無法開啟 \n \xa0 \n 打上git clone –recourse-submodule (“URL”) \n URL=https://github.com/40823131/cad2020 \n Or \n \n \xa0 \n 如果網址為[::]:9443 \n \n 到init.py改網址 \n', 'tags': '', 'url': '建網站.html'}, {'title': 'w05~w08', 'text': 'inventer2020作業1~作業50 \n https://drive.google.com/drive/folders/1dEqtLJIle-PNpg9VmaZPzIHF6jkSWr9Z?usp=sharing \n', 'tags': '', 'url': 'w05~w08.html'}, {'title': '作畫影片', 'text': '\n \n', 'tags': '', 'url': '作畫影片.html'}, {'title': 'Homework', 'text': '\n \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'w09~w12', 'text': '', 'tags': '', 'url': 'w09~w12.html'}, {'title': 'ssh製做', 'text': '首先將小黑編輯器打開並寫打上: \n \n 打上\xa0 \n ssh-keygen -t rsa -b 4096 -C "使用者學號" \n \n 第二行為鑰使儲存位置 \n 下一行為輸入密碼 \n 再次輸入密碼 \n 即可獲得要鑰使 \n 在鑰使儲存位置會找到兩個檔案(上為private key 下為 public key) \n \n (3) \n 下載putty工具 \n 會有以下檔案 \n \n 利用puttygen.exe \n \n 打開後會發現下圖視窗 \n \n 按下load \n 將剛才的鑰使開啟 \n 將 id_rsa 轉為 Putty 可以解讀的 .ppk 格式 \n \xa0選擇所使用的鑰使 \n \n 得下圖 \n \xa0 \n \xa0 \n 以私人的形式儲存鑰使 \n \n (4) \n 在github 的settings中找到SSH and GPD keys \n \n 新增鑰使 \n 將id_rsa.pub的內容 \n \n 複製到 \n \n 並且創建一把鑰使 \n (5) \n 修改啟動的 start.bat 加入下列設定 \n set GIT_SSH=%Disk%:\\putty\\plink.exe \n \n (6) \n home 下的 .ssh 目錄中多新增 config 並且內容如下 \n \xa0 \n # no proxy at home \n #ProxyCommand y:/PortableGit/mingw64/bin/connect.exe -H proxy.mde.nfu.edu.tw:3128 %h %p \n # set git_ssh=y:/putty/plink.exe with auth under putty github.com session setup \n ProxyCommand y:/putty/plink.exe github.com %h %p \n \xa0\xa0\xa0 \n Host github.com \n \xa0\xa0\xa0\xa0User git \n \xa0\xa0\xa0\xa0Port 22 \n \xa0\xa0\xa0\xa0Hostname github.com \n \xa0\xa0\xa0\xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0# for connect.exe need openssh key format \n \xa0\xa0\xa0\xa0#IdentityFile "y:\\home\\.ssh\\id_rsa_mdecourse" \n \xa0\xa0\xa0\xa0# for plink.exe need rsa key format but set under putty github.com session \n \xa0\xa0\xa0\xa0# plink.exe do not need the following setting \n \xa0\xa0\xa0\xa0#IdentityFile "y:\\home\\.ssh\\mdecourse_putty_private.ppk" \n \xa0\xa0\xa0 \n \xa0\xa0\xa0\xa0TCPKeepAlive yes \n \xa0\xa0\xa0\xa0IdentitiesOnly yes \n (7) \n cad2020 倉儲中 .git 目錄下的 config 檔案中的連線協定, 由 https 改為採 ssh 連線 \n \xa0 \n \xa0 \n \xa0 \n (8) \n \n 點擊putty.exe \n 設定代理主機 \n \n 建一個github.com並且save \n \xa0 \n 點擊proxy並設定 \n 設定代理主機(Proxy)\xa0(除非是IPV4 IPV6才要設定) \n \n 設定Auth \n 設定SSH的\xa0ppk private key (之前轉的APK) \n \n 並且按下open後，就可以透過近端的 .ppk private key 與 Github.com 上的 public key 對應, 無需輸入帳號密碼就可以進行 git push \n', 'tags': '', 'url': 'ssh製做.html'}, {'title': 'w013~w16', 'text': '', 'tags': '', 'url': 'w013~w16.html'}, {'title': 'wilk 3介紹', 'text': '\n', 'tags': '', 'url': 'wilk 3介紹.html'}, {'title': 'w17', 'text': '\xa0心得報告 \n 在學這堂課之前我是懵懵懂懂的狀態，我不曉的程式可以幹嘛，畫國旗放網站??? \n 但我在機電光喜歡上了打程式，即便全部不是我打得，因為只要我想要機器人做甚麼 \n 他就能做出相對應的動作，並且相當準確，但如果真要說協同產品設計才是讓我學習 \n 到如何打程式的地方，即便現在的我只會建設網站及使用SSH和一點點程式，只要我 \n 一不會我就問同學，同學不會我就問老師，在期中之後我找到了這堂課的意義， \n 謝謝你們還原意耐心地教我，這堂課雖然還沒跟上大家的腳步但我從現在開始我會 \n 急起直追，即便我畫圖不是很強，當大家在畫圖的時候，我也會一並學習。 \n', 'tags': '', 'url': 'w17.html'}, {'title': 'w18', 'text': '程式照片 \n \n \n \n', 'tags': '', 'url': 'w18.html'}, {'title': '小組會議', 'text': '第一次小組會議 \n https://drive.google.com/file/d/1ImOlILF15zNOJfKdAHRCsrRUK2u1BckA/view?usp=sharing \n 第二次小組會議 \n https://drive.google.com/file/d/1nqLyJLpkkIqFdCZgYBnRh-pdxt0IQtPA/view?usp=sharing \n 第三次小組會議 \n https://drive.google.com/file/d/1jSA8myvSp0cV-gkRolvmpyJCAi11-swf/view?usp=sharing \n 第四次小組會議 \n https://drive.google.com/file/d/1bPfvABcghZsmOonZ8vont4ImDb4lkxfM/view?usp=sharing \n 第五次小組會議 \n https://drive.google.com/file/d/1hWnUO6yImZ1uqQD4cI6arG_3tIPZQzto/view?usp=sharing \n', 'tags': '', 'url': '小組會議.html'}]};