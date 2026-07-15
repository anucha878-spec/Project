# A19. Policy Status

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/A19.+Policy+Status  
> **Page ID:** 1105527269  
> **Path:** Home / Current Version / 09. Appendix / A19. Policy Status

---

| รูปแบบ | กรณี | กระบวนการ |
| --- | --- | --- |
| แบบ A | Alteration | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อเก็บผลเป็นค่าบวกประมวลผลด้วยค่าใหม่เก็บผลเป็นค่าลบเก็บผลประมวลผลใหม่ใน New Renew (ไม่ต้องออก Report)ถ้าตรงกับรอบ New Renew ไม่ต้องออก Report Alteration |
| แบบ B | Alteration | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อเก็บผลเป็นค่าบวกประมวลผลรอบอื่น ๆ หลังจากวันที่ Alteration เก็บผลเป็นค่าบวก |
| แบบ C | Alteration | ประมวลผลทุกรอบที่เคยนำส่งประกันต่อเก็บผลเป็นค่าบวก |
| แบบ D | Alteration | ตรวจสอบวันที่เริ่มต้นสัญญาวันที่ตรงกัน - ให้สร้างรายการให้ครบรอบตามรอบที่ขาดไปที่ Alteration และบันทึกเพิ่มที่ New Renew (ไม่ต้องออก Report)วันที่ไม่ตรงกัน - ไม่ต้องทำรายการ ระบบจะประมวลผลกรมธรรม์ที่ New Renew ใหม่ตามรอบใหม่ |
| แบบ E | Alteration | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อเก็บผลเป็นค่าบวกประมวลผลด้วยค่าใหม่เก็บผลเป็นค่าลบ BASEเก็บผลประมวลผลใหม่ใน New Renew (ไม่ต้องออก Report)ถ้าตรงกับรอบ New Renew ไม่ต้องออก Report Alterationประมวลผลรอบอื่น ๆ หลังจากวันที่ Alteration เก็บผลเป็นค่าบวก RIDER |
| แบบ F | Alteration | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อเก็บผลเป็นค่าบวก |
| แบบ G | Claim Status | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ RI Claim amountคำควณ RI Claim Expense |
| แบบ H | Claim Status | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ RI Claim Expense |
| แบบ I | Claim Status | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ Refund (Advance Premium)คำควณ RI Claim Expense |
| แบบ J | Claim Status | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ Refund (Premium ทุกรอบที่ส่ง)คำควณ RI Claim Expense |
| แบบ K | Claim Status | เคลมครบ 100%ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ Refund (Advance Premium)คำนวณ RI Claim amountคำควณ RI Claim Expense |
| แบบ L | Claim Status | ประมวลผลรายการในรอบเดียวกับที่ส่งประกันต่อคำนวณ RI Claim Exgratiaคำควณ RI Claim Expense |
