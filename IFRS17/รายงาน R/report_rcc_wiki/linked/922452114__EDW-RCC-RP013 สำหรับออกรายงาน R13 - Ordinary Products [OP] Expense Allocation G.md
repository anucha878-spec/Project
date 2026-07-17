# EDW-RCC-RP013 สำหรับออกรายงาน R13 - Ordinary Products [OP] Expense Allocation GMM

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=922452114
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
ตัวอย่างรายงาน R13 [https://docs.google.com/spreadsheets/d/1rNnIRZX6Cn087zhmZO3MHgmeVV5gqz7M/edit#gid=1305751220](https://docs.google.com/spreadsheets/d/1rNnIRZX6Cn087zhmZO3MHgmeVV5gqz7M/edit#gid=1305751220)

Process การออกรายงานมีเงื่อนไขดังนี้

1. สถานะดำเนินการจะต้องเป็น "ประมวลผลสำเร็จ" หรือ "ยืนยันข้อมูล" เท่านั้นจากหน้าจอ [EDW-RCC-SD001 หน้าจอประมวลผลข้อมูล และยืนยันการออกรายงาน R](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=930152455)
2. ระบบจะนำช่วงวันที่ประมวลผล ปี และเดือนที่ได้รับจากหน้าจอ ไปหาที่ตาราง [tx_rcc_landing_r13_hd](http://wiki.thaisamut.co.th/display/RDSADW/tx_rcc_landing_r13_hd)
3. ทำการ Generate ข้อมูลไปยัง Excel file เพื่อ export ให้ผู้ใช้ โดยตั้งชื่อไฟล์เป็น **R13ACC_YYYYMM_to_YYYYMM.xls** ตามรายละเอียดดังนี้ใช้ข้อมูลจากระบบ Expense Allcation ที่จัดเก็บตาม [Process การประมวลผลข้อมูลออกรายงาน R13](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=937132638)
4. [R13 - Ordinary Products [OP] Expense Allocation GMM](https://docs.google.com/spreadsheets/d/1F1AZ2ve5F7V_f49HoGQK9Pc6FBwf1V5c/edit#gid=949642831)