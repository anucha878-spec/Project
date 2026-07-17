# cf_r08_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r08_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r08_gl_mapping-TOC) ] [ [Convention](#cf_r08_gl_mapping-Convention) ] [ [Table : cf_r08_gl_mapping](#cf_r08_gl_mapping-Table:cf_r08_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r08_gl_mapping

| **No** | **ATTRIBUTE_NAME** | **KEY** | **DATA_TYPE** | **SIZE** | **DECIMAL** | **Not Null constraint** | **Comment** | **Business Rule** | **Default Value** | **Validation Rule** | **ตัวอย่างข้อมูล** |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | id | PK | numeric | 18 | | Not null | | | | | |
| 2 | ul_alteration_id | | numeric | 5 | | | | | | | |
| 3 | model_table | | varchar | 50 | | Not null | | | | | |
| 4 | event_code | | varchar | 10 | | | | | | | |
| 5 | event_name | | varchar | 255 | | | | | | | |
| 6 | account_code | | varchar | 208 | | Not null | | | | | |
| 7 | account_name | | varchar | 255 | | | | | | | |
| 8 | amount_type | | varchar | 50 | | | | | | | |
| 9 | gl_type | | varchar | 102 | | | GL Type ของ Account code ที่เป็นบวก | | | | |
| 10 | created_date | | Timestamp | | | Not null | | | | | |
| 11 | created_by | | varchar | 50 | | Not null | | | | | |

ตัวอย่างข้อมูล

| id | ul_alteration_id | model_table | event_code | event_name | account_code | account_name | amount_type | gl_type | created_date | created_by | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 37 | BENEFIT | AC-0158 | [NULL] | 53000000 | [NULL] | loyalty_bonus | DR | 2024-03-14 0:57:56 | system | |
| 2 | 38 | BENEFIT | AC-0158 | [NULL] | 53000000 | [NULL] | loyalty_bonus | DR | 2024-03-14 0:57:56 | system | |
| 3 | 36 | BENEFIT | AC-0173 | [NULL] | 23570001 | [NULL] | maturity_benefit | DR | 2024-03-14 0:57:56 | system | |
| 4 | 36 | BENEFIT | AC-0173 | [NULL] | 23570002 | [NULL] | maturity_benefit | DR | 2024-03-14 0:57:56 | system | |
| 5 | 31 | BENEFIT | AC-0121 | [NULL] | 23570001 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 6 | 31 | BENEFIT | AC-0121 | [NULL] | 23570002 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 7 | 14 | BENEFIT | AC-0171 | [NULL] | 23570001 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 8 | 14 | BENEFIT | AC-0171 | [NULL] | 23570002 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 9 | 24 | BENEFIT | AC-0172 | [NULL] | 23570001 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 10 | 24 | BENEFIT | AC-0172 | [NULL] | 23570002 | [NULL] | surrender_benefit | DR | 2024-03-14 0:57:56 | system | |
| 11 | 15 | OTHER_INCOME | AC-0115 | [NULL] | 43040026 | [NULL] | other | DR | 2024-03-14 0:57:56 | system | |
| 12 | 16 | OTHER_INCOME | AC-0117 | [NULL] | 43040026 | [NULL] | other | DR | 2024-03-14 0:57:56 | system | |
| 13 | 5 | OTHER_INCOME | AC-0216 | [NULL] | 43040026 | [NULL] | other | DR | 2024-03-14 0:57:56 | system | |
| 14 | 14 | BENEFIT | AC-0121 | [NULL] | 23570001 | [NULL] | surrender_benefit | DR | 2026-01-12 9:53:00 | system | |
| 15 | 37 | BENEFIT | AC-0228 | [NULL] | 53000000 | [NULL] | loyalty_bonus | DR | 2026-02-24 13:40:00 | system | *New* [UR20240325](https://docs.google.com/spreadsheets/d/1kyoiqGeONE5xkcokeZnR4LQ5ZoaATHFWjTusPk4rUsQ/edit?gid=416605898#gid=416605898)Added by akkrawat.le 24/02/2569 |
| 16 | 38 | BENEFIT | AC-0228 | [NULL] | 53000000 | [NULL] | loyalty_bonus | DR | 2026-02-24 13:40:00 | system | *New* [UR20240325](https://docs.google.com/spreadsheets/d/1kyoiqGeONE5xkcokeZnR4LQ5ZoaATHFWjTusPk4rUsQ/edit?gid=416605898#gid=416605898)Added by akkrawat.le 11/03/2569 |
| 17 | 38 | BENEFIT | AC-0158 | [NULL] | 23570001 | [NULL] | loyalty_bonus | DR | 2026-02-24 13:40:00 | system | *New* [UR20240325](https://docs.google.com/spreadsheets/d/1kyoiqGeONE5xkcokeZnR4LQ5ZoaATHFWjTusPk4rUsQ/edit?gid=416605898#gid=416605898) Added by akkrawat.le 24/02/2569 |
| 18 | 37 | BENEFIT | AC-0158 | [NULL] | 23570001 | [NULL] | loyalty_bonus | DR | 2026-02-24 13:40:00 | system | *New* [UR20240325](https://docs.google.com/spreadsheets/d/1kyoiqGeONE5xkcokeZnR4LQ5ZoaATHFWjTusPk4rUsQ/edit?gid=416605898#gid=416605898) Added by akkrawat.le 11/03/2569 |