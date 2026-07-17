# `adw` Database — Catalog ของตารางที่เกี่ยวกับ "รายงาน R"

**Server:** PostgreSQL 9.6.24 @ 11.100.8.51:5432/adw
**Generated:** 2026-05-28T03:45:59.695Z
**Total tables in scope:** 259

## Master configuration (18 tables)

### `public.cf_rcc_bl_mapping` — rows: 60

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | bl_mapping_id | numeric(8,0) | N |
| 2 | group_type_id | numeric(8,0) | N |
| 3 | business_line | character varying(20) | N |
| 4 | model_type | character varying(50) | N |
| 5 | model_table | character varying(50) | N |
| 6 | begin_date | date | N |
| 7 | expire_date | date | Y |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | policy_category_flag | boolean | Y |

<details><summary>sample rows</summary>

```json
{"bl_mapping_id":"1","group_type_id":"2","business_line":"01","model_type":"COMMISSION_OV","model_table":"tx_adw_commission_ov_detail","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.609Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.609Z","updated_by":"SYSTEM","policy_category_flag":false}
{"bl_mapping_id":"2","group_type_id":"2","business_line":"02","model_type":"COMMISSION_OV","model_table":"tx_adw_commission_ov_detail","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.609Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.609Z","updated_by":"SYSTEM","policy_category_flag":false}
{"bl_mapping_id":"4","group_type_id":"2","business_line":"04","model_type":"COMMISSION_OV","model_table":"tx_adw_commission_ov_detail","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.609Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.609Z","updated_by":"SYSTEM","policy_category_flag":false}
{"bl_mapping_id":"5","group_type_id":"2","business_line":"08","model_type":"COMMISSION_OV","model_table":"tx_adw_commission_ov_detail","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.609Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.609Z","updated_by":"SYSTEM","policy_category_flag":false}
{"bl_mapping_id":"6","group_type_id":"6","business_line":"07","model_type":"COMMISSION_OV","model_table":"tx_adw_commission_ov_detail","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.609Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.609Z","updated_by":"SYSTEM","policy_category_flag":false}
```
</details>

### `public.cf_rcc_file_error_mapping` — rows: 19

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_rcc_file_error_mapping_id | character varying(50) | N |
| 2 | cf_rcc_file_error_name_id | numeric(4,0) | N |
| 3 | cf_rcc_template_error_file_id | numeric(4,0) | N |
| 4 | version | numeric(4,0) | N |
| 5 | begin_date | date | Y |
| 6 | expire_date | date | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_rcc_file_error_mapping_id":"1","cf_rcc_file_error_name_id":"1","cf_rcc_template_error_file_id":"1","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:17.719Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_mapping_id":"2","cf_rcc_file_error_name_id":"2","cf_rcc_template_error_file_id":"2","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.063Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_mapping_id":"3","cf_rcc_file_error_name_id":"3","cf_rcc_template_error_file_id":"3","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.210Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_mapping_id":"5","cf_rcc_file_error_name_id":"5","cf_rcc_template_error_file_id":"5","version":"5","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.116Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_mapping_id":"6","cf_rcc_file_error_name_id":"6","cf_rcc_template_error_file_id":"6","version":"6","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.230Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

### `public.cf_rcc_file_error_name` — rows: 19

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_rcc_file_error_name_id | numeric(18,0) | N |
| 2 | cf_rcc_file_error_name | character varying(100) | N |
| 3 | group_type_id | numeric(8,0) | N |
| 4 | seq_no | numeric(3,0) | N |
| 5 | begin_date | date | N |
| 6 | expire_date | date | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_rcc_file_error_name_id":"1","cf_rcc_file_error_name":"R01 - Error_log","group_type_id":"1","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:17.719Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_name_id":"2","cf_rcc_file_error_name":"R02 - Error_log","group_type_id":"2","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.063Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_name_id":"3","cf_rcc_file_error_name":"R03 - Error_log","group_type_id":"3","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.210Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_name_id":"5","cf_rcc_file_error_name":"R05 - Error_log","group_type_id":"5","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.116Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_file_error_name_id":"6","cf_rcc_file_error_name":"R06 - Error_log","group_type_id":"6","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.230Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

### `public.cf_rcc_file_mapping` — rows: 58

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_file_map_id | numeric(4,0) | N |
| 2 | cf_file_name_id | numeric(4,0) | N |
| 3 | cf_template_file_id | numeric(4,0) | N |
| 4 | version | numeric(4,0) | N |
| 5 | begin_date | date | Y |
| 6 | expire_date | date | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_file_map_id":"1","cf_file_name_id":"1","cf_template_file_id":"1","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.087Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.087Z","updated_by":"SYSTEM"}
{"cf_file_map_id":"2","cf_file_name_id":"2","cf_template_file_id":"2","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.087Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.087Z","updated_by":"SYSTEM"}
{"cf_file_map_id":"3","cf_file_name_id":"3","cf_template_file_id":"3","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.087Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.087Z","updated_by":"SYSTEM"}
{"cf_file_map_id":"4","cf_file_name_id":"4","cf_template_file_id":"4","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.087Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.087Z","updated_by":"SYSTEM"}
{"cf_file_map_id":"5","cf_file_name_id":"5","cf_template_file_id":"5","version":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:46.571Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:46.571Z","updated_by":"SYSTEM"}
```
</details>

### `public.cf_rcc_file_name` — rows: 56

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_file_name_id | numeric(18,0) | N |
| 2 | cf_file_name | character varying(100) | N |
| 3 | group_type_id | numeric(8,0) | N |
| 4 | seq_no | numeric(3,0) | Y |
| 5 | begin_date | date | N |
| 6 | expire_date | date | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |
| 11 | version | character varying(3) | N |
| 12 | description | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_file_name_id":"47","cf_file_name":"Trial Balance","group_type_id":"21","seq_no":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-27T13:35:47.009Z","created_by":"SYSTEM","updated_date":"2023-05-27T13:35:47.009Z","updated_by":"SYSTEM","version":"2","description":null}
{"cf_file_name_id":"48","cf_file_name":"Trial Balance Error","group_type_id":"21","seq_no":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-27T13:35:47.009Z","created_by":"SYSTEM","updated_date":"2023-05-27T13:35:47.009Z","updated_by":"SYSTEM","version":"2","description":null}
{"cf_file_name_id":"5","cf_file_name":"R13 - Ordinary Products [OP] Expense Allocation GMM","group_type_id":"13","seq_no":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:46.571Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:46.571Z","updated_by":"SYSTEM","version":"1","description":"Download"}
{"cf_file_name_id":"15","cf_file_name":"R01 - Reconcile & Adjustment","group_type_id":"1","seq_no":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:53.068Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:53.068Z","updated_by":"SYSTEM","version":"1","description":"Download"}
{"cf_file_name_id":"13","cf_file_name":"R05 - Reconcile & Adjustment","group_type_id":"5","seq_no":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-06-21T08:00:00.000Z","created_by":"SYSTEM","updated_date":"2022-06-21T08:00:00.000Z","updated_by":"SYSTEM","version":"1","description":"Download"}
```
</details>

### `public.cf_rcc_gl_mapping` — rows: 135

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | gl_mapping_id | numeric(8,0) | N |
| 2 | group_type_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | N |
| 4 | model_type | character varying(50) | N |
| 5 | model_table | character varying(50) | N |
| 6 | amount_type | character varying(50) | Y |
| 7 | begin_date | date | N |
| 8 | expire_date | date | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |
| 13 | gl_type | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"gl_mapping_id":"131","group_type_id":"15","account_code":"50531110","model_type":"PREMIUM","model_table":"tx_adw_premium_ri_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:04:39.758Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:04:39.758Z","updated_by":"SYSTEM","gl_type":"DR"}
{"gl_mapping_id":"132","group_type_id":"15","account_code":"50531210","model_type":"PREMIUM","model_table":"tx_adw_premium_ri_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:04:39.758Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:04:39.758Z","updated_by":"SYSTEM","gl_type":"DR"}
```
</details>

### `public.cf_rcc_suspense_mapping` — rows: 62

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | suspense_mapping_id | numeric(4,0) | N |
| 2 | group_type_id | numeric(8,0) | N |
| 3 | disclosure_type | character varying(50) | N |
| 4 | account_code | character varying(20) | N |
| 5 | account_name | character varying(50) | N |
| 6 | begin_date | timestamp with time zone | N |
| 7 | expire_date | timestamp with time zone | Y |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | cf_template_sheet_id | numeric(4,0) | Y |
| 13 | version | character varying(5) | N |

<details><summary>sample rows</summary>

```json
{"suspense_mapping_id":"29","group_type_id":"2","disclosure_type":"Life","account_code":"79110002","account_name":"Suspense - Commission_GMM","begin_date":"2021-11-10T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-16T02:46:40.582Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"cf_template_sheet_id":"4","version":"2"}
{"suspense_mapping_id":"30","group_type_id":"6","disclosure_type":"Investment","account_code":"79120002","account_name":"Suspense - Commission_VFA","begin_date":"2021-11-10T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-16T02:46:40.582Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"cf_template_sheet_id":"2","version":"2"}
{"suspense_mapping_id":"32","group_type_id":"1","disclosure_type":"Life","account_code":"79110001","account_name":"Suspense - Premiums_GMM","begin_date":"2021-11-10T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-16T02:46:42.177Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"cf_template_sheet_id":"16","version":"2"}
{"suspense_mapping_id":"33","group_type_id":"9","disclosure_type":"Investment","account_code":"79120005","account_name":"Suspense - Other Income Fee_VFA","begin_date":"2021-11-10T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-16T02:46:47.720Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"cf_template_sheet_id":"18","version":"2"}
{"suspense_mapping_id":"35","group_type_id":"4","disclosure_type":"Life","account_code":"79110004","account_name":"Suspense - Benefit_GMM","begin_date":"2021-11-10T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-05-16T02:46:47.935Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"cf_template_sheet_id":"20","version":"2"}
```
</details>

### `public.cf_rcc_system_config` — rows: 135

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_system_config_id | numeric(4,0) | N |
| 2 | system_config_desc | character varying(100) | N |
| 3 | begin_date | date | N |
| 4 | expire_date | date | N |
| 5 | created_date | timestamp with time zone | N |
| 6 | created_by | character varying(50) | N |
| 7 | updated_date | timestamp with time zone | Y |
| 8 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_system_config_id":"1","system_config_desc":"จำกัดจำนวนเดือนที่สามารถประมวลผลหน้าจอ RCC ","begin_date":"2021-12-31T17:00:00.000Z","expire_date":"2998-12-31T17:00:00.000Z","created_date":"2022-02-20T03:10:10.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_system_config_id":"2","system_config_desc":"จำนวนที่สามารถแสดงข้อมูลได้ในช่องหมายเหตุหน้าจอ RCC ","begin_date":"2021-12-31T17:00:00.000Z","expire_date":"2998-12-31T17:00:00.000Z","created_date":"2022-05-20T03:10:10.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

### `public.cf_rcc_system_value` — rows: 141

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_system_value_id | numeric(4,0) | N |
| 2 | rcc_system_config_id | numeric(4,0) | N |
| 3 | system_value | character varying(500) | N |
| 4 | begin_date | date | N |
| 5 | expire_date | date | N |
| 6 | created_date | timestamp with time zone | N |
| 7 | created_by | character varying(50) | N |
| 8 | updated_date | timestamp with time zone | Y |
| 9 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_system_value_id":"2","rcc_system_config_id":"2","system_value":"20","begin_date":"2020-12-31T17:00:00.000Z","expire_date":"2998-12-31T17:00:00.000Z","created_date":"2022-05-20T03:10:10.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_system_value_id":"3","rcc_system_config_id":"3","system_value":"2022-01","begin_date":"2020-12-31T17:00:00.000Z","expire_date":"2998-12-31T17:00:00.000Z","created_date":"2022-07-06T03:10:10.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

### `public.cf_rcc_template_error_field` — rows: 472

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_rcc_template_error_field_id | numeric(4,0) | N |
| 2 | cf_rcc_template_error_file_id | numeric(4,0) | N |
| 3 | cf_template_sheet_id | numeric(4,0) | Y |
| 4 | seq_no | numeric(4,0) | N |
| 5 | field_name | character varying(50) | N |
| 6 | data_type | character varying(50) | N |
| 7 | db_table | character varying(50) | N |
| 8 | db_field | character varying(50) | N |
| 9 | begin_date | date | N |
| 10 | expire_date | date | N |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |
| 15 | display_flag | boolean | N |
| 16 | order_by_flag | boolean | N |
| 17 | desc_or_asc | character varying(5) | Y |
| 18 | seq_order | numeric(4,0) | Y |

<details><summary>sample rows</summary>

```json
{"cf_rcc_template_error_field_id":"307","cf_rcc_template_error_file_id":"15","cf_template_sheet_id":null,"seq_no":"6","field_name":"gl_type","data_type":"varchar","db_table":"tx_rcc_error_log_r15","db_field":"gl_type","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:22.628Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"display_flag":true,"order_by_flag":false,"desc_or_asc":null,"seq_order":null}
{"cf_rcc_template_error_field_id":"355","cf_rcc_template_error_file_id":"17","cf_template_sheet_id":null,"seq_no":"1","field_name":"tx_rcc_error_log_r17_id","data_type":"numeric","db_table":"tx_rcc_error_log_r17","db_field":"tx_rcc_error_log_r17_id","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:23.138Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"display_flag":true,"order_by_flag":false,"desc_or_asc":null,"seq_order":null}
```
</details>

### `public.cf_rcc_template_error_file` — rows: 19

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_rcc_template_error_file_id | numeric(4,0) | N |
| 2 | template_file_name | character varying(255) | N |
| 3 | template_file_format | character varying(255) | Y |
| 4 | verify_name_format | boolean | N |
| 5 | file_type | character varying(10) | N |
| 6 | import_export | character varying(1) | N |
| 7 | begin_date | date | N |
| 8 | expire_date | date | N |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_rcc_template_error_file_id":"1","template_file_name":"R01_Error_log_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:17.719Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_template_error_file_id":"2","template_file_name":"R02_Error_log_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.063Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_template_error_file_id":"3","template_file_name":"R03_Error_log_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:18.210Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_template_error_file_id":"5","template_file_name":"R05_Error_log_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.116Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"cf_rcc_template_error_file_id":"6","template_file_name":"R06_Error_log_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2023-07-27T13:19:19.230Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

### `public.cf_rcc_template_field` — rows: 2032

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_template_field_id | numeric(4,0) | N |
| 2 | cf_template_file_id | numeric(4,0) | N |
| 3 | cf_template_sheet_id | numeric(4,0) | Y |
| 4 | seq_no | numeric(4,0) | N |
| 5 | field_name | character varying(50) | N |
| 6 | data_type | character varying(50) | N |
| 7 | format_data_type | character varying(50) | Y |
| 8 | nullable_flag | boolean | N |
| 9 | field_size_min | numeric(4,0) | Y |
| 10 | field_size_max | numeric(4,0) | Y |
| 11 | verify_size_flag | boolean | N |
| 12 | db_table | character varying(50) | N |
| 13 | db_field | character varying(50) | N |
| 14 | begin_date | date | N |
| 15 | expire_date | date | N |
| 16 | created_date | timestamp with time zone | N |
| 17 | created_by | character varying(50) | N |
| 18 | updated_date | timestamp with time zone | Y |
| 19 | updated_by | character varying(50) | Y |
| 20 | display_flag | boolean | N |
| 21 | order_by_flag | boolean | N |
| 22 | desc_or_asc | character varying(5) | Y |
| 23 | seq_order | numeric(4,0) | Y |
| 24 | crosstab_flag | boolean | N |
| 25 | crosstab_field | character varying(100) | Y |
| 26 | version | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"cf_template_field_id":"1613","cf_template_file_id":"46","cf_template_sheet_id":null,"seq_no":"1","field_name":"UniqueID","data_type":"numeric","format_data_type":"","nullable_flag":false,"field_size_min":null,"field_size_max":null,"verify_size_flag":false,"db_table":"tx_rcc_output_r10","db_field":"tx_rcc_output_r10_id","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-06-13T06:00:50.139Z","created_by":"SYSTEM","updated_date":"2024-06-13T06:00:50.139Z","updated_by":"SYSTEM","display_flag":true,"order_by_flag":true,"desc_or_asc":"asc","seq_order":"3","crosstab_flag":false,"crosstab_field":"","version":"5.1"}
{"cf_template_field_id":"1614","cf_template_file_id":"46","cf_template_sheet_id":null,"seq_no":"2","field_name":"Period","data_type":"varchar","format_data_type":"","nullable_flag":false,"field_size_min":null,"field_size_max":null,"verify_size_flag":false,"db_table":"tx_rcc_output_r10","db_field":"period","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-06-13T06:00:50.139Z","created_by":"SYSTEM","updated_date":"2024-06-13T06:00:50.139Z","updated_by":"SYSTEM","display_flag":true,"order_by_flag":true,"desc_or_asc":"asc","seq_order":"1","crosstab_flag":false,"crosstab_field":"","version":"5.1"}
```
</details>

### `public.cf_rcc_template_file` — rows: 57

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_template_file_id | numeric(4,0) | N |
| 2 | template_file_name | character varying(255) | N |
| 3 | template_file_format | character varying(255) | Y |
| 4 | verify_name_format | boolean | N |
| 5 | file_type | character varying(10) | N |
| 6 | import_export | character varying(1) | N |
| 7 | begin_date | date | N |
| 8 | expire_date | date | N |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_template_file_id":"1","template_file_name":"R06ACC_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"xlsx","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.067Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.067Z","updated_by":"SYSTEM"}
{"cf_template_file_id":"3","template_file_name":"R02ACC_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"xlsx","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.067Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.067Z","updated_by":"SYSTEM"}
{"cf_template_file_id":"6","template_file_name":"R13_ExpenseAllocation_By_PortfolioID_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:46.707Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:46.707Z","updated_by":"SYSTEM"}
{"cf_template_file_id":"7","template_file_name":"R13_ExpenseAllocation_By_Sub_GroupID_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:46.707Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:46.707Z","updated_by":"SYSTEM"}
{"cf_template_file_id":"4","template_file_name":"R02_OP_CommissionOverride_{YYYYMMFROM}_to_{YYYYMMTO}","template_file_format":null,"verify_name_format":false,"file_type":"csv","import_export":"E","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.067Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.067Z","updated_by":"SYSTEM"}
```
</details>

### `public.cf_rcc_template_formular` — rows: 450

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_template_formular_id | numeric(4,0) | N |
| 2 | cf_template_file_id | numeric(4,0) | N |
| 3 | cf_template_sheet_id | numeric(4,0) | N |
| 4 | cf_template_field_id | numeric(4,0) | N |
| 5 | top_or_buttom | character varying(1) | N |
| 6 | display_type | character varying(10) | N |
| 7 | display_text | character varying(255) | Y |
| 8 | begin_date | date | N |
| 9 | expire_date | date | N |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"cf_template_formular_id":"1","cf_template_file_id":"1","cf_template_sheet_id":"1","cf_template_field_id":"4","top_or_buttom":"B","display_type":"D","display_text":"จำนวนเงินรวม","begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.390Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.390Z","updated_by":"SYSTEM"}
{"cf_template_formular_id":"2","cf_template_file_id":"1","cf_template_sheet_id":"1","cf_template_field_id":"7","top_or_buttom":"B","display_type":"S","display_text":null,"begin_date":"2021-12-30T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.390Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.390Z","updated_by":"SYSTEM"}
```
</details>

### `public.cf_rcc_template_sheet` — rows: 91

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | cf_template_sheet_id | numeric(4,0) | N |
| 2 | cf_template_file_id | numeric(4,0) | N |
| 3 | sheet_name | character varying(50) | N |
| 4 | seq_no | numeric(4,0) | N |
| 5 | begin_date | date | N |
| 6 | expire_date | date | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |
| 11 | set_file_name_id | numeric(8,0) | Y |
| 12 | version | character varying(5) | Y |

<details><summary>sample rows</summary>

```json
{"cf_template_sheet_id":"1","cf_template_file_id":"1","sheet_name":"Reconcile Actual Data","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.106Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.106Z","updated_by":"SYSTEM","set_file_name_id":null,"version":"4.1"}
{"cf_template_sheet_id":"2","cf_template_file_id":"1","sheet_name":"Adjustment Posting","seq_no":"2","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.106Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.106Z","updated_by":"SYSTEM","set_file_name_id":null,"version":"4.1"}
{"cf_template_sheet_id":"3","cf_template_file_id":"3","sheet_name":"Reconcile Actual Data","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.106Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.106Z","updated_by":"SYSTEM","set_file_name_id":null,"version":"4.1"}
{"cf_template_sheet_id":"4","cf_template_file_id":"3","sheet_name":"Adjustment Posting","seq_no":"2","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:42.106Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:42.106Z","updated_by":"SYSTEM","set_file_name_id":null,"version":"4.1"}
{"cf_template_sheet_id":"5","cf_template_file_id":"5","sheet_name":"Actual Expense","seq_no":"1","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2022-10-29T07:03:46.745Z","created_by":"SYSTEM","updated_date":"2022-10-29T07:03:46.745Z","updated_by":"SYSTEM","set_file_name_id":null,"version":"4.1"}
```
</details>

### `public.ms_rcc_auto_tagging` — rows: 1741

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_auto_tagging_id | numeric(8,0) | N |
| 2 | tagging_type | character varying(1) | N |
| 3 | plan_code | character varying(50) | N |
| 4 | prophet_plan_code | character varying(50) | N |
| 5 | portfolio_name | character varying(50) | N |
| 6 | profitability_group | character varying(50) | N |
| 7 | begin_date | date | N |
| 8 | expire_date | date | N |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |
| 13 | version | character varying(5) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_auto_tagging_id":"1","tagging_type":"I","plan_code":"G081","prophet_plan_code":"G081","portfolio_name":"IND_END","profitability_group":"NSPO","begin_date":"1974-12-31T17:00:00.000Z","expire_date":"2019-12-30T17:00:00.000Z","created_date":"2023-08-27T14:29:10.186Z","created_by":"system","updated_date":null,"updated_by":null,"version":null}
{"rcc_auto_tagging_id":"2","tagging_type":"I","plan_code":"G082","prophet_plan_code":"G082","portfolio_name":"IND_END","profitability_group":"NSPO","begin_date":"1974-12-31T17:00:00.000Z","expire_date":"2019-12-30T17:00:00.000Z","created_date":"2023-08-27T14:29:10.186Z","created_by":"system","updated_date":null,"updated_by":null,"version":null}
```
</details>

### `public.ms_rcc_group_type` — rows: 21

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | group_type_id | numeric(8,0) | N |
| 2 | group_type_name | character varying(100) | N |
| 3 | created_date | timestamp with time zone | N |
| 4 | created_by | character varying(50) | N |
| 5 | updated_date | timestamp with time zone | Y |
| 6 | updated_by | character varying(50) | Y |
| 7 | begin_date | date | Y |
| 8 | expire_date | date | Y |
| 9 | seq_id | numeric(2,0) | Y |
| 10 | group_type_code | character varying(50) | Y |
| 11 | version | character varying(5) | N |

<details><summary>sample rows</summary>

```json
{"group_type_id":"4","group_type_name":"Ordinary Products [OP] Benefit payment GMM","created_date":"2022-10-29T07:03:41.603Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"begin_date":"2022-12-31T17:00:00.000Z","expire_date":"1999-12-31T17:00:00.000Z","seq_id":"4","group_type_code":"R04","version":"3"}
{"group_type_id":"5","group_type_name":"Unit Link Products [ULP] Premium Receipt VFA","created_date":"2022-10-29T07:03:41.603Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"begin_date":"2022-12-31T17:00:00.000Z","expire_date":"1999-12-31T17:00:00.000Z","seq_id":"5","group_type_code":"R05","version":"3"}
{"group_type_id":"6","group_type_name":"Unit Link Products [ULP] Commission override VFA","created_date":"2022-10-29T07:03:41.603Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"begin_date":"2022-12-31T17:00:00.000Z","expire_date":"1999-12-31T17:00:00.000Z","seq_id":"6","group_type_code":"R06","version":"3"}
{"group_type_id":"7","group_type_name":"Unit Link Products [ULP] Claim VFA","created_date":"2022-10-29T07:03:41.603Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"begin_date":"2022-12-31T17:00:00.000Z","expire_date":"1999-12-31T17:00:00.000Z","seq_id":"7","group_type_code":"R07","version":"3"}
{"group_type_id":"9","group_type_name":"Unit Link Products [ULP] Other income fee VFA","created_date":"2022-10-29T07:03:41.603Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"begin_date":"2022-12-31T17:00:00.000Z","expire_date":"1999-12-31T17:00:00.000Z","seq_id":"9","group_type_code":"R09","version":"3"}
```
</details>

### `public.ms_rcc_process_status` — rows: 12

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_process_status_id | numeric(8,0) | N |
| 2 | process_name | character varying(100) | N |
| 3 | seq_id | numeric(8,0) | N |
| 4 | created_date | timestamp with time zone | N |
| 5 | created_by | character varying(50) | N |
| 6 | updated_date | timestamp with time zone | Y |
| 7 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_process_status_id":"1","process_name":"รอประมวลผล","seq_id":"1","created_date":"2022-10-29T07:03:41.574Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_process_status_id":"2","process_name":"กำลังประมวลผล","seq_id":"2","created_date":"2022-10-29T07:03:41.574Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_process_status_id":"3","process_name":"ประมวลผลสำเร็จ","seq_id":"3","created_date":"2022-10-29T07:03:41.574Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_process_status_id":"4","process_name":"ประมวลผลไม่สำเร็จ","seq_id":"4","created_date":"2022-10-29T07:03:41.574Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
{"rcc_process_status_id":"5","process_name":"ยืนยันข้อมูล","seq_id":"5","created_date":"2022-10-29T07:03:41.574Z","created_by":"SYSTEM","updated_date":null,"updated_by":null}
```
</details>

## GL mapping (per report) (8 tables)

### `public.cf_r01_gl_mapping` — rows: 58

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | gl_mapping_id | numeric(8,0) | N |
| 2 | account_code | character varying(20) | N |
| 3 | model_type | character varying(50) | N |
| 4 | model_table | character varying(50) | N |
| 5 | amount_type | character varying(50) | Y |
| 6 | begin_date | date | N |
| 7 | expire_date | date | Y |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | gl_type | character varying(10) | Y |
| 13 | rider_flag | boolean | Y |
| 14 | event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"gl_mapping_id":"1","account_code":"40511100","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.218Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.218Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"2","account_code":"40511200","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.218Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.218Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"3","account_code":"40511300","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.218Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.218Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"4","account_code":"40512100","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.218Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.218Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"5","account_code":"40512200","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":null,"begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.218Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.218Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
```
</details>

### `public.cf_r03_gl_mapping` — rows: 47

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | account_code | character varying(20) | N |
| 3 | model_type | character varying(50) | N |
| 4 | model_table | character varying(50) | N |
| 5 | amount_type | character varying(50) | Y |
| 6 | created_date | timestamp with time zone | N |
| 7 | created_by | character varying(50) | N |
| 8 | updated_date | timestamp with time zone | Y |
| 9 | updated_by | character varying(50) | Y |
| 10 | gl_type | character varying(10) | Y |
| 11 | rider_flag | boolean | Y |
| 12 | event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","account_code":"50542105","model_type":"CLAIM","model_table":"tx_adw_claim_detail","amount_type":"","created_date":"2023-02-25T06:42:37.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"gl_type":"DR","rider_flag":false,"event_code":null}
{"id":"2","account_code":"50542106","model_type":"CLAIM","model_table":"tx_adw_claim_detail","amount_type":"","created_date":"2023-02-25T06:42:37.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"gl_type":"DR","rider_flag":false,"event_code":null}
{"id":"3","account_code":"50542107","model_type":"CLAIM","model_table":"tx_adw_claim_detail","amount_type":"","created_date":"2023-02-25T06:42:37.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"gl_type":"DR","rider_flag":false,"event_code":null}
{"id":"4","account_code":"50542110","model_type":"CLAIM","model_table":"tx_adw_claim_detail","amount_type":"","created_date":"2023-02-25T06:42:37.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"gl_type":"DR","rider_flag":false,"event_code":null}
{"id":"5","account_code":"50542115","model_type":"CLAIM","model_table":"tx_adw_claim_detail","amount_type":"","created_date":"2023-02-25T06:42:37.000Z","created_by":"SYSTEM","updated_date":null,"updated_by":null,"gl_type":"DR","rider_flag":false,"event_code":null}
```
</details>

### `public.cf_r04_gl_mapping` — rows: 45

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | gl_mapping_id | numeric(8,0) | N |
| 2 | account_code | character varying(20) | N |
| 3 | model_type | character varying(50) | N |
| 4 | model_table | character varying(50) | N |
| 5 | amount_type | character varying(50) | Y |
| 6 | begin_date | date | N |
| 7 | expire_date | date | Y |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | gl_type | character varying(10) | Y |
| 13 | rider_flag | boolean | Y |
| 14 | event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"gl_mapping_id":"1","account_code":"50543010","model_type":"BENEFIT","model_table":"tx_adw_benefit_detail","amount_type":"all","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.259Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.259Z","updated_by":"SYSTEM","gl_type":"DR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"2","account_code":"50547005","model_type":"BENEFIT","model_table":"tx_adw_benefit_detail","amount_type":"all","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.259Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.259Z","updated_by":"SYSTEM","gl_type":"DR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"3","account_code":"11011100","model_type":"INVESTMENT","model_table":"tx_adw_investment_detail","amount_type":"benefit","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.259Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.259Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"4","account_code":"11012100","model_type":"INVESTMENT","model_table":"tx_adw_investment_detail","amount_type":"benefit","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.259Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.259Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
{"gl_mapping_id":"5","account_code":"40511200","model_type":"PREMIUM","model_table":"tx_adw_premium_detail","amount_type":"benefit","begin_date":"2021-12-22T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.259Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.259Z","updated_by":"SYSTEM","gl_type":"CR","rider_flag":false,"event_code":null}
```
</details>

### `public.cf_r05_gl_mapping` — rows: 40

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(18,0) | N |
| 2 | ul_alteration_id | numeric(5,0) | Y |
| 3 | event_code | character varying(10) | Y |
| 4 | event_name | character varying(255) | Y |
| 5 | account_code | character varying(8) | Y |
| 6 | account_name | character varying(255) | Y |
| 7 | amount_type | character varying(50) | Y |
| 8 | gl_type | character varying(2) | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | premium_type | character varying(50) | Y |
| 12 | begin_date | date | N |
| 13 | expire_date | date | N |

<details><summary>sample rows</summary>

```json
{"id":"1","ul_alteration_id":"45","event_code":"AC-0006","event_name":null,"account_code":"40511100","account_name":null,"amount_type":"totalpremium_amount,unallocated_premium","gl_type":"CR","created_date":"2023-12-10T05:37:30.864Z","created_by":"SYSTEM","premium_type":"REGULAR","begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z"}
{"id":"2","ul_alteration_id":"45","event_code":"AC-0006","event_name":null,"account_code":"40511300","account_name":null,"amount_type":"totalpremium_amount,unallocated_premium","gl_type":"CR","created_date":"2023-12-10T05:37:30.864Z","created_by":"SYSTEM","premium_type":"SINGLE","begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z"}
{"id":"3","ul_alteration_id":"45","event_code":"AC-0006","event_name":null,"account_code":"40511400","account_name":null,"amount_type":"totalpremium_amount,unallocated_premium","gl_type":"CR","created_date":"2023-12-10T05:37:30.864Z","created_by":"SYSTEM","premium_type":"TOPUP","begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z"}
{"id":"4","ul_alteration_id":"44","event_code":"AC-0070","event_name":null,"account_code":"40511100","account_name":null,"amount_type":"totalpremium_amount,unallocated_premium","gl_type":"CR","created_date":"2023-12-10T05:37:30.864Z","created_by":"SYSTEM","premium_type":"REGULAR","begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z"}
{"id":"5","ul_alteration_id":"44","event_code":"AC-0070","event_name":null,"account_code":"40511200","account_name":null,"amount_type":"totalpremium_amount,unallocated_premium","gl_type":"CR","created_date":"2023-12-10T05:37:30.864Z","created_by":"SYSTEM","premium_type":"REGULAR","begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z"}
```
</details>

### `public.cf_r08_gl_mapping` — rows: 13

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(18,0) | N |
| 2 | ul_alteration_id | numeric(5,0) | Y |
| 3 | model_table | character varying(50) | Y |
| 4 | event_code | character varying(10) | Y |
| 5 | event_name | character varying(255) | Y |
| 6 | account_code | character varying(8) | Y |
| 7 | account_name | character varying(255) | Y |
| 8 | amount_type | character varying(50) | Y |
| 9 | gl_type | character varying(2) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |

<details><summary>sample rows</summary>

```json
{"id":"3","ul_alteration_id":"36","model_table":"BENEFIT","event_code":"AC-0173","event_name":null,"account_code":"23570001","account_name":null,"amount_type":"maturity_benefit","gl_type":"DR","created_date":"2024-03-13T17:57:56.710Z","created_by":"system"}
{"id":"4","ul_alteration_id":"36","model_table":"BENEFIT","event_code":"AC-0173","event_name":null,"account_code":"23570002","account_name":null,"amount_type":"maturity_benefit","gl_type":"DR","created_date":"2024-03-13T17:57:56.710Z","created_by":"system"}
{"id":"5","ul_alteration_id":"31","model_table":"BENEFIT","event_code":"AC-0121","event_name":null,"account_code":"23570001","account_name":null,"amount_type":"surrender_benefit","gl_type":"DR","created_date":"2024-03-13T17:57:56.710Z","created_by":"system"}
{"id":"6","ul_alteration_id":"31","model_table":"BENEFIT","event_code":"AC-0121","event_name":null,"account_code":"23570002","account_name":null,"amount_type":"surrender_benefit","gl_type":"DR","created_date":"2024-03-13T17:57:56.710Z","created_by":"system"}
{"id":"7","ul_alteration_id":"14","model_table":"BENEFIT","event_code":"AC-0171","event_name":null,"account_code":"23570001","account_name":null,"amount_type":"surrender_benefit","gl_type":"DR","created_date":"2024-03-13T17:57:56.710Z","created_by":"system"}
```
</details>

### `public.cf_r09_gl_mapping` — rows: 69

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(18,0) | N |
| 2 | ul_alteration_id | numeric(5,0) | Y |
| 3 | event_code | character varying(10) | Y |
| 4 | event_name | character varying(255) | Y |
| 5 | account_code | character varying(8) | Y |
| 6 | account_name | character varying(255) | Y |
| 7 | amount_type | character varying(50) | Y |
| 8 | gl_type | character varying(2) | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | account_type | character varying(2) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","ul_alteration_id":"45","event_code":"AC-0007","event_name":"จัดสรรหนี้สินจากสัญญาลงทุน-เบี้ยประกันงวดแรกเข้ารายได้ต่าง ๆ","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย (COI Charge)","amount_type":"coi_charge","gl_type":"CR","created_date":"2023-10-30T13:01:35.591Z","created_by":"SYSTEM","account_type":null}
{"id":"2","ul_alteration_id":"44","event_code":"AC-0072","event_name":"จัดสรรหนี้สินจากสัญญาลงทุน-เบี้ยประกันงวดถัดไปเข้ารายได้ต่าง ๆ ที่มีการค้างชำระ","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย (COI Charge)","amount_type":"coi_charge","gl_type":"CR","created_date":"2023-10-30T13:01:35.591Z","created_by":"SYSTEM","account_type":null}
{"id":"3","ul_alteration_id":"34","event_code":"AC-0086","event_name":"นำหน่วยลงทุนที่ขายได้มาชำระค่าการประกันภัย(COI)เนื่องจากเปลี่ยนแปลงอายุ/เพศ","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย (COI Charge)","amount_type":"coi_charge","gl_type":"CR","created_date":"2023-10-30T13:01:35.591Z","created_by":"SYSTEM","account_type":null}
{"id":"4","ul_alteration_id":"34","event_code":"AC-0087","event_name":"จ่ายคืนค่าการประกันภัย(COI) ให้กับผู้เอาประกันเนื่องจากเปลี่ยนแปลงอายุ/เพศด้วยการโอนเงิน/เช็ค","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย (COI Charge)","amount_type":"coi_charge","gl_type":"CR","created_date":"2023-10-30T13:01:35.591Z","created_by":"SYSTEM","account_type":null}
{"id":"5","ul_alteration_id":"34","event_code":"AC-0088","event_name":"คืนรายได้ค่าการประกันภัยส่วนที่เกินโดยการนำไปซื้อหน่วยลงทุน","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย (COI Charge)","amount_type":"coi_charge","gl_type":"CR","created_date":"2023-10-30T13:01:35.591Z","created_by":"SYSTEM","account_type":null}
```
</details>

### `public.cf_r14_gl_mapping` — rows: 651

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(18,0) | N |
| 2 | event_code | character varying(10) | Y |
| 3 | account_type | character varying(2) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | event_type | character varying(100) | Y |
| 6 | receive_type | character varying(50) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | amount_type | character varying(255) | Y |
| 10 | loan_type | character varying(50) | Y |
| 11 | gl_type | character varying(10) | Y |
| 12 | active_flag | boolean | Y |
| 13 | offset_flag | boolean | Y |
| 14 | free_template_flag | boolean | Y |

<details><summary>sample rows</summary>

```json
{"id":"110","event_code":"389","account_type":"DR","account_code":"11012100","event_type":"NORMALPREPAY","receive_type":"CASH","created_date":"2023-07-27T13:19:13.096Z","created_by":"system","amount_type":"PrepaymentAmountPrincipal","loan_type":"APL","gl_type":"CR","active_flag":true,"offset_flag":true,"free_template_flag":false}
{"id":"249","event_code":"BEN_ACC_01","account_type":"CR","account_code":"11011100","event_type":"NORMALREPAY","receive_type":"BENEFIT","created_date":"2023-11-15T13:01:40.909Z","created_by":"system","amount_type":"RepayFromBenefitAmountPrincipal","loan_type":"PL","gl_type":"CR","active_flag":true,"offset_flag":false,"free_template_flag":false}
```
</details>

### `public.cf_r17_gl_mapping` — rows: 24

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | gl_mapping_id | numeric(8,0) | N |
| 2 | account_code | character varying(20) | N |
| 3 | model_type | character varying(50) | N |
| 4 | model_table | character varying(50) | N |
| 5 | amount_type | character varying(50) | Y |
| 6 | begin_date | date | N |
| 7 | expire_date | date | Y |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | gl_type | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"gl_mapping_id":"1","account_code":"41011005","model_type":"REINSURANCE_CLAIM","model_table":"tx_adw_claim_ri_detail","amount_type":null,"begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.402Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.402Z","updated_by":"SYSTEM","gl_type":"CR"}
{"gl_mapping_id":"2","account_code":"41011010","model_type":"REINSURANCE_CLAIM","model_table":"tx_adw_claim_ri_detail","amount_type":null,"begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.402Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.402Z","updated_by":"SYSTEM","gl_type":"CR"}
{"gl_mapping_id":"3","account_code":"41012005","model_type":"REINSURANCE_CLAIM","model_table":"tx_adw_claim_ri_detail","amount_type":null,"begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.402Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.402Z","updated_by":"SYSTEM","gl_type":"CR"}
{"gl_mapping_id":"4","account_code":"41012010","model_type":"REINSURANCE_CLAIM","model_table":"tx_adw_claim_ri_detail","amount_type":null,"begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.402Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.402Z","updated_by":"SYSTEM","gl_type":"CR"}
{"gl_mapping_id":"5","account_code":"41030005","model_type":"REINSURANCE_CLAIM","model_table":"tx_adw_claim_ri_detail","amount_type":null,"begin_date":"2022-05-31T17:00:00.000Z","expire_date":"2999-12-30T17:00:00.000Z","created_date":"2024-04-26T13:45:53.402Z","created_by":"SYSTEM","updated_date":"2024-04-26T13:45:53.402Z","updated_by":"SYSTEM","gl_type":"CR"}
```
</details>

## EDW source — account head/system (2 tables)

### `public.tx_adw_account_head` — rows: 59899

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | accounting_date | date | Y |
| 3 | branch_no | character varying(4) | Y |
| 4 | created_date | timestamp without time zone | N |
| 5 | created_by | character varying(50) | N |
| 6 | updated_date | timestamp without time zone | Y |
| 7 | updated_by | character varying(50) | Y |
| 8 | status | character varying(15) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","accounting_date":"2021-09-30T17:00:00.000Z","branch_no":"0999","created_date":"2022-10-29T09:35:03.797Z","created_by":"punyata.te","updated_date":"2022-10-29T09:35:03.797Z","updated_by":"punyata.te","status":"WAIT"}
{"id":"3","accounting_date":"2022-10-30T17:00:00.000Z","branch_no":"2910","created_date":"2022-10-31T09:35:35.809Z","created_by":"thiraporn.mu","updated_date":"2022-10-31T09:35:35.809Z","updated_by":"thiraporn.mu","status":"WAIT"}
```
</details>

### `public.tx_adw_account_head_system` — rows: 108893

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_sap_export_id | bigint(64,0) | Y |
| 3 | tx_adw_account_head_id | bigint(64,0) | N |
| 4 | system_name | character varying(50) | N |
| 5 | status | character varying(15) | Y |
| 6 | number_of_posting | numeric(2,0) | Y |
| 7 | number_of_sap | numeric(2,0) | Y |
| 8 | created_date | timestamp without time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp without time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | tx_adwpc_process_log_id | bigint(64,0) | Y |
| 13 | post_approved_date | date | Y |
| 14 | system_key | character varying(50) | Y |
| 15 | event_code | character varying(25) | Y |
| 16 | event_type | character varying(50) | Y |
| 17 | event_group | character varying(5) | Y |
| 18 | sub_system_group | character varying(25) | Y |
| 19 | reference_number | character varying(20) | Y |
| 20 | tx_adwpc_sap_log_id | bigint(64,0) | Y |
| 21 | tx_adwpc_dashboard_daily_id | bigint(64,0) | Y |
| 22 | tx_adwpc_dashboard_payment_id | bigint(64,0) | Y |
| 23 | tx_adwpc_dashboard_monthly_id | bigint(64,0) | Y |
| 24 | tx_adwpc_dashboard_manual_id | bigint(64,0) | Y |
| 25 | sap_voucher_no | character varying(25) | Y |
| 26 | sun_path | character varying(1) | Y |
| 27 | manual_oper_code | character varying(10) | Y |
| 28 | source_reference_number | character varying(20) | Y |
| 29 | related_reference_number | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"id":"82357","tx_adw_sap_export_id":"31411","tx_adw_account_head_id":"50704","system_name":"AUTOPOST","status":"POST","number_of_posting":"1","number_of_sap":"1","created_date":"2024-02-22T09:59:15.470Z","created_by":"pusa.pu","updated_date":"2024-02-23T03:00:25.622Z","updated_by":"SYSTEM","tx_adwpc_process_log_id":"86681","post_approved_date":"2024-02-21T17:00:00.000Z","system_key":"457550","event_code":null,"event_type":"DAILY","event_group":"EA","sub_system_group":null,"reference_number":"202402224300EA","tx_adwpc_sap_log_id":null,"tx_adwpc_dashboard_daily_id":null,"tx_adwpc_dashboard_payment_id":null,"tx_adwpc_dashboard_monthly_id":null,"tx_adwpc_dashboard_manual_id":null,"sap_voucher_no":null,"sun_path":"A","manual_oper_code":null,"source_reference_number":null,"related_reference_number":null}
{"id":"82358","tx_adw_sap_export_id":"31411","tx_adw_account_head_id":"50705","system_name":"AUTOPOST","status":"POST","number_of_posting":"1","number_of_sap":"1","created_date":"2024-02-22T10:00:25.956Z","created_by":"hathaikan.ch","updated_date":"2024-02-23T03:00:25.622Z","updated_by":"SYSTEM","tx_adwpc_process_log_id":"86682","post_approved_date":"2024-02-21T17:00:00.000Z","system_key":"457636","event_code":null,"event_type":"DAILY","event_group":"EA","sub_system_group":null,"reference_number":"202402221200EA","tx_adwpc_sap_log_id":null,"tx_adwpc_dashboard_daily_id":null,"tx_adwpc_dashboard_payment_id":null,"tx_adwpc_dashboard_monthly_id":null,"tx_adwpc_dashboard_manual_id":null,"sap_voucher_no":null,"sun_path":"A","manual_oper_code":null,"source_reference_number":null,"related_reference_number":null}
```
</details>

## EDW source — transaction (2 tables)

### `public.tx_adw_transaction_detail` — rows: 34979088

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_policy_id | bigint(64,0) | Y |
| 3 | plan_code | character varying(10) | Y |
| 4 | plan_code_actuarial | character varying(10) | Y |
| 5 | model_type | character varying(50) | Y |
| 6 | created_date | timestamp without time zone | N |
| 7 | created_by | character varying(50) | N |
| 8 | updated_date | timestamp without time zone | Y |
| 9 | updated_by | character varying(50) | Y |
| 10 | basic_rider_indicator | character varying(5) | Y |
| 11 | bundle | character varying(30) | Y |

<details><summary>sample rows</summary>

```json
{"id":"59196580","tx_adw_transaction_policy_id":"40126115","plan_code":"539","plan_code_actuarial":"O539","model_type":"COMMISSION_OV","created_date":"2024-06-24T06:28:57.882Z","created_by":"SYSTEM","updated_date":"2024-06-24T06:28:57.882Z","updated_by":"SYSTEM","basic_rider_indicator":"BASIC","bundle":null}
{"id":"59196581","tx_adw_transaction_policy_id":"40126116","plan_code":"539","plan_code_actuarial":"O539","model_type":"COMMISSION_OV","created_date":"2024-06-24T06:28:57.882Z","created_by":"SYSTEM","updated_date":"2024-06-24T06:28:57.882Z","updated_by":"SYSTEM","basic_rider_indicator":"BASIC","bundle":null}
```
</details>

### `public.tx_adw_transaction_policy` — rows: 20821236

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_account_head_system_id | bigint(64,0) | Y |
| 3 | policy_no | character varying(20) | N |
| 4 | policy_category | character varying(20) | N |
| 5 | sale_channel | character varying(20) | Y |
| 6 | plan_code | character varying(10) | Y |
| 7 | contract_start_date | date | Y |
| 8 | maturity_date | date | Y |
| 9 | policy_coverage_term | numeric(3,0) | Y |
| 10 | policy_payment_term | numeric(2,0) | Y |
| 11 | policy_mode | numeric(3,0) | Y |
| 12 | policy_prem | numeric(31,2) | Y |
| 13 | policy_sex | character varying(10) | Y |
| 14 | policy_age | numeric(2,0) | Y |
| 15 | policy_status_nbs | character varying(50) | Y |
| 16 | policy_status_as400 | character varying(50) | Y |
| 17 | created_date | timestamp without time zone | N |
| 18 | created_by | character varying(50) | N |
| 19 | fully_paid_date | date | Y |
| 20 | updated_by | character varying(50) | Y |
| 21 | updated_date | timestamp without time zone | Y |
| 22 | sum_assured | numeric(22,3) | Y |
| 23 | channel_code | character varying(7) | Y |
| 24 | alteration_type_code | numeric(5,0) | Y |
| 25 | source_event_code | character varying(10) | Y |
| 26 | policy_year | numeric(2,0) | Y |
| 27 | invoice_date | date | Y |
| 28 | sale_option | character varying(20) | Y |
| 29 | licence_type | character varying(1) | Y |
| 30 | policy_status_sql | character varying(50) | Y |
| 31 | bundle | character varying(30) | Y |

<details><summary>sample rows</summary>

```json
{"id":"40884648","tx_adw_account_head_system_id":"101082","policy_no":"ข0242707","policy_category":"INDUSTRY","sale_channel":"Agent","plan_code":"90","contract_start_date":"2011-09-21T17:00:00.000Z","maturity_date":null,"policy_coverage_term":null,"policy_payment_term":null,"policy_mode":null,"policy_prem":null,"policy_sex":null,"policy_age":null,"policy_status_nbs":null,"policy_status_as400":null,"created_date":"2024-08-01T08:36:31.289Z","created_by":"SYSTEM","fully_paid_date":null,"updated_by":"SYSTEM","updated_date":"2024-08-01T08:36:31.289Z","sum_assured":null,"channel_code":"2075600","alteration_type_code":null,"source_event_code":null,"policy_year":null,"invoice_date":null,"sale_option":null,"licence_type":null,"policy_status_sql":null,"bundle":null}
{"id":"43824038","tx_adw_account_head_system_id":"101104","policy_no":"GH3907","policy_category":"GROUP","sale_channel":"Alternative2","plan_code":"GYRT","contract_start_date":"2023-08-31T17:00:00.000Z","maturity_date":"2024-08-30T17:00:00.000Z","policy_coverage_term":null,"policy_payment_term":null,"policy_mode":"3","policy_prem":null,"policy_sex":null,"policy_age":null,"policy_status_nbs":null,"policy_status_as400":null,"created_date":"2024-08-02T00:32:52.086Z","created_by":"SYSTEM","fully_paid_date":null,"updated_by":"SYSTEM","updated_date":"2024-08-02T00:32:52.086Z","sum_assured":null,"channel_code":"8300001","alteration_type_code":null,"source_event_code":null,"policy_year":"11","invoice_date":"2013-08-27T17:00:00.000Z","sale_option":"GROUPLIFE","licence_type":"3","policy_status_sql":"RENEWAL","bundle":"Optional"}
```
</details>

## EDW source — model details (11 tables)

### `public.tx_adw_benefit_detail` — rows: 149307

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | created_date | timestamp without time zone | N |
| 4 | created_by | character varying(50) | N |
| 5 | updated_date | timestamp without time zone | Y |
| 6 | updated_by | character varying(50) | Y |
| 7 | plan_code | character varying(10) | Y |
| 8 | annual_premium | numeric(15,2) | Y |
| 9 | modal_premium | numeric(15,2) | Y |
| 10 | loan_amount | numeric(15,2) | Y |
| 11 | maturity_amount | numeric(15,2) | Y |
| 12 | survivor_amount | numeric(15,2) | Y |
| 13 | finance_reward_amount | numeric(15,2) | Y |
| 14 | surrender_amount | numeric(15,2) | Y |
| 15 | auto_surrender_amount | numeric(15,2) | Y |
| 16 | pension_amount | numeric(15,2) | Y |
| 17 | return_amount | numeric(15,2) | Y |
| 18 | overdue_maturity_amount | numeric(15,2) | Y |
| 19 | overdue_survivor_amount | numeric(15,2) | Y |
| 20 | overdue_finance_reward_amount | numeric(15,2) | Y |
| 21 | overdue_benefit_amount | numeric(15,2) | Y |
| 22 | overdue_return_amount_ktb | numeric(15,2) | Y |
| 23 | overdue_return_amount_bbl | numeric(15,2) | Y |
| 24 | collection_type | character varying(10) | Y |
| 25 | branch_source | character varying(4) | Y |
| 26 | branch_service | character varying(4) | Y |
| 27 | expense_date | date | Y |
| 28 | mode_of_payment | character varying(4) | Y |
| 29 | receipt_no | character varying(14) | Y |
| 30 | interest_amount | numeric(15,2) | Y |
| 31 | policy_due_date | date | Y |
| 32 | contract_start_date | date | Y |
| 33 | paid_date | timestamp without time zone | Y |
| 34 | lapse | numeric(15,2) | Y |
| 35 | cenpay_reject_amount | numeric(15,2) | Y |
| 36 | advance_maturity_amount | numeric(15,2) | Y |
| 37 | advance_survivor_amount | numeric(15,2) | Y |
| 38 | advance_finance_reward_amount | numeric(15,2) | Y |
| 39 | cheque_returned_amount | numeric(15,2) | Y |
| 40 | branch_source_acc | character varying(4) | Y |
| 41 | payment_channel | character varying(30) | Y |
| 42 | advance_payment_condition_amount | numeric(15,2) | Y |
| 43 | adjust_auto_surrender_amount | numeric(15,2) | Y |
| 44 | overdue_auto_surrender_amount | numeric(15,2) | Y |
| 45 | auto_surrender_pension_amount | numeric(15,2) | Y |
| 46 | investment_liabilities_gl_amount | numeric(15,2) | Y |
| 47 | return_amount_net | numeric(15,2) | Y |
| 48 | adjust_overdue_auto_surrender_amount | numeric(15,2) | Y |
| 49 | adjust_overdue_survivor_amount | numeric(15,2) | Y |
| 50 | adjust_survivor_amount | numeric(15,2) | Y |
| 51 | accrued_policy_surrender | numeric(15,2) | Y |
| 52 | apl_surrender_pension | numeric(15,2) | Y |
| 53 | accrued_pension | numeric(15,2) | Y |
| 54 | accrued_pension_non_guarantee | numeric(15,2) | Y |
| 55 | cenpay_cheque_return | numeric(15,2) | Y |
| 56 | other_debt_policy | numeric(15,2) | Y |
| 57 | investment_liabilities_fund_amount | numeric(15,2) | Y |
| 58 | pension_non_guarantee_amount | numeric(15,2) | Y |
| 59 | dividend_ministry_insurance | numeric(15,2) | Y |
| 60 | cheque_no | character varying(30) | Y |
| 61 | pending_payment_amount | numeric(15,2) | Y |
| 62 | unpaid_policyholder_dividends | numeric(15,2) | Y |
| 63 | overdue_return_amount | numeric(15,2) | Y |
| 64 | sap_voucher_no | character varying(255) | Y |
| 65 | slip_no | character varying(14) | Y |
| 66 | branch_register | character varying(4) | Y |
| 67 | register_no | character varying(25) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","tx_adw_transaction_detail_id":"49","created_date":"2022-10-29T09:35:07.098Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:07.098Z","updated_by":"SYSTEM","plan_code":"693","annual_premium":"15814.40","modal_premium":"15814.40","loan_amount":null,"maturity_amount":null,"survivor_amount":null,"finance_reward_amount":null,"surrender_amount":"9724.50","auto_surrender_amount":null,"pension_amount":null,"return_amount":null,"overdue_maturity_amount":null,"overdue_survivor_amount":null,"overdue_finance_reward_amount":null,"overdue_benefit_amount":null,"overdue_return_amount_ktb":null,"overdue_return_amount_bbl":null,"collection_type":"CASH","branch_source":"0001","branch_service":"0999","expense_date":"2021-09-30T17:00:00.000Z","mode_of_payment":"99","receipt_no":null,"interest_amount":null,"policy_due_date":"2035-02-19T17:00:00.000Z","contract_start_date":"2015-02-19T17:00:00.000Z","paid_date":"2021-09-30T17:00:00.000Z","lapse":null,"cenpay_reject_amount":null,"advance_maturity_amount":null,"advance_survivor_amount":null,"advance_finance_reward_amount":null,"cheque_returned_amount":null,"branch_source_acc":"9001","payment_channel":null,"advance_payment_condition_amount":null,"adjust_auto_surrender_amount":null,"overdue_auto_surrender_amount":null,"auto_surrender_pension_amount":null,"investment_liabilities_gl_amount":null,"return_amount_net":null,"adjust_overdue_auto_surrender_amount":null,"adjust_overdue_survivor_amount":null,"adjust_survivor_amount":null,"accrued_policy_surrender":null,"apl_surrender_pension":null,"accrued_pension":null,"accrued_pension_non_guarantee":null,"cenpay_cheque_return":null,"other_debt_policy":null,"investment_liabilities_fund_amount":null,"pension_non_guarantee_amount":null,"dividend_ministry_insurance":null,"cheque_no":null,"pending_payment_amount":null,"unpaid_policyholder_dividends":null,"overdue_return_amount":null,"sap_voucher_no":null,"slip_no":null,"branch_register":null,"register_no":null}
{"id":"2","tx_adw_transaction_detail_id":"48","created_date":"2022-10-29T09:35:07.098Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:07.098Z","updated_by":"SYSTEM","plan_code":"256","annual_premium":"24720.00","modal_premium":"2060.00","loan_amount":null,"maturity_amount":null,"survivor_amount":null,"finance_reward_amount":null,"surrender_amount":"12981.50","auto_surrender_amount":null,"pension_amount":null,"return_amount":null,"overdue_maturity_amount":null,"overdue_survivor_amount":null,"overdue_finance_reward_amount":null,"overdue_benefit_amount":null,"overdue_return_amount_ktb":null,"overdue_return_amount_bbl":null,"collection_type":"CASH","branch_source":"0001","branch_service":"0999","expense_date":"2021-09-30T17:00:00.000Z","mode_of_payment":"1","receipt_no":null,"interest_amount":null,"policy_due_date":"2039-08-29T17:00:00.000Z","contract_start_date":"2019-08-29T17:00:00.000Z","paid_date":"2021-09-30T17:00:00.000Z","lapse":null,"cenpay_reject_amount":null,"advance_maturity_amount":null,"advance_survivor_amount":null,"advance_finance_reward_amount":null,"cheque_returned_amount":null,"branch_source_acc":"9005","payment_channel":null,"advance_payment_condition_amount":null,"adjust_auto_surrender_amount":null,"overdue_auto_surrender_amount":null,"auto_surrender_pension_amount":null,"investment_liabilities_gl_amount":null,"return_amount_net":null,"adjust_overdue_auto_surrender_amount":null,"adjust_overdue_survivor_amount":null,"adjust_survivor_amount":null,"accrued_policy_surrender":null,"apl_surrender_pension":null,"accrued_pension":null,"accrued_pension_non_guarantee":null,"cenpay_cheque_return":null,"other_debt_policy":null,"investment_liabilities_fund_amount":null,"pension_non_guarantee_amount":null,"dividend_ministry_insurance":null,"cheque_no":null,"pending_payment_amount":null,"unpaid_policyholder_dividends":null,"overdue_return_amount":null,"sap_voucher_no":null,"slip_no":null,"branch_register":null,"register_no":null}
```
</details>

### `public.tx_adw_claim_detail` — rows: 4841229

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | created_date | timestamp without time zone | N |
| 4 | created_by | character varying(50) | N |
| 5 | updated_date | timestamp without time zone | Y |
| 6 | updated_by | character varying(50) | Y |
| 7 | plan_code | character varying(10) | Y |
| 8 | due_date | date | Y |
| 9 | annual_premium | numeric(15,2) | Y |
| 10 | modal_premium | numeric(15,2) | Y |
| 11 | life_amount | numeric(15,2) | Y |
| 12 | acc_amount | numeric(15,2) | Y |
| 13 | accn_amount | numeric(15,2) | Y |
| 14 | hc_amount | numeric(15,2) | Y |
| 15 | tpd_amount | numeric(15,2) | Y |
| 16 | rt_amount | numeric(15,2) | Y |
| 17 | loan_amount | numeric(15,2) | Y |
| 18 | overdue_life_amount | numeric(15,2) | Y |
| 19 | overdue_acc_amount | numeric(15,2) | Y |
| 20 | overdue_rt_amount | numeric(15,2) | Y |
| 21 | overdue_accn_amount | numeric(15,2) | Y |
| 22 | overdue_hc_amount | numeric(15,2) | Y |
| 23 | collection_type | character varying(10) | Y |
| 24 | branch_source | character varying(4) | Y |
| 25 | branch_service | character varying(4) | Y |
| 26 | claim_no | character varying(25) | Y |
| 27 | claim_type | character varying(100) | Y |
| 28 | request_date | date | Y |
| 29 | claim_event_date | date | Y |
| 30 | claim_report_date | date | Y |
| 31 | claim_status | character varying(50) | Y |
| 32 | approve_date | date | Y |
| 33 | mode_of_payment | numeric(3,0) | Y |
| 34 | claim_paid_date | date | Y |
| 35 | child_amount | numeric(15,2) | Y |
| 36 | funeral_amount | numeric(15,2) | Y |
| 37 | overdue_funeral_amount | numeric(15,2) | Y |
| 38 | overdue_child_amount | numeric(15,2) | Y |
| 39 | overdue_hc_accrued_amount | numeric(15,2) | Y |
| 40 | overdue_rt_accrued_amount | numeric(15,2) | Y |
| 41 | overdue_acc_accrued_amount | numeric(15,2) | Y |
| 42 | overdue_life_accrued_amount | numeric(15,2) | Y |
| 43 | overdue_funeral_accrued_amount | numeric(15,2) | Y |
| 44 | overdue_child_accrued_amount | numeric(15,2) | Y |
| 45 | current_sum_assured | numeric(15,2) | Y |
| 46 | investment_component | numeric(15,2) | Y |
| 47 | contract_start_date | date | Y |
| 48 | avat_death_event | numeric(15,2) | Y |
| 49 | surrender_charge_at_death_event | numeric(15,2) | Y |
| 50 | surrender_value | numeric(15,2) | Y |
| 51 | actual_sum_assured | numeric(15,2) | Y |
| 52 | branch_source_acc | character varying(4) | Y |
| 53 | provision_life_amount | numeric(15,2) | Y |
| 54 | approve_paid_per_beneficiary_date | date | Y |
| 55 | surrender_charge_rate_at_death_event | numeric(15,2) | Y |
| 56 | investment_liabilities_fund_amount | numeric(15,2) | Y |
| 57 | investment_liabilities_gl_amount | numeric(15,2) | Y |
| 58 | provision_acc_amount | numeric(15,2) | Y |
| 59 | provision_accn_amount | numeric(15,2) | Y |
| 60 | provision_hc_amount | numeric(15,2) | Y |
| 61 | provision_child_amount | numeric(15,2) | Y |
| 62 | provision_tpd_amount | numeric(15,2) | Y |
| 63 | certificate_no | character varying(50) | Y |
| 64 | claim_age | numeric(3,0) | Y |
| 65 | claim_sex | character varying(10) | Y |
| 66 | claim_type_name | character varying(255) | Y |
| 67 | paid_amount_life | numeric(15,2) | Y |
| 68 | paid_amount_accident_death | numeric(15,2) | Y |
| 69 | paid_amount_med_accident | numeric(15,2) | Y |
| 70 | paid_amount_tpd | numeric(15,2) | Y |
| 71 | paid_amount_ipd | numeric(15,2) | Y |
| 72 | paid_amount_opd | numeric(15,2) | Y |
| 73 | paid_amount_dental | numeric(15,2) | Y |
| 74 | paid_amount_other | numeric(15,2) | Y |
| 75 | return_premium | numeric(15,2) | Y |
| 76 | provision_funeral_amount | numeric(15,2) | Y |
| 77 | overdue_tpd_amount | numeric(15,2) | Y |
| 78 | pension_amount | numeric(15,2) | Y |
| 79 | overdue_pension_amount | numeric(15,2) | Y |
| 80 | accnd_amount | numeric(15,2) | Y |
| 81 | provision_accnd_amount | numeric(15,2) | Y |
| 82 | exgratia | numeric(15,2) | Y |
| 83 | return_life_amount | numeric(15,2) | Y |
| 84 | return_acc_amount | numeric(15,2) | Y |
| 85 | return_accn_amount | numeric(15,2) | Y |
| 86 | return_accnd_amount | numeric(15,2) | Y |
| 87 | return_hc_amount | numeric(15,2) | Y |
| 88 | return_child_amount | numeric(15,2) | Y |
| 89 | return_tpd_amount | numeric(15,2) | Y |
| 90 | return_funeral_amount | numeric(15,2) | Y |
| 91 | return_pension_amount | numeric(15,2) | Y |
| 92 | provision_pension_amount | numeric(15,2) | Y |
| 93 | overdue_exgratia | numeric(15,2) | Y |
| 94 | overdue_accnd_amount | numeric(15,2) | Y |
| 95 | overdue_accn_accrued_amount | numeric(15,2) | Y |
| 96 | provision_rt_amount | numeric(15,2) | Y |
| 97 | ex_gratia_amount | numeric(15,2) | Y |
| 98 | pb_tpd_amount | numeric(15,2) | Y |
| 99 | pb_life_amount | numeric(15,2) | Y |
| 100 | wp_amount | numeric(15,2) | Y |
| 101 | claim_coverage_code | character varying(10) | Y |
| 102 | claim_coverage_name | character varying(500) | Y |
| 103 | unhealth_benefit_name | character varying(255) | Y |
| 104 | benefit_state | character varying(255) | Y |
| 105 | payment_date | date | Y |
| 106 | no_paid_life_amount | numeric(15,2) | Y |
| 107 | no_paid_acc_amount | numeric(15,2) | Y |
| 108 | no_paid_pension_amount | numeric(15,2) | Y |
| 109 | register_no | character varying(25) | Y |
| 110 | branch_register | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"id":"9964586","tx_adw_transaction_detail_id":"77108739","created_date":"2024-09-03T08:32:38.668Z","created_by":"SYSTEM","updated_date":"2024-09-03T08:32:38.668Z","updated_by":"SYSTEM","plan_code":"39","due_date":null,"annual_premium":"24938.00","modal_premium":"24938.00","life_amount":null,"acc_amount":null,"accn_amount":null,"hc_amount":"13152.60","tpd_amount":null,"rt_amount":null,"loan_amount":null,"overdue_life_amount":null,"overdue_acc_amount":null,"overdue_rt_amount":null,"overdue_accn_amount":null,"overdue_hc_amount":null,"collection_type":null,"branch_source":"6300","branch_service":"0001","claim_no":"202403000896","claim_type":"HS","request_date":"2024-03-07T17:00:00.000Z","claim_event_date":"2024-03-07T17:00:00.000Z","claim_report_date":"2024-03-07T17:00:00.000Z","claim_status":"PROVISION","approve_date":null,"mode_of_payment":"12","claim_paid_date":null,"child_amount":null,"funeral_amount":null,"overdue_funeral_amount":null,"overdue_child_amount":null,"overdue_hc_accrued_amount":null,"overdue_rt_accrued_amount":null,"overdue_acc_accrued_amount":null,"overdue_life_accrued_amount":null,"overdue_funeral_accrued_amount":null,"overdue_child_accrued_amount":null,"current_sum_assured":null,"investment_component":null,"contract_start_date":"2022-07-14T17:00:00.000Z","avat_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null,"actual_sum_assured":null,"branch_source_acc":"6300","provision_life_amount":null,"approve_paid_per_beneficiary_date":null,"surrender_charge_rate_at_death_event":null,"investment_liabilities_fund_amount":null,"investment_liabilities_gl_amount":null,"provision_acc_amount":null,"provision_accn_amount":null,"provision_hc_amount":"13152.60","provision_child_amount":null,"provision_tpd_amount":null,"certificate_no":null,"claim_age":null,"claim_sex":null,"claim_type_name":null,"paid_amount_life":null,"paid_amount_accident_death":null,"paid_amount_med_accident":null,"paid_amount_tpd":null,"paid_amount_ipd":null,"paid_amount_opd":null,"paid_amount_dental":null,"paid_amount_other":null,"return_premium":null,"provision_funeral_amount":null,"overdue_tpd_amount":null,"pension_amount":null,"overdue_pension_amount":null,"accnd_amount":null,"provision_accnd_amount":null,"exgratia":null,"return_life_amount":null,"return_acc_amount":null,"return_accn_amount":null,"return_accnd_amount":null,"return_hc_amount":null,"return_child_amount":null,"return_tpd_amount":null,"return_funeral_amount":null,"return_pension_amount":null,"provision_pension_amount":null,"overdue_exgratia":null,"overdue_accnd_amount":null,"overdue_accn_accrued_amount":null,"provision_rt_amount":null,"ex_gratia_amount":null,"pb_tpd_amount":null,"pb_life_amount":null,"wp_amount":null,"claim_coverage_code":null,"claim_coverage_name":null,"unhealth_benefit_name":null,"benefit_state":null,"payment_date":null,"no_paid_life_amount":null,"no_paid_acc_amount":null,"no_paid_pension_amount":null,"register_no":null,"branch_register":null}
{"id":"9964587","tx_adw_transaction_detail_id":"77108739","created_date":"2024-09-03T08:32:38.668Z","created_by":"SYSTEM","updated_date":"2024-09-03T08:32:38.668Z","updated_by":"SYSTEM","plan_code":"39","due_date":null,"annual_premium":"24938.00","modal_premium":"24938.00","life_amount":null,"acc_amount":null,"accn_amount":null,"hc_amount":"9966.10","tpd_amount":null,"rt_amount":null,"loan_amount":null,"overdue_life_amount":null,"overdue_acc_amount":null,"overdue_rt_amount":null,"overdue_accn_amount":null,"overdue_hc_amount":null,"collection_type":null,"branch_source":"6300","branch_service":"0001","claim_no":"202404002104","claim_type":"HS","request_date":"2024-04-18T17:00:00.000Z","claim_event_date":"2024-04-18T17:00:00.000Z","claim_report_date":"2024-04-18T17:00:00.000Z","claim_status":"PROVISION","approve_date":null,"mode_of_payment":"12","claim_paid_date":null,"child_amount":null,"funeral_amount":null,"overdue_funeral_amount":null,"overdue_child_amount":null,"overdue_hc_accrued_amount":null,"overdue_rt_accrued_amount":null,"overdue_acc_accrued_amount":null,"overdue_life_accrued_amount":null,"overdue_funeral_accrued_amount":null,"overdue_child_accrued_amount":null,"current_sum_assured":null,"investment_component":null,"contract_start_date":"2022-07-14T17:00:00.000Z","avat_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null,"actual_sum_assured":null,"branch_source_acc":"6300","provision_life_amount":null,"approve_paid_per_beneficiary_date":null,"surrender_charge_rate_at_death_event":null,"investment_liabilities_fund_amount":null,"investment_liabilities_gl_amount":null,"provision_acc_amount":null,"provision_accn_amount":null,"provision_hc_amount":"9966.10","provision_child_amount":null,"provision_tpd_amount":null,"certificate_no":null,"claim_age":null,"claim_sex":null,"claim_type_name":null,"paid_amount_life":null,"paid_amount_accident_death":null,"paid_amount_med_accident":null,"paid_amount_tpd":null,"paid_amount_ipd":null,"paid_amount_opd":null,"paid_amount_dental":null,"paid_amount_other":null,"return_premium":null,"provision_funeral_amount":null,"overdue_tpd_amount":null,"pension_amount":null,"overdue_pension_amount":null,"accnd_amount":null,"provision_accnd_amount":null,"exgratia":null,"return_life_amount":null,"return_acc_amount":null,"return_accn_amount":null,"return_accnd_amount":null,"return_hc_amount":null,"return_child_amount":null,"return_tpd_amount":null,"return_funeral_amount":null,"return_pension_amount":null,"provision_pension_amount":null,"overdue_exgratia":null,"overdue_accnd_amount":null,"overdue_accn_accrued_amount":null,"provision_rt_amount":null,"ex_gratia_amount":null,"pb_tpd_amount":null,"pb_life_amount":null,"wp_amount":null,"claim_coverage_code":null,"claim_coverage_name":null,"unhealth_benefit_name":null,"benefit_state":null,"payment_date":null,"no_paid_life_amount":null,"no_paid_acc_amount":null,"no_paid_pension_amount":null,"register_no":null,"branch_register":null}
```
</details>

### `public.tx_adw_claim_ri_detail` — rows: 304898

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | branch_source | character varying(4) | Y |
| 4 | branch_service | character varying(4) | Y |
| 5 | premium_type | character varying(20) | Y |
| 6 | collection_type | character varying(10) | Y |
| 7 | ri_support_bk_dt_id | character varying(50) | Y |
| 8 | period | character varying(50) | Y |
| 9 | ri_type | character varying(2) | Y |
| 10 | report_type | character varying(20) | Y |
| 11 | reinsurer | character varying(50) | N |
| 12 | treaty_code | character varying(50) | N |
| 13 | ri_mode_of_payment | character varying(15) | Y |
| 14 | ri_method | character varying(15) | Y |
| 15 | cpa_rider_flag | character varying(1) | Y |
| 16 | facultative | character varying(1) | Y |
| 17 | partner_code | character varying(50) | Y |
| 18 | policy_year | numeric(3,0) | Y |
| 19 | benefit_type | character varying(10) | Y |
| 20 | commencement_date | date | Y |
| 21 | claim_register_date | date | Y |
| 22 | claim_type | character varying(20) | Y |
| 23 | claim_no | character varying(50) | Y |
| 24 | ri_claim_status | character varying(20) | Y |
| 25 | approval_date | date | Y |
| 26 | ri_commencement_date | date | Y |
| 27 | ri_claim | numeric(25,3) | Y |
| 28 | ri_claim_expense | numeric(25,3) | Y |
| 29 | ri_sumassured | numeric(25,3) | Y |
| 30 | ri_previous_nar | numeric(25,3) | Y |
| 31 | ri_current_nar | numeric(25,3) | Y |
| 32 | total_nar | numeric(25,3) | Y |
| 33 | total_sr | numeric(25,3) | Y |
| 34 | remark | character varying(500) | Y |
| 35 | transaction_date | timestamp with time zone | N |
| 36 | foreign_local | character varying(1) | N |
| 37 | policy_type | character varying(10) | Y |
| 38 | created_date | timestamp with time zone | N |
| 39 | created_by | character varying(50) | N |
| 40 | updated_date | timestamp with time zone | Y |
| 41 | updated_by | character varying(50) | Y |
| 42 | branch_source_acc | character varying(4) | Y |
| 43 | ri_account_name | character varying(255) | Y |
| 44 | plan_type | character varying(10) | Y |
| 45 | ri_profit_com | numeric(25,2) | Y |
| 46 | ri_period | character varying(6) | Y |
| 47 | claim_life | numeric(25,2) | Y |
| 48 | claim_add | numeric(25,2) | Y |
| 49 | claim_tpd | numeric(25,2) | Y |
| 50 | claim_medical | numeric(25,2) | Y |
| 51 | quarter_year | character varying(4) | Y |
| 52 | quarter_period | character varying(2) | Y |
| 53 | sale_option | character varying(100) | Y |
| 54 | payfrom | date | Y |
| 55 | payto | date | Y |
| 56 | movement | character varying(1) | Y |
| 57 | claim_med_acc | numeric(25,2) | Y |
| 58 | claim_ipd | numeric(25,2) | Y |
| 59 | claim_opd | numeric(25,2) | Y |
| 60 | claim_dental | numeric(25,2) | Y |
| 61 | claim_dismemberment | numeric(25,2) | Y |
| 62 | claim_return_prem | numeric(25,2) | Y |
| 63 | claim_exp | numeric(25,2) | Y |
| 64 | claim_recovery_date | date | Y |
| 65 | experience_refund | numeric(25,2) | Y |
| 66 | total_dividend | numeric(25,2) | Y |
| 67 | sale_channel_desc | character varying(50) | Y |
| 68 | mps_flag | boolean | Y |
| 69 | facult_flag | boolean | Y |
| 70 | paid_amount_other | numeric(25,2) | Y |
| 71 | payment_date | date | Y |
| 72 | register_no | character varying(25) | Y |
| 73 | branch_register | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"id":"3980","tx_adw_transaction_detail_id":"19373842","branch_source":"8300","branch_service":"03","premium_type":null,"collection_type":null,"ri_support_bk_dt_id":null,"period":"202307","ri_type":"C","report_type":"","reinsurer":"Gibraltar","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":null,"partner_code":null,"policy_year":"10","benefit_type":null,"commencement_date":"2017-07-17T17:00:00.000Z","claim_register_date":null,"claim_type":null,"claim_no":null,"ri_claim_status":null,"approval_date":null,"ri_commencement_date":null,"ri_claim":null,"ri_claim_expense":null,"ri_sumassured":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":null,"total_sr":null,"remark":null,"transaction_date":"2023-08-08T02:40:55.385Z","foreign_local":"F","policy_type":null,"created_date":"2023-08-08T02:41:04.449Z","created_by":"SYSTEM","updated_date":"2023-08-08T02:41:04.449Z","updated_by":"SYSTEM","branch_source_acc":null,"ri_account_name":null,"plan_type":null,"ri_profit_com":null,"ri_period":null,"claim_life":"7800.00","claim_add":"0.00","claim_tpd":null,"claim_medical":null,"quarter_year":"2023","quarter_period":"Q3","sale_option":"ช่องทางตัวแทน","payfrom":"2023-07-18T17:00:00.000Z","payto":"2024-07-17T17:00:00.000Z","movement":"A","claim_med_acc":null,"claim_ipd":null,"claim_opd":null,"claim_dental":null,"claim_dismemberment":null,"claim_return_prem":null,"claim_exp":null,"claim_recovery_date":null,"experience_refund":"0.00","total_dividend":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"paid_amount_other":null,"payment_date":null,"register_no":null,"branch_register":null}
{"id":"3981","tx_adw_transaction_detail_id":"19373842","branch_source":"8300","branch_service":"03","premium_type":null,"collection_type":"ACCRUAL","ri_support_bk_dt_id":null,"period":"202307","ri_type":"E","report_type":"","reinsurer":"Gibraltar","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":null,"partner_code":null,"policy_year":"10","benefit_type":null,"commencement_date":"2017-07-17T17:00:00.000Z","claim_register_date":null,"claim_type":null,"claim_no":null,"ri_claim_status":null,"approval_date":null,"ri_commencement_date":null,"ri_claim":null,"ri_claim_expense":null,"ri_sumassured":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":null,"total_sr":null,"remark":null,"transaction_date":"2023-08-08T02:40:55.385Z","foreign_local":"F","policy_type":null,"created_date":"2023-08-08T02:41:04.449Z","created_by":"SYSTEM","updated_date":"2023-08-08T02:41:04.449Z","updated_by":"SYSTEM","branch_source_acc":null,"ri_account_name":null,"plan_type":null,"ri_profit_com":null,"ri_period":null,"claim_life":"7800.00","claim_add":"0.00","claim_tpd":null,"claim_medical":null,"quarter_year":"2023","quarter_period":"Q3","sale_option":"ช่องทางตัวแทน","payfrom":"2023-07-18T17:00:00.000Z","payto":"2024-07-17T17:00:00.000Z","movement":"A","claim_med_acc":null,"claim_ipd":null,"claim_opd":null,"claim_dental":null,"claim_dismemberment":null,"claim_return_prem":null,"claim_exp":null,"claim_recovery_date":null,"experience_refund":"0.00","total_dividend":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"paid_amount_other":null,"payment_date":null,"register_no":null,"branch_register":null}
```
</details>

### `public.tx_adw_commission_ov_detail` — rows: 13665854

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | receipt_no | character varying(16) | Y |
| 4 | branch_source | character varying(4) | Y |
| 5 | branch_service | character varying(4) | Y |
| 6 | payment_date | date | Y |
| 7 | premium_type | character varying(10) | Y |
| 8 | collection_type | character varying(10) | Y |
| 9 | prem_com | numeric(15,2) | Y |
| 10 | commission_rate | numeric(15,2) | Y |
| 11 | created_date | timestamp without time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp without time zone | Y |
| 14 | updated_by | character varying(50) | Y |
| 15 | plan_code | character varying(10) | Y |
| 16 | manager_conservation_second_year | numeric(22,3) | Y |
| 17 | premium_collection | numeric(22,3) | Y |
| 18 | bonus_new_agent_supervisor | numeric(22,3) | Y |
| 19 | supervisor_bonus | numeric(22,3) | Y |
| 20 | supervisor_recruitment | numeric(22,3) | Y |
| 21 | supervisor_recruitment_agent_old | numeric(22,3) | Y |
| 22 | manager_improvement | numeric(22,3) | Y |
| 23 | manager_team_management | numeric(22,3) | Y |
| 24 | manager_recruitment | numeric(22,3) | Y |
| 25 | ago_team_management_first_year | numeric(22,3) | Y |
| 26 | ago_team_management | numeric(22,3) | Y |
| 27 | ago_team_management_first_year_3 | numeric(22,3) | Y |
| 28 | premium_due_date | date | Y |
| 29 | mode_of_payment | numeric(3,0) | Y |
| 30 | annual_premium | numeric(15,2) | Y |
| 31 | modal_premium | numeric(15,2) | Y |
| 32 | commission_first_year | numeric(22,3) | Y |
| 33 | commission_next_year | numeric(22,3) | Y |
| 34 | conservation | numeric(22,3) | Y |
| 35 | sales_manager_team_management | numeric(22,3) | Y |
| 36 | sales_manager_conservation_second_year | numeric(22,3) | Y |
| 37 | sales_manager_recruitment | numeric(22,3) | Y |
| 38 | ov_amount | numeric(22,3) | Y |
| 39 | team_management | numeric(22,3) | Y |
| 40 | recruitment | numeric(22,3) | Y |
| 41 | accrued_amount | numeric(22,3) | Y |
| 42 | asst_manager_team_management | numeric(22,3) | Y |
| 43 | supervisor_conservation | numeric(22,3) | Y |
| 44 | contract_start_date | date | Y |
| 45 | manager_recruitment_asst_to_manager | numeric(22,3) | Y |
| 46 | manager_recruitment_old | numeric(22,3) | Y |
| 47 | commission_top_up | numeric(22,3) | Y |
| 48 | service_charge_amount | numeric(22,3) | Y |
| 49 | branch_source_acc | character varying(4) | Y |
| 50 | pay_from | date | Y |
| 51 | pay_to | date | Y |
| 52 | actual_commission_amount_life | numeric(22,3) | Y |
| 53 | actual_commission_amount_accidentdeath | numeric(22,3) | Y |
| 54 | actual_commission_amount_medaccident | numeric(22,3) | Y |
| 55 | actual_commission_amount_tpd | numeric(22,3) | Y |
| 56 | actual_commission_amount_ipd | numeric(22,3) | Y |
| 57 | actual_commission_amount_opd | numeric(22,3) | Y |
| 58 | actual_commission_amount_dental | numeric(22,3) | Y |
| 59 | actual_commission_amount_other | numeric(22,3) | Y |
| 60 | commission_ov_type | character varying(15) | Y |
| 61 | actual_premium_amount_life | numeric(22,3) | Y |
| 62 | actual_premium_amount_accidentdeath | numeric(22,3) | Y |
| 63 | actual_premium_amount_medaccident | numeric(22,3) | Y |
| 64 | actual_premium_amount_tpd | numeric(22,3) | Y |
| 65 | actual_premium_amount_ipd | numeric(22,3) | Y |
| 66 | actual_premium_amount_opd | numeric(22,3) | Y |
| 67 | actual_premium_amount_dental | numeric(22,3) | Y |
| 68 | actual_premium_amount_other | numeric(22,3) | Y |
| 69 | io_bonus | character varying(10) | Y |
| 70 | io_service_charge | character varying(10) | Y |
| 71 | advance_commission | numeric(22,3) | Y |
| 72 | commission_once | numeric(22,3) | Y |
| 73 | event_next_year_amount | numeric(22,3) | Y |
| 74 | salary_kpi | numeric(22,3) | Y |
| 75 | agent_event_amount | numeric(22,3) | Y |
| 76 | event_life_amount | numeric(15,2) | Y |
| 77 | reward | numeric(15,2) | Y |
| 78 | reward_next_year | numeric(15,2) | Y |
| 79 | guarantee | numeric(15,2) | Y |
| 80 | supervisor_bonus_quarter | numeric(15,2) | Y |
| 81 | supervisor_bonus_year | numeric(15,2) | Y |
| 82 | supervisor_recruitment_agent | numeric(15,2) | Y |
| 83 | slip_no | character varying(14) | Y |
| 84 | branch_register | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"id":"31391433","tx_adw_transaction_detail_id":"66325889","receipt_no":null,"branch_source":"1103","branch_service":"0001","payment_date":null,"premium_type":null,"collection_type":null,"prem_com":null,"commission_rate":null,"created_date":"2024-08-01T06:09:47.642Z","created_by":"SYSTEM","updated_date":"2024-08-01T06:09:47.642Z","updated_by":"SYSTEM","plan_code":"539","manager_conservation_second_year":null,"premium_collection":null,"bonus_new_agent_supervisor":null,"supervisor_bonus":null,"supervisor_recruitment":null,"supervisor_recruitment_agent_old":null,"manager_improvement":null,"manager_team_management":null,"manager_recruitment":null,"ago_team_management_first_year":null,"ago_team_management":null,"ago_team_management_first_year_3":null,"premium_due_date":null,"mode_of_payment":"12","annual_premium":"16360.00","modal_premium":"16360.00","commission_first_year":"0.000","commission_next_year":"981.600","conservation":null,"sales_manager_team_management":null,"sales_manager_conservation_second_year":null,"sales_manager_recruitment":null,"ov_amount":null,"team_management":null,"recruitment":null,"accrued_amount":"981.600","asst_manager_team_management":null,"supervisor_conservation":null,"contract_start_date":"2023-05-28T17:00:00.000Z","manager_recruitment_asst_to_manager":null,"manager_recruitment_old":null,"commission_top_up":null,"service_charge_amount":null,"branch_source_acc":"1103","pay_from":null,"pay_to":null,"actual_commission_amount_life":null,"actual_commission_amount_accidentdeath":null,"actual_commission_amount_medaccident":null,"actual_commission_amount_tpd":null,"actual_commission_amount_ipd":null,"actual_commission_amount_opd":null,"actual_commission_amount_dental":null,"actual_commission_amount_other":null,"commission_ov_type":null,"actual_premium_amount_life":null,"actual_premium_amount_accidentdeath":null,"actual_premium_amount_medaccident":null,"actual_premium_amount_tpd":null,"actual_premium_amount_ipd":null,"actual_premium_amount_opd":null,"actual_premium_amount_dental":null,"actual_premium_amount_other":null,"io_bonus":null,"io_service_charge":null,"advance_commission":null,"commission_once":null,"event_next_year_amount":null,"salary_kpi":null,"agent_event_amount":"0.000","event_life_amount":null,"reward":null,"reward_next_year":null,"guarantee":null,"supervisor_bonus_quarter":null,"supervisor_bonus_year":null,"supervisor_recruitment_agent":null,"slip_no":null,"branch_register":null}
{"id":"31391434","tx_adw_transaction_detail_id":"66325888","receipt_no":null,"branch_source":"1103","branch_service":"0001","payment_date":null,"premium_type":null,"collection_type":null,"prem_com":null,"commission_rate":null,"created_date":"2024-08-01T06:09:47.642Z","created_by":"SYSTEM","updated_date":"2024-08-01T06:09:47.642Z","updated_by":"SYSTEM","plan_code":"E26","manager_conservation_second_year":null,"premium_collection":null,"bonus_new_agent_supervisor":null,"supervisor_bonus":null,"supervisor_recruitment":null,"supervisor_recruitment_agent_old":null,"manager_improvement":null,"manager_team_management":null,"manager_recruitment":null,"ago_team_management_first_year":null,"ago_team_management":null,"ago_team_management_first_year_3":null,"premium_due_date":null,"mode_of_payment":"12","annual_premium":"20460.00","modal_premium":"20460.00","commission_first_year":"0.000","commission_next_year":"2046.000","conservation":null,"sales_manager_team_management":null,"sales_manager_conservation_second_year":null,"sales_manager_recruitment":null,"ov_amount":null,"team_management":null,"recruitment":null,"accrued_amount":"2046.000","asst_manager_team_management":null,"supervisor_conservation":null,"contract_start_date":"2023-05-19T17:00:00.000Z","manager_recruitment_asst_to_manager":null,"manager_recruitment_old":null,"commission_top_up":null,"service_charge_amount":null,"branch_source_acc":"1103","pay_from":null,"pay_to":null,"actual_commission_amount_life":null,"actual_commission_amount_accidentdeath":null,"actual_commission_amount_medaccident":null,"actual_commission_amount_tpd":null,"actual_commission_amount_ipd":null,"actual_commission_amount_opd":null,"actual_commission_amount_dental":null,"actual_commission_amount_other":null,"commission_ov_type":null,"actual_premium_amount_life":null,"actual_premium_amount_accidentdeath":null,"actual_premium_amount_medaccident":null,"actual_premium_amount_tpd":null,"actual_premium_amount_ipd":null,"actual_premium_amount_opd":null,"actual_premium_amount_dental":null,"actual_premium_amount_other":null,"io_bonus":null,"io_service_charge":null,"advance_commission":null,"commission_once":null,"event_next_year_amount":null,"salary_kpi":null,"agent_event_amount":"0.000","event_life_amount":null,"reward":null,"reward_next_year":null,"guarantee":null,"supervisor_bonus_quarter":null,"supervisor_bonus_year":null,"supervisor_recruitment_agent":null,"slip_no":null,"branch_register":null}
```
</details>

### `public.tx_adw_commission_ov_ri_detail` — rows: 998525

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | branch_source | character varying(4) | Y |
| 4 | branch_service | character varying(4) | Y |
| 5 | premium_type | character varying(20) | Y |
| 6 | collection_type | character varying(10) | Y |
| 7 | ri_support_bk_dt_id | character varying(50) | Y |
| 8 | period | character varying(50) | Y |
| 9 | ri_type | character varying(2) | Y |
| 10 | report_type | character varying(20) | Y |
| 11 | reinsurer | character varying(50) | N |
| 12 | treaty_code | character varying(50) | N |
| 13 | ri_mode_of_payment | character varying(15) | Y |
| 14 | ri_method | character varying(15) | Y |
| 15 | cpa_rider_flag | character varying(1) | Y |
| 16 | facultative | character varying(1) | Y |
| 17 | partner_code | character varying(50) | Y |
| 18 | policy_year | numeric(3,0) | Y |
| 19 | benefit_type | character varying(10) | Y |
| 20 | commencement_date | date | Y |
| 21 | approval_date | date | Y |
| 22 | ri_commencement_date | date | Y |
| 23 | ri_commission | numeric(25,3) | Y |
| 24 | ri_commission_refund | numeric(25,3) | Y |
| 25 | ri_sumassured | numeric(25,3) | Y |
| 26 | ri_previous_nar | numeric(25,3) | Y |
| 27 | ri_current_nar | numeric(25,3) | Y |
| 28 | total_nar | numeric(25,3) | Y |
| 29 | total_sr | numeric(25,3) | Y |
| 30 | remark | character varying(500) | Y |
| 31 | transaction_date | timestamp with time zone | N |
| 32 | foreign_local | character varying(1) | N |
| 33 | policy_type | character varying(10) | Y |
| 34 | created_date | timestamp with time zone | N |
| 35 | created_by | character varying(50) | N |
| 36 | updated_date | timestamp with time zone | Y |
| 37 | updated_by | character varying(50) | Y |
| 38 | branch_source_acc | character varying(4) | Y |
| 39 | ri_account_name | character varying(255) | Y |
| 40 | plan_type | character varying(10) | Y |
| 41 | ri_profit_com | numeric(25,2) | Y |
| 42 | ri_period | character varying(6) | Y |
| 43 | comm_life | numeric(25,2) | Y |
| 44 | comm_add | numeric(25,2) | Y |
| 45 | comm_tpd | numeric(25,2) | Y |
| 46 | comm_med | numeric(25,2) | Y |
| 47 | quarter_year | character varying(4) | Y |
| 48 | quarter_period | character varying(2) | Y |
| 49 | sale_option | character varying(100) | Y |
| 50 | payfrom | date | Y |
| 51 | payto | date | Y |
| 52 | movement | character varying(1) | Y |
| 53 | comm_med_acc | numeric(25,2) | Y |
| 54 | comm_ipd | numeric(25,2) | Y |
| 55 | comm_opd | numeric(25,2) | Y |
| 56 | comm_dental | numeric(25,2) | Y |
| 57 | experience_refund | numeric(25,2) | Y |
| 58 | total_dividend | numeric(25,2) | Y |
| 59 | comm_refund_med_acc | numeric(25,2) | Y |
| 60 | comm_refund_ipd | numeric(25,2) | Y |
| 61 | comm_refund_opd | numeric(25,2) | Y |
| 62 | comm_refund_dental | numeric(25,2) | Y |
| 63 | comm_refund_life | numeric(25,2) | Y |
| 64 | comm_refund_add | numeric(25,2) | Y |
| 65 | comm_refund_tpd | numeric(25,2) | Y |
| 66 | sale_channel_desc | character varying(50) | Y |
| 67 | mps_flag | boolean | Y |
| 68 | facult_flag | boolean | Y |
| 69 | branch_register | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1890928","tx_adw_transaction_detail_id":"66931139","branch_source":"5600","branch_service":"0001","premium_type":null,"collection_type":null,"ri_support_bk_dt_id":null,"period":null,"ri_type":"E","report_type":"Renew","reinsurer":"Toa re","treaty_code":"TOA_Ind_CB_Rider","ri_mode_of_payment":"1","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":"N","partner_code":"1000002","policy_year":"13","benefit_type":"ADD","commencement_date":"2011-09-21T17:00:00.000Z","approval_date":"2024-01-15T17:00:00.000Z","ri_commencement_date":"2011-09-21T17:00:00.000Z","ri_commission":"227.250","ri_commission_refund":null,"ri_sumassured":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":"1000000.000","total_sr":"500000.000","remark":null,"transaction_date":"2024-08-01T08:44:48.570Z","foreign_local":"F","policy_type":null,"created_date":"2024-08-01T09:04:26.265Z","created_by":"SYSTEM","updated_date":"2024-08-01T09:04:26.265Z","updated_by":"SYSTEM","branch_source_acc":"5600","ri_account_name":"INDIVIDUAL REINSURANCE - CB RIDER","plan_type":null,"ri_profit_com":null,"ri_period":null,"comm_life":null,"comm_add":null,"comm_tpd":null,"comm_med":null,"quarter_year":null,"quarter_period":null,"sale_option":null,"payfrom":null,"payto":null,"movement":null,"comm_med_acc":null,"comm_ipd":null,"comm_opd":null,"comm_dental":null,"experience_refund":null,"total_dividend":null,"comm_refund_med_acc":null,"comm_refund_ipd":null,"comm_refund_opd":null,"comm_refund_dental":null,"comm_refund_life":null,"comm_refund_add":null,"comm_refund_tpd":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"branch_register":null}
{"id":"1890929","tx_adw_transaction_detail_id":"66931140","branch_source":"3000","branch_service":"0001","premium_type":null,"collection_type":null,"ri_support_bk_dt_id":null,"period":null,"ri_type":"E","report_type":"Renew","reinsurer":"Toa re","treaty_code":"TOA_Ind_CB_Rider","ri_mode_of_payment":"1","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":"N","partner_code":"1000002","policy_year":"13","benefit_type":"ADD","commencement_date":"2011-02-23T17:00:00.000Z","approval_date":"2024-01-15T17:00:00.000Z","ri_commencement_date":"2011-02-23T17:00:00.000Z","ri_commission":"84.760","ri_commission_refund":null,"ri_sumassured":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":"1000000.000","total_sr":"500000.000","remark":null,"transaction_date":"2024-08-01T08:44:48.570Z","foreign_local":"F","policy_type":null,"created_date":"2024-08-01T09:04:26.265Z","created_by":"SYSTEM","updated_date":"2024-08-01T09:04:26.265Z","updated_by":"SYSTEM","branch_source_acc":"3000","ri_account_name":"INDIVIDUAL REINSURANCE - CB RIDER","plan_type":null,"ri_profit_com":null,"ri_period":null,"comm_life":null,"comm_add":null,"comm_tpd":null,"comm_med":null,"quarter_year":null,"quarter_period":null,"sale_option":null,"payfrom":null,"payto":null,"movement":null,"comm_med_acc":null,"comm_ipd":null,"comm_opd":null,"comm_dental":null,"experience_refund":null,"total_dividend":null,"comm_refund_med_acc":null,"comm_refund_ipd":null,"comm_refund_opd":null,"comm_refund_dental":null,"comm_refund_life":null,"comm_refund_add":null,"comm_refund_tpd":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"branch_register":null}
```
</details>

### `public.tx_adw_double_entry_detail` — rows: 74732328

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_sap_double_entry_detail_id | bigint(64,0) | Y |
| 3 | tx_adw_premium_detail_id | bigint(64,0) | Y |
| 4 | tx_adw_commission_ov_detail_id | bigint(64,0) | Y |
| 5 | tx_adw_claim_detail_id | bigint(64,0) | Y |
| 6 | tx_adw_benefit_detail_id | bigint(64,0) | Y |
| 7 | tx_adw_investment_detail_id | bigint(64,0) | Y |
| 8 | tx_adw_agent_clawback_detail_id | bigint(64,0) | Y |
| 9 | tx_adw_other_income_detail_id | bigint(64,0) | Y |
| 10 | tx_adw_agent_credit_fee_detail_id | bigint(64,0) | Y |
| 11 | tx_adw_deposit_detail_id | bigint(64,0) | Y |
| 12 | tx_adw_agent_receivable_detail_id | bigint(64,0) | Y |
| 13 | tx_adw_operating_expense_detail_id | bigint(64,0) | Y |
| 14 | tx_adw_bank_ho_detail_id | bigint(64,0) | Y |
| 15 | tx_adw_bank_branch_detail_id | bigint(64,0) | Y |
| 16 | tx_adw_other_uw_expense_detail_id | bigint(64,0) | Y |
| 17 | tx_adw_other_asset_detail_id | bigint(64,0) | Y |
| 18 | tx_adw_other_liability_detail_id | bigint(64,0) | Y |
| 19 | gl_type | character varying(2) | Y |
| 20 | gl_code | character varying(8) | Y |
| 21 | gl_amount | numeric(15,2) | Y |
| 22 | business_area_code | character varying(10) | Y |
| 23 | business_line_code | character varying(10) | Y |
| 24 | cost_center_code | character varying(6) | Y |
| 25 | profit_center_code | character varying(6) | Y |
| 26 | created_date | timestamp without time zone | N |
| 27 | created_by | character varying(50) | N |
| 28 | updated_date | timestamp without time zone | Y |
| 29 | updated_by | character varying(50) | Y |
| 30 | tx_adw_undefined_detail_id | bigint(64,0) | Y |
| 31 | gl_name | character varying(255) | Y |
| 32 | model_type | character varying(50) | Y |
| 33 | tx_adw_other_income_fee_detail_id | bigint(64,0) | Y |
| 34 | event_code | character varying(25) | Y |
| 35 | comment | character varying(50) | Y |
| 36 | order_number | character varying(12) | Y |
| 37 | tx_adw_premium_ri_detail_id | bigint(64,0) | Y |
| 38 | tx_adw_commission_ov_ri_detail_id | bigint(64,0) | Y |
| 39 | tx_adw_claim_ri_detail_id | bigint(64,0) | Y |
| 40 | collection_type | character varying(10) | Y |
| 41 | posting_key | numeric(2,0) | Y |
| 42 | premium_type | character varying(20) | Y |
| 43 | loan_type | character varying(20) | Y |
| 44 | receive_payment_channel | character varying(30) | Y |
| 45 | type_of_payment | character varying(30) | Y |
| 46 | bundle | character varying(30) | Y |
| 47 | sun_costcenter | character varying(15) | Y |
| 48 | sun_io_fundcenter | character varying(15) | Y |
| 49 | sun_branch_service | character varying(15) | Y |
| 50 | sun_branch_owner | character varying(15) | Y |
| 51 | sun_subbusiness_line | character varying(15) | Y |

<details><summary>sample rows</summary>

```json
{"id":"138713567","tx_sap_double_entry_detail_id":null,"tx_adw_premium_detail_id":null,"tx_adw_commission_ov_detail_id":null,"tx_adw_claim_detail_id":null,"tx_adw_benefit_detail_id":null,"tx_adw_investment_detail_id":null,"tx_adw_agent_clawback_detail_id":null,"tx_adw_other_income_detail_id":null,"tx_adw_agent_credit_fee_detail_id":null,"tx_adw_deposit_detail_id":null,"tx_adw_agent_receivable_detail_id":null,"tx_adw_operating_expense_detail_id":null,"tx_adw_bank_ho_detail_id":"2112842","tx_adw_bank_branch_detail_id":null,"tx_adw_other_uw_expense_detail_id":null,"tx_adw_other_asset_detail_id":null,"tx_adw_other_liability_detail_id":null,"gl_type":"CR","gl_code":"12022210","gl_amount":"1497.58","business_area_code":"8300","business_line_code":"00","cost_center_code":null,"profit_center_code":null,"created_date":"2024-08-05T03:31:50.551Z","created_by":"SYSTEM","updated_date":"2024-08-05T03:31:50.551Z","updated_by":"SYSTEM","tx_adw_undefined_detail_id":null,"gl_name":"ธ กสิกรไทย (ถนนรัชดาภิเษก) 718-2-01659-9","model_type":"BANK_HO","tx_adw_other_income_fee_detail_id":null,"event_code":"INC_FIN_01","comment":null,"order_number":null,"tx_adw_premium_ri_detail_id":null,"tx_adw_commission_ov_ri_detail_id":null,"tx_adw_claim_ri_detail_id":null,"collection_type":null,"posting_key":"50","premium_type":null,"loan_type":null,"receive_payment_channel":"AGENT_INCOME","type_of_payment":null,"bundle":null,"sun_costcenter":null,"sun_io_fundcenter":null,"sun_branch_service":null,"sun_branch_owner":null,"sun_subbusiness_line":null}
{"id":"138713568","tx_sap_double_entry_detail_id":null,"tx_adw_premium_detail_id":null,"tx_adw_commission_ov_detail_id":null,"tx_adw_claim_detail_id":null,"tx_adw_benefit_detail_id":null,"tx_adw_investment_detail_id":null,"tx_adw_agent_clawback_detail_id":null,"tx_adw_other_income_detail_id":null,"tx_adw_agent_credit_fee_detail_id":null,"tx_adw_deposit_detail_id":null,"tx_adw_agent_receivable_detail_id":null,"tx_adw_operating_expense_detail_id":null,"tx_adw_bank_ho_detail_id":"2112524","tx_adw_bank_branch_detail_id":null,"tx_adw_other_uw_expense_detail_id":null,"tx_adw_other_asset_detail_id":null,"tx_adw_other_liability_detail_id":null,"gl_type":"CR","gl_code":"12022210","gl_amount":"12814.53","business_area_code":"8300","business_line_code":"00","cost_center_code":null,"profit_center_code":null,"created_date":"2024-08-05T03:31:50.551Z","created_by":"SYSTEM","updated_date":"2024-08-05T03:31:50.551Z","updated_by":"SYSTEM","tx_adw_undefined_detail_id":null,"gl_name":"ธ กสิกรไทย (ถนนรัชดาภิเษก) 718-2-01659-9","model_type":"BANK_HO","tx_adw_other_income_fee_detail_id":null,"event_code":"INC_FIN_01","comment":null,"order_number":null,"tx_adw_premium_ri_detail_id":null,"tx_adw_commission_ov_ri_detail_id":null,"tx_adw_claim_ri_detail_id":null,"collection_type":null,"posting_key":"50","premium_type":null,"loan_type":null,"receive_payment_channel":"AGENT_INCOME","type_of_payment":null,"bundle":null,"sun_costcenter":null,"sun_io_fundcenter":null,"sun_branch_service":null,"sun_branch_owner":null,"sun_subbusiness_line":null}
```
</details>

### `public.tx_adw_investment_detail` — rows: 5987541

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | created_date | timestamp without time zone | N |
| 4 | created_by | character varying(50) | N |
| 5 | updated_date | timestamp without time zone | Y |
| 6 | updated_by | character varying(50) | Y |
| 7 | branch_source | character varying(4) | Y |
| 8 | branch_service | character varying(4) | Y |
| 9 | payment_date | date | Y |
| 10 | premium_type | character varying(20) | Y |
| 11 | loan_interest_amount | numeric(15,2) | Y |
| 12 | premium_interest_amount | numeric(15,2) | Y |
| 13 | apl_interest_amount | numeric(15,2) | Y |
| 14 | apl_compound_interest_amount | numeric(15,2) | Y |
| 15 | loan_amount | numeric(15,2) | Y |
| 16 | apl_amount | numeric(15,2) | Y |
| 17 | collection_type | character varying(10) | Y |
| 18 | plan_code | character varying(10) | Y |
| 19 | receipt_no | character varying(16) | Y |
| 20 | branch_source_acc | character varying(4) | Y |
| 21 | adjust_loan_interest_amount | numeric(15,2) | Y |
| 22 | apl_accrued_compound_interest_amount | numeric(15,2) | Y |
| 23 | apl_accrued_interest_amount | numeric(15,2) | Y |
| 24 | pl_compound_interest_amount | numeric(15,2) | Y |
| 25 | adjust_apl_interest_amount | numeric(15,2) | Y |
| 26 | adjust_apl_accrued_interest_amount | numeric(15,2) | Y |
| 27 | adjust_apl_accrued_compound_interest_amount | numeric(15,2) | Y |
| 28 | adjust_apl_compound_interest_amount | numeric(15,2) | Y |
| 29 | adjust_loan_amount | numeric(15,2) | Y |
| 30 | adjust_apl_amount | numeric(15,2) | Y |
| 31 | pl_compound_interest_receivable | numeric(15,2) | Y |
| 32 | return_loan_amount | numeric(15,2) | Y |
| 33 | branch_register | character varying(4) | Y |
| 34 | slip_no | character varying(14) | Y |
| 35 | certificate_no | character varying(50) | Y |
| 36 | register_no | character varying(25) | Y |
| 37 | claim_no | character varying(25) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","tx_adw_transaction_detail_id":"47","created_date":"2022-10-29T09:35:06.433Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:06.433Z","updated_by":"SYSTEM","branch_source":"4610","branch_service":"0999","payment_date":"2021-09-30T17:00:00.000Z","premium_type":"NORMAL","loan_interest_amount":null,"premium_interest_amount":"31.27","apl_interest_amount":null,"apl_compound_interest_amount":null,"loan_amount":null,"apl_amount":null,"collection_type":"CASH","plan_code":"218","receipt_no":"28980715","branch_source_acc":"4610","adjust_loan_interest_amount":null,"apl_accrued_compound_interest_amount":null,"apl_accrued_interest_amount":null,"pl_compound_interest_amount":null,"adjust_apl_interest_amount":null,"adjust_apl_accrued_interest_amount":null,"adjust_apl_accrued_compound_interest_amount":null,"adjust_apl_compound_interest_amount":null,"adjust_loan_amount":null,"adjust_apl_amount":null,"pl_compound_interest_receivable":null,"return_loan_amount":null,"branch_register":null,"slip_no":null,"certificate_no":null,"register_no":null,"claim_no":null}
{"id":"2","tx_adw_transaction_detail_id":"46","created_date":"2022-10-29T09:35:06.433Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:06.433Z","updated_by":"SYSTEM","branch_source":"4610","branch_service":"0999","payment_date":"2021-09-30T17:00:00.000Z","premium_type":"NORMAL","loan_interest_amount":null,"premium_interest_amount":"98.74","apl_interest_amount":null,"apl_compound_interest_amount":null,"loan_amount":null,"apl_amount":null,"collection_type":"CASH","plan_code":"539","receipt_no":"28980714","branch_source_acc":"4610","adjust_loan_interest_amount":null,"apl_accrued_compound_interest_amount":null,"apl_accrued_interest_amount":null,"pl_compound_interest_amount":null,"adjust_apl_interest_amount":null,"adjust_apl_accrued_interest_amount":null,"adjust_apl_accrued_compound_interest_amount":null,"adjust_apl_compound_interest_amount":null,"adjust_loan_amount":null,"adjust_apl_amount":null,"pl_compound_interest_receivable":null,"return_loan_amount":null,"branch_register":null,"slip_no":null,"certificate_no":null,"register_no":null,"claim_no":null}
```
</details>

### `public.tx_adw_other_income_detail` — rows: 681340

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | created_date | timestamp without time zone | N |
| 3 | created_by | character varying(50) | N |
| 4 | updated_date | timestamp without time zone | Y |
| 5 | updated_by | character varying(50) | Y |
| 6 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 7 | branch_source | character varying(4) | Y |
| 8 | branch_service | character varying(4) | Y |
| 9 | plan_code | character varying(10) | Y |
| 10 | payment_date | date | Y |
| 11 | service_income_amount | numeric(15,2) | Y |
| 12 | waiting_loan_amount | numeric(15,2) | Y |
| 13 | waiting_premium_amount | numeric(15,2) | Y |
| 14 | waiting_nb_rw_amount | numeric(15,2) | Y |
| 15 | surplus_money_amount | numeric(15,2) | Y |
| 16 | branch_source_acc | character varying(4) | Y |
| 17 | investment_liabilities_fv_amount | numeric(15,2) | Y |
| 18 | stamp_duty_amount | numeric(15,2) | Y |
| 19 | gain_amount | numeric(15,2) | Y |
| 20 | loss_amount | numeric(15,2) | Y |
| 21 | claim_payable | numeric(15,2) | Y |
| 22 | investment_liabilities | numeric(15,2) | Y |
| 23 | business_tax_accrued | numeric(15,2) | Y |
| 24 | adjust_business_tax_accrued | numeric(15,2) | Y |
| 25 | investment_business_tax | numeric(15,2) | Y |
| 26 | adjust_investment_business_tax | numeric(15,2) | Y |
| 27 | return_surplus_money_amount | numeric(15,2) | Y |
| 28 | branch_register | character varying(4) | Y |
| 29 | policy_due_date | date | Y |
| 30 | certificate_no | character varying(50) | Y |
| 31 | register_no | character varying(25) | Y |
| 32 | claim_no | character varying(25) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1167035","created_date":"2024-08-01T09:52:06.989Z","created_by":"SYSTEM","updated_date":"2024-08-01T09:52:06.989Z","updated_by":"SYSTEM","tx_adw_transaction_detail_id":"66927647","branch_source":"3708","branch_service":"0001","plan_code":"25","payment_date":"2024-07-06T17:00:00.000Z","service_income_amount":null,"waiting_loan_amount":null,"waiting_premium_amount":null,"waiting_nb_rw_amount":null,"surplus_money_amount":null,"branch_source_acc":"3708","investment_liabilities_fv_amount":null,"stamp_duty_amount":null,"gain_amount":null,"loss_amount":null,"claim_payable":"22000.00","investment_liabilities":null,"business_tax_accrued":null,"adjust_business_tax_accrued":null,"investment_business_tax":null,"adjust_investment_business_tax":null,"return_surplus_money_amount":null,"branch_register":null,"policy_due_date":null,"certificate_no":null,"register_no":null,"claim_no":null}
{"id":"1166920","created_date":"2024-08-01T09:55:01.220Z","created_by":"SYSTEM","updated_date":"2024-08-01T09:55:01.220Z","updated_by":"SYSTEM","tx_adw_transaction_detail_id":"66926929","branch_source":"3200","branch_service":"0001","plan_code":"22","payment_date":"2024-07-08T17:00:00.000Z","service_income_amount":null,"waiting_loan_amount":"91836.00","waiting_premium_amount":"0.00","waiting_nb_rw_amount":"0.00","surplus_money_amount":null,"branch_source_acc":"3200","investment_liabilities_fv_amount":null,"stamp_duty_amount":null,"gain_amount":null,"loss_amount":null,"claim_payable":null,"investment_liabilities":null,"business_tax_accrued":null,"adjust_business_tax_accrued":null,"investment_business_tax":null,"adjust_investment_business_tax":null,"return_surplus_money_amount":null,"branch_register":null,"policy_due_date":null,"certificate_no":null,"register_no":null,"claim_no":null}
```
</details>

### `public.tx_adw_other_income_fee_detail` — rows: 10670

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 2 | posting_date | date | Y |
| 3 | period | date | Y |
| 4 | account_code | character varying(8) | Y |
| 5 | account_name | character varying(255) | Y |
| 6 | policy_no | character varying(20) | Y |
| 7 | amount | numeric(15,2) | Y |
| 8 | payment_date | date | Y |
| 9 | plan_code | character varying(10) | Y |
| 10 | sale_channel | character varying(20) | Y |
| 11 | branch_source | character varying(4) | Y |
| 12 | branch_service | character varying(4) | Y |
| 13 | business_line | character varying(10) | Y |
| 14 | document_number | character varying(20) | Y |
| 15 | payment_channel | character varying(200) | Y |
| 16 | deposit_no | character varying(200) | Y |
| 17 | bank_account_no | character varying(50) | Y |
| 18 | effective_date | date | Y |
| 19 | ul_id | bigint(64,0) | Y |
| 20 | created_date | timestamp without time zone | Y |
| 21 | created_by | character varying(50) | Y |
| 22 | updated_date | timestamp without time zone | Y |
| 23 | updated_by | character varying(50) | Y |
| 24 | id | bigint(64,0) | N |
| 25 | branch_source_acc | character varying(4) | Y |
| 26 | coi_charge_amount | numeric(15,2) | Y |
| 27 | policy_fee_amount | numeric(15,2) | Y |
| 28 | administration_fee_amount | numeric(15,2) | Y |
| 29 | surrender_charge_amount | numeric(15,2) | Y |
| 30 | reinstatement_fee_amount | numeric(15,2) | Y |
| 31 | statement_fee_amount | numeric(15,2) | Y |
| 32 | fund_switching_charge_amount | numeric(15,2) | Y |
| 33 | channel_code | character varying(7) | Y |
| 34 | claim_payable | numeric(15,2) | Y |
| 35 | benefit_payable | numeric(15,2) | Y |
| 36 | branch_register | character varying(4) | Y |
| 37 | certificate_no | character varying(50) | Y |
| 38 | policy_due_date | date | Y |
| 39 | bank_fee_amount | numeric(15,2) | Y |
| 40 | annual_premium | numeric(15,2) | Y |
| 41 | modal_premium | numeric(15,2) | Y |
| 42 | mode_of_payment | numeric(3,0) | Y |
| 43 | register_no | character varying(25) | Y |
| 44 | cheque_no | character varying(30) | Y |
| 45 | claim_no | character varying(25) | Y |

<details><summary>sample rows</summary>

```json
{"tx_adw_transaction_detail_id":"66941912","posting_date":null,"period":null,"account_code":null,"account_name":null,"policy_no":"GU3966","amount":null,"payment_date":"2024-03-20T17:00:00.000Z","plan_code":null,"sale_channel":null,"branch_source":"0001","branch_service":"0001","business_line":null,"document_number":null,"payment_channel":null,"deposit_no":null,"bank_account_no":null,"effective_date":null,"ul_id":null,"created_date":"2024-08-02T01:00:58.267Z","created_by":"SYSTEM","updated_date":"2024-08-02T01:00:58.267Z","updated_by":"SYSTEM","id":"17880","branch_source_acc":"9105","coi_charge_amount":null,"policy_fee_amount":null,"administration_fee_amount":null,"surrender_charge_amount":null,"reinstatement_fee_amount":null,"statement_fee_amount":null,"fund_switching_charge_amount":null,"channel_code":null,"claim_payable":"180000.00","benefit_payable":null,"branch_register":null,"certificate_no":null,"policy_due_date":null,"bank_fee_amount":null,"annual_premium":null,"modal_premium":null,"mode_of_payment":null,"register_no":null,"cheque_no":null,"claim_no":null}
{"tx_adw_transaction_detail_id":"66941911","posting_date":null,"period":null,"account_code":null,"account_name":null,"policy_no":"GU3966","amount":null,"payment_date":"2024-03-19T17:00:00.000Z","plan_code":null,"sale_channel":null,"branch_source":"0001","branch_service":"0001","business_line":null,"document_number":null,"payment_channel":null,"deposit_no":null,"bank_account_no":null,"effective_date":null,"ul_id":null,"created_date":"2024-08-02T01:02:15.264Z","created_by":"SYSTEM","updated_date":"2024-08-02T01:02:15.264Z","updated_by":"SYSTEM","id":"17879","branch_source_acc":"9105","coi_charge_amount":null,"policy_fee_amount":null,"administration_fee_amount":null,"surrender_charge_amount":null,"reinstatement_fee_amount":null,"statement_fee_amount":null,"fund_switching_charge_amount":null,"channel_code":null,"claim_payable":"180000.00","benefit_payable":null,"branch_register":null,"certificate_no":null,"policy_due_date":null,"bank_fee_amount":null,"annual_premium":null,"modal_premium":null,"mode_of_payment":null,"register_no":null,"cheque_no":null,"claim_no":null}
```
</details>

### `public.tx_adw_premium_detail` — rows: 8378413

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | receipt_no | character varying(16) | Y |
| 4 | branch_source | character varying(4) | Y |
| 5 | branch_service | character varying(4) | Y |
| 6 | payment_date | date | Y |
| 7 | premium_type | character varying(20) | Y |
| 8 | collection_type | character varying(10) | Y |
| 9 | policy_year | numeric(2,0) | Y |
| 10 | policy_period | numeric(2,0) | Y |
| 11 | plan_code | character varying(10) | Y |
| 12 | premium_due_date | date | Y |
| 13 | annual_premium | numeric(15,2) | Y |
| 14 | modal_premium | numeric(15,2) | Y |
| 15 | agent_fine | numeric(15,2) | Y |
| 16 | interest_prem | numeric(15,2) | Y |
| 17 | created_date | timestamp without time zone | N |
| 18 | created_by | character varying(50) | N |
| 19 | updated_date | timestamp without time zone | Y |
| 20 | updated_by | character varying(50) | Y |
| 21 | mode_of_payment | numeric(3,0) | Y |
| 22 | prem_type | character varying(1) | Y |
| 23 | prem | numeric(15,2) | Y |
| 24 | premrider | numeric(15,2) | Y |
| 25 | premacc | numeric(15,2) | Y |
| 26 | prem_nextyear | numeric(15,2) | Y |
| 27 | premrider_nextyear | numeric(15,2) | Y |
| 28 | premacc_nextyear | numeric(15,2) | Y |
| 29 | prem_once | numeric(15,2) | Y |
| 30 | prem_discount | numeric(15,2) | Y |
| 31 | prem_discount_nextyear | numeric(15,2) | Y |
| 32 | returnacc | numeric(15,2) | Y |
| 33 | returnacc_nextyear | numeric(15,2) | Y |
| 34 | returnprem | numeric(15,2) | Y |
| 35 | returnprem_nextyear | numeric(15,2) | Y |
| 36 | returnrider | numeric(15,2) | Y |
| 37 | returnrider_nextyear | numeric(15,2) | Y |
| 38 | returnrprem_pay_once | numeric(15,2) | Y |
| 39 | revert_flag | boolean | Y |
| 40 | returnprem_overdue | numeric(15,2) | Y |
| 41 | totalpremium_amount | numeric(15,2) | Y |
| 42 | unallocated_premium | numeric(15,2) | Y |
| 43 | contract_start_date | date | Y |
| 44 | effective_date | date | Y |
| 45 | payment_channel | character varying(30) | Y |
| 46 | branch_source_acc | character varying(4) | Y |
| 47 | prem_investment_amount | numeric(15,2) | Y |
| 48 | investment_liabilities_fund_amount | numeric(15,2) | Y |
| 49 | investment_liabilities_gl_amount | numeric(15,2) | Y |
| 50 | returnprem_top_up | numeric(15,2) | Y |
| 51 | prem_top_up | numeric(15,2) | Y |
| 52 | premacc_once | numeric(15,2) | Y |
| 53 | premrider_once | numeric(15,2) | Y |
| 54 | returnracc_pay_once | numeric(15,2) | Y |
| 55 | pay_from | timestamp without time zone | Y |
| 56 | pay_to | timestamp without time zone | Y |
| 57 | no_of_member | numeric(10,0) | Y |
| 58 | actual_premium_amount_life | numeric(15,2) | Y |
| 59 | actual_premium_amount_accident_death | numeric(15,2) | Y |
| 60 | actual_premium_amount_medaccident | numeric(15,2) | Y |
| 61 | actual_premium_amount_tpd | numeric(15,2) | Y |
| 62 | actual_premium_amount_ipd | numeric(15,2) | Y |
| 63 | actual_premium_amount_opd | numeric(15,2) | Y |
| 64 | actual_premium_amount_dental | numeric(15,2) | Y |
| 65 | actual_premium_amount_other | numeric(15,2) | Y |
| 66 | advance_premacc | numeric(15,2) | Y |
| 67 | advance_prem | numeric(15,2) | Y |
| 68 | sale_option | character varying(20) | Y |
| 69 | advance_premhealth | numeric(15,2) | Y |
| 70 | accrued_prem | numeric(15,2) | Y |
| 71 | accrued_premacc | numeric(15,2) | Y |
| 72 | accrued_premhealth | numeric(15,2) | Y |
| 73 | allowance_doubtful_accounts | numeric(15,2) | Y |
| 74 | adjust_prem_nextyear | numeric(15,2) | Y |
| 75 | adjust_premacc_nextyear | numeric(15,2) | Y |
| 76 | adjust_premrider_nextyear | numeric(15,2) | Y |
| 77 | prem_nextyear_local | numeric(15,2) | Y |
| 78 | premacc_nextyear_local | numeric(15,2) | Y |
| 79 | returnrider_pay_once | numeric(15,2) | Y |
| 80 | premacc_discount | numeric(15,2) | Y |
| 81 | premacc_discount_nextyear | numeric(15,2) | Y |
| 82 | slip_no | character varying(14) | Y |
| 83 | branch_register | character varying(4) | Y |
| 84 | certificate_no | character varying(50) | Y |
| 85 | deposit_no | bigint(64,0) | Y |
| 86 | receipt_sum | character varying(16) | Y |
| 87 | claim_no | character varying(25) | Y |
| 88 | register_no | character varying(25) | Y |
| 89 | adjust_returnprem_overdue | numeric(15,2) | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","tx_adw_transaction_detail_id":"25","receipt_no":"28980715","branch_source":"4610","branch_service":"0999","payment_date":"2021-09-30T17:00:00.000Z","premium_type":"NORMAL","collection_type":"CASH","policy_year":"4","policy_period":"1","plan_code":"19","premium_due_date":"2021-08-13T17:00:00.000Z","annual_premium":"960.00","modal_premium":"480.00","agent_fine":null,"interest_prem":null,"created_date":"2022-10-29T09:35:06.482Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:06.482Z","updated_by":"SYSTEM","mode_of_payment":"6","prem_type":null,"prem":null,"premrider":null,"premacc":null,"prem_nextyear":null,"premrider_nextyear":null,"premacc_nextyear":"480.00","prem_once":null,"prem_discount":null,"prem_discount_nextyear":null,"returnacc":null,"returnacc_nextyear":null,"returnprem":null,"returnprem_nextyear":null,"returnrider":null,"returnrider_nextyear":null,"returnrprem_pay_once":null,"revert_flag":null,"returnprem_overdue":null,"totalpremium_amount":null,"unallocated_premium":null,"contract_start_date":"2018-08-13T17:00:00.000Z","effective_date":null,"payment_channel":null,"branch_source_acc":"4610","prem_investment_amount":null,"investment_liabilities_fund_amount":null,"investment_liabilities_gl_amount":null,"returnprem_top_up":null,"prem_top_up":null,"premacc_once":null,"premrider_once":null,"returnracc_pay_once":null,"pay_from":null,"pay_to":null,"no_of_member":null,"actual_premium_amount_life":null,"actual_premium_amount_accident_death":null,"actual_premium_amount_medaccident":null,"actual_premium_amount_tpd":null,"actual_premium_amount_ipd":null,"actual_premium_amount_opd":null,"actual_premium_amount_dental":null,"actual_premium_amount_other":null,"advance_premacc":null,"advance_prem":null,"sale_option":null,"advance_premhealth":null,"accrued_prem":null,"accrued_premacc":null,"accrued_premhealth":null,"allowance_doubtful_accounts":null,"adjust_prem_nextyear":null,"adjust_premacc_nextyear":null,"adjust_premrider_nextyear":null,"prem_nextyear_local":null,"premacc_nextyear_local":null,"returnrider_pay_once":null,"premacc_discount":null,"premacc_discount_nextyear":null,"slip_no":null,"branch_register":null,"certificate_no":null,"deposit_no":null,"receipt_sum":null,"claim_no":null,"register_no":null,"adjust_returnprem_overdue":null}
{"id":"2","tx_adw_transaction_detail_id":"26","receipt_no":"28980715","branch_source":"4610","branch_service":"0999","payment_date":"2021-09-30T17:00:00.000Z","premium_type":"NORMAL","collection_type":"CASH","policy_year":"4","policy_period":"1","plan_code":"218","premium_due_date":"2021-08-13T17:00:00.000Z","annual_premium":"10400.00","modal_premium":"5200.00","agent_fine":null,"interest_prem":null,"created_date":"2022-10-29T09:35:06.482Z","created_by":"SYSTEM","updated_date":"2022-10-29T09:35:06.482Z","updated_by":"SYSTEM","mode_of_payment":"6","prem_type":null,"prem":null,"premrider":null,"premacc":null,"prem_nextyear":"5200.00","premrider_nextyear":null,"premacc_nextyear":null,"prem_once":null,"prem_discount":null,"prem_discount_nextyear":null,"returnacc":null,"returnacc_nextyear":null,"returnprem":null,"returnprem_nextyear":null,"returnrider":null,"returnrider_nextyear":null,"returnrprem_pay_once":null,"revert_flag":null,"returnprem_overdue":null,"totalpremium_amount":null,"unallocated_premium":null,"contract_start_date":"2018-08-13T17:00:00.000Z","effective_date":null,"payment_channel":null,"branch_source_acc":"4610","prem_investment_amount":null,"investment_liabilities_fund_amount":null,"investment_liabilities_gl_amount":null,"returnprem_top_up":null,"prem_top_up":null,"premacc_once":null,"premrider_once":null,"returnracc_pay_once":null,"pay_from":null,"pay_to":null,"no_of_member":null,"actual_premium_amount_life":null,"actual_premium_amount_accident_death":null,"actual_premium_amount_medaccident":null,"actual_premium_amount_tpd":null,"actual_premium_amount_ipd":null,"actual_premium_amount_opd":null,"actual_premium_amount_dental":null,"actual_premium_amount_other":null,"advance_premacc":null,"advance_prem":null,"sale_option":null,"advance_premhealth":null,"accrued_prem":null,"accrued_premacc":null,"accrued_premhealth":null,"allowance_doubtful_accounts":null,"adjust_prem_nextyear":null,"adjust_premacc_nextyear":null,"adjust_premrider_nextyear":null,"prem_nextyear_local":null,"premacc_nextyear_local":null,"returnrider_pay_once":null,"premacc_discount":null,"premacc_discount_nextyear":null,"slip_no":null,"branch_register":null,"certificate_no":null,"deposit_no":null,"receipt_sum":null,"claim_no":null,"register_no":null,"adjust_returnprem_overdue":null}
```
</details>

### `public.tx_adw_premium_ri_detail` — rows: 13710269

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | bigint(64,0) | N |
| 2 | tx_adw_transaction_detail_id | bigint(64,0) | N |
| 3 | branch_source | character varying(4) | Y |
| 4 | branch_service | character varying(4) | Y |
| 5 | premium_type | character varying(20) | Y |
| 6 | collection_type | character varying(10) | Y |
| 7 | ri_support_bk_dt_id | character varying(50) | Y |
| 8 | period | character varying(50) | Y |
| 9 | ri_type | character varying(2) | Y |
| 10 | report_type | character varying(20) | Y |
| 11 | reinsurer | character varying(50) | N |
| 12 | treaty_code | character varying(50) | N |
| 13 | ri_mode_of_payment | character varying(15) | Y |
| 14 | ri_method | character varying(15) | Y |
| 15 | cpa_rider_flag | character varying(1) | Y |
| 16 | facultative | character varying(1) | Y |
| 17 | partner_code | character varying(50) | Y |
| 18 | policy_year | numeric(3,0) | Y |
| 19 | benefit_type | character varying(10) | Y |
| 20 | commencement_date | date | Y |
| 21 | approval_date | date | Y |
| 22 | ri_commencement_date | date | Y |
| 23 | ri_premium | numeric(25,3) | Y |
| 24 | ri_premium_refund | numeric(25,3) | Y |
| 25 | ri_previous_nar | numeric(25,3) | Y |
| 26 | ri_current_nar | numeric(25,3) | Y |
| 27 | total_nar | numeric(25,3) | Y |
| 28 | total_sr | numeric(25,3) | Y |
| 29 | remark | character varying(500) | Y |
| 30 | transaction_date | timestamp with time zone | N |
| 31 | foreign_local | character varying(1) | N |
| 32 | policy_type | character varying(10) | Y |
| 33 | created_date | timestamp with time zone | N |
| 34 | created_by | character varying(50) | N |
| 35 | updated_date | timestamp with time zone | Y |
| 36 | updated_by | character varying(50) | Y |
| 37 | branch_source_acc | character varying(4) | Y |
| 38 | ri_account_name | character varying(255) | Y |
| 39 | plan_type | character varying(10) | Y |
| 40 | ri_profit_com | numeric(25,2) | Y |
| 41 | ri_period | character varying(6) | Y |
| 42 | premium_life | numeric(25,2) | Y |
| 43 | premium_add | numeric(25,2) | Y |
| 44 | premium_tpd | numeric(25,2) | Y |
| 45 | premium_med | numeric(25,2) | Y |
| 46 | quarter_year | character varying(4) | Y |
| 47 | quarter_period | character varying(2) | Y |
| 48 | sale_option | character varying(100) | Y |
| 49 | payfrom | date | Y |
| 50 | payto | date | Y |
| 51 | movement | character varying(1) | Y |
| 52 | premium_med_acc | numeric(25,2) | Y |
| 53 | premium_ipd | numeric(25,2) | Y |
| 54 | premium_opd | numeric(25,2) | Y |
| 55 | premium_dental | numeric(25,2) | Y |
| 56 | premium_rev_life | numeric(25,2) | Y |
| 57 | premium_rev_add | numeric(25,2) | Y |
| 58 | premium_refund_life | numeric(25,2) | Y |
| 59 | premium_refund_add | numeric(25,2) | Y |
| 60 | prem_refund_med_acc | numeric(25,2) | Y |
| 61 | prem_refund_ipd | numeric(25,2) | Y |
| 62 | prem_refund_opd | numeric(25,2) | Y |
| 63 | prem_refund_dental | numeric(25,2) | Y |
| 64 | prem_refund_tpd | numeric(25,2) | Y |
| 65 | sale_channel_desc | character varying(50) | Y |
| 66 | mps_flag | boolean | Y |
| 67 | facult_flag | boolean | Y |
| 68 | branch_register | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"id":"4796633","tx_adw_transaction_detail_id":"19373922","branch_source":"8300","branch_service":"03","premium_type":"Normal","collection_type":"ACCRUAL","ri_support_bk_dt_id":null,"period":"202307","ri_type":"E","report_type":"","reinsurer":"Gibraltar","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":null,"partner_code":null,"policy_year":"1","benefit_type":null,"commencement_date":"2023-06-30T17:00:00.000Z","approval_date":null,"ri_commencement_date":null,"ri_premium":null,"ri_premium_refund":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":null,"total_sr":null,"remark":null,"transaction_date":"2023-08-08T02:40:50.990Z","foreign_local":"F","policy_type":null,"created_date":"2023-08-08T02:41:04.625Z","created_by":"SYSTEM","updated_date":"2023-08-08T02:41:04.625Z","updated_by":"SYSTEM","branch_source_acc":"9102","ri_account_name":null,"plan_type":null,"ri_profit_com":null,"ri_period":null,"premium_life":"164872.71","premium_add":"82436.37","premium_tpd":null,"premium_med":null,"quarter_year":"2023","quarter_period":"Q3","sale_option":"โบรกเกอร์","payfrom":"2023-06-30T17:00:00.000Z","payto":"2024-06-29T17:00:00.000Z","movement":"A","premium_med_acc":null,"premium_ipd":null,"premium_opd":null,"premium_dental":null,"premium_rev_life":null,"premium_rev_add":null,"premium_refund_life":null,"premium_refund_add":null,"prem_refund_med_acc":null,"prem_refund_ipd":null,"prem_refund_opd":null,"prem_refund_dental":null,"prem_refund_tpd":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"branch_register":null}
{"id":"4796634","tx_adw_transaction_detail_id":"19373922","branch_source":"8300","branch_service":"03","premium_type":"Normal","collection_type":null,"ri_support_bk_dt_id":null,"period":"202307","ri_type":"C","report_type":"","reinsurer":"Gibraltar","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_method":"QS-Surplus","cpa_rider_flag":null,"facultative":null,"partner_code":null,"policy_year":"1","benefit_type":null,"commencement_date":"2023-06-30T17:00:00.000Z","approval_date":null,"ri_commencement_date":null,"ri_premium":null,"ri_premium_refund":null,"ri_previous_nar":null,"ri_current_nar":null,"total_nar":null,"total_sr":null,"remark":null,"transaction_date":"2023-08-08T02:40:50.990Z","foreign_local":"F","policy_type":null,"created_date":"2023-08-08T02:41:04.625Z","created_by":"SYSTEM","updated_date":"2023-08-08T02:41:04.625Z","updated_by":"SYSTEM","branch_source_acc":"9102","ri_account_name":null,"plan_type":null,"ri_profit_com":null,"ri_period":null,"premium_life":"164872.71","premium_add":"82436.37","premium_tpd":null,"premium_med":null,"quarter_year":"2023","quarter_period":"Q3","sale_option":"โบรกเกอร์","payfrom":"2023-06-30T17:00:00.000Z","payto":"2024-06-29T17:00:00.000Z","movement":"A","premium_med_acc":null,"premium_ipd":null,"premium_opd":null,"premium_dental":null,"premium_rev_life":null,"premium_rev_add":null,"premium_refund_life":null,"premium_refund_add":null,"prem_refund_med_acc":null,"prem_refund_ipd":null,"prem_refund_opd":null,"prem_refund_dental":null,"prem_refund_tpd":null,"sale_channel_desc":null,"mps_flag":null,"facult_flag":null,"branch_register":null}
```
</details>

## R-output (current run) (27 tables)

### `public.tx_rcc_output_r01` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_monthly_dt_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | effective_date | date | Y |
| 8 | mode_of_payment | character varying(2) | Y |
| 9 | annual_premium | numeric(25,15) | Y |
| 10 | modal_premium | numeric(25,15) | Y |
| 11 | basic_rider_indicator | character varying(20) | Y |
| 12 | sub_group_id | character varying(50) | Y |
| 13 | created_date | timestamp with time zone | N |
| 14 | created_by | character varying(50) | N |
| 15 | updated_date | timestamp with time zone | Y |
| 16 | updated_by | character varying(50) | Y |
| 17 | premium_amount | numeric(25,15) | Y |
| 18 | premium_due_date | date | Y |
| 19 | premium_type | character varying(10) | Y |
| 20 | tx_rcc_output_r01_id | numeric(18,0) | N |
| 21 | sales_channel | character varying(50) | Y |
| 22 | sales_channel_code | character varying(10) | Y |
| 23 | sales_channel_abbr | character varying(20) | Y |
| 24 | rider_type | character varying(4) | Y |
| 25 | source_event_code | character varying(10) | Y |

### `public.tx_rcc_output_r02` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r02_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | annual_premium | numeric(25,15) | Y |
| 13 | modal_premium | numeric(25,15) | Y |
| 14 | basic_rider_indicator | character varying(20) | Y |
| 15 | initial_commission | numeric(25,15) | Y |
| 16 | renewal_commission | numeric(25,15) | Y |
| 17 | initial_override | numeric(25,15) | Y |
| 18 | renewal_override | numeric(25,15) | Y |
| 19 | sub_group_id | character varying(50) | Y |
| 20 | created_date | timestamp with time zone | N |
| 21 | created_by | character varying(50) | N |
| 22 | updated_date | timestamp with time zone | Y |
| 23 | updated_by | character varying(50) | Y |
| 24 | commission_ov_type | character varying(20) | Y |
| 25 | sales_channel_abbr | character varying(20) | Y |
| 26 | rider_type | character varying(4) | Y |

### `public.tx_rcc_output_r03` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r03_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | actual_sum_assured | numeric(25,15) | Y |
| 12 | mode_of_payment | character varying(2) | Y |
| 13 | annual_premium | numeric(25,15) | Y |
| 14 | modal_premium | numeric(25,15) | Y |
| 15 | claim_event_date | date | Y |
| 16 | claim_reported_date | date | Y |
| 17 | claim_status | character varying(50) | Y |
| 18 | approve_date | date | Y |
| 19 | claim_paid_date | date | Y |
| 20 | policy_loan_principal_amount | numeric(25,15) | Y |
| 21 | policy_loan_interest_amount | numeric(25,15) | Y |
| 22 | apl_principal_amount | numeric(25,15) | Y |
| 23 | apl_interest_amount | numeric(25,15) | Y |
| 24 | other_liabilities_amount | numeric(25,15) | Y |
| 25 | paid_amount_life | numeric(25,15) | Y |
| 26 | paid_amount_accident_death | numeric(25,15) | Y |
| 27 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 28 | paid_amount_health | numeric(25,15) | Y |
| 29 | paid_amount_dismemberment | numeric(25,15) | Y |
| 30 | paid_amount_tpd | numeric(25,15) | Y |
| 31 | paid_amount_other | numeric(25,15) | Y |
| 32 | return_premium | numeric(25,15) | Y |
| 33 | investment_component | numeric(25,15) | Y |
| 34 | exgratia | character varying(20) | Y |
| 35 | co_payment_client_paid | numeric(25,15) | Y |
| 36 | premium_amount | numeric(25,15) | Y |
| 37 | claim_no | character varying(25) | Y |
| 38 | sub_group_id | character varying(50) | Y |
| 39 | sales_channel_abbr | character varying(20) | Y |
| 40 | created_date | timestamp with time zone | N |
| 41 | created_by | character varying(50) | N |
| 42 | updated_date | timestamp with time zone | Y |
| 43 | updated_by | character varying(50) | Y |
| 44 | insurance_component | numeric(25,15) | Y |
| 45 | unhealth_benefit_name | character varying(255) | Y |
| 46 | benefit_state | character varying(255) | Y |
| 47 | claim_coverage_code | character varying(10) | Y |
| 48 | claim_coverage_name | character varying(500) | Y |
| 49 | rider_type | character varying(4) | Y |
| 50 | source_event_code | character varying(10) | Y |
| 51 | register_no | character varying(25) | Y |

### `public.tx_rcc_output_r03_temp_25680630` — rows: 1407

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r03_id | numeric(18,0) | Y |
| 2 | rcc_monthly_dt_id | numeric(18,0) | Y |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | actual_sum_assured | numeric(25,15) | Y |
| 12 | mode_of_payment | character varying(2) | Y |
| 13 | annual_premium | numeric(25,15) | Y |
| 14 | modal_premium | numeric(25,15) | Y |
| 15 | claim_event_date | date | Y |
| 16 | claim_reported_date | date | Y |
| 17 | claim_status | character varying(50) | Y |
| 18 | approve_date | date | Y |
| 19 | claim_paid_date | date | Y |
| 20 | policy_loan_principal_amount | numeric(25,15) | Y |
| 21 | policy_loan_interest_amount | numeric(25,15) | Y |
| 22 | apl_principal_amount | numeric(25,15) | Y |
| 23 | apl_interest_amount | numeric(25,15) | Y |
| 24 | other_liabilities_amount | numeric(25,15) | Y |
| 25 | paid_amount_life | numeric(25,15) | Y |
| 26 | paid_amount_accident_death | numeric(25,15) | Y |
| 27 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 28 | paid_amount_health | numeric(25,15) | Y |
| 29 | paid_amount_dismemberment | numeric(25,15) | Y |
| 30 | paid_amount_tpd | numeric(25,15) | Y |
| 31 | paid_amount_other | numeric(25,15) | Y |
| 32 | return_premium | numeric(25,15) | Y |
| 33 | investment_component | numeric(25,15) | Y |
| 34 | exgratia | character varying(20) | Y |
| 35 | co_payment_client_paid | numeric(25,15) | Y |
| 36 | premium_amount | numeric(25,15) | Y |
| 37 | claim_no | character varying(25) | Y |
| 38 | sub_group_id | character varying(50) | Y |
| 39 | sales_channel_abbr | character varying(20) | Y |
| 40 | created_date | timestamp with time zone | Y |
| 41 | created_by | character varying(50) | Y |
| 42 | updated_date | timestamp with time zone | Y |
| 43 | updated_by | character varying(50) | Y |
| 44 | insurance_component | numeric(25,15) | Y |
| 45 | unhealth_benefit_name | character varying(255) | Y |
| 46 | benefit_state | character varying(255) | Y |
| 47 | claim_coverage_code | character varying(10) | Y |
| 48 | claim_coverage_name | character varying(500) | Y |
| 49 | rider_type | character varying(4) | Y |
| 50 | source_event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_r03_id":"2532445","rcc_monthly_dt_id":"4451","period":"202501","policy_no":"0500828","portfolio_id":"ORD_END2014NSPO","plan_code":"RO37","sales_channel":"Agent","sales_channel_code":"2071009","business_line":"02","effective_date":"2022-08-02T17:00:00.000Z","actual_sum_assured":"200000.000000000000000","mode_of_payment":"12","annual_premium":"0.000000000000000","modal_premium":"1168.000000000000000","claim_event_date":null,"claim_reported_date":"2025-01-01T17:00:00.000Z","claim_status":"PROVISION","approve_date":"2025-01-01T17:00:00.000Z","claim_paid_date":null,"policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"-200000.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"6900/01-2568/00001-03","sub_group_id":"O042-2014-NSPO","sales_channel_abbr":"AGT","created_date":"2025-06-30T08:53:34.478Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":"","source_event_code":null}
{"tx_rcc_output_r03_id":"2532446","rcc_monthly_dt_id":"4451","period":"202501","policy_no":"1568519","portfolio_id":"ORD_WOL2021NSPO","plan_code":"RO43","sales_channel":"Agent","sales_channel_code":"2073208","business_line":"02","effective_date":"2021-02-14T17:00:00.000Z","actual_sum_assured":"1500.000000000000000","mode_of_payment":"12","annual_premium":"0.000000000000000","modal_premium":"9300.000000000000000","claim_event_date":null,"claim_reported_date":"2025-01-01T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2025-01-01T17:00:00.000Z","claim_paid_date":"2025-01-07T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"1500.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"01-2568/00013","sub_group_id":"OE26-2021-NSPO","sales_channel_abbr":"AGT","created_date":"2025-06-30T08:53:34.478Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":"","source_event_code":null}
```
</details>

### `public.tx_rcc_output_r03_temp_25680630_1` — rows: 1407

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r03_id | numeric(18,0) | Y |
| 2 | rcc_monthly_dt_id | numeric(18,0) | Y |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | actual_sum_assured | numeric(25,15) | Y |
| 12 | mode_of_payment | character varying(2) | Y |
| 13 | annual_premium | numeric(25,15) | Y |
| 14 | modal_premium | numeric(25,15) | Y |
| 15 | claim_event_date | date | Y |
| 16 | claim_reported_date | date | Y |
| 17 | claim_status | character varying(50) | Y |
| 18 | approve_date | date | Y |
| 19 | claim_paid_date | date | Y |
| 20 | policy_loan_principal_amount | numeric(25,15) | Y |
| 21 | policy_loan_interest_amount | numeric(25,15) | Y |
| 22 | apl_principal_amount | numeric(25,15) | Y |
| 23 | apl_interest_amount | numeric(25,15) | Y |
| 24 | other_liabilities_amount | numeric(25,15) | Y |
| 25 | paid_amount_life | numeric(25,15) | Y |
| 26 | paid_amount_accident_death | numeric(25,15) | Y |
| 27 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 28 | paid_amount_health | numeric(25,15) | Y |
| 29 | paid_amount_dismemberment | numeric(25,15) | Y |
| 30 | paid_amount_tpd | numeric(25,15) | Y |
| 31 | paid_amount_other | numeric(25,15) | Y |
| 32 | return_premium | numeric(25,15) | Y |
| 33 | investment_component | numeric(25,15) | Y |
| 34 | exgratia | character varying(20) | Y |
| 35 | co_payment_client_paid | numeric(25,15) | Y |
| 36 | premium_amount | numeric(25,15) | Y |
| 37 | claim_no | character varying(25) | Y |
| 38 | sub_group_id | character varying(50) | Y |
| 39 | sales_channel_abbr | character varying(20) | Y |
| 40 | created_date | timestamp with time zone | Y |
| 41 | created_by | character varying(50) | Y |
| 42 | updated_date | timestamp with time zone | Y |
| 43 | updated_by | character varying(50) | Y |
| 44 | insurance_component | numeric(25,15) | Y |
| 45 | unhealth_benefit_name | character varying(255) | Y |
| 46 | benefit_state | character varying(255) | Y |
| 47 | claim_coverage_code | character varying(10) | Y |
| 48 | claim_coverage_name | character varying(500) | Y |
| 49 | rider_type | character varying(4) | Y |
| 50 | source_event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_r03_id":"2533852","rcc_monthly_dt_id":"4458","period":"202501","policy_no":"0500828","portfolio_id":"ORD_END2014NSPO","plan_code":"RO37","sales_channel":"Agent","sales_channel_code":"2071009","business_line":"02","effective_date":"2022-08-02T17:00:00.000Z","actual_sum_assured":"200000.000000000000000","mode_of_payment":"12","annual_premium":"0.000000000000000","modal_premium":"1168.000000000000000","claim_event_date":null,"claim_reported_date":"2025-01-01T17:00:00.000Z","claim_status":"PROVISION","approve_date":"2025-01-01T17:00:00.000Z","claim_paid_date":null,"policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"-200000.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"6900/01-2568/00001-03","sub_group_id":"O042-2014-NSPO","sales_channel_abbr":"AGT","created_date":"2025-06-30T09:19:06.589Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":"","source_event_code":null}
{"tx_rcc_output_r03_id":"2533853","rcc_monthly_dt_id":"4458","period":"202501","policy_no":"1568519","portfolio_id":"ORD_WOL2021NSPO","plan_code":"RO43","sales_channel":"Agent","sales_channel_code":"2073208","business_line":"02","effective_date":"2021-02-14T17:00:00.000Z","actual_sum_assured":"1500.000000000000000","mode_of_payment":"12","annual_premium":"0.000000000000000","modal_premium":"9300.000000000000000","claim_event_date":null,"claim_reported_date":"2025-01-01T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2025-01-01T17:00:00.000Z","claim_paid_date":"2025-01-07T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"1500.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"01-2568/00013","sub_group_id":"OE26-2021-NSPO","sales_channel_abbr":"AGT","created_date":"2025-06-30T09:19:06.589Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":"","source_event_code":null}
```
</details>

### `public.tx_rcc_output_r04` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r04_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | annual_premium | numeric(25,15) | Y |
| 13 | modal_premium | numeric(25,15) | Y |
| 14 | paid_date | date | Y |
| 15 | policy_loan_principal_amount | numeric(25,15) | Y |
| 16 | policy_loan_interest_amount | numeric(25,15) | Y |
| 17 | apl_principal_amount | numeric(25,15) | Y |
| 18 | apl_interest_amount | numeric(25,15) | Y |
| 19 | other_liabilities_amount | numeric(25,15) | Y |
| 20 | annual_coupon | numeric(25,15) | Y |
| 21 | maturity_benefit | numeric(25,15) | Y |
| 22 | annuity_benefit | numeric(25,15) | Y |
| 23 | certain_annuity_benefit | numeric(25,15) | Y |
| 24 | life_annuity_benefit | numeric(25,15) | Y |
| 25 | ng_maturity_benefit | numeric(25,15) | Y |
| 26 | ng_annual_coupon | numeric(25,15) | Y |
| 27 | ng_annuity_benefit | numeric(25,15) | Y |
| 28 | surrender_benefit | numeric(25,15) | Y |
| 29 | lapse | numeric(25,15) | Y |
| 30 | other | numeric(25,15) | Y |
| 31 | sub_group_id | character varying(50) | Y |
| 32 | created_date | timestamp with time zone | N |
| 33 | created_by | character varying(50) | N |
| 34 | updated_date | timestamp with time zone | Y |
| 35 | updated_by | character varying(50) | Y |
| 36 | sales_channel_abbr | character varying(20) | Y |
| 37 | rider_type | character varying(4) | Y |
| 38 | source_event_code | character varying(10) | Y |

### `public.tx_rcc_output_r05` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r05_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | totalpremium_amount | numeric(25,15) | Y |
| 7 | unallocated_premium | numeric(25,15) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | sales_channel | character varying(50) | Y |
| 10 | sales_channel_code | character varying(10) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | premium_due_date | date | Y |
| 13 | effective_date | date | Y |
| 14 | mode_of_payment | character varying(2) | Y |
| 15 | annual_premium | numeric(25,15) | Y |
| 16 | modal_premium | numeric(25,15) | Y |
| 17 | basic_rider_indicator | character varying(20) | Y |
| 18 | premium_type | character varying(10) | Y |
| 19 | sub_group_id | character varying(50) | Y |
| 20 | redemption_value | numeric(25,15) | Y |
| 21 | alteration_type_code | numeric(5,0) | Y |
| 22 | source_event_code | character varying(10) | Y |
| 23 | created_date | timestamp with time zone | N |
| 24 | created_by | character varying(50) | N |
| 25 | updated_date | timestamp with time zone | Y |
| 26 | updated_by | character varying(50) | Y |
| 27 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r06` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r06_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | mode_of_payment | character varying(2) | Y |
| 11 | annual_premium | numeric(25,15) | Y |
| 12 | modal_premium | numeric(25,15) | Y |
| 13 | basic_rider_indicator | character varying(20) | Y |
| 14 | initial_commission | numeric(25,15) | Y |
| 15 | renewal_commission | numeric(25,15) | Y |
| 16 | initial_override | numeric(25,15) | Y |
| 17 | renewal_override | numeric(25,15) | Y |
| 18 | sub_group_id | character varying(50) | Y |
| 19 | created_date | timestamp with time zone | N |
| 20 | created_by | character varying(50) | N |
| 21 | updated_date | timestamp with time zone | Y |
| 22 | updated_by | character varying(50) | Y |
| 23 | plan_code | character varying(20) | Y |
| 24 | commission_ov_type | character varying(20) | Y |
| 25 | sales_channel_abbr | character varying(20) | Y |
| 26 | rider_type | character varying(4) | Y |

### `public.tx_rcc_output_r07` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r07_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | annual_premium | numeric(25,15) | Y |
| 13 | modal_premium | numeric(25,15) | Y |
| 14 | claim_event_date | date | Y |
| 15 | claim_reported_date | date | Y |
| 16 | claim_status | character varying(20) | Y |
| 17 | approve_date | date | Y |
| 18 | claim_paid_date | date | Y |
| 19 | total_death_benefit | numeric(25,15) | Y |
| 20 | death_benefit_unit_cost | numeric(25,15) | Y |
| 21 | death_benefit_non_unit_cost | numeric(25,15) | Y |
| 22 | paid_amount_accident_death | numeric(25,15) | Y |
| 23 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 24 | paid_amount_health | numeric(25,15) | Y |
| 25 | paid_amount_dismemberment | numeric(25,15) | Y |
| 26 | paid_amount_tpd | numeric(25,15) | Y |
| 27 | paid_amount_other | numeric(25,15) | Y |
| 28 | return_premium | numeric(25,15) | Y |
| 29 | other_liabilities_amount | numeric(25,15) | Y |
| 30 | av_at_death_event | numeric(25,15) | Y |
| 31 | surrender_charge1_rate_at_death | numeric(25,15) | Y |
| 32 | surrender_value | numeric(25,15) | Y |
| 33 | actual_sum_assured | numeric(25,15) | Y |
| 34 | surrender_charge_at_death_event | numeric(25,15) | Y |
| 35 | sub_group_id | character varying(50) | Y |
| 36 | receive_payment_type | character varying(20) | Y |
| 37 | alteration_type_code | numeric(5,0) | Y |
| 38 | source_event_code | character varying(10) | Y |
| 39 | sales_channel_abbr | character varying(20) | Y |
| 40 | created_date | timestamp with time zone | N |
| 41 | created_by | character varying(50) | N |
| 42 | updated_date | timestamp with time zone | Y |
| 43 | updated_by | character varying(50) | Y |

### `public.tx_rcc_output_r08` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r08_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | annual_premium | numeric(25,15) | Y |
| 13 | modal_premium | numeric(25,15) | Y |
| 14 | paid_date | date | Y |
| 15 | other_liabilities_amount | numeric(25,15) | Y |
| 16 | loyalty_bonus | numeric(25,15) | Y |
| 17 | maturity_benefit | numeric(25,15) | Y |
| 18 | surrender_benefit | numeric(25,15) | Y |
| 19 | lapse | numeric(25,15) | Y |
| 20 | other | numeric(25,15) | Y |
| 21 | sub_group_id | character varying(50) | Y |
| 22 | alteration_type_code | numeric(5,0) | Y |
| 23 | source_event_code | character varying(10) | Y |
| 24 | created_date | timestamp with time zone | N |
| 25 | created_by | character varying(50) | N |
| 26 | updated_date | timestamp with time zone | Y |
| 27 | updated_by | character varying(50) | Y |
| 28 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r09` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r09_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | Y |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | coi_charge | numeric(25,15) | Y |
| 7 | policy_fee | numeric(25,15) | Y |
| 8 | administration_fee | numeric(25,15) | Y |
| 9 | surrender_charge | numeric(25,15) | Y |
| 10 | reinstatement_fee | numeric(25,15) | Y |
| 11 | financial_statement_fee | numeric(25,15) | Y |
| 12 | fund_switching_fee | numeric(25,15) | Y |
| 13 | plan_code | character varying(20) | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | effective_date | date | Y |
| 17 | business_line | character varying(2) | Y |
| 18 | sub_group_id | character varying(50) | Y |
| 19 | alteration_type_code | numeric(5,0) | Y |
| 20 | source_event_code | character varying(10) | Y |
| 21 | created_date | timestamp with time zone | N |
| 22 | created_by | character varying(50) | N |
| 23 | updated_date | timestamp with time zone | Y |
| 24 | updated_by | character varying(50) | Y |
| 25 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r10` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r10_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | policy_year | numeric(2,0) | Y |
| 6 | effective_date | date | Y |
| 7 | end_coverage_date | date | Y |
| 8 | portfolio_id | character varying(50) | Y |
| 9 | sales_channel | character varying(50) | Y |
| 10 | sales_channel_code | character varying(10) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | mode_of_payment | character varying(2) | Y |
| 13 | pay_from | date | Y |
| 14 | pay_to | date | Y |
| 15 | invoice_date | date | Y |
| 16 | no_of_member | numeric(10,0) | Y |
| 17 | receive_date | date | Y |
| 18 | prem_type | character varying(25) | Y |
| 19 | sale_option | character varying(50) | Y |
| 20 | actual_prem_life | numeric(25,15) | Y |
| 21 | actual_prem_acc_death | numeric(25,15) | Y |
| 22 | actual_prem_med_acc | numeric(25,15) | Y |
| 23 | actual_prem_tpd | numeric(25,15) | Y |
| 24 | actual_prem_ipd | numeric(25,15) | Y |
| 25 | actual_prem_opd | numeric(25,15) | Y |
| 26 | actual_prem_dental | numeric(25,15) | Y |
| 27 | actual_prem_other | numeric(25,15) | Y |
| 28 | prem_life | numeric(25,15) | Y |
| 29 | prem_acc | numeric(25,15) | Y |
| 30 | prem_med | numeric(25,15) | Y |
| 31 | created_date | timestamp with time zone | N |
| 32 | created_by | character varying(50) | N |
| 33 | updated_date | timestamp with time zone | Y |
| 34 | updated_by | character varying(50) | Y |
| 35 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r11` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r11_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | policy_year | numeric(2,0) | Y |
| 6 | effective_date | date | Y |
| 7 | end_coverage_date | date | Y |
| 8 | portfolio_id | character varying(50) | Y |
| 9 | sales_channel | character varying(50) | Y |
| 10 | sales_channel_code | character varying(10) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | mode_of_payment | character varying(2) | Y |
| 13 | pay_from | date | Y |
| 14 | pay_to | date | Y |
| 15 | receive_date | date | Y |
| 16 | sale_option | character varying(50) | Y |
| 17 | comm_life | numeric(25,15) | Y |
| 18 | comm_accident | numeric(25,15) | Y |
| 19 | comm_med | numeric(25,15) | Y |
| 20 | comm_tpd | numeric(25,15) | Y |
| 21 | comm_ipd | numeric(25,15) | Y |
| 22 | comm_opd | numeric(25,15) | Y |
| 23 | comm_dental | numeric(25,15) | Y |
| 24 | comm_other | numeric(25,15) | Y |
| 25 | comm_ov_type | character varying(25) | Y |
| 26 | initial_commission | numeric(25,15) | Y |
| 27 | renewal_commission | numeric(25,15) | Y |
| 28 | initial_override | numeric(25,15) | Y |
| 29 | renewal_override | numeric(25,15) | Y |
| 30 | created_date | timestamp with time zone | N |
| 31 | created_by | character varying(50) | N |
| 32 | updated_date | timestamp with time zone | Y |
| 33 | updated_by | character varying(50) | Y |
| 34 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r12` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r12_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | policy_year | numeric(2,0) | Y |
| 6 | effective_date | date | Y |
| 7 | end_coverage_date | date | Y |
| 8 | portfolio_id | character varying(50) | Y |
| 9 | sales_channel | character varying(50) | Y |
| 10 | sales_channel_code | character varying(10) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | certificate_no | character varying(50) | Y |
| 13 | claim_no | character varying(25) | Y |
| 14 | claim_event_date | date | Y |
| 15 | claim_reported_date | date | Y |
| 16 | claim_status | character varying(50) | Y |
| 17 | approve_date | date | Y |
| 18 | claim_paid_date | date | Y |
| 19 | age | numeric(3,0) | Y |
| 20 | sex | character varying(10) | Y |
| 21 | amount_life | numeric(25,15) | Y |
| 22 | accident_death | numeric(25,15) | Y |
| 23 | med_accident | numeric(25,15) | Y |
| 24 | amount_tpd | numeric(25,15) | Y |
| 25 | amount_ipd | numeric(25,15) | Y |
| 26 | amount_opd | numeric(25,15) | Y |
| 27 | amount_dental | numeric(25,15) | Y |
| 28 | amount_other | numeric(25,15) | Y |
| 29 | return_premium | numeric(25,15) | Y |
| 30 | exgratia_flag | character varying(10) | Y |
| 31 | created_date | timestamp with time zone | N |
| 32 | created_by | character varying(50) | N |
| 33 | updated_date | timestamp with time zone | Y |
| 34 | updated_by | character varying(50) | Y |
| 35 | sales_channel_abbr | character varying(20) | Y |

### `public.tx_rcc_output_r13_1` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r13_1_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | portfolio_id | character varying(20) | N |
| 5 | dae_acq | numeric(25,15) | N |
| 6 | dae_maint | numeric(25,15) | N |
| 7 | non_dae | numeric(25,15) | N |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | oic_free | numeric(25,15) | Y |
| 13 | sbt | numeric(25,15) | Y |
| 14 | investment | numeric(25,15) | Y |
| 15 | property | numeric(25,15) | Y |
| 16 | non_recurring | numeric(25,15) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | channel_index | character varying(100) | Y |
| 19 | model | character varying(50) | Y |
| 20 | portfolio_id_sub | character varying(3) | Y |

### `public.tx_rcc_output_r13_2` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r13_2_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | dae_acq | numeric(25,15) | N |
| 6 | dae_maint | numeric(25,15) | N |
| 7 | non_dae | numeric(25,15) | N |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | oic_free | numeric(25,15) | Y |
| 13 | sbt | numeric(25,15) | Y |
| 14 | investment | numeric(25,15) | Y |
| 15 | property | numeric(25,15) | Y |
| 16 | non_recurring | numeric(25,15) | Y |

### `public.tx_rcc_output_r13_brand` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_output_r13_brand_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |

### `public.tx_rcc_output_r13_product` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_output_r13_product_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |
| 23 | policy_no | character varying(20) | Y |
| 24 | prophet_plan_code | character varying(20) | Y |
| 25 | sales_channel_code_7 | character varying(10) | Y |
| 26 | business_line | character varying(2) | Y |
| 27 | period_effective_date | date | Y |
| 28 | mode_of_payment | character varying(2) | Y |
| 29 | annual_premium | numeric(25,15) | Y |
| 30 | modal_premium | numeric(25,15) | Y |
| 31 | basic_rider_indicator | character varying(20) | Y |
| 32 | commission_ov_type | character varying(20) | Y |
| 33 | initial_commission | numeric(25,15) | Y |
| 34 | renewal_commission | numeric(25,15) | Y |
| 35 | renewal_override | numeric(25,15) | Y |
| 36 | policy_year | numeric(2,0) | Y |
| 37 | effective_date | date | Y |
| 38 | end_coverage_date | date | Y |
| 39 | pay_from | date | Y |
| 40 | pay_to | date | Y |
| 41 | receive_date | date | Y |
| 42 | sale_option | character varying(50) | Y |
| 43 | comm_life | numeric(25,15) | Y |
| 44 | comm_accident | numeric(25,15) | Y |
| 45 | comm_med | numeric(25,15) | Y |
| 46 | comm_tpd | numeric(25,15) | Y |
| 47 | comm_ipd | numeric(25,15) | Y |
| 48 | comm_opd | numeric(25,15) | Y |
| 49 | comm_dental | numeric(25,15) | Y |
| 50 | comm_other | numeric(25,15) | Y |

### `public.tx_rcc_output_r13_sale` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_output_r13_sale_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |
| 23 | policy_no | character varying(20) | Y |
| 24 | prophet_plan_code | character varying(20) | Y |
| 25 | sales_channel_code_7 | character varying(10) | Y |
| 26 | business_line | character varying(2) | Y |
| 27 | period_effective_date | date | Y |
| 28 | mode_of_payment | character varying(2) | Y |
| 29 | annual_premium | numeric(25,15) | Y |
| 30 | modal_premium | numeric(25,15) | Y |
| 31 | basic_rider_indicator | character varying(20) | Y |
| 32 | commission_ov_type | character varying(20) | Y |
| 33 | initial_commission | numeric(25,15) | Y |
| 34 | renewal_commission | numeric(25,15) | Y |
| 35 | renewal_override | numeric(25,15) | Y |
| 36 | policy_year | numeric(2,0) | Y |
| 37 | effective_date | date | Y |
| 38 | end_coverage_date | date | Y |
| 39 | pay_from | date | Y |
| 40 | pay_to | date | Y |
| 41 | receive_date | date | Y |
| 42 | sale_option | character varying(50) | Y |
| 43 | comm_life | numeric(25,15) | Y |
| 44 | comm_accident | numeric(25,15) | Y |
| 45 | comm_med | numeric(25,15) | Y |
| 46 | comm_tpd | numeric(25,15) | Y |
| 47 | comm_ipd | numeric(25,15) | Y |
| 48 | comm_opd | numeric(25,15) | Y |
| 49 | comm_dental | numeric(25,15) | Y |
| 50 | comm_other | numeric(25,15) | Y |

### `public.tx_rcc_output_r14` — rows: 5613310

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r14_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | effective_date | date | Y |
| 11 | loan_type | character varying(50) | Y |
| 12 | loan_repay | character varying(50) | Y |
| 13 | prepayment_amount_total | numeric(25,15) | Y |
| 14 | prepayment_amount_principal | numeric(25,15) | Y |
| 15 | prepayment_amount_interest | numeric(25,15) | Y |
| 16 | loan_balance_bf_total | numeric(25,15) | Y |
| 17 | loan_balance_bf_principal | numeric(25,15) | Y |
| 18 | loan_balance_bf_accum_interest | numeric(25,15) | Y |
| 19 | loan_balance_af_total | numeric(25,15) | Y |
| 20 | loan_balance_af_principal | numeric(25,15) | Y |
| 21 | loan_balance_af_accum_interest | numeric(25,15) | Y |
| 22 | sub_group_id | character varying(50) | Y |
| 23 | created_date | timestamp with time zone | N |
| 24 | created_by | character varying(50) | N |
| 25 | updated_date | timestamp with time zone | Y |
| 26 | updated_by | character varying(50) | Y |
| 27 | sales_channel_abbr | character varying(20) | Y |
| 28 | event_code | character varying(25) | Y |
| 29 | repayment_from_claim_amount_total | numeric(25,15) | Y |
| 30 | repayment_from_claim_amount_principal | numeric(25,15) | Y |
| 31 | repayment_from_claim_amount_interest | numeric(25,15) | Y |
| 32 | repayment_from_benefit_amount_total | numeric(25,15) | Y |
| 33 | repayment_from_benefit_amount_principal | numeric(25,15) | Y |
| 34 | repayment_from_benefit_amount_interest | numeric(25,15) | Y |
| 35 | take_up_amount | numeric(25,15) | Y |
| 36 | compound_interest_amount | numeric(25,15) | Y |
| 37 | other_amount | numeric(25,15) | Y |
| 38 | event_type | character varying(50) | Y |
| 39 | reference_number | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_r14_id":"129779915","rcc_monthly_dt_id":"5588","period":"202401","policy_no":"1350505","portfolio_id":"ORD_END2019NSPO","plan_code":"O191","sales_channel":"Agent","sales_channel_code":"2072800","business_line":"02","effective_date":"2016-04-17T17:00:00.000Z","loan_type":"PL","loan_repay":null,"prepayment_amount_total":"0.000000000000000","prepayment_amount_principal":"0.000000000000000","prepayment_amount_interest":"0.000000000000000","loan_balance_bf_total":"22540.800000000000000","loan_balance_bf_principal":"19400.000000000000000","loan_balance_bf_accum_interest":"3140.800000000000000","loan_balance_af_total":"22662.300000000000000","loan_balance_af_principal":"19400.000000000000000","loan_balance_af_accum_interest":"3262.300000000000000","sub_group_id":"O191-2019-NSPO","created_date":"2026-05-23T04:29:01.063Z","created_by":"boss","updated_date":null,"updated_by":"","sales_channel_abbr":"AGT","event_code":"AIT_M_04","repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","take_up_amount":"0.000000000000000","compound_interest_amount":"-3140.800000000000000","other_amount":"-3140.800000000000000","event_type":"COMPOUNDINTEREST","reference_number":"202401010007EF"}
{"tx_rcc_output_r14_id":"129779916","rcc_monthly_dt_id":"5588","period":"202401","policy_no":"1583541","portfolio_id":"ORD_END2021NSPO","plan_code":"O539","sales_channel":"Agent","sales_channel_code":"2075812","business_line":"02","effective_date":"2021-11-30T17:00:00.000Z","loan_type":"APL","loan_repay":null,"prepayment_amount_total":"0.000000000000000","prepayment_amount_principal":"0.000000000000000","prepayment_amount_interest":"0.000000000000000","loan_balance_bf_total":"0.000000000000000","loan_balance_bf_principal":"0.000000000000000","loan_balance_bf_accum_interest":"0.000000000000000","loan_balance_af_total":"0.000000000000000","loan_balance_af_principal":"0.000000000000000","loan_balance_af_accum_interest":"0.000000000000000","sub_group_id":"O539-2021-NSPO","created_date":"2026-05-23T04:29:01.063Z","created_by":"boss","updated_date":null,"updated_by":"","sales_channel_abbr":"AGT","event_code":"APL_MAC_01","repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","take_up_amount":"508.000000000000000","compound_interest_amount":"0.000000000000000","other_amount":"0.000000000000000","event_type":"NEWLOAN","reference_number":"202401010006EF"}
```
</details>

### `public.tx_rcc_output_r15` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r15_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | treaty_code | character varying(50) | Y |
| 12 | effective_date | date | Y |
| 13 | ri_effective_date | date | Y |
| 14 | ri_mode_of_payment | character varying(2) | Y |
| 15 | ri_gross_premium | numeric(25,15) | Y |
| 16 | premium_type | character varying(10) | Y |
| 17 | ri_type | character varying(20) | Y |
| 18 | sub_ri_group_id | character varying(50) | Y |
| 19 | created_date | timestamp with time zone | N |
| 20 | created_by | character varying(50) | N |
| 21 | updated_date | timestamp with time zone | Y |
| 22 | updated_by | character varying(50) | Y |
| 23 | sales_channel_abbr | character varying(20) | Y |
| 24 | basic_rider_indicator | character varying(20) | Y |
| 25 | rider_type | character varying(4) | Y |

### `q_report.tx_rcc_output_r15_test` — rows: 1119805

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r15_id | numeric(18,0) | Y |
| 2 | rcc_monthly_dt_id | numeric(18,0) | Y |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | treaty_code | character varying(50) | Y |
| 12 | effective_date | date | Y |
| 13 | ri_effective_date | date | Y |
| 14 | ri_mode_of_payment | character varying(2) | Y |
| 15 | ri_gross_premium | numeric(25,15) | Y |
| 16 | premium_type | character varying(10) | Y |
| 17 | ri_type | character varying(20) | Y |
| 18 | sub_ri_group_id | character varying(50) | Y |
| 19 | created_date | timestamp with time zone | Y |
| 20 | created_by | character varying(50) | Y |
| 21 | updated_date | timestamp with time zone | Y |
| 22 | updated_by | character varying(50) | Y |
| 23 | sales_channel_abbr | character varying(20) | Y |
| 24 | basic_rider_indicator | character varying(20) | Y |
| 25 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_r15_id":"53014673","rcc_monthly_dt_id":"3064","period":"202404","policy_no":"C341498","portfolio_id":"","ri_portfolio_id":"ORD_MRN2021RING","plan_code":"L010","sales_channel":"Alternative1","sales_channel_code":"8140001","business_line":"03","treaty_code":"TOA_Grp_CL_NonCBank","effective_date":"2021-12-18T17:00:00.000Z","ri_effective_date":"2023-10-18T17:00:00.000Z","ri_mode_of_payment":"1","ri_gross_premium":"-3.590000000000000","premium_type":"Normal","ri_type":"Estimate","sub_ri_group_id":"L010-2021-RING","created_date":"2024-09-10T09:28:26.255Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALB","basic_rider_indicator":"RIDER","rider_type":null}
{"tx_rcc_output_r15_id":"52832326","rcc_monthly_dt_id":"3064","period":"202404","policy_no":"0200644","portfolio_id":"ORD_WOL2019NSPO","ri_portfolio_id":"ORD_MRN2019RING","plan_code":"O028","sales_channel":"Agent","sales_channel_code":"2070900","business_line":"02","treaty_code":"GIB_Ind_ORD_Med","effective_date":"2004-07-14T17:00:00.000Z","ri_effective_date":"2004-07-14T17:00:00.000Z","ri_mode_of_payment":"12","ri_gross_premium":"1301.150000000000000","premium_type":"Normal","ri_type":"Actual","sub_ri_group_id":"O028-2019-RING","created_date":"2024-09-10T09:26:13.835Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT","basic_rider_indicator":"BASIC","rider_type":null}
```
</details>

### `public.tx_rcc_output_r16` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r16_id | numeric(8,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | portfolio_id | character varying(50) | Y |
| 7 | ri_portfolio_id | character varying(50) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | treaty_code | character varying(50) | Y |
| 12 | effective_date | date | Y |
| 13 | ri_effective_date | date | Y |
| 14 | ri_mode_of_payment | character varying(2) | Y |
| 15 | ri_initial_commission | numeric(25,15) | Y |
| 16 | ri_renewal_commission | numeric(25,15) | Y |
| 17 | ri_type | character varying(20) | Y |
| 18 | sub_ri_group_id | character varying(50) | Y |
| 19 | commmission_type | character varying(20) | Y |
| 20 | created_date | timestamp with time zone | N |
| 21 | created_by | character varying(50) | N |
| 22 | updated_date | timestamp with time zone | Y |
| 23 | updated_by | character varying(50) | Y |
| 24 | sales_channel_abbr | character varying(20) | Y |
| 25 | basic_rider_indicator | character varying(20) | Y |
| 26 | rider_type | character varying(4) | Y |

### `public.tx_rcc_output_r17` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r17_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | portfolio_id | character varying(50) | Y |
| 7 | ri_portfolio_id | character varying(50) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | treaty_code | character varying(50) | Y |
| 12 | effective_date | date | Y |
| 13 | ri_effective_date | date | Y |
| 14 | ri_claim_status | character varying(50) | Y |
| 15 | claim_recovery_date | date | Y |
| 16 | total_sr | numeric(25,2) | Y |
| 17 | total_nar | numeric(25,2) | Y |
| 18 | recovery_amount_life | numeric(25,2) | Y |
| 19 | recovery_amount_accident_death | numeric(25,2) | Y |
| 20 | recovery_amount_accident_non_death | numeric(25,2) | Y |
| 21 | recovery_amount_health | numeric(25,2) | Y |
| 22 | recovery_amount_dismemberment | numeric(25,2) | Y |
| 23 | recovery_amount_tpd | numeric(25,2) | Y |
| 24 | recovery_amount_other | numeric(25,2) | Y |
| 25 | ri_return_premium | numeric(25,2) | Y |
| 26 | claim_recovery_expense | numeric(25,2) | Y |
| 27 | profit_commission | numeric(25,2) | Y |
| 28 | ri_type | character varying(20) | Y |
| 29 | sub_ri_group_id | character varying(50) | Y |
| 30 | basic_rider_indicator | character varying(20) | Y |
| 31 | created_date | timestamp with time zone | N |
| 32 | created_by | character varying(50) | N |
| 33 | updated_date | timestamp with time zone | Y |
| 34 | updated_by | character varying(50) | Y |
| 35 | sales_channel_abbr | character varying(20) | Y |
| 36 | rider_type | character varying(4) | Y |

### `public.tx_rcc_output_r18` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r18_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | treaty_code | character varying(50) | Y |
| 10 | ri_mode_of_payment | character varying(50) | Y |
| 11 | ri_pay_from | date | Y |
| 12 | ri_pay_to | date | Y |
| 13 | premium_type | character varying(50) | Y |
| 14 | sale_option | character varying(50) | Y |
| 15 | ri_gross_premium_life | numeric(25,2) | Y |
| 16 | ri_gross_premium_accident_death | numeric(25,2) | Y |
| 17 | ri_gross_premium_med_accident | numeric(25,2) | Y |
| 18 | ri_gross_premium_tpd | numeric(25,2) | Y |
| 19 | ri_gross_premium_ipd | numeric(25,2) | Y |
| 20 | ri_gross_premium_opd | numeric(25,2) | Y |
| 21 | ri_gross_premium_dental | numeric(25,2) | Y |
| 22 | ri_gross_premium_other | numeric(25,2) | Y |
| 23 | ri_type | character varying(20) | Y |
| 24 | sub_ri_group_id | character varying(50) | Y |
| 25 | ri_premium_life | numeric(25,2) | Y |
| 26 | ri_premium_accident | numeric(25,2) | Y |
| 27 | ri_premium_medical | numeric(25,2) | Y |
| 28 | created_date | timestamp with time zone | N |
| 29 | created_by | character varying(50) | N |
| 30 | updated_date | timestamp with time zone | Y |
| 31 | updated_by | character varying(50) | Y |
| 32 | policy_year | numeric(2,0) | Y |
| 33 | sales_channel_abbr | character varying(20) | Y |
| 34 | system_name | character varying(50) | Y |
| 35 | ri_period | character varying(6) | Y |
| 36 | reference_number | character varying(20) | Y |
| 37 | quarter_period | character varying(2) | Y |
| 38 | quarter_year | character varying(4) | Y |
| 39 | sales_channel_code | character varying(10) | Y |

### `public.tx_rcc_output_r19` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r19_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | treaty_code | character varying(50) | Y |
| 10 | ri_mode_of_payment | character varying(50) | Y |
| 11 | ri_pay_from | date | Y |
| 12 | ri_pay_to | date | Y |
| 13 | commission_type | character varying(50) | Y |
| 14 | sale_option | character varying(50) | Y |
| 15 | ri_gross_commission_life | numeric(25,2) | Y |
| 16 | ri_gross_commission_accident_death | numeric(25,2) | Y |
| 17 | ri_gross_commission_med_accident | numeric(25,2) | Y |
| 18 | ri_gross_commission_tpd | numeric(25,2) | Y |
| 19 | ri_gross_commission_ipd | numeric(25,2) | Y |
| 20 | ri_gross_commission_opd | numeric(25,2) | Y |
| 21 | ri_gross_commission_dental | numeric(25,2) | Y |
| 22 | ri_gross_commission_other | numeric(25,2) | Y |
| 23 | ri_type | character varying(20) | Y |
| 24 | sub_ri_group_id | character varying(50) | Y |
| 25 | ri_initial_commission | numeric(25,2) | Y |
| 26 | ri_renewal_commission | numeric(25,2) | Y |
| 27 | created_date | timestamp with time zone | N |
| 28 | created_by | character varying(50) | N |
| 29 | updated_date | timestamp with time zone | Y |
| 30 | updated_by | character varying(50) | Y |
| 31 | policy_year | numeric(2,0) | Y |
| 32 | sales_channel_abbr | character varying(20) | Y |
| 33 | system_name | character varying(50) | Y |
| 34 | ri_period | character varying(6) | Y |
| 35 | reference_number | character varying(20) | Y |
| 36 | quarter_period | character varying(2) | Y |
| 37 | quarter_year | character varying(4) | Y |
| 38 | sales_channel_code | character varying(10) | Y |

### `public.tx_rcc_output_r20` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_r20_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | policy_no | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | treaty_code | character varying(50) | Y |
| 10 | certificate_no | character varying(10) | Y |
| 11 | age | numeric(3,0) | Y |
| 12 | sex | character varying(10) | Y |
| 13 | claim_event_date | date | Y |
| 14 | claim_recovery_date | date | Y |
| 15 | sale_option | character varying(50) | Y |
| 16 | recovery_amount_life | numeric(25,2) | Y |
| 17 | recovery_amount_accident_death | numeric(25,2) | Y |
| 18 | recovery_amount_med_accident | numeric(25,2) | Y |
| 19 | recovery_amount_tpd | numeric(25,2) | Y |
| 20 | recovery_amount_ipd | numeric(25,2) | Y |
| 21 | recovery_amount_opd | numeric(25,2) | Y |
| 22 | recovery_amount_dental | numeric(25,2) | Y |
| 23 | recovery_amount_other | numeric(25,2) | Y |
| 24 | return_premium | numeric(25,2) | Y |
| 25 | claim_recovery_expense | numeric(25,2) | Y |
| 26 | profit_commission | numeric(25,2) | Y |
| 27 | ri_type | character varying(20) | Y |
| 28 | sub_ri_group_id | character varying(50) | Y |
| 29 | paid_amount_life | numeric(25,2) | Y |
| 30 | paid_amount_accident_death | numeric(25,2) | Y |
| 31 | paid_amount_health | numeric(25,2) | Y |
| 32 | created_date | timestamp with time zone | N |
| 33 | created_by | character varying(50) | N |
| 34 | updated_date | timestamp with time zone | Y |
| 35 | updated_by | character varying(50) | Y |
| 36 | policy_year | numeric(2,0) | Y |
| 37 | sales_channel_abbr | character varying(20) | Y |
| 38 | claim_no | character varying(25) | Y |
| 39 | ri_period | character varying(6) | Y |
| 40 | system_name | character varying(50) | Y |
| 41 | reference_number | character varying(20) | Y |
| 42 | quarter_period | character varying(2) | Y |
| 43 | quarter_year | character varying(4) | Y |
| 44 | sales_channel_code | character varying(10) | Y |
| 45 | ri_claim_status | character varying(20) | Y |

## R-output (snapshot backup) (19 tables)

### `public.tx_rcc_output_snapshot_r01` — rows: 3444154

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r01_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | effective_date | date | Y |
| 8 | mode_of_payment | character varying(2) | Y |
| 9 | annual_premium | numeric(25,15) | Y |
| 10 | modal_premium | numeric(25,15) | Y |
| 11 | basic_rider_indicator | character varying(20) | Y |
| 12 | sub_group_id | character varying(50) | Y |
| 13 | created_date | timestamp with time zone | N |
| 14 | created_by | character varying(50) | N |
| 15 | updated_date | timestamp with time zone | Y |
| 16 | updated_by | character varying(50) | Y |
| 17 | premium_amount | numeric(25,15) | Y |
| 18 | premium_due_date | date | Y |
| 19 | premium_type | character varying(10) | Y |
| 20 | sales_channel | character varying(50) | Y |
| 21 | sales_channel_code | character varying(10) | Y |
| 22 | sales_channel_abbr | character varying(20) | Y |
| 23 | rider_type | character varying(4) | Y |
| 24 | source_event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r01_id":"4664253","period":"202401","policy_no":"0668750","portfolio_id":"ORD_END2019NSPO","plan_code":"O084","business_line":"02","effective_date":"2011-07-31T17:00:00.000Z","mode_of_payment":"1","annual_premium":"11184.000000000000000","modal_premium":"932.000000000000000","basic_rider_indicator":"BASIC","sub_group_id":"O084-2019-NSPO","created_date":"2024-07-16T01:36:06.389Z","created_by":"boss","updated_date":null,"updated_by":null,"premium_amount":"0.000000000000000","premium_due_date":"2023-11-30T17:00:00.000Z","premium_type":"CV","sales_channel":"Agent","sales_channel_code":"2071009","sales_channel_abbr":"AGT","rider_type":null,"source_event_code":null}
{"tx_rcc_output_snapshot_r01_id":"4664254","period":"202401","policy_no":"1462180","portfolio_id":"ORD_END2019NSPO","plan_code":"O218","business_line":"02","effective_date":"2018-12-31T17:00:00.000Z","mode_of_payment":"1","annual_premium":"21600.000000000000000","modal_premium":"1800.000000000000000","basic_rider_indicator":"BASIC","sub_group_id":"O218-2019-NSPO","created_date":"2024-07-16T01:36:06.389Z","created_by":"boss","updated_date":null,"updated_by":null,"premium_amount":"1800.000000000000000","premium_due_date":"2023-11-30T17:00:00.000Z","premium_type":"CV","sales_channel":"Agent","sales_channel_code":"2076000","sales_channel_abbr":"AGT","rider_type":null,"source_event_code":null}
```
</details>

### `public.tx_rcc_output_snapshot_r02` — rows: 2542048

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r02_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | mode_of_payment | character varying(2) | Y |
| 11 | annual_premium | numeric(25,15) | Y |
| 12 | modal_premium | numeric(25,15) | Y |
| 13 | basic_rider_indicator | character varying(20) | Y |
| 14 | initial_commission | numeric(25,15) | Y |
| 15 | renewal_commission | numeric(25,15) | Y |
| 16 | initial_override | numeric(25,15) | Y |
| 17 | renewal_override | numeric(25,15) | Y |
| 18 | sub_group_id | character varying(50) | Y |
| 19 | created_date | timestamp with time zone | N |
| 20 | created_by | character varying(50) | N |
| 21 | updated_date | timestamp with time zone | Y |
| 22 | updated_by | character varying(50) | Y |
| 23 | commission_ov_type | character varying(20) | Y |
| 24 | sales_channel_abbr | character varying(20) | Y |
| 25 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r02_id":"3335167","period":"202401","policy_no":"1637939","portfolio_id":"ORD_END2023NSPO","plan_code":"RO19","sales_channel":"Agent","sales_channel_code":"2072800","business_line":"02","effective_date":"2023-01-04T17:00:00.000Z","mode_of_payment":"1","annual_premium":"1680.000000000000000","modal_premium":"140.000000000000000","basic_rider_indicator":"RIDER","initial_commission":"0.000000000000000","renewal_commission":"28.000000000000000","initial_override":"0.000000000000000","renewal_override":"0.000000000000000","sub_group_id":"O539-2023-NSPO","created_date":"2024-07-16T01:50:49.087Z","created_by":"boss","updated_date":null,"updated_by":null,"commission_ov_type":"ADVANCE","sales_channel_abbr":"AGT","rider_type":null}
{"tx_rcc_output_snapshot_r02_id":"3335168","period":"202401","policy_no":"1522277","portfolio_id":"ORD_END2020NSPO","plan_code":"RO37","sales_channel":"Agent","sales_channel_code":"2073200","business_line":"02","effective_date":"2020-01-28T17:00:00.000Z","mode_of_payment":"1","annual_premium":"1800.000000000000000","modal_premium":"150.000000000000000","basic_rider_indicator":"RIDER","initial_commission":"0.000000000000000","renewal_commission":"15.000000000000000","initial_override":"0.000000000000000","renewal_override":"0.000000000000000","sub_group_id":"O539-2020-NSPO","created_date":"2024-07-16T01:50:49.087Z","created_by":"boss","updated_date":null,"updated_by":null,"commission_ov_type":"ADVANCE","sales_channel_abbr":"AGT","rider_type":null}
```
</details>

### `public.tx_rcc_output_snapshot_r03` — rows: 64017

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r03_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | actual_sum_assured | numeric(25,15) | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | annual_premium | numeric(25,15) | Y |
| 13 | modal_premium | numeric(25,15) | Y |
| 14 | claim_event_date | date | Y |
| 15 | claim_reported_date | date | Y |
| 16 | claim_status | character varying(50) | Y |
| 17 | approve_date | date | Y |
| 18 | claim_paid_date | date | Y |
| 19 | policy_loan_principal_amount | numeric(25,15) | Y |
| 20 | policy_loan_interest_amount | numeric(25,15) | Y |
| 21 | apl_principal_amount | numeric(25,15) | Y |
| 22 | apl_interest_amount | numeric(25,15) | Y |
| 23 | other_liabilities_amount | numeric(25,15) | Y |
| 24 | paid_amount_life | numeric(25,15) | Y |
| 25 | paid_amount_accident_death | numeric(25,15) | Y |
| 26 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 27 | paid_amount_health | numeric(25,15) | Y |
| 28 | paid_amount_dismemberment | numeric(25,15) | Y |
| 29 | paid_amount_tpd | numeric(25,15) | Y |
| 30 | paid_amount_other | numeric(25,15) | Y |
| 31 | return_premium | numeric(25,15) | Y |
| 32 | investment_component | numeric(25,15) | Y |
| 33 | exgratia | character varying(20) | Y |
| 34 | co_payment_client_paid | numeric(25,15) | Y |
| 35 | premium_amount | numeric(25,15) | Y |
| 36 | claim_no | character varying(25) | Y |
| 37 | sub_group_id | character varying(50) | Y |
| 38 | sales_channel_abbr | character varying(20) | Y |
| 39 | created_date | timestamp with time zone | N |
| 40 | created_by | character varying(50) | N |
| 41 | updated_date | timestamp with time zone | Y |
| 42 | updated_by | character varying(50) | Y |
| 43 | insurance_component | numeric(25,15) | Y |
| 44 | unhealth_benefit_name | character varying(255) | Y |
| 45 | benefit_state | character varying(255) | Y |
| 46 | claim_coverage_code | character varying(10) | Y |
| 47 | claim_coverage_name | character varying(500) | Y |
| 48 | rider_type | character varying(4) | Y |
| 49 | source_event_code | character varying(10) | Y |
| 50 | register_no | character varying(25) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r03_id":"79920","period":"202401","policy_no":"1526875","portfolio_id":"ORD_WOL2020NSPO","plan_code":"RO25","sales_channel":"Alternative2","sales_channel_code":"8290001","business_line":"02","effective_date":"2020-06-13T17:00:00.000Z","actual_sum_assured":"1000.000000000000000","mode_of_payment":"1","annual_premium":"1404.000000000000000","modal_premium":"117.000000000000000","claim_event_date":"2023-12-29T17:00:00.000Z","claim_reported_date":"2023-12-29T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2023-12-29T17:00:00.000Z","claim_paid_date":"2024-01-01T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"1000.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"0999/12-2566/00506-01","sub_group_id":"OA41-2020-NSPO","sales_channel_abbr":"ALG","created_date":"2024-07-16T02:02:01.158Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":null,"source_event_code":null,"register_no":null}
{"tx_rcc_output_snapshot_r03_id":"79921","period":"202401","policy_no":"1542612","portfolio_id":"ORD_END2020NSPO","plan_code":"RO25","sales_channel":"Agent","sales_channel_code":"2072100","business_line":"02","effective_date":"2020-05-14T17:00:00.000Z","actual_sum_assured":"1500.000000000000000","mode_of_payment":"12","annual_premium":"1950.000000000000000","modal_premium":"1950.000000000000000","claim_event_date":"2023-12-25T17:00:00.000Z","claim_reported_date":"2023-12-27T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2023-12-27T17:00:00.000Z","claim_paid_date":"2024-01-01T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","paid_amount_life":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"4500.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","investment_component":"0.000000000000000","exgratia":"","co_payment_client_paid":"0.000000000000000","premium_amount":"0.000000000000000","claim_no":"0999/12-2566/00479-01","sub_group_id":"O539-2020-NSPO","sales_channel_abbr":"AGT","created_date":"2024-07-16T02:02:01.158Z","created_by":"boss","updated_date":null,"updated_by":null,"insurance_component":"0.000000000000000","unhealth_benefit_name":null,"benefit_state":null,"claim_coverage_code":null,"claim_coverage_name":null,"rider_type":null,"source_event_code":null,"register_no":null}
```
</details>

### `public.tx_rcc_output_snapshot_r04` — rows: 59614

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r04_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | mode_of_payment | character varying(2) | Y |
| 11 | annual_premium | numeric(25,15) | Y |
| 12 | modal_premium | numeric(25,15) | Y |
| 13 | paid_date | date | Y |
| 14 | policy_loan_principal_amount | numeric(25,15) | Y |
| 15 | policy_loan_interest_amount | numeric(25,15) | Y |
| 16 | apl_principal_amount | numeric(25,15) | Y |
| 17 | apl_interest_amount | numeric(25,15) | Y |
| 18 | other_liabilities_amount | numeric(25,15) | Y |
| 19 | annual_coupon | numeric(25,15) | Y |
| 20 | maturity_benefit | numeric(25,15) | Y |
| 21 | annuity_benefit | numeric(25,15) | Y |
| 22 | certain_annuity_benefit | numeric(25,15) | Y |
| 23 | life_annuity_benefit | numeric(25,15) | Y |
| 24 | ng_maturity_benefit | numeric(25,15) | Y |
| 25 | ng_annual_coupon | numeric(25,15) | Y |
| 26 | ng_annuity_benefit | numeric(25,15) | Y |
| 27 | surrender_benefit | numeric(25,15) | Y |
| 28 | lapse | numeric(25,15) | Y |
| 29 | other | numeric(25,15) | Y |
| 30 | sub_group_id | character varying(50) | Y |
| 31 | created_date | timestamp with time zone | N |
| 32 | created_by | character varying(50) | N |
| 33 | updated_date | timestamp with time zone | Y |
| 34 | updated_by | character varying(50) | Y |
| 35 | sales_channel_abbr | character varying(20) | Y |
| 36 | rider_type | character varying(4) | Y |
| 37 | source_event_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r04_id":"73359","period":"202401","policy_no":"1407507","portfolio_id":"ORD_END2019NSPO","plan_code":"O477","sales_channel":"Agent","sales_channel_code":"2071208","business_line":"02","effective_date":"2018-01-14T17:00:00.000Z","mode_of_payment":"12","annual_premium":"12800.000000000000000","modal_premium":"12800.000000000000000","paid_date":"2024-01-14T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","annual_coupon":"2000.000000000000000","maturity_benefit":"0.000000000000000","annuity_benefit":"0.000000000000000","certain_annuity_benefit":"0.000000000000000","life_annuity_benefit":"0.000000000000000","ng_maturity_benefit":"0.000000000000000","ng_annual_coupon":"0.000000000000000","ng_annuity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"O477-2019-NSPO","created_date":"2024-07-16T02:15:23.933Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT","rider_type":null,"source_event_code":null}
{"tx_rcc_output_snapshot_r04_id":"73360","period":"202401","policy_no":"0755903","portfolio_id":"ORD_END2019NSPO","plan_code":"O145","sales_channel":"Agent","sales_channel_code":"5073105","business_line":"02","effective_date":"2011-12-26T17:00:00.000Z","mode_of_payment":"1","annual_premium":"12720.000000000000000","modal_premium":"1060.000000000000000","paid_date":"2024-01-07T17:00:00.000Z","policy_loan_principal_amount":"0.000000000000000","policy_loan_interest_amount":"0.000000000000000","apl_principal_amount":"0.000000000000000","apl_interest_amount":"0.000000000000000","other_liabilities_amount":"0.000000000000000","annual_coupon":"0.000000000000000","maturity_benefit":"0.000000000000000","annuity_benefit":"0.000000000000000","certain_annuity_benefit":"0.000000000000000","life_annuity_benefit":"0.000000000000000","ng_maturity_benefit":"0.000000000000000","ng_annual_coupon":"0.000000000000000","ng_annuity_benefit":"0.000000000000000","surrender_benefit":"97334.430000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"O145-2019-NSPO","created_date":"2024-07-16T02:15:23.933Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT","rider_type":null,"source_event_code":null}
```
</details>

### `public.tx_rcc_output_snapshot_r05` — rows: 422

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r05_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | totalpremium_amount | numeric(25,15) | Y |
| 6 | unallocated_premium | numeric(25,15) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | premium_due_date | date | Y |
| 12 | effective_date | date | Y |
| 13 | mode_of_payment | character varying(2) | Y |
| 14 | annual_premium | numeric(25,15) | Y |
| 15 | modal_premium | numeric(25,15) | Y |
| 16 | basic_rider_indicator | character varying(20) | Y |
| 17 | premium_type | character varying(10) | Y |
| 18 | sub_group_id | character varying(50) | Y |
| 19 | redemption_value | numeric(25,15) | Y |
| 20 | alteration_type_code | numeric(5,0) | Y |
| 21 | source_event_code | character varying(10) | Y |
| 22 | created_date | timestamp with time zone | N |
| 23 | created_by | character varying(50) | N |
| 24 | updated_date | timestamp with time zone | Y |
| 25 | updated_by | character varying(50) | Y |
| 26 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r05_id":"85","period":"202404","policy_no":"UL00000479","portfolio_id":"UNT_LNK2024ONRS","totalpremium_amount":"15000.000000000000000","unallocated_premium":"15000.000000000000000","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2070116","business_line":"07","premium_due_date":"2025-04-29T17:00:00.000Z","effective_date":"2024-04-29T17:00:00.000Z","mode_of_payment":"12","annual_premium":"15000.000000000000000","modal_premium":"15000.000000000000000","basic_rider_indicator":"BASIC","premium_type":"REGULAR","sub_group_id":"RP01-2024-ONRS","redemption_value":"0.000000000000000","alteration_type_code":"45","source_event_code":"AC-0006","created_date":"2024-06-28T07:27:04.720Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r05_id":"86","period":"202404","policy_no":"UL00000466","portfolio_id":"UNT_LNK2024NSPO","totalpremium_amount":"0.000000000000000","unallocated_premium":"-15750.000000000000000","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2072300","business_line":"07","premium_due_date":"2025-03-28T17:00:00.000Z","effective_date":"2024-03-28T17:00:00.000Z","mode_of_payment":"12","annual_premium":"35000.000000000000000","modal_premium":"35000.000000000000000","basic_rider_indicator":"BASIC","premium_type":"REGULAR","sub_group_id":"RP01-2024-NSPO","redemption_value":"0.000000000000000","alteration_type_code":"45","source_event_code":"AC-0040","created_date":"2024-06-28T07:27:04.720Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
```
</details>

### `public.tx_rcc_output_snapshot_r06` — rows: 267

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r06_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | sales_channel | character varying(50) | Y |
| 6 | sales_channel_code | character varying(10) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | effective_date | date | Y |
| 9 | mode_of_payment | character varying(2) | Y |
| 10 | annual_premium | numeric(25,15) | Y |
| 11 | modal_premium | numeric(25,15) | Y |
| 12 | basic_rider_indicator | character varying(20) | Y |
| 13 | initial_commission | numeric(25,15) | Y |
| 14 | renewal_commission | numeric(25,15) | Y |
| 15 | initial_override | numeric(25,15) | Y |
| 16 | renewal_override | numeric(25,15) | Y |
| 17 | sub_group_id | character varying(50) | Y |
| 18 | created_date | timestamp with time zone | N |
| 19 | created_by | character varying(50) | N |
| 20 | updated_date | timestamp with time zone | Y |
| 21 | updated_by | character varying(50) | Y |
| 22 | plan_code | character varying(20) | Y |
| 23 | commission_ov_type | character varying(20) | Y |
| 24 | sales_channel_abbr | character varying(20) | Y |
| 25 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r06_id":"72","period":"202404","policy_no":"UL00000276","portfolio_id":"UNT_LNK2023NSPO","sales_channel":"Agent","sales_channel_code":"2073103","business_line":"07","effective_date":"2023-04-04T17:00:00.000Z","mode_of_payment":"1","annual_premium":"24000.000000000000000","modal_premium":"2000.000000000000000","basic_rider_indicator":"BASIC","initial_commission":"600.000000000000000","renewal_commission":"0.000000000000000","initial_override":"1142.790000000000000","renewal_override":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","created_date":"2024-06-28T07:28:27.457Z","created_by":"boss","updated_date":null,"updated_by":null,"plan_code":"RP01","commission_ov_type":"ACCRUED","sales_channel_abbr":"AGT","rider_type":null}
{"tx_rcc_output_snapshot_r06_id":"73","period":"202404","policy_no":"UL00000265","portfolio_id":"UNT_LNK2023NSPO","sales_channel":"Agent","sales_channel_code":"2071200","business_line":"07","effective_date":"2023-03-23T17:00:00.000Z","mode_of_payment":"12","annual_premium":"15000.000000000000000","modal_premium":"15000.000000000000000","basic_rider_indicator":"BASIC","initial_commission":"0.000000000000000","renewal_commission":"0.000000000000000","initial_override":"17.160000000000000","renewal_override":"158.000000000000000","sub_group_id":"RP01-2023-NSPO","created_date":"2024-06-28T07:28:27.457Z","created_by":"boss","updated_date":null,"updated_by":null,"plan_code":"RP01","commission_ov_type":"NORMAL","sales_channel_abbr":"AGT","rider_type":null}
```
</details>

### `public.tx_rcc_output_snapshot_r07` — rows: 5

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r07_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | mode_of_payment | character varying(2) | Y |
| 11 | annual_premium | numeric(25,15) | Y |
| 12 | modal_premium | numeric(25,15) | Y |
| 13 | claim_event_date | date | Y |
| 14 | claim_reported_date | date | Y |
| 15 | claim_status | character varying(20) | Y |
| 16 | approve_date | date | Y |
| 17 | claim_paid_date | date | Y |
| 18 | total_death_benefit | numeric(25,15) | Y |
| 19 | death_benefit_unit_cost | numeric(25,15) | Y |
| 20 | death_benefit_non_unit_cost | numeric(25,15) | Y |
| 21 | paid_amount_accident_death | numeric(25,15) | Y |
| 22 | paid_amount_accident_non_death | numeric(25,15) | Y |
| 23 | paid_amount_health | numeric(25,15) | Y |
| 24 | paid_amount_dismemberment | numeric(25,15) | Y |
| 25 | paid_amount_tpd | numeric(25,15) | Y |
| 26 | paid_amount_other | numeric(25,15) | Y |
| 27 | return_premium | numeric(25,15) | Y |
| 28 | other_liabilities_amount | numeric(25,15) | Y |
| 29 | av_at_death_event | numeric(25,15) | Y |
| 30 | surrender_charge1_rate_at_death | numeric(25,15) | Y |
| 31 | surrender_value | numeric(25,15) | Y |
| 32 | actual_sum_assured | numeric(25,15) | Y |
| 33 | surrender_charge_at_death_event | numeric(25,15) | Y |
| 34 | sub_group_id | character varying(50) | Y |
| 35 | receive_payment_type | character varying(20) | Y |
| 36 | alteration_type_code | numeric(5,0) | Y |
| 37 | source_event_code | character varying(10) | Y |
| 38 | sales_channel_abbr | character varying(20) | Y |
| 39 | created_date | timestamp with time zone | N |
| 40 | created_by | character varying(50) | N |
| 41 | updated_date | timestamp with time zone | Y |
| 42 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r07_id":"1","period":"202404","policy_no":"UL00000397","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073103","business_line":"07","effective_date":"2023-12-05T17:00:00.000Z","mode_of_payment":"12","annual_premium":"15000.000000000000000","modal_premium":"15000.000000000000000","claim_event_date":"2024-03-26T17:00:00.000Z","claim_reported_date":"2024-03-31T17:00:00.000Z","claim_status":"PROVISION","approve_date":null,"claim_paid_date":null,"total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","av_at_death_event":"1080000.000000000000000","surrender_charge1_rate_at_death":"0.450000000000000","surrender_value":"1080000.000000000000000","actual_sum_assured":"1080000.000000000000000","surrender_charge_at_death_event":"486000.000000000000000","sub_group_id":"RP01-2023-NSPO","receive_payment_type":"PROVISION","alteration_type_code":"53","source_event_code":"AC-0201","sales_channel_abbr":"AGT","created_date":"2024-06-28T07:29:40.193Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_output_snapshot_r07_id":"2","period":"202308","policy_no":"UL00002031","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2071202","business_line":"07","effective_date":"2023-07-26T17:00:00.000Z","mode_of_payment":"1","annual_premium":"48000.000000000000000","modal_premium":"4000.000000000000000","claim_event_date":"2023-07-25T17:00:00.000Z","claim_reported_date":"2023-07-26T17:00:00.000Z","claim_status":"RETURN","approve_date":"2023-07-30T17:00:00.000Z","claim_paid_date":null,"total_death_benefit":"1000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"0.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"1000.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","av_at_death_event":"1000.000000000000000","surrender_charge1_rate_at_death":"0.450000000000000","surrender_value":"1000.000000000000000","actual_sum_assured":"1440000.000000000000000","surrender_charge_at_death_event":"450.000000000000000","sub_group_id":"RP01-2023-NSPO","receive_payment_type":"ACCRUAL","alteration_type_code":"53","source_event_code":"AC-0222","sales_channel_abbr":"AGT","created_date":"2024-07-19T05:10:31.591Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_output_snapshot_r07_id":"3","period":"202308","policy_no":"UL00002031","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2071202","business_line":"07","effective_date":"2023-07-26T17:00:00.000Z","mode_of_payment":"1","annual_premium":"48000.000000000000000","modal_premium":"4000.000000000000000","claim_event_date":"2023-07-25T17:00:00.000Z","claim_reported_date":"2023-07-26T17:00:00.000Z","claim_status":"RETURN","approve_date":"2023-07-30T17:00:00.000Z","claim_paid_date":null,"total_death_benefit":"2200.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"2200.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","av_at_death_event":"2200.000000000000000","surrender_charge1_rate_at_death":"0.450000000000000","surrender_value":"2200.000000000000000","actual_sum_assured":"1440000.000000000000000","surrender_charge_at_death_event":"990.000000000000000","sub_group_id":"RP01-2023-NSPO","receive_payment_type":"ACCRUAL","alteration_type_code":"53","source_event_code":"AC-0222","sales_channel_abbr":"AGT","created_date":"2024-07-19T05:10:31.591Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_output_snapshot_r07_id":"4","period":"202305","policy_no":"UL00001978","portfolio_id":"UNT_LNK2023NSPO","plan_code":"SP02","sales_channel":"Agent","sales_channel_code":"2072900","business_line":"07","effective_date":"2023-02-02T17:00:00.000Z","mode_of_payment":"99","annual_premium":"879990.000000000000000","modal_premium":"879990.000000000000000","claim_event_date":"2023-01-31T17:00:00.000Z","claim_reported_date":"2023-02-05T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2023-05-11T17:00:00.000Z","claim_paid_date":"2023-05-15T17:00:00.000Z","total_death_benefit":"364831.930000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"364831.930000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","av_at_death_event":"364831.930000000000000","surrender_charge1_rate_at_death":"0.100000000000000","surrender_value":"364831.930000000000000","actual_sum_assured":"1055988.000000000000000","surrender_charge_at_death_event":"36483.193000000000000","sub_group_id":"SP02-2023-NSPO","receive_payment_type":"APPROVE","alteration_type_code":"53","source_event_code":"AC-0012","sales_channel_abbr":"AGT","created_date":"2024-07-19T08:05:42.307Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_output_snapshot_r07_id":"5","period":"202305","policy_no":"UL00001978","portfolio_id":"UNT_LNK2023NSPO","plan_code":"SP02","sales_channel":"Agent","sales_channel_code":"2072900","business_line":"07","effective_date":"2023-02-02T17:00:00.000Z","mode_of_payment":"99","annual_premium":"879990.000000000000000","modal_premium":"879990.000000000000000","claim_event_date":"2023-01-31T17:00:00.000Z","claim_reported_date":"2023-02-05T17:00:00.000Z","claim_status":"APPROVE","approve_date":"2023-05-11T17:00:00.000Z","claim_paid_date":"2023-05-15T17:00:00.000Z","total_death_benefit":"243221.290000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"243221.290000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","av_at_death_event":"243221.290000000000000","surrender_charge1_rate_at_death":"0.100000000000000","surrender_value":"243221.290000000000000","actual_sum_assured":"1055988.000000000000000","surrender_charge_at_death_event":"24322.129000000000000","sub_group_id":"SP02-2023-NSPO","receive_payment_type":"APPROVE","alteration_type_code":"53","source_event_code":"AC-0012","sales_channel_abbr":"AGT","created_date":"2024-07-19T08:05:42.307Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_output_snapshot_r08` — rows: 29

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r08_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | mode_of_payment | character varying(2) | Y |
| 11 | annual_premium | numeric(25,15) | Y |
| 12 | modal_premium | numeric(25,15) | Y |
| 13 | paid_date | date | Y |
| 14 | other_liabilities_amount | numeric(25,15) | Y |
| 15 | loyalty_bonus | numeric(25,15) | Y |
| 16 | maturity_benefit | numeric(25,15) | Y |
| 17 | surrender_benefit | numeric(25,15) | Y |
| 18 | lapse | numeric(25,15) | Y |
| 19 | other | numeric(25,15) | Y |
| 20 | sub_group_id | character varying(50) | Y |
| 21 | alteration_type_code | numeric(5,0) | Y |
| 22 | source_event_code | character varying(10) | Y |
| 23 | created_date | timestamp with time zone | N |
| 24 | created_by | character varying(50) | N |
| 25 | updated_date | timestamp with time zone | Y |
| 26 | updated_by | character varying(50) | Y |
| 27 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r08_id":"16","period":"202404","policy_no":"UL00000256","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2070116","business_line":"07","effective_date":"2023-02-20T17:00:00.000Z","mode_of_payment":"12","annual_premium":"12000.000000000000000","modal_premium":"12000.000000000000000","paid_date":null,"other_liabilities_amount":"0.000000000000000","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"31","source_event_code":"AC-0121","created_date":"2024-06-28T07:30:24.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r08_id":"17","period":"202404","policy_no":"UL00000258","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073103","business_line":"07","effective_date":"2023-03-15T17:00:00.000Z","mode_of_payment":"12","annual_premium":"15000.000000000000000","modal_premium":"15000.000000000000000","paid_date":null,"other_liabilities_amount":"0.000000000000000","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"31","source_event_code":"AC-0121","created_date":"2024-06-28T07:30:24.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r08_id":"18","period":"202404","policy_no":"UL00000257","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073103","business_line":"07","effective_date":"2023-03-01T17:00:00.000Z","mode_of_payment":"6","annual_premium":"14000.000000000000000","modal_premium":"7000.000000000000000","paid_date":null,"other_liabilities_amount":"0.000000000000000","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"31","source_event_code":"AC-0121","created_date":"2024-06-28T07:30:24.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r08_id":"19","period":"202404","policy_no":"UL00000260","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2070116","business_line":"07","effective_date":"2023-03-14T17:00:00.000Z","mode_of_payment":"12","annual_premium":"15000.000000000000000","modal_premium":"15000.000000000000000","paid_date":null,"other_liabilities_amount":"0.000000000000000","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"31","source_event_code":"AC-0121","created_date":"2024-06-28T07:30:24.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r08_id":"20","period":"202404","policy_no":"UL00000246","portfolio_id":"UNT_LNK2023NSPO","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073103","business_line":"07","effective_date":"2023-01-16T17:00:00.000Z","mode_of_payment":"1","annual_premium":"24000.000000000000000","modal_premium":"2000.000000000000000","paid_date":null,"other_liabilities_amount":"0.000000000000000","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"0.000000000000000","lapse":"0.000000000000000","other":"0.000000000000000","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"31","source_event_code":"AC-0121","created_date":"2024-06-28T07:30:24.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
```
</details>

### `public.tx_rcc_output_snapshot_r09` — rows: 1678

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r09_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | coi_charge | numeric(25,15) | Y |
| 6 | policy_fee | numeric(25,15) | Y |
| 7 | administration_fee | numeric(25,15) | Y |
| 8 | surrender_charge | numeric(25,15) | Y |
| 9 | reinstatement_fee | numeric(25,15) | Y |
| 10 | financial_statement_fee | numeric(25,15) | Y |
| 11 | fund_switching_fee | numeric(25,15) | Y |
| 12 | plan_code | character varying(20) | Y |
| 13 | sales_channel | character varying(50) | Y |
| 14 | sales_channel_code | character varying(10) | Y |
| 15 | effective_date | date | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | sub_group_id | character varying(50) | Y |
| 18 | alteration_type_code | numeric(5,0) | Y |
| 19 | source_event_code | character varying(10) | Y |
| 20 | created_date | timestamp with time zone | N |
| 21 | created_by | character varying(50) | N |
| 22 | updated_date | timestamp with time zone | Y |
| 23 | updated_by | character varying(50) | Y |
| 24 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r09_id":"2119","period":"202401","policy_no":"UL00000295","portfolio_id":"UNT_LNK2023NSPO","coi_charge":"356.340000000000000","policy_fee":"0.000000000000000","administration_fee":"2.840000000000000","surrender_charge":"0.000000000000000","reinstatement_fee":"0.000000000000000","financial_statement_fee":"0.000000000000000","fund_switching_fee":"0.000000000000000","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073103","effective_date":"2023-05-21T17:00:00.000Z","business_line":"07","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"34","source_event_code":"AC-0200","created_date":"2024-07-16T02:28:59.028Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
{"tx_rcc_output_snapshot_r09_id":"2120","period":"202401","policy_no":"UL00000412","portfolio_id":"UNT_LNK2023NSPO","coi_charge":"96.580000000000000","policy_fee":"0.000000000000000","administration_fee":"4.370000000000000","surrender_charge":"0.000000000000000","reinstatement_fee":"0.000000000000000","financial_statement_fee":"0.000000000000000","fund_switching_fee":"0.000000000000000","plan_code":"RP01","sales_channel":"Agent","sales_channel_code":"2073200","effective_date":"2023-12-24T17:00:00.000Z","business_line":"07","sub_group_id":"RP01-2023-NSPO","alteration_type_code":"34","source_event_code":"AC-0200","created_date":"2024-07-16T02:28:59.028Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT"}
```
</details>

### `public.tx_rcc_output_snapshot_r10` — rows: 4454

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r10_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | policy_year | numeric(2,0) | Y |
| 5 | effective_date | date | Y |
| 6 | end_coverage_date | date | Y |
| 7 | portfolio_id | character varying(50) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | pay_from | date | Y |
| 13 | pay_to | date | Y |
| 14 | invoice_date | date | Y |
| 15 | no_of_member | numeric(10,0) | Y |
| 16 | receive_date | date | Y |
| 17 | prem_type | character varying(25) | Y |
| 18 | sale_option | character varying(50) | Y |
| 19 | actual_prem_life | numeric(25,15) | Y |
| 20 | actual_prem_acc_death | numeric(25,15) | Y |
| 21 | actual_prem_med_acc | numeric(25,15) | Y |
| 22 | actual_prem_tpd | numeric(25,15) | Y |
| 23 | actual_prem_ipd | numeric(25,15) | Y |
| 24 | actual_prem_opd | numeric(25,15) | Y |
| 25 | actual_prem_dental | numeric(25,15) | Y |
| 26 | actual_prem_other | numeric(25,15) | Y |
| 27 | prem_life | numeric(25,15) | Y |
| 28 | prem_acc | numeric(25,15) | Y |
| 29 | prem_med | numeric(25,15) | Y |
| 30 | created_date | timestamp with time zone | N |
| 31 | created_by | character varying(50) | N |
| 32 | updated_date | timestamp with time zone | Y |
| 33 | updated_by | character varying(50) | Y |
| 34 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r10_id":"5553","period":"202401","policy_no":"GH4301","policy_year":"8","effective_date":"2023-11-30T17:00:00.000Z","end_coverage_date":"2024-11-29T17:00:00.000Z","portfolio_id":"GRP_YRT2023NSPO","sales_channel":"Alternative2","sales_channel_code":"8300001","business_line":"03","mode_of_payment":"12","pay_from":"2023-11-30T17:00:00.000Z","pay_to":"2024-11-29T17:00:00.000Z","invoice_date":"2016-12-15T17:00:00.000Z","no_of_member":"0","receive_date":null,"prem_type":"ACCRUED_PREMIUM","sale_option":"ประกันชีวิตกลุ่ม","actual_prem_life":"-8400.000000000000000","actual_prem_acc_death":"-29400.000000000000000","actual_prem_med_acc":"0.000000000000000","actual_prem_tpd":"-8400.000000000000000","actual_prem_ipd":"-134400.000000000000000","actual_prem_opd":"-176400.000000000000000","actual_prem_dental":"0.000000000000000","actual_prem_other":"0.000000000000000","prem_life":"-8400.000000000000000","prem_acc":"-37800.000000000000000","prem_med":"-310800.000000000000000","created_date":"2024-07-16T02:30:59.322Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
{"tx_rcc_output_snapshot_r10_id":"5554","period":"202401","policy_no":"GU5185","policy_year":"2","effective_date":"2023-05-31T17:00:00.000Z","end_coverage_date":"2024-05-30T17:00:00.000Z","portfolio_id":"GRP_YRT2023NSPO","sales_channel":"Alternative2","sales_channel_code":"8200001","business_line":"03","mode_of_payment":"12","pay_from":"2023-05-31T17:00:00.000Z","pay_to":"2024-05-30T17:00:00.000Z","invoice_date":"2023-06-21T17:00:00.000Z","no_of_member":"164","receive_date":"2024-01-03T17:00:00.000Z","prem_type":"NORMAL","sale_option":"ประกันชีวิตกลุ่ม","actual_prem_life":"156620.000000000000000","actual_prem_acc_death":"46200.000000000000000","actual_prem_med_acc":"0.000000000000000","actual_prem_tpd":"0.000000000000000","actual_prem_ipd":"0.000000000000000","actual_prem_opd":"0.000000000000000","actual_prem_dental":"0.000000000000000","actual_prem_other":"0.000000000000000","prem_life":"156620.000000000000000","prem_acc":"46200.000000000000000","prem_med":"0.000000000000000","created_date":"2024-07-16T02:30:59.322Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
```
</details>

### `public.tx_rcc_output_snapshot_r11` — rows: 3607

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r11_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | policy_year | numeric(2,0) | Y |
| 5 | effective_date | date | Y |
| 6 | end_coverage_date | date | Y |
| 7 | portfolio_id | character varying(50) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | mode_of_payment | character varying(2) | Y |
| 12 | pay_from | date | Y |
| 13 | pay_to | date | Y |
| 14 | receive_date | date | Y |
| 15 | sale_option | character varying(50) | Y |
| 16 | comm_life | numeric(25,15) | Y |
| 17 | comm_accident | numeric(25,15) | Y |
| 18 | comm_med | numeric(25,15) | Y |
| 19 | comm_tpd | numeric(25,15) | Y |
| 20 | comm_ipd | numeric(25,15) | Y |
| 21 | comm_opd | numeric(25,15) | Y |
| 22 | comm_dental | numeric(25,15) | Y |
| 23 | comm_other | numeric(25,15) | Y |
| 24 | comm_ov_type | character varying(25) | Y |
| 25 | initial_commission | numeric(25,15) | Y |
| 26 | renewal_commission | numeric(25,15) | Y |
| 27 | initial_override | numeric(25,15) | Y |
| 28 | renewal_override | numeric(25,15) | Y |
| 29 | created_date | timestamp with time zone | N |
| 30 | created_by | character varying(50) | N |
| 31 | updated_date | timestamp with time zone | Y |
| 32 | updated_by | character varying(50) | Y |
| 33 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r11_id":"4579","period":"202401","policy_no":"GU4727","policy_year":"5","effective_date":"2023-03-11T17:00:00.000Z","end_coverage_date":"2024-03-10T17:00:00.000Z","portfolio_id":"GRP_YRT2023NSPO","sales_channel":"Alternative2","sales_channel_code":"8200001","business_line":"03","mode_of_payment":"12","pay_from":"2023-12-11T17:00:00.000Z","pay_to":"2024-03-10T17:00:00.000Z","receive_date":"2019-03-18T17:00:00.000Z","sale_option":"โบรกเกอร์","comm_life":"-985.740000000000000","comm_accident":"-197.150000000000000","comm_med":"0.000000000000000","comm_tpd":"0.000000000000000","comm_ipd":"0.000000000000000","comm_opd":"0.000000000000000","comm_dental":"0.000000000000000","comm_other":"0.000000000000000","comm_ov_type":"ACCRUED","initial_commission":"0.000000000000000","renewal_commission":"-1182.890000000000000","initial_override":"0.000000000000000","renewal_override":"0.000000000000000","created_date":"2024-07-16T02:32:55.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
{"tx_rcc_output_snapshot_r11_id":"4580","period":"202401","policy_no":"GH5057","policy_year":"2","effective_date":"2022-08-31T17:00:00.000Z","end_coverage_date":"2023-08-30T17:00:00.000Z","portfolio_id":"GRP_YRT2022NSPO","sales_channel":"Alternative2","sales_channel_code":"8300001","business_line":"03","mode_of_payment":"12","pay_from":"2022-08-31T17:00:00.000Z","pay_to":"2023-08-30T17:00:00.000Z","receive_date":"2021-09-02T17:00:00.000Z","sale_option":"โบรกเกอร์","comm_life":"83.960000000000000","comm_accident":"31.700000000000000","comm_med":"0.000000000000000","comm_tpd":"8.740000000000000","comm_ipd":"191.960000000000000","comm_opd":"77.080000000000000","comm_dental":"0.000000000000000","comm_other":"0.000000000000000","comm_ov_type":"ACCRUED","initial_commission":"0.000000000000000","renewal_commission":"393.440000000000000","initial_override":"0.000000000000000","renewal_override":"0.000000000000000","created_date":"2024-07-16T02:32:55.893Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
```
</details>

### `public.tx_rcc_output_snapshot_r12` — rows: 560957

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r12_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | policy_year | numeric(2,0) | Y |
| 5 | effective_date | date | Y |
| 6 | end_coverage_date | date | Y |
| 7 | portfolio_id | character varying(50) | Y |
| 8 | sales_channel | character varying(50) | Y |
| 9 | sales_channel_code | character varying(10) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | certificate_no | character varying(50) | Y |
| 12 | claim_no | character varying(25) | Y |
| 13 | claim_event_date | date | Y |
| 14 | claim_reported_date | date | Y |
| 15 | claim_status | character varying(50) | Y |
| 16 | approve_date | date | Y |
| 17 | claim_paid_date | date | Y |
| 18 | age | numeric(3,0) | Y |
| 19 | sex | character varying(10) | Y |
| 20 | amount_life | numeric(25,15) | Y |
| 21 | accident_death | numeric(25,15) | Y |
| 22 | med_accident | numeric(25,15) | Y |
| 23 | amount_tpd | numeric(25,15) | Y |
| 24 | amount_ipd | numeric(25,15) | Y |
| 25 | amount_opd | numeric(25,15) | Y |
| 26 | amount_dental | numeric(25,15) | Y |
| 27 | amount_other | numeric(25,15) | Y |
| 28 | return_premium | numeric(25,15) | Y |
| 29 | exgratia_flag | character varying(10) | Y |
| 30 | created_date | timestamp with time zone | N |
| 31 | created_by | character varying(50) | N |
| 32 | updated_date | timestamp with time zone | Y |
| 33 | updated_by | character varying(50) | Y |
| 34 | sales_channel_abbr | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r12_id":"688446","period":"202401","policy_no":"GH3907","policy_year":"11","effective_date":"2023-08-31T17:00:00.000Z","end_coverage_date":"2024-08-30T17:00:00.000Z","portfolio_id":"GRP_YRT2023NSPO","sales_channel":"Alternative2","sales_channel_code":"8300001","business_line":"03","certificate_no":"00282","claim_no":"202312027091","claim_event_date":"2023-12-12T17:00:00.000Z","claim_reported_date":"2023-12-24T17:00:00.000Z","claim_status":"PROVISION","approve_date":null,"claim_paid_date":null,"age":"39","sex":"M","amount_life":"0.000000000000000","accident_death":"0.000000000000000","med_accident":"0.000000000000000","amount_tpd":"0.000000000000000","amount_ipd":"0.000000000000000","amount_opd":"-1500.000000000000000","amount_dental":"0.000000000000000","amount_other":"0.000000000000000","return_premium":"0.000000000000000","exgratia_flag":"","created_date":"2024-07-16T02:34:50.570Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
{"tx_rcc_output_snapshot_r12_id":"688447","period":"202401","policy_no":"GH5008","policy_year":"3","effective_date":"2023-05-31T17:00:00.000Z","end_coverage_date":"2024-05-30T17:00:00.000Z","portfolio_id":"GRP_YRT2023NSPO","sales_channel":"Alternative2","sales_channel_code":"8300001","business_line":"03","certificate_no":"00240","claim_no":"202312033120","claim_event_date":"2023-12-25T17:00:00.000Z","claim_reported_date":"2023-12-27T17:00:00.000Z","claim_status":"PROVISION","approve_date":null,"claim_paid_date":null,"age":"46","sex":"M","amount_life":"0.000000000000000","accident_death":"0.000000000000000","med_accident":"0.000000000000000","amount_tpd":"0.000000000000000","amount_ipd":"0.000000000000000","amount_opd":"-670.000000000000000","amount_dental":"0.000000000000000","amount_other":"0.000000000000000","return_premium":"0.000000000000000","exgratia_flag":"","created_date":"2024-07-16T02:34:50.570Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALG"}
```
</details>

### `public.tx_rcc_output_snapshot_r14` — rows: 5612368

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r14_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | plan_code | character varying(20) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | sales_channel_code | character varying(10) | Y |
| 8 | business_line | character varying(2) | Y |
| 9 | effective_date | date | Y |
| 10 | loan_type | character varying(50) | Y |
| 11 | loan_repay | character varying(50) | Y |
| 12 | prepayment_amount_total | numeric(25,15) | Y |
| 13 | prepayment_amount_principal | numeric(25,15) | Y |
| 14 | prepayment_amount_interest | numeric(25,15) | Y |
| 15 | loan_balance_bf_total | numeric(25,15) | Y |
| 16 | loan_balance_bf_principal | numeric(25,15) | Y |
| 17 | loan_balance_bf_accum_interest | numeric(25,15) | Y |
| 18 | loan_balance_af_total | numeric(25,15) | Y |
| 19 | loan_balance_af_principal | numeric(25,15) | Y |
| 20 | loan_balance_af_accum_interest | numeric(25,15) | Y |
| 21 | sub_group_id | character varying(50) | Y |
| 22 | created_date | timestamp with time zone | N |
| 23 | created_by | character varying(50) | N |
| 24 | updated_date | timestamp with time zone | Y |
| 25 | updated_by | character varying(50) | Y |
| 26 | sales_channel_abbr | character varying(20) | Y |
| 27 | event_code | character varying(25) | Y |
| 28 | repayment_from_claim_amount_total | numeric(25,15) | Y |
| 29 | repayment_from_claim_amount_principal | numeric(25,15) | Y |
| 30 | repayment_from_claim_amount_interest | numeric(25,15) | Y |
| 31 | repayment_from_benefit_amount_total | numeric(25,15) | Y |
| 32 | repayment_from_benefit_amount_principal | numeric(25,15) | Y |
| 33 | repayment_from_benefit_amount_interest | numeric(25,15) | Y |
| 34 | take_up_amount | numeric(25,15) | Y |
| 35 | compound_interest_amount | numeric(25,15) | Y |
| 36 | other_amount | numeric(25,15) | Y |
| 37 | event_type | character varying(50) | Y |
| 38 | reference_number | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r14_id":"7533189","period":"202401","policy_no":"1350505","portfolio_id":"ORD_END2019NSPO","plan_code":"O191","sales_channel":"Agent","sales_channel_code":"2072800","business_line":"02","effective_date":"2016-04-17T17:00:00.000Z","loan_type":"PL","loan_repay":"","prepayment_amount_total":"0.000000000000000","prepayment_amount_principal":"0.000000000000000","prepayment_amount_interest":"0.000000000000000","loan_balance_bf_total":"22540.800000000000000","loan_balance_bf_principal":"19400.000000000000000","loan_balance_bf_accum_interest":"3140.800000000000000","loan_balance_af_total":"22662.300000000000000","loan_balance_af_principal":"19400.000000000000000","loan_balance_af_accum_interest":"3262.300000000000000","sub_group_id":"O191-2019-NSPO","created_date":"2024-07-16T02:43:35.874Z","created_by":"boss","updated_date":null,"updated_by":"","sales_channel_abbr":"AGT","event_code":"AIT_M_04","repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","take_up_amount":"0.000000000000000","compound_interest_amount":"-3140.800000000000000","other_amount":"-3140.800000000000000","event_type":"COMPOUNDINTEREST","reference_number":"202401010007EF"}
{"tx_rcc_output_snapshot_r14_id":"7533190","period":"202401","policy_no":"1583541","portfolio_id":"ORD_END2021NSPO","plan_code":"O539","sales_channel":"Agent","sales_channel_code":"2075812","business_line":"02","effective_date":"2021-11-30T17:00:00.000Z","loan_type":"APL","loan_repay":"","prepayment_amount_total":"0.000000000000000","prepayment_amount_principal":"0.000000000000000","prepayment_amount_interest":"0.000000000000000","loan_balance_bf_total":"0.000000000000000","loan_balance_bf_principal":"0.000000000000000","loan_balance_bf_accum_interest":"0.000000000000000","loan_balance_af_total":"0.000000000000000","loan_balance_af_principal":"0.000000000000000","loan_balance_af_accum_interest":"0.000000000000000","sub_group_id":"O539-2021-NSPO","created_date":"2024-07-16T02:43:18.202Z","created_by":"boss","updated_date":null,"updated_by":"","sales_channel_abbr":"AGT","event_code":"APL_MAC_01","repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","take_up_amount":"508.000000000000000","compound_interest_amount":"0.000000000000000","other_amount":"0.000000000000000","event_type":"NEWLOAN","reference_number":"202401010006EF"}
```
</details>

### `public.tx_rcc_output_snapshot_r15` — rows: 1647300

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r15_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | ri_portfolio_id | character varying(50) | Y |
| 6 | plan_code | character varying(20) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | treaty_code | character varying(50) | Y |
| 11 | effective_date | date | Y |
| 12 | ri_effective_date | date | Y |
| 13 | ri_mode_of_payment | character varying(2) | Y |
| 14 | ri_gross_premium | numeric(25,15) | Y |
| 15 | premium_type | character varying(10) | Y |
| 16 | ri_type | character varying(20) | Y |
| 17 | sub_ri_group_id | character varying(50) | Y |
| 18 | created_date | timestamp with time zone | N |
| 19 | created_by | character varying(50) | N |
| 20 | updated_date | timestamp with time zone | Y |
| 21 | updated_by | character varying(50) | Y |
| 22 | sales_channel_abbr | character varying(20) | Y |
| 23 | basic_rider_indicator | character varying(20) | Y |
| 24 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r15_id":"527517","period":"202404","policy_no":"C494288","portfolio_id":"ORD_TRM2023NSPO","ri_portfolio_id":"ORD_MRN2023RING","plan_code":"L010","sales_channel":"Alternative1","sales_channel_code":"8140001","business_line":"03","treaty_code":"Mapfre_Grp_CL_NonCBank","effective_date":"2023-05-30T17:00:00.000Z","ri_effective_date":"2023-05-30T17:00:00.000Z","ri_mode_of_payment":"1","ri_gross_premium":"0.960000000000000","premium_type":"Normal","ri_type":"Actual","sub_ri_group_id":"L010-2023-RING","created_date":"2024-06-28T07:58:27.563Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALB","basic_rider_indicator":"RIDER","rider_type":null}
{"tx_rcc_output_snapshot_r15_id":"527518","period":"202404","policy_no":"C500808","portfolio_id":"ORD_TRM2023NSPO","ri_portfolio_id":"ORD_MRN2023RING","plan_code":"L010","sales_channel":"Alternative1","sales_channel_code":"8140001","business_line":"03","treaty_code":"Mapfre_Grp_CL_NonCBank","effective_date":"2023-06-07T17:00:00.000Z","ri_effective_date":"2023-06-07T17:00:00.000Z","ri_mode_of_payment":"1","ri_gross_premium":"20.250000000000000","premium_type":"Normal","ri_type":"Actual","sub_ri_group_id":"L010-2023-RING","created_date":"2024-06-28T07:58:27.563Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALB","basic_rider_indicator":"RIDER","rider_type":null}
```
</details>

### `public.tx_rcc_output_snapshot_r16` — rows: 168265

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r16_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | plan_code | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | treaty_code | character varying(50) | Y |
| 11 | effective_date | date | Y |
| 12 | ri_effective_date | date | Y |
| 13 | ri_mode_of_payment | character varying(2) | Y |
| 14 | ri_initial_commission | numeric(25,15) | Y |
| 15 | ri_renewal_commission | numeric(25,15) | Y |
| 16 | ri_type | character varying(20) | Y |
| 17 | sub_ri_group_id | character varying(50) | Y |
| 18 | commmission_type | character varying(20) | Y |
| 19 | created_date | timestamp with time zone | N |
| 20 | created_by | character varying(50) | N |
| 21 | updated_date | timestamp with time zone | Y |
| 22 | updated_by | character varying(50) | Y |
| 23 | sales_channel_abbr | character varying(20) | Y |
| 24 | basic_rider_indicator | character varying(20) | Y |
| 25 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r16_id":"152680","period":"202401","policy_no":"1112368","plan_code":"RO24","portfolio_id":"ORD_END2019NSPO","ri_portfolio_id":"INR_CIN2019RINC","sales_channel":"Agent","sales_channel_code":"2074200","business_line":"02","treaty_code":"TOA_Ind_CB_Rider","effective_date":"2014-12-08T17:00:00.000Z","ri_effective_date":"2014-12-08T17:00:00.000Z","ri_mode_of_payment":"1","ri_initial_commission":"0.000000000000000","ri_renewal_commission":"-199.410000000000000","ri_type":"Estimate","sub_ri_group_id":"RO24-2019-RINC","commmission_type":"Refund","created_date":"2024-07-18T09:29:41.221Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT","basic_rider_indicator":"RIDER","rider_type":null}
{"tx_rcc_output_snapshot_r16_id":"152681","period":"202401","policy_no":"0866228","plan_code":"RO24","portfolio_id":"ORD_WOL2019NSPO","ri_portfolio_id":"INR_CIN2019RINC","sales_channel":"Agent","sales_channel_code":"2071209","business_line":"02","treaty_code":"TOA_Ind_CB_Rider","effective_date":"2012-05-18T17:00:00.000Z","ri_effective_date":"2012-05-18T17:00:00.000Z","ri_mode_of_payment":"1","ri_initial_commission":"0.000000000000000","ri_renewal_commission":"-74.250000000000000","ri_type":"Estimate","sub_ri_group_id":"RO24-2019-RINC","commmission_type":"Refund","created_date":"2024-07-18T09:29:41.221Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"AGT","basic_rider_indicator":"RIDER","rider_type":null}
```
</details>

### `public.tx_rcc_output_snapshot_r17` — rows: 18824

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r17_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | plan_code | character varying(20) | Y |
| 5 | portfolio_id | character varying(50) | Y |
| 6 | ri_portfolio_id | character varying(50) | Y |
| 7 | sales_channel | character varying(50) | Y |
| 8 | sales_channel_code | character varying(10) | Y |
| 9 | business_line | character varying(2) | Y |
| 10 | treaty_code | character varying(50) | Y |
| 11 | effective_date | date | Y |
| 12 | ri_effective_date | date | Y |
| 13 | ri_claim_status | character varying(50) | Y |
| 14 | claim_recovery_date | date | Y |
| 15 | total_sr | numeric(25,2) | Y |
| 16 | total_nar | numeric(25,2) | Y |
| 17 | recovery_amount_life | numeric(25,2) | Y |
| 18 | recovery_amount_accident_death | numeric(25,2) | Y |
| 19 | recovery_amount_accident_non_death | numeric(25,2) | Y |
| 20 | recovery_amount_health | numeric(25,2) | Y |
| 21 | recovery_amount_dismemberment | numeric(25,2) | Y |
| 22 | recovery_amount_tpd | numeric(25,2) | Y |
| 23 | recovery_amount_other | numeric(25,2) | Y |
| 24 | ri_return_premium | numeric(25,2) | Y |
| 25 | claim_recovery_expense | numeric(25,2) | Y |
| 26 | profit_commission | numeric(25,2) | Y |
| 27 | ri_type | character varying(20) | Y |
| 28 | sub_ri_group_id | character varying(50) | Y |
| 29 | basic_rider_indicator | character varying(20) | Y |
| 30 | created_date | timestamp with time zone | N |
| 31 | created_by | character varying(50) | N |
| 32 | updated_date | timestamp with time zone | Y |
| 33 | updated_by | character varying(50) | Y |
| 34 | sales_channel_abbr | character varying(20) | Y |
| 35 | rider_type | character varying(4) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r17_id":"136","period":"202404","policy_no":"C525632","plan_code":"L010","portfolio_id":"ORD_TRM2023NSPO","ri_portfolio_id":"ORD_MRN2023RING","sales_channel":"Alternative1","sales_channel_code":"8140001","business_line":"03","treaty_code":"Mapfre_Grp_CL_NonCBank","effective_date":"2023-11-20T17:00:00.000Z","ri_effective_date":"2023-11-20T17:00:00.000Z","ri_claim_status":"","claim_recovery_date":null,"total_sr":"0.00","total_nar":"0.00","recovery_amount_life":"0.00","recovery_amount_accident_death":"0.00","recovery_amount_accident_non_death":"0.00","recovery_amount_health":"0.00","recovery_amount_dismemberment":"0.00","recovery_amount_tpd":"0.00","recovery_amount_other":"0.00","ri_return_premium":"0.00","claim_recovery_expense":"0.00","profit_commission":"114.48","ri_type":"Actual","sub_ri_group_id":"L010-2023-RING","basic_rider_indicator":"BASIC","created_date":"2024-06-28T08:17:16.334Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALB","rider_type":null}
{"tx_rcc_output_snapshot_r17_id":"137","period":"202404","policy_no":"C526859","plan_code":"L010","portfolio_id":"ORD_TRM2023NSPO","ri_portfolio_id":"ORD_MRN2023RING","sales_channel":"Alternative1","sales_channel_code":"8140001","business_line":"03","treaty_code":"Mapfre_Grp_CL_NonCBank","effective_date":"2023-11-12T17:00:00.000Z","ri_effective_date":"2023-11-12T17:00:00.000Z","ri_claim_status":"","claim_recovery_date":null,"total_sr":"0.00","total_nar":"0.00","recovery_amount_life":"0.00","recovery_amount_accident_death":"0.00","recovery_amount_accident_non_death":"0.00","recovery_amount_health":"0.00","recovery_amount_dismemberment":"0.00","recovery_amount_tpd":"0.00","recovery_amount_other":"0.00","ri_return_premium":"0.00","claim_recovery_expense":"0.00","profit_commission":"111.36","ri_type":"Actual","sub_ri_group_id":"L010-2023-RING","basic_rider_indicator":"BASIC","created_date":"2024-06-28T08:17:16.326Z","created_by":"boss","updated_date":null,"updated_by":null,"sales_channel_abbr":"ALB","rider_type":null}
```
</details>

### `public.tx_rcc_output_snapshot_r18` — rows: 1374

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r18_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | ri_portfolio_id | character varying(50) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | treaty_code | character varying(50) | Y |
| 9 | ri_mode_of_payment | character varying(50) | Y |
| 10 | ri_pay_from | date | Y |
| 11 | ri_pay_to | date | Y |
| 12 | premium_type | character varying(50) | Y |
| 13 | sale_option | character varying(50) | Y |
| 14 | ri_gross_premium_life | numeric(25,2) | Y |
| 15 | ri_gross_premium_accident_death | numeric(25,2) | Y |
| 16 | ri_gross_premium_med_accident | numeric(25,2) | Y |
| 17 | ri_gross_premium_tpd | numeric(25,2) | Y |
| 18 | ri_gross_premium_ipd | numeric(25,2) | Y |
| 19 | ri_gross_premium_opd | numeric(25,2) | Y |
| 20 | ri_gross_premium_dental | numeric(25,2) | Y |
| 21 | ri_gross_premium_other | numeric(25,2) | Y |
| 22 | ri_type | character varying(20) | Y |
| 23 | sub_ri_group_id | character varying(50) | Y |
| 24 | ri_premium_life | numeric(25,2) | Y |
| 25 | ri_premium_accident | numeric(25,2) | Y |
| 26 | ri_premium_medical | numeric(25,2) | Y |
| 27 | created_date | timestamp with time zone | N |
| 28 | created_by | character varying(50) | N |
| 29 | updated_date | timestamp with time zone | Y |
| 30 | updated_by | character varying(50) | Y |
| 31 | policy_year | numeric(2,0) | Y |
| 32 | sales_channel_abbr | character varying(20) | Y |
| 33 | system_name | character varying(50) | Y |
| 34 | ri_period | character varying(6) | Y |
| 35 | reference_number | character varying(20) | Y |
| 36 | quarter_period | character varying(2) | Y |
| 37 | quarter_year | character varying(4) | Y |
| 38 | sales_channel_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r18_id":"356","period":"202404","policy_no":"GL4356","portfolio_id":"GRP_YRT2023NSPO","ri_portfolio_id":"GRP_RPA2023RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_pay_from":"2023-03-31T17:00:00.000Z","ri_pay_to":"2024-03-30T17:00:00.000Z","premium_type":"Normal","sale_option":"ประกันชีวิตกลุ่ม","ri_gross_premium_life":"-716.15","ri_gross_premium_accident_death":"-429.69","ri_gross_premium_med_accident":"0.00","ri_gross_premium_tpd":"0.00","ri_gross_premium_ipd":"0.00","ri_gross_premium_opd":"0.00","ri_gross_premium_dental":"0.00","ri_gross_premium_other":"0.00","ri_type":"Actual","sub_ri_group_id":"GRP_RPA2023RINC","ri_premium_life":"-716.15","ri_premium_accident":"-429.69","ri_premium_medical":"0.00","created_date":"2024-07-11T03:27:01.756Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"7","sales_channel_abbr":"ALG","system_name":"MANUAL_RI","ri_period":"202304","reference_number":"202404100015EI","quarter_period":"","quarter_year":"2023","sales_channel_code":"8300001"}
{"tx_rcc_output_snapshot_r18_id":"357","period":"202404","policy_no":"GL5349","portfolio_id":"GRP_YRT2023NSPO","ri_portfolio_id":"GRP_RPA2023RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_pay_from":"2023-05-31T17:00:00.000Z","ri_pay_to":"2024-05-30T17:00:00.000Z","premium_type":"Normal","sale_option":"โบรกเกอร์","ri_gross_premium_life":"545.45","ri_gross_premium_accident_death":"282.92","ri_gross_premium_med_accident":"0.00","ri_gross_premium_tpd":"0.00","ri_gross_premium_ipd":"0.00","ri_gross_premium_opd":"0.00","ri_gross_premium_dental":"0.00","ri_gross_premium_other":"0.00","ri_type":"Actual","sub_ri_group_id":"GRP_RPA2023RINC","ri_premium_life":"545.45","ri_premium_accident":"282.92","ri_premium_medical":"0.00","created_date":"2024-07-11T03:27:01.756Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"1","sales_channel_abbr":"ALG","system_name":"MANUAL_RI","ri_period":"202306","reference_number":"202404100015EI","quarter_period":"","quarter_year":"2023","sales_channel_code":"8300001"}
```
</details>

### `public.tx_rcc_output_snapshot_r19` — rows: 2654

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r19_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | ri_portfolio_id | character varying(50) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | treaty_code | character varying(50) | Y |
| 9 | ri_mode_of_payment | character varying(50) | Y |
| 10 | ri_pay_from | date | Y |
| 11 | ri_pay_to | date | Y |
| 12 | commission_type | character varying(50) | Y |
| 13 | sale_option | character varying(50) | Y |
| 14 | ri_gross_commission_life | numeric(25,2) | Y |
| 15 | ri_gross_commission_accident_death | numeric(25,2) | Y |
| 16 | ri_gross_commission_med_accident | numeric(25,2) | Y |
| 17 | ri_gross_commission_tpd | numeric(25,2) | Y |
| 18 | ri_gross_commission_ipd | numeric(25,2) | Y |
| 19 | ri_gross_commission_opd | numeric(25,2) | Y |
| 20 | ri_gross_commission_dental | numeric(25,2) | Y |
| 21 | ri_gross_commission_other | numeric(25,2) | Y |
| 22 | ri_type | character varying(20) | Y |
| 23 | sub_ri_group_id | character varying(50) | Y |
| 24 | ri_initial_commission | numeric(25,2) | Y |
| 25 | ri_renewal_commission | numeric(25,2) | Y |
| 26 | created_date | timestamp with time zone | N |
| 27 | created_by | character varying(50) | N |
| 28 | updated_date | timestamp with time zone | Y |
| 29 | updated_by | character varying(50) | Y |
| 30 | policy_year | numeric(2,0) | Y |
| 31 | sales_channel_abbr | character varying(20) | Y |
| 32 | system_name | character varying(50) | Y |
| 33 | ri_period | character varying(6) | Y |
| 34 | reference_number | character varying(20) | Y |
| 35 | quarter_period | character varying(2) | Y |
| 36 | quarter_year | character varying(4) | Y |
| 37 | sales_channel_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r19_id":"1730","period":"202401","policy_no":"GH4400","portfolio_id":"GRP_YRT2022NSPO","ri_portfolio_id":"GRP_RPA2022RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_pay_from":"2022-05-31T17:00:00.000Z","ri_pay_to":"2023-05-30T17:00:00.000Z","commission_type":"Normal","sale_option":"ประกันชีวิตกลุ่ม","ri_gross_commission_life":"86.63","ri_gross_commission_accident_death":"51.98","ri_gross_commission_med_accident":"0.00","ri_gross_commission_tpd":"0.00","ri_gross_commission_ipd":"0.00","ri_gross_commission_opd":"0.00","ri_gross_commission_dental":"0.00","ri_gross_commission_other":"0.00","ri_type":"Actual","sub_ri_group_id":"GRP_RPA2022RINC","ri_initial_commission":"0.00","ri_renewal_commission":"138.61","created_date":"2024-07-18T10:01:42.119Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"6","sales_channel_abbr":"ALG","system_name":"REVERSE","ri_period":"202206","reference_number":"202401080023EI","quarter_period":"Q2","quarter_year":"2023","sales_channel_code":"8300001"}
{"tx_rcc_output_snapshot_r19_id":"1731","period":"202401","policy_no":"GH5182","portfolio_id":"GRP_YRT2022NSPO","ri_portfolio_id":"GRP_RPA2022RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","ri_mode_of_payment":"12","ri_pay_from":"2022-05-31T17:00:00.000Z","ri_pay_to":"2023-05-30T17:00:00.000Z","commission_type":"Normal","sale_option":"โบรกเกอร์","ri_gross_commission_life":"2049.77","ri_gross_commission_accident_death":"1845.39","ri_gross_commission_med_accident":"0.00","ri_gross_commission_tpd":"0.00","ri_gross_commission_ipd":"0.00","ri_gross_commission_opd":"0.00","ri_gross_commission_dental":"0.00","ri_gross_commission_other":"0.00","ri_type":"Actual","sub_ri_group_id":"GRP_RPA2022RINC","ri_initial_commission":"3895.16","ri_renewal_commission":"0.00","created_date":"2024-07-18T10:01:42.119Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"1","sales_channel_abbr":"ALG","system_name":"MANUAL_RI","ri_period":"202206","reference_number":"202401080019EI","quarter_period":"Q2","quarter_year":"2023","sales_channel_code":"8300001"}
```
</details>

### `public.tx_rcc_output_snapshot_r20` — rows: 60477

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_output_snapshot_r20_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | policy_no | character varying(20) | Y |
| 4 | portfolio_id | character varying(50) | Y |
| 5 | ri_portfolio_id | character varying(50) | Y |
| 6 | sales_channel | character varying(50) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | treaty_code | character varying(50) | Y |
| 9 | certificate_no | character varying(10) | Y |
| 10 | age | numeric(3,0) | Y |
| 11 | sex | character varying(10) | Y |
| 12 | claim_event_date | date | Y |
| 13 | claim_recovery_date | date | Y |
| 14 | sale_option | character varying(50) | Y |
| 15 | recovery_amount_life | numeric(25,2) | Y |
| 16 | recovery_amount_accident_death | numeric(25,2) | Y |
| 17 | recovery_amount_med_accident | numeric(25,2) | Y |
| 18 | recovery_amount_tpd | numeric(25,2) | Y |
| 19 | recovery_amount_ipd | numeric(25,2) | Y |
| 20 | recovery_amount_opd | numeric(25,2) | Y |
| 21 | recovery_amount_dental | numeric(25,2) | Y |
| 22 | recovery_amount_other | numeric(25,2) | Y |
| 23 | return_premium | numeric(25,2) | Y |
| 24 | claim_recovery_expense | numeric(25,2) | Y |
| 25 | profit_commission | numeric(25,2) | Y |
| 26 | ri_type | character varying(20) | Y |
| 27 | sub_ri_group_id | character varying(50) | Y |
| 28 | paid_amount_life | numeric(25,2) | Y |
| 29 | paid_amount_accident_death | numeric(25,2) | Y |
| 30 | paid_amount_health | numeric(25,2) | Y |
| 31 | created_date | timestamp with time zone | N |
| 32 | created_by | character varying(50) | N |
| 33 | updated_date | timestamp with time zone | Y |
| 34 | updated_by | character varying(50) | Y |
| 35 | policy_year | numeric(2,0) | Y |
| 36 | sales_channel_abbr | character varying(20) | Y |
| 37 | claim_no | character varying(25) | Y |
| 38 | ri_period | character varying(6) | Y |
| 39 | system_name | character varying(50) | Y |
| 40 | reference_number | character varying(20) | Y |
| 41 | quarter_period | character varying(2) | Y |
| 42 | quarter_year | character varying(4) | Y |
| 43 | sales_channel_code | character varying(10) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_output_snapshot_r20_id":"75451","period":"202401","policy_no":"GL4363","portfolio_id":"GRP_YRT2022NSPO","ri_portfolio_id":"GRP_RPA2022RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","certificate_no":null,"age":null,"sex":null,"claim_event_date":null,"claim_recovery_date":null,"sale_option":"ประกันชีวิตกลุ่ม","recovery_amount_life":"15000.00","recovery_amount_accident_death":"15000.00","recovery_amount_med_accident":"0.00","recovery_amount_tpd":"0.00","recovery_amount_ipd":"0.00","recovery_amount_opd":"0.00","recovery_amount_dental":"0.00","recovery_amount_other":"0.00","return_premium":"0.00","claim_recovery_expense":"0.00","profit_commission":"0.00","ri_type":"Actual","sub_ri_group_id":"GRP_RPA2022RINC","paid_amount_life":"15000.00","paid_amount_accident_death":"15000.00","paid_amount_health":"0.00","created_date":"2024-07-18T10:01:56.393Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"6","sales_channel_abbr":"ALG","claim_no":"","ri_period":"202204","system_name":"MANUAL_RI","reference_number":"202401080019EI","quarter_period":"","quarter_year":"","sales_channel_code":"8300001"}
{"tx_rcc_output_snapshot_r20_id":"75452","period":"202401","policy_no":"GL4363","portfolio_id":"GRP_YRT2023NSPO","ri_portfolio_id":"GRP_RPA2023RINC","sales_channel":"Alternative2","business_line":"03","treaty_code":"GIB_Grp_Direct_EB","certificate_no":null,"age":null,"sex":null,"claim_event_date":null,"claim_recovery_date":null,"sale_option":"ประกันชีวิตกลุ่ม","recovery_amount_life":"-15000.00","recovery_amount_accident_death":"-15000.00","recovery_amount_med_accident":"0.00","recovery_amount_tpd":"0.00","recovery_amount_ipd":"0.00","recovery_amount_opd":"0.00","recovery_amount_dental":"0.00","recovery_amount_other":"0.00","return_premium":"0.00","claim_recovery_expense":"0.00","profit_commission":"0.00","ri_type":"Estimate","sub_ri_group_id":"GRP_RPA2023RINC","paid_amount_life":"-15000.00","paid_amount_accident_death":"-15000.00","paid_amount_health":"0.00","created_date":"2024-07-18T10:01:56.393Z","created_by":"boss","updated_date":null,"updated_by":null,"policy_year":"7","sales_channel_abbr":"ALG","claim_no":"","ri_period":"","system_name":"MANUAL_RI","reference_number":"202401080017EI","quarter_period":"Q2","quarter_year":"2023","sales_channel_code":"8300001"}
```
</details>

## R reconcile staging (19 tables)

### `public.tx_rcc_reconcile_r01` — rows: 8097

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r01_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | Y |
| 5 | account_code | character varying(20) | Y |
| 6 | account_name | character varying(100) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | amount | numeric(30,15) | N |
| 10 | adj_posting | numeric(30,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r01_id":"1","rcc_monthly_dt_id":"1","period":"202210","disclosure_type":"Life","account_code":"50521111","account_name":"ส่วนลดตรงเบี้ยประกันชีวิต - ปีแรก","business_line":"01","plan_code":"ALL","amount":"144513.000000000000000","adj_posting":"-144513.000000000000000","created_date":"2022-11-02T02:12:56.604Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:12:56.604Z","updated_by":"vanchalerm.wa"}
{"tx_rcc_recon_r01_id":"2","rcc_monthly_dt_id":"1","period":"202210","disclosure_type":"","account_code":"50522132","account_name":"คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป","business_line":"02","plan_code":"","amount":"440.360000000000000","adj_posting":"-440.360000000000000","created_date":"2022-11-02T02:12:58.600Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:12:58.600Z","updated_by":"vanchalerm.wa"}
```
</details>

### `public.tx_rcc_reconcile_r02` — rows: 10561

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r02_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r02_id":"211","rcc_monthly_dt_id":"283","period":"202304","disclosure_type":"Life","account_code":"50551219","account_name":"ค่าบริหารทีมงานพิเศษ","business_line":"01","plan_code":"ALL","amount":"-16.000000000000000","adj_posting":"16.000000000000000","created_date":"2023-05-20T17:40:19.841Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:40:19.841Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r02_id":"212","rcc_monthly_dt_id":"283","period":"202304","disclosure_type":"Life","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"01","plan_code":"ALL","amount":"1862043.770000000000000","adj_posting":"-1862043.770000000000000","created_date":"2023-05-20T17:40:21.454Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:40:21.454Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r03` — rows: 7820

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r03_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r03_id":"1","rcc_monthly_dt_id":"11","period":"202210","disclosure_type":"","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"02","plan_code":"","amount":"4953188.400000000000000","adj_posting":"-4953188.400000000000000","created_date":"2023-05-16T06:51:02.393Z","created_by":"piyawat.ju","updated_date":"2023-05-16T06:51:02.393Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r03_id":"2","rcc_monthly_dt_id":"11","period":"202210","disclosure_type":"Life","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"01","plan_code":"ALL","amount":"1998097.070000000000000","adj_posting":"-1998097.070000000000000","created_date":"2023-05-16T06:51:02.393Z","created_by":"piyawat.ju","updated_date":"2023-05-16T06:51:02.393Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r04` — rows: 7092

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r04_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r04_id":"272","rcc_monthly_dt_id":"305","period":"202301","disclosure_type":"Life","account_code":"50541005","account_name":"ครบกำหนดสัญญา","business_line":"01","plan_code":"","amount":"258715091.500000000000000","adj_posting":"-258715091.500000000000000","created_date":"2023-05-23T03:46:48.122Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:48.122Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r04_id":"273","rcc_monthly_dt_id":"305","period":"202301","disclosure_type":"","account_code":"50541005","account_name":"ครบกำหนดสัญญา","business_line":"02","plan_code":"","amount":"67159868.000000000000000","adj_posting":"-67159868.000000000000000","created_date":"2023-05-23T03:46:50.132Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.132Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r05` — rows: 766

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r05_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r05_id":"1","rcc_monthly_dt_id":"51","period":"202304","disclosure_type":"Investment","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"07","plan_code":"ALL","amount":"-206000.000000000000000","adj_posting":"206000.000000000000000","created_date":"2023-05-18T08:53:15.313Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:15.313Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r05_id":"2","rcc_monthly_dt_id":"51","period":"202304","disclosure_type":"Investment","account_code":"40511400","account_name":"เบี้ยประกันภัยเพิ่มพิเศษ(Top up Premium)","business_line":"07","plan_code":"ALL","amount":"-5000.000000000000000","adj_posting":"5000.000000000000000","created_date":"2023-05-18T08:53:16.850Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:16.850Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r06` — rows: 1431

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r06_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r06_id":"1","rcc_monthly_dt_id":"52","period":"202304","disclosure_type":"Investment","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"07","plan_code":"ALL","amount":"42000.000000000000000","adj_posting":"-42000.000000000000000","created_date":"2023-05-18T08:53:40.175Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:40.175Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r06_id":"2","rcc_monthly_dt_id":"52","period":"202304","disclosure_type":"Investment","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"07","plan_code":"ALL","amount":"41236.000000000000000","adj_posting":"-41236.000000000000000","created_date":"2023-05-18T08:53:42.162Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:42.162Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r07` — rows: 34

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r07_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r07_id":"1","rcc_monthly_dt_id":"2154","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-04-22T16:18:53.196Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_recon_r07_id":"2","rcc_monthly_dt_id":"2175","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-04-29T17:17:32.996Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_recon_r07_id":"3","rcc_monthly_dt_id":"2196","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-05-10T09:20:08.729Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_recon_r07_id":"4","rcc_monthly_dt_id":"2217","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-05-12T13:21:51.062Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_recon_r07_id":"5","rcc_monthly_dt_id":"2242","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-05-13T14:56:35.394Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_r08` — rows: 279

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r08_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r08_id":"1","rcc_monthly_dt_id":"709","period":"202308","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","amount":"20105.180000000000000","adj_posting":"-20105.180000000000000","created_date":"2023-09-19T03:11:44.015Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"tx_rcc_recon_r08_id":"2","rcc_monthly_dt_id":"709","period":"202308","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","plan_code":"ALL","amount":"191.460000000000000","adj_posting":"-191.460000000000000","created_date":"2023-09-19T03:11:44.015Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_r09` — rows: 482

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r09_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r09_id":"1","rcc_monthly_dt_id":"55","period":"202304","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","amount":"-30912.590000000000000","adj_posting":"30912.590000000000000","created_date":"2023-05-18T08:54:42.863Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:54:42.863Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r09_id":"2","rcc_monthly_dt_id":"55","period":"202304","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","amount":"-4155.610000000000000","adj_posting":"4155.610000000000000","created_date":"2023-05-18T08:54:44.543Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:54:44.543Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r10` — rows: 1557

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r10_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r10_id":"49","rcc_monthly_dt_id":"291","period":"202304","disclosure_type":"Short-term","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"03","plan_code":"ALL","amount":"-84617616.780000000000000","adj_posting":"84617616.780000000000000","created_date":"2023-05-20T17:28:29.987Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:28:29.987Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r10_id":"50","rcc_monthly_dt_id":"291","period":"202304","disclosure_type":"Short-term","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"03","plan_code":"ALL","amount":"-180237522.630000000000000","adj_posting":"180237522.630000000000000","created_date":"2023-05-20T17:28:32.899Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:28:32.899Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r11` — rows: 633

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r11_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r11_id":"1","rcc_monthly_dt_id":"75","period":"202304","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"03","plan_code":"ALL","amount":"8735499.410000000000000","adj_posting":"-8735499.410000000000000","created_date":"2023-05-18T09:56:00.636Z","created_by":"piyawat.ju","updated_date":"2023-05-18T09:56:00.636Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r11_id":"2","rcc_monthly_dt_id":"75","period":"202304","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","amount":"46861.850000000000000","adj_posting":"-46861.850000000000000","created_date":"2023-05-18T09:56:00.636Z","created_by":"piyawat.ju","updated_date":"2023-05-18T09:56:00.636Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r12` — rows: 1070

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r12_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r12_id":"61","rcc_monthly_dt_id":"293","period":"202304","disclosure_type":"Short-term","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"03","plan_code":"ALL","amount":"111573200.000000000000000","adj_posting":"-111573200.000000000000000","created_date":"2023-05-20T17:27:55.140Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:27:55.140Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r12_id":"62","rcc_monthly_dt_id":"293","period":"202304","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"03","plan_code":"ALL","amount":"5050000.000000000000000","adj_posting":"-5050000.000000000000000","created_date":"2023-05-20T17:27:58.793Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:27:58.793Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r14` — rows: 8310

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r14_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |
| 15 | event_type | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r14_id":"176","rcc_monthly_dt_id":"315","period":"202301","disclosure_type":"Policy Loan","account_code":"42022110","account_name":"ดอกเบี้ยรับ - เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","amount":"-10989958.000000000000000","adj_posting":"10989958.000000000000000","created_date":"2023-05-23T03:46:50.128Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.128Z","updated_by":"piyawat.ju","event_type":null}
{"tx_rcc_recon_r14_id":"177","rcc_monthly_dt_id":"315","period":"202301","disclosure_type":"Policy Loan","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","amount":"-31969600.000000000000000","adj_posting":"31969600.000000000000000","created_date":"2023-05-23T03:46:50.128Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.128Z","updated_by":"piyawat.ju","event_type":null}
```
</details>

### `public.tx_rcc_reconcile_r15` — rows: 4679

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r15_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r15_id":"124","rcc_monthly_dt_id":"316","period":"202301","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"02","plan_code":"ALL","amount":"7098.510000000000000","adj_posting":"-7098.510000000000000","created_date":"2023-05-23T03:47:30.447Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:47:30.447Z","updated_by":"piyawat.ju"}
{"tx_rcc_recon_r15_id":"125","rcc_monthly_dt_id":"316","period":"202301","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"04","plan_code":"ALL","amount":"418978.450000000000000","adj_posting":"-418978.450000000000000","created_date":"2023-05-23T03:47:30.447Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:47:30.447Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_reconcile_r16` — rows: 1191

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r16_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r16_id":"39","rcc_monthly_dt_id":"297","period":"202304","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","amount":"-12425.390000000000000","adj_posting":"12425.390000000000000","created_date":"2023-05-20T17:29:59.481Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:29:59.481Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r16_id":"40","rcc_monthly_dt_id":"297","period":"202304","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","amount":"-292684.240000000000000","adj_posting":"292684.240000000000000","created_date":"2023-05-20T17:29:59.481Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:29:59.481Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r17` — rows: 1984

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r17_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r17_id":"17","rcc_monthly_dt_id":"298","period":"202304","disclosure_type":"Life-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","amount":"-103539.000000000000000","adj_posting":"103539.000000000000000","created_date":"2023-05-20T17:30:22.645Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:22.645Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r17_id":"18","rcc_monthly_dt_id":"298","period":"202304","disclosure_type":"Life-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"MRTA/MLTA","amount":"-5072777.610000000000000","adj_posting":"5072777.610000000000000","created_date":"2023-05-20T17:30:23.587Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:23.587Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r18` — rows: 1006

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r18_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r18_id":"31","rcc_monthly_dt_id":"299","period":"202304","disclosure_type":"Short-term-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","amount":"450303.410000000000000","adj_posting":"-450303.410000000000000","created_date":"2023-05-20T17:30:50.774Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:50.774Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r18_id":"32","rcc_monthly_dt_id":"299","period":"202304","disclosure_type":"Short-term-Re","account_code":"50531210","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.","business_line":"03","plan_code":"ALL","amount":"1735848.130000000000000","adj_posting":"-1735848.130000000000000","created_date":"2023-05-20T17:30:54.737Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:54.737Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r19` — rows: 509

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r19_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r19_id":"41","rcc_monthly_dt_id":"300","period":"202304","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","amount":"-12425.390000000000000","adj_posting":"12425.390000000000000","created_date":"2023-05-20T17:31:16.731Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:16.731Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r19_id":"42","rcc_monthly_dt_id":"300","period":"202304","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","amount":"-292684.240000000000000","adj_posting":"292684.240000000000000","created_date":"2023-05-20T17:31:16.731Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:16.731Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_reconcile_r20` — rows: 1168

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_recon_r20_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | amount | numeric(25,15) | N |
| 10 | adj_posting | numeric(25,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_recon_r20_id":"31","rcc_monthly_dt_id":"301","period":"202304","disclosure_type":"Short-term-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","amount":"-103539.000000000000000","adj_posting":"103539.000000000000000","created_date":"2023-05-20T17:31:37.054Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:37.054Z","updated_by":"chanapai.gi"}
{"tx_rcc_recon_r20_id":"32","rcc_monthly_dt_id":"301","period":"202304","disclosure_type":"Short-term-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"ALL","amount":"-6398577.610000000000000","adj_posting":"6398577.610000000000000","created_date":"2023-05-20T17:31:38.861Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:38.861Z","updated_by":"chanapai.gi"}
```
</details>

## R adjustment staging (20 tables)

### `public.tx_rcc_adj_r01` — rows: 8097

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r01_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | Y |
| 5 | account_code | character varying(20) | Y |
| 6 | account_name | character varying(100) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r01_id":"1","rcc_monthly_dt_id":"1","period":"202210","disclosure_type":"Life","account_code":"50521111","account_name":"ส่วนลดตรงเบี้ยประกันชีวิต - ปีแรก","business_line":"01","plan_code":"ALL","adj_posting":"-144513.000000000000000","created_date":"2022-11-02T02:12:56.672Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:12:56.672Z","updated_by":"vanchalerm.wa"}
{"tx_rcc_adj_r01_id":"2","rcc_monthly_dt_id":"1","period":"202210","disclosure_type":"","account_code":"50522132","account_name":"คืนเบี้ยตรงเบี้ยประกันสุขภาพ - ปีต่อไป","business_line":"02","plan_code":"","adj_posting":"-440.360000000000000","created_date":"2022-11-02T02:12:58.633Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:12:58.633Z","updated_by":"vanchalerm.wa"}
```
</details>

### `public.tx_rcc_adj_r02` — rows: 10561

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r02_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r02_id":"211","rcc_monthly_dt_id":"283","period":"202304","disclosure_type":"Life","account_code":"50551219","account_name":"ค่าบริหารทีมงานพิเศษ","business_line":"01","plan_code":"ALL","adj_posting":"16.000000000000000","created_date":"2023-05-20T17:40:19.841Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:40:19.841Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r02_id":"212","rcc_monthly_dt_id":"283","period":"202304","disclosure_type":"Life","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"01","plan_code":"ALL","adj_posting":"-1862043.770000000000000","created_date":"2023-05-20T17:40:21.454Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:40:21.454Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r03` — rows: 7820

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r03_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r03_id":"1","rcc_monthly_dt_id":"11","period":"202210","disclosure_type":"","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"02","plan_code":"","adj_posting":"-4953188.400000000000000","created_date":"2023-05-16T06:51:02.393Z","created_by":"piyawat.ju","updated_date":"2023-05-16T06:51:02.393Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r03_id":"2","rcc_monthly_dt_id":"11","period":"202210","disclosure_type":"Life","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"01","plan_code":"ALL","adj_posting":"-1998097.070000000000000","created_date":"2023-05-16T06:51:02.393Z","created_by":"piyawat.ju","updated_date":"2023-05-16T06:51:02.393Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r04` — rows: 7092

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r04_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r04_id":"272","rcc_monthly_dt_id":"305","period":"202301","disclosure_type":"Life","account_code":"50541005","account_name":"ครบกำหนดสัญญา","business_line":"01","plan_code":"","adj_posting":"-258715091.500000000000000","created_date":"2023-05-23T03:46:48.122Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:48.122Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r04_id":"273","rcc_monthly_dt_id":"305","period":"202301","disclosure_type":"","account_code":"50541005","account_name":"ครบกำหนดสัญญา","business_line":"02","plan_code":"","adj_posting":"-67159868.000000000000000","created_date":"2023-05-23T03:46:50.132Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.132Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r05` — rows: 766

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r05_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r05_id":"1","rcc_monthly_dt_id":"51","period":"202304","disclosure_type":"Investment","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"07","plan_code":"ALL","adj_posting":"206000.000000000000000","created_date":"2023-05-18T08:53:19.854Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:19.854Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r05_id":"2","rcc_monthly_dt_id":"51","period":"202304","disclosure_type":"Investment","account_code":"40511400","account_name":"เบี้ยประกันภัยเพิ่มพิเศษ(Top up Premium)","business_line":"07","plan_code":"ALL","adj_posting":"5000.000000000000000","created_date":"2023-05-18T08:53:21.326Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:21.326Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r06` — rows: 1430

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r06_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r06_id":"1","rcc_monthly_dt_id":"52","period":"202304","disclosure_type":"Investment","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"07","plan_code":"ALL","adj_posting":"-42000.000000000000000","created_date":"2023-05-18T08:53:40.175Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:40.175Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r06_id":"2","rcc_monthly_dt_id":"52","period":"202304","disclosure_type":"Investment","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"07","plan_code":"ALL","adj_posting":"-41236.000000000000000","created_date":"2023-05-18T08:53:42.162Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:53:42.162Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r07` — rows: 34

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r07_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r07_id":"1","rcc_monthly_dt_id":"2154","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-04-22T16:18:53.196Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_adj_r07_id":"2","rcc_monthly_dt_id":"2175","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-04-29T17:17:32.996Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_adj_r07_id":"3","rcc_monthly_dt_id":"2196","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-05-10T09:20:08.729Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_adj_r07_id":"4","rcc_monthly_dt_id":"2217","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-05-12T13:21:51.062Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
{"tx_rcc_adj_r07_id":"5","rcc_monthly_dt_id":"2242","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-05-13T14:56:35.394Z","created_by":"charun.ph","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_r08` — rows: 279

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r08_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | adj_posting | numeric(25,15) | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |
| 13 | plan_code | character varying(20) | N |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r08_id":"1","rcc_monthly_dt_id":"709","period":"202308","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","adj_posting":"-20105.180000000000000","created_date":"2023-09-19T03:11:44.015Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"plan_code":"ALL"}
{"tx_rcc_adj_r08_id":"2","rcc_monthly_dt_id":"709","period":"202308","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","adj_posting":"-191.460000000000000","created_date":"2023-09-19T03:11:44.015Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"plan_code":"ALL"}
```
</details>

### `public.tx_rcc_adj_r09` — rows: 482

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r09_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r09_id":"1","rcc_monthly_dt_id":"55","period":"202304","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","adj_posting":"30912.590000000000000","created_date":"2023-05-18T08:54:45.875Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:54:45.875Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r09_id":"2","rcc_monthly_dt_id":"55","period":"202304","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","adj_posting":"4155.610000000000000","created_date":"2023-05-18T08:54:47.552Z","created_by":"piyawat.ju","updated_date":"2023-05-18T08:54:47.552Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r10` — rows: 1557

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r10_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r10_id":"49","rcc_monthly_dt_id":"291","period":"202304","disclosure_type":"Short-term","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"03","plan_code":"ALL","adj_posting":"84617616.780000000000000","created_date":"2023-05-20T17:28:29.987Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:28:29.987Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r10_id":"50","rcc_monthly_dt_id":"291","period":"202304","disclosure_type":"Short-term","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"03","plan_code":"ALL","adj_posting":"180237522.630000000000000","created_date":"2023-05-20T17:28:32.899Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:28:32.899Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r11` — rows: 633

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r11_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r11_id":"1","rcc_monthly_dt_id":"75","period":"202304","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"03","plan_code":"ALL","adj_posting":"-8735499.410000000000000","created_date":"2023-05-18T09:56:00.636Z","created_by":"piyawat.ju","updated_date":"2023-05-18T09:56:00.636Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r11_id":"2","rcc_monthly_dt_id":"75","period":"202304","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","adj_posting":"-46861.850000000000000","created_date":"2023-05-18T09:56:00.636Z","created_by":"piyawat.ju","updated_date":"2023-05-18T09:56:00.636Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r12` — rows: 1070

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r12_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r12_id":"61","rcc_monthly_dt_id":"293","period":"202304","disclosure_type":"Short-term","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"03","plan_code":"ALL","adj_posting":"-111573200.000000000000000","created_date":"2023-05-20T17:27:55.140Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:27:55.140Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r12_id":"62","rcc_monthly_dt_id":"293","period":"202304","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"03","plan_code":"ALL","adj_posting":"-5050000.000000000000000","created_date":"2023-05-20T17:27:58.793Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:27:58.793Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r13` — rows: 113970

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r13_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | account_code | character varying(20) | N |
| 5 | account_name | character varying(50) | N |
| 6 | amt_bf_non_recurring | numeric(25,15) | N |
| 7 | non_recurring | numeric(25,15) | Y |
| 8 | amt_af_non_recurring | numeric(25,15) | N |
| 9 | dae_acq_amount | numeric(25,15) | Y |
| 10 | dae_maint_amount | numeric(25,15) | Y |
| 11 | non_dae_amount | numeric(25,15) | Y |
| 12 | adj_dae_acq_amount | numeric(25,15) | Y |
| 13 | adj_dae_maint_amount | numeric(25,15) | Y |
| 14 | adj_non_dae_amount | numeric(25,15) | Y |
| 15 | created_date | timestamp with time zone | N |
| 16 | created_by | character varying(50) | N |
| 17 | updated_date | timestamp with time zone | Y |
| 18 | updated_by | character varying(50) | Y |
| 19 | adj_non_recurring_amount | numeric(25,15) | Y |
| 20 | total_adj_non_dae | numeric(25,15) | Y |
| 21 | loading_expense | character varying(50) | Y |
| 22 | sell_channel | character varying(100) | Y |
| 23 | direct_1 | character varying(100) | Y |
| 24 | direct_2 | character varying(100) | Y |
| 25 | business_unit | character varying(100) | Y |
| 26 | gpv_expense_type | character varying(100) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r13_id":"1","rcc_monthly_dt_id":"9","period":"202201","account_code":"50551218","account_name":"ค่าบริหารทีมงานพิเศษ - ปีแรก","amt_bf_non_recurring":"72278.000000000000000","non_recurring":"0.000000000000000","amt_af_non_recurring":"72278.000000000000000","dae_acq_amount":"72278.000000000000000","dae_maint_amount":"0.000000000000000","non_dae_amount":"0.000000000000000","adj_dae_acq_amount":"-72278.000000000000000","adj_dae_maint_amount":"0.000000000000000","adj_non_dae_amount":"0.000000000000000","created_date":"2022-12-22T07:05:40.296Z","created_by":"umaporn.ha","updated_date":"2022-12-22T07:05:40.296Z","updated_by":"umaporn.ha","adj_non_recurring_amount":null,"total_adj_non_dae":null,"loading_expense":null,"sell_channel":null,"direct_1":null,"direct_2":null,"business_unit":null,"gpv_expense_type":null}
{"tx_rcc_adj_r13_id":"2","rcc_monthly_dt_id":"9","period":"202201","account_code":"50551219","account_name":"ค่าบริหารทีมงานพิเศษ","amt_bf_non_recurring":"163149.000000000000000","non_recurring":"0.000000000000000","amt_af_non_recurring":"163149.000000000000000","dae_acq_amount":"0.000000000000000","dae_maint_amount":"163149.000000000000000","non_dae_amount":"0.000000000000000","adj_dae_acq_amount":"0.000000000000000","adj_dae_maint_amount":"-163149.000000000000000","adj_non_dae_amount":"0.000000000000000","created_date":"2022-12-22T07:05:40.296Z","created_by":"umaporn.ha","updated_date":"2022-12-22T07:05:40.296Z","updated_by":"umaporn.ha","adj_non_recurring_amount":null,"total_adj_non_dae":null,"loading_expense":null,"sell_channel":null,"direct_1":null,"direct_2":null,"business_unit":null,"gpv_expense_type":null}
```
</details>

### `public.tx_rcc_adj_r14` — rows: 8310

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r14_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | event_type | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r14_id":"176","rcc_monthly_dt_id":"315","period":"202301","disclosure_type":"Policy Loan","account_code":"42022110","account_name":"ดอกเบี้ยรับ - เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","adj_posting":"10989958.000000000000000","created_date":"2023-05-23T03:46:50.128Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.128Z","updated_by":"piyawat.ju","event_type":null}
{"tx_rcc_adj_r14_id":"177","rcc_monthly_dt_id":"315","period":"202301","disclosure_type":"Policy Loan","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","adj_posting":"31969600.000000000000000","created_date":"2023-05-23T03:46:50.128Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:46:50.128Z","updated_by":"piyawat.ju","event_type":null}
```
</details>

### `public.tx_rcc_adj_r15` — rows: 4679

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r15_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r15_id":"124","rcc_monthly_dt_id":"316","period":"202301","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"02","plan_code":"ALL","adj_posting":"-7098.510000000000000","created_date":"2023-05-23T03:47:30.447Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:47:30.447Z","updated_by":"piyawat.ju"}
{"tx_rcc_adj_r15_id":"125","rcc_monthly_dt_id":"316","period":"202301","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"04","plan_code":"ALL","adj_posting":"-418978.450000000000000","created_date":"2023-05-23T03:47:30.447Z","created_by":"piyawat.ju","updated_date":"2023-05-23T03:47:30.447Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_adj_r16` — rows: 1191

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r16_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r16_id":"39","rcc_monthly_dt_id":"297","period":"202304","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"12425.390000000000000","created_date":"2023-05-20T17:29:59.481Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:29:59.481Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r16_id":"40","rcc_monthly_dt_id":"297","period":"202304","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","adj_posting":"292684.240000000000000","created_date":"2023-05-20T17:29:59.481Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:29:59.481Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r17` — rows: 1984

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r17_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r17_id":"17","rcc_monthly_dt_id":"298","period":"202304","disclosure_type":"Life-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","adj_posting":"103539.000000000000000","created_date":"2023-05-20T17:30:22.645Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:22.645Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r17_id":"18","rcc_monthly_dt_id":"298","period":"202304","disclosure_type":"Life-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"MRTA/MLTA","adj_posting":"5072777.610000000000000","created_date":"2023-05-20T17:30:23.587Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:23.587Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r18` — rows: 1006

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r18_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r18_id":"31","rcc_monthly_dt_id":"299","period":"202304","disclosure_type":"Short-term-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-450303.410000000000000","created_date":"2023-05-20T17:30:50.774Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:50.774Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r18_id":"32","rcc_monthly_dt_id":"299","period":"202304","disclosure_type":"Short-term-Re","account_code":"50531210","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-1735848.130000000000000","created_date":"2023-05-20T17:30:54.737Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:30:54.737Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r19` — rows: 509

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r19_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r19_id":"41","rcc_monthly_dt_id":"300","period":"202304","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"12425.390000000000000","created_date":"2023-05-20T17:31:16.731Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:16.731Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r19_id":"42","rcc_monthly_dt_id":"300","period":"202304","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","adj_posting":"292684.240000000000000","created_date":"2023-05-20T17:31:16.731Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:16.731Z","updated_by":"chanapai.gi"}
```
</details>

### `public.tx_rcc_adj_r20` — rows: 1168

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_r20_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | disclosure_type | character varying(20) | N |
| 5 | account_code | character varying(20) | N |
| 6 | account_name | character varying(100) | N |
| 7 | business_line | character varying(2) | N |
| 8 | plan_code | character varying(20) | N |
| 9 | adj_posting | numeric(25,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_r20_id":"31","rcc_monthly_dt_id":"301","period":"202304","disclosure_type":"Short-term-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","adj_posting":"103539.000000000000000","created_date":"2023-05-20T17:31:37.054Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:37.054Z","updated_by":"chanapai.gi"}
{"tx_rcc_adj_r20_id":"32","rcc_monthly_dt_id":"301","period":"202304","disclosure_type":"Short-term-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"6398577.610000000000000","created_date":"2023-05-20T17:31:38.861Z","created_by":"chanapai.gi","updated_date":"2023-05-20T17:31:38.861Z","updated_by":"chanapai.gi"}
```
</details>

## R13 landing (EXP import) (6 tables)

### `public.tx_rcc_landing_r13_1` — rows: 1118

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_outp_r13_1_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | portfolio_id | character varying(20) | N |
| 5 | dae_acq | numeric(25,15) | N |
| 6 | dae_maint | numeric(25,15) | N |
| 7 | non_dae | numeric(25,15) | N |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | oic_free | numeric(25,15) | Y |
| 13 | sbt | numeric(25,15) | Y |
| 14 | investment | numeric(25,15) | Y |
| 15 | property | numeric(25,15) | Y |
| 16 | non_recurring | numeric(25,15) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | channel_index | character varying(100) | Y |
| 19 | model | character varying(50) | Y |
| 20 | portfolio_id_sub | character varying(3) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_outp_r13_1_id":"1","rcc_land_r13_hd_id":"1","period":"202201","portfolio_id":"IND_END-2020-REMC","dae_acq":"0.000000000000000","dae_maint":"18326225.208733518635169","non_dae":"20614517.003475410109464","created_date":"2022-11-11T02:17:31.704Z","created_by":"jitra.ud","updated_date":null,"updated_by":null,"oic_free":null,"sbt":null,"investment":null,"property":null,"non_recurring":null,"partner":null,"channel_index":null,"model":null,"portfolio_id_sub":null}
{"rcc_land_outp_r13_1_id":"2","rcc_land_r13_hd_id":"1","period":"202201","portfolio_id":"ORD_TRM-2021-REMC","dae_acq":"0.000000000000000","dae_maint":"417685.328411062835593","non_dae":"469839.326242084764633","created_date":"2022-11-11T02:17:31.704Z","created_by":"jitra.ud","updated_date":null,"updated_by":null,"oic_free":null,"sbt":null,"investment":null,"property":null,"non_recurring":null,"partner":null,"channel_index":null,"model":null,"portfolio_id_sub":null}
```
</details>

### `public.tx_rcc_landing_r13_2` — rows: 17412

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_outp_r13_2_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | dae_acq | numeric(25,15) | N |
| 6 | dae_maint | numeric(25,15) | N |
| 7 | non_dae | numeric(25,15) | N |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |
| 12 | oic_free | numeric(25,15) | Y |
| 13 | sbt | numeric(25,15) | Y |
| 14 | investment | numeric(25,15) | Y |
| 15 | property | numeric(25,15) | Y |
| 16 | non_recurring | numeric(25,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_outp_r13_2_id":"1","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"P048-2021-REMC","dae_acq":"0.000000000000000","dae_maint":"95.108821935676455","non_dae":"106.984521069792706","created_date":"2022-11-11T02:17:31.705Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.705Z","updated_by":"jitra.ud","oic_free":null,"sbt":null,"investment":null,"property":null,"non_recurring":null}
{"rcc_land_outp_r13_2_id":"2","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"I024-2020-REMC","dae_acq":"0.000000000000000","dae_maint":"926.189362469594925","non_dae":"1041.837374778555505","created_date":"2022-11-11T02:17:31.705Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.705Z","updated_by":"jitra.ud","oic_free":null,"sbt":null,"investment":null,"property":null,"non_recurring":null}
```
</details>

### `public.tx_rcc_landing_r13_brand` — rows: 98561

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_r13_brand_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_r13_brand_id":"1","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"1","sale_channel_code":"AGT","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"1","created_date":"2022-11-11T02:17:31.738Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.738Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
{"rcc_land_r13_brand_id":"2","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"3","sale_channel_code":"ALT1","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"2","created_date":"2022-11-11T02:17:31.738Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.738Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
```
</details>

### `public.tx_rcc_landing_r13_hd` — rows: 31

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 2 | period | character varying(6) | N |
| 3 | group_type_id | numeric(8,0) | N |
| 4 | total_amount | numeric(25,15) | N |
| 5 | transaction_date | timestamp without time zone | N |
| 6 | transaction_by | character varying(50) | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_r13_hd_id":"1","period":"202201","group_type_id":"13","total_amount":"149279975.869999994948286","transaction_date":"2022-11-11T02:17:32.608Z","transaction_by":"jitra.ud","created_date":"2022-11-11T02:17:31.635Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:32.608Z","updated_by":"jitra.ud"}
{"rcc_land_r13_hd_id":"2","period":"202202","group_type_id":"13","total_amount":"152766196.929999995205315","transaction_date":"2022-11-11T02:20:17.792Z","transaction_by":"jitra.ud","created_date":"2022-11-11T02:20:16.923Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:20:17.792Z","updated_by":"jitra.ud"}
{"rcc_land_r13_hd_id":"3","period":"202203","group_type_id":"13","total_amount":"194875182.359999993157262","transaction_date":"2022-11-11T02:21:10.901Z","transaction_by":"jitra.ud","created_date":"2022-11-11T02:21:10.068Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:21:10.901Z","updated_by":"jitra.ud"}
{"rcc_land_r13_hd_id":"4","period":"202204","group_type_id":"13","total_amount":"165537652.989999993944623","transaction_date":"2022-11-11T02:21:56.869Z","transaction_by":"jitra.ud","created_date":"2022-11-11T02:21:56.189Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:21:56.869Z","updated_by":"jitra.ud"}
{"rcc_land_r13_hd_id":"5","period":"202205","group_type_id":"13","total_amount":"162716749.569999995392982","transaction_date":"2022-11-11T02:22:36.720Z","transaction_by":"jitra.ud","created_date":"2022-11-11T02:22:35.960Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:22:36.720Z","updated_by":"jitra.ud"}
```
</details>

### `public.tx_rcc_landing_r13_product` — rows: 98561

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_r13_product_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_r13_product_id":"1","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"1","sale_channel_code":"AGT","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"1","created_date":"2022-11-11T02:17:31.731Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.731Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
{"rcc_land_r13_product_id":"2","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"3","sale_channel_code":"ALT1","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"2","created_date":"2022-11-11T02:17:31.731Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.731Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
```
</details>

### `public.tx_rcc_landing_r13_sale` — rows: 98561

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_r13_sale_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | sub_group_id | character varying(20) | N |
| 5 | cf_sale_channel_id | numeric(4,0) | Y |
| 6 | sale_channel_code | character varying(20) | Y |
| 7 | sale_channel_value | numeric(25,15) | Y |
| 8 | row_no | numeric(4,0) | Y |
| 9 | column_no | numeric(4,0) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | portfolio_id | character varying(20) | Y |
| 15 | plan_code | character varying(50) | Y |
| 16 | channel | character varying(100) | Y |
| 17 | partner | character varying(100) | Y |
| 18 | loading_expense | character varying(100) | Y |
| 19 | channel_index | character varying(100) | Y |
| 20 | total | numeric(25,15) | Y |
| 21 | model | character varying(50) | Y |
| 22 | portfolio_id_sub | character varying(3) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_r13_sale_id":"1","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"1","sale_channel_code":"AGT","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"1","created_date":"2022-11-11T02:17:31.717Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.717Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
{"rcc_land_r13_sale_id":"2","rcc_land_r13_hd_id":"1","period":"202201","sub_group_id":"G081-2020-REMC","cf_sale_channel_id":"3","sale_channel_code":"ALT1","sale_channel_value":"0.000000000000000","row_no":"1","column_no":"2","created_date":"2022-11-11T02:17:31.717Z","created_by":"jitra.ud","updated_date":"2022-11-11T02:17:31.717Z","updated_by":"jitra.ud","portfolio_id":"IND_END-2020-REMC","plan_code":null,"channel":null,"partner":null,"loading_expense":null,"channel_index":null,"total":null,"model":null,"portfolio_id_sub":null}
```
</details>

## Monthly header / detail (4 tables)

### `public.tx_rcc_monthly_detail` — rows: 5347

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_monthly_dt_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | group_type_id | numeric(8,0) | N |
| 5 | total_amount | numeric(30,15) | N |
| 6 | rcc_process_status_id | numeric(8,0) | N |
| 7 | transaction_date | timestamp without time zone | N |
| 8 | transaction_by | character varying(50) | N |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |
| 13 | remark | character varying(500) | Y |
| 14 | csv_send_date | timestamp with time zone | Y |
| 15 | period_process | character varying(6) | Y |
| 16 | process | character varying(20) | Y |
| 17 | snapshot_status | character varying(20) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_monthly_dt_id":"5","rcc_monthly_hd_id":"2","period":"202211","group_type_id":"5","total_amount":"0.000000000000000","rcc_process_status_id":"4","transaction_date":"2022-11-02T02:55:26.702Z","transaction_by":"vanchalerm.wa","created_date":"2022-11-02T02:55:26.702Z","created_by":"vanchalerm.wa","updated_date":null,"updated_by":null,"remark":"ไม่พบข้อมูลต้นทางในการประมวลผลรอบปัจจุบัน","csv_send_date":"2022-11-02T02:55:28.815Z","period_process":null,"process":null,"snapshot_status":null}
{"rcc_monthly_dt_id":"4","rcc_monthly_hd_id":"2","period":"202211","group_type_id":"1","total_amount":"0.000000000000000","rcc_process_status_id":"4","transaction_date":"2022-11-02T02:55:25.699Z","transaction_by":"vanchalerm.wa","created_date":"2022-11-02T02:55:25.699Z","created_by":"vanchalerm.wa","updated_date":null,"updated_by":null,"remark":"ไม่พบข้อมูลต้นทางในการประมวลผลรอบปัจจุบัน","csv_send_date":"2022-11-02T02:55:30.831Z","period_process":null,"process":null,"snapshot_status":null}
```
</details>

### `public.tx_rcc_monthly_detail_his` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_monthly_dt_his_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(18,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | rcc_process_status_id | numeric(8,0) | N |
| 5 | transaction_date | timestamp without time zone | N |
| 6 | transaction_by | character varying(50) | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

### `public.tx_rcc_monthly_header` — rows: 915

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_monthly_hd_id | numeric(18,0) | N |
| 2 | period_from | character varying(6) | N |
| 3 | period_to | character varying(6) | N |
| 4 | rcc_process_status_id | numeric(8,0) | N |
| 5 | transaction_date | timestamp without time zone | N |
| 6 | transaction_by | character varying(50) | N |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |
| 11 | remark | character varying(500) | Y |
| 12 | folder_name | character varying(50) | Y |
| 13 | reference_flag | boolean | Y |

<details><summary>sample rows</summary>

```json
{"rcc_monthly_hd_id":"1","period_from":"202210","period_to":"202211","rcc_process_status_id":"4","transaction_date":"2022-11-02T02:12:51.116Z","transaction_by":"vanchalerm.wa","created_date":"2022-11-02T02:12:51.116Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:16:56.790Z","updated_by":"vanchalerm.wa","remark":null,"folder_name":"202210_to_202211_20221102091251","reference_flag":null}
{"rcc_monthly_hd_id":"2","period_from":"202211","period_to":"202211","rcc_process_status_id":"4","transaction_date":"2022-11-02T02:55:23.781Z","transaction_by":"vanchalerm.wa","created_date":"2022-11-02T02:55:23.781Z","created_by":"vanchalerm.wa","updated_date":"2022-11-02T02:59:30.369Z","updated_by":"vanchalerm.wa","remark":null,"folder_name":"202211_to_202211_20221102095523","reference_flag":null}
```
</details>

### `public.tx_rcc_monthly_header_his` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_monthly_his_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | period_from | character varying(6) | Y |
| 4 | period_to | character varying(6) | Y |
| 5 | rcc_process_status_id | numeric(8,0) | N |
| 6 | transaction_date | timestamp without time zone | N |
| 7 | transaction_by | character varying(50) | N |
| 8 | created_date | timestamp with time zone | N |
| 9 | created_by | character varying(50) | N |
| 10 | updated_date | timestamp with time zone | Y |
| 11 | updated_by | character varying(50) | Y |

## Other RCC tables (110 tables)

### `public.tx_rcc_adj_snapshot_r01` — rows: 159

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r01_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r01_id":"110","period":"202404","disclosure_type":"Life","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"01","plan_code":"ALL","adj_posting":"13370400.000000000000000","created_date":"2024-06-28T06:44:20.052Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r01_id":"111","period":"202404","disclosure_type":"Life","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"02","plan_code":"Exclude Annuity","adj_posting":"85305589.790000000000000","created_date":"2024-06-28T06:43:54.933Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r02` — rows: 254

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r02_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r02_id":"305","period":"202402","disclosure_type":"Longevity","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"02","plan_code":"Annuity","adj_posting":"-10858.990000000000000","created_date":"2024-07-12T09:37:21.725Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r02_id":"306","period":"202402","disclosure_type":"Life","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"04","plan_code":"ALL","adj_posting":"-1149522.810000000000000","created_date":"2024-07-12T09:36:17.445Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r03` — rows: 146

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r03_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r03_id":"183","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Exclude Annuity","adj_posting":"1759030.000000000000000","created_date":"2024-07-16T02:05:09.672Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r03_id":"184","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","adj_posting":"2715590.000000000000000","created_date":"2024-07-16T02:05:09.442Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r04` — rows: 175

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r04_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r04_id":"201","period":"202401","disclosure_type":"Longevity","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Annuity","adj_posting":"282800.000000000000000","created_date":"2024-07-16T02:17:18.787Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r04_id":"202","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Exclude Annuity","adj_posting":"21053554.000000000000000","created_date":"2024-07-16T02:16:59.090Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r05` — rows: 28

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r05_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r05_id":"11","period":"202404","disclosure_type":"Investment","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"07","plan_code":"ALL","adj_posting":"308000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r05_id":"12","period":"202404","disclosure_type":"Investment","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"07","plan_code":"ALL","adj_posting":"168500.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r05_id":"13","period":"202404","disclosure_type":"Investment","account_code":"40511300","account_name":"เบี้ยประกันชีวิต - ชำระครั้งเดียว","business_line":"07","plan_code":"ALL","adj_posting":"100000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r05_id":"14","period":"202404","disclosure_type":"Investment","account_code":"40511400","account_name":"เบี้ยประกันภัยเพิ่มพิเศษ(Top up Premium)","business_line":"07","plan_code":"ALL","adj_posting":"115000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r05_id":"15","period":"202404","disclosure_type":"Investment","account_code":"40511500","account_name":"เบี้ยส่วนนำไปลงทุนของผู้เอาประกัน","business_line":"07","plan_code":"ALL","adj_posting":"-451425.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r06` — rows: 37

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r06_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r06_id":"19","period":"202404","disclosure_type":"Investment","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"07","plan_code":"ALL","adj_posting":"-46800.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r06_id":"20","period":"202404","disclosure_type":"Investment","account_code":"50551103","account_name":"ค่าบำเหน็จปีต่อไป ตัวแทน","business_line":"07","plan_code":"ALL","adj_posting":"-9420.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r06_id":"21","period":"202404","disclosure_type":"Investment","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"07","plan_code":"ALL","adj_posting":"-66733.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r06_id":"22","period":"202404","disclosure_type":"Investment","account_code":"50551206","account_name":"เงินประจำตำแหน่งผลงาน-ปีแรก","business_line":"07","plan_code":"ALL","adj_posting":"-2448.580000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r06_id":"23","period":"202404","disclosure_type":"Investment","account_code":"50551210","account_name":"ค่าจัดงานเบี้ยปีแรกงวดแรก","business_line":"07","plan_code":"ALL","adj_posting":"-13440.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r07` — rows: 4

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r07_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r07_id":"1","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-1080000.000000000000000","created_date":"2024-06-28T07:29:40.151Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r07_id":"2","period":"202308","disclosure_type":"Investment","account_code":"50542125","account_name":"สินไหมคืนเบี้ย","business_line":"07","plan_code":"ALL","adj_posting":"-2200.000000000000000","created_date":"2024-07-19T05:10:31.526Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r07_id":"3","period":"202308","disclosure_type":"Investment","account_code":"50542120","account_name":"เงินช่วยเหลือค่าทำศพ","business_line":"07","plan_code":"ALL","adj_posting":"-1000.000000000000000","created_date":"2024-07-19T05:10:31.526Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r07_id":"4","period":"202305","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","adj_posting":"-608053.220000000000000","created_date":"2024-07-19T08:05:42.244Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r08` — rows: 11

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r08_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r08_id":"6","period":"202404","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:30:24.870Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r08_id":"7","period":"202404","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:30:24.870Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r08_id":"8","period":"202403","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-07-12T03:16:11.489Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r08_id":"9","period":"202403","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-07-12T03:16:11.489Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r08_id":"10","period":"202402","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-07-15T04:38:38.775Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r09` — rows: 17

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r09_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r09_id":"7","period":"202404","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","adj_posting":"62109.980000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r09_id":"8","period":"202404","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","adj_posting":"6331.820000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r09_id":"9","period":"202404","disclosure_type":"Investment","account_code":"43040030","account_name":"รายได้ค่าธรรมเนียมการถอนเงินกธ.","business_line":"07","plan_code":"ALL","adj_posting":"8951.690000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r09_id":"10","period":"202403","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","adj_posting":"58874.130000000000000","created_date":"2024-07-12T03:17:36.700Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r09_id":"11","period":"202403","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","adj_posting":"6121.240000000000000","created_date":"2024-07-12T03:17:36.700Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r10` — rows: 43

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r10_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r10_id":"22","period":"202404","disclosure_type":"Short-term","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"03","plan_code":"ALL","adj_posting":"6773701.970000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r10_id":"23","period":"202404","disclosure_type":"Short-term","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"03","plan_code":"ALL","adj_posting":"204814554.170000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r10_id":"24","period":"202404","disclosure_type":"Short-term","account_code":"40512100","account_name":"เบี้ยประกันอุบัติเหตุ - ปีแรก","business_line":"05","plan_code":"ALL","adj_posting":"302990.480000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r10_id":"25","period":"202404","disclosure_type":"Short-term","account_code":"40512100","account_name":"เบี้ยประกันอุบัติเหตุ - ปีแรก","business_line":"03","plan_code":"ALL","adj_posting":"585721.310000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r10_id":"26","period":"202404","disclosure_type":"Short-term","account_code":"40512200","account_name":"เบี้ยประกันอุบัติเหตุ - ปีต่อไป","business_line":"03","plan_code":"ALL","adj_posting":"15830003.260000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r11` — rows: 16

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r11_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r11_id":"9","period":"202404","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","adj_posting":"-46083.600000000000000","created_date":"2024-06-28T07:35:43.548Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r11_id":"10","period":"202404","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"03","plan_code":"ALL","adj_posting":"-1167256.950000000000000","created_date":"2024-06-28T07:35:43.547Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r11_id":"11","period":"202404","disclosure_type":"Short-term","account_code":"50551103","account_name":"ค่าบำเหน็จปีต่อไป ตัวแทน","business_line":"03","plan_code":"ALL","adj_posting":"-30241857.350000000000000","created_date":"2024-06-28T07:35:43.547Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r11_id":"12","period":"202404","disclosure_type":"Short-term","account_code":"50551211","account_name":"ค่าจัดงานเบี้ยปีต่อไป","business_line":"03","plan_code":"ALL","adj_posting":"-150652.000000000000000","created_date":"2024-06-28T07:35:43.979Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r11_id":"13","period":"202403","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","adj_posting":"204.580000000000000","created_date":"2024-07-12T03:21:35.925Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r12` — rows: 29

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r12_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r12_id":"15","period":"202404","disclosure_type":"Short-term","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"03","plan_code":"ALL","adj_posting":"-118927360.000000000000000","created_date":"2024-06-28T07:37:52.886Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r12_id":"16","period":"202404","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"05","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:37:57.806Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r12_id":"17","period":"202404","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"03","plan_code":"ALL","adj_posting":"-5120000.000000000000000","created_date":"2024-06-28T07:37:52.886Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r12_id":"18","period":"202404","disclosure_type":"Short-term","account_code":"50544110","account_name":"สินไหมทดแทนอุบัติเหตุ - ตรง","business_line":"05","plan_code":"ALL","adj_posting":"-175076.600000000000000","created_date":"2024-06-28T07:37:49.500Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r12_id":"19","period":"202404","disclosure_type":"Short-term","account_code":"50544110","account_name":"สินไหมทดแทนอุบัติเหตุ - ตรง","business_line":"03","plan_code":"ALL","adj_posting":"-1277198.450000000000000","created_date":"2024-06-28T07:37:49.500Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r13` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r13_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

### `public.tx_rcc_adj_snapshot_r14` — rows: 360

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r14_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | event_type | character varying(50) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r14_id":"188","period":"202401","disclosure_type":"Policy Loan","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","event_type":"OTHER","business_line":"01","plan_code":"ALL","adj_posting":"0.000000000000000","created_date":"2024-07-16T02:46:42.370Z","created_by":"boss","updated_date":null,"updated_by":""}
{"tx_rcc_adj_snapshot_r14_id":"189","period":"202401","disclosure_type":"Policy Loan","account_code":"42022113","account_name":"ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ","event_type":"COMPOUNDINTEREST","business_line":"02","plan_code":"ALL","adj_posting":"79446.470000000000000","created_date":"2024-07-16T02:43:18.174Z","created_by":"boss","updated_date":null,"updated_by":""}
```
</details>

### `public.tx_rcc_adj_snapshot_r15` — rows: 67

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r15_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r15_id":"45","period":"202404","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"02","plan_code":"ALL","adj_posting":"-334.270000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r15_id":"46","period":"202404","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"07","plan_code":"ALL","adj_posting":"-2302.070000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r15_id":"47","period":"202404","disclosure_type":"Life-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"MRTA/MLTA","adj_posting":"-916652.670000000000000","created_date":"2024-06-28T07:58:43.876Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r15_id":"48","period":"202404","disclosure_type":"Life-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"02","plan_code":"ALL","adj_posting":"-10476.060000000000000","created_date":"2024-06-28T08:00:17.103Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r15_id":"49","period":"202404","disclosure_type":"Life-Re","account_code":"50531205","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ในปท","business_line":"07","plan_code":"ALL","adj_posting":"235.350000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r16` — rows: 28

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r16_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r16_id":"15","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"07","plan_code":"ALL","adj_posting":"1149.960000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r16_id":"16","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","adj_posting":"199707.700000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r16_id":"17","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"-8659.680000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r16_id":"18","period":"202404","disclosure_type":"Life-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"18984.590000000000000","created_date":"2024-06-28T08:15:02.413Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r16_id":"19","period":"202404","disclosure_type":"Life-Re","account_code":"41510210","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.","business_line":"03","plan_code":"MRTA/MLTA","adj_posting":"221569.040000000000000","created_date":"2024-06-28T08:15:07.766Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r17` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r17_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r17_id":"14","period":"202404","disclosure_type":"Life-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","adj_posting":"1323213.740000000000000","created_date":"2024-06-28T08:17:19.395Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r17_id":"15","period":"202404","disclosure_type":"Life-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"MRTA/MLTA","adj_posting":"11734543.830000000000000","created_date":"2024-06-28T08:17:19.395Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r17_id":"16","period":"202404","disclosure_type":"Life-Re","account_code":"41012005","account_name":"สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"04","plan_code":"ALL","adj_posting":"220000.000000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r17_id":"17","period":"202404","disclosure_type":"Life-Re","account_code":"41030005","account_name":"สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ในประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"820542.250000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r17_id":"18","period":"202404","disclosure_type":"Life-Re","account_code":"41030010","account_name":"สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ต่างประเทศ","business_line":"02","plan_code":"ALL","adj_posting":"1600000.000000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r18` — rows: 21

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r18_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r18_id":"16","period":"202404","disclosure_type":"Short-term-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-319407.250000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r18_id":"17","period":"202404","disclosure_type":"Short-term-Re","account_code":"50531210","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-1072209.280000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r18_id":"18","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532105","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก- ใน ปท.","business_line":"05","plan_code":"ALL","adj_posting":"-4927.470000000000000","created_date":"2024-06-28T08:21:28.331Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r18_id":"19","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532110","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-46003.350000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r18_id":"20","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532210","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป- ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"-778841.860000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r19` — rows: 13

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r19_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r19_id":"8","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"05","plan_code":"ALL","adj_posting":"1231.980000000000000","created_date":"2024-06-28T08:23:34.712Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r19_id":"9","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"03","plan_code":"ALL","adj_posting":"182705.560000000000000","created_date":"2024-06-28T08:23:34.446Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r19_id":"10","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510210","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"986268.530000000000000","created_date":"2024-06-28T08:23:34.446Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r19_id":"11","period":"202403","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"03","plan_code":"ALL","adj_posting":"158331.600000000000000","created_date":"2024-07-12T03:51:12.227Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r19_id":"12","period":"202403","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"05","plan_code":"ALL","adj_posting":"207.580000000000000","created_date":"2024-07-12T03:51:12.227Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_adj_snapshot_r20` — rows: 37

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_adj_snapshot_r20_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | adj_posting | numeric(30,15) | Y |
| 9 | created_date | timestamp with time zone | Y |
| 10 | created_by | character varying(50) | Y |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_adj_snapshot_r20_id":"17","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546006","account_name":"ประมาณการสินไหมทดแทนชีวิตระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","adj_posting":"45000.000000000000000","created_date":"2024-06-28T08:24:47.434Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r20_id":"18","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546007","account_name":"ประมาณการสินไหมทดแทนสภ.ระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","adj_posting":"-178268.350000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r20_id":"19","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546008","account_name":"ประมาณการสินไหมทดแทนอบ.ระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","adj_posting":"24951.730000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r20_id":"20","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546008","account_name":"ประมาณการสินไหมทดแทนอบ.ระยะสั้น/Case RESERVE-RE","business_line":"05","plan_code":"ALL","adj_posting":"-78563.950000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_adj_snapshot_r20_id":"21","period":"202404","disclosure_type":"Short-term-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"ALL","adj_posting":"582354.000000000000000","created_date":"2024-06-28T08:24:46.674Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_error_log_r01` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r01_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | gl_type | character varying(2) | Y |
| 7 | gl_amount | numeric(25,15) | Y |
| 8 | event_code | character varying(25) | Y |
| 9 | reference_number | character varying(20) | Y |
| 10 | system_name | character varying(50) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | business_line | character varying(2) | Y |
| 13 | premium_type | character varying(10) | Y |
| 14 | plan_code_actuarial | character varying(20) | Y |
| 15 | basic_rider_indicator | character varying(20) | Y |
| 16 | effective_date | date | Y |
| 17 | collection_type | character varying(10) | Y |
| 18 | portfolio_id | character varying(50) | Y |
| 19 | sub_group_id | character varying(50) | Y |
| 20 | model_type | character varying(20) | Y |
| 21 | created_date | timestamp with time zone | N |
| 22 | created_by | character varying(50) | N |
| 23 | sales_channel_code | character varying(10) | Y |
| 24 | sales_channel | character varying(50) | Y |
| 25 | sales_channel_abbr | character varying(20) | Y |
| 26 | mode_of_payment | character varying(2) | Y |
| 27 | annual_premium | numeric(25,15) | Y |
| 28 | premium_due_date | date | Y |

### `public.tx_rcc_error_log_r02` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r02_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | gl_type | character varying(2) | Y |
| 4 | event_code | character varying(25) | Y |
| 5 | reference_number | character varying(20) | Y |
| 6 | system_name | character varying(50) | Y |
| 7 | account_code | character varying(20) | Y |
| 8 | account_name | character varying(100) | Y |
| 9 | gl_amount | numeric(25,15) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | portfolio_id | character varying(50) | Y |
| 13 | business_line | character varying(2) | Y |
| 14 | plan_code_actuarial | character varying(20) | Y |
| 15 | sales_channel | character varying(50) | Y |
| 16 | sales_channel_code | character varying(10) | Y |
| 17 | sales_channel_abbr | character varying(20) | Y |
| 18 | effective_date | date | Y |
| 19 | collection_type | character varying(10) | Y |
| 20 | mode_of_payment | character varying(2) | Y |
| 21 | annual_premium | numeric(25,15) | Y |
| 22 | modal_premium | numeric(25,15) | Y |
| 23 | basic_rider_indicator | character varying(20) | Y |
| 24 | sub_group_id | character varying(50) | Y |
| 25 | commission_ov_type | character varying(20) | Y |
| 26 | created_date | timestamp with time zone | N |
| 27 | created_by | character varying(50) | N |

### `public.tx_rcc_error_log_r03` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r03_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | gl_type | character varying(2) | Y |
| 4 | event_code | character varying(25) | Y |
| 5 | reference_number | character varying(20) | Y |
| 6 | system_name | character varying(50) | Y |
| 7 | period | character varying(6) | Y |
| 8 | account_code | character varying(20) | Y |
| 9 | account_name | character varying(100) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | plan_code_actuarial | character varying(20) | Y |
| 12 | gl_amount | numeric(25,15) | Y |
| 13 | policy_no | character varying(20) | Y |
| 14 | portfolio_id | character varying(50) | Y |
| 15 | sales_channel | character varying(50) | Y |
| 16 | sales_channel_code | character varying(10) | Y |
| 17 | effective_date | date | Y |
| 18 | mode_of_payment | character varying(2) | Y |
| 19 | annual_premium | numeric(25,15) | Y |
| 20 | modal_premium | numeric(25,15) | Y |
| 21 | claim_status | character varying(20) | Y |
| 22 | sub_group_id | character varying(50) | Y |
| 23 | sales_channel_abbr | character varying(20) | Y |
| 24 | collection_type | character varying(10) | Y |
| 25 | model_type | character varying(20) | Y |
| 26 | created_date | timestamp with time zone | N |
| 27 | created_by | character varying(50) | N |
| 28 | claim_event_date | date | Y |
| 29 | claim_reported_date | date | Y |

### `public.tx_rcc_error_log_r04` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r04_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | gl_type | character varying(2) | Y |
| 7 | gl_amount | numeric(25,15) | Y |
| 8 | event_code | character varying(25) | Y |
| 9 | reference_number | character varying(20) | Y |
| 10 | system_name | character varying(50) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | business_line | character varying(2) | Y |
| 13 | plan_code_actuarial | character varying(20) | Y |
| 14 | basic_rider_indicator | character varying(20) | Y |
| 15 | effective_date | date | Y |
| 16 | collection_type | character varying(10) | Y |
| 17 | sub_group_id | character varying(50) | Y |
| 18 | portfolio_id | character varying(50) | Y |
| 19 | sales_channel | character varying(50) | Y |
| 20 | sales_channel_code | character varying(10) | Y |
| 21 | sales_channel_abbr | character varying(20) | Y |
| 22 | mode_of_payment | character varying(2) | Y |
| 23 | annual_premium | numeric(25,15) | Y |
| 24 | modal_premium | numeric(25,15) | Y |
| 25 | created_date | timestamp with time zone | N |
| 26 | created_by | character varying(50) | N |

### `public.tx_rcc_error_log_r05` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r05_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | gl_type | character varying(2) | Y |
| 4 | event_code | character varying(25) | Y |
| 5 | reference_number | character varying(20) | Y |
| 6 | system_name | character varying(50) | Y |
| 7 | period | character varying(6) | Y |
| 8 | disclosure_type | character varying(20) | Y |
| 9 | account_code | character varying(20) | Y |
| 10 | account_name | character varying(100) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | plan_code | character varying(20) | Y |
| 13 | gl_amount | numeric(25,15) | Y |
| 14 | portfolio_id | character varying(50) | Y |
| 15 | sales_channel | character varying(50) | Y |
| 16 | sales_channel_code | character varying(10) | Y |
| 17 | sales_channel_abbr | character varying(20) | Y |
| 18 | premium_due_date | date | Y |
| 19 | effective_date | date | Y |
| 20 | mode_of_payment | character varying(2) | Y |
| 21 | annual_premium | numeric(25,15) | Y |
| 22 | modal_premium | numeric(25,15) | Y |
| 23 | basic_rider_indicator | character varying(20) | Y |
| 24 | premium_type | character varying(10) | Y |
| 25 | sub_group_id | character varying(50) | Y |
| 26 | alteration_type_code | numeric(5,0) | Y |
| 27 | source_event_code | character varying(10) | Y |
| 28 | created_date | timestamp with time zone | N |
| 29 | created_by | character varying(50) | N |
| 30 | policy_no | character varying(20) | Y |
| 31 | collection_type | character varying(10) | Y |

### `public.tx_rcc_error_log_r06` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r06_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | portfolio_id | character varying(50) | Y |
| 13 | plan_code | character varying(20) | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | effective_date | date | Y |
| 18 | sales_channel_abbr | character varying(20) | Y |
| 19 | mode_of_payment | character varying(2) | Y |
| 20 | annual_premium | numeric(25,15) | Y |
| 21 | modal_premium | numeric(25,15) | Y |
| 22 | basic_rider_indicator | character varying(20) | Y |
| 23 | collection_type | character varying(10) | Y |
| 24 | sub_group_id | character varying(50) | Y |
| 25 | created_date | timestamp with time zone | N |
| 26 | created_by | character varying(50) | N |
| 27 | commission_ov_type | character varying(20) | Y |
| 28 | alteration_type_code | numeric(5,0) | Y |
| 29 | source_event_code | character varying(10) | Y |

### `public.tx_rcc_error_log_r07` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r07_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | portfolio_id | character varying(50) | Y |
| 13 | plan_code | character varying(20) | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | effective_date | date | Y |
| 18 | sales_channel_abbr | character varying(20) | Y |
| 19 | mode_of_payment | character varying(2) | Y |
| 20 | annual_premium | numeric(25,15) | Y |
| 21 | modal_premium | numeric(25,15) | Y |
| 22 | collection_type | character varying(10) | Y |
| 23 | sub_group_id | character varying(50) | Y |
| 24 | claim_status | character varying(20) | Y |
| 25 | alteration_type_code | numeric(5,0) | Y |
| 26 | source_event_code | character varying(10) | Y |
| 27 | created_date | timestamp with time zone | N |
| 28 | created_by | character varying(50) | N |
| 29 | claim_event_date | date | Y |
| 30 | claim_reported_date | date | Y |

### `public.tx_rcc_error_log_r08` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r08_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | portfolio_id | character varying(50) | Y |
| 13 | plan_code | character varying(20) | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | effective_date | date | Y |
| 18 | sales_channel_abbr | character varying(20) | Y |
| 19 | mode_of_payment | character varying(2) | Y |
| 20 | annual_premium | numeric(25,15) | Y |
| 21 | modal_premium | numeric(25,15) | Y |
| 22 | collection_type | character varying(10) | Y |
| 23 | sub_group_id | character varying(50) | Y |
| 24 | alteration_type_code | numeric(5,0) | Y |
| 25 | source_event_code | character varying(10) | Y |
| 26 | created_date | timestamp with time zone | N |
| 27 | created_by | character varying(50) | N |

### `public.tx_rcc_error_log_r09` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r09_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | gl_type | character varying(2) | Y |
| 7 | gl_amount | numeric(25,15) | Y |
| 8 | event_code | character varying(25) | Y |
| 9 | reference_number | character varying(20) | Y |
| 10 | system_name | character varying(50) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | business_line | character varying(2) | Y |
| 13 | plan_code_actuarial | character varying(20) | Y |
| 14 | effective_date | date | Y |
| 15 | collection_type | character varying(10) | Y |
| 16 | sub_group_id | character varying(50) | Y |
| 17 | portfolio_id | character varying(50) | Y |
| 18 | alteration_type_code | numeric(5,0) | Y |
| 19 | source_event_code | character varying(10) | Y |
| 20 | sales_channel | character varying(50) | Y |
| 21 | sales_channel_code | character varying(10) | Y |
| 22 | sales_channel_abbr | character varying(20) | Y |
| 23 | created_date | timestamp with time zone | N |
| 24 | created_by | character varying(50) | N |

### `public.tx_rcc_error_log_r10` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r10_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | disclosure_type | character varying(20) | Y |
| 5 | account_code | character varying(20) | Y |
| 6 | account_name | character varying(100) | Y |
| 7 | business_line | character varying(2) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | policy_no | character varying(20) | Y |
| 10 | policy_year | numeric(2,0) | Y |
| 11 | effective_date | date | Y |
| 12 | end_coverage_date | date | Y |
| 13 | portfolio_id | character varying(50) | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | sales_channel_abbr | character varying(20) | Y |
| 17 | mode_of_payment | character varying(2) | Y |
| 18 | pay_from | date | Y |
| 19 | pay_to | date | Y |
| 20 | invoice_date | date | Y |
| 21 | no_of_member | numeric(10,0) | Y |
| 22 | receive_date | date | Y |
| 23 | prem_type | character varying(25) | Y |
| 24 | sale_option | character varying(50) | Y |
| 25 | actual_prem_life | numeric(25,15) | Y |
| 26 | actual_prem_acc_death | numeric(25,15) | Y |
| 27 | actual_prem_med_acc | numeric(25,15) | Y |
| 28 | actual_prem_tpd | numeric(25,15) | Y |
| 29 | actual_prem_ipd | numeric(25,15) | Y |
| 30 | actual_prem_opd | numeric(25,15) | Y |
| 31 | actual_prem_dental | numeric(25,15) | Y |
| 32 | actual_prem_other | numeric(25,15) | Y |
| 33 | gl_type | character varying(2) | Y |
| 34 | gl_amount | numeric(25,15) | Y |
| 35 | event_code | character varying(25) | Y |
| 36 | reference_number | character varying(20) | Y |
| 37 | system_name | character varying(50) | Y |
| 38 | created_date | timestamp with time zone | N |
| 39 | created_by | character varying(50) | N |
| 40 | collection_type | character varying(10) | Y |

### `public.tx_rcc_error_log_r11` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r11_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | gl_type | character varying(2) | Y |
| 5 | event_code | character varying(25) | Y |
| 6 | reference_number | character varying(20) | Y |
| 7 | system_name | character varying(50) | Y |
| 8 | account_code | character varying(20) | Y |
| 9 | account_name | character varying(100) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | gl_amount | numeric(25,15) | Y |
| 12 | policy_no | character varying(20) | Y |
| 13 | policy_year | numeric(2,0) | Y |
| 14 | effective_date | date | Y |
| 15 | end_coverage_date | date | Y |
| 16 | portfolio_id | character varying(50) | Y |
| 17 | sales_channel | character varying(50) | Y |
| 18 | sales_channel_code | character varying(10) | Y |
| 19 | sales_channel_abbr | character varying(20) | Y |
| 20 | mode_of_payment | character varying(2) | Y |
| 21 | pay_from | date | Y |
| 22 | pay_to | date | Y |
| 23 | receive_date | date | Y |
| 24 | sale_option | character varying(50) | Y |
| 25 | collection_type | character varying(10) | Y |
| 26 | created_date | timestamp with time zone | N |
| 27 | created_by | character varying(50) | N |
| 28 | comm_ov_type | character varying(25) | Y |

### `public.tx_rcc_error_log_r12` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r12_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | policy_year | numeric(2,0) | Y |
| 13 | effective_date | date | Y |
| 14 | sales_channel | character varying(50) | Y |
| 15 | sales_channel_code | character varying(10) | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | certificate_no | character varying(50) | Y |
| 18 | collection_type | character varying(10) | Y |
| 19 | sales_channel_abbr | character varying(20) | Y |
| 20 | claim_no | character varying(25) | Y |
| 21 | claim_event_date | date | Y |
| 22 | claim_reported_date | date | Y |
| 23 | approve_date | date | Y |
| 24 | claim_paid_date | date | Y |
| 25 | age | numeric(3,0) | Y |
| 26 | sex | character varying(10) | Y |
| 27 | end_coverage_date | date | Y |
| 28 | portfolio_id | character varying(50) | Y |
| 29 | claim_type | character varying(100) | Y |
| 30 | created_date | timestamp with time zone | N |
| 31 | created_by | character varying(50) | N |
| 32 | claim_status | character varying(50) | Y |

### `public.tx_rcc_error_log_r13` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r13_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | portfolio_id | character varying(20) | Y |
| 5 | sub_group_id | character varying(20) | Y |
| 6 | dae_acq | numeric(25,15) | Y |
| 7 | dae_maint | numeric(25,15) | Y |
| 8 | non_dae | numeric(25,15) | Y |
| 9 | cf_sale_channel_id | numeric(4,0) | Y |
| 10 | sale_channel_code | character varying(20) | Y |
| 11 | sale_channel_value | numeric(25,15) | Y |
| 12 | row_no | numeric(4,0) | Y |
| 13 | column_no | numeric(4,0) | Y |
| 14 | created_date | timestamp with time zone | N |
| 15 | created_by | character varying(50) | N |

### `public.tx_rcc_error_log_r14` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r14_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | gl_type | character varying(2) | N |
| 4 | event_code | character varying(25) | Y |
| 5 | reference_number | character varying(20) | Y |
| 6 | system_name | character varying(50) | Y |
| 7 | period | character varying(6) | Y |
| 8 | account_code | character varying(20) | Y |
| 9 | account_name | character varying(100) | Y |
| 10 | business_line | character varying(2) | Y |
| 11 | plan_code | character varying(20) | Y |
| 12 | gl_amount | numeric(25,15) | Y |
| 13 | policy_no | character varying(20) | Y |
| 14 | portfolio_id | character varying(50) | Y |
| 15 | sales_channel | character varying(50) | Y |
| 16 | sales_channel_code | character varying(10) | Y |
| 17 | sales_channel_abbr | character varying(20) | Y |
| 18 | effective_date | date | Y |
| 19 | loan_type | character varying(50) | Y |
| 20 | sub_group_id | character varying(50) | Y |
| 21 | created_date | timestamp with time zone | N |
| 22 | created_by | character varying(50) | N |
| 23 | event_type | character varying(50) | Y |
| 24 | collection_type | character varying(10) | Y |

### `public.tx_rcc_error_log_r15` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r15_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | gl_type | character varying(2) | N |
| 4 | event_code | character varying(25) | N |
| 5 | reference_number | character varying(20) | N |
| 6 | system_name | character varying(50) | N |
| 7 | period | character varying(6) | Y |
| 8 | disclosure_type | character varying(20) | Y |
| 9 | account_code | character varying(20) | Y |
| 10 | account_name | character varying(100) | Y |
| 11 | business_line | character varying(2) | Y |
| 12 | plan_code | character varying(20) | Y |
| 13 | gl_amount | numeric(25,15) | Y |
| 14 | policy_no | character varying(20) | Y |
| 15 | portfolio_id | character varying(50) | Y |
| 16 | ri_portfolio_id | character varying(50) | Y |
| 17 | sales_channel | character varying(50) | Y |
| 18 | sales_channel_code | character varying(10) | Y |
| 19 | sales_channel_abbr | character varying(20) | Y |
| 20 | treaty_code | character varying(50) | Y |
| 21 | effective_date | date | Y |
| 22 | ri_effective_date | date | Y |
| 23 | ri_mode_of_payment | character varying(2) | Y |
| 24 | premium_type | character varying(10) | Y |
| 25 | ri_type | character varying(20) | Y |
| 26 | sub_ri_group_id | character varying(50) | Y |
| 27 | basic_rider_indicator | character varying(20) | Y |
| 28 | created_date | timestamp with time zone | N |
| 29 | created_by | character varying(50) | N |
| 30 | collection_type | character varying(10) | Y |

### `public.tx_rcc_error_log_r16` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r16_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | plan_code | character varying(20) | Y |
| 13 | sales_channel | character varying(50) | Y |
| 14 | sales_channel_code | character varying(10) | Y |
| 15 | effective_date | date | Y |
| 16 | ri_effective_date | date | Y |
| 17 | business_line | character varying(2) | Y |
| 18 | treaty_code | character varying(50) | Y |
| 19 | collection_type | character varying(10) | Y |
| 20 | plan_type | character varying(10) | Y |
| 21 | sales_channel_abbr | character varying(20) | Y |
| 22 | ri_mode_of_payment | character varying(2) | Y |
| 23 | basic_rider_indicator | character varying(20) | Y |
| 24 | created_date | timestamp with time zone | N |
| 25 | created_by | character varying(50) | N |
| 26 | commmission_type | character varying(20) | Y |
| 27 | portfolio_id | character varying(50) | Y |
| 28 | ri_portfolio_id | character varying(50) | Y |
| 29 | sub_ri_group_id | character varying(50) | Y |
| 30 | ri_type | character varying(20) | Y |

### `public.tx_rcc_error_log_r17` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r17_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | plan_code | character varying(20) | Y |
| 13 | sales_channel | character varying(50) | Y |
| 14 | sales_channel_code | character varying(10) | Y |
| 15 | effective_date | date | Y |
| 16 | ri_effective_date | date | Y |
| 17 | business_line | character varying(2) | Y |
| 18 | treaty_code | character varying(50) | Y |
| 19 | collection_type | character varying(10) | Y |
| 20 | plan_type | character varying(10) | Y |
| 21 | sales_channel_abbr | character varying(20) | Y |
| 22 | ri_claim_status | character varying(20) | Y |
| 23 | claim_recovery_date | date | Y |
| 24 | benefit_type | character varying(10) | Y |
| 25 | total_nar | numeric(25,15) | Y |
| 26 | total_sr | numeric(25,15) | Y |
| 27 | model_type | character varying(20) | Y |
| 28 | basic_rider_indicator | character varying(20) | Y |
| 29 | created_date | timestamp with time zone | N |
| 30 | created_by | character varying(50) | N |
| 31 | ri_type | character varying(20) | Y |
| 32 | portfolio_id | character varying(50) | Y |
| 33 | ri_portfolio_id | character varying(50) | Y |
| 34 | sub_ri_group_id | character varying(50) | Y |

### `public.tx_rcc_error_log_r18` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r18_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | reference_number | character varying(20) | Y |
| 9 | system_name | character varying(50) | Y |
| 10 | period | character varying(6) | Y |
| 11 | policy_year | numeric(2,0) | Y |
| 12 | portfolio_id | character varying(50) | Y |
| 13 | ri_portfolio_id | character varying(50) | Y |
| 14 | sub_ri_group_id | character varying(50) | Y |
| 15 | sales_channel | character varying(50) | Y |
| 16 | business_line | character varying(2) | Y |
| 17 | treaty_code | character varying(50) | Y |
| 18 | collection_type | character varying(10) | Y |
| 19 | sales_channel_abbr | character varying(20) | Y |
| 20 | ri_mode_of_payment | character varying(15) | Y |
| 21 | ri_pay_from | date | Y |
| 22 | ri_pay_to | date | Y |
| 23 | premium_type | character varying(10) | Y |
| 24 | sale_option | character varying(50) | Y |
| 25 | ri_gross_premium_life | numeric(25,15) | Y |
| 26 | ri_gross_premium_accident_death | numeric(25,15) | Y |
| 27 | ri_gross_premium_med_accident | numeric(25,15) | Y |
| 28 | ri_gross_premium_tpd | numeric(25,15) | Y |
| 29 | ri_gross_premium_ipd | numeric(25,15) | Y |
| 30 | ri_gross_premium_opd | numeric(25,15) | Y |
| 31 | ri_gross_premium_dental | numeric(25,15) | Y |
| 32 | ri_gross_premium_other | numeric(25,15) | Y |
| 33 | created_date | timestamp with time zone | N |
| 34 | created_by | character varying(50) | N |
| 35 | policy_no | character varying(20) | Y |
| 36 | ri_type | character varying(20) | Y |

### `public.tx_rcc_error_log_r19` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r19_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | period | character varying(6) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | gl_type | character varying(2) | Y |
| 7 | gl_amount | numeric(25,15) | Y |
| 8 | event_code | character varying(25) | Y |
| 9 | reference_number | character varying(20) | Y |
| 10 | system_name | character varying(50) | Y |
| 11 | policy_no | character varying(20) | Y |
| 12 | business_line | character varying(2) | Y |
| 13 | commission_type | character varying(50) | Y |
| 14 | ri_type | character varying(20) | Y |
| 15 | collection_type | character varying(10) | Y |
| 16 | sub_ri_group_id | character varying(50) | Y |
| 17 | portfolio_id | character varying(50) | Y |
| 18 | ri_portfolio_id | character varying(50) | Y |
| 19 | sales_channel | character varying(50) | Y |
| 20 | sales_channel_abbr | character varying(20) | Y |
| 21 | ri_mode_of_payment | character varying(50) | Y |
| 22 | treaty_code | character varying(50) | Y |
| 23 | sale_option | character varying(50) | Y |
| 24 | policy_year | numeric(2,0) | Y |
| 25 | created_date | timestamp with time zone | N |
| 26 | created_by | character varying(50) | N |
| 27 | ri_pay_from | date | Y |
| 28 | ri_pay_to | date | Y |

### `public.tx_rcc_error_log_r20` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_error_log_r20_id | numeric(18,0) | N |
| 2 | rcc_monthly_dt_id | numeric(8,0) | N |
| 3 | account_code | character varying(20) | Y |
| 4 | account_name | character varying(100) | Y |
| 5 | gl_type | character varying(2) | Y |
| 6 | gl_amount | numeric(25,15) | Y |
| 7 | event_code | character varying(25) | Y |
| 8 | policy_no | character varying(20) | Y |
| 9 | reference_number | character varying(20) | Y |
| 10 | system_name | character varying(50) | Y |
| 11 | period | character varying(6) | Y |
| 12 | policy_year | numeric(2,0) | Y |
| 13 | portfolio_id | character varying(50) | Y |
| 14 | ri_portfolio_id | character varying(50) | Y |
| 15 | sub_ri_group_id | character varying(50) | Y |
| 16 | sales_channel | character varying(50) | Y |
| 17 | business_line | character varying(2) | Y |
| 18 | treaty_code | character varying(50) | Y |
| 19 | collection_type | character varying(10) | Y |
| 20 | sales_channel_abbr | character varying(20) | Y |
| 21 | certificate_no | character varying(50) | Y |
| 22 | age | character varying(3) | Y |
| 23 | sex | character varying(10) | Y |
| 24 | claim_event_date | date | Y |
| 25 | claim_recovery_date | date | Y |
| 26 | sale_option | character varying(50) | Y |
| 27 | recovery_amount_life | numeric(25,15) | Y |
| 28 | recovery_amount_accident_death | numeric(25,15) | Y |
| 29 | recovery_amount_med_accident | numeric(25,15) | Y |
| 30 | recovery_amount_tpd | numeric(25,15) | Y |
| 31 | recovery_amount_ipd | numeric(25,15) | Y |
| 32 | recovery_amount_opd | numeric(25,15) | Y |
| 33 | recovery_amount_dental | numeric(25,15) | Y |
| 34 | recovery_amount_other | numeric(25,15) | Y |
| 35 | return_premium | numeric(25,15) | Y |
| 36 | created_date | timestamp with time zone | N |
| 37 | created_by | character varying(50) | N |
| 38 | ri_type | character varying(20) | Y |

### `public.tx_rcc_generate_file` — rows: 114

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | header_id | numeric(8,0) | Y |
| 3 | detail_id | numeric(8,0) | Y |
| 4 | content_id | uuid | N |
| 5 | created_date | timestamp without time zone | N |
| 6 | created_by | character varying(50) | N |
| 7 | file_no | numeric(2,0) | Y |
| 8 | system_source | character varying(50) | Y |
| 9 | status | character varying(1) | Y |
| 10 | seaweed_type | character varying(10) | Y |
| 11 | error_flg | boolean | Y |
| 12 | upload_flg | boolean | Y |

<details><summary>sample rows</summary>

```json
{"id":"1","header_id":"1","detail_id":"2","content_id":"4fcd87cb-b7d6-4864-9237-ba8669df2b49","created_date":"2022-11-02T02:12:57.073Z","created_by":"vanchalerm.wa","file_no":"1","system_source":"EXPALLOC","status":"W","seaweed_type":null,"error_flg":null,"upload_flg":null}
{"id":"2","header_id":"1","detail_id":"2","content_id":"36eeb056-5c27-407c-a088-1a4192cc5563","created_date":"2022-11-02T02:12:58.216Z","created_by":"vanchalerm.wa","file_no":"1","system_source":"EXPALLOC","status":"W","seaweed_type":null,"error_flg":null,"upload_flg":null}
```
</details>

### `public.tx_rcc_landing_adj_r13` — rows: 11706

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_land_adj_r13_2_id | numeric(18,0) | N |
| 2 | rcc_land_r13_hd_id | numeric(18,0) | N |
| 3 | period | character varying(6) | N |
| 4 | account_code | character varying(20) | N |
| 5 | account_name | character varying(50) | N |
| 6 | amt_bf_non_recurring | numeric(25,15) | N |
| 7 | non_recurring | numeric(25,15) | Y |
| 8 | amt_af_non_recurring | numeric(25,15) | N |
| 9 | dae_acq_amount | numeric(25,15) | Y |
| 10 | dae_maint_amount | numeric(25,15) | Y |
| 11 | non_dae_amount | numeric(25,15) | Y |
| 12 | adj_dae_acq_amount | numeric(25,15) | Y |
| 13 | adj_dae_maint_amount | numeric(25,15) | Y |
| 14 | adj_non_dae_amount | numeric(25,15) | Y |
| 15 | created_date | timestamp with time zone | N |
| 16 | created_by | character varying(50) | N |
| 17 | updated_date | timestamp with time zone | Y |
| 18 | updated_by | character varying(50) | Y |
| 19 | adj_non_recurring_amount | numeric(25,15) | Y |
| 20 | total_adj_non_dae | numeric(25,15) | Y |
| 21 | loading_expense | character varying(50) | Y |
| 22 | sell_channel | character varying(100) | Y |
| 23 | direct_1 | character varying(100) | Y |
| 24 | direct_2 | character varying(100) | Y |
| 25 | business_unit | character varying(100) | Y |
| 26 | gpv_expense_type | character varying(100) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_land_adj_r13_2_id":"1","rcc_land_r13_hd_id":"1","period":"202201","account_code":"50551218","account_name":"ค่าบริหารทีมงานพิเศษ - ปีแรก","amt_bf_non_recurring":"72278.000000000000000","non_recurring":"0.000000000000000","amt_af_non_recurring":"72278.000000000000000","dae_acq_amount":"72278.000000000000000","dae_maint_amount":"0.000000000000000","non_dae_amount":"0.000000000000000","adj_dae_acq_amount":"-72278.000000000000000","adj_dae_maint_amount":"0.000000000000000","adj_non_dae_amount":"0.000000000000000","created_date":"2022-11-11T02:17:31.700Z","created_by":"jitra.ud","updated_date":null,"updated_by":null,"adj_non_recurring_amount":null,"total_adj_non_dae":null,"loading_expense":null,"sell_channel":null,"direct_1":null,"direct_2":null,"business_unit":null,"gpv_expense_type":null}
{"rcc_land_adj_r13_2_id":"2","rcc_land_r13_hd_id":"1","period":"202201","account_code":"50551219","account_name":"ค่าบริหารทีมงานพิเศษ","amt_bf_non_recurring":"163149.000000000000000","non_recurring":"0.000000000000000","amt_af_non_recurring":"163149.000000000000000","dae_acq_amount":"0.000000000000000","dae_maint_amount":"163149.000000000000000","non_dae_amount":"0.000000000000000","adj_dae_acq_amount":"0.000000000000000","adj_dae_maint_amount":"-163149.000000000000000","adj_non_dae_amount":"0.000000000000000","created_date":"2022-11-11T02:17:31.701Z","created_by":"jitra.ud","updated_date":null,"updated_by":null,"adj_non_recurring_amount":null,"total_adj_non_dae":null,"loading_expense":null,"sell_channel":null,"direct_1":null,"direct_2":null,"business_unit":null,"gpv_expense_type":null}
```
</details>

### `public.tx_rcc_model_detail` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | max_id | bigint(64,0) | Y |
| 2 | min_id | bigint(64,0) | Y |
| 3 | period | character varying(6) | N |
| 4 | model_type | character varying(50) | N |

### `public.tx_rcc_monitoring` — rows: 1

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | processing_name | character varying(30) | Y |
| 2 | reconcile_header_id | numeric(18,0) | Y |
| 3 | total_reconcile_report | numeric(3,0) | N |
| 4 | user_login_name | character varying(50) | N |
| 5 | created_date | timestamp with time zone | N |
| 6 | created_by | character varying(50) | N |
| 7 | updated_date | timestamp with time zone | Y |
| 8 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"processing_name":"Monitoring","reconcile_header_id":"1239","total_reconcile_report":"1","user_login_name":"boss","created_date":"2026-05-23T04:28:42.305Z","created_by":"boss","updated_date":"2026-05-23T04:49:55.901Z","updated_by":"boss"}
```
</details>

### `public.tx_rcc_ops_acc` — rows: 1050904

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_acc_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | type | character varying(5) | Y |
| 4 | account_code | character varying(20) | N |
| 5 | account_name | character varying(100) | N |
| 6 | audited_fs | character varying(100) | Y |
| 7 | edw_insur_or_not | character varying(5) | Y |
| 8 | ifrs17_rec_adj | character varying(5) | Y |
| 9 | tb_amount | numeric(25,3) | N |
| 10 | sum_rcc_amount_r01 | numeric(25,3) | Y |
| 11 | sum_rcc_amount_r02 | numeric(25,3) | Y |
| 12 | sum_rcc_amount_r03 | numeric(25,3) | Y |
| 13 | sum_rcc_amount_r04 | numeric(25,3) | Y |
| 14 | sum_rcc_amount_r05 | numeric(25,3) | Y |
| 15 | sum_rcc_amount_r06 | numeric(25,3) | Y |
| 16 | sum_rcc_amount_r07 | numeric(25,3) | Y |
| 17 | sum_rcc_amount_r08 | numeric(25,3) | Y |
| 18 | sum_rcc_amount_r09 | numeric(25,3) | Y |
| 19 | sum_rcc_amount_r10 | numeric(25,3) | Y |
| 20 | sum_rcc_amount_r11 | numeric(25,3) | Y |
| 21 | sum_rcc_amount_r12 | numeric(25,3) | Y |
| 22 | sum_rcc_amount_r13 | numeric(25,3) | Y |
| 23 | sum_rcc_amount_r14 | numeric(25,3) | Y |
| 24 | sum_rcc_amount_r15 | numeric(25,3) | Y |
| 25 | sum_rcc_amount_r16 | numeric(25,3) | Y |
| 26 | sum_rcc_amount_r17 | numeric(25,3) | Y |
| 27 | sum_rcc_amount_r18 | numeric(25,3) | Y |
| 28 | sum_rcc_amount_r19 | numeric(25,3) | Y |
| 29 | sum_rcc_amount_r20 | numeric(25,3) | Y |
| 30 | total_r01_r20_amount | numeric(25,3) | Y |
| 31 | diff | numeric(25,3) | Y |
| 32 | created_date | timestamp with time zone | N |
| 33 | created_by | character varying(50) | N |
| 34 | updated_date | timestamp with time zone | Y |
| 35 | updated_by | character varying(50) | Y |
| 36 | results | character varying(50) | Y |
| 37 | tb_flag | boolean | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_acc_id":"3273","rcc_monthly_hd_id":"288","type":null,"account_code":"10500000","account_name":"เงินสำรองประกันภัยต่อ","audited_fs":null,"edw_insur_or_not":null,"ifrs17_rec_adj":null,"tb_amount":"-2937464.080","sum_rcc_amount_r01":"0.000","sum_rcc_amount_r02":"0.000","sum_rcc_amount_r03":"0.000","sum_rcc_amount_r04":"0.000","sum_rcc_amount_r05":"0.000","sum_rcc_amount_r06":"0.000","sum_rcc_amount_r07":"0.000","sum_rcc_amount_r08":"0.000","sum_rcc_amount_r09":"0.000","sum_rcc_amount_r10":"0.000","sum_rcc_amount_r11":"0.000","sum_rcc_amount_r12":"0.000","sum_rcc_amount_r13":"0.000","sum_rcc_amount_r14":"0.000","sum_rcc_amount_r15":"0.000","sum_rcc_amount_r16":"0.000","sum_rcc_amount_r17":"0.000","sum_rcc_amount_r18":"0.000","sum_rcc_amount_r19":"0.000","sum_rcc_amount_r20":"0.000","total_r01_r20_amount":"0.000","diff":"-2937464.080","created_date":"2023-10-17T14:32:17.325Z","created_by":"ladda.su","updated_date":"2023-10-17T14:32:18.479Z","updated_by":"ladda.su","results":"Need Investigate","tb_flag":true}
{"rcc_ops_acc_id":"4087","rcc_monthly_hd_id":"292","type":null,"account_code":"11011100","account_name":"�Թ����Сѹ���Ե","audited_fs":null,"edw_insur_or_not":null,"ifrs17_rec_adj":null,"tb_amount":"-26245187.000","sum_rcc_amount_r01":"0.000","sum_rcc_amount_r02":"0.000","sum_rcc_amount_r03":"-10399180.000","sum_rcc_amount_r04":"-270903937.500","sum_rcc_amount_r05":"0.000","sum_rcc_amount_r06":"0.000","sum_rcc_amount_r07":"0.000","sum_rcc_amount_r08":"0.000","sum_rcc_amount_r09":"0.000","sum_rcc_amount_r10":"0.000","sum_rcc_amount_r11":"0.000","sum_rcc_amount_r12":"0.000","sum_rcc_amount_r13":"0.000","sum_rcc_amount_r14":"-26491939.000","sum_rcc_amount_r15":"0.000","sum_rcc_amount_r16":"0.000","sum_rcc_amount_r17":"0.000","sum_rcc_amount_r18":"0.000","sum_rcc_amount_r19":"0.000","sum_rcc_amount_r20":"0.000","total_r01_r20_amount":"-307795056.500","diff":"281549869.500","created_date":"2023-10-18T05:31:05.710Z","created_by":"piyawat.ju","updated_date":"2023-10-18T05:31:06.898Z","updated_by":"piyawat.ju","results":"Need Investigate","tb_flag":true}
```
</details>

### `public.tx_rcc_ops_r01` — rows: 904

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r01_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | premium_type | character varying(10) | Y |
| 4 | no_of_transaction | numeric(8,0) | Y |
| 5 | premium_amount | numeric(30,15) | Y |
| 6 | created_date | timestamp with time zone | N |
| 7 | created_by | character varying(50) | N |
| 8 | updated_date | timestamp with time zone | Y |
| 9 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r01_id":"8","rcc_monthly_hd_id":"287","premium_type":"ADVANCE","no_of_transaction":"70218","premium_amount":"147494754.870000000000000","created_date":"2023-10-17T07:15:44.784Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r01_id":"9","rcc_monthly_hd_id":"287","premium_type":"RETURN","no_of_transaction":"1043","premium_amount":"-6042041.820000000000000","created_date":"2023-10-17T07:15:44.784Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r02` — rows: 438

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r02_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | commission_ov_type | character varying(20) | Y |
| 4 | no_of_transaction | numeric(8,0) | Y |
| 5 | initial_commission | numeric(30,15) | Y |
| 6 | renewal_commission | numeric(30,15) | Y |
| 7 | initial_override | numeric(30,15) | Y |
| 8 | renewal_override | numeric(30,15) | Y |
| 9 | total | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r02_id":"5","rcc_monthly_hd_id":"287","commission_ov_type":"CLAWBACK","no_of_transaction":"1182","initial_commission":"-468607.470000000000000","renewal_commission":"-154145.370000000000000","initial_override":"-489905.290000000000000","renewal_override":"-24112.340000000000000","total":"-1136770.470000000000000","created_date":"2023-10-17T07:19:40.051Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r02_id":"6","rcc_monthly_hd_id":"287","commission_ov_type":"NORMAL","no_of_transaction":"184249","initial_commission":"21494623.060000000000000","renewal_commission":"16046746.420000000000000","initial_override":"18731581.920000000000000","renewal_override":"483472.000000000000000","total":"56756423.400000000000000","created_date":"2023-10-17T07:19:40.051Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r03` — rows: 244

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r03_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | paid_amount_life | numeric(30,15) | Y |
| 5 | paid_amount_accident_death | numeric(30,15) | Y |
| 6 | paid_amount_accident_non_death | numeric(30,15) | Y |
| 7 | paid_amount_health | numeric(30,15) | Y |
| 8 | paid_amount_dismemberment | numeric(30,15) | Y |
| 9 | paid_amount_tpd | numeric(30,15) | Y |
| 10 | paid_amount_other | numeric(30,15) | Y |
| 11 | return_premium | numeric(30,15) | Y |
| 12 | policy_loan_principal_amount | numeric(30,15) | Y |
| 13 | policy_loan_interest_amount | numeric(30,15) | Y |
| 14 | apl_principal_amount | numeric(30,15) | Y |
| 15 | apl_interest_amount | numeric(30,15) | Y |
| 16 | other_liabilities_amount | numeric(30,15) | Y |
| 17 | created_date | timestamp with time zone | N |
| 18 | created_by | character varying(50) | N |
| 19 | updated_date | timestamp with time zone | Y |
| 20 | updated_by | character varying(50) | Y |
| 21 | investment_component | numeric(30,15) | Y |
| 22 | insurance_component | numeric(30,15) | Y |
| 23 | co_payment_client_paid | numeric(30,15) | Y |
| 24 | premium_amount | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r03_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"15280","paid_amount_life":"102449588.120000000000000","paid_amount_accident_death":"6339740.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"36921709.880000000000000","paid_amount_dismemberment":"3464182.130000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"183380.000000000000000","return_premium":"927865.880000000000000","policy_loan_principal_amount":"3531200.000000000000000","policy_loan_interest_amount":"865492.000000000000000","apl_principal_amount":"828683.100000000000000","apl_interest_amount":"68793.770000000000000","other_liabilities_amount":"2698454.440000000000000","created_date":"2023-10-17T07:24:36.455Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"investment_component":null,"insurance_component":null,"co_payment_client_paid":null,"premium_amount":null}
{"rcc_ops_r03_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"15280","paid_amount_life":"102449588.120000000000000","paid_amount_accident_death":"6339740.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"36921709.880000000000000","paid_amount_dismemberment":"3464182.130000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"183380.000000000000000","return_premium":"927865.880000000000000","policy_loan_principal_amount":"3531200.000000000000000","policy_loan_interest_amount":"865492.000000000000000","apl_principal_amount":"828683.100000000000000","apl_interest_amount":"68793.770000000000000","other_liabilities_amount":"2698454.440000000000000","created_date":"2023-10-17T14:12:10.533Z","created_by":"ladda.su","updated_date":null,"updated_by":null,"investment_component":null,"insurance_component":null,"co_payment_client_paid":null,"premium_amount":null}
```
</details>

### `public.tx_rcc_ops_r04` — rows: 138

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r04_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | annual_coupon | numeric(30,15) | Y |
| 5 | maturity_benefit | numeric(30,15) | Y |
| 6 | annuity_benefit | numeric(30,15) | Y |
| 7 | certain_annuity_benefit | numeric(30,15) | Y |
| 8 | life_annuity_benefit | numeric(30,15) | Y |
| 9 | ng_maturity_benefit | numeric(30,15) | Y |
| 10 | ng_annual_coupon | numeric(30,15) | Y |
| 11 | ng_annuity_benefit | numeric(30,15) | Y |
| 12 | surrender_benefit | numeric(30,15) | Y |
| 13 | lapse | numeric(30,15) | Y |
| 14 | other | numeric(30,15) | Y |
| 15 | policy_loan_principal_amount | numeric(30,15) | Y |
| 16 | policy_loan_interest_amount | numeric(30,15) | Y |
| 17 | apl_principal_amount | numeric(30,15) | Y |
| 18 | apl_interest_amount | numeric(30,15) | Y |
| 19 | other_liabilities_amount | numeric(30,15) | Y |
| 20 | created_date | timestamp with time zone | N |
| 21 | created_by | character varying(50) | N |
| 22 | updated_date | timestamp with time zone | Y |
| 23 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r04_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"610160","annual_coupon":"42951803.320000000000000","maturity_benefit":"469800493.580000000000000","annuity_benefit":"135305.500000000000000","certain_annuity_benefit":"135305.500000000000000","life_annuity_benefit":"0.000000000000000","ng_maturity_benefit":"0.000000000000000","ng_annual_coupon":"0.000000000000000","ng_annuity_benefit":"0.000000000000000","surrender_benefit":"226909266.030000000000000","lapse":"0.000000000000000","other":"1169.500000000000000","policy_loan_principal_amount":"18060561.500000000000000","policy_loan_interest_amount":"38004074.990000000000000","apl_principal_amount":"-28227177.330000000000000","apl_interest_amount":"11383239.730000000000000","other_liabilities_amount":"1090256312.380000000000000","created_date":"2023-10-17T07:34:48.646Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r04_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"14937","annual_coupon":"42951803.320000000000000","maturity_benefit":"469800493.580000000000000","annuity_benefit":"135305.500000000000000","certain_annuity_benefit":"135305.500000000000000","life_annuity_benefit":"0.000000000000000","ng_maturity_benefit":"0.000000000000000","ng_annual_coupon":"0.000000000000000","ng_annuity_benefit":"0.000000000000000","surrender_benefit":"226909266.030000000000000","lapse":"0.000000000000000","other":"1169.500000000000000","policy_loan_principal_amount":"92822815.500000000000000","policy_loan_interest_amount":"39773490.590000000000000","apl_principal_amount":"26291242.390000000000000","apl_interest_amount":"3318437.460000000000000","other_liabilities_amount":"3269847.570000000000000","created_date":"2023-10-17T14:15:30.772Z","created_by":"ladda.su","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r05` — rows: 233

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r05_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | premium_type | character varying(10) | Y |
| 5 | totalpremium_amount | numeric(30,15) | Y |
| 6 | unallocated_premium | numeric(30,15) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r05_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"44","premium_type":"REGULAR","totalpremium_amount":"544000.000000000000000","unallocated_premium":"194500.000000000000000","created_date":"2023-10-17T07:35:35.792Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r05_id":"5","rcc_monthly_hd_id":"287","no_of_transaction":"8","premium_type":"SINGLE","totalpremium_amount":"420000.000000000000000","unallocated_premium":"4200.000000000000000","created_date":"2023-10-17T07:35:35.792Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r06` — rows: 238

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r06_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | commission_ov_type | character varying(20) | Y |
| 5 | initial_commission | numeric(30,15) | Y |
| 6 | renewal_commission | numeric(30,15) | Y |
| 7 | initial_override | numeric(30,15) | Y |
| 8 | renewal_override | numeric(30,15) | Y |
| 9 | total | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r06_id":"3","rcc_monthly_hd_id":"287","no_of_transaction":"3","commission_ov_type":"ACCRUED","initial_commission":"1200.000000000000000","renewal_commission":"6750.000000000000000","initial_override":"0.000000000000000","renewal_override":"0.000000000000000","total":"7950.000000000000000","created_date":"2023-10-17T07:37:11.631Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r06_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"34","commission_ov_type":"NORMAL","initial_commission":"28400.000000000000000","renewal_commission":"23400.000000000000000","initial_override":"38232.960000000000000","renewal_override":"1231.000000000000000","total":"91263.960000000000000","created_date":"2023-10-17T07:37:11.631Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r07` — rows: 71

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r07_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | total_death_benefit | numeric(30,15) | Y |
| 5 | death_benefit_unit_cost | numeric(30,15) | Y |
| 6 | death_benefit_non_unit_cost | numeric(30,15) | Y |
| 7 | paid_amount_accident_death | numeric(30,15) | Y |
| 8 | paid_amount_accident_non_death | numeric(30,15) | Y |
| 9 | paid_amount_health | numeric(30,15) | Y |
| 10 | paid_amount_dismemberment | numeric(30,15) | Y |
| 11 | paid_amount_tpd | numeric(30,15) | Y |
| 12 | paid_amount_other | numeric(30,15) | Y |
| 13 | return_premium | numeric(30,15) | Y |
| 14 | other_liabilities_amount | numeric(30,15) | Y |
| 15 | created_date | timestamp with time zone | N |
| 16 | created_by | character varying(50) | N |
| 17 | updated_date | timestamp with time zone | Y |
| 18 | updated_by | character varying(50) | Y |
| 19 | av_at_death_event | numeric(30,15) | Y |
| 20 | surrender_charge_at_death_event | numeric(30,15) | Y |
| 21 | surrender_value | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r07_id":"1","rcc_monthly_hd_id":"528","no_of_transaction":"1","total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2024-04-22T16:19:14.626Z","created_by":"charun.ph","updated_date":null,"updated_by":null,"av_at_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null}
{"rcc_ops_r07_id":"2","rcc_monthly_hd_id":"529","no_of_transaction":"1","total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2024-04-29T17:17:35.090Z","created_by":"charun.ph","updated_date":null,"updated_by":null,"av_at_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null}
{"rcc_ops_r07_id":"3","rcc_monthly_hd_id":"530","no_of_transaction":"1","total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2024-05-10T09:20:09.908Z","created_by":"charun.ph","updated_date":null,"updated_by":null,"av_at_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null}
{"rcc_ops_r07_id":"4","rcc_monthly_hd_id":"531","no_of_transaction":"1","total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2024-05-12T13:21:53.015Z","created_by":"charun.ph","updated_date":null,"updated_by":null,"av_at_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null}
{"rcc_ops_r07_id":"5","rcc_monthly_hd_id":"533","no_of_transaction":"1","total_death_benefit":"1080000.000000000000000","death_benefit_unit_cost":"0.000000000000000","death_benefit_non_unit_cost":"1080000.000000000000000","paid_amount_accident_death":"0.000000000000000","paid_amount_accident_non_death":"0.000000000000000","paid_amount_health":"0.000000000000000","paid_amount_dismemberment":"0.000000000000000","paid_amount_tpd":"0.000000000000000","paid_amount_other":"0.000000000000000","return_premium":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2024-05-13T14:56:37.495Z","created_by":"charun.ph","updated_date":null,"updated_by":null,"av_at_death_event":null,"surrender_charge_at_death_event":null,"surrender_value":null}
```
</details>

### `public.tx_rcc_ops_r08` — rows: 161

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r08_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | loyalty_bonus | numeric(30,15) | Y |
| 5 | maturity_benefit | numeric(30,15) | Y |
| 6 | surrender_benefit | numeric(30,15) | Y |
| 7 | lapse | numeric(30,15) | Y |
| 8 | other | numeric(30,15) | Y |
| 9 | other_liabilities_amount | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r08_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"1","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"9004.670000000000000","lapse":"0.000000000000000","other":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2023-10-17T07:38:32.901Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r08_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"1","loyalty_bonus":"0.000000000000000","maturity_benefit":"0.000000000000000","surrender_benefit":"9004.670000000000000","lapse":"0.000000000000000","other":"0.000000000000000","other_liabilities_amount":"0.000000000000000","created_date":"2023-10-17T14:18:59.520Z","created_by":"ladda.su","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r09` — rows: 126

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r09_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | coi_charge | numeric(30,15) | Y |
| 5 | policy_fee | numeric(30,15) | Y |
| 6 | administration_fee | numeric(30,15) | Y |
| 7 | surrender_charge | numeric(30,15) | Y |
| 8 | reinstatement_fee | numeric(30,15) | Y |
| 9 | financial_statement_fee | numeric(30,15) | Y |
| 10 | fund_switching_fee | numeric(30,15) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r09_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"320","coi_charge":"41860.330000000000000","policy_fee":"0.000000000000000","administration_fee":"5162.750000000000000","surrender_charge":"3351.150000000000000","reinstatement_fee":"0.000000000000000","financial_statement_fee":"0.000000000000000","fund_switching_fee":"0.000000000000000","created_date":"2023-10-17T07:38:44.270Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r09_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"320","coi_charge":"41860.330000000000000","policy_fee":"0.000000000000000","administration_fee":"5162.750000000000000","surrender_charge":"3351.150000000000000","reinstatement_fee":"0.000000000000000","financial_statement_fee":"0.000000000000000","fund_switching_fee":"0.000000000000000","created_date":"2023-10-17T14:19:13.945Z","created_by":"ladda.su","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r10` — rows: 425

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r10_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | prem_type | character varying(25) | Y |
| 5 | actual_prem_life | numeric(30,15) | Y |
| 6 | actual_prem_acc_death | numeric(30,15) | Y |
| 7 | actual_prem_med_acc | numeric(30,15) | Y |
| 8 | actual_prem_tpd | numeric(30,15) | Y |
| 9 | actual_prem_ipd | numeric(30,15) | Y |
| 10 | actual_prem_opd | numeric(30,15) | Y |
| 11 | actual_prem_dental | numeric(30,15) | Y |
| 12 | actual_prem_other | numeric(30,15) | Y |
| 13 | created_date | timestamp with time zone | N |
| 14 | created_by | character varying(50) | N |
| 15 | updated_date | timestamp with time zone | Y |
| 16 | updated_by | character varying(50) | Y |
| 17 | prem_life | numeric(30,15) | Y |
| 18 | prem_acc | numeric(30,15) | Y |
| 19 | prem_med | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r10_id":"5","rcc_monthly_hd_id":"287","no_of_transaction":"331","prem_type":"NORMAL","actual_prem_life":"206582902.950000000000000","actual_prem_acc_death":"16248381.220000000000000","actual_prem_med_acc":"2834088.960000000000000","actual_prem_tpd":"2381165.810000000000000","actual_prem_ipd":"23488675.900000000000000","actual_prem_opd":"23517652.340000000000000","actual_prem_dental":"2314998.630000000000000","actual_prem_other":"0.000000000000000","created_date":"2023-10-17T07:39:45.133Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"prem_life":null,"prem_acc":null,"prem_med":null}
{"rcc_ops_r10_id":"6","rcc_monthly_hd_id":"287","no_of_transaction":"2","prem_type":"EXPERIENCE REFUND","actual_prem_life":"-10882.350000000000000","actual_prem_acc_death":"0.000000000000000","actual_prem_med_acc":"0.000000000000000","actual_prem_tpd":"0.000000000000000","actual_prem_ipd":"0.000000000000000","actual_prem_opd":"0.000000000000000","actual_prem_dental":"0.000000000000000","actual_prem_other":"0.000000000000000","created_date":"2023-10-17T07:39:45.133Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"prem_life":null,"prem_acc":null,"prem_med":null}
```
</details>

### `public.tx_rcc_ops_r11` — rows: 294

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r11_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | comm_ov_type | character varying(25) | Y |
| 5 | comm_life | numeric(30,15) | Y |
| 6 | comm_accident | numeric(30,15) | Y |
| 7 | comm_med | numeric(30,15) | Y |
| 8 | comm_tpd | numeric(30,15) | Y |
| 9 | comm_ipd | numeric(30,15) | Y |
| 10 | comm_opd | numeric(30,15) | Y |
| 11 | comm_dental | numeric(30,15) | Y |
| 12 | comm_other | numeric(30,15) | Y |
| 13 | created_date | timestamp with time zone | N |
| 14 | created_by | character varying(50) | N |
| 15 | updated_date | timestamp with time zone | Y |
| 16 | updated_by | character varying(50) | Y |
| 17 | initial_commission | numeric(30,15) | Y |
| 18 | renewal_commission | numeric(30,15) | Y |
| 19 | initial_override | numeric(30,15) | Y |
| 20 | renewal_override | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r11_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"183","comm_ov_type":"ACCRUED","comm_life":"0.000000000000000","comm_accident":"-78392.230000000000000","comm_med":"-172537.970000000000000","comm_tpd":"0.000000000000000","comm_ipd":"0.000000000000000","comm_opd":"0.000000000000000","comm_dental":"0.000000000000000","comm_other":"0.000000000000000","created_date":"2023-10-17T07:40:55.821Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"initial_commission":null,"renewal_commission":null,"initial_override":null,"renewal_override":null}
{"rcc_ops_r11_id":"5","rcc_monthly_hd_id":"287","no_of_transaction":"1","comm_ov_type":"CLAWBACK","comm_life":"0.000000000000000","comm_accident":"-2.420000000000000","comm_med":"0.000000000000000","comm_tpd":"0.000000000000000","comm_ipd":"0.000000000000000","comm_opd":"0.000000000000000","comm_dental":"0.000000000000000","comm_other":"0.000000000000000","created_date":"2023-10-17T07:40:55.821Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"initial_commission":null,"renewal_commission":null,"initial_override":null,"renewal_override":null}
```
</details>

### `public.tx_rcc_ops_r12` — rows: 298

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r12_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | claim_status | character varying(50) | Y |
| 5 | amount_life | numeric(30,15) | Y |
| 6 | accident_death | numeric(30,15) | Y |
| 7 | med_accident | numeric(30,15) | Y |
| 8 | amount_tpd | numeric(30,15) | Y |
| 9 | amount_ipd | numeric(30,15) | Y |
| 10 | amount_opd | numeric(30,15) | Y |
| 11 | amount_dental | numeric(30,15) | Y |
| 12 | amount_other | numeric(30,15) | Y |
| 13 | return_premium | numeric(30,15) | Y |
| 14 | created_date | timestamp with time zone | N |
| 15 | created_by | character varying(50) | N |
| 16 | updated_date | timestamp with time zone | Y |
| 17 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r12_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"2","claim_status":"ACCRUED","amount_life":"0.000000000000000","accident_death":"15000.000000000000000","med_accident":"0.000000000000000","amount_tpd":"0.000000000000000","amount_ipd":"0.000000000000000","amount_opd":"0.000000000000000","amount_dental":"0.000000000000000","amount_other":"0.000000000000000","return_premium":"0.000000000000000","created_date":"2023-10-17T07:42:03.059Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r12_id":"5","rcc_monthly_hd_id":"287","no_of_transaction":"60","claim_status":"APPROVE","amount_life":"0.000000000000000","accident_death":"0.000000000000000","med_accident":"173480.800000000000000","amount_tpd":"0.000000000000000","amount_ipd":"0.000000000000000","amount_opd":"0.000000000000000","amount_dental":"0.000000000000000","amount_other":"0.000000000000000","return_premium":"0.000000000000000","created_date":"2023-10-17T07:42:03.059Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r13` — rows: 215

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | amount_expense | numeric(30,15) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_id":"1","rcc_monthly_hd_id":"296","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202310_to_202310","no_of_transaction":"12","amount_expense":"161692650.490000000000000","created_date":"2023-11-20T08:32:46.136Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r13_id":"2","rcc_monthly_hd_id":"296","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202310_to_202310","no_of_transaction":"382","amount_expense":"8938345.600000000000000","created_date":"2023-11-20T08:32:46.136Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r13_adv_branding` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_adv_branding_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | total | numeric(25,2) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | update_date | timestamp with time zone | Y |
| 10 | update_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_adv_branding_id":"1","rcc_monthly_hd_id":"555","cf_file_name_id":"10","result_name":"R13_AdvertisingBranding_202404_to_202404","no_of_transaction":"803","total":"0.00","created_date":"2024-06-28T07:42:06.070Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_branding_id":"2","rcc_monthly_hd_id":"560","cf_file_name_id":"10","result_name":"R13_AdvertisingBranding_202403_to_202403","no_of_transaction":"8","total":"0.00","created_date":"2024-07-12T03:29:12.185Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_branding_id":"3","rcc_monthly_hd_id":"561","cf_file_name_id":"10","result_name":"R13_AdvertisingBranding_202402_to_202402","no_of_transaction":"777","total":"0.00","created_date":"2024-07-15T04:51:25.414Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_branding_id":"4","rcc_monthly_hd_id":"562","cf_file_name_id":"10","result_name":"R13_AdvertisingBranding_202401_to_202401","no_of_transaction":"764","total":"0.00","created_date":"2024-07-16T02:40:12.755Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_branding_id":"5","rcc_monthly_hd_id":"563","cf_file_name_id":"10","result_name":"R13_AdvertisingBranding_202312_to_202312","no_of_transaction":"684","total":"0.00","created_date":"2024-07-18T10:46:36.798Z","created_by":"boss","update_date":null,"update_by":null}
```
</details>

### `public.tx_rcc_ops_r13_adv_product` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_adv_product_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | total | numeric(25,2) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | update_date | timestamp with time zone | Y |
| 10 | update_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_adv_product_id":"1","rcc_monthly_hd_id":"555","cf_file_name_id":"9","result_name":"R13_AdvertisingProduct_202404_to_202404","no_of_transaction":"803","total":"0.00","created_date":"2024-06-28T07:42:06.211Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_product_id":"2","rcc_monthly_hd_id":"560","cf_file_name_id":"9","result_name":"R13_AdvertisingProduct_202403_to_202403","no_of_transaction":"8","total":"0.00","created_date":"2024-07-12T03:29:12.230Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_product_id":"3","rcc_monthly_hd_id":"561","cf_file_name_id":"9","result_name":"R13_AdvertisingProduct_202402_to_202402","no_of_transaction":"777","total":"0.00","created_date":"2024-07-15T04:51:25.543Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_product_id":"4","rcc_monthly_hd_id":"562","cf_file_name_id":"9","result_name":"R13_AdvertisingProduct_202401_to_202401","no_of_transaction":"764","total":"0.00","created_date":"2024-07-16T02:40:12.801Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_adv_product_id":"5","rcc_monthly_hd_id":"563","cf_file_name_id":"9","result_name":"R13_AdvertisingProduct_202312_to_202312","no_of_transaction":"684","total":"0.00","created_date":"2024-07-18T10:46:36.822Z","created_by":"boss","update_date":null,"update_by":null}
```
</details>

### `public.tx_rcc_ops_r13_opex_portfolio` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_opex_portfolio_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | dae_acq | numeric(25,2) | Y |
| 7 | dae_maint | numeric(25,2) | Y |
| 8 | non_dae | numeric(25,2) | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | update_date | timestamp with time zone | Y |
| 12 | update_by | character varying(50) | Y |
| 13 | non_recurring | numeric(25,2) | Y |
| 14 | oic_free | numeric(25,2) | Y |
| 15 | sbt | numeric(25,2) | Y |
| 16 | investment | numeric(25,2) | Y |
| 17 | property | numeric(25,2) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_opex_portfolio_id":"1","rcc_monthly_hd_id":"555","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202404_to_202404","no_of_transaction":"65","dae_acq":"32566996.68","dae_maint":"57742287.86","non_dae":"130815373.25","created_date":"2024-06-28T07:42:06.296Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_portfolio_id":"2","rcc_monthly_hd_id":"560","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202403_to_202403","no_of_transaction":"8","dae_acq":"707.68","dae_maint":"401.35","non_dae":"290.98","created_date":"2024-07-12T03:29:12.245Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_portfolio_id":"3","rcc_monthly_hd_id":"561","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202402_to_202402","no_of_transaction":"62","dae_acq":"31645546.24","dae_maint":"55066168.60","non_dae":"74872628.69","created_date":"2024-07-15T04:51:25.645Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_portfolio_id":"4","rcc_monthly_hd_id":"562","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202401_to_202401","no_of_transaction":"62","dae_acq":"30101262.74","dae_maint":"54122880.00","non_dae":"76363618.60","created_date":"2024-07-16T02:40:12.823Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_portfolio_id":"5","rcc_monthly_hd_id":"563","cf_file_name_id":"6","result_name":"R13_ExpenseAllocation_By_PortfolioID_202312_to_202312","no_of_transaction":"46","dae_acq":"38971652.40","dae_maint":"62614687.65","non_dae":"86071096.55","created_date":"2024-07-18T10:46:36.841Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
```
</details>

### `public.tx_rcc_ops_r13_opex_subgroup` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_opex_subgroup_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | dae_acq | numeric(25,2) | Y |
| 7 | dae_maint | numeric(25,2) | Y |
| 8 | non_dae | numeric(25,2) | Y |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | update_date | timestamp with time zone | Y |
| 12 | update_by | character varying(50) | Y |
| 13 | non_recurring | numeric(25,2) | Y |
| 14 | oic_free | numeric(25,2) | Y |
| 15 | sbt | numeric(25,2) | Y |
| 16 | investment | numeric(25,2) | Y |
| 17 | property | numeric(25,2) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_opex_subgroup_id":"1","rcc_monthly_hd_id":"555","cf_file_name_id":"7","result_name":"R13_ExpenseAllocation_By_Sub_GroupID_202404_to_202404","no_of_transaction":"803","dae_acq":"32566996.68","dae_maint":"57742287.86","non_dae":"130815373.25","created_date":"2024-06-28T07:42:06.306Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_subgroup_id":"2","rcc_monthly_hd_id":"560","cf_file_name_id":"7","result_name":"R13_ExpenseAllocation_By_Sub_GroupID_202403_to_202403","no_of_transaction":"8","dae_acq":"707.68","dae_maint":"401.35","non_dae":"290.98","created_date":"2024-07-12T03:29:12.265Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_subgroup_id":"3","rcc_monthly_hd_id":"561","cf_file_name_id":"7","result_name":"R13_ExpenseAllocation_By_Sub_GroupID_202402_to_202402","no_of_transaction":"777","dae_acq":"31645546.24","dae_maint":"55066168.60","non_dae":"74872628.69","created_date":"2024-07-15T04:51:25.665Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_subgroup_id":"4","rcc_monthly_hd_id":"562","cf_file_name_id":"7","result_name":"R13_ExpenseAllocation_By_Sub_GroupID_202401_to_202401","no_of_transaction":"764","dae_acq":"30101262.74","dae_maint":"54122880.00","non_dae":"76363618.60","created_date":"2024-07-16T02:40:12.838Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
{"rcc_ops_r13_opex_subgroup_id":"5","rcc_monthly_hd_id":"563","cf_file_name_id":"7","result_name":"R13_ExpenseAllocation_By_Sub_GroupID_202312_to_202312","no_of_transaction":"684","dae_acq":"38971652.40","dae_maint":"62614687.65","non_dae":"86071096.55","created_date":"2024-07-18T10:46:36.849Z","created_by":"boss","update_date":null,"update_by":null,"non_recurring":null,"oic_free":null,"sbt":null,"investment":null,"property":null}
```
</details>

### `public.tx_rcc_ops_r13_sales_promotion` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r13_sales_promotion_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | cf_file_name_id | numeric(18,0) | N |
| 4 | result_name | character varying(100) | N |
| 5 | no_of_transaction | numeric(8,0) | Y |
| 6 | total | numeric(25,2) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | update_date | timestamp with time zone | Y |
| 10 | update_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r13_sales_promotion_id":"1","rcc_monthly_hd_id":"555","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202404_to_202404","no_of_transaction":"803","total":"0.00","created_date":"2024-06-28T07:42:06.340Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_sales_promotion_id":"2","rcc_monthly_hd_id":"560","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202403_to_202403","no_of_transaction":"8","total":"0.00","created_date":"2024-07-12T03:29:12.277Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_sales_promotion_id":"3","rcc_monthly_hd_id":"561","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202402_to_202402","no_of_transaction":"777","total":"0.00","created_date":"2024-07-15T04:51:25.683Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_sales_promotion_id":"4","rcc_monthly_hd_id":"562","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202401_to_202401","no_of_transaction":"764","total":"0.00","created_date":"2024-07-16T02:40:12.852Z","created_by":"boss","update_date":null,"update_by":null}
{"rcc_ops_r13_sales_promotion_id":"5","rcc_monthly_hd_id":"563","cf_file_name_id":"8","result_name":"R13_SalesPromotion_202312_to_202312","no_of_transaction":"684","total":"0.00","created_date":"2024-07-18T10:46:36.861Z","created_by":"boss","update_date":null,"update_by":null}
```
</details>

### `public.tx_rcc_ops_r14` — rows: 1370

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r14_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | loan_type | character varying(50) | Y |
| 5 | loan_repay | character varying(50) | Y |
| 6 | prepayment_amount_total | numeric(30,15) | Y |
| 7 | prepayment_amount_principal | numeric(30,15) | Y |
| 8 | prepayment_amount_interest | numeric(30,15) | Y |
| 9 | takeup_amount | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | N |
| 11 | created_by | character varying(50) | N |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |
| 14 | repayment_from_claim_amount_total | numeric(30,15) | Y |
| 15 | repayment_from_claim_amount_principal | numeric(30,15) | Y |
| 16 | repayment_from_claim_amount_interest | numeric(30,15) | Y |
| 17 | repayment_from_benefit_amount_total | numeric(30,15) | Y |
| 18 | repayment_from_benefit_amount_principal | numeric(30,15) | Y |
| 19 | repayment_from_benefit_amount_interest | numeric(30,15) | Y |
| 20 | compound_interest_amount | numeric(30,15) | Y |
| 21 | other_amount | numeric(30,15) | Y |
| 22 | loan_balance_bf_total | numeric(30,15) | Y |
| 23 | loan_balance_bf_principal | numeric(30,15) | Y |
| 24 | loan_balance_bf_accum_interest | numeric(30,15) | Y |
| 25 | loan_balance_af_total | numeric(30,15) | Y |
| 26 | loan_balance_af_principal | numeric(30,15) | Y |
| 27 | loan_balance_af_accum_interest | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r14_id":"11","rcc_monthly_hd_id":"287","no_of_transaction":"4006","loan_type":"PL","loan_repay":"NormalPrepay","prepayment_amount_total":"110422242.000000000000000","prepayment_amount_principal":"82905285.000000000000000","prepayment_amount_interest":"27516957.000000000000000","takeup_amount":"0.000000000000000","created_date":"2023-10-17T07:45:53.648Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","compound_interest_amount":"0.000000000000000","other_amount":"0.000000000000000","loan_balance_bf_total":null,"loan_balance_bf_principal":null,"loan_balance_bf_accum_interest":null,"loan_balance_af_total":null,"loan_balance_af_principal":null,"loan_balance_af_accum_interest":null}
{"rcc_ops_r14_id":"12","rcc_monthly_hd_id":"287","no_of_transaction":"248292","loan_type":"PL","loan_repay":"CompoundInterest","prepayment_amount_total":"0.000000000000000","prepayment_amount_principal":"0.000000000000000","prepayment_amount_interest":"0.000000000000000","takeup_amount":"0.000000000000000","created_date":"2023-10-17T07:45:53.648Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"repayment_from_claim_amount_total":"0.000000000000000","repayment_from_claim_amount_principal":"0.000000000000000","repayment_from_claim_amount_interest":"0.000000000000000","repayment_from_benefit_amount_total":"0.000000000000000","repayment_from_benefit_amount_principal":"0.000000000000000","repayment_from_benefit_amount_interest":"0.000000000000000","compound_interest_amount":"-16010571.500000000000000","other_amount":"0.000000000000000","loan_balance_bf_total":null,"loan_balance_bf_principal":null,"loan_balance_bf_accum_interest":null,"loan_balance_af_total":null,"loan_balance_af_principal":null,"loan_balance_af_accum_interest":null}
```
</details>

### `public.tx_rcc_ops_r15` — rows: 803

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r15_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | premium_type | character varying(10) | Y |
| 6 | ri_gross_premium | numeric(30,15) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r15_id":"3","rcc_monthly_hd_id":"287","no_of_transaction":"42","ri_type":"Actual","premium_type":"Normal","ri_gross_premium":"19766.150000000000000","created_date":"2023-10-17T07:48:06.662Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r15_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"223164","ri_type":"Estimate","premium_type":"Normal","ri_gross_premium":"7107703.370000000000000","created_date":"2023-10-17T07:48:06.662Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r16` — rows: 256

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r16_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | ri_initial_commission | numeric(30,15) | Y |
| 6 | ri_renewal_commission | numeric(30,15) | Y |
| 7 | created_date | timestamp with time zone | N |
| 8 | created_by | character varying(50) | N |
| 9 | updated_date | timestamp with time zone | Y |
| 10 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r16_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"17635","ri_type":"Estimate","ri_initial_commission":"299865.620000000000000","ri_renewal_commission":"864992.200000000000000","created_date":"2023-10-17T07:49:00.384Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r16_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"17635","ri_type":"Estimate","ri_initial_commission":"299865.620000000000000","ri_renewal_commission":"864992.200000000000000","created_date":"2023-10-17T14:28:51.258Z","created_by":"ladda.su","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r17` — rows: 386

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r17_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | recovery_amount_life | numeric(30,15) | Y |
| 6 | recovery_amount_accident_death | numeric(30,15) | Y |
| 7 | recovery_amount_accident_non_death | numeric(30,15) | Y |
| 8 | recovery_amount_health | numeric(30,15) | Y |
| 9 | recovery_amount_dismemberment | numeric(30,15) | Y |
| 10 | recovery_amount_tpd | numeric(30,15) | Y |
| 11 | recovery_amount_other | numeric(30,15) | Y |
| 12 | ri_return_premium | numeric(30,15) | Y |
| 13 | claim_recovery_expense | numeric(30,15) | Y |
| 14 | profit_commission | numeric(30,15) | Y |
| 15 | created_date | timestamp with time zone | N |
| 16 | created_by | character varying(50) | N |
| 17 | updated_date | timestamp with time zone | Y |
| 18 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r17_id":"3","rcc_monthly_hd_id":"287","no_of_transaction":"121253","ri_type":"Estimate","recovery_amount_life":"1550293.990000000000000","recovery_amount_accident_death":"0.000000000000000","recovery_amount_accident_non_death":"0.000000000000000","recovery_amount_health":"630997.430000000000000","recovery_amount_dismemberment":"0.000000000000000","recovery_amount_tpd":"0.000000000000000","recovery_amount_other":"0.000000000000000","ri_return_premium":"7107703.370000000000000","claim_recovery_expense":"0.000000000000000","profit_commission":"0.000000000000000","created_date":"2023-10-17T07:51:17.248Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_r17_id":"4","rcc_monthly_hd_id":"287","no_of_transaction":"22","ri_type":"Actual","recovery_amount_life":"0.000000000000000","recovery_amount_accident_death":"0.000000000000000","recovery_amount_accident_non_death":"0.000000000000000","recovery_amount_health":"0.000000000000000","recovery_amount_dismemberment":"0.000000000000000","recovery_amount_tpd":"0.000000000000000","recovery_amount_other":"0.000000000000000","ri_return_premium":"19766.150000000000000","claim_recovery_expense":"0.000000000000000","profit_commission":"0.000000000000000","created_date":"2023-10-17T07:51:17.248Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_ops_r18` — rows: 179

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r18_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | premium_type | character varying(50) | Y |
| 6 | ri_gross_premium_life | numeric(30,15) | Y |
| 7 | ri_gross_premium_accident_death | numeric(30,15) | Y |
| 8 | ri_gross_premium_med_accident | numeric(30,15) | Y |
| 9 | ri_gross_premium_tpd | numeric(30,15) | Y |
| 10 | ri_gross_premium_ipd | numeric(30,15) | Y |
| 11 | ri_gross_premium_opd | numeric(30,15) | Y |
| 12 | ri_gross_premium_dental | numeric(30,15) | Y |
| 13 | ri_gross_premium_other | numeric(30,15) | Y |
| 14 | created_date | timestamp with time zone | N |
| 15 | created_by | character varying(50) | N |
| 16 | updated_date | timestamp with time zone | Y |
| 17 | updated_by | character varying(50) | Y |
| 18 | ri_premium_life | numeric(30,15) | Y |
| 19 | ri_premium_accident | numeric(30,15) | Y |
| 20 | ri_premium_medical | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r18_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"44","ri_type":"Estimate","premium_type":"Normal","ri_gross_premium_life":"737314.100000000000000","ri_gross_premium_accident_death":"473051.470000000000000","ri_gross_premium_med_accident":"0.000000000000000","ri_gross_premium_tpd":"25023.390000000000000","ri_gross_premium_ipd":"2234279.900000000000000","ri_gross_premium_opd":"0.000000000000000","ri_gross_premium_dental":"0.000000000000000","ri_gross_premium_other":"0.000000000000000","created_date":"2023-10-17T07:52:24.789Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"ri_premium_life":null,"ri_premium_accident":null,"ri_premium_medical":null}
{"rcc_ops_r18_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"44","ri_type":"Estimate","premium_type":"Normal","ri_gross_premium_life":"737314.100000000000000","ri_gross_premium_accident_death":"473051.470000000000000","ri_gross_premium_med_accident":"0.000000000000000","ri_gross_premium_tpd":"25023.390000000000000","ri_gross_premium_ipd":"2234279.900000000000000","ri_gross_premium_opd":"0.000000000000000","ri_gross_premium_dental":"0.000000000000000","ri_gross_premium_other":"0.000000000000000","created_date":"2023-10-17T14:31:18.368Z","created_by":"ladda.su","updated_date":null,"updated_by":null,"ri_premium_life":null,"ri_premium_accident":null,"ri_premium_medical":null}
```
</details>

### `public.tx_rcc_ops_r19` — rows: 195

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r19_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | commission_type | character varying(50) | Y |
| 6 | ri_gross_commission_life | numeric(30,15) | Y |
| 7 | ri_gross_commission_accident_death | numeric(30,15) | Y |
| 8 | ri_gross_commission_med_accident | numeric(30,15) | Y |
| 9 | ri_gross_commission_tpd | numeric(30,15) | Y |
| 10 | ri_gross_commission_ipd | numeric(30,15) | Y |
| 11 | ri_gross_commission_opd | numeric(30,15) | Y |
| 12 | ri_gross_commission_dental | numeric(30,15) | Y |
| 13 | ri_gross_commission_other | numeric(30,15) | Y |
| 14 | created_date | timestamp with time zone | N |
| 15 | created_by | character varying(50) | N |
| 16 | updated_date | timestamp with time zone | Y |
| 17 | updated_by | character varying(50) | Y |
| 18 | ri_initial_commission | numeric(30,15) | Y |
| 19 | ri_renewal_commission | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r19_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"44","ri_type":"Estimate","commission_type":"Normal","ri_gross_commission_life":"293742.990000000000000","ri_gross_commission_accident_death":"157480.710000000000000","ri_gross_commission_med_accident":"0.000000000000000","ri_gross_commission_tpd":"2252.110000000000000","ri_gross_commission_ipd":"201085.210000000000000","ri_gross_commission_opd":"0.000000000000000","ri_gross_commission_dental":"0.000000000000000","ri_gross_commission_other":"0.000000000000000","created_date":"2023-10-17T07:53:00.302Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"ri_initial_commission":null,"ri_renewal_commission":null}
{"rcc_ops_r19_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"44","ri_type":"Estimate","commission_type":"Normal","ri_gross_commission_life":"293742.990000000000000","ri_gross_commission_accident_death":"157480.710000000000000","ri_gross_commission_med_accident":"0.000000000000000","ri_gross_commission_tpd":"2252.110000000000000","ri_gross_commission_ipd":"201085.210000000000000","ri_gross_commission_opd":"0.000000000000000","ri_gross_commission_dental":"0.000000000000000","ri_gross_commission_other":"0.000000000000000","created_date":"2023-10-17T14:31:54.478Z","created_by":"ladda.su","updated_date":null,"updated_by":null,"ri_initial_commission":null,"ri_renewal_commission":null}
```
</details>

### `public.tx_rcc_ops_r20` — rows: 258

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_r20_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | no_of_transaction | numeric(8,0) | Y |
| 4 | ri_type | character varying(20) | Y |
| 5 | recovery_amount_life | numeric(30,15) | Y |
| 6 | recovery_amount_accident_death | numeric(30,15) | Y |
| 7 | recovery_amount_med_accident | numeric(30,15) | Y |
| 8 | recovery_amount_tpd | numeric(30,15) | Y |
| 9 | recovery_amount_ipd | numeric(30,15) | Y |
| 10 | recovery_amount_opd | numeric(30,15) | Y |
| 11 | recovery_amount_dental | numeric(30,15) | Y |
| 12 | recovery_amount_other | numeric(30,15) | Y |
| 13 | return_premium | numeric(30,15) | Y |
| 14 | claim_recovery_expense | numeric(30,15) | Y |
| 15 | profit_commission | numeric(30,15) | Y |
| 16 | created_date | timestamp with time zone | N |
| 17 | created_by | character varying(50) | N |
| 18 | updated_date | timestamp with time zone | Y |
| 19 | updated_by | character varying(50) | Y |
| 20 | paid_amount_life | numeric(30,15) | Y |
| 21 | paid_amount_accident_death | numeric(30,15) | Y |
| 22 | paid_amount_health | numeric(30,15) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_r20_id":"2","rcc_monthly_hd_id":"287","no_of_transaction":"176","ri_type":"Estimate","recovery_amount_life":"818340.000000000000000","recovery_amount_accident_death":"453534.780000000000000","recovery_amount_med_accident":"0.000000000000000","recovery_amount_tpd":"0.000000000000000","recovery_amount_ipd":"4033460.330000000000000","recovery_amount_opd":"0.000000000000000","recovery_amount_dental":"0.000000000000000","recovery_amount_other":"0.000000000000000","return_premium":"0.000000000000000","claim_recovery_expense":"0.000000000000000","profit_commission":"0.000000000000000","created_date":"2023-10-17T07:53:07.579Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null,"paid_amount_life":null,"paid_amount_accident_death":null,"paid_amount_health":null}
{"rcc_ops_r20_id":"3","rcc_monthly_hd_id":"288","no_of_transaction":"176","ri_type":"Estimate","recovery_amount_life":"818340.000000000000000","recovery_amount_accident_death":"453534.780000000000000","recovery_amount_med_accident":"0.000000000000000","recovery_amount_tpd":"0.000000000000000","recovery_amount_ipd":"4033460.330000000000000","recovery_amount_opd":"0.000000000000000","recovery_amount_dental":"0.000000000000000","recovery_amount_other":"0.000000000000000","return_premium":"0.000000000000000","claim_recovery_expense":"0.000000000000000","profit_commission":"0.000000000000000","created_date":"2023-10-17T14:32:11.868Z","created_by":"ladda.su","updated_date":null,"updated_by":null,"paid_amount_life":null,"paid_amount_accident_death":null,"paid_amount_health":null}
```
</details>

### `public.tx_rcc_ops_summary` — rows: 4364

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_ops_sum_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | table_name | character varying | Y |
| 4 | no_of_transaction | numeric(8,0) | Y |
| 5 | sum_amount | numeric(30,15) | Y |
| 6 | created_date | timestamp with time zone | N |
| 7 | created_by | character varying(50) | N |
| 8 | updated_date | timestamp with time zone | Y |
| 9 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_ops_sum_id":"26","rcc_monthly_hd_id":"287","table_name":"R01_OP_PremiumReceipt","no_of_transaction":"790825","sum_amount":"1116465479.350000000000000","created_date":"2023-10-17T07:15:45.470Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
{"rcc_ops_sum_id":"27","rcc_monthly_hd_id":"287","table_name":"R02_OP_CommissionOverride","no_of_transaction":"476343","sum_amount":"57950729.060000000000000","created_date":"2023-10-17T07:19:40.905Z","created_by":"piyawat.ju","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_prevalidate` — rows: 29

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | prevalidate_id | bigint(64,0) | N |
| 2 | period | character varying(50) | N |
| 3 | report_type | character varying(50) | N |
| 4 | script_no | numeric(2,0) | N |
| 5 | report_name | character varying(100) | N |
| 6 | description | character varying(1000) | Y |
| 7 | sql_script | text | N |
| 8 | parameter | character varying(1000) | Y |
| 9 | content_id | character varying(50) | Y |
| 10 | generate_flag | boolean | N |
| 11 | status | character varying(25) | Y |
| 12 | error_message | character varying(1000) | Y |
| 13 | error_file | numeric(10,0) | Y |
| 14 | version | character varying(3) | N |
| 15 | transaction_date | timestamp without time zone | Y |
| 16 | create_date | timestamp without time zone | N |
| 17 | create_by | character varying(50) | N |
| 18 | update_date | timestamp without time zone | Y |
| 19 | update_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"prevalidate_id":"2","period":"202505","report_type":"R12","script_no":"2","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"effective_date > claim_event_date\nวันที่เกิดเหตุ ต้องเกิดหลังจากวันเริ่มสัญญา","sql_script":"select effective_date as preview_effective_date, \n       claim_event_date as preview_claim_event_date,\n       * \nfrom…","parameter":"period","content_id":null,"generate_flag":true,"status":"success","error_message":null,"error_file":"0","version":"1","transaction_date":"2025-06-13T03:29:55.211Z","create_date":"2025-06-13T03:27:29.711Z","create_by":"maitri.bo","update_date":"2025-06-13T03:29:55.211Z","update_by":"System"}
{"prevalidate_id":"6","period":"202505","report_type":"R12","script_no":"6","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"effective date ของข้อมูลบันทึกบช กับ I05 report","sql_script":"select r12.effective_date as preview_effective_date, i5.effective_date as preview_effective_date, r12.policy_year as …","parameter":"period","content_id":null,"generate_flag":true,"status":"in progress","error_message":null,"error_file":"0","version":"1","transaction_date":"2025-06-13T03:29:54.971Z","create_date":"2025-06-13T03:27:29.756Z","create_by":"maitri.bo","update_date":"2025-06-13T03:29:54.971Z","update_by":"System"}
{"prevalidate_id":"7","period":"202505","report_type":"R03","script_no":"7","report_name":"R03","description":"พบค่า null\nclaim_event_date\nclaim_reported_date","sql_script":"select claim_reported_date as preview_claim_reported_date, case when claim_reported_date is null then 'NULL' end as c…","parameter":"period","content_id":null,"generate_flag":true,"status":"in progress","error_message":null,"error_file":"0","version":"1","transaction_date":"2025-06-13T03:29:54.971Z","create_date":"2025-06-13T03:27:29.768Z","create_by":"maitri.bo","update_date":"2025-06-13T03:29:54.971Z","update_by":"System"}
{"prevalidate_id":"8","period":"202505","report_type":"R03","script_no":"8","report_name":"R03","description":"effective_date > claim_event_date","sql_script":"select effective_date as preview_effective_date, claim_event_date as preview_claim_event_date, * \nfrom tx_rcc_output_…","parameter":"period","content_id":null,"generate_flag":true,"status":"in progress","error_message":null,"error_file":"0","version":"1","transaction_date":"2025-06-13T03:29:54.971Z","create_date":"2025-06-13T03:27:29.779Z","create_by":"maitri.bo","update_date":"2025-06-13T03:29:54.971Z","update_by":"System"}
{"prevalidate_id":"9","period":"202505","report_type":"R03","script_no":"9","report_name":"R03","description":"Approve date ล้ำอนาคต","sql_script":"select approve_date as preview_approve_date, * \nfrom tx_rcc_output_r03 \nwhere approve_date > (date_trunc('month', cur…","parameter":"","content_id":null,"generate_flag":true,"status":"in progress","error_message":null,"error_file":"0","version":"1","transaction_date":"2025-06-13T03:29:54.971Z","create_date":"2025-06-13T03:27:29.790Z","create_by":"maitri.bo","update_date":"2025-06-13T03:29:54.971Z","update_by":"System"}
```
</details>

### `public.tx_rcc_process_snapshot` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | reconcile_header_id | numeric(18,0) | Y |
| 2 | processing_status | character varying(30) | Y |
| 3 | period | character varying(6) | Y |
| 4 | created_date | timestamp with time zone | N |
| 5 | created_by | character varying(50) | N |
| 6 | updated_date | timestamp with time zone | Y |
| 7 | updated_by | character varying(50) | Y |

### `public.tx_rcc_processing` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | processing_name | character varying(5) | Y |
| 2 | processing_period | character varying(6) | N |
| 3 | created_date | timestamp with time zone | N |
| 4 | created_by | character varying(50) | N |
| 5 | updated_date | timestamp with time zone | Y |
| 6 | updated_by | character varying(50) | Y |
| 7 | file_name | character varying(100) | N |
| 8 | content_id | uuid | Y |
| 9 | status | character varying(15) | Y |
| 10 | header_id | numeric(8,0) | Y |
| 11 | detail_id | numeric(8,0) | Y |
| 12 | error_flg | boolean | Y |
| 13 | error | character varying(500) | Y |

### `public.tx_rcc_reconcile_snapshot_r01` — rows: 159

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r01_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r01_id":"219","period":"202401","disclosure_type":"Life","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"02","plan_code":"Exclude Annuity","amount":"-44392358.730000000000000","adj_posting":"44392358.730000000000000","created_date":"2024-07-16T01:36:06.304Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r01_id":"220","period":"202401","disclosure_type":"Life","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"01","plan_code":"ALL","amount":"-11676000.000000000000000","adj_posting":"11676000.000000000000000","created_date":"2024-07-16T01:36:06.304Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r02` — rows: 254

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r02_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r02_id":"426","period":"202401","disclosure_type":"Life","account_code":"50551220","account_name":"เงินอุดหนุน","business_line":"01","plan_code":"ALL","amount":"10000.000000000000000","adj_posting":"-10000.000000000000000","created_date":"2024-07-16T01:53:49.948Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r02_id":"305","period":"202402","disclosure_type":"Longevity","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"02","plan_code":"Annuity","amount":"10858.990000000000000","adj_posting":"-10858.990000000000000","created_date":"2024-07-12T09:37:21.725Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r03` — rows: 146

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r03_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r03_id":"183","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Exclude Annuity","amount":"-1759030.000000000000000","adj_posting":"1759030.000000000000000","created_date":"2024-07-16T02:05:09.672Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r03_id":"184","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"01","plan_code":"ALL","amount":"-2715590.000000000000000","adj_posting":"2715590.000000000000000","created_date":"2024-07-16T02:05:09.442Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r04` — rows: 175

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r04_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r04_id":"201","period":"202401","disclosure_type":"Longevity","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Annuity","amount":"-282800.000000000000000","adj_posting":"282800.000000000000000","created_date":"2024-07-16T02:17:18.787Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r04_id":"202","period":"202401","disclosure_type":"Life","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"02","plan_code":"Exclude Annuity","amount":"-21053554.000000000000000","adj_posting":"21053554.000000000000000","created_date":"2024-07-16T02:16:59.090Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r05` — rows: 28

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r05_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r05_id":"11","period":"202404","disclosure_type":"Investment","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"07","plan_code":"ALL","amount":"-308000.000000000000000","adj_posting":"308000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r05_id":"12","period":"202404","disclosure_type":"Investment","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"07","plan_code":"ALL","amount":"-168500.000000000000000","adj_posting":"168500.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r05_id":"13","period":"202404","disclosure_type":"Investment","account_code":"40511300","account_name":"เบี้ยประกันชีวิต - ชำระครั้งเดียว","business_line":"07","plan_code":"ALL","amount":"-100000.000000000000000","adj_posting":"100000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r05_id":"14","period":"202404","disclosure_type":"Investment","account_code":"40511400","account_name":"เบี้ยประกันภัยเพิ่มพิเศษ(Top up Premium)","business_line":"07","plan_code":"ALL","amount":"-115000.000000000000000","adj_posting":"115000.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r05_id":"15","period":"202404","disclosure_type":"Investment","account_code":"40511500","account_name":"เบี้ยส่วนนำไปลงทุนของผู้เอาประกัน","business_line":"07","plan_code":"ALL","amount":"451425.000000000000000","adj_posting":"-451425.000000000000000","created_date":"2024-06-28T07:27:04.687Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r06` — rows: 37

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r06_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r06_id":"19","period":"202404","disclosure_type":"Investment","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"07","plan_code":"ALL","amount":"46800.000000000000000","adj_posting":"-46800.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r06_id":"20","period":"202404","disclosure_type":"Investment","account_code":"50551103","account_name":"ค่าบำเหน็จปีต่อไป ตัวแทน","business_line":"07","plan_code":"ALL","amount":"9420.000000000000000","adj_posting":"-9420.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r06_id":"21","period":"202404","disclosure_type":"Investment","account_code":"50551126","account_name":"ค่าโบนัสประจำงวดFY","business_line":"07","plan_code":"ALL","amount":"66733.000000000000000","adj_posting":"-66733.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r06_id":"22","period":"202404","disclosure_type":"Investment","account_code":"50551206","account_name":"เงินประจำตำแหน่งผลงาน-ปีแรก","business_line":"07","plan_code":"ALL","amount":"2448.580000000000000","adj_posting":"-2448.580000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r06_id":"23","period":"202404","disclosure_type":"Investment","account_code":"50551210","account_name":"ค่าจัดงานเบี้ยปีแรกงวดแรก","business_line":"07","plan_code":"ALL","amount":"13440.000000000000000","adj_posting":"-13440.000000000000000","created_date":"2024-06-28T07:28:27.418Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r07` — rows: 4

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r07_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r07_id":"1","period":"202404","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"1080000.000000000000000","adj_posting":"-1080000.000000000000000","created_date":"2024-06-28T07:29:40.151Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r07_id":"2","period":"202308","disclosure_type":"Investment","account_code":"50542125","account_name":"สินไหมคืนเบี้ย","business_line":"07","plan_code":"ALL","amount":"2200.000000000000000","adj_posting":"-2200.000000000000000","created_date":"2024-07-19T05:10:31.526Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r07_id":"3","period":"202308","disclosure_type":"Investment","account_code":"50542120","account_name":"เงินช่วยเหลือค่าทำศพ","business_line":"07","plan_code":"ALL","amount":"1000.000000000000000","adj_posting":"-1000.000000000000000","created_date":"2024-07-19T05:10:31.526Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r07_id":"4","period":"202305","disclosure_type":"Investment","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"07","plan_code":"ALL","amount":"608053.220000000000000","adj_posting":"-608053.220000000000000","created_date":"2024-07-19T08:05:42.244Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r08` — rows: 11

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r08_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r08_id":"6","period":"202404","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:30:24.870Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r08_id":"7","period":"202404","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:30:24.870Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r08_id":"8","period":"202403","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-07-12T03:16:11.489Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r08_id":"9","period":"202403","disclosure_type":"Investment","account_code":"23570002","account_name":"หนี้สินจากสัญญาลงทุน-GL","business_line":"07","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-07-12T03:16:11.489Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r08_id":"10","period":"202402","disclosure_type":"Investment","account_code":"23570001","account_name":"หนี้สินจากสัญญาลงทุน","business_line":"07","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-07-15T04:38:38.775Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r09` — rows: 17

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r09_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r09_id":"7","period":"202404","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","amount":"-62109.980000000000000","adj_posting":"62109.980000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r09_id":"8","period":"202404","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","amount":"-6331.820000000000000","adj_posting":"6331.820000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r09_id":"9","period":"202404","disclosure_type":"Investment","account_code":"43040030","account_name":"รายได้ค่าธรรมเนียมการถอนเงินกธ.","business_line":"07","plan_code":"ALL","amount":"-8951.690000000000000","adj_posting":"8951.690000000000000","created_date":"2024-06-28T07:31:48.954Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r09_id":"10","period":"202403","disclosure_type":"Investment","account_code":"43040027","account_name":"รายได้ค่าการประกันภัย","business_line":"07","plan_code":"ALL","amount":"-58874.130000000000000","adj_posting":"58874.130000000000000","created_date":"2024-07-12T03:17:36.700Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r09_id":"11","period":"202403","disclosure_type":"Investment","account_code":"43040029","account_name":"รายได้ค่าธรรมเนียมการบริหารกธ.","business_line":"07","plan_code":"ALL","amount":"-6121.240000000000000","adj_posting":"6121.240000000000000","created_date":"2024-07-12T03:17:36.700Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r10` — rows: 43

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r10_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r10_id":"22","period":"202404","disclosure_type":"Short-term","account_code":"40511100","account_name":"เบี้ยประกันชีวิต - ปีแรก","business_line":"03","plan_code":"ALL","amount":"-6773701.970000000000000","adj_posting":"6773701.970000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r10_id":"23","period":"202404","disclosure_type":"Short-term","account_code":"40511200","account_name":"เบี้ยประกันชีวิต - ปีต่อไป","business_line":"03","plan_code":"ALL","amount":"-204814554.170000000000000","adj_posting":"204814554.170000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r10_id":"24","period":"202404","disclosure_type":"Short-term","account_code":"40512100","account_name":"เบี้ยประกันอุบัติเหตุ - ปีแรก","business_line":"05","plan_code":"ALL","amount":"-302990.480000000000000","adj_posting":"302990.480000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r10_id":"25","period":"202404","disclosure_type":"Short-term","account_code":"40512100","account_name":"เบี้ยประกันอุบัติเหตุ - ปีแรก","business_line":"03","plan_code":"ALL","amount":"-585721.310000000000000","adj_posting":"585721.310000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r10_id":"26","period":"202404","disclosure_type":"Short-term","account_code":"40512200","account_name":"เบี้ยประกันอุบัติเหตุ - ปีต่อไป","business_line":"03","plan_code":"ALL","amount":"-15830003.260000000000000","adj_posting":"15830003.260000000000000","created_date":"2024-06-28T07:33:48.216Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r11` — rows: 16

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r11_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r11_id":"9","period":"202404","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","amount":"46083.600000000000000","adj_posting":"-46083.600000000000000","created_date":"2024-06-28T07:35:43.548Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r11_id":"10","period":"202404","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"03","plan_code":"ALL","amount":"1167256.950000000000000","adj_posting":"-1167256.950000000000000","created_date":"2024-06-28T07:35:43.547Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r11_id":"11","period":"202404","disclosure_type":"Short-term","account_code":"50551103","account_name":"ค่าบำเหน็จปีต่อไป ตัวแทน","business_line":"03","plan_code":"ALL","amount":"30241857.350000000000000","adj_posting":"-30241857.350000000000000","created_date":"2024-06-28T07:35:43.547Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r11_id":"12","period":"202404","disclosure_type":"Short-term","account_code":"50551211","account_name":"ค่าจัดงานเบี้ยปีต่อไป","business_line":"03","plan_code":"ALL","amount":"150652.000000000000000","adj_posting":"-150652.000000000000000","created_date":"2024-06-28T07:35:43.979Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r11_id":"13","period":"202403","disclosure_type":"Short-term","account_code":"50551101","account_name":"ค่าบำเหน็จรับตรงประกันชีวิตปีที่ 1","business_line":"05","plan_code":"ALL","amount":"-204.580000000000000","adj_posting":"204.580000000000000","created_date":"2024-07-12T03:21:35.925Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r12` — rows: 29

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r12_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r12_id":"15","period":"202404","disclosure_type":"Short-term","account_code":"50542105","account_name":"สินไหมประกันชีวิต","business_line":"03","plan_code":"ALL","amount":"118927360.000000000000000","adj_posting":"-118927360.000000000000000","created_date":"2024-06-28T07:37:52.886Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r12_id":"16","period":"202404","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"05","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-06-28T07:37:57.806Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r12_id":"17","period":"202404","disclosure_type":"Short-term","account_code":"50542110","account_name":"สินไหมอุบัติเหตุ","business_line":"03","plan_code":"ALL","amount":"5120000.000000000000000","adj_posting":"-5120000.000000000000000","created_date":"2024-06-28T07:37:52.886Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r12_id":"18","period":"202404","disclosure_type":"Short-term","account_code":"50544110","account_name":"สินไหมทดแทนอุบัติเหตุ - ตรง","business_line":"05","plan_code":"ALL","amount":"175076.600000000000000","adj_posting":"-175076.600000000000000","created_date":"2024-06-28T07:37:49.500Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r12_id":"19","period":"202404","disclosure_type":"Short-term","account_code":"50544110","account_name":"สินไหมทดแทนอุบัติเหตุ - ตรง","business_line":"03","plan_code":"ALL","amount":"1277198.450000000000000","adj_posting":"-1277198.450000000000000","created_date":"2024-06-28T07:37:49.500Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r13` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r13_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

### `public.tx_rcc_reconcile_snapshot_r14` — rows: 360

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r14_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | event_type | character varying(50) | Y |
| 8 | plan_code | character varying(20) | Y |
| 9 | amount | numeric(30,15) | Y |
| 10 | adj_posting | numeric(30,15) | Y |
| 11 | created_date | timestamp with time zone | Y |
| 12 | created_by | character varying(50) | Y |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r14_id":"188","period":"202401","disclosure_type":"Policy Loan","account_code":"11011100","account_name":"เงินกู้ประกันชีวิต","business_line":"01","event_type":"OTHER","plan_code":"ALL","amount":"0.000000000000000","adj_posting":"0.000000000000000","created_date":"2024-07-16T02:46:42.370Z","created_by":"boss","updated_date":null,"updated_by":""}
{"tx_rcc_reconcile_snapshot_r14_id":"189","period":"202401","disclosure_type":"Policy Loan","account_code":"42022113","account_name":"ดอกเบี้ยรับทบต้น - เงินกู้ประกันชีวิตอัตโนมัติ","business_line":"02","event_type":"COMPOUNDINTEREST","plan_code":"ALL","amount":"-79446.470000000000000","adj_posting":"79446.470000000000000","created_date":"2024-07-16T02:43:18.174Z","created_by":"boss","updated_date":null,"updated_by":""}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r15` — rows: 67

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r15_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r15_id":"45","period":"202404","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"02","plan_code":"ALL","amount":"334.270000000000000","adj_posting":"-334.270000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r15_id":"46","period":"202404","disclosure_type":"Life-Re","account_code":"50531105","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก-ใน ปท.","business_line":"07","plan_code":"ALL","amount":"2302.070000000000000","adj_posting":"-2302.070000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r15_id":"47","period":"202404","disclosure_type":"Life-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"MRTA/MLTA","amount":"916652.670000000000000","adj_posting":"-916652.670000000000000","created_date":"2024-06-28T07:58:43.876Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r15_id":"48","period":"202404","disclosure_type":"Life-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"02","plan_code":"ALL","amount":"10476.060000000000000","adj_posting":"-10476.060000000000000","created_date":"2024-06-28T08:00:17.103Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r15_id":"49","period":"202404","disclosure_type":"Life-Re","account_code":"50531205","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ในปท","business_line":"07","plan_code":"ALL","amount":"-235.350000000000000","adj_posting":"235.350000000000000","created_date":"2024-06-28T07:59:09.947Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r16` — rows: 28

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r16_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r16_id":"15","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"07","plan_code":"ALL","amount":"-1149.960000000000000","adj_posting":"1149.960000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r16_id":"16","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"04","plan_code":"ALL","amount":"-199707.700000000000000","adj_posting":"199707.700000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r16_id":"17","period":"202404","disclosure_type":"Life-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"02","plan_code":"ALL","amount":"8659.680000000000000","adj_posting":"-8659.680000000000000","created_date":"2024-06-28T08:14:54.183Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r16_id":"18","period":"202404","disclosure_type":"Life-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"02","plan_code":"ALL","amount":"-18984.590000000000000","adj_posting":"18984.590000000000000","created_date":"2024-06-28T08:15:02.413Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r16_id":"19","period":"202404","disclosure_type":"Life-Re","account_code":"41510210","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.","business_line":"03","plan_code":"MRTA/MLTA","amount":"-221569.040000000000000","adj_posting":"221569.040000000000000","created_date":"2024-06-28T08:15:07.766Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r17` — rows: 39

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r17_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r17_id":"14","period":"202404","disclosure_type":"Life-Re","account_code":"41011005","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"02","plan_code":"ALL","amount":"-1323213.740000000000000","adj_posting":"1323213.740000000000000","created_date":"2024-06-28T08:17:19.395Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r17_id":"15","period":"202404","disclosure_type":"Life-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"MRTA/MLTA","amount":"-11734543.830000000000000","adj_posting":"11734543.830000000000000","created_date":"2024-06-28T08:17:19.395Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r17_id":"16","period":"202404","disclosure_type":"Life-Re","account_code":"41012005","account_name":"สินไหมอุบัติเหตุรับคืนจากการเอาประกันต่อ-ใน ปท.","business_line":"04","plan_code":"ALL","amount":"-220000.000000000000000","adj_posting":"220000.000000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r17_id":"17","period":"202404","disclosure_type":"Life-Re","account_code":"41030005","account_name":"สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ในประเทศ","business_line":"02","plan_code":"ALL","amount":"-820542.250000000000000","adj_posting":"820542.250000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r17_id":"18","period":"202404","disclosure_type":"Life-Re","account_code":"41030010","account_name":"สินไหมสุขภาพรับคืนจากการเอาประกันต่อ - ต่างประเทศ","business_line":"02","plan_code":"ALL","amount":"-1600000.000000000000000","adj_posting":"1600000.000000000000000","created_date":"2024-06-28T08:17:22.775Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r18` — rows: 21

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r18_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r18_id":"16","period":"202404","disclosure_type":"Short-term-Re","account_code":"50531110","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","amount":"319407.250000000000000","adj_posting":"-319407.250000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r18_id":"17","period":"202404","disclosure_type":"Short-term-Re","account_code":"50531210","account_name":"เบี้ยประกันชีวิตจ่ายจากการเอาประกันต่อปีต่อไป-ตปท.","business_line":"03","plan_code":"ALL","amount":"1072209.280000000000000","adj_posting":"-1072209.280000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r18_id":"18","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532105","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก- ใน ปท.","business_line":"05","plan_code":"ALL","amount":"4927.470000000000000","adj_posting":"-4927.470000000000000","created_date":"2024-06-28T08:21:28.331Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r18_id":"19","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532110","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีแรก - ตปท.","business_line":"03","plan_code":"ALL","amount":"46003.350000000000000","adj_posting":"-46003.350000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r18_id":"20","period":"202404","disclosure_type":"Short-term-Re","account_code":"50532210","account_name":"เบี้ยประกัน อบ.จ่ายจากการเอาประกันต่อปีต่อไป- ตปท.","business_line":"03","plan_code":"ALL","amount":"778841.860000000000000","adj_posting":"-778841.860000000000000","created_date":"2024-06-28T08:21:22.327Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r19` — rows: 13

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r19_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r19_id":"8","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510105","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ในประเทศ","business_line":"05","plan_code":"ALL","amount":"-1231.980000000000000","adj_posting":"1231.980000000000000","created_date":"2024-06-28T08:23:34.712Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r19_id":"9","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"03","plan_code":"ALL","amount":"-182705.560000000000000","adj_posting":"182705.560000000000000","created_date":"2024-06-28T08:23:34.446Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r19_id":"10","period":"202404","disclosure_type":"Short-term-Re","account_code":"41510210","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีต่อไป - ตปท.","business_line":"03","plan_code":"ALL","amount":"-986268.530000000000000","adj_posting":"986268.530000000000000","created_date":"2024-06-28T08:23:34.446Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r19_id":"11","period":"202403","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"03","plan_code":"ALL","amount":"-158331.600000000000000","adj_posting":"158331.600000000000000","created_date":"2024-07-12T03:51:12.227Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r19_id":"12","period":"202403","disclosure_type":"Short-term-Re","account_code":"41510110","account_name":"ค่าบำเหน็จรับจากการประกันภัยต่อปีแรก - ต่างประเทศ","business_line":"05","plan_code":"ALL","amount":"-207.580000000000000","adj_posting":"207.580000000000000","created_date":"2024-07-12T03:51:12.227Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reconcile_snapshot_r20` — rows: 37

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | tx_rcc_reconcile_snapshot_r20_id | numeric(18,0) | N |
| 2 | period | character varying(6) | Y |
| 3 | disclosure_type | character varying(20) | Y |
| 4 | account_code | character varying(20) | Y |
| 5 | account_name | character varying(100) | Y |
| 6 | business_line | character varying(2) | Y |
| 7 | plan_code | character varying(20) | Y |
| 8 | amount | numeric(30,15) | Y |
| 9 | adj_posting | numeric(30,15) | Y |
| 10 | created_date | timestamp with time zone | Y |
| 11 | created_by | character varying(50) | Y |
| 12 | updated_date | timestamp with time zone | Y |
| 13 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"tx_rcc_reconcile_snapshot_r20_id":"17","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546006","account_name":"ประมาณการสินไหมทดแทนชีวิตระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","amount":"-45000.000000000000000","adj_posting":"45000.000000000000000","created_date":"2024-06-28T08:24:47.434Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r20_id":"18","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546007","account_name":"ประมาณการสินไหมทดแทนสภ.ระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","amount":"178268.350000000000000","adj_posting":"-178268.350000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r20_id":"19","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546008","account_name":"ประมาณการสินไหมทดแทนอบ.ระยะสั้น/Case RESERVE-RE","business_line":"03","plan_code":"ALL","amount":"-24951.730000000000000","adj_posting":"24951.730000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r20_id":"20","period":"202404","disclosure_type":"Short-term-Re","account_code":"40546008","account_name":"ประมาณการสินไหมทดแทนอบ.ระยะสั้น/Case RESERVE-RE","business_line":"05","plan_code":"ALL","amount":"78563.950000000000000","adj_posting":"-78563.950000000000000","created_date":"2024-06-28T08:24:39.274Z","created_by":"boss","updated_date":null,"updated_by":null}
{"tx_rcc_reconcile_snapshot_r20_id":"21","period":"202404","disclosure_type":"Short-term-Re","account_code":"41011010","account_name":"สินไหมประกันชีวิตรับคืนจากการเอาประกันต่อ-ตปท.","business_line":"03","plan_code":"ALL","amount":"-582354.000000000000000","adj_posting":"582354.000000000000000","created_date":"2024-06-28T08:24:46.674Z","created_by":"boss","updated_date":null,"updated_by":null}
```
</details>

### `public.tx_rcc_reference_number` — rows: 1168

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_reference_number_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | reference_number | character varying(20) | N |
| 4 | created_date | timestamp without time zone | N |
| 5 | created_by | character varying(50) | N |
| 6 | updated_date | timestamp with time zone | Y |
| 7 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_reference_number_id":"1","rcc_monthly_hd_id":"549","reference_number":"202406240005EH","created_date":"2024-06-24T09:39:38.503Z","created_by":"boss","updated_date":"2024-06-24T09:39:38.503Z","updated_by":"boss"}
{"rcc_reference_number_id":"2","rcc_monthly_hd_id":"549","reference_number":"202406240006EH","created_date":"2024-06-24T09:39:38.503Z","created_by":"boss","updated_date":"2024-06-24T09:39:38.503Z","updated_by":"boss"}
```
</details>

### `public.tx_rcc_script_prevalidate` — rows: 29

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | script_prevalidate_id | bigint(64,0) | N |
| 2 | report_type | character varying(50) | N |
| 3 | script_no | numeric(2,0) | N |
| 4 | report_name | character varying(100) | N |
| 5 | description | character varying(1000) | Y |
| 6 | sql_script | text | N |
| 7 | parameter | character varying(1000) | Y |
| 8 | generate_flag | boolean | N |
| 9 | version | character varying(3) | N |
| 10 | create_date | timestamp without time zone | N |
| 11 | create_by | character varying(50) | N |
| 12 | update_date | timestamp without time zone | Y |
| 13 | update_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"script_prevalidate_id":"1","report_type":"R12","script_no":"1","report_name":"ตรวจสอบยอดรวมของ rcc file และ output file","description":"พบค่า null\neffective_date\nend_coverage_date\nclaim_reported_date\nclaim_event_date\npolicy year","sql_script":"select effective_date as preview_effective_date, \n       case when effective_date is null then 'NULL' end as preview_…","parameter":"period","generate_flag":true,"version":"1","create_date":"2022-02-20T03:10:10.000Z","create_by":"SYSTEM","update_date":"2022-02-20T03:10:10.000Z","update_by":"SYSTEM"}
{"script_prevalidate_id":"2","report_type":"R12","script_no":"2","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"effective_date > claim_event_date\nวันที่เกิดเหตุ ต้องเกิดหลังจากวันเริ่มสัญญา","sql_script":"select effective_date as preview_effective_date, \n       claim_event_date as preview_claim_event_date,\n       * \nfrom…","parameter":"period","generate_flag":true,"version":"1","create_date":"2022-02-20T03:10:10.000Z","create_by":"SYSTEM","update_date":"2022-02-20T03:10:10.000Z","update_by":"SYSTEM"}
{"script_prevalidate_id":"3","report_type":"R12","script_no":"3","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"effective_date > end_coverage_date\nวันเริ่มสัญญา ต้องเกิดก่อนวันสิ้นสุดสัญญา","sql_script":"select effective_date as preview_effective_date, \n       claim_event_date as preview_claim_event_date, \n       * \nfro…","parameter":"period","generate_flag":true,"version":"1","create_date":"2022-02-20T03:10:10.000Z","create_by":"SYSTEM","update_date":"2022-02-20T03:10:10.000Z","update_by":"SYSTEM"}
{"script_prevalidate_id":"4","report_type":"R12","script_no":"4","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"EffectiveDate > ClaimReportedDate\nวันที่เกิดเหตุ ต้องเกิดหลังจากวันเริ่มสัญญา","sql_script":"select * \nfrom tx_rcc_output_r12\nwhere period = :period\n  and effective_date > claim_reported_date;","parameter":"period","generate_flag":true,"version":"1","create_date":"2022-02-20T03:10:10.000Z","create_by":"SYSTEM","update_date":"2022-02-20T03:10:10.000Z","update_by":"SYSTEM"}
{"script_prevalidate_id":"5","report_type":"R12","script_no":"5","report_name":"R12 - ตรวจสอบยอดรวมของ rcc file และ output file","description":"claim_event ล้ำอนาคต","sql_script":"select claim_event_date as preview_claim_event_date, \n       * \nfrom tx_rcc_output_r12\nwhere claim_event_date > (date…","parameter":"","generate_flag":true,"version":"1","create_date":"2022-02-20T03:10:10.000Z","create_by":"SYSTEM","update_date":"2022-02-20T03:10:10.000Z","update_by":"SYSTEM"}
```
</details>

### `public.tx_rcc_temp_group_claim` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_group_commission_ov` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_group_premium` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_group_reinsurance_claim` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_group_reinsurance_commission_ov` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_group_reinsurance_premium` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_benefit` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_claim` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_commission_ov` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_other_income` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_other_income_fee` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_temp_ul_premium` — rows: 0

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | id | numeric(8,0) | N |
| 2 | period | character varying(6) | N |
| 3 | tx_adw_transaction_policy_id | numeric(8,0) | N |

### `public.tx_rcc_trial_balance_dt` — rows: 1453375

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_tb_dt_id | numeric(18,0) | N |
| 2 | rcc_tb_hd_id | numeric(18,0) | N |
| 3 | type | character varying(5) | Y |
| 4 | account_code | character varying(20) | N |
| 5 | account_name | character varying(100) | N |
| 6 | audited_fs | character varying(100) | Y |
| 7 | edw_insur_or_not | character varying(20) | Y |
| 8 | ifrs17_rec_adj | character varying(5) | Y |
| 9 | amount | numeric(25,3) | N |
| 10 | error_message | character varying(500) | Y |
| 11 | created_date | timestamp with time zone | N |
| 12 | created_by | character varying(50) | N |
| 13 | updated_date | timestamp with time zone | Y |
| 14 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_tb_dt_id":"7333","rcc_tb_hd_id":"4","type":null,"account_code":"11510020","account_name":"ประมาณการสินไหมทดแทนระยะสั้นค้างรับ/IBNR-RE","audited_fs":null,"edw_insur_or_not":null,"ifrs17_rec_adj":null,"amount":"19661025.090","error_message":null,"created_date":"2023-10-17T07:01:40.417Z","created_by":"piyawat.ju","updated_date":"2023-10-17T07:01:40.417Z","updated_by":"piyawat.ju"}
{"rcc_tb_dt_id":"7334","rcc_tb_hd_id":"4","type":null,"account_code":"11510021","account_name":"ประมาณการสินไหมทดแทนระยะสั้นค้างรับ/อนุมัติแล้ว-RE","audited_fs":null,"edw_insur_or_not":null,"ifrs17_rec_adj":null,"amount":"611952.100","error_message":null,"created_date":"2023-10-17T07:01:40.417Z","created_by":"piyawat.ju","updated_date":"2023-10-17T07:01:40.417Z","updated_by":"piyawat.ju"}
```
</details>

### `public.tx_rcc_trial_balance_hd` — rows: 844

| # | column | type | nullable |
|---|--------|------|----------|
| 1 | rcc_tb_hd_id | numeric(18,0) | N |
| 2 | rcc_monthly_hd_id | numeric(18,0) | N |
| 3 | import_file_name | character varying(500) | N |
| 4 | imp_file_available | boolean | N |
| 5 | err_file_name | character varying(500) | Y |
| 6 | err_file_available | boolean | N |
| 7 | transaction_date | timestamp with time zone | N |
| 8 | transaction_by | character varying(50) | N |
| 9 | created_date | timestamp with time zone | N |
| 10 | created_by | character varying(50) | N |
| 11 | updated_date | timestamp with time zone | Y |
| 12 | updated_by | character varying(50) | Y |

<details><summary>sample rows</summary>

```json
{"rcc_tb_hd_id":"4","rcc_monthly_hd_id":"285","import_file_name":"Trial_Balance_202309_to_202309.csv","imp_file_available":true,"err_file_name":"Trial_Balance_202309_to_202309_Error","err_file_available":false,"transaction_date":"2023-10-17T07:01:40.417Z","transaction_by":"piyawat.ju","created_date":"2023-10-17T07:01:40.417Z","created_by":"piyawat.ju","updated_date":"2023-10-17T07:01:42.063Z","updated_by":"piyawat.ju"}
{"rcc_tb_hd_id":"5","rcc_monthly_hd_id":"287","import_file_name":"Trial_Balance_202309_to_202309.csv","imp_file_available":true,"err_file_name":null,"err_file_available":false,"transaction_date":"2023-10-17T07:10:49.830Z","transaction_by":"piyawat.ju","created_date":"2023-10-17T07:10:49.830Z","created_by":"piyawat.ju","updated_date":"2023-10-17T07:10:49.830Z","updated_by":"piyawat.ju"}
```
</details>
