# ms_mps_import_status

- url: http://wiki.thaisamut.co.th/display/RDSADW/ms_mps_import_status
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
```
TOC
```

[ [Convention](#ms_mps_import_status-Convention) ] [ [Table : ms_import_status](#ms_mps_import_status-Table:ms_import_status) ]

## Convention

Yearly Driver

Description: ข้อมูลสถานะการนำเข้าข้อมูล master.

## Table : ms_import_status

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | ms_import_status_id | PK | numeric | 4 | | not null | รหัสของตาราง | | | | 1 |
| 2 | import_status_name | | Varchar | 2050 | | not null | สถานะการนำเข้าข้อมูล | | | | กำลังดำเนินการ |
| 3 | create_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-02-10 17:47:03 |
| 4 | create_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | SYSTEM |
| 5 | update_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-02-10 17:47:03 |
| 6 | update_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | SYSTEM |
| 7 | begin_date | | Timestamp | | | | วันที่เริ่มใช้งาน Config | | | | 2022-02-09 0:00:00 |
| 8 | expire_date | | Timestamp | | | | วันที่สิ้นสุดการใช้งาน Config | | | | 2999-12-31 0:00:00 |

Data

| ms_import_status_id | import_status_name | create_date | create_by | update_date | update_by | begin_date | expire_date | Batch Result | หน้าจอ ธกส | หน้าจออุต | หน้าจอ Actual SA, เงินกู้ | นำเข้าไฟล์ Tagging |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | กำลังดำเนินการ | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน |
| 2 | นำเข้าสำเร็จ | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ไม่ใช้งาน | ไม่ใช้งาน | ไม่ใช้งาน | ไม่ใช้งาน | ใช้งาน |
| 3 | นำเข้าไม่สำเร็จ | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน |
| 4 | รูปแบบไฟล์ไม่ถูกต้อง | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ไม่ใช้งาน | ใช้งาน | ไม่ใช้งาน | ไม่ใช้งาน | ไม่ใช้งาน |
| 5 | รอยืนยันข้อมูล | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ไม่ใช้งาน | ใช้งาน | ใช้งาน | ไม่ใช้งาน | ไม่ใช้งาน |
| 6 | ยกเลิกข้อมูล | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน | ไม่ใช้งาน |
| 7 | ยืนยันนำเข้าข้อมูลสำเร็จ | 2022-02-10 17:47:03 | SYSTEM | 2022-02-10 17:47:03 | SYSTEM | 2022-02-09 0:00:00 | 2999-12-31 0:00:00 | ใช้งาน | ใช้งาน | ใช้งาน | ใช้งาน | ไม่ใช้งาน |
| ปรับเพิ่มเติมจาก Project : EDW 5.1 Lot 1 | | | | | | | | | | | | |
| 8 | รอนำเข้าข้อมูล | 2024-02-29 17:00:00 | SYSTEM | 2024-02-29 17:00:00 | SYSTEM | 2024-02-29 0:00:00 | 2999-12-31 0:00:00 | | | | | |