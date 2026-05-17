# Google Sheet Backend Setup

## Step 1: Open your Google Sheet
Go to: https://docs.google.com/spreadsheets/d/10KT6uJlqzGeMqgG6BxQjCPtfxqSIYQPwuArQASGQrVY/edit

## Step 2: Add Headers to Row 1
In the first row, add these column headers:
| A | B | C | D | E | F | G | H | I | J | K | L |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Set | Score | Total | Percentage | Warnings | Time Taken | Section A | Section B | Section C | Section D | Section E |

## Step 3: Open Apps Script
- Click **Extensions** → **Apps Script**
- Delete any existing code
- Paste the code from `google_apps_script.js` file
- Click **Save** (💾)

## Step 4: Deploy as Web App
- Click **Deploy** → **New deployment**
- Click the gear icon ⚙️ → Select **Web app**
- Set **Execute as**: Me
- Set **Who has access**: Anyone
- Click **Deploy**
- **Authorize** when prompted (click Advanced → Go to Untitled project)
- **Copy the Web App URL** — it looks like: `https://script.google.com/macros/s/XXXXX/exec`

## Step 5: Update Quiz App
- Open `app.js`
- Find the line: `const GOOGLE_SHEET_URL = "YOUR_APPS_SCRIPT_URL_HERE";`
- Replace with your copied URL
- Save, commit, push, deploy to Vercel
