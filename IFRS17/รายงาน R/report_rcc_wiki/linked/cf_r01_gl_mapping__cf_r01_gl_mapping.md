# cf_r01_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r01_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r01_gl_mapping-TOC) ] [ [Convention](#cf_r01_gl_mapping-Convention) ] [ [Table : cf_r01_gl_mapping](#cf_r01_gl_mapping-Table:cf_r01_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r01_gl_mapping

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | gl_mapping_id | PK | numeric | 8 | | Not null | | | | | |
| 2 | account_code | | varchar | 20 | | Not null | | | | | |
| 3 | model_type | | varchar | 50 | | Not null | | | | | |
| 4 | model_table | | varchar | 50 | | Not null | | | | | |
| 5 | amount_type | | varchar | 50 | | | | | | | |
| 6 | begin_date | | date | | | Not null | | | | | |
| 7 | expire_date | | date | | | | | | | | |
| 8 | created_date | | Timestamp | | | Not null | | | | | |
| 9 | created_by | | varchar | 50 | | Not null | | | | | |
| 10 | updated_date | | Timestamp | | | | | | | | |
| 11 | updated_by | | varchar | 50 | | | | | | | |
| 12 | gl_type | | varchar | 10 | | | GL Type ของ Account code ที่เป็นบวก | | | | |
| 13 | rider_flag | | boolean | | | | | | | | |
| 14 | event_code | | varchar | 10 | | | | | | | |

ตัวอย่างข้อมูล

| gl_mapping_id | account_code | model_type | model_table | amount_type | begin_date | expire_date | created_date | created_by | updated_date | updated_by | gl_type | rider_flag | event_code |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 40511100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 2 | 40511200 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 3 | 40511300 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 4 | 40512100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 5 | 40512200 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 6 | 40512300 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 7 | 40513100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 8 | 40513200 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 9 | 50521111 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 10 | 50521112 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 11 | 50521121 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 12 | 50521122 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 13 | 50522111 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 14 | 50522112 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 15 | 50522113 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 16 | 50522121 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 17 | 50522122 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 18 | 50522131 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 19 | 50522132 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | |
| 20 | 42022111 | INVESTMENT | tx_adw_investment_detail | | 2021-12-23 | 2999-12-31 | 2022-11-30 19:17:00 | SYSTEM | 2022-11-30 19:17:00 | SYSTEM | CR | FALSE | |
| 21 | 40512100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0006 |
| 22 | 40513100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0006 |
| 23 | 40512100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0070 |
| 24 | 40513100 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0070 |
| 25 | 40512200 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0070 |
| 26 | 40513200 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0070 |
| 27 | 50522121 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0114 |
| 28 | 50522131 | PREMIUM | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:02:11 | SYSTEM | 2024-11-06 21:02:11 | SYSTEM | CR | TRUE | AC-0114 |
| 29 | 50522121 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0116 |
| 30 | 50522131 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0116 |
| 31 | 50522122 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0116 |
| 32 | 50522132 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0116 |
| 33 | 50522121 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0121 |
| 34 | 50522131 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0121 |
| 35 | 50522122 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0121 |
| 36 | 50522132 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0121 |
| 37 | 40512100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0150 |
| 38 | 40513100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0150 |
| 39 | 40512200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0150 |
| 40 | 40513200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0150 |
| 41 | 40512100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0165 |
| 42 | 40513100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0165 |
| 43 | 40512200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0165 |
| 44 | 40513200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0165 |
| 45 | 50522111 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 46 | 50522112 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 47 | 50522121 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 48 | 50522131 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 49 | 50522122 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 50 | 50522132 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0171 |
| 51 | 40512100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0110 |
| 52 | 40513100 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0110 |
| 53 | 40512200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0110 |
| 54 | 40513200 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0110 |
| 55 | 50522121 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0112 |
| 56 | 50522131 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0112 |
| 57 | 50522122 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0112 |
| 58 | 50522132 | Premium | tx_adw_premium_detail | | 2021-12-23 | 2999-12-31 | 2024-11-06 21:33:21 | SYSTEM | 2024-11-06 21:33:21 | SYSTEM | CR | TRUE | AC-0112 |