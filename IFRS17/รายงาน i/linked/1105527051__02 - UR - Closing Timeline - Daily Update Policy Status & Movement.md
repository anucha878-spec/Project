# 02 - UR - Closing Timeline - Daily Update Policy Status & Movement

- url: http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1105527051
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
**Golive รอบประมวลผล: 2024/06 **

## Objectives

เนื่องจากมีการปรับ Process Update สถานะกรมธรรม์สิ้นผลของอุตสาหกรรม จากเดิมระบบจะตัดสถานะกธ.สิ้นผลเดือนละ 1 ครั้ง โดยจะปรับใหม่ตัดสถานะสิ้นผลภายในวัน หรือภายในไม่เกิน 10 โมงเช้าของวันถัดไป

- ตัวอย่าง กธ.เกิด Transaction สิ้นผล ณ วันที่ 31/10/2566 กธ.จะถูกตัดสถานะภายใน 10 โมงเช้าของวันที่ 1/11/2566
- Process เดิมในระบบ MPS: มีหน้าจอนำเข้าข้อมูลกธ.ที่ถูกตัดสถานะกธ.สิ้นผลเดือนละ 1 ครั้ง
- Process ใหม่ในระบบ MPS: ปรับเป็น Scheduler โดยรัน ณ วันที่ 1 ของเดือน เนื่องจาก Transaction ณ วันที่สิ้นเดือน จะถูกปรับสถานะภายในวันที่ 1 ของเดือนถัดไป (เนื่องจาก Batch ณ วันที่สิ้นเดือน ไม่ครอบคลุม Transaction ที่เกิดในวันที่สิ้นเดือน)

## Process

| No | Tasks | jira |
| --- | --- | --- |
| 0 | เงื่อนไขที่ใช้ดึงข้อมูลกลุ่มกธ.ที่ถูกสถานะสิ้นผลในรอบเดือน | [ADW-10317](http://jira.thaisamut.co.th/browse/ADW-10317) - [UR][ClosingTimeline][AS400][MPS] - สอบถามเงื่อนไขที่ใช้ดึงข้อมูลกลุ่มกธ.ที่ถูกสถานะสิ้นผลในรอบเดือน (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 1 | ยกเลิกหน้าจอ manual ดึงข้อมูลสิ้นผล | [ADW-10285](http://jira.thaisamut.co.th/browse/ADW-10285) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 2 | เพิ่ม Batch Process ดึงข้อมูลสิ้นผลอุตสาหกรรม ณ วันที่ 1 ของเดือนโดยเพิ่ม Process update/insert ข้อมูลสิ้นผลจาก Batch วันที่ 1 เข้าตาราง Landing I01/I02 ind ของ Batch สิ้นเดือน โดยให้เพิ่ม Flag Landing ว่ารายการใดเป็น Insert/Update | [ADW-10300](http://jira.thaisamut.co.th/browse/ADW-10300) - [UR][Closing Timeline][IND][MPS] เพิ่ม Batch Process กรมธรรม์อุตสาหกรรมที่มีการปรับปรุงข้อมูลสิ้นผล (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 3 | เพิ่มตาราง Landing ทั้งกธ.หลัก และ Rider | [ADW-10277](http://jira.thaisamut.co.th/browse/ADW-10277) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 4 | เพิ่มรายการข้อมูลในหน้าจอ Batch Process เพื่อใช้ Manual Run | [ADW-10278](http://jira.thaisamut.co.th/browse/ADW-10278) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 5 | ปรับหน้าจอประมวลผล MPS เพิ่มรายการข้อมูลของ Batch Process | [ADW-10284](http://jira.thaisamut.co.th/browse/ADW-10284) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) [ADW-10283](http://jira.thaisamut.co.th/browse/ADW-10283) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) [ADW-10854](http://jira.thaisamut.co.th/browse/ADW-10854) - [UR][Closing Timeline][IND][MPS] ปรับหน้าจอ Batch Process (Manual) เพิ่มเติม (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 6 | ปรับ ESB เปลี่ยนเงื่อนไขการ where ข้อมูลด้วยวันที่เกิด transaction ทั้งกธ.หลัก และ Rider | [ADW-10796](http://jira.thaisamut.co.th/browse/ADW-10796) - [UR][Closing Timeline][IND][MPS] ปรับ ESB WS_EDW3_06 ดึงข้อมูลกรมธรรม์อุตสาหกรรม (ESB-4740) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) [ADW-10795](http://jira.thaisamut.co.th/browse/ADW-10795) - [UR][Closing Timeline][IND][MPS] ปรับ ESB WS_EDW3_20 ดึงข้อมูลกรมธรรม์ rider อุตสาหกรรม สำหรับข้อมูลกรมธรรม์อุตสาหกรรมที่มีการปรับสถานะ (ESB-4737) (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |
| 7 | ปรับ Email แจ้งผลข้อมูลสิ้นเดือน | [ADW-10287](http://jira.thaisamut.co.th/browse/ADW-10287) - [UR][Closing Timeline][IND][MPS] ปรับ Automail แจ้งสรุปจำนวนกรมธรรม์ Monthly Policy Status ประจำเดือน (![](http://jira.thaisamut.co.th/images/icons/statuses/resolved.png) Resolved) |

****