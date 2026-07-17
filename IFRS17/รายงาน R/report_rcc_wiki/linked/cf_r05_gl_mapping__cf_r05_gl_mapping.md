# cf_r05_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r05_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r05_gl_mapping-TOC) ] [ [Convention](#cf_r05_gl_mapping-Convention) ] [ [Table : cf_r05_gl_mapping](#cf_r05_gl_mapping-Table:cf_r05_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r05_gl_mapping

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | id | PK | numeric | 18 | | Not null | | | | | |
| 2 | ul_alteration_id | | numeric | 5 | | | | | | | |
| 3 | event_code | | varchar | 10 | | | | | | | |
| 4 | event_name | | varchar | 255 | | | | | | | |
| 5 | account_code | | varchar | 208 | | Not null | | | | | |
| 6 | account_name | | varchar | 255 | | | | | | | |
| 7 | amount_type | | varchar | 50 | | | | | | | |
| 8 | gl_type | | varchar | 102 | | | GL Type ของ Account code ที่เป็นบวก | | | | |
| 9 | created_date | | Timestamp | | | Not null | | | | | |
| 10 | created_by | | varchar | 50 | | Not null | | | | | |
| 11 | premium_type | | varchar | 50 | | | | | | | |
| 12 | begin_date | | date | | | Not null | | | | | |
| 13 | expire_date | | date | | | | | | | | |
| **UR 20260040 Improvement for OIC timeline (ปรับปรุง R- Report) [Task #82566](https://redmine.ochi.link/issues/82566)** | | | | | | | | | | | |
| 14 | r05_output_flag | | boolean | | | | true=ดึงลง tx_rcc_output_r05 (R05), false=เฉพาะ tx_rcc_reconcile_r05 (R05ACC only) | | | | |
| 15 | display_tagging_flag | | boolean | | | | true=แสดง disclosure_type และ plan_code ในรายงาน ACC, false=ไม่แสดง (บันทึกเป็น NULL) | | | | |

ตัวอย่างข้อมูล

| id | ul_alteration_id | event_code | event_name | account_code | account_name | amount_type | gl_type | created_date | created_by | premium_type | begin_date | expire_date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 45 | AC-0006 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 2 | 45 | AC-0006 | [NULL] | 40511300 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | SINGLE | 2022-06-01 | 2999-12-31 |
| 3 | 45 | AC-0006 | [NULL] | 40511400 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | TOPUP | 2022-06-01 | 2999-12-31 |
| 4 | 44 | AC-0070 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 5 | 44 | AC-0070 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 6 | 29 | AC-0082 | [NULL] | 40511400 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | TOPUP | 2022-06-01 | 2999-12-31 |
| 7 | 15 | AC-0114 | [NULL] | 50522111 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 8 | 15 | AC-0114 | [NULL] | 50522113 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 9 | 15 | AC-0114 | [NULL] | 50522116 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 10 | 15 | AC-0115 | [NULL] | 23570001 | [NULL] | totalpremium_amount,redemption_value | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 11 | 15 | AC-0115 | [NULL] | 23570002 | [NULL] | totalpremium_amount,redemption_value | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 12 | 16 | AC-0116 | [NULL] | 50522111 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 13 | 16 | AC-0116 | [NULL] | 50522112 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 15 | 16 | AC-0116 | [NULL] | 50522113 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 16 | 16 | AC-0116 | [NULL] | 50522116 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 17 | 16 | AC-0117 | [NULL] | 23570001 | [NULL] | totalpremium_amount,redemption_value | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 18 | 16 | AC-0117 | [NULL] | 23570002 | [NULL] | totalpremium_amount,redemption_value | CR | 2023-12-10 12:37:30 | SYSTEM | RETURN | 2022-06-01 | 2999-12-31 |
| 19 | 28 | AC-0150 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 20 | 28 | AC-0150 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 21 | 18 | AC-0165 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 22 | 18 | AC-0165 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 23 | 45 | AC-0040 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 24 | 45 | AC-0040 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | SINGLE | 2022-06-01 | 2999-12-31 |
| 25 | 45 | AC-0083 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | TOPUP | 2022-06-01 | 2999-12-31 |
| 26 | 44 | AC-0071 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 27 | 29 | AC-0083 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | TOPUP | 2022-06-01 | 2999-12-31 |
| 28 | 28 | AC-0151 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 29 | 18 | AC-0166 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 30 | 44 | AC-0165 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 31 | 44 | AC-0166 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | 2023-12-10 12:37:30 | SYSTEM | REGULAR | 2022-06-01 | 2999-12-31 |
| 32 | [NULL] | ML-0009 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 33 | [NULL] | ML-0009 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 34 | [NULL] | ML-0010 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 35 | [NULL] | ML-0010 | [NULL] | 40512100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 36 | [NULL] | ML-0010 | [NULL] | 40513100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | SINGLE | current_date | 2999-12-31 |
| 37 | [NULL] | ML-0010 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 38 | [NULL] | ML-0010 | [NULL] | 40512200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 39 | [NULL] | ML-0010 | [NULL] | 40513200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 40 | [NULL] | ML-0009 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 41 | [NULL] | ML-0009 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 42 | [NULL] | ML-0009 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 43 | [NULL] | ML-0010 | [NULL] | 40511100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 44 | [NULL] | ML-0010 | [NULL] | 40512100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 45 | [NULL] | ML-0010 | [NULL] | 40513100 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | SINGLE | current_date | 2999-12-31 |
| 46 | [NULL] | ML-0010 | [NULL] | 40511200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 47 | [NULL] | ML-0010 | [NULL] | 40512200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 48 | [NULL] | ML-0010 | [NULL] | 40513200 | [NULL] | totalpremium_amount,unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |
| 49 | [NULL] | ML-0010 | [NULL] | 40511500 | [NULL] | unallocated_premium | CR | current_timestamp | SYSTEM | REGULAR | current_date | 2999-12-31 |