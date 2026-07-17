# tx_mps_rider_copay

- url: http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_rider_copay
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#tx_mps_rider_copay-TOC) ] [ [Convention](#tx_mps_rider_copay-Convention) ] [ [Table : tx_mps_rider_copay](#tx_mps_rider_copay-Table:tx_mps_rider_copay) ]

## Convention

Description: ข้อมูลจาก [WS_EDW3_33 ดึงข้อมูลกรมธรรม์ที่มี RiderCopay](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1313145662)

## Table : tx_mps_rider_copay

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Description** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | mps_copay_id | PK | Numeric | 8 | | not null | รหัสของตาราง | | | | 1 |
| 2 | mps_base_hd_id | FK | Numeric | 8 | | not null | [tx_mps_base_header](http://wiki.thaisamut.co.th/display/RDSADW/tx_mps_base_header).mps_base_hd_id | | | | 1 |
| | period | | Varchar | 6 | | not null | รอบการประมวลผลformat YYYYMM | YYYY = ปี 4 Digits (ค.ศ.)MM = เดือน 2 Digits | | | 202207 |
| 3 | policy_number | | Varchar | 50 | | | เลขกรมธรรม์ | | | | 9008529 |
| 4 | rider_plan_code | | Varchar | 2 | | | รหัสแบบประกัน สัญญาเพิ่มเติม | | | | 77 |
| 5 | policy_year | | Numeric | 2 | | | ปีกรมธรรม์ | | | | 1 |
| 6 | rider_copay_client_claim_paid | | Numeric | 5 | 2 | | % copayment | | | | 30 |
| 7 | copay_effective_date | | Date | | | | วันที่มีผล ตามปีกรมธรรม์ | | | | 25650501 |
| 8 | copay_end_date | | Date | | | | วันที่สิ้นสุด ตามปีกรมธรรม์ | | | | 25660430 |
| 9 | copay_create_dae | | Date | | | | Create date ของรายการ copay | | | | 25650401 |
| 10 | copay_update_dae | | Date | | | | Update date ของรายการ copay | | | | 0 |
| 11 | created_date | | Timestamp | | | not null | วันที่บันทึกรายการ | | | | 2022-09-09 19:36:45 |
| 12 | created_by | | Varchar | 50 | | not null | ผู้บันทึกรายการ | | | | boss |
| 13 | updated_date | | Timestamp | | | | วันที่อัพเดทรายการ | | | | 2022-09-09 19:36:45 |
| 14 | updated_by | | Varchar | 50 | | | ผู้อัพเดทรายการ | | | | boss |