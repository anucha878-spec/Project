# cf_r03_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r03_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r03_gl_mapping-TOC) ] [ [Convention](#cf_r03_gl_mapping-Convention) ] [ [Table : cf_r03_gl_mapping](#cf_r03_gl_mapping-Table:cf_r03_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r03_gl_mapping

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | id | PK | numeric | 8 | | Not null | | | | | |
| 2 | account_code | | varchar | 20 | | Not null | | | | | |
| 3 | model_type | | varchar | 50 | | Not null | | | | | |
| 4 | model_table | | varchar | 50 | | Not null | | | | | |
| 5 | amount_type | | varchar | 50 | | | | | | | |
| 6 | created_date | | Timestamp | | | Not null | | | | | |
| 7 | created_by | | varchar | 50 | | Not null | | | | | |
| 8 | updated_date | | Timestamp | | | | | | | | |
| 9 | updated_by | | varchar | 50 | | | | | | | |
| 10 | gl_type | | varchar | 10 | | | GL Type ของ Account code ที่เป็นบวก | | | | |
| 11 | rider_flag | | boolean | | | | | | | | |
| 12 | event_code | | varchar | 10 | | | | | | | |

ตัวอย่างข้อมูล

| id | account_code | model_type | model_table | amount_type | created_date | created_by | updated_date | updated_by | gl_type | rider_flag | event_code |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 50542105 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 2 | 50542106 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 3 | 50542107 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 4 | 50542110 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 5 | 50542115 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 6 | 50542120 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 7 | 50542121 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 8 | 50542125 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 9 | 50544110 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 10 | 50544111 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 11 | 50544210 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 12 | 50544211 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 13 | 50544212 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 14 | 50545005 | CLAIM | tx_adw_claim_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | DR | FALSE | [NULL] |
| 15 | 11011100 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 16 | 11012100 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 17 | 40511200 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 18 | 40512200 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 19 | 40513200 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 20 | 42022110 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 21 | 42022112 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 22 | 42022113 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 23 | 42022114 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 24 | 40511100 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 25 | 40511300 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 26 | 40512100 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 27 | 40512300 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 28 | 40513100 | PREMIUM | tx_adw_premium_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 29 | 42022111 | INVESTMENT | tx_adw_investment_detail | | 2023-02-25 13:42:37 | SYSTEM | [NULL] | [NULL] | CR | FALSE | [NULL] |
| 30 | 40512100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0006 |
| 31 | 40513100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0006 |
| 32 | 40512100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0070 |
| 33 | 40513100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0070 |
| 34 | 40512200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0070 |
| 35 | 40513200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-08-05 12:51:23 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0070 |
| 36 | 40512100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0150 |
| 37 | 40513100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0150 |
| 38 | 40512200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0150 |
| 39 | 40513200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0150 |
| 40 | 40512100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0165 |
| 41 | 40513100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0165 |
| 42 | 40512200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0165 |
| 43 | 40513200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0165 |
| 44 | 40512100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0110 |
| 45 | 40513100 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0110 |
| 46 | 40512200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0110 |
| 47 | 40513200 | PREMIUM | tx_adw_premium_detail | [NULL] | 2024-10-10 15:57:25 | SYSTEM | [NULL] | [NULL] | CR | TRUE | AC-0110 |