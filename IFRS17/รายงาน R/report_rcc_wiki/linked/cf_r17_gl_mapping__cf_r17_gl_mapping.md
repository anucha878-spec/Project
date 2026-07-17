# cf_r17_gl_mapping

- url: http://wiki.thaisamut.co.th/display/RDSADW/cf_r17_gl_mapping
- http status: 200
- source: Playwright MCP (in-body link, depth 1)

---
## TOC

[ [TOC](#cf_r17_gl_mapping-TOC) ] [ [Convention](#cf_r17_gl_mapping-Convention) ] [ [Table : cf_r17_gl_mapping](#cf_r17_gl_mapping-Table:cf_r17_gl_mapping) ]

## Convention

Description: ข้อมูล mapping gl

## Table : cf_r17_gl_mapping

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

ตัวอย่างข้อมูล

| gl_mapping_id | account_code | model_type | model_table | amount_type | begin_date | expire_date | created_date | created_by | updated_date | updated_by | gl_type |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 41011005 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 2 | 41011010 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 3 | 41012005 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 4 | 41012010 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 5 | 41030005 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 6 | 41030010 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 7 | 41040000 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 8 | 41520005 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 9 | 41520010 | REINSURANCE_CLAIM | tx_adw_claim_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 10 | 50533105 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 11 | 50532210 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 12 | 50532205 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 13 | 50532110 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 14 | 50532105 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 15 | 50533210 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 16 | 50533205 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 17 | 50533110 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 18 | 50531210 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 19 | 50531205 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 20 | 50531110 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |
| 21 | 50531105 | REINSURANCE_PREMIUM | tx_adw_premium_ri_detail | [NULL] | 2022-06-01 | 2999-12-31 | 2024-04-26 20:45:53 | SYSTEM | 2024-04-26 20:45:53 | SYSTEM | CR |