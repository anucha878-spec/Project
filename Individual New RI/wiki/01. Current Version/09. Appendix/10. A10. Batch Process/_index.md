# A10. Batch Process

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/A10.+Batch+Process  
> **Page ID:** 1117946447  
> **Path:** Home / Current Version / 09. Appendix / A10. Batch Process

---

**Data Sheet**

[https://docs.google.com/spreadsheets/d/1c6OhFMDl9XHfilA_gwk6KTC6qLCy-G_RMxqHT8MepYI/edit#gid=1158902880](https://docs.google.com/spreadsheets/d/1c6OhFMDl9XHfilA_gwk6KTC6qLCy-G_RMxqHT8MepYI/edit#gid=1158902880)

| **ms_process_id** | **process_code** | **process_name** | **type** | **created_date** | **created_by** | **seq_landing** | **status_landing** | **** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | RI_AUTO_01 | นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 1 | A | 22.00 น. สิ้นเดือน |
| 3 | RI_AUTO_02 | นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 2 | A | 22.00 น. สิ้นเดือน |
| 5 | RI_AUTO_04 | นำเข้าข้อมูลกรมธรรม์ UL (New,Renew) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 3 | A | 22.00 น. สิ้นเดือน |
| 9 | RI_AUTO_08 | นำเข้าข้อมูลกรมธรรม์ PA (Claim) | A | 2025-06-13 20:01:08 | SYSTEM | 5 | A | 22.00 น. สิ้นเดือน |
| 10 | RI_AUTO_09 | นำเข้าข้อมูลกรมธรรม์ UL (Claim) | A | 2025-06-13 20:01:08 | SYSTEM | 6 | A | 22.00 น. สิ้นเดือน |
| 14 | RI_AUTO_10 | นำเข้าข้อมูล Rate ทุนประกัน สามัญ | A | 2025-06-13 20:01:08 | SYSTEM | 7 | A | 22.00 น. สิ้นเดือน |
| 17 | RI_AUTO_13 | นำเข้าข้อมูลกรมธรรม์ส่งประกันต่อ CB Rider (Claim) | A | 2025-06-13 20:01:08 | SYSTEM | 9 | A | 22.00 น. สิ้นเดือน |
| 21 | RI_AUTO_17 | นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 10 | A | 22.00 น. สิ้นเดือน |
| 18 | RI_AUTO_14 | นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS | A | 2025-06-13 20:01:08 | SYSTEM | 11 | A | 22.00 น. สิ้นเดือน |
| 15 | RI_AUTO_11 | นำเข้าข้อมูล Rate Benefit Claim สามัญ | A | 2025-06-13 20:01:08 | SYSTEM | 13 | A | 22.00 น. สิ้นเดือน |
| 51 | RI_AUTO_20 | นำเข้าข้อมูล Rate Claim Benefit Rider สามัญ | A | 2025-08-29 20:26:13 | SYSTEM | 14 | A | 22.00 น. สิ้นเดือน |
| 56 | RI_AUTO_23 | นำเข้าข้อมูลวันสิ้นสุดสัญญาเพิ่มเติม อุตสาหกรรม | A | 2025-09-27 19:59:36 | SYSTEM | 18 | A | 22.00 น. สิ้นเดือน |
| 4 | RI_AUTO_03 | นำเข้าข้อมูลกรมธรรม์ PA (New,Renew) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 1 | B | 02.30 น. วันที่ 1 |
| 7 | RI_AUTO_06 | นำเข้าข้อมูลกรมธรรม์สามัญ (Master Claim) | A | 2025-06-13 20:01:08 | SYSTEM | 2 | B | 02.30 น. วันที่ 1 |
| 8 | RI_AUTO_07 | นำเข้าข้อมูลกรมธรรม์สามัญ (Health Claim) | A | 2025-06-13 20:01:08 | SYSTEM | 3 | B | 02.30 น. วันที่ 1 |
| 6 | RI_AUTO_05 | นำเข้าข้อมูลกรมธรรม์อุตสาหกรรม (New,Renew) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 4 | B | 02.30 น. วันที่ 1 |
| 19 | RI_AUTO_15 | นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Outforce) Auto | A | 2025-06-13 20:01:08 | SYSTEM | 5 | B | 02.30 น. วันที่ 1 |
| 1 | RI_AUTO_00 | นำเข้าข้อมูล Base Plan Code และ Rider Code ทุกประเภท | A | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 26 | RI_AUTO_01_OUT | นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto (Outforce) * ต้องรัน RI_AUTO_01 ก่อนเสมอ | A | 2025-06-13 20:01:33 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 27 | RI_AUTO_02_INI | นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) ตั้งฐาน | A | 2025-06-13 20:24:40 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 28 | RI_AUTO_15_INI | นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Alteration,Outforce) (ตั้งฐาน) | A | 2025-06-13 20:24:40 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 29 | RI_AUTO_17_INI | นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) Auto (ตั้งฐาน) | A | 2025-06-13 20:24:40 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 22 | RI_AUTO_18 | ประมวลผล Estimate (Auto) | A | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 32 | RI_AUTO_NAR | ประมวลผล Monthly NAR | A | 2025-06-28 20:13:29 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 33 | RI_AUTO_PO_STATUS | ประมวลผล Mark Policy Status | A | 2025-06-28 20:13:29 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 24 | RI_EDW_01 | ส่งข้อมูล Estimate เข้าระบบ EDW | M | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 25 | RI_EDW_02 | ส่งข้อมูล Actual เข้าระบบ EDW | M | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 34 | RI_EDW_03 | ส่งข้อมูล Monthly NAR เข้าระบบ EDW | A | 2025-06-28 20:13:29 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 35 | RI_EDW_04 | ส่งข้อมูล Mark Policy Status เข้าระบบ EDW | A | 2025-06-28 20:13:29 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 11 | RI_FAC_00 | ค้นหากรมธรรม์ส่งประกันต่อสามัญ (New&Renew) Facultative | F | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 12 | RI_FAC_01 | ค้นหากรมธรรม์ส่งประกันต่อ PA (New&Renew) Facultative | F | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 13 | RI_FAC_02 | ค้นหากรมธรรม์ส่งประกันต่อ UL (New,Renew) Facultative | F | 2025-06-13 20:01:08 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 30 | RI_HOUSE_KEEPING | ประมวลผล House Keeping | A | 2025-06-13 20:24:43 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 31 | RI_HOUSE_KEEPING_5Y | ประมวลผล House Keeping ที่เกิน 5 ปี | A | 2025-06-13 20:24:43 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 36 | RI_TX_RESERVE_THREAD | ข้อมูล TX_RESERVE_THREAD | A | 2025-06-28 20:13:30 | SYSTEM | 0 | I | ไม่ทำ Auto |
| 23 | RI_AUTO_19 | นำเข้าข้อมูล ค่าการประกันภัย (Cost of Insurance) UL | A | 2025-06-13 20:01:08 | SYSTEM | 12 | I | ไม่ทำ Auto |
| 52 | RI_AUTO_21 | นำเข้าข้อมูลกรมธรรม์ที่เข้าเงื่อนไข Copayment | M | 2025-09-27 19:59:33 | SYSTEM | 14 | I | ไม่ทำ Auto |
| 53 | RI_AUTO_21_R1 | นำเข้าข้อมูลกรมธรรม์ที่เข้าเงื่อนไข Copayment (Backup) | M | 2025-09-27 19:59:33 | SYSTEM | 15 | I | ไม่ทำ Auto |
| 54 | RI_AUTO_22 | นำเข้าข้อมูลสินไหมจากระบบ CMS | M | 2025-09-27 19:59:33 | SYSTEM | 16 | I | ไม่ทำ Auto |
| 55 | RI_AUTO_22_R1 | นำเข้าข้อมูลสินไหมจากระบบ CMS (Backup) | M | 2025-09-27 19:59:33 | SYSTEM | 17 | I | ไม่ทำ Auto |
| 37 | RI_AUTO_01_R1 | นำเข้าข้อมูลกรมธรรม์สามัญ (New,Renew) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 1 | R | 08.00 น. สิ้นเดือน |
| 38 | RI_AUTO_02_R1 | นำเข้าข้อมูลกรมธรรม์สามัญ (Alteration) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 2 | R | 08.00 น. สิ้นเดือน |
| 47 | RI_AUTO_04_R1 | นำเข้าข้อมูลกรมธรรม์ UL (New,Renew) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 3 | R | 08.00 น. สิ้นเดือน |
| 41 | RI_AUTO_06_R1 | นำเข้าข้อมูลกรมธรรม์สามัญ (Master Claim) (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 4 | R | 08.00 น. สิ้นเดือน |
| 42 | RI_AUTO_07_R1 | นำเข้าข้อมูลกรมธรรม์สามัญ (Health Claim) (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 5 | R | 08.00 น. สิ้นเดือน |
| 40 | RI_AUTO_05_R1 | นำเข้าข้อมูลกรมธรรม์อุตสาหกรรม (New,Renew) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 6 | R | 08.00 น. สิ้นเดือน |
| 43 | RI_AUTO_08_R1 | นำเข้าข้อมูลกรมธรรม์ PA (Claim) (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 7 | R | 08.00 น. สิ้นเดือน |
| 48 | RI_AUTO_09_R1 | นำเข้าข้อมูลกรมธรรม์ UL (Claim) (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 8 | R | 08.00 น. สิ้นเดือน |
| 46 | RI_AUTO_15_R1 | นำเข้ากรมธรรม์ส่งประกันต่ออุตสาหกรรม (Outforce) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 9 | R | 08.00 น. สิ้นเดือน |
| 44 | RI_AUTO_13_R1 | นำเข้าข้อมูลกรมธรรม์ส่งประกันต่อ CB Rider (Claim) (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 10 | R | 08.00 น. สิ้นเดือน |
| 49 | RI_AUTO_17_R1 | นำเข้ากรมธรรม์ส่งประกันต่อ UL (Alteration) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 11 | R | 08.00 น. สิ้นเดือน |
| 45 | RI_AUTO_14_R1 | นำเข้าข้อมูลค่าส่งสอบจากระบบ CMS (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 12 | R | 08.00 น. สิ้นเดือน |
| 50 | RI_AUTO_19_R1 | นำเข้าข้อมูล ค่าการประกันภัย (Cost of Insurance) UL (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 13 | R | 08.00 น. สิ้นเดือน |
| 39 | RI_AUTO_03_R1 | นำเข้าข้อมูลกรมธรรม์ PA (New,Renew) Auto (Backup) | A | 2025-07-30 20:05:48 | SYSTEM | 14 | R | 08.00 น. สิ้นเดือน |
