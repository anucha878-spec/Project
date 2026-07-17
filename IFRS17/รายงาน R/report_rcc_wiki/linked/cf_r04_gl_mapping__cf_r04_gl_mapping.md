# cf_r04_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r04_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r04_gl_mapping-TOC) ] [ [Convention](#cf_r04_gl_mapping-Convention) ] [ [Table : cf_r04_gl_mapping](#cf_r04_gl_mapping-Table:cf_r04_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r04_gl_mapping

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
| 1 | 50543010 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 2 | 50547005 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 3 | 11011100 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 4 | 11012100 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 5 | 40511200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 6 | 40512200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 7 | 40513200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 8 | 42022110 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 9 | 42022111 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 10 | 42022112 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 11 | 42022113 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 12 | 42022114 | INVESTMENT | tx_adw_investment_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 13 | 50541005 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 14 | 50541010 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 15 | 50541015 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 16 | 50543005 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 17 | 50543006 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 18 | 50547006 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 19 | 50549005 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 20 | 50549015 | BENEFIT | tx_adw_benefit_detail | all | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 21 | 53000000 | BENEFIT | tx_adw_benefit_detail | [NULL] | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 22 | 43040026 | OTHER_INCOME | tx_adw_other_income_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | DR | FALSE | [NULL] |
| 23 | 40511100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 24 | 40511300 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 25 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 26 | 40512300 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 27 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR | FALSE | [NULL] |
| 28 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0006 |
| 29 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0006 |
| 30 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0070 |
| 31 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0070 |
| 32 | 40512200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0070 |
| 33 | 40513200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-08-13 16:05:08 | SYSTEM | 2024-08-13 16:05:08 | SYSTEM | CR | TRUE | AC-0070 |
| 34 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0150 |
| 35 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0150 |
| 36 | 40512200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0150 |
| 37 | 40513200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0150 |
| 38 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0165 |
| 39 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0165 |
| 40 | 40512200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0165 |
| 41 | 40513200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0165 |
| 42 | 40512100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0110 |
| 43 | 40513100 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0110 |
| 44 | 40512200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0110 |
| 45 | 40513200 | PREMIUM | tx_adw_premium_detail | benefit | 2021-12-23 | 2999-12-31 | 2024-10-10 15:34:32 | SYSTEM | 2024-10-10 15:34:32 | SYSTEM | CR | TRUE | AC-0110 |