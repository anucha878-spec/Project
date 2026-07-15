# 08-0 [AUTO] การประมวลผล Retention

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1116471529  
> **Page ID:** 1116471529  
> **Path:** Home / Current Version / 09. Appendix / A18. MAIN Process / 08-0 [AUTO] การประมวลผล Retention

---

การประมวลผล SR
การประมวลผล SR มีขั้นตอนดังนี้

การดึงข้อมูลรายละเอียดกรมธรรม์
| ประเภทการคำนวณ | ข้อมูล | Description | ที่มา |
| --- | --- | --- | --- |
| Auto Base | Plan Code | รหัสแบบประกัน Base | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw)*****หมายเหตุ**: กรณี PA จะเป็น Base แต่ Coverage Type เป็น ADD |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Issue Age | อายุของผู้เอาประกัน ณ วันที่ออกกรมธรรม์ |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {NAR_LIFE} | NAR Life | [05 การประมวลผล Net Amount at Risk](http://wiki.thaisamut.co.th/x/5wCMQg) |
|  | {PREVIOUS_NAR_LIFE} | Previous NAR Life | [06 การประมวลผล Previous NAR](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  | {TOTAL_NAR_LIFE} | Total NAR Life | [07 การประมวลผล Total NAR](http://wiki.thaisamut.co.th/x/jAGMQg) |
| Auto Rider | Rider Code | รหัสแบบประกัน Rider | [00-0 [NEW-RENEW] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/joCWQg) [00-1 [ALTER] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/-ACMQg)[00-2 [CLAIM] [Auto] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/OgBtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Issue Age Rider | อายุของผู้เอาประกัน ณ วันที่ออกประกันเพิ่มเติม |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Net Amount at Risk {NAR_ADD}NAR ADD{NAR_TPD}NAR TPD{NAR_TTD}NAR TTD{NAR_RIDER}NAR RIDER{NAR_MURDER}NAR MURDER{NAR_MOTORCYCLE}NAR MOTORCYCLE{NAR_PUBLIC}NAR PUBLIC{NAR_HOLIDAY}NAR HOIDAY | [05 การประมวลผล Net Amount at Risk](http://wiki.thaisamut.co.th/x/5wCMQg) |
|  |  |
| {NAR_ADD} | NAR ADD |
| {NAR_TPD} | NAR TPD |
| {NAR_TTD} | NAR TTD |
| {NAR_RIDER} | NAR RIDER |
| {NAR_MURDER} | NAR MURDER |
| {NAR_MOTORCYCLE} | NAR MOTORCYCLE |
| {NAR_PUBLIC} | NAR PUBLIC |
| {NAR_HOLIDAY} | NAR HOIDAY |
|  | Previous NAR {PREVIOUS_NAR_ADD}Previous NAR ADD{PREVIOUS_NAR_TPD}Previous NAR TPD{PREVIOUS_NAR_TTD}Previous NAR TTD{PREVIOUS_NAR_RIDER}Previous NAR RIDER{ACTUAL_SA_MURDER}Previous NAR MURDER{ACTUAL_SA_MOTORCYCLE}Previous NAR MOTORCYCLE{ACTUAL_SA_PUBLIC}Previous NAR PUBLIC{ACTUAL_SA_HOIDAY}Previous NAR HOIDAY | [06 การประมวลผล Previous NAR](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  |  |
| {PREVIOUS_NAR_ADD} | Previous NAR ADD |
| {PREVIOUS_NAR_TPD} | Previous NAR TPD |
| {PREVIOUS_NAR_TTD} | Previous NAR TTD |
| {PREVIOUS_NAR_RIDER} | Previous NAR RIDER |
| {ACTUAL_SA_MURDER} | Previous NAR MURDER |
| {ACTUAL_SA_MOTORCYCLE} | Previous NAR MOTORCYCLE |
| {ACTUAL_SA_PUBLIC} | Previous NAR PUBLIC |
| {ACTUAL_SA_HOIDAY} | Previous NAR HOIDAY |
|  | Total NAR {TOTAL_NAR_ADD}Total NAR ADD{TOTAL_NAR_TPD}Total NAR TPD{TOTAL_NAR_TTD}Total NAR TTD{TOTAL_NAR_RIDER}Total NAR RIDER{TOTAL_NAR_MURDER}Total NAR MURDER{TOTAL_NAR_MOTORCYCLE}Total NAR MOTORCYCLE{TOTAL_NAR_PUBLIC}Total NAR PUBLIC{TOTAL_NAR_HOLIDAY}Total NAR HOIDAY | [07 การประมวลผล Total NAR](http://wiki.thaisamut.co.th/x/jAGMQg) |
|  |  |
| {TOTAL_NAR_ADD} | Total NAR ADD |
| {TOTAL_NAR_TPD} | Total NAR TPD |
| {TOTAL_NAR_TTD} | Total NAR TTD |
| {TOTAL_NAR_RIDER} | Total NAR RIDER |
| {TOTAL_NAR_MURDER} | Total NAR MURDER |
| {TOTAL_NAR_MOTORCYCLE} | Total NAR MOTORCYCLE |
| {TOTAL_NAR_PUBLIC} | Total NAR PUBLIC |
| {TOTAL_NAR_HOLIDAY} | Total NAR HOIDAY |
| FAC Base | Plan Code | รหัสแบบประกัน Base | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Coverage Type | ประเภทความคุ้มครอง Base |
|  | Issue Age | อายุของผู้เอาประกัน ณ วันที่ออกกรมธรรม์ |
|  | Commencement Date | วันเริ่มสัญญา |
|  | {NAR_LIFE} | NAR Life | [05 การประมวลผล Net Amount at Risk](http://wiki.thaisamut.co.th/x/5wCMQg) |
|  | {PREVIOUS_NAR_LIFE} | Previous NAR Life | [06 การประมวลผล Previous NAR](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  | {TOTAL_NAR_LIFE} | Total NAR | [07 การประมวลผล Total NAR](http://wiki.thaisamut.co.th/x/jAGMQg) |
| FAC Rider | Rider Code | รหัสแบบประกัน Rider | [00-3 [NEW-RENEW] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PABtQw)[00-4 [ALTER] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/PgBtQw)[00-5 [CLAIM] [FAC] คัดเลือกกรมธรรม์ของแต่ละ Treaty](http://wiki.thaisamut.co.th/x/QABtQw) |
|  | Rider Code ADD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น ADD |
|  | Rider Code TPD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TPD |
|  | Rider Code TTD | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น TTD |
|  | Rider Code RIDER | รหัสแบบประกัน Rider ที่มีประเภทความคุ้มครองเป็น RIDER |
|  | Issue Age Rider | อายุของผู้เอาประกัน ณ วันที่ออกประกันเพิ่มเติม |
|  | Commencement Date Rider | วันเริ่มสัญญาประกันเพิ่มเติม |
|  | Net Amount at Risk {NAR_ADD}NAR ADD{NAR_TPD}NAR TPD{NAR_TTD}NAR TTD{NAR_RIDER}NAR RIDER{NAR_MURDER}NAR MURDER{NAR_MOTORCYCLE}NAR MOTORCYCLE{NAR_PUBLIC}NAR PUBLIC{NAR_HOLIDAY}NAR HOIDAY | [05 การประมวลผล Net Amount at Risk](http://wiki.thaisamut.co.th/x/5wCMQg) |
|  |  |
| {NAR_ADD} | NAR ADD |
| {NAR_TPD} | NAR TPD |
| {NAR_TTD} | NAR TTD |
| {NAR_RIDER} | NAR RIDER |
| {NAR_MURDER} | NAR MURDER |
| {NAR_MOTORCYCLE} | NAR MOTORCYCLE |
| {NAR_PUBLIC} | NAR PUBLIC |
| {NAR_HOLIDAY} | NAR HOIDAY |
|  | Previous NAR {PREVIOUS_NAR_ADD}Previous NAR ADD{PREVIOUS_NAR_TPD}Previous NAR TPD{PREVIOUS_NAR_TTD}Previous NAR TTD{PREVIOUS_NAR_RIDER}Previous NAR RIDER{ACTUAL_SA_MURDER}Previous NAR MURDER{ACTUAL_SA_MOTORCYCLE}Previous NAR MOTORCYCLE{ACTUAL_SA_PUBLIC}Previous NAR PUBLIC{ACTUAL_SA_HOIDAY}Previous NAR HOIDAY | [06 การประมวลผล Previous NAR](http://wiki.thaisamut.co.th/x/KIBwQw) |
|  |  |
| {PREVIOUS_NAR_ADD} | Previous NAR ADD |
| {PREVIOUS_NAR_TPD} | Previous NAR TPD |
| {PREVIOUS_NAR_TTD} | Previous NAR TTD |
| {PREVIOUS_NAR_RIDER} | Previous NAR RIDER |
| {ACTUAL_SA_MURDER} | Previous NAR MURDER |
| {ACTUAL_SA_MOTORCYCLE} | Previous NAR MOTORCYCLE |
| {ACTUAL_SA_PUBLIC} | Previous NAR PUBLIC |
| {ACTUAL_SA_HOIDAY} | Previous NAR HOIDAY |
|  | Total NAR {TOTAL_NAR_ADD}Total NAR ADD{TOTAL_NAR_TPD}Total NAR TPD{TOTAL_NAR_TTD}Total NAR TTD{TOTAL_NAR_RIDER}Total NAR RIDER{TOTAL_NAR_MURDER}Total NAR MURDER{TOTAL_NAR_MOTORCYCLE}Total NAR MOTORCYCLE{TOTAL_NAR_PUBLIC}Total NAR PUBLIC{TOTAL_NAR_HOLIDAY}Total NAR HOIDAY | [07 การประมวลผล Total NAR](http://wiki.thaisamut.co.th/x/jAGMQg) |
|  |  |
| {TOTAL_NAR_ADD} | Total NAR ADD |
| {TOTAL_NAR_TPD} | Total NAR TPD |
| {TOTAL_NAR_TTD} | Total NAR TTD |
| {TOTAL_NAR_RIDER} | Total NAR RIDER |
| {TOTAL_NAR_MURDER} | Total NAR MURDER |
| {TOTAL_NAR_MOTORCYCLE} | Total NAR MOTORCYCLE |
| {TOTAL_NAR_PUBLIC} | Total NAR PUBLIC |
| {TOTAL_NAR_HOLIDAY} | Total NAR HOIDAY |

1. คำนวณด้วยชุดข้อมูล Current_Policy_New, Current_Policy_Renew , Current_Policy_Renew_RI และ Previous_Policy
2. ดึงข้อมูลที่ใช้ในการคำนวณ
4. ในกรณีที่เป็น วิธีด้านล่าง การคำนวณค่า Retention และประมวลผลไปตามสูตรที่กำหนด แต่ให้เก็บค่า Retention ที่เหลือลงใน parameter เพื่อนำไปออก Report เท่านั้น (สำหรับผู้เอาประกันคนเดียวกันมีหลายกรมธรรม์ใน 1 Treaty)

1. Surplus > Standard / SubstandardSurplus > AmountSurplus > Age PeriodSurplus > Insurance PoliciesSurplus-QS > Percentage (Layer)QS-Surplus > Percentage (Layer)  เช่น ถ้า Retention ค่าเต็ม = 200,000 บาท กรมธรรม์ที่ 1 หักไป 20,000 : แปลว่ากรมธรรม์นี้จะยังไม่ออก Report และค่า Room Retention ที่เก็บจะ = 200,000 กรมธรรม์ที่ 2 หักไป 40,000 : แปลว่ากรมธรรม์นี้จะยังไม่ออก Report และค่า Room Retention ที่เก็บจะ = 180,000 กรมธรรม์ที่ 3 หักไป 180,000 เกินมา 40,000 : แปลว่ากรมธรรม์นี้จะออก Report และค่า Room Retention ที่เก็บจะ = 140,000

| ข้อมูล | ประเภทความคุ้มครอง |
| --- | --- |
| {ROOM_RETENTION_LIFE} | LIFE |
| {ROOM_RETENTION_ADD} | ADD |
| {ROOM_RETENTION_TPD} | TPD |
| {ROOM_RETENTION_TTD} | TTD |
| {ROOM_RETENTION_RIDER} | RIDER |
