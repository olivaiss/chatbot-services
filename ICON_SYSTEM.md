# Icon System — Local SVGs (Project Folder)

## Source
ไอคอนทั้งหมดอยู่ใน `assets/images/icons/` ภายในโปรเจกต์นี้เท่านั้น — **ไม่มีการ fetch จากโฟลเดอร์นอก**

## ไฟล์ที่มี
```
assets/images/icons/
├── logo.svg               ← โลโก้ NextGenBot (auto-traced from PNG)
├── apple.svg              ← Social / Login
├── bullhorn.svg           ← Campaign Manager, Marketing Campaigns
├── chart-bar.svg          ← Analytics & Insights
├── chart-line-up.svg      ← Analytics Dashboard
├── code.svg               ← API & Webhooks
├── comment-dots.svg       ← Unified Inbox
├── comment-sms.svg        ← Multi-Channel Chat
├── envelope.svg           ← Email input (Login/Register)
├── eye.svg                ← Show/Hide password
├── file-lines.svg         ← Terms / Documents
├── gear.svg               ← Settings
├── globe.svg              ← Language selector, Website pill
├── google.svg             ← Social Login
├── headset.svg            ← Contact / Support
├── line.svg               ← 🆕 LINE brand icon (hero pill)
├── lock.svg               ← Password input
├── messenger.svg          ← 🆕 Messenger brand icon (hero pill)
├── message-bot.svg        ← AI Chatbot
├── moon.svg               ← Dark mode icon (mobile menu)
├── right-to-bracket.svg   ← Login button
├── robot.svg              ← AI Automation, Features badge
├── shield-check.svg       ← Enterprise Security
├── star.svg               ← Testimonials
├── sun.svg                ← Light mode icon (mobile menu)
├── telegram.svg           ← 🆕 Telegram brand icon (hero pill)
├── tiktok.svg             ← 🆕 TikTok brand icon (hero pill)
├── user.svg               ← User icon
├── user-plus.svg          ← Register button
├── users.svg              ← Contact & CRM
├── users-gear.svg         ← Contact Management
└── whatsapp.svg           ← 🆕 WhatsApp brand icon (hero pill)
```

## Rules
1. **SVG inline เท่านั้น** — inject เป็น inline SVG ผ่าน JavaScript
2. **fill=currentColor** — JS จะใส่ `fill="currentColor"` ให้อัตโนมัติ ปรับสีตาม theme
3. **class="icon-svg"** — JS ใส่ class ให้อัตโนมัติเพื่อ sizing
4. **ห้ามใช้ img src หรือ background-image** ไปที่ SVG (เพราะปรับสีตามไม่ได้)
5. **ห้าม fetch จาก D:\All Icons หรือโฟลเดอร์นอกโปรเจกต์**
6. ถ้าต้องการเพิ่ม icon ใหม่:
   - copy จาก `D:\All Icons\{weight}\{name}.svg` (brand → `brands/`, ทั่วไป → `regular/`)
   - วางใน `assets/images/icons/`
   - รัน rebuild icons.js (หรือ copy ไปใน `assets/data/icons.js` ด้วย)

## How It Works
ใน HTML ให้ใช้ `data-icon` attribute:

```html
<!-- ✅ ใช้ data-icon -->
<span class="card-icon" data-icon="line"></span>
```

JavaScript ใน `assets/data/icons.js`:
1. อ่าน `data-icon` attribute
2. ค้นหา SVG ที่ embedded ใน ICONS_DATA object
3. inject เป็น inline SVG
4. ใส่ `fill="currentColor"` และ `class="icon-svg"`

## Icon Mapping

| data-icon | ใช้ที่ |
|-----------|-------|
| `comment-dots` | Unified Inbox |
| `comment-sms` | Multi-Channel Chat |
| `message-bot` | AI Chatbot |
| `bullhorn` | Campaign Manager, Marketing Campaigns |
| `chart-line-up` | Analytics Dashboard |
| `chart-bar` | Analytics & Insights |
| `users-gear` | Contact Management |
| `code` | API & Webhooks |
| `robot` | AI Automation |
| `shield-check` | Enterprise Security |
| `users` | Contact & CRM |
| `globe` | Language selector, Website pill |
| `gear` | Settings |
| `headset` | ติดต่อ |
| `star` | Testimonials |
| `envelope` | Email input |
| `lock` | Password input |
| `eye` | Show/Hide password |
| `user` | User icon |
| `user-plus` | Register button |
| `right-to-bracket` | Login button |
| `file-lines` | Terms & Privacy |
| `sun` / `moon` | Theme toggle |
| `apple` / `google` | Social sign-in |
| **`line`** | **LINE brand** |
| **`messenger`** | **Messenger brand** |
| **`whatsapp`** | **WhatsApp brand** |
| **`telegram`** | **Telegram brand** |
| **`tiktok`** | **TikTok brand** |

## Logo
`logo.svg` ใช้ใน navbar brand:
```html
<a href="index.html" class="navbar-brand">
  <img src="assets/images/icons/logo.svg" alt="NextGenBot" class="logo-icon">
  NextGenBot
</a>
```
- Light mode: ดำปกติ
- Dark mode: `filter: invert(1)` → เปลี่ยนเป็นสีขาว
