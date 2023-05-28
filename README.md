對不起，我在將內容轉換為 Markdown 格式時發生了錯誤。以下是修正後的 Markdown 格式：

```markdown
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

### 3. 設定環境變數

在專案根目錄中建立一個 `.env` 檔案，並根據您的需要設定以下環境變數：

```
SESSION_SECRET=your_session_secret
```

### 4. 建立資料庫

確保您已在本地環境中安裝 MySQL 資料庫，並在 `.env` 檔案中設定相關資料庫連線設定。

執行資料庫遷移和種子資料建立的指令：

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### 5. 啟動應用程式

執行下列指令啟動應用程式：

```
npm start
```

應用程式將在本地主機的預設埠號（通常為 3000）上運行。您可以在瀏覽器中輸入 `http://localhost:3000` 訪問應用程式。

### 6. 執行測試

執行下列指令運行測試：

```
npm test
```

測試將會自動執行並報告結果。
```

非常抱歉之前的格式有誤，這次已經修正正確的 Markdown 格式，感謝您的指正！