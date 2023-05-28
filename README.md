# Forum Express Grading

這是一個基於 Express 框架的論壇應用程式，提供使用者註冊、登入、發布文章、留言等功能。

## 如何啟動專案

以下是啟動專案所需的步驟：

### 1. 選取分支

請確保您已選取 `main` 分支進行操作。

### 2. 安裝套件

使用下列指令安裝專案所需的套件：

```
npm install
```

### 3. 建立資料庫

確保您已在本地環境中安裝 MySQL 資料庫，並在 `.env` 檔案中設定相關資料庫連線設定。

執行資料庫遷移和種子資料建立的指令：

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 4. 啟動應用程式

執行下列指令啟動應用程式：

```
npm run start
```

應用程式將在本地主機的預設埠號（通常為 3000）上運行。您可以在瀏覽器中輸入 `http://localhost:3000` 訪問應用程式。

### 5. 執行測試

執行下列指令運行測試：

```
npm run test
npx mocha tests/R01.test.js --exit
```
如果測試有誤，請單獨一隻測試，自行將R01改名成需要的測試檔
